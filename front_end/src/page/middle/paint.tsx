import { t_dim, t_point, t_shape } from "./type"
import * as fc from "fabric"

export function inside_box_x(grid:number, width:number, i:number)
{
	const y = (grid+1) % width !== 0 ? Math.floor((grid + 1)/width) : Math.floor(grid/width)
	if (y * width <= grid+i && grid+i < (y + 1) * width)
		return true
	return false
}

export function inside_box_y(grid:number, width:number, i:number, length:number)
{
	if (0 <= grid + i * width && grid + i * width < length)
		return true
	return false
}

export function get_brush_grids(
	dim:t_dim,
	point:t_point,
	mode:"UP"|"DOWN"|"LEFT"|"RIGHT"|"MIDDLE_X"|"MIDDLE_Y",
){
	const size = point.size
	const grid = point.grid
	const width = dim.w
	const dir = ["UP", "LEFT"].includes(mode) ? -1 : 1
	let output = [] as number[]
	if (["MIDDLE_X", "MIDDLE_Y"].includes(mode))
	{
		output.push(grid)
		const right=Math.floor((size+1)/2)
		const left = size % 2 === 0 ? right + 1 : right
		output = output.concat(get_brush_grids(dim,
			{...point, size: left},
			mode === "MIDDLE_X" ? "LEFT" : "UP"
		))
		output = output.concat(get_brush_grids(dim,
			{...point, size: right},
			mode === "MIDDLE_X" ? "RIGHT" : "DOWN"
		))
		return output
	}
	let i = 1
	while (i < size)
	{
		if (["LEFT", "RIGHT"].includes(mode) && inside_box_x(grid, width, i*dir))
			output.push(i*dir + grid)
		if (["UP", "DOWN"].includes(mode) 
			&& inside_box_y(grid, width, i*dir, width * dim.h))
			output.push(i*width*dir + grid)
		i += 1
	}
	return output
}

export function get_point_grids(
	dim:t_dim,
	point:t_point,
	mode:"LEFT"|"RIGHT"|"MIDDLE_X" = "MIDDLE_X",
	last:number|undefined = undefined
){
	const size = last ? last : point.size
	const grid = point.grid
	const dir = "LEFT" === mode ? -1 : 1
	let output = [] as number[]
	if (mode === "MIDDLE_X")
	{
		output = output.concat(get_brush_grids(dim, point, "MIDDLE_Y"))
		const right=Math.floor((size+1)/2)
		const left = size % 2 === 0 ? right + 1 : right
		output = output.concat(get_point_grids(dim, point, "LEFT", left))
		output = output.concat(get_point_grids(dim, point,"RIGHT", right))
		return output
	}
	let i = 1
	while (i < size)
	{
		if (inside_box_x(grid, dim.w, i*dir))
			output = output.concat(get_brush_grids(dim,
			{...point, grid:i*dir + grid}, "MIDDLE_Y"))
		i += 1
	}
	return output
}

export function update_grids(grids:number[], target:fc.Polyline[], 
	rgb:string|undefined) {
	let i = 0
	while (i < grids.length)
	{
		if (!rgb)
			target[grids[i]].set({fill: "#00000000"});
		else
			target[grids[i]].set({fill: rgb});
		i += 1
	}
}

export function draw_straight_line(dim:t_dim, shape:t_shape)
{
	let output = []
	const point_1_x = shape.grid_1 % dim.w
	const point_1_y = Math.floor(shape.grid_1 / dim.w)
	const point_2_x = shape.grid_2 % dim.w
	const point_2_y = Math.floor(shape.grid_2 / dim.w)
	const mode = Math.abs(point_1_x - point_2_x) < Math.abs(point_1_y - point_2_y) ? "Y" : "X"
	let start_x = point_1_x <= point_2_x ? point_1_x : point_2_x
	let stop_x = point_1_x <= point_2_x ? point_2_x : point_1_x
	let start_y = point_1_x <= point_2_x ? point_1_y : point_2_y
	let stop_y = point_1_x <= point_2_x ? point_2_y : point_1_y
	let pivot = point_1_x <= point_2_x ? shape.grid_1 : shape.grid_2
	if (Math.abs(point_1_x - point_2_x) < Math.abs(point_1_y - point_2_y))
	{
		start_x = point_1_y <= point_2_y ? point_1_y : point_2_y
		stop_x = point_1_y <= point_2_y ? point_2_y : point_1_y
		start_y = point_1_y <= point_2_y ? point_1_x : point_2_x
		stop_y = point_1_y <= point_2_y ? point_2_x : point_1_x
		pivot = point_1_y <= point_2_y ? shape.grid_1 : shape.grid_2
	}
	const dir = stop_y - start_y >= 0 ? 1 : -1
	const diff_x = stop_x - start_x
	const diff_y = Math.abs(stop_y - start_y)
	let decision = 2 * diff_y - diff_x
	let i = 0
	// WHEN i == 0
	// 		down <= mid <= up
	// 			y_0 <= (diff_y/diff_x)*1 + y_0 <= y_0 + 1
	// 			diff_x * y_0 <= diff_y + diff_x * y_0 <= diff_x * y_0 + diff_x
	// 		up - mid <= mid - down ? output.push(up) : output.push(down)
	// 			0 <= diff_y <= diff_x
	// 			diff_x - diff_y <= diff_y
	// 			0 <= 2 * diff_y - diff_x
	// WHEN i > 0
	// 		down <= mid <= up
	//			y <= (diff_y/diff_x)*i + y_0 <= y + 1
	//			diff_x * y <= diff_y * i + diff_x * y_0 <= diff_x * y + diff_x
	//			0 <= diff_y * i + diff_x * y_0 - diff_x * y <= diff_x
	//			0 <= diff_y * i + diff_x * (y_0 - y) <= diff_x
	// 		up - mid <= mid - down ? output.push(up) : output.push(down)
	//			diff_x - (diff_y * i + diff_x * (y_0 - y)) <= diff_y * i + diff_x * (y_0 - y)
	//			diff_x <= 2 * diff_y * i + 2 * diff_x * (y_0 - y)
	//			0 <= 2 * diff_y * i + 2 * diff_x * (y_0 - y) - diff_x
	//			0 <= 2 * diff_y * i - diff_x + 2 * diff_x * (y_0 - y)
	while (i < stop_x - start_x)
	{
		output.push(pivot)
		if (decision >= 0)
		{
			decision -= 2 * diff_x
			if (mode === "X")
				pivot += dim.w * dir
			else
				pivot += dir
		}
		if (mode === "X")
			pivot += 1
		else
			pivot += dim.w
		decision += 2 * diff_y
		i += 1
	}
	output.push(pivot)
	return output
}

export function draw_thicker_straight_line(dim:t_dim, shape:t_shape)
{
	let line = draw_straight_line(dim, shape)
	let output = [] as number[]
	let i = 0
	while (i < line.length)
	{
		output = output.concat(get_point_grids(dim, {size:shape.size, grid:line[i]}))
		i += 1
	}
	return output
}

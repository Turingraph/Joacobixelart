import { scale_vector, vector_addition } from "../../utils/linear_algebra";
import { hex_to_rgb, rgb_to_hex } from "../../utils/rgb_func";
import { t_canvas_grid, valid_2d } from "./utils";

export function paint_1_grid(
	arr:t_canvas_grid[][],
	grid:[number,number],
	rgb:undefined|string|boolean
){
	if (typeof rgb === "boolean")
	{
		arr[grid[0]][grid[1]].select = rgb
		return arr
	}
	arr[grid[0]][grid[1]].rgb = rgb
	return arr
}

export function paint_brush(
	arr:t_canvas_grid[][],
	rgb:undefined|string|boolean,
	grid:[number,number],
	size:number,
	mode:"UP"|"DOWN"|"LEFT"|"RIGHT"|"MIDDLE_X"|"MIDDLE_Y"
){
	if (size < 1)
		return arr
	if (["MIDDLE_X", "MIDDLE_Y"].includes(mode))
	{
		arr = paint_brush(
			arr,
			rgb,
			grid,
			size % 2 === 0 ? size/2 + 1 : size/2,
			"MIDDLE_X" === mode ? "LEFT" : "UP"
		)
		arr = paint_brush(
			arr,
			rgb,
			grid,
			size/2,
			"MIDDLE_X" === mode ? "RIGHT" : "DOWN"
		)
		return arr
	}
	arr = paint_1_grid(arr, grid, rgb)
	let i = 1 * (mode === "UP" ? -1 : 1)
	let j = 1 * (mode === "LEFT" ? -1 : 1)
	if (["UP", "DOWN"].includes(mode))
		j = 0
	else
		i = 0
	while (Math.abs(i) < size && valid_2d(
		arr.length,
		grid[0] + i,
		arr[i].length,
		grid[1] + j
	))
	{
		arr = paint_1_grid(arr, [grid[0] + i, grid[1]], rgb)
		if (i > 0)
			i += 1 * (mode === "UP" ? -1 : 1)
		if (j > 0)
			j += 1 * (mode === "LEFT" ? -1 : 1)
	}
	return arr
}

export function paint_point(
	arr:t_canvas_grid[][],
	rgb:undefined|string|boolean,
	grid:[number,number],
	size:number,
){
	let i = 0
	while (i < size/2 && valid_2d(
		arr.length,
		grid[0] + i,
		arr[i].length,
		grid[1]
	))
	{
		arr = paint_brush(
			arr,
			rgb,
			[grid[0] + i, grid[1]],
			size,
			"MIDDLE_X"
		)
		arr = paint_brush(
			arr,
			rgb,
			[grid[0] - i, grid[1]],
			size,
			"MIDDLE_X"
		)
	}
	if (size % 2 === 0)
	{
		arr = paint_brush(
			arr,
			rgb,
			[grid[0] - i, grid[1]],
			size,
			"MIDDLE_X"
		)
	}
	return arr
}

export function paint_rectangle_donut(
	arr:t_canvas_grid[][],
	rgb:undefined|string|boolean,
	size:number,
	rectangle:[number,number,number,number]
){
	let up    = rectangle[0] 
	const down  = rectangle[1]
	const right = rectangle[3]
	while (up <= down)
	{
		let left  = rectangle[2]
		if (up < rectangle[0] + size || up > rectangle[1] - size)
		{
			while (left <= right)
			{
				arr = paint_brush(arr, rgb, [up, left], 1,"UP")
				left += 1
			}
		}
		else
		{
			arr = paint_brush(arr, rgb, [up, left], size, "RIGHT")
			arr = paint_brush(arr, rgb, [up, right - left], size, "LEFT")
		}
		up += 1
	}
	return arr
}

export function paint_rectangle(
	arr:t_canvas_grid[][],
	rgb:undefined|boolean|string,
	rectangle:[number,number,number,number]
){
	const up  = rectangle[0]
	const down  = rectangle[1]
	const left = rectangle[2]
	const right = rectangle[3]
	let i = 0
	while (i <= down - up)
	{
		let j = 0
		while (j <= right - left)
		{
			arr = paint_1_grid(arr, [up + i, left + j], rgb)
			j += 1
		}
		i += 1
	}
	return arr
}

export function paint_outside_rectangle(
	arr:t_canvas_grid[][],
	rgb:undefined|boolean|string,
	rectangle:[number,number,number,number]
){
	const up  = rectangle[0]
	const down  = rectangle[1]
	const left = rectangle[2]
	const right = rectangle[3]
	let i = 0
	while (i < arr.length)
	{
		let j = 0
		while (j < arr[i].length)
		{
			if ((i < up || i > down || j < left || j > right) 
				&& valid_2d(arr.length, i, arr[i].length, j))
				arr = paint_1_grid(arr, [i, j], rgb)
			j += 1
		}
		i += 1
	}
	return arr
}

export function paint_scale(
	arr:t_canvas_grid[][],
	rgb:undefined|boolean|string,
	grid:[number,number],
	width:number,
	height:number
){
	let i = 0
	while (i < height)
	{
		arr = paint_brush(arr, rgb, grid, width, "RIGHT")
		i += 1
	}
	return arr
}

export function get_average_rgb(
	arr:t_canvas_grid[][],
	rectangle:[number,number,number,number]
){
	let output = [0,0,0] as number[]
	let i = rectangle[0]
	while (i <= rectangle[1] && valid_2d(
		arr.length, i,
		arr[i].length, 0))
	{
		let j = rectangle[2]
		while (j <= rectangle[3] && valid_2d(
			arr.length, i,
			arr[i].length, j))
		{
			output = vector_addition(output, hex_to_rgb(arr[i][j].rgb))
			j += 1
		}
		i += 1
	}
	output = scale_vector(
		output, 1/(rectangle[1]-rectangle[0]+1)*(rectangle[3]-rectangle[2]+1))
	return rgb_to_hex(output)
}

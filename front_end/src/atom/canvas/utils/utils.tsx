import { t_canvas, t_canvas_grid } from "./type"

export function swap_less_than(a:number, b:number)
{
	if (a < b)
	{
		return [a, b]
	}
	return [b, a]
}

// export function clone_2d_arr<t>(arr:t[][]){
// 	let output = [] as t[][]
// 	let i = 0
// 	while (i < arr.length)
// 	{
// 		output.push(structuredClone(arr[i]))
// 		i += 1
// 	}
// 	return output
// }

const warning_access_yx = "WARNING: yx ARGUMENT IS INVALID. (atom/canvas/utils/utils.tsx/access_yx)"

export function access_yx(yx:[number,number], width:number)
{
	if (width <= yx[1])
		alert(warning_access_yx)
	return width*yx[0] + yx[1]
}

export function get_yx(index:number, width:number)
{
	const divide = Math.floor(index/width)
	const remain = Math.floor(index % width)
	return [divide, remain]
}

export function flip_index_x(index:number, width:number)
{
	const divide = Math.floor(index/width)
	const remain = Math.floor(index % width)
	return width * (divide + 1) - remain - 1
}

export function flip_index_y(index:number, height:number, width:number)
{
	const divide = Math.floor(index/width)
	const remain = Math.floor(index % width)
	return width * (height - divide - 1) + remain
}

export function valid_2d(height:number, y:number, width:number,  x:number)
{
	if (0 <= y && y < height && 0 <= x && x < width)
	{
		return true
	}
	return false
}

export function init_canvas(height:number, width:number){
	if (width <= 0 || height <= 0)
	{
		return { width:0, arr:[] } as t_canvas
	}
	let output = [] as t_canvas_grid[]
	let i = 0
	while (i < width * height)
	{
		output.push({
				rgb:undefined,
				plan_rgb:undefined,
				select:false
			})
		i += 1
	}
	return { width:width, arr:output } as t_canvas
}

export function is_defined_grid<t extends object, k extends keyof t>(grid:t, key:k)
{
	if (grid[key] === undefined)
	{
		return false
	}
	return true
}

export function valid_height(grid:number, height:number, width:number)
{
	if (Math.floor(grid/width) < height && 0 <= grid)
		return true
	return false
}

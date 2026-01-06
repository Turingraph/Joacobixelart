import { get_average_rgb, paint_scale } from "../utils/paint"
import { init_canvas, is_defined_grid, t_canvas_grid } from "../utils/utils"
import { get_down, get_left, get_right, get_up, left_adj, middle_adj, right_adj } from "./center"

export function crop(
	arr:t_canvas_grid[][],
	up:number,
	down:number,
	left:number,
	right:number,
){
	let new_arr = init_canvas(down - up, right - left)
	let i = 0
	while (i <= down - up)
	{
		let j = 0
		while (j <= right - left)
		{
			new_arr[i][j] = arr[up + i][left + j]
			j += 1
		}
		i += 1
	}
	return new_arr
}

export function resize(
	arr:t_canvas_grid[][], 
	height:number, width:number)
{
	let new_arr = init_canvas(height, width)
	let i = 0
	while (i < arr.length && i < new_arr.length)
	{
		let j = 0
		while (j < arr[i].length && j < new_arr[i].length)
		{
			new_arr[i][j] = arr[i][j]
			j += 1
		}
		i += 1
	}
	return new_arr
}

export function center(
	arr:t_canvas_grid[][],
	mode:"LEFT"|"MIDDLE"|"RIGHT"|"NONE",
	axis:"X"|"Y")
{
	const left = get_left(arr, is_defined_grid) === undefined ? get_left(arr, is_defined_grid) as number: 0
	const right = get_right(arr, is_defined_grid) === undefined ? get_right(arr, is_defined_grid) as number: arr[0].length - 1
	const up = get_up(arr, is_defined_grid) === undefined ? get_up(arr, is_defined_grid) as number: 0
	const down = get_down(arr, is_defined_grid) === undefined ? get_down(arr, is_defined_grid) as number: arr.length - 1
	if (mode === "NONE" || (left === 0 && right === arr[0].length))
		return arr
	if (mode === "LEFT") {
		if (axis === "X")
		{
			return left_adj(arr, "rgb", right, left, axis)
		}
		return left_adj(arr, "rgb", down, up, axis)
	}
	if (mode === "MIDDLE") {
		const output = init_canvas(arr.length, arr[0].length)
		if (axis === "X")
		{
			return middle_adj(arr, "rgb", right, left, output, axis)
		}
		return middle_adj(arr, "rgb", down, up, output, axis)
	}
	if (mode === "RIGHT") {
		if (axis === "X")
		{
			return right_adj(arr, "rgb", right, left, axis)
		}
		return right_adj(arr, "rgb", down, up, axis)
	}
	return arr
}

export function times_size(
	arr:t_canvas_grid[][],
	scale_w:number,
	scale_h:number
){
	if (scale_w < 2 && scale_h < 2)
		return arr
	if (scale_w < 2)
		scale_w = 1
	if (scale_h < 2)
		scale_h = 1
	let output = init_canvas(arr.length * scale_h, arr[0].length * scale_w)
	let i = 0
	while (i < arr.length)
	{
		let j = 0
		while (j < arr[i].length)
		{
			output = paint_scale(
				output, 
				arr[i][j].rgb, 
				[scale_h * i, scale_w * j], 
				scale_w, scale_h)
			j += 1
		}
		i += 1
	}
	return output
}

export function divide_size(
	arr:t_canvas_grid[][],
	scale_w:number,
	scale_h:number
){
	if (scale_w < 2 && scale_h < 2)
		return arr
	if (scale_w < 2)
		scale_w = 1
	if (scale_h < 2)
		scale_h = 1
	const new_height = Math.floor(arr.length/scale_h)
	const new_width = Math.floor(arr[0].length/scale_w)
	let output = init_canvas(
		new_height,
		new_width)
	let i = 0
	while (i < new_height)
	{
		let j = 0
		while (j < new_width)
		{
			output[i][j].rgb = get_average_rgb(
				arr, [i, i*scale_h, j, j*scale_w])
			j += 1
		}
		i += 1
	}
	return output
}

// import { hex_to_rgb, rgb_to_hex } from "../../rgb/rgb_func"
import { hex_to_rgb, rgb_to_hex } from "../../utils/rgb_func"
import { flip_index_x, flip_index_y, init_canvas, t_canvas_grid } from "../utils/utils"

export function flip(arr:t_canvas_grid[][])
{
	let i = 0
	while (i < arr.length)
	{
		let j = 0
		while (j < arr[i].length)
		{
			let k = flip_index_x([i,j], arr[i].length)
			let temp = arr[k[0]][k[1]].rgb
			arr[k[0]][k[1]].rgb = arr[i][j].rgb
			arr[i][j].rgb = temp
			j += 1
		}
		i += 1
	}
	return arr
}

export function up_side_down(arr:t_canvas_grid[][])
{
	let i = 0
	while (i < arr.length)
	{
		let j = 0
		while (j < arr[i].length)
		{
			let k = flip_index_y([i,j], arr.length)
			let temp = arr[k[0]][k[1]].rgb
			arr[k[0]][k[1]].rgb = arr[i][j].rgb
			arr[i][j].rgb = temp
			j += 1
		}
		i += 1
	}
	return arr
}

export function rotate(arr:t_canvas_grid[][])
{
	let new_arr = init_canvas(arr[0].length, arr.length)
	let i = 0
	while (i < arr.length)
	{
		let j = 0
		while (j < arr[i].length)
		{
			new_arr[j][i] = arr[i][arr[i].length - 1 - j]
			j += 1
		}
		i += 1
	}
	return new_arr
}

// https://www.geeksforgeeks.org/python/
// python-grayscaling-of-images-using-opencv/
export function gray(arr:t_canvas_grid[][])
{
	let i = 0
	while (i < arr.length)
	{
		let j = 0
		while (j < arr[i].length)
		{
			if (arr[i][j].rgb !== undefined)
			{
				let update_rgb = hex_to_rgb(arr[i][j].rgb)
				update_rgb[0] *= 0.2989
				update_rgb[1] *= 0.587
				update_rgb[2] *= 0.114
				update_rgb[0] = Math.floor(update_rgb[0])
				update_rgb[1] = Math.floor(update_rgb[1])
				update_rgb[2] = Math.floor(update_rgb[2])
				arr[i][j].rgb = rgb_to_hex(update_rgb)
			}
			j += 1
		}
		i += 1
	}
	return arr
}

/*
// https://computergraphics.stackexchange.com/
// questions/39/how-is-gaussian-blur-implemented
export function convolution(arr:t_canvas_grid[][])
{
	let output = init_canvas(arr.length, arr[0].length)
	let i = 0
	while (i < arr.length)
	{
		let j = 0
		while (j < arr[0].length)
		{
			j += 1
		}
		i += 1
	}
	return output
}
*/

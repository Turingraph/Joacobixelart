import { paint_brush, paint_point } from "../utils/paint";
import { t_canvas_grid } from "../utils/utils";

export function replace_rgb(
	arr:t_canvas_grid[][], 
	old_rgb:string|undefined, 
	new_rgb:string|undefined)
{
	let i = 0
	while (i < arr.length)
	{
		let j = 0
		while (j < arr[i].length)
		{
			if (arr[i][j].rgb === old_rgb)
			{
				arr[i][j].rgb = new_rgb
			}
			j += 1
		}
		i += 1
	}
	return arr
}

/*
ChatGPT advice me to use Bresenham’s line algorithm. I will change this later in future.

Reference
*	https://www.geeksforgeeks.org/dsa/bresenhams-line-generation-algorithm/
*	https://youtu.be/CceepU1vIKo?si=F0I2gAFN1RbIlyYr
*/

/*
// time: O(x_2 - x_1) = O(n)
// space: O(1) (extra space beyonds arr)
export function bresenham_line(
	arr:t_canvas_grid[][],
	rgb:undefined|boolean|string,
	size:number,
	grid_1:[number,number],
	grid_2:[number,number],
){
	// assume that size = 1
	size = 1
	// assume that x_1 <= x_2
	let x_1 = grid_1[0]
	let x_2 = grid_2[0]
	// assume that y_1 <= y_2
	let y_1 = grid_1[1]
	let y_2 = grid_2[1]

	const d_x = x_2 - x_1
	const d_y = y_2 - y_1
	// set diff to match *** case no.1, i = 1 ***
	let diff = 2 * d_y - d_x
	let regression = 0
	let i = 0
	while (i <= x_2 - x_1)
	{
		arr = paint_brush(
			arr,
			rgb,
			[y_1 + regression, x_1 + i],
			size,
			"MIDDLE_Y"
		)
		// *** general initial case, i = i ***
		// |true_y - (y + 1)| <= |true_y - y|, implies that y + 1 is closer to mid point than y. 
		// |(d_y/d_x)i + y_1 - y - 1| <= |(d_y/d_x)i + y_1 - y|
		// y + 1 - (d_y/d_x)i - y_1 <= (d_y/d_x)i + y_1 - y, because y <= (d_y/d_x)*i + y_1 <= y + 1
		// y*d_x + d_x - d_y*i - y_1*d_x <= d_y*i + y_1*d_x - y*d_x
		// 0 <= 2d_y*i + (y_1-1)*d_x - 2y*d_x + y_1*d_x
		// 0 <= 2d_y*i + (2y_1-1)*d_x - 2y*d_x
		// 0 <= 2d_y*i + 2y_1*d_x - d_x - 2y*d_x

		// *** next case when i = i + 1 ***
		// 0 <= 2d_y*i + 2d_y + 2y_1*d_x - d_x - 2y*d_x

		// *** next case if y = y + 1 ***
		// 0 <= 2d_y*i + 2y_1*d_x - d_x - 2(y + 1)*d_x
		// 0 <= 2d_y*i + 2y_1*d_x - d_x - 2y*d_x - 2d_x

		// *** case no.0, i = 0 ***
		// y*d_x + d_x - d_y*i - y_1*d_x <= d_y*i + y_1*d_x - y*d_x
		// y*d_x + d_x - y_1*d_x <= y_1*d_x - y*d_x
		// y_1*d_x + d_x - y_1*d_x <= y_1*d_x - y_1*d_x
		// d_x <= 0, means that
		// *	d_x < 0, which is always false because d_x = d_2 - d_1 and d_1 <= d_2
		// *	d_x === 0, then paint arr[y_1][x_1] because it is the starting point.

		// *** case no.1, i = 1 ***
		// i = 1 implies that 
		// *	y = y_1 (because y = the current i-th y and the 1st current y is y_1) 
		// *	and 0 <= 2d_y - d_x

		if (diff >= 0)
		{
			// update diff to match *** next case if y = y + 1 ***
			diff -= 2*d_x
			regression += 1
		}
		// update diff to match *** next case when i = i + 1 ***
		diff += 2*d_y
		i += 1
	}
}
*/

export function bresenham_line(
	arr:t_canvas_grid[][],
	rgb:undefined|boolean|string,
	size:number,
	grid_1:[number,number],
	grid_2:[number,number],
){
	let mode = "X" as "X"|"Y"
	if (Math.abs(grid_1[0] - grid_2[0]) > Math.abs(grid_1[1] - grid_2[1]))
		mode = "Y"
	const dim_x = mode === "X" ? 1 : 0
	const dim_y = mode === "X" ? 0 : 1
	const x_1 = grid_1[dim_x] < grid_2[dim_x] ? grid_1[dim_x] : grid_2[dim_x]
	const x_2 = grid_1[dim_x] < grid_2[dim_x] ? grid_2[dim_x] : grid_1[dim_x]
	const y_1 = grid_1[dim_x] < grid_2[dim_x] ? grid_1[dim_y] : grid_2[dim_y]
	const y_2 = grid_1[dim_x] < grid_2[dim_x] ? grid_2[dim_y] : grid_1[dim_y]
	const d_x = x_2 - x_1
	let d_y = y_2 - y_1
	const dir = d_y > 0 ? 1 : -1
	d_y *= dir
	let diff = 2 * d_y - d_x
	let regression = 0
	let i = 0
	while (i <= x_2 - x_1)
	{
		if (i === 0)
			arr = paint_point(
				arr,
				rgb,
				mode === "X" ? [y_1, x_1] : [x_1, y_1],
				size)
		else if (i === x_2 - x_1)
			arr = paint_point(
				arr,
				rgb,
				mode === "X" ? [y_2, x_2] : [x_2, y_2],
				size)
		else
			arr = paint_brush(
				arr,
				rgb,
				mode === "X" ? [y_1 + regression, x_1 + i] : [x_1 + i, y_1 + regression],
				size,
				"MIDDLE_Y")
		if (diff >= 0)
		{
			diff -= 2*d_x
			regression += dir
		}
		diff += 2*d_y
		i += 1
	}
	return arr
}

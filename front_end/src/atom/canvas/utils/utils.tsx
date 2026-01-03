export type t_canvas_grid = {
	select:boolean,
	rgb:string|undefined
}

export function swap_less_than(a:number, b:number)
{
	if (a < b)
	{
		return [a, b]
	}
	return [b, a]
}

export function clone_2d_arr<t>(arr:t[][]){
	let output = [] as t[][]
	let i = 0
	while (i < arr.length)
	{
		output.push(structuredClone(arr[i]))
		i += 1
	}
	return output
}

export function flip_index_x(index:[number,number], width:number)
{
	return [index[0], width - index[1] - 1] as [number,number]
}

export function flip_index_y(index:[number,number], height:number)
{
	return [height - index[0] - 1, index[1]] as [number,number]
}

export function valid_2d(height:number, y:number,width:number,  x:number)
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
		return [] as t_canvas_grid[][]
	}
	let output = [] as t_canvas_grid[][]
	let i = 0
	while (i < height)
	{
		let j = 0
		let row = [] as t_canvas_grid[]
		while (j < width)
		{
			row.push({
				rgb:undefined,
				select:false
			})
			j += 1
		}
		output.push(structuredClone(row))
		i += 1
	}
	return output
}

export function is_defined_grid<t extends {rgb:any}>(grid:t)
{
	if (grid.rgb === undefined)
	{
		return false
	}
	return true
}

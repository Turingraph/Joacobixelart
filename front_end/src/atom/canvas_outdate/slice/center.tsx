export function get_up<t>(arr:t[][], is_exists:(input:t)=>boolean)
{
	let y = undefined
	let i = 0
	while (i < arr.length)
	{
		let j = 0
		while (j < arr[i].length)
		{
			if (y === undefined && is_exists(arr[i][j]) === true)
				y = i
			j += 1
		}
		i += 1
	}
	return y === undefined ? 0 : y as number
}

export function get_down<t>(arr:t[][], is_exists:(input:t)=>boolean)
{
	let y = undefined
	let i = 0
	while (i < arr.length)
	{
		let j = 0
		while (j < arr[i].length)
		{
			if ((y === undefined || y <= i) && is_exists(arr[i][j]) === true)
				y = i
			j += 1
		}
		i += 1
	}
	return y === undefined ? 0 : y as number
}

export function get_left<t>(arr:t[][], is_exists:(input:t)=>boolean)
{
	let y = undefined
	let i = 0
	while (i < arr.length)
	{
		let j = 0
		let sub_y = undefined
		while (j < arr[i].length)
		{
			if (sub_y === undefined && is_exists(arr[i][j]) === true)
				sub_y = j
			j += 1
		}
		if (y === undefined || (sub_y !== undefined && sub_y <= y))
			y = sub_y
		i += 1
	}
	return y === undefined ? 0 : y as number
}

export function get_right<t>(arr:t[][], is_exists:(input:t)=>boolean)
{
	let y = undefined
	let i = 0
	while (i < arr.length)
	{
		let j = 0
		let sub_y = undefined
		while (j < arr[i].length)
		{
			if ((sub_y === undefined || sub_y <= j) && is_exists(arr[i][j]) === true)
				sub_y = j
			j += 1
		}
		if (y === undefined || (sub_y !== undefined && y <= sub_y))
			y = sub_y
		i += 1
	}
	return y === undefined ? 0 : y as number
}

export function left_adj<t extends object, k extends keyof t>(
	arr:t[][], 
	key:k,
	right:number,
	left:number,
	axis:"X"|"Y")
{
	const length = axis === "X" ? arr.length : arr[0].length
	const d_x = right - left
	let i = 0
	while (i < length && d_x > 1)
	{
		let j = 0
		while (j <= d_x)
		{
			if (axis === "X")
				arr[i][j][key] = arr[i][left + j][key]
			else
				arr[j][i][key] = arr[left + j][i][key]
			j += 1
		}
		while (j <= right)
		{
			if (axis === "X")
				arr[i][j][key] = undefined as any
			else
				arr[j][i][key] = undefined as any
			j += 1
		}
		i += 1
	}
	return arr
}

export function right_adj<t extends object, k extends keyof t>(
	arr:t[][], 
	key:k,
	right:number,
	left:number,
	axis:"X"|"Y")
{
	const d_x = right - left
	const length = axis === "X" ? arr.length : arr[0].length
	let i = 0
	while (i < length && d_x > 1)
	{
		const sub_length = axis === "X" ? arr[i].length - 1 : arr.length - 1
		let j = sub_length
		while (j >= sub_length - 1 - (d_x))
		{
			if (axis === "X")
				arr[i][j][key] = arr[i][j - (sub_length - 1 - right)][key]
			else
				arr[j][i][key] = arr[j - (sub_length - 1 - right)][i][key]
			j -= 1
		}
		while (j >= left)
		{
			if (axis === "X")
				arr[i][j][key] = undefined as any
			else
				arr[j][i][key] = undefined as any
			j -= 1
		}
		i += 1
	}
	return arr
}

export function middle_adj<t extends object, k extends keyof t>(
	arr:t[][], 
	key:k,
	right:number,
	left:number,
	output:t[][],
	axis:"X"|"Y")
{
	const d_x = right - left
	const length = axis === "X" ? arr.length : arr[0].length
	const sub_length = axis === "X" ? arr[0].length - 1 : arr.length - 1
	const empty_space = left + (sub_length - right)
	const init_j = Math.floor(empty_space/2) + (empty_space % 2 === 1 ? 1 : 0)
	let i = 0
	while (i < length && d_x > 1)
	{
		let j = 0
		while (j <= d_x)
		{
			if (axis === "X")
				output[i][init_j + j][key] = arr[i][left + j][key]
			else
				output[init_j + j][i][key] = arr[left + j][i][key]
			j += 1
		}
		i += 1
	}
	return output
}

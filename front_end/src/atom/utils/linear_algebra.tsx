export function vector_addition(v1:number[], v2:number[])
{
	let output = [] as number[]
	let i = 0
	while (i < v1.length && i < v2.length)
	{
		output.push(v1[i] + v2[i])
		i += 1
	}
	return output
}

export function scale_vector(v:number[], scale:number)
{
	let i = 0
	while (i < v.length)
	{
		v[i] *= scale
		i += 1
	}
	return v
}

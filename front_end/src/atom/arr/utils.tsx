export function compare_every_pair_of_items<t>(arr1:t[], arr2:t[])
{
	if (arr1.length !== arr2.length)
	{
		return false
	}
	let i = 0
	while (i < arr1.length)
	{
		if (arr1[i] !== arr2[i])
		{
			return false
		}
	}
	return true
}

export function is_arr_has<t extends object, k extends keyof t>(arr:t[], target:t[k], key:k)
{
	const keys = new Set(arr.map(item => item[key]))
	if (keys.has(target) === true)
	{
		return true
	}
	return false
}
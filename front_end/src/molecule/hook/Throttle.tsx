import { RefObject } from "react";
import * as a from "../../atom/type/alias";

export function RefThrottle<t>(
	Ref_Time:RefObject<number>, 
	Ref_Input:RefObject<t|undefined>, 
	delay:number,
	func:a.t_func_x<t>
)
{
	const now = Date.now();
	if (now - Ref_Time.current >= delay)
	{
		Ref_Time.current = now
		if (Ref_Input.current !== undefined)
			func(Ref_Input.current)
		Ref_Input.current = undefined
	}
}

export function f_throttle(
	Ref_Time:RefObject<number>, 
	delay:number,
	func:a.t_func
)
{
	const now = Date.now();
	if (now - Ref_Time.current >= delay)
	{
		Ref_Time.current = now
		func()
	}
}

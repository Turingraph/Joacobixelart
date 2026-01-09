import { RefObject, useRef, useState } from "react";
import { t_setss_arr } from "../../atom/arr/act";
import * as a from "../../atom/type/alias";

export function parent_drag_over(
	e:any, 
	Ref_DragNewIndex:RefObject<number|undefined>, 
	index:number){
	e.preventDefault()
	Ref_DragNewIndex.current = index
}

export function parent_drag_enter<t extends {id:number}, k extends keyof t>(
	// e:DragEvent, 
	ssset_arr:t_setss_arr<t, k>,
	Ref_DragOldIndex:RefObject<number|undefined>, 
	Ref_DragNewIndex:RefObject<number|undefined>, 
	setSS_DragOldIndex:a.t_setss<number|undefined>
){
	if (Ref_DragOldIndex.current !== undefined && Ref_DragNewIndex.current !== undefined)
	{
		ssset_arr({
			type:"DRAG",
			new_index:Ref_DragNewIndex.current,
			old_index:Ref_DragOldIndex.current
		})
		setSS_DragOldIndex(undefined)
		Ref_DragOldIndex.current = undefined
		Ref_DragNewIndex.current = undefined
	}
}

export function child_drag_start(
	Ref_DragOldIndex:RefObject<number|undefined>, 
	setSS_DragOldIndex:a.t_setss<number|undefined>,
	index:number
){
	Ref_DragOldIndex.current = index
	setSS_DragOldIndex(index)
}

export function child_mouse_down(
	Ref_DragOldIndex:RefObject<number|undefined>, 
	index:number
){
	Ref_DragOldIndex.current = index
}

export type t_use_drag_arr = {
	Ref_DragOldIndex:RefObject<number|undefined>,
	Ref_DragNewIndex:RefObject<number|undefined>,
	SS_DragOldIndex:number,
	setSS_DragOldIndex:a.t_setss<undefined|number>
}

export default function useDragArr()
{
	const Ref_DragOldIndex = useRef<undefined|number>(undefined)
	const Ref_DragNewIndex = useRef<undefined|number>(undefined)
	const [SS_DragOldIndex, setSS_DragOldIndex] = useState<undefined|number>(undefined)
	return {
		Ref_DragOldIndex:Ref_DragOldIndex,
		Ref_DragNewIndex:Ref_DragNewIndex,
		SS_DragOldIndex:SS_DragOldIndex,
		setSS_DragOldIndex:setSS_DragOldIndex
	}
}

/*
// setSS_DragOldIndex is used for indicating which item is dragged at a time.
style={{opacity:index === SS_DragOldIndex ? "0.5" : "1"}}
*/

/*
This file is used for dragged and dropped item from array in fixed position.

The item (a.k.a. child) is in child DOM element 
which in the fixed position (a.k.a. parent).
*/

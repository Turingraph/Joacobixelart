import { useLayoutEffect, RefObject } from "react";
import { t_setss_arr, t_use_arr } from "../../atom/arr/act_arr";
import { t_2d_arr } from "../../atom/arr/type";
import { edit } from "../../atom/arr/function";

// https://www.w3schools.com/react/react_customhooks.asp

/*
This hook is used for deleting item from t_use_arr array via clicking.

I use useRef and useLayoutEffect to store id of deleted item when 
React run test twice.
If I use only useReducer, then the deleted item will be 
the "second" wrong item.
*/

export const useClickDeleteArr = 
	<t extends {id:number}, k extends keyof t>(
		Ref_DeleteId:RefObject<number|undefined>, 
		setSS_Arr:t_setss_arr<t, k>) => {
	useLayoutEffect(()=>{
		if (Ref_DeleteId.current !== undefined)
		{
			setSS_Arr({
				type:"DELETE",
				id:Ref_DeleteId.current
			})
			Ref_DeleteId.current = undefined
		}
	})
};

export const useClickPushArr = 
	<t extends {id:number}, k extends keyof t>(
		Ref_Input:RefObject<t|undefined>, 
		setSS_Arr:t_setss_arr<t, k>
	) => {
	useLayoutEffect(()=>{
		if (Ref_Input.current !== undefined)
		{
			setSS_Arr({
				type:"PUSH",
				input:Ref_Input.current
			})
			Ref_Input.current = undefined
		}
	})
};

// export const useClickEditArr2D = 
// 	<t extends {id:number}>(
// 		Ref_ID: RefObject<[number, number] | undefined>,
// 		SS_Arr: t_use_arr<t_2d_arr<t>, "id" | "arr">, 
// 		input: t) => {
// 	useLayoutEffect(()=>{
// 		if (Ref_ID.current !== undefined)
// 		{
// 			let sub_arr = [...SS_Arr.ss]
// 				.filter((item)=>Ref_ID.current !== undefined && item.id === Ref_ID.current[0])[0]
// 			sub_arr.arr = edit(
// 				sub_arr.arr,
// 				sub_arr.arr.filter((jtem)=>Ref_ID.current !== undefined && jtem.id === Ref_ID.current[1])[0].id,
// 				input
// 			)
// 			SS_Arr.setss({
// 				type:"EDIT",
// 				id:Ref_ID.current[0],
// 				input:sub_arr
// 			})
// 			Ref_ID.current = undefined
// 		}
// 	})
// }

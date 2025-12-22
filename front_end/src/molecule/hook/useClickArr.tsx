import { useLayoutEffect, RefObject } from "react";
import { t_setss_arr } from "../../atom/arr/act_arr";

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

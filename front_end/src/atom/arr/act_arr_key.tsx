import act_arr, { BASIC_ARR_OPERATIONS, t_act_arr, t_ss_arr } from "./act_arr"
import * as f from "./function"

//  type action array with key
export type t_act_arr_key<
	t extends object,
    k extends keyof t> = Exclude<t_act_arr<t>, {type:"COPY"}|{type:"SORT"}> | {
    type:"SORT",
	is_ascending:boolean,
	key:k
}| {
    type:"COPY",
    index:number,
    key:k
}

export default function act_arr_key<
	t extends object,
	k extends keyof t>(
		prev_arr:t_ss_arr<t>, 
		action:t_act_arr_key<t, k>
	){
    let UPDATE_ARR = [...prev_arr.ss]
	if ([...BASIC_ARR_OPERATIONS,...["COPY", "SORT", "EDIT_KEY"]].includes(action.type) === false)
	{
		f.warning("act_arr_key.tsx")
	}
	if (BASIC_ARR_OPERATIONS.includes(action.type) === true)
	{
		UPDATE_ARR = act_arr(prev_arr, action as t_act_arr<t>).ss
	}
	if (action.type === "COPY")
	{
		UPDATE_ARR = f.copy_unique_item(prev_arr.ss, action.index, action.key)
	}
	if (action.type === "SORT")
	{
		UPDATE_ARR = f.sort_arr_key(
			UPDATE_ARR,
			action.is_ascending,
			action.key
		)
	}
	return {
		...prev_arr,
		ss:UPDATE_ARR
	} as t_ss_arr<t>
}

export type t_setss_arr_key<
	t extends object,
	k extends keyof t
> = React.ActionDispatch<[action: t_act_arr_key<t, k>]>

export type t_use_arr_key<
	t extends object,
	k extends keyof t> = {
	ss: t_ss_arr<t>,
	setss: t_setss_arr_key<t, k>
}

import * as f from "./function"

export type t_act_arr<
	t extends {id:number},
    k extends keyof t> = {
    type:"PUSH",
    input:t
}
| {
    type:"DELETE",
    id:number
}
| {
    type:"EDIT",
    id:number,
    input:t,
}
| {
    type:"SET",
    input: t[],
} | {
    type:"DRAG",
    new_index:number,
    old_index:number
} | {
    type:"SORT",
	is_ascending:boolean,
	key:k
}| {
    type:"COPY",
    index:number,
    key:k
}

export default function act_arr<
	t extends {id:number},
	k extends keyof t>(
		prev_arr:t[], 
		action:t_act_arr<t, k>
	){
    let UPDATE_ARR = [...prev_arr]
	// if (["EDIT", "PUSH", "DELETE", "SET", "DRAG", "COPY", 
	// "SORT", "EDIT_KEY"]].includes(action.type) === false)
	// {
	// 	f.warning("act_arr.tsx")
	// }
	if (action.type === "DRAG") {
		UPDATE_ARR = f.drag(
			UPDATE_ARR,
			action.new_index,
			action.old_index
		)
	}
	if (action.type === "EDIT") {
		UPDATE_ARR = f.edit(
			UPDATE_ARR,
			action.id,
			action.input
		)
	} 
	if (action.type === "PUSH") {
		UPDATE_ARR = f.push_arr(
			UPDATE_ARR,
			action.input
		)
	} 
	if (action.type === "DELETE") {
		UPDATE_ARR = f.delete_item(
			UPDATE_ARR,
			action.id
		)
	} 
	if (action.type === "SET"){
		UPDATE_ARR = action.input
	}
	if (action.type === "COPY")
	{
		UPDATE_ARR = f.copy_item(prev_arr, action.index, action.key)
	}
	if (action.type === "SORT")
	{
		UPDATE_ARR = f.sort_arr(
			UPDATE_ARR,
			action.is_ascending,
			action.key
		)
	}
	return UPDATE_ARR as t[]
}

export type t_setss_arr<
	t extends {id:number},
	k extends keyof t
> = React.ActionDispatch<[action: t_act_arr<t, k>]>

export type t_use_arr<
	t extends {id:number},
	k extends keyof t> = {
	ss: t[],
	setss: t_setss_arr<t, k>
}

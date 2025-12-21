import * as f from "./function"

//  type set state array
export type t_ss_arr<t> = {
	ss:t[],
	unique?:boolean|undefined
}

//  type action array
export type t_act_arr<t> = {
    type:"PUSH",
    input:t
}
| {
    type:"DELETE",
    index:number
}
| {
    type:"EDIT",
    index:number,
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
    type:"COPY",
    index:number
} | {
    type:"SORT",
    is_ascending:boolean
}

export const BASIC_ARR_OPERATIONS = ["EDIT", "PUSH", "DELETE", "SET", "DRAG"]

export default function act_arr<t>
    (prev_arr:t_ss_arr<t>, action:t_act_arr<t>){
    let UPDATE_ARR = [...prev_arr.ss]
    if ([...BASIC_ARR_OPERATIONS,...["COPY"]].includes(action.type) === false)
    {
        f.warning("act_arr.tsx")
    }
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
            action.index,
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
            action.index
        )
    } 
    if (action.type === "COPY" && prev_arr.unique === false) {
        UPDATE_ARR = f.copy_item(
            UPDATE_ARR,
            action.index
        )
    } 
    if (action.type === "SORT") {
        UPDATE_ARR = f.sort_arr(
            UPDATE_ARR,
            action.is_ascending
        )
    }
    if (action.type === "SET"){
        UPDATE_ARR = action.input
    }
    if (["EDIT", "PUSH", "SET"].includes(action.type) === true)
    {
        UPDATE_ARR = f.unique_arr(
            UPDATE_ARR,
            prev_arr.unique
        )
    }
    return {
        ...prev_arr,
        ss:UPDATE_ARR
    } as t_ss_arr<t>
}

/*
https://stackoverflow.com/questions/69678018/
i-wrote-a-custom-state-hook-using-usereducer-is-it-dangerous-to-use-react-ts

A "reducer" is a function that takes the previous state and an "action" and returns a new state. 
The action meant to be an instruction rather a state.
*/

export type t_setss_arr<t> = React.ActionDispatch<[action: t_act_arr<t> | {
    type:"COPY",
    index:number
}]>

export type t_use_arr<t> = {
    ss:t_ss_arr<t>,
    setss:t_setss_arr<t>
}

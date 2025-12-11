import act_arr, { t_act_arr, t_ss_arr } from "./act_arr"
import * as f from "./function"

//  type action array with key
export type t_ss_arr_key<
    t extends object[], 
    k extends keyof t[number]> = t_ss_arr<t> & {
    sort_mode?:undefined|"NO_SORT"|"SORT"|"REVERSE",
    sort_key?:undefined|k,
}

export type t_act_arr_key<
    t extends object[], 
    k extends keyof t[number]> = (t_act_arr<t[]> | {
    type:"EDIT_KEY",
    index:number,
    key:k,
    input:t[number][k],
} | {
    type:"SORT"
}| {
    type:"COPY",
    index:number,
    key:k
}) & {
    sort_mode?:undefined|"NO_SORT"|"SORT"|"REVERSE",
    sort_key?:undefined|k,
}

export default function act_arr_key<
t extends object[], 
k extends keyof t[number]>
    (prev_arr:t_ss_arr_key<t, k>, action:t_act_arr_key<t, k>){
    let UPDATE_ARR = [...prev_arr.ss]
    if (["EDIT", "PUSH", "DELETE", "SET", "EDIT_KEY", "SORT"].includes(action.type) === false)
    {
        f.warning("act_arr_key.tsx")
    }
    if (["EDIT", "PUSH", "DELETE", "SET"].includes(action.type) === true)
    {
        UPDATE_ARR = act_arr(prev_arr, action as t_act_arr<t>).ss
    }
    if (action.type === "COPY")
    {
        UPDATE_ARR = f.copy_unique_item(prev_arr.ss, action.index, action.key)
    }
    if (action.type === "EDIT_KEY")
    { 
        UPDATE_ARR = f.edit_key(
            UPDATE_ARR,
            action.index,
            action.input as t[][number][k],
            action.key,
        )
        UPDATE_ARR = f.unique_arr(
            UPDATE_ARR,
            prev_arr.unique
        )
        UPDATE_ARR = f.sort_arr(
            UPDATE_ARR,
            prev_arr.sort_mode,
            prev_arr.sort_key
        )
    } 
    UPDATE_ARR = f.sort_arr(
        UPDATE_ARR,
        prev_arr.sort_mode,
        prev_arr.sort_key
    )
    return {
        ...prev_arr,
        ss:UPDATE_ARR
    } as t_ss_arr_key<t, k>
}

export type t_setss_arr_key<
    t extends object[],
    k extends keyof t[number]
> = React.ActionDispatch<[action: t_act_arr_key<t, k>]>

export type t_use_arr_key<
    t extends object[],
    k extends keyof t[number]> = {
    ss: t_ss_arr<t>,
    setss: t_setss_arr_key<t, k>
}

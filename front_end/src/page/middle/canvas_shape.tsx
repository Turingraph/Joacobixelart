import { useContext, useEffect, useRef } from "react";
import { is_arr_has } from "../../atom/arr/utils";
import * as a from "../../atom/type/alias";
import { CONTEXT_USE_STATE_GLOBAL } from "../../molecule/hook/context";
import CANVAS_BASIC from "./canvas_basic";

export default function	CANVAS_SHAPE({
	f_mouse_down,
	f_mouse_up
}:{
	f_mouse_down:a.t_func_x<{grid_1:number, grid_2:number}>
	f_mouse_up:a.t_func_x<{grid_1:number, grid_2:number}>
})
{
	const SS_NewRGB = useContext(CONTEXT_USE_STATE_GLOBAL).new_rgb.ss
	const PixelSize = useContext(CONTEXT_USE_STATE_GLOBAL).pixel_size.ss
	const {ss: SS_RGBArr, setss: setSS_RGBArr} = useContext(CONTEXT_USE_STATE_GLOBAL).rgb_arr
	const Ref_GridStateArr = useRef<{grid_1:number|undefined, grid_2:number|undefined}>({grid_1:undefined, grid_2:undefined})
	useEffect(()=>{
		const id = setInterval(() => {
			if (Ref_GridStateArr.current.grid_1 && Ref_GridStateArr.current.grid_2)
				f_mouse_down({grid_1:Ref_GridStateArr.current.grid_1,grid_2:Ref_GridStateArr.current.grid_2})
			Ref_GridStateArr.current = {grid_1:undefined, grid_2:undefined}
		}, 100)
		return () => clearInterval(id)
	})
	return <CANVAS_BASIC
		pixel_size={PixelSize}
		f_mouse_move={((input:number)=>{
			if (!Ref_GridStateArr.current.grid_1)
				Ref_GridStateArr.current.grid_1 = input
			else
				Ref_GridStateArr.current.grid_2 = input
		}) as a.t_func_x<number>}
		f_reset={(()=>{
			if (Ref_GridStateArr.current.grid_1 && Ref_GridStateArr.current.grid_2)
				f_mouse_up({grid_1:Ref_GridStateArr.current.grid_1,grid_2:Ref_GridStateArr.current.grid_2})
			Ref_GridStateArr.current = {grid_1:undefined, grid_2:undefined}
			if (is_arr_has(SS_RGBArr, SS_NewRGB, "rgb") === false)
				setSS_RGBArr({type:"PUSH", input:{id:0, rgb:SS_NewRGB, select:false}})
		}) as a.t_func}
	/>
}

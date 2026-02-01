import { useContext } from "react";
import { is_arr_has } from "../../atom/arr/utils";
import * as a from "../../atom/type/alias";
import { CONTEXT_USE_STATE_GLOBAL } from "../../molecule/hook/context";
import CANVAS_BASIC from "./canvas_basic";

/*
export default function	CANVAS_THROTTLE({
	f_mouse_down
}:{
	f_mouse_down:a.t_func_x<number[]>
})
{
	const SS_NewRGB = useContext(CONTEXT_USE_STATE_GLOBAL).new_rgb.ss
	const PixelSize = useContext(CONTEXT_USE_STATE_GLOBAL).pixel_size.ss
	const {ss: SS_RGBArr, setss: setSS_RGBArr} = useContext(CONTEXT_USE_STATE_GLOBAL).rgb_arr
	const Ref_GridStateArr = useRef<Set<number>>(new Set([]))
	useEffect(()=>{
		const id = setInterval(() => {
			f_mouse_down(Array.from(Ref_GridStateArr.current))
			Ref_GridStateArr.current = new Set([])
		}, 100)
		return () => clearInterval(id)
	})
	return <CANVAS_BASIC
		pixel_size={PixelSize}
		f_mouse_move={((input:number)=>{Ref_GridStateArr.current.add(input)}) as a.t_func_x<number>}
		f_reset={(()=>{
			Ref_GridStateArr.current = new Set([])
			if (is_arr_has(SS_RGBArr, SS_NewRGB, "rgb") === false)
				setSS_RGBArr({type:"PUSH", input:{id:0, rgb:SS_NewRGB, select:false}})
		}) as a.t_func}
		f_on_click={((input:number)=>{
			f_mouse_down([input])
			if (is_arr_has(SS_RGBArr, SS_NewRGB, "rgb") === false)
				setSS_RGBArr({type:"PUSH", input:{id:0, rgb:SS_NewRGB, select:false}})
			}) as a.t_func_x<number>}
	/>
}
*/

export default function	CANVAS_THROTTLE({
	f_mouse_down
}:{
	f_mouse_down:a.t_func_x<number[]>
})
{
	const SS_NewRGB = useContext(CONTEXT_USE_STATE_GLOBAL).new_rgb.ss
	const PixelSize = useContext(CONTEXT_USE_STATE_GLOBAL).pixel_size.ss
	const {ss: SS_RGBArr, setss: setSS_RGBArr} = useContext(CONTEXT_USE_STATE_GLOBAL).rgb_arr
	// const Ref_GridStateArr = useRef<Set<number>>(new Set([]))
	// useEffect(()=>{
	// 	const id = setInterval(() => {
	// 		f_mouse_down(Array.from(Ref_GridStateArr.current))
	// 		Ref_GridStateArr.current = new Set([])
	// 	}, 100)
	// 	return () => clearInterval(id)
	// })
	return <CANVAS_BASIC
		pixel_size={PixelSize}
		// f_mouse_move={((input:number)=>{Ref_GridStateArr.current.add(input)}) as a.t_func_x<number>}
		f_mouse_move={((input:number)=>{
			f_mouse_down([input])
		}) as a.t_func_x<number>}
		f_reset={(()=>{
			// Ref_GridStateArr.current = new Set([])
			if (is_arr_has(SS_RGBArr, SS_NewRGB, "rgb") === false)
				setSS_RGBArr({type:"PUSH", input:{id:0, rgb:SS_NewRGB, select:false}})
		}) as a.t_func}
		f_on_click={((input:number)=>{
			f_mouse_down([input])
			if (is_arr_has(SS_RGBArr, SS_NewRGB, "rgb") === false)
				setSS_RGBArr({type:"PUSH", input:{id:0, rgb:SS_NewRGB, select:false}})
			}) as a.t_func_x<number>}
	/>
}

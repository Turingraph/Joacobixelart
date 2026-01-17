import { useContext, useLayoutEffect, useRef } from "react";
import STR_HEADER from "../../atom/str/str_header";
import * as a from "../../atom/type/alias";
import { CONTEXT_SS_GLOBAL_STUDIO, CONTEXT_SS_LP_PAINT } from "../../molecule/hook/one_time_useContext";
import useDragArr, { child_drag_start, child_mouse_down, parent_drag_enter, parent_drag_over } from "../../molecule/hook/useDragArr";
import SELECT_ONE_TAP from "../../molecule/selection_taps/select_one_tap";
import GRID_COLUMN_CX from "../../molecule/trash_html/grid_column_cx";
import { B_RGB_GRID } from "../../organism/button/b_rgb_grid";

export function RGB_PALETTES()
{
	const {SS_SelectRGB, setSS_SelectRGB} = useContext(CONTEXT_SS_LP_PAINT).select_rgb
	const {SS_RGBArr, setSS_RGBArr} = useContext(CONTEXT_SS_GLOBAL_STUDIO).rgb_arr
	const setSS_NewRGB = useContext(CONTEXT_SS_GLOBAL_STUDIO).new_rgb.setSS_NewRGB
	const Ref_UpdateAfterRender = useRef<boolean>(false)
	const {
		Ref_DragOldIndex,
		Ref_DragNewIndex,
		SS_DragOldIndex, 
		setSS_DragOldIndex} = useDragArr()
	useLayoutEffect(()=>{
		if (Ref_UpdateAfterRender.current === true)
		{
			setSS_NewRGB(SS_RGBArr[SS_SelectRGB].rgb)
			Ref_UpdateAfterRender.current = false
		}
	})
	return <>
			<STR_HEADER title={"RGB Palettes"}/>
			<hr style={{visibility:"hidden", height:"0px", marginTop:"0px", marginBottom:"5px"}}/>
			<GRID_COLUMN_CX
				gap={"5px" as a.t_css}
				column={"45px 45px 45px 45px" as a.t_css}
				jsx_array={	<SELECT_ONE_TAP
					use_select_item={{
						ss:SS_SelectRGB,
						setss:setSS_SelectRGB
					}}
					jsx_select_array={SS_RGBArr.map((item, index:number)=>{
						return <div 
							style={{opacity:index === SS_DragOldIndex ? "0.5" : "1"}}
							key={index}
							onClick={()=>{
								if (Ref_UpdateAfterRender.current === false)
									Ref_UpdateAfterRender.current = true
							}}
onDragOver={(e)=>{parent_drag_over(e, Ref_DragNewIndex, index)}}
onMouseEnter={()=>{parent_drag_enter(setSS_RGBArr, Ref_DragOldIndex, Ref_DragNewIndex, setSS_DragOldIndex)}}
						><div
				onDragStart={()=>{child_drag_start(Ref_DragOldIndex, setSS_DragOldIndex, index)}}
				onMouseDown={()=>{child_mouse_down(Ref_DragOldIndex, index)}}
				onDragEnd={()=>{}}
				draggable={true}
						><B_RGB_GRID rgb={item.rgb}/></div></div>
					})}
					/>}
			/>
	</>
}

/*
Color the SS_SelectColor
*/

import { useEffect, useLayoutEffect, useReducer } from "react";
import act_arr from "../atom/arr/act";
import SELECT_ONE_TAP from "../molecule/selection_taps/select_one_tap";
import useDragArr, { child_drag_start, child_mouse_down, CONTEXT_DRAG, parent_drag_enter, parent_drag_end } from "../molecule/hook/useDragArr";

const box_style = {width:"100px", height:"100px"}//, border:"2px solid #000"}

export default function DRAG_CSS()
{
	const {
		Ref_DragOldIndex	,
		Ref_DragNewIndex	,
		SS_DragOldIndex		,
		setSS_DragOldIndex } = useDragArr()
	const [SS_Arr, setSS_Arr] = useReducer(act_arr, [
		{id:0,in:0},
		{id:1,in:1},
		{id:2,in:2},
		{id:3,in:3},
		{id:4,in:4},
	] as {id:number, in:number}[])
	// useEffect(()=>{
	// 	console.log("---------------------------------------------")
	// 	console.log("Ref_DragOldIndex",Ref_DragOldIndex.current)
	// 	console.log("Ref_DragNewIndex",Ref_DragNewIndex.current)
	// })
	return <div>
		{SS_Arr.map((item,index:number)=>{
			return <div key={index} style={{...box_style,...{backgroundColor:"#fc3", opacity:index === SS_DragOldIndex ? "0.5" : "1"}}}
			onDragEnd={()=>{parent_drag_end(setSS_Arr, Ref_DragOldIndex, Ref_DragNewIndex, setSS_DragOldIndex)}}			
			onDragEnter={(e)=>{parent_drag_enter(e, Ref_DragNewIndex, index)}}
			>
			<div
			className="fill"
			style={{...box_style,...{backgroundColor:"#afa"}}}
			draggable={true}
			onMouseDown={()=>{child_mouse_down(Ref_DragOldIndex, index)}}
			onDragStart={()=>{child_drag_start(Ref_DragOldIndex, setSS_DragOldIndex, index)}}
			>
				<h1>{item.in}</h1>
			</div></div>
		})}
	</div>
}
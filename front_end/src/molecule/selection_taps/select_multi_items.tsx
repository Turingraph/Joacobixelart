import { CSSProperties, JSX, useContext } from "react";
import { t_use_arr } from "../../atom/arr/act";
import { CONTEXT_CSS_SELECT_ONE_ITEM } from "../../atom/hook/useContext";
import useDragArr, { child_drag_start, child_mouse_down, parent_drag_enter, parent_drag_over } from "../hook/useDragArr";
import "./multi_color_bs.css";

export const CSS_MARGIN_Y = {
	marginTop:"2px",
	marginBottom:"2px",
}

export default function SELECT_MULTI_ITEMS<t extends {id:number, select:boolean}, k extends keyof t>({
	jsx_select_array,
	jsx_other_array = [],
	arr,
	is_horizontal = true,
}:{
	jsx_select_array:JSX.Element[],
	jsx_other_array?:JSX.Element[],
	arr:t_use_arr<t, k>
	is_horizontal?:boolean
})
{
	const {
		Ref_DragOldIndex,
		Ref_DragNewIndex,
		SS_DragOldIndex, 
		setSS_DragOldIndex} = useDragArr()
	const CX_CSS = useContext(CONTEXT_CSS_SELECT_ONE_ITEM);
	let display_flex:CSSProperties = {
			display:"flex", 
			justifyContent:"space-evenly",
	}
	if (is_horizontal === false)
		display_flex = {}
	return <div style={{
		...CSS_MARGIN_Y,
		...CX_CSS,
		...display_flex,
		}}
			className="SELECT_MULTI_ITEMS">
		{jsx_select_array.map((item, index:number)=>{
			return <span
			key={index}
			className={arr.ss[index].select === true ? "select_button" : "non_select_button"}
			style={{
				border:arr.ss[index].select === true ? "2px solid blueviolet" : "2px solid gray",
				opacity:index === SS_DragOldIndex ? "0.5" : "1"
			}}
			onClick={()=>{
				arr.setss({
					type:"EDIT", 
					id:arr.ss[index].id,
					input:{
						...arr.ss[index],
						select:arr.ss[index].select === true ? false : true
					}
				})
			}}
onDragOver={(e)=>{parent_drag_over(e, Ref_DragNewIndex, index)}}
onMouseEnter={()=>{parent_drag_enter(arr.setss, Ref_DragOldIndex, Ref_DragNewIndex, setSS_DragOldIndex)}}
			>
				<div
				onDragStart={()=>{child_drag_start(Ref_DragOldIndex, setSS_DragOldIndex, index)}}
				onMouseDown={()=>{child_mouse_down(Ref_DragOldIndex, index)}}
				onDragEnd={()=>{}}
				draggable={true}
				>
					{item}
				</div>
			</span>
		})}
		{jsx_other_array.map((item, index:number)=>{return <span>{item}</span>})}
	</div>
}

/*
Reference
1.	UseRef
*	https://youtu.be/t2ypzz6gJm0?si=t0KNvmiSQnK2onYk
2.	Dragged and Dropped
*	https://youtu.be/jfYWwQrtzzY?si=dlunsamzdt0Nj5c3
*/

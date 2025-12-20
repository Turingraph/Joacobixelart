import { CSSProperties, JSX, useContext, useRef, useState } from "react";
import { CONTEXT_CSS_SELECT_ONE_ITEM } from "../../atom/hook/useContext";
import { CSS_MARGIN_Y } from "./main_css";
import "./multi_color_bs.css";
import { t_use_arr } from "../../atom/arr/act_arr";
import { item_to_index } from "../../atom/arr/function";

export default function SELECT_MULTI_ITEMS<t>({
	jsx_select_array,
	jsx_other_array = [],
	selected_items,
	drag_items_arr = undefined,
	is_horizontal = true
}:{
	jsx_select_array:JSX.Element[],
	jsx_other_array?:JSX.Element[],
	selected_items:t_use_arr<number>
	drag_items_arr?:t_use_arr<t>|undefined
	is_horizontal?:boolean
})
{
	const Ref_DragOldIndex = useRef<undefined|number>(undefined)
	const [SS_DragOldIndex, setSS_DragOldIndex] = useState<undefined|number>(undefined)
	const Ref_DragNewIndex = useRef<undefined|number>(undefined)
	const CX_CSS = useContext(CONTEXT_CSS_SELECT_ONE_ITEM);
	let display_flex:CSSProperties = {
			display:"flex", 
			justifyContent:"space-evenly",
	}
	if (is_horizontal === false)
	{
		display_flex = {}
	}
	return <div style={{
		...CSS_MARGIN_Y,
		...CX_CSS,
		...display_flex,
		}}
			className="SELECT_MULTI_ITEMS">
		{jsx_select_array.map((item, index:number)=>{
			return <span
			key={index}
			className={selected_items.ss.ss.includes(index) === true ? "select_button" : "non_select_button"}
			style={{
				border:selected_items.ss.ss.includes(index) === true ? "2px solid blueviolet" : "2px solid gray",
				opacity:index === SS_DragOldIndex ? "0.5" : "1"
			}}
			onClick={()=>{
				if (selected_items.ss.ss.includes(index) === true)
				{
					selected_items.setss({type:"DELETE", index:item_to_index(selected_items.ss.ss, index)})
				}
				else
				{
					selected_items.setss({type:"PUSH", input:index})
				}
			}}
			onDragOver={(e)=>{
				e.preventDefault()
				Ref_DragNewIndex.current = index
			}}
			onMouseEnter={()=>{
				if (Ref_DragOldIndex.current !== undefined && Ref_DragNewIndex.current !== undefined && drag_items_arr !== undefined)
				{
					console.log("Eureka")
					drag_items_arr.setss({
						type:"DRAG",
						new_index:Ref_DragNewIndex.current,
						old_index:Ref_DragOldIndex.current
					})
					Ref_DragOldIndex.current = undefined
					Ref_DragNewIndex.current = undefined
				}
			}}
			>
				<div
				onDragStart={()=>{
					Ref_DragOldIndex.current = index
					setSS_DragOldIndex(index)
				}}
				onMouseDown={()=>{Ref_DragOldIndex.current = index}}
				onDragEnd={()=>{
					setSS_DragOldIndex(undefined)
				}}
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
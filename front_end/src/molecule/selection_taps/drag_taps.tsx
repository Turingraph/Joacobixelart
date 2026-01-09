import { JSX } from "react";
import "./multi_color_bs.css";
import { child_drag_start, child_mouse_down, parent_drag_enter, parent_drag_over, t_use_drag_arr } from "../hook/useDragArr";
import { t_use_arr } from "../../atom/arr/act";

export default function DRAG_TAPS<
t extends {id:number, select:boolean}, 
k extends keyof t>({
	arr,
	f_drag,
	index,
	item = <></>

}:{
	arr:t_use_arr<t,k>
	f_drag:t_use_drag_arr
	index:number
	item:JSX.Element
})
{
	const {Ref_DragOldIndex, Ref_DragNewIndex, SS_DragOldIndex, setSS_DragOldIndex} = f_drag
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
}

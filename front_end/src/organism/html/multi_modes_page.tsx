import { JSX } from "react";
import * as a from "../../atom/type/alias";
import B_STR from "../../molecule/button/b_str";
import GRID_TEMPLATE from "../../molecule/html/grid_template";
import SELECT_ONE_TAP from "../../molecule/selection_taps/select_one_tap";

export type ui_with_title = {
	ui:JSX.Element,
	title:string
}

export function MULTI_MODES_PAGE({
	ui_body,
	ui_state
}:{
	ui_body:ui_with_title[];
	ui_state:a.t_use_state<number>
})
{
	const JSX_BODY:JSX.Element[] = [
		<SELECT_ONE_TAP
		jsx_select_array={ui_body.map((item, index:number)=>{
			return <B_STR
				title={item.title}
				func={(()=>{
					ui_state.setss(index);
				}) as a.t_func}
			/>
		})}
		use_select_item={ui_state}
		/>,
		<div style={{margin:"5px"}}>{ui_body[ui_state.ss].ui}</div>
	]
	return <GRID_TEMPLATE
	grid_template_rows={"50px 1fr" as a.t_css}
	jsx_array={JSX_BODY}/>
}

import React, { JSX } from "react";
import MULTI_SELECT_BS from "./multi_select_bs";
import * as a from "../../atom/type/alias";
import B_STR from "../../atom/button/b_str";
import GRID_TEMPLATE_ROWS from "../../atom/html/grid_template_rows";

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
		<MULTI_SELECT_BS
		jsx_select_array={ui_body.map((item, index:number)=>{
			return <B_STR
				title={item.title}
				func={(()=>{
					ui_state.setss(index);
				}) as a.t_func}
			/>
		})}
		state_input={ui_state}
		/>,
		<div style={{margin:"5px"}}>{ui_body[ui_state.ss].ui}</div>
	]
	return <GRID_TEMPLATE_ROWS
	grid_template_rows={"50px 1fr" as a.t_css}
	jsx_array={JSX_BODY}/>
}

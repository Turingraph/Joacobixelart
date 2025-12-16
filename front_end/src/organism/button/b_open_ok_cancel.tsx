import React, { JSX } from "react";
import B_STR from "../../molecule/button/b_str";
import * as a from "../../atom/type/alias";

export function B_OPEN_OK_CANCEL({
	title_open,
	jsx_open = <></>,
	jsx_close = <></>,
	title_ok = "Ok",
	title_cancel = "Cancel",
	func_ok = (()=>{}) as a.t_func,
	func_cancel = (()=>{}) as a.t_func,
	ss_open
}:{
	title_open:string
	jsx_open?:JSX.Element
	jsx_close?:JSX.Element
	title_ok?:string
	title_cancel?:string
	func_ok?:a.t_func,
	func_cancel?:a.t_func,
	ss_open:a.t_use_state<boolean>
})
{
	let jsx_body = <>
		{jsx_close}
		<B_STR title={title_open} func={(()=>{
			ss_open.setss(true);
		}) as a.t_func}/></>
	if (ss_open.ss === true)
	{
		jsx_body = <>
		{jsx_open}
		<B_STR title={title_ok} func={(()=>{
			func_ok()
			ss_open.setss(false)
		}) as a.t_func}/>
		<B_STR title={title_cancel} func={(()=>{
			func_cancel()
			ss_open.setss(false)
		}) as a.t_func}/>
		</>
	}
	return <>
	{jsx_body}
	</>
}
import React from "react";
import * as a from "../type/alias"

export function STR_HOVER(
{
	str_hover,
	is_hover
}:{
	str_hover:a.t_str_hover,
	is_hover:boolean
}
)
{
	let is_hover_str:"visible"|"hidden" = "visible";
	if (is_hover === true)
		is_hover_str = "hidden";
	return <>
	<h1 
		id="id_str_hover"
		style={{visibility:is_hover_str}}
	>{str_hover}</h1>
	</>
}
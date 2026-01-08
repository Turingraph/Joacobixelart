import React from "react";
import style from "./str_hover.module.css"
import "../main.css"

export default function STR_HOVER_CSS(
{
	str_hover,
	is_hover
}:{
	str_hover:string,
	is_hover:boolean
}
)
{
	if (is_hover === true)
		return <></>
	return <div>
	<h2
		className={`${style.h2}` as string + " str"}
	>{str_hover}</h2>
	</div>
}
import React from "react";
import style from "./str_hover.module.css"

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
	<h1 
		className={`${style.h1}`}
	>{str_hover}</h1>
	</div>
}
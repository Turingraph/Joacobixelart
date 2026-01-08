import React from "react";
import style from "./str_hover.module.css"

export default function STR_HOVER(
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
		className={`${style.str_hover}` as string + " str"}
	>{str_hover}</h2>
	</div>
}
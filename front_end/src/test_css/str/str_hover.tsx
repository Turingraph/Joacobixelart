import React from "react";
import "./main.css"

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
	<h1 
		className="STR_HOVER"
	>{str_hover}</h1>
	</div>
}
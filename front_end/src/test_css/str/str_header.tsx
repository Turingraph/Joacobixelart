import React from "react";
import "./main.css"

export default function STR_HEADER(
{
	title,
}:{
	title:string
})
{
	return <div 
	className="STR_HEADER"
		>
	<h1 
	className="STR_HEADER"
	>{title}</h1>
	</div>
}

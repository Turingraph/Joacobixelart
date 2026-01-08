import React from "react";
import "../main.css"

/*
https://www.youtube.com/watch?v=i63WQrzrKag
*/

export default function STR_HEADER_CSS(
{
	title,
}:{
	title:string
})
{
	return <h1 
	className={"header"}
	>{title}</h1>
}

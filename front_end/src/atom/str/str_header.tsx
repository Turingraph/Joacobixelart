import React from "react";

export default function STR_HEADER(
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

import React from "react";
import style from "./str_header.module.css"

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
	return <div 
	className={`${style.div}`}
		>
	<h1 
	className={`${style.h1}`}
	>{title}</h1>
	</div>
}

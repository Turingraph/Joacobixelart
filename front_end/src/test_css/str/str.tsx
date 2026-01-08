import React from "react";
import style from "./str.module.css"

export default function STR_CSS({text}:{text:string})
{
	return <h1 className={`${style.h1}`}>{text}</h1>
}
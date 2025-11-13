import React from "react";
import STR from "../str/str"

export default function MAP(
{
	canvas,
	position_2d,
	zoom_level
}:{
	canvas:string,
	position_2d:[number, number],
	zoom_level:number
}
)
{
	return <>
	<div
	style={{
		width:"100px",
		height:"100px",
		backgroundColor:"green",
	}}
	></div>
	<STR text={"Target Canvas: " + canvas}/>
	<STR text={"Zoom Level: " + zoom_level.toString()}/>
	<STR text={"Position: " + position_2d[0].toString() + ", " + position_2d[1].toString()}/>
	</>
}

/*
1.	2d mouse position
2.	coordinate (is_show)
3.	zoom map
4.	zoom control
*/
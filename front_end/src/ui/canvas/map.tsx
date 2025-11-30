
import STR from "../../atom/str/str";

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
	const SMALL_MAP = <div
	style={{
		width:"200px",
		height:"200px",
		backgroundColor:"green",
	}}
	></div>;
	const TEXT_FAKE = <STR text={"TargetCanvas:" + canvas}/>;
	const TEXT_00 = <STR text={"Zoom Level: " + zoom_level.toString()}/>;
	const TEXT_01 = <STR text={"Position: " + position_2d[0].toString() + ", " + position_2d[1].toString()}/>;

	return <></>
	// return <DIV
	// 	jsx_array={[
	// 		SMALL_MAP,
	// 		TEXT_FAKE,
	// 		TEXT_00,
	// 		TEXT_01
	// 	]}/>
}

/*
import React from "react";
import STR from "../str/str"
import DIV from "../atom/div";

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
	const SMALL_MAP = <div
	style={{
		width:"200px",
		height:"200px",
		backgroundColor:"green",
	}}
	></div>;
	const TEXT_FAKE = <STR text={"TargetCanvas:" + canvas}/>;
	const TEXT_00 = <STR text={"Zoom Level: " + zoom_level.toString()}/>;
	const TEXT_01 = <STR text={"Position: " + position_2d[0].toString() + ", " + position_2d[1].toString()}/>;
	return <DIV
		jsx_array={[
			SMALL_MAP,
			TEXT_FAKE,
			TEXT_00,
			TEXT_01
		]}/>
}
*/

/*
1.	2d mouse position
2.	coordinate (is_show)
3.	zoom map
4.	zoom control
*/
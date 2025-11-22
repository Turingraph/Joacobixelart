import React from "react";

export default function STR_HEADER(
{
	title,
}:{
	title:string
})
{
	const Y_SPACE = "2px";
	const X_SPACE = "8px";
	return <div 
		style={{
			paddingTop:Y_SPACE,
			paddingBottom:Y_SPACE,
			backgroundColor:"white"
		}}>
	<h1 style={{
			fontSize:"18px", 
			backgroundColor:"chocolate", 
			marginLeft:X_SPACE,
			marginRight:X_SPACE,
			marginTop:Y_SPACE, 
			marginBottom:Y_SPACE
	}}>{title}</h1>
	</div>
}
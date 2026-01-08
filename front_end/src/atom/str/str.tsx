import React from "react";

export default function STR({text}:{text:string})
{
	return <h1 style={{
		fontSize:"15px", 
		marginLeft:"5px", 
		marginRight:"5px", 
	}}>{text}</h1>
}
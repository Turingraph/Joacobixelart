import React from "react";
import { ARR_B_SAVE } from "../utils/arr";
import B_STR from "../../atom/button/b_str";

export function TOP_HEADER()
{
	return 	<div style={{gridArea:"area_head", backgroundColor:"gray"}}>
	{ARR_B_SAVE.map((item, index:number)=>{
		return <B_STR
			title={item.title}
			func={item.func}
		/>
	})}
	</div>
}

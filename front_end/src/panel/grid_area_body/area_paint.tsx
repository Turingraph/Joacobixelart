import React from "react";
import * as a from "../../ui/type/alias"
import { GRID_COLUMN } from "../../ui/html/grid_column";
import B_LOGO from "../../ui/atom/b_logo";
import { ARRAY_B_PAINTS } from "./array_b_paints";

export default function AREA_PAINT()
{
	return <div 
	style={{margin:"10px"}}
	>
			<GRID_COLUMN
				title={"Paint Tool"}
				gap={"0px" as a.t_css}
				column={"40px 40px 40px 40px 40px 40px 40px 40px" as a.t_css}
				jsx_array={
					<>{ARRAY_B_PAINTS.map((item, index:number)=>{
					return <B_LOGO
					str_hover={item.str_hover}
					logo={item.logo}
					f_onclick={item.f_onclick}
					/>
					})}</>}
			/>
			<hr style={{visibility:"hidden"}}/>
			<GRID_COLUMN
				title={"Color Palletes"}
				gap={"0px" as a.t_css}
				column={"40px 40px 40px 40px 40px 40px 40px 40px" as a.t_css}
				jsx_array={
					<>{ARRAY_B_PAINTS.map((item, index:number)=>{
					return <B_LOGO
					str_hover={item.str_hover}
					logo={item.logo}
					f_onclick={item.f_onclick}
					/>
					})}</>}
			/>
	</div>
}

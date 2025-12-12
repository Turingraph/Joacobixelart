import React from "react";
import STR_HEADER from "../../atom/str/str_header";
import B_STR from "../../atom/button/b_str";
import { GRID_COLUMN_DIV } from "../../ui/html/grid_column_div";
import * as a from "../../atom/type/alias";
import { B_RGB_GRID } from "../../ui/button/b_rgb_grid";

export function COLOR_PALETTES()
{
	return <>
			<STR_HEADER title={"Color Palettes"}/>
			<hr style={{visibility:"hidden", height:"3px", margin:"0px"}}/>
			<B_STR
				title="Add Color"
				func={(()=>{alert("Nujabes")}) as a.t_func}
			/>
			<B_STR
				title="Delete Color"
				func={(()=>{alert("Nujabes")}) as a.t_func}
			/>
			<hr style={{visibility:"hidden", height:"0px", marginTop:"0px", marginBottom:"5px"}}/>
			<GRID_COLUMN_DIV
				gap={"5px" as a.t_css}
				column={"45px 45px 45px 45px" as a.t_css}
				jsx_array={<>
						<B_RGB_GRID/>
						<B_RGB_GRID/>
						<B_RGB_GRID/>
						<B_RGB_GRID/>
						<B_RGB_GRID/>
						<B_RGB_GRID/>
						<B_RGB_GRID/>
						<B_RGB_GRID/>
						<B_RGB_GRID/>
						<B_RGB_GRID/>
						<B_RGB_GRID/>
						<B_RGB_GRID/>
						<B_RGB_GRID/>
						<B_RGB_GRID/>
						</>}
			/>
	</>
}

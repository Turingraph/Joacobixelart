import B_LOGO from "../../atom/button/b_logo";
import * as a from "../../atom/type/alias";
import { GRID_COLUMN } from "../../ui/html/grid_column";
import { ARRAY_B_PAINTS } from "../utils/array";
import MULTI_SELECT_BS from "../../ui/html/multi_select_bs";
import { STR_INPUT } from "../../atom/str/str_input";
import { useState } from "react";

export default function AREA_PAINT({
	pixel_size
}:{
	pixel_size:a.t_use_state<number>
})
{
	const [SS_PixelStr, setSS_PixelStr] = useState<string>("1");
	return <div 
	style={{margin:"10px"}}
	>
			<GRID_COLUMN
				title={"Paint Tool"}
				gap={"0px" as a.t_css}
				column={"40px 40px 40px 40px 40px 40px 40px 40px 1fr" as a.t_css}
				jsx_array={
					<MULTI_SELECT_BS jsx_array={
					[...ARRAY_B_PAINTS.map((item, index:number)=>{
						return <B_LOGO
						title={item.title}
						logo={item.logo}
						func={item.func}
						/>}),
					...[<STR_INPUT text_input={{
						ss:SS_PixelStr,
						setss:setSS_PixelStr
					}}
						unit="px"
					/>,
					// <h1>h1 = {pixel_size.ss}</h1>
					]
				]}/>
				}
			/>
			<hr style={{visibility:"hidden"}}/>
	</div>
}

import React, { useState } from "react";
import { GRID_COLUMN_CX } from "../../ui/html/grid_column_cx";
import { STR_INPUT } from "../../atom/str/str_input";
import { B_RGB_INPUT } from "../../ui/button/b_rgb_input";
import MULTI_SELECT_BS from "../../ui/html/multi_select_bs";
import { ARR_B_PAINTS } from "../utils/arr";
import B_LOGO from "../../atom/button/b_logo";
import * as a from "../../atom/type/alias";

export function EDITOR_TOOLS()
{
	const [SS_PixelStr, setSS_PixelStr] = useState<string>("1");
	const [SS_ToolMode, setSS_ToolMode] = useState<number>(0);
	return <><GRID_COLUMN_CX
					title={"Paint Tool"}
					column={"40px 40px 40px 40px 40px 40px 40px 40px 1fr 1fr" as a.t_css}
					jsx_array={
						<MULTI_SELECT_BS 
							jsx_select_array={
							ARR_B_PAINTS.map((item, index:number)=>{
								return <B_LOGO
								title={item.title}
								logo={item.logo}
								func={item.func}
								/>})}
							jsx_other_array={[
								<STR_INPUT text_input={{
									ss:SS_PixelStr,
									setss:setSS_PixelStr
									}}
								unit="px"/>,
								<B_RGB_INPUT/>
							]}
							state_input={{ss:SS_ToolMode, setss:setSS_ToolMode}}
						/>
					}
				/>
			<hr style={{visibility:"hidden"}}/>
			</>
}

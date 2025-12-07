import { useState } from "react";
import B_LOGO from "../../atom/button/b_logo";
import { JSX_CONTEXT } from "../../atom/hook/useContext";
import { STR_INPUT } from "../../atom/str/str_input";
import * as a from "../../atom/type/alias";
import { GRID_COLUMN } from "../../ui/html/grid_column";
import MULTI_SELECT_BS from "../../ui/html/multi_select_bs";
import { ARR_B_PAINTS } from "../utils/arr";

export default function AREA_PAINT({
	pixel_size
}:{
	pixel_size:a.t_use_state<number>
})
{
	const [SS_PixelStr, setSS_PixelStr] = useState<string>("1");
	const [SS_ToolMode, setSS_ToolMode] = useState<number>(0);
	return <div>
			<GRID_COLUMN
				title={"Paint Tool"}
				gap={"0px" as a.t_css}
				column={"40px 40px 40px 40px 40px 40px 40px 40px 1fr" as a.t_css}
				jsx_array={
					<JSX_CONTEXT value={[
					<STR_INPUT text_input={{
							ss:SS_PixelStr,
							setss:setSS_PixelStr
							}}
					unit="px"/>
					]}>
					<MULTI_SELECT_BS 
						jsx_array={
						[...ARR_B_PAINTS.map((item, index:number)=>{
							return <B_LOGO
							title={item.title}
							logo={item.logo}
							func={item.func}
							/>}),
						// ...[<STR_INPUT text_input={{
						// 	ss:SS_PixelStr,
						// 	setss:setSS_PixelStr
						// 	}}
						// 	unit="px"/>]
						]}
						state_input={{ss:SS_ToolMode, setss:setSS_ToolMode}}
					/>
					</JSX_CONTEXT>
				}
			/>
			<hr style={{visibility:"hidden"}}/>
	</div>
}

import { useContext, useEffect, useState } from "react";
import STR_HEADER from "../../atom/str/str_header";
import * as a from "../../atom/type/alias";
import B_LOGO from "../../molecule/button/b_logo";
import { CONTEXT_SS_MAIN_ART_TOOL } from "../../molecule/hook/one_time_useContext";
import { GRID_COLUMN_CX } from "../../molecule/html/grid_column_cx";
import SELECT_ONE_ITEM from "../../molecule/html/select_one_item";
import STR_INPUT from "../../molecule/str/str_input";
import { B_RGB_INPUT } from "../../organism/button/b_rgb_input";
import { ARR_B_PAINTS } from "../utils/arr";

export function EDITOR_TOOLS()
{
	const {SS_ToolMode, setSS_ToolMode} = useContext(CONTEXT_SS_MAIN_ART_TOOL).tool_mode;
	const {SS_PixelSize, setSS_PixelSize} = useContext(CONTEXT_SS_MAIN_ART_TOOL).pixel_size;
	const [SS_PixelStr, setSS_PixelStr] = useState<string>(SS_PixelSize.toString());
	useEffect(()=>{
		setSS_PixelSize(Number(SS_PixelStr))
	})
	return <>
	<STR_HEADER title={"Paint Tool"}/>
	<GRID_COLUMN_CX
					column={"40px 40px 40px 40px 40px 40px 40px 40px 1fr 1fr" as a.t_css}
					jsx_array={
						<SELECT_ONE_ITEM 
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

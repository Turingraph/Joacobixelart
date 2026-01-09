import { useContext, useEffect, useState } from "react";
import STR_HEADER from "../../atom/str/str_header";
import * as a from "../../atom/type/alias";
import B_LOGO from "../../molecule/button/b_logo";
import { CONTEXT_SS_GLOBAL_STUDIO } from "../../molecule/hook/one_time_useContext";
import GRID_COLUMN_DIV from "../../molecule/html/grid_column_div";
import SELECT_ONE_ITEM from "../../molecule/selection_taps/select_one_item";
import STR_INPUT from "../../molecule/str/str_input";
import { B_RGB_INPUT } from "../../organism/button/b_rgb_input";
import { ARR_DRAW, ARR_TRANSFORM } from "../utils/arr";

export function EDITOR_TOOLS()
{
	const {SS_ToolMode, setSS_ToolMode} = useContext(CONTEXT_SS_GLOBAL_STUDIO).tool_mode;
	const {SS_PixelSize, setSS_PixelSize} = useContext(CONTEXT_SS_GLOBAL_STUDIO).pixel_size;
	const [SS_PixelStr, setSS_PixelStr] = useState<string>(SS_PixelSize.toString());
	useEffect(()=>{
		setSS_PixelSize(Number(SS_PixelStr))
	})
	return <>
	<STR_HEADER title={"Paint Tool"}/>
		<hr style={{visibility:"hidden", margin:"0px", marginTop:"2px"}}/>
	<GRID_COLUMN_DIV
		column={"45px 45px 45px 45px 45px 45px 45px 45px 45px 1fr" as a.t_css}
		jsx_array={
			<SELECT_ONE_ITEM 
				horizontal_gap={"2px"}
				jsx_select_array={
				ARR_DRAW.map((item, index:number)=>{
					return <B_LOGO
					title={item.title}
					logo={item.logo}
					func={item.func}
					/>})}
				state_input={{ss:SS_ToolMode, setss:setSS_ToolMode}}
			/>
		}/>
	{/* <STR_HEADER title={"Transform"}/> */}
	<GRID_COLUMN_DIV
		column={"45px 45px 45px 45px 45px 45px 45px 45px 45px 1fr" as a.t_css}
		jsx_array={<>
			<SELECT_ONE_ITEM 
				horizontal_gap={"2px"}
				jsx_select_array={
					ARR_TRANSFORM.map((item, index:number)=>{
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
					<B_RGB_INPUT/>,
				]}
			/>
		</>}
	/>
		<hr style={{visibility:"hidden", margin:"0px", marginTop:"2px"}}/>
			</>
}

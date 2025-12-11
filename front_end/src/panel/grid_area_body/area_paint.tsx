import { useState } from "react";
import B_LOGO from "../../atom/button/b_logo";
import { JSX_CONTEXT } from "../../atom/hook/useContext";
import { STR_INPUT } from "../../atom/str/str_input";
import * as a from "../../atom/type/alias";
import { GRID_COLUMN } from "../../ui/html/grid_column";
import MULTI_SELECT_BS from "../../ui/html/multi_select_bs";
import { ARR_B_PAINTS } from "../utils/arr";
import { B_RGB_INPUT } from "../../ui/button/b_rgb_input";
import { B_RGB_GRID } from "../../ui/button/b_rgb_grid";
import B_STR from "../../atom/button/b_str";
import STR_HEADER from "../../atom/str/str_header";

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
				gap={"3px" as a.t_css}
				column={"40px 40px 40px 40px 40px 40px 40px 40px 1fr 1fr" as a.t_css}
				jsx_array={
					<JSX_CONTEXT value={[
					<STR_INPUT text_input={{
							ss:SS_PixelStr,
							setss:setSS_PixelStr
							}}
					unit="px"/>,
					<B_RGB_INPUT/>
					]}>
					<MULTI_SELECT_BS 
						jsx_array={
						ARR_B_PAINTS.map((item, index:number)=>{
							return <B_LOGO
							title={item.title}
							logo={item.logo}
							func={item.func}
							/>})}
						state_input={{ss:SS_ToolMode, setss:setSS_ToolMode}}
					/>
					</JSX_CONTEXT>
				}
			/>

			<hr style={{visibility:"hidden"}}/>
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
			<GRID_COLUMN
				gap={"3px" as a.t_css}
				column={"40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px" as a.t_css}
				jsx_array={
					<JSX_CONTEXT value={[<></>]}>
					<MULTI_SELECT_BS 
						jsx_array={[
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						]}
						state_input={{ss:SS_ToolMode, setss:setSS_ToolMode}}
					/>
					</JSX_CONTEXT>
				}
			/>
			<GRID_COLUMN
				gap={"3px" as a.t_css}
				column={"40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px" as a.t_css}
				jsx_array={
					<JSX_CONTEXT value={[<></>]}>
					<MULTI_SELECT_BS 
						jsx_array={[
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						<B_RGB_GRID/>,
						]}
						state_input={{ss:SS_ToolMode, setss:setSS_ToolMode}}
					/>
					</JSX_CONTEXT>
				}
			/>
	</div>
}

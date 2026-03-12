import { t_use_arr } from "../../atom/arr/act"
import { t_rgb_palettes } from "../../atom/arr/type"
import * as a from "../../atom/type/alias"
import LAYOUT_SIDEBAR from "../../organism/layout/layout_sidebar"
import MULTI_MODES_PAGE from "../../organism/layout/multi_modes_page"
import { CX_SS_PALETTE } from "./rgb_palette/context"
import RGB_PALETTE from "./rgb_palette/main"
import SIMULATION from "./simulation/main"

export default function LEFT({
	new_rgb,
	rgb_arr
}:{
	new_rgb:a.t_use_state<string>,
	rgb_arr:t_use_arr<t_rgb_palettes, keyof t_rgb_palettes>
})
{
	return <CX_SS_PALETTE value={{new_rgb:new_rgb, rgb_arr:rgb_arr}}>
		<div className="fill"><LAYOUT_SIDEBAR
			axis_x={false}
			grid_template_rows={"1fr" as a.t_css}
			jsx_array={[
				<MULTI_MODES_PAGE
				jsx_array={[
					{title:"Palette", body:<RGB_PALETTE/>},
					{title:"Simulation", body:<SIMULATION/>},
					{title:"QR Code", body:<SIMULATION/>},
					{title:"Gen AI", body:<SIMULATION/>},
					{title:"Non Euclidean", body:<SIMULATION/>},
				]}/>,
			]}
		/></div>
	</CX_SS_PALETTE>
}
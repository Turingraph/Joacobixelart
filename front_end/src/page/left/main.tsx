import * as a from "../../atom/type/alias"
import LAYOUT_SIDEBAR from "../../organism/layout/layout_sidebar"
import MULTI_MODES_PAGE from "../../organism/layout/multi_modes_page"
import RGB_PALETTES from "./rgb_palettes"
import SIMULATION from "./simulation"
import PAINT_TOOLS from "./paint_tools"

export default function LEFT()
{
	return <div className="fill"><LAYOUT_SIDEBAR
		axis_x={false}
		grid_template_rows={"1fr 60px" as a.t_css}
		jsx_array={[
			<MULTI_MODES_PAGE
			jsx_array={[
				{title:"Color Palettes", body:<RGB_PALETTES/>},
				{title:"Simulation", body:<SIMULATION/>},
			]}/>,
			<PAINT_TOOLS/>
		]}
	/></div>
}
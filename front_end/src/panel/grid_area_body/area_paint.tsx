import B_LOGO from "../../atom/button/b_logo";
import * as a from "../../atom/type/alias";
import { GRID_COLUMN } from "../../ui/html/grid_column";
import { ARRAY_B_PAINTS } from "../utils/array";
import MULTI_SELECT_BS from "../../ui/html/multi_select_bs";

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
					<MULTI_SELECT_BS jsx_array={ARRAY_B_PAINTS.map((item, index:number)=>{
					return <B_LOGO
					title={item.title}
					logo={item.logo}
					func={item.func}
					/>})}/>
				}
			/>
			<hr style={{visibility:"hidden"}}/>
	</div>
}

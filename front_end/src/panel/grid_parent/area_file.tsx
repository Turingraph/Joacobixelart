import B_LOGO from "../../atom/button/b_logo";
import * as a from "../../atom/type/alias";
import b_eraser from "../../logo/b_paint_no_rgb/b_eraser.png";

export function AREA_FILE()
{
	const f_func = () => {
        alert("Nujabes");
    }
	return 	<div 
	className="grid_area_body" 
	style={{
		gridArea:"area_file", 
		backgroundColor:"lightgreen"
	}}>
	<B_LOGO
		str_hover={"This is math Button." as a.t_str_hover}
		logo={b_eraser as a.t_logo}
		f_onclick={f_func as a.t_func}
	/>
	</div>
}

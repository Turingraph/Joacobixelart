import B_LOGO, { t_B_LOGO } from "../../atom/button/b_logo";
import * as a from "../../atom/type/alias";
import { num_to_rgb } from "../rgb/rgb_func";

export function B_PAINT(
{
	title: str_hover,
	logo,
	func,
	rgb,
	select,
	key
}:t_B_LOGO & {
	rgb:[number, number, number]|undefined,
	select:a.t_use_state<number>|undefined,
	key:number
}
)
{
	const f_select_onclick = () => {
		if (select !== undefined)
			select.setss(key);
		func();
	}
	let this_rgb:number[]|undefined = undefined;
	if (select !== undefined && select.ss === key)
		this_rgb = rgb;
	return <div style={{backgroundColor:num_to_rgb(this_rgb)}}>
	<B_LOGO
		title={str_hover}
		logo={logo}
		func={f_select_onclick as a.t_func}
	/>
	</div>
}
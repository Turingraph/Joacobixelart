import pen from "../../asset/draw/pen.png";
import * as a from "../../atom/type/alias";
import B_LOGO from "../../molecule/button/b_logo";
import B_STR from "../../molecule/button/b_str";
import B_LOGO_CSS from "./b_logo";
import B_STR_CSS from "./b_str";

export function TEST_B_LOGO()
{
	return <>
	<B_LOGO_CSS
		title={"Pen" as a.t_str_hover}
		logo={pen as a.t_logo}
		func={(()=>{}) as a.t_func}/>
	<hr/>
	<B_LOGO
		title={"Pen" as a.t_str_hover}
		logo={pen as a.t_logo}
		func={(()=>{}) as a.t_func}/>
	</>
}

export function TEST_B_STR()
{
	return <>
	<B_STR_CSS title={"hello"} func={(()=>{}) as a.t_func}/>
	<hr/>
	<B_STR title={"hello"} func={(()=>{}) as a.t_func}/>
	</>
}
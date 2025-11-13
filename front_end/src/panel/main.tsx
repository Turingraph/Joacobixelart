import React from "react";
import B_LOGO from "../ui/button/b_logo";
import * as a from "../ui/type/alias"
import b_eraser from "../ui/logo/b_paint_no_rgb/b_eraser.png"
import path from 'path';

export function MAIN()
{
	const f_func = () =>{
        alert("Nujabes");
    }
	return <>
	<B_LOGO
		str_hover={"This is math Button." as a.t_str_hover}
		logo={b_eraser as a.t_logo}
		func={f_func as a.t_func}
	/>
	</>
}

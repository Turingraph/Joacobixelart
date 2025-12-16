import { createContext, JSX } from 'react';
import { t_setss_arr, t_ss_arr } from '../../atom/arr/act_arr';
import * as a from "../../atom/type/alias";

export const CONTEXT_SS_MAIN_ART_TOOL = createContext<{
	select_color:{
		SS_SelectColor:number,
		setSS_SelectColor:a.t_setss<number>},
	color_array:{
		SS_ColorArray:t_ss_arr<JSX.Element>,
		setSS_ColorArray:t_setss_arr<JSX.Element>
	},
	tool_mode:{
		SS_ToolMode:number,
		setSS_ToolMode:a.t_setss<number>},
	pixel_size:{
		SS_PixelSize:number,
		setSS_PixelSize:a.t_setss<number>},
}>({
	select_color:{
		SS_SelectColor:0,
		setSS_SelectColor:()=>{}},
	color_array:{
		SS_ColorArray:{ss:[], unique:true},
		setSS_ColorArray:()=>{}},
	tool_mode:{
		SS_ToolMode:0,
		setSS_ToolMode:()=>{}},
	pixel_size:{
		SS_PixelSize:0,
		setSS_PixelSize:()=>{}},
});

/*
Reference
1.	https://stackoverflow.com/questions/77217290/
	best-way-to-use-react-context-with-usestate-in-typescript
2.	https://tillitsdone.com/blogs/managing-react-contexts-guide/

*/
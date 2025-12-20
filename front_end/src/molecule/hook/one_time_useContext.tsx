import { createContext } from 'react';
import { t_setss_arr, t_ss_arr } from '../../atom/arr/act_arr';
import * as a from "../../atom/type/alias";

export const CONTEXT_SS_MAIN_ART_TOOL = createContext<{
	select_rgb:{
		SS_SelectRGB:number,
		setSS_SelectRGB:a.t_setss<number>},
	rgb_arr:{
		SS_RGBArr:t_ss_arr<[number,number,number]>,
		setSS_RGBArr:t_setss_arr<[number,number,number]>
	},
	tool_mode:{
		SS_ToolMode:number,
		setSS_ToolMode:a.t_setss<number>},
	pixel_size:{
		SS_PixelSize:number,
		setSS_PixelSize:a.t_setss<number>},
}>({
	select_rgb:{
		SS_SelectRGB:0,
		setSS_SelectRGB:()=>{}},
	rgb_arr:{
		SS_RGBArr:{ss:[], unique:true},
		setSS_RGBArr:()=>{}},
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
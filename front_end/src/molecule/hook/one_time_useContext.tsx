import { createContext } from 'react';
import { t_setss_arr } from '../../atom/arr/act';
import { t_rgb_palettes } from '../../atom/arr/type';
import * as a from "../../atom/type/alias";

export const CONTEXT_SS_LP_PAINT = createContext<{
	select_rgb:{
		SS_SelectRGB:number,
		setSS_SelectRGB:a.t_setss<number>},
	tool_mode:{
		SS_ToolMode:number,
		setSS_ToolMode:a.t_setss<number>},
}>({
	select_rgb:{
		SS_SelectRGB:0,
		setSS_SelectRGB:()=>{}},
	tool_mode:{
		SS_ToolMode:0,
		setSS_ToolMode:()=>{}},
});

export const CONTEXT_SS_GLOBAL_STUDIO = createContext<{
	rgb_arr:{
		SS_RGBArr:t_rgb_palettes[],
		setSS_RGBArr:t_setss_arr<t_rgb_palettes, "select" | "rgb" | "id">},
	new_rgb:{
		SS_NewRGB:string,
		setSS_NewRGB:a.t_setss<string>},
	pixel_size:{
		SS_PixelSize:number,
		setSS_PixelSize:a.t_setss<number>},
}>({rgb_arr:{
		SS_RGBArr:[],
		setSS_RGBArr:()=>{}},
	new_rgb:{
		SS_NewRGB:"#000000",
		setSS_NewRGB:()=>{}},
	pixel_size:{
		SS_PixelSize:0,
		setSS_PixelSize:()=>{}},
})
/*
Reference
1.	https://stackoverflow.com/questions/77217290/
	best-way-to-use-react-context-with-usestate-in-typescript
2.	https://tillitsdone.com/blogs/managing-react-contexts-guide/

*/
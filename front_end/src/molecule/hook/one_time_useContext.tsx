import { createContext } from 'react';
import { t_setss_arr } from '../../atom/arr/act_arr';
import { t_rgb_grid } from '../../atom/arr/type';
import * as a from "../../atom/type/alias";

export const CONTEXT_SS_LP_PAINT = createContext<{
	select_rgb:{
		SS_SelectRGB:number,
		setSS_SelectRGB:a.t_setss<number>},
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
	tool_mode:{
		SS_ToolMode:0,
		setSS_ToolMode:()=>{}},
	pixel_size:{
		SS_PixelSize:0,
		setSS_PixelSize:()=>{}},
});

export const CONTEXT_SS_GLOBAL_STUDIO = createContext<{
	rgb_arr:{
		SS_RGBArr:t_rgb_grid[],
		setSS_RGBArr:t_setss_arr<t_rgb_grid, "select" | "rgb" | "id">},
	new_hex_rgb:{
		SS_NewHexRGB:string,
		setSS_NewHexRGB:a.t_setss<string>
	}
}>({rgb_arr:{
	SS_RGBArr:[],
	setSS_RGBArr:()=>{}},
	new_hex_rgb:{
		SS_NewHexRGB:"#000000",
		setSS_NewHexRGB:()=>{}
	}
})
/*
Reference
1.	https://stackoverflow.com/questions/77217290/
	best-way-to-use-react-context-with-usestate-in-typescript
2.	https://tillitsdone.com/blogs/managing-react-contexts-guide/

*/
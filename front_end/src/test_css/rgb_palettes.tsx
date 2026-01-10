import { useReducer, useState } from "react"
import { t_rgb_palettes } from "../atom/arr/type"
// import act_arr from "../atom/arr/act"
import SELECT_ONE_TAP from "../molecule/selection_taps/select_one_tap"
import { B_RGB_GRID } from "../organism/button/b_rgb_grid"
// import { B_RGB_GRID } from "../organism/button/b_rgb_grid"

function init_rgb_grid()
{
	let output = [] as t_rgb_palettes[]
	let i = 0
	while (i < 32)
	{
		let rgb = {id:i, rgb:"#000000", select:false} as t_rgb_palettes
		if (i % 8 === 0)
			rgb.rgb = "#FF0000"
		if (i % 8 === 1)
			rgb.rgb = "#00FF00"
		if (i % 8 === 2)
			rgb.rgb = "#FFFF00"
		if (i % 8 === 3)
			rgb.rgb = "#0000FF"
		if (i % 8 === 4)
			rgb.rgb = "#FF00FF"
		if (i % 8 === 5)
			rgb.rgb = "#00FFFF"
		if (i % 8 === 6)
			rgb.rgb = "#FFFFFF"
		output.push(rgb)
		i += 1
	}
	return output
}

export default function RGB_PALETTES_CSS(){
	const [SS_SelectRGB, setSS_SelectRGB] = useState<number>(0)
	// const [SS_RGBArr, setSS_RGBArr] = useReducer(act_arr, init_rgb_grid())
	return <SELECT_ONE_TAP
		class_name={"left_table_taps"}
		use_select_item={{ss:SS_SelectRGB, setss:setSS_SelectRGB}}
		jsx_select_array={init_rgb_grid().map((item, index)=>{
			return <div><B_RGB_GRID rgb={item.rgb}/></div>
		})}
	/>

	// return <div style={{width:"100px", height:"100px", backgroundColor:"#000000"}}></div>
}
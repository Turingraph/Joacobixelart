import { useState } from "react"
import LAYOUT_HEADER from "./layout_header"
import { t_page_with_title } from "./type"

export default function MULTI_MODES_PAGE({
	header_class_name = "middle_taps_x",
	jsx_array
}:{
	header_class_name?:"middle_taps_x"|"left_taps"
	jsx_array:t_page_with_title[]
})
{
	const [SS_Page, setSS_Page] = useState<number>(0)
	let jsx_body = jsx_array[SS_Page].body
	return <LAYOUT_HEADER
		tap_lists={jsx_array.map((item, index:number)=>{return item.title})}
		use_select_item={{ss:SS_Page, setss:setSS_Page}}
		header_class_name={header_class_name}
		jsx_body={jsx_body}/>
}

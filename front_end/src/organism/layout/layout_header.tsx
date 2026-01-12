import { JSX } from "react"
import * as a from "../../atom/type/alias"
import B_STR, { t_B_STR } from "../../molecule/button/b_str"
import SELECT_ONE_TAP from "../../molecule/selection_taps/select_one_tap"
import style from "./layout_header.module.css"

export default function LAYOUT_HEADER({
	use_select_item = undefined,
	tap_lists,
	header_height = "40px",
	header_class_name = "middle_taps_x",
	jsx_body
}:{
	header_height:"40px"|a.t_css
	tap_lists:t_B_STR[]|string[]
	header_class_name?:"middle_taps_x"|"left_taps"
	jsx_body:JSX.Element
	use_select_item?:a.t_use_state<number>|undefined
}){
	return <div className={`${style.layout_header}`}
			style={{
				gridTemplateRows:header_height + " 1fr"
			}}
		>
		<div className={header_class_name === "middle_taps_x" ? "middle_taps_x"
			: "left_taps"
		}>{<SELECT_ONE_TAP
			class_name={header_class_name}
			use_select_item={use_select_item}
			jsx_select_array={tap_lists.map((item, index:number)=>{
				if (typeof item === "string")
					return <span key={index}>
						<B_STR title={item} func={(()=>{}) as a.t_func}/>
					</span>
				return <span key={index}>
					<B_STR title={item.title} func={item.func as a.t_func}/>
				</span>
			})}
		/>}</div>
		<div className="middle_taps_x">{jsx_body}</div>
	</div>
}

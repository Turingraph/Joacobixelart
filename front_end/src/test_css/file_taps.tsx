import B_STR from "../molecule/button/b_str"
import SELECT_ONE_TAP from "../molecule/selection_taps/select_one_tap"
import { ARR_SAVE } from "../page_outdate/utils/arr"

export default function FILE_TAPS_CSS()
{
	return 	<SELECT_ONE_TAP 
	class_name={"left_table_taps"}
	jsx_select_array={ARR_SAVE.map((item, index:number)=>{
		return <span key={index}>
			<B_STR
			title={item.title}
			func={item.func}
		/></span>
	})}
	/>
}

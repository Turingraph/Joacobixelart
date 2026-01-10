import B_STR from "../molecule/button/b_str"
import SELECT_ONE_TAP from "../molecule/selection_taps/select_one_tap"
import { ARR_SAVE } from "../page/utils/arr"

export default function FILE_TAPS()
{
	return 	<SELECT_ONE_TAP 
	jsx_select_array={ARR_SAVE.map((item, index:number)=>{
		return <span key={index}>
			<B_STR
			title={item.title}
			func={item.func}
		/></span>
	})}
	/>
}

import B_STR from "../../molecule/button/b_str";
import { ARR_SAVE } from "../utils/arr";

export function TOP_HEADER()
{
	return 	<div style={{gridArea:"area_head", backgroundColor:"gray"}}>
	{ARR_SAVE.map((item, index:number)=>{
		return <span key={index}>
			<B_STR
			title={item.title}
			func={item.func}
		/></span>
	})}
	</div>
}

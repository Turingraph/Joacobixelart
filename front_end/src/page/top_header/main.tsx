import B_STR from "../../molecule/button/b_str";
import { ARR_B_SAVE } from "../utils/arr";

export function TOP_HEADER()
{
	return 	<div style={{gridArea:"area_head", backgroundColor:"gray"}}>
	{ARR_B_SAVE.map((item, index:number)=>{
		return <B_STR
			title={item.title}
			func={item.func}
		/>
	})}
	</div>
}

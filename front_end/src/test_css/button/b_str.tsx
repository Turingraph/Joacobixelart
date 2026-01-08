import * as a from "../../atom/type/alias";
import STR_CSS from "../str/str";

export type t_B_STR = {
	title:string,
	func:a.t_func
}

export default function B_STR_CSS({
	title,
	func
}:t_B_STR)
{
	return <button onClick={func} >
		<STR_CSS text={title}/>
	</button>
}

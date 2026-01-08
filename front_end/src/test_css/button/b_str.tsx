import * as a from "../../atom/type/alias";
import STR from "../str/str";
// import style from "./b_str.module.css";

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
		<STR text={title}/>
	</button>
}

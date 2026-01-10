import STR from "../../atom/str/str";
import * as a from "../../atom/type/alias";

export type t_B_STR = {
	title:string,
	func:a.t_func
}

export default function B_STR({
	title,
	func
}:t_B_STR)
{
	return <button onClick={func} className={`tap`}>
		<STR text={title}/>
	</button>
}

/*
List of Button
1.	Open file
2.	Save file
3.	Create New Project
4.	Import Image
5.	Get Image as PNG/JPG
*/

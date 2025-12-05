import { JSX, useState, useContext } from "react";
import { CSS_CONTEXT } from "../../atom/hook/useContext";
import "./multi_color_b.css";

// https://stackoverflow.com/questions/54706748/
// change-color-of-a-element-inside-a-div-using-inline-css

/*
You can use `inherit` for color property, 
which means that color property value will be 
inherited from it's parent
*/

export default function MULTI_SELECT_BS({
	jsx_array
}:{
	jsx_array:JSX.Element[]
})
{
	const CX_CSS = useContext(CSS_CONTEXT);
	const [SS_Div, setSS_Div] = useState<number>(0);
	return <div style={CX_CSS[0]}>
		{jsx_array.map((item, index:number)=>{
			return <span
			className={index ===  SS_Div ? "select_button" : ""}
			style={{
				backgroundColor:SS_Div === index ? "BlueViolet" : "gray"
			}} 
			onClick={()=>{setSS_Div(index)}}>
				{item}
			</span>
		})}
	</div>
}

/*
feature
1.	jsx_array:t_B_STR[]|t_B_LOGO[]
2.	const [SS_Selected_B, setSS_Selected_B] = useState<number>(0)

Parameter
1.	title:string
2.	select_color:string|[number,number,number]
3.	func:a.t_func

Other Parameter
1.	logo:string
2.	/

Application
1.	color
2.	editor mode
3.	editor
4.	layer
*/
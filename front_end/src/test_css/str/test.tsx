import { useState } from "react"
import STR_HEADER from "../../atom/str/str_header"
import STR_HOVER from "../../atom/str/str_hover"
import * as a from "../../atom/type/alias"
import STR_HEADER_CSS from "./str_header"
import STR_HOVER_CSS from "./str_hover"
import STR_INPUT_CSS from "./str_input"
import STR_INPUT from "../../molecule/str/str_input"
import STR_CSS from "./str"
import STR from "../../atom/str/str"

export function TEST_STR_HEADER()
{
	return <>
	<STR_HEADER_CSS title="hello"/>
	<hr/>
	<STR_HEADER title="hello"/>
	</>
}

export function TEST_STR_HOVER()
{
	return <>
	<STR_HOVER_CSS str_hover="hello" is_hover={false}/>
	<hr/>
	<STR_HOVER str_hover="hello" is_hover={false}/>
	</>
}

export function TEST_STR_INPUT()
{
	const [SS_Input, setSS_Input] = useState<string>("")
	return <>
	<STR_INPUT_CSS text_input={{ss:SS_Input, setss:setSS_Input}} title="Your Name:" unit="m/s"/>
	<hr/>
	<STR_INPUT text_input={{ss:SS_Input, setss:setSS_Input}} title="Your Name:" unit="m/s"/>
	</>
}

export function TEST_STR()
{
	return <>
	<STR_CSS text="hello"/>
	{/* <hr/>
	<h1>hello</h1> */}
	<hr/>
	<STR text="hello"/>
	</>
}
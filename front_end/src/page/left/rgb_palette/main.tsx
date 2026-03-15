import { useState } from "react"
import * as a from "../../../atom/type/alias"
import RGB_EDITOR from "./rgb_editor"
import RGB_PICKER from "./rgb_picker"

export default function RGB_PALETTE()
{
	const [SS_RGBName, setSS_RGBName] = useState<string>("")
	const [SS_EditMode, setSS_EditMode] = useState<"RGBPicker"|"RGBEditor">("RGBPicker")
	return <div className="cornice" style={{backgroundColor:"#4c3841"}}>
		{SS_EditMode === "RGBPicker" ? 
		<RGB_PICKER 
			rgb_file_name={{ss:SS_RGBName, setss:setSS_RGBName}}
			change_ui_mode={(()=>{setSS_EditMode("RGBEditor")}) as a.t_func}/>:
		<RGB_EDITOR
			change_ui_mode={(()=>{setSS_EditMode("RGBPicker")}) as a.t_func}/>
		}
	</div>
	}
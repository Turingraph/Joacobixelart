import { JSX } from "react";
import * as a from "../atom/type/alias";
import GRID_TEMPLATE from "../molecule/html/grid_template";
import { TOP_HEADER } from "./top_header/main";
import { STUDIO } from "./studio/main";
import "./main.css"

export default function MAIN()
{
	const JSX_BODY:JSX.Element[] = [
		<TOP_HEADER/>
		,
		<div style={{gridArea:"area_body", height:"100%"}}>
		<STUDIO/>
		</div>
	]
	return <GRID_TEMPLATE
	is_fill_height={true}
	grid_template_rows={"45px 1fr" as a.t_css}
	grid_template_areas={"area_head area_body" as a.t_css}
	jsx_array={JSX_BODY}/>
}

/*
#############################################################################
### Question
#############################################################################

Why height:100% does not works ?

h1 {
	height: 100%;
}

div {
	min-height: 100%;
}

<div><h1>gyugu</h1></div>

In this case, it not works because 
h1 do not know the current height of div.

https://youtu.be/6aHKdahOfCc?si=DNwU2tnOf4NtrBW7

#############################################################################

Why background color of selected <EDITOR_TOOLS/> and selected <COLOR_PALETTES/> are differ ?
```
// ui/html/multi_color_bs.tsx
// this means set the color of the button as blueviolet, but not set the color of parent div.
// <EDITOR_TOOLS/> contains div with child buttons, but <COLOR_PALETTES/> contains only div.
.select_button button {
	background-color: blueviolet;
}
```

#############################################################################

How to add useState in useContext?

*	https://dev.to/nazmifeeroz/using-usecontext-and-usestate-hooks-as-a-store-mnm
*	https://stackoverflow.com/questions/77217290/best-way-to-use-react-context-with-usestate-in-typescript
*	Google: usecontext store usestate
*	molecule/ hook/ one_time_useContext.tsx

#############################################################################

*/

/*
#############################################################################

lp_paint/
1.	watch this https://youtu.be/tFsETEP01k8?si=VDwj6UJs7gM5yg0z
2.	allow user to set the size of canvas
3.	add eraser and other button and allow user to adjust pen size
4.	scroll bar for multiple color palettes

lp_rgb_palettes/
1.	transform color palettes (matrix multiplication, k means merge, merge, hsv, quaternion rotation, delete)
2.	auto merge
3.	Save color palettes edition ? Yes/No and view original result

#############################################################################
*/

/*
UI Color
1.	(Main) Edit Color Palettes
*	Delete
*	Transform Color
	*	Replace Color
	*	Add Color
	* 	Cancel
2.	Line Color
3.	Plane Color

// How Piskel import/export color palettes ?
// Both Line Color and Plane Color have only 1 set of color palettes.
// FEM Color overwrite all previous color according to its rule.

What create new color
1.	Main
2.	Line and Plane Color
3.	FEM Color (Might includes Wave Function and J_f ?)
*/

/*
Recommended Learning Resource
1.	How to build a Pixel Art Drawing App in React | React Tutorial
*	https://youtu.be/IAD68la3An8?si=C1AKir49ijewcbVu
*/

/*
To Do List
1.	design the UXUI for atom/canvas/slice/
2.	implementing atom/canvas/
3.	redesign UXUI (I might make paint tool on the right as verticle instead)

To Do List
1.	allow pen size adjustment
2.	eraser and etc.
3.	move color palletes
4.	ctrl + z
5.	hover
6.	useMemo
7.	save color palletes
8.	user feedback (Tata, Ronnakrit P. Darunsart, ธรรศวริทธิ์ เครือคล้าย  (นท), 42 Bangkok, Aria Aria etc.)

*/

/*
Refactoring Target (create reusable css)
1.	molecule/select // MAKE SELECT_MULTI_DROP AND SELECT_ONE_DROP, refactor css.
2.	molecule/template
3.	molecule/column
4.	page/top_header
5.	creating molecule/verticle
*/

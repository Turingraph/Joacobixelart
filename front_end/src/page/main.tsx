import { JSX } from "react";
import * as a from "../atom/type/alias";
import GRID_TEMPLATE_ROWS from "../molecule/html/grid_template_rows";
import { TOP_HEADER } from "./top_header/main";
import { STUDIO } from "./studio/main";

export default function MAIN()
{
	const JSX_BODY:JSX.Element[] = [
		<TOP_HEADER/>
		,
		<div style={{gridArea:"area_body", height:"100%"}}>
		<STUDIO/>
		</div>
	]
	return <GRID_TEMPLATE_ROWS
	is_fill_app={true}
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

To Do Now 
1.	Compartible selected_items and drag_items_arr in select_multi_items.tsx
2.	edit "RGB Palettes Editor"
3.	scroll bar for multiple color palettes
4.	Save color palettes edition ? Yes/No
5.	delete "add color" button and then make B_RGB_INPUT generate new color palettes
6.	transform color palettes (matrix multiplication, k means merge, merge, hsv, quaternion rotation, delete)
7.	auto merge

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
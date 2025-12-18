import React from "react";
import * as a from "../../atom/type/alias";
import B_LOGO from "../../molecule/button/b_logo";
import b_x from "../../asset/b_items/b_x.png"
import "./b_rgb_grid.css"

export function B_RGB_GRID({
	mode = false,
	title,
}:{
	mode?:boolean
	title:string
})
{
	const f_func = () => {
	    alert("Tally Hall");
	}
	let jsx_x = <></>
	if (mode === true)
	{
		jsx_x = <B_LOGO logo={b_x as a.t_logo} func={f_func as a.t_func} size={20}/>
	}
	return <div style={{
		margin:"0px",
		padding:"0px",
		width:"45px", 
		height:"45px", 
	}}
		className="CONTAINER_B_RGB_GRID"
	>
		<div style={{
			margin:"0px", 
			padding:"0px",
			width:"100%",
			height:"100%"
		}}
			className="B_RGB_GRID"
			draggable={mode!}
		>
		{jsx_x}
		<p style={{margin:"0px"}}>{title}</p>
		</div>
	</div>
}

const draggables = document.querySelectorAll('.B_RGB_GRID')
const containers = document.querySelectorAll('.CONTAINER_B_RGB_GRID')

draggables.forEach(draggable => {
	draggable.addEventListener('dragstart', () => {
		draggable.classList.add('DRAGGED_B_RGB_GRID')
	})
	draggable.addEventListener('dragend', () => {
		draggable.classList.remove('DRAGGED_B_RGB_GRID')
	})
})

containers.forEach(container => {
	container.addEventListener('dragover', e => {
		e.preventDefault()
		const draggable = document.querySelector('.DRAGGED_B_RGB_GRID')
		if (draggable !== null)
		{
			container.appendChild(draggable)
		}
	})
})
import * as fc from "fabric";
import { RefObject } from "react";
import * as a from "../../../atom/type/alias";
import { paint_a_point } from "../draw/draw_fc_canvas";
import { t_dim, t_practical_config } from "../utils/type";

export function get_f_hover(
	all_grids:t_dim,
	current_grid:number|undefined,
	config:Omit<t_practical_config, "rgb">
)
{
	function output_func(input:string|undefined){
		if (current_grid)
			paint_a_point(
				all_grids,
				current_grid,
				{...config, ...{rgb:input}}
			)
	}
	return output_func as a.t_func_x<string|undefined>
}

export function update_mouse_down_state(
	main_canvas:fc.Canvas,
	Ref_MouseDown:RefObject<boolean>
){
	main_canvas.on({
		"mouse:down":()=>{
			Ref_MouseDown.current = true
		},
		"mouse:up":()=>{
			Ref_MouseDown.current = false
		}
	})
}

export function add_mouse_down(
	main_canvas:fc.Canvas,
	f_hover:a.t_func_x<string|undefined>,
	func:a.t_func_x<number>,
	get_position:a.t_func_xy<any, number>
){
	main_canvas.on({
		"mouse:down":(e:any)=>{
			f_hover(undefined)
			func(get_position(e))
			main_canvas.requestRenderAll()
		},
	})
}

export function add_mouse_out(
	main_canvas:fc.Canvas,
	f_hover:a.t_func_x<string|undefined>,
	func:a.t_func,
){
	main_canvas.on({
		"mouse:out":()=>{
			f_hover(undefined)
			func()
			main_canvas.requestRenderAll()
		}
	})
}

export function add_mouse_move(
	main_canvas:fc.Canvas,
	Ref_MouseDown:RefObject<boolean>,
	f_hover:a.t_func_x<string|undefined>,
	func:a.t_func_x<number>,
	get_position:a.t_func_xy<any, number>
){
	main_canvas.on({
		"mouse:move":(e:any)=>{
			f_hover(undefined)
			if (Ref_MouseDown.current === true)
				f_hover("#FFFFFF55")
			else
				func(get_position(e))
			main_canvas.requestRenderAll()
		}
	})
}

export function add_mouse_up(
	main_canvas:fc.Canvas,
	func:a.t_func,
){
	main_canvas.on({
		"mouse:up":()=>{
			func()
		}
	})
}

/*
export function add_on_event(
	main_canvas:fc.Canvas,
	Ref_MouseDown:RefObject<boolean>,
	f_hover_func:a.t_func_x<string|undefined>,
	f_on_click:a.t_func,
	f_mouse_down:a.t_func,
	f_mouse_out:a.t_func,
){
	main_canvas.on({
		"mouse:out":()=>{
			f_hover_func(undefined)
			f_mouse_out()
			main_canvas.requestRenderAll()
		},
		"mouse:down":(e:any)=>{
			f_hover_func(undefined)
			f_on_click()
			Ref_MouseDown.current = true
			main_canvas.requestRenderAll()
		},
		"mouse:move":(e:any)=>{
			f_hover_func(undefined)
			if (Ref_MouseDown.current === true)
				f_hover_func("#FFFFFF55")
			else
				f_mouse_down()
			main_canvas.requestRenderAll()
		},
		"mouse:up":()=>{
			Ref_MouseDown.current = false
			f_mouse_down()
		}
	})
}*/

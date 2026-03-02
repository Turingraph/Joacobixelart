import * as fc from "fabric"
import { useContext, useEffect, useRef } from "react"
import * as a from "../../../atom/type/alias"
import { f_throttle } from "../../../molecule/hook/Throttle"
import { CONTEXT_CANVAS } from "../../../molecule/hook/context"
import { create_grids, create_init_canvas } from "../canvas_action/create_canvas"
import { mouse_update_grid_global, mouse_update_grid_local, paint_a_point } from "../draw/draw_fc_canvas"
import { draw_straight_line_freely_in_canvas } from "../draw/draw_straight_line"
import { is_mouse_in_canvas, mouse_to_ith_grid, one_dim_to_two_dim } from "../utils/calculate_hover_position"
import { t_canvas_mouse_down, t_canvas_on_click, t_practical_shape } from "../utils/type"

// https://www.geeksforgeeks.org/javascript/
// fabric-js-polygon-lockmovementx-property/
const group_config = {
	subTargetCheck: true,
	selectable: false,
	lockMovementX: true,
	lockMovementY: true,
}

export default function CANVAS_BASIC({
	pixel_size = 1,
	pixel_rgb,
	f_on_click,
	f_mouse_down = {
		scale:"LOCAL",
		func:((input)=>{}) as a.t_func_x<t_practical_shape>
	},
}:{
	pixel_size?:number,
	pixel_rgb:string|undefined,
	f_on_click:t_canvas_on_click,
	f_mouse_down?:t_canvas_mouse_down,
})
{
	const {grid, all_grids, canvas} = useContext(CONTEXT_CANVAS)
	const Ref_Time = useRef<number>(0)
	const Ref_Canvas = useRef<null|any>(null)
	const Ref_CurrentGrid = useRef<number>(0)
	const Ref_PrevGrid = useRef<undefined|number>(undefined)
	const Ref_FirstGrid = useRef<undefined|number>(undefined)
	const Ref_MouseDown = useRef<boolean>(false)
	useEffect(()=>{
			const {init_canvas: main_canvas, width, border} = create_init_canvas(Ref_Canvas, canvas, all_grids, grid)
			let group = create_grids(all_grids, border, grid, false)
			let group_hover = create_grids(all_grids, border, grid, true)
			main_canvas.add(new fc.Group(group, group_config))
			main_canvas.add(new fc.Group(group_hover, group_config))
			const do_not_hover_config = {
				target:group_hover,
				rgb:undefined,
				size:pixel_size
			}
			const global_grid_config = {
				rgb:pixel_rgb,
				target:group_hover,
				size:pixel_size
			}
			const local_grid_config = {
				rgb:pixel_rgb,
				target:group,
				size:pixel_size
			}
			function mouse_update_grid(e:any, func:a.t_func_x<number>, include_edge:boolean = false)
			{
				const {mouse_position, hover} = mouse_to_ith_grid(
					Ref_Canvas, {w:e.e.clientX, h:e.e.clientY}, grid, border, width)
				if (is_mouse_in_canvas(mouse_position, canvas))
				{
					func(hover)
					Ref_CurrentGrid.current = hover
					main_canvas.requestRenderAll()
				}
				else if (Ref_MouseDown.current === true && include_edge === true)
				{
					const mouse_position_index = {
						w:Math.floor(mouse_position.w/grid.w),
						h:Math.floor(mouse_position.h/grid.h),
					}
					const first_grid_index = one_dim_to_two_dim(Ref_FirstGrid.current, width)
					if (first_grid_index !== undefined && f_mouse_down.scale === "GLOBAL")
					{
						const edge_girds = draw_straight_line_freely_in_canvas(all_grids, first_grid_index, mouse_position_index)
						const edge_current = edge_girds[0] === Ref_FirstGrid.current ? edge_girds[edge_girds.length - 1] : edge_girds[0]
						Ref_CurrentGrid.current = edge_current
						mouse_update_grid_global(
							Ref_FirstGrid,
							Ref_PrevGrid,
							Ref_CurrentGrid,
							global_grid_config,
							f_mouse_down.func
						)
					}
					const prev_grid_index  = one_dim_to_two_dim(Ref_PrevGrid.current , width)
					if (prev_grid_index !== undefined && f_mouse_down.scale === "LOCAL")
					{
						const edge_girds = draw_straight_line_freely_in_canvas(all_grids, prev_grid_index, mouse_position_index)
						const edge_current = edge_girds[0] === Ref_PrevGrid.current ? edge_girds[edge_girds.length - 1] : edge_girds[0]
						Ref_CurrentGrid.current = edge_current
						mouse_update_grid_local(
							Ref_PrevGrid,
							Ref_CurrentGrid,
							f_mouse_down.func,
							local_grid_config
						)
						Ref_PrevGrid.current = undefined
						Ref_MouseDown.current = false
					}
					main_canvas.requestRenderAll()
				}
			}
			main_canvas.on({
				"mouse:out":()=>{
					if (Ref_CurrentGrid.current !== undefined){
						paint_a_point(
							all_grids,
							Ref_CurrentGrid.current,
							do_not_hover_config
						)
						main_canvas.requestRenderAll()
					}
				},
				"mouse:down":(e:any)=>{
					Ref_MouseDown.current = true
					paint_a_point(
						all_grids,
						Ref_CurrentGrid.current,
						do_not_hover_config
					)
					mouse_update_grid(e, ((input:number)=>{
						f_on_click({grid:input, size:pixel_size, rgb:pixel_rgb,
							target:group})
						Ref_PrevGrid.current = input
						Ref_FirstGrid.current = input
					}) as a.t_func_x<number>)
				},
				"mouse:up":()=>{
					if (f_mouse_down.scale === "GLOBAL")
						mouse_update_grid_global(
							Ref_FirstGrid,
							Ref_PrevGrid,
							Ref_CurrentGrid,
							global_grid_config,
							f_mouse_down.func,
							group
						)
					Ref_MouseDown.current = false
				},
				"mouse:move":(e:any)=>{
					f_throttle(Ref_Time, 10, (()=>{
					mouse_update_grid(e,((input:number)=>{
						paint_a_point(
							all_grids,
							Ref_CurrentGrid.current,
							do_not_hover_config
						)
						if (Ref_MouseDown.current === false)
							paint_a_point(
								all_grids,
								input,
								{
									size:pixel_size,
									rgb:"#FFFFFF55",
									target:group_hover
								}
							)
						else
						{
							if (f_mouse_down.scale === "GLOBAL")
								mouse_update_grid_global(
									Ref_FirstGrid,
									Ref_PrevGrid,
									Ref_CurrentGrid,
									global_grid_config,
									f_mouse_down.func
								)
							if (f_mouse_down.scale === "LOCAL")
								mouse_update_grid_local(
									Ref_PrevGrid,
									Ref_CurrentGrid,
									f_mouse_down.func,
									local_grid_config
								)
						}
					}) as a.t_func_x<number>, true)
					}) as a.t_func)
				}
			})
			main_canvas.renderAll()
			return ()=>{main_canvas.dispose()}
		})
	return <div className="fill center_box">
		<canvas id="fabrik_canvas" ref={Ref_Canvas}></canvas>
	</div>
}

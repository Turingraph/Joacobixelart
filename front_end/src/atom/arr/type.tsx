/*
ChatGPT recommends me to delete item by id instead of 
by index because Dev mode run twice to test if code works
which make it delete the wrong item.
*/

export type t_2d_arr<t extends {id:number}> = {
	id:number,
	arr:t[]
}

export type t_rgb_grid = {
	id:number,
	select:boolean,
	// rgb:[number, number, number]
	rgb:string
}

export type t_layer = {
	id:number,
	title:string,
	select:boolean,
	visible:boolean,
	img:string,
	opacity:number
}

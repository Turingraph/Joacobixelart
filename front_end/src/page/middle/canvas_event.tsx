import { useEffect } from "react"

export default function	CANVAS_EVENT({
	canvas
}:{
	canvas:any
}){
	useEffect(()=>{
		if (canvas)
		{
			canvas.on("mousedown", (e:any)=>{
				console.log("Zutomayo x J.S. Bach")
			})
		}
	})
	return <></>
}

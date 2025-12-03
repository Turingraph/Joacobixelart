import B_STR, {t_B_STR} from "../../atom/button/b_str";

export function INLINE_BUTTONS({
	jsx_array
}:{
	jsx_array:t_B_STR[]
})
{
	return <div>
		{jsx_array.map((item, index:number)=>{
			return <div style={{display:"inline-block"}}>
				<B_STR title={item.title} func={item.func}/>
				</div>
		})}
	</div>
}

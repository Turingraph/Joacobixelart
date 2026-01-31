import { useContext, useEffect, useRef, useState } from "react"
import { CONTEXT_USE_STATE_GLOBAL } from "../../molecule/hook/context"
import useDragArr, { CONTEXT_DRAG } from "../../molecule/hook/useDragArr"
import SELECT_ONE_TAP from "../../molecule/selection_taps/select_one_tap"
import { B_RGB_GRID } from "../../organism/button/b_rgb_grid"

export default function RGB_PALETTES()
{
	const [SS_SelectRGB, setSS_SelectRGB] = useState<number>(0)
	const setSS_NewRGB = useContext(CONTEXT_USE_STATE_GLOBAL).new_rgb.setss
	const {ss: SS_RGBArr, setss: setSS_RGBArr} = useContext(CONTEXT_USE_STATE_GLOBAL).rgb_arr
	const {
		Ref_DragOldIndex	,
		Ref_DragNewIndex	,
		SS_DragOldIndex		,
		setSS_DragOldIndex } = useDragArr()
	const Ref_RGBArrLength = useRef<number>(SS_RGBArr.length);
	const Ref_SelectRGB = useRef<number|undefined>(undefined);
	useEffect(()=>{	
		if (Ref_SelectRGB.current !== undefined)
		{
			setSS_SelectRGB(Ref_SelectRGB.current);
			setSS_NewRGB(SS_RGBArr[Ref_SelectRGB.current].rgb)
			Ref_SelectRGB.current = undefined;
		}
	}, [SS_RGBArr, setSS_NewRGB])
	useEffect(()=>{
		if (Ref_RGBArrLength.current < SS_RGBArr.length)
		{
			setSS_SelectRGB(SS_RGBArr.length - 1)
			Ref_RGBArrLength.current = SS_RGBArr.length
		}
	}, [setSS_SelectRGB, SS_RGBArr.length])
	return <div className="cornice" style={{backgroundColor:"#FF0000"}}>
	<CONTEXT_DRAG 
	value={{
	Ref_DragOldIndex:Ref_DragOldIndex,
	Ref_DragNewIndex:Ref_DragNewIndex,
	SS_DragOldIndex	:SS_DragOldIndex	,
	setSS_DragOldIndex:setSS_DragOldIndex,
	setSS_Arr:setSS_RGBArr
	}}
	>
	<SELECT_ONE_TAP
		class_name={"left_table_taps"}
		use_select_item={{
			ss:SS_SelectRGB, 
			setss:((input:number)=>{
					setSS_SelectRGB(input);
					setSS_NewRGB(SS_RGBArr[input].rgb);
					Ref_SelectRGB.current = input;
			})
		}}
		jsx_select_array={SS_RGBArr.map((item, index)=>{
			return <B_RGB_GRID rgb={item.rgb} key={index}/>
		})}
	/></CONTEXT_DRAG>
	</div>
}
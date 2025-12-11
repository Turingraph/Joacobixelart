export function num_to_size(input:number|undefined, maxval:number, min = 0){
    if (input === undefined){
        return maxval
    }
    else if (input >= maxval){
        return maxval
    }
    else if (input <= min){
        return min
    }
    else{
        return input 
    }
}

export function num_to_255(input:number){
    return num_to_size(input,255)
}

export function num_to_rgb(input:undefined|number|number[]){
	if (input === undefined){
		return "#FFFFFF"
	}
	else if (typeof input === "number"){
		return "#"+num_to_255(input).toString(16) + num_to_255(input).toString(16) + num_to_255(input).toString(16);
	}
	else if (Array.isArray(input) === true){
		if (input.length === 0){
			return "#FFFFFF"
		}
		else if (input.length === 1){
			return "#"+num_to_255(input[0]).toString(16) + num_to_255(input[0]).toString(16) + num_to_255(input[0]).toString(16);
		}
		else if (input.length === 2){
			return "#"+num_to_255(input[0]).toString(16)+num_to_255(input[1]).toString(16);
		}
		else{
			return "#"+num_to_255(input[0]).toString(16)+num_to_255(input[1]).toString(16) + num_to_255(input[2]).toString(16);
		}
	}
	else{
		return "#FFFFFF";
	}
}

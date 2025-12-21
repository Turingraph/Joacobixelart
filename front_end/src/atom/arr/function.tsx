export function unique_arr<t>(arr:t[], unique:undefined|boolean = undefined){
    // https://www.geeksforgeeks.org/
    // how-to-convert-array-of-objects-into-unique-array-of-objects-in-javascript/
    if(unique === true){
        return arr.filter(
            (value, index, self) => self.findIndex((obj) =>
                JSON.stringify(obj) === JSON.stringify(value)) === index
        );
    }
    return arr
}

//-------------------------------------------------------------------------

// TYPE : "SORT"

export function sort_arr<t>(
    arr:t[],
    is_ascending:boolean
){
    // https://stackoverflow.com/questions/21687907/
    // typescript-sorting-an-array

    // https://stackoverflow.com/questions/26871106/
    // check-if-all-elements-in-array-are-strings
    if (is_ascending === true)
    {
        return arr.sort((n0, n1) => (n0 as t) < (n1 as t) ? -1 : 1)
    }
    return arr.sort((n0, n1) => (n0 as t) > (n1 as t) ? -1 : 1)
}

export function sort_arr_key<
    t extends object, 
    k extends keyof t>(
    arr:t[],
    is_ascending:boolean,
    key:k
){
    // https://stackoverflow.com/questions/21687907/
    // typescript-sorting-an-array

    // https://stackoverflow.com/questions/26871106/
    // check-if-all-elements-in-array-are-strings
    if (is_ascending === true)
    {
        return arr.sort((n0, n1) => (n0 as t)[key] < (n1 as t)[key] ? -1 : 1)
    }
    return arr.sort((n0, n1) => (n0 as t)[key] < (n1 as t)[key] ? -1 : 1)
}

//-------------------------------------------------------------------------

// TYPE : "EDIT"

export function edit<t>(
    arr:t[],
    index:number,
    input:t
){
    const UPDATE_ARR = [...arr]
    if(index >= 0 && index < UPDATE_ARR.length){
        UPDATE_ARR[index] = input
    }
    return UPDATE_ARR
}

//-------------------------------------------------------------------------

// TYPE : "PUSH"

export function push_arr<t>(
    arr:t[],
    input:t,
){
    const UPDATE_ARR = [...arr]
    UPDATE_ARR.push(input)
    return UPDATE_ARR
}

//-------------------------------------------------------------------------

// TYPE : "DELETE"

export function delete_item<t>(arr:t[], index:number){
    if(index >= 0 && index <= arr.length){
        let update_arr = [...arr]
        update_arr.splice(index, 1)
        return update_arr
    }
    return arr
}

// https://stackoverflow.com/questions/1068834/
// object-comparison-in-javascript

export function item_to_index<t>(arr:t[], target:t)
{
    let i = 0;
    while (i < arr.length)
    {
        if (JSON.stringify(arr[i]) === JSON.stringify(target))
        {
            return (i);
        }
        i += 1;
    }
    return -1
}

//-------------------------------------------------------------------------

// TYPE : COPY

export function copy_item<t>(arr:t[], index:number){
    if(index >= 0 && index <= arr.length){
        const UPDATE_ARR = push_arr(arr, arr[index])
        return UPDATE_ARR
    }
    return arr
}

export function copy_unique_item<
    t extends object[], 
    k extends keyof t[number],
    >(
    arr:t,
    index:number,
    key:k
){
    if(index >= 0 && index < arr.length){
        const UPDATE_ARR = [...arr]
        const NEW_OBJ:t[number] = JSON.parse(JSON.stringify(UPDATE_ARR[index]))
        if (typeof NEW_OBJ[key] === "string")
        {
            const IS_DOT = (NEW_OBJ[key] as string).includes(".")
            const NAME = (NEW_OBJ[key] as string).split(".")
            const NEW_NAME = NAME[0] + "_clone" + (IS_DOT ? "." : "") + NAME.slice(1, NAME.length)
            NEW_OBJ[key] = NEW_NAME as t[number][k]
            UPDATE_ARR.splice(index + 1, 0, NEW_OBJ)
            return UPDATE_ARR
        }
        return arr
    }
    return arr
}

//-------------------------------------------------------------------------

// TYPE : "DRAG"

/*
https://stackoverflow.com/questions/25492329/
is-array-slice-enough-to-handle-a-multidimensional-array-in-javascript
So the answer is no: slice by itself is not enough to clone a multidimensional array. 
*/

export function drag<t>(arr:t[], new_index:number, old_index:number)
{
    if (arr.length <= 1 || new_index < 0 || new_index >= arr.length || old_index < 0 || old_index >= arr.length || arr.length === 0)
    {
        return arr
    }
    if (new_index === 0)
    {
        let update_arr = delete_item(structuredClone(arr), old_index)
        return [
            ...[arr[old_index]],
            ...update_arr
        ]
    }
    if (new_index === arr.length - 1)
    {
        let update_arr = delete_item(structuredClone(arr), old_index)
        return [
            ...update_arr,
            ...[arr[old_index]]
        ]
    }
    let update_arr = delete_item(structuredClone(arr), old_index)
    let left_arr  = structuredClone(update_arr).slice(0, new_index)
    let right_arr = structuredClone(update_arr).slice(new_index, arr.length)
    // console.log("------------------------------------------------")
	// console.log("new_index",new_index)
	// console.log("old_index",old_index)
    // console.log("input:", arr)
    // console.log("left :", left_arr)
    // console.log("target", arr[old_index])
    // console.log("right:", right_arr)
    return [
        ...left_arr,
        ...[arr[old_index]],
        ...right_arr
    ]
}

//-------------------------------------------------------------------------

// TYPE : "WARNING"

export function warning(file_title:string)
{
    console.log("--------------------------------------------------------------------")
    console.log("The action.type of useArr is invalid.")
    console.log("The action.type should be \"COPY\"|\"PUSH\"|\"DELETE\"|\"EDIT\"|\"SET\"")
    console.log("Warning from frontend/ src/ atom/ arr/ " + file_title + "/ function reducer")
    console.log("--------------------------------------------------------------------")
}

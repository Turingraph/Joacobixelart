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

export function sort_arr<t extends object[], k extends keyof t[number]>(
    arr:t,
    sort_mode:undefined|"NO_SORT"|"SORT"|"REVERSE",
    sort_key:undefined|k
){
    // https://stackoverflow.com/questions/21687907/
    // typescript-sorting-an-array

    // https://stackoverflow.com/questions/26871106/
    // check-if-all-elements-in-array-are-strings

    if(sort_key === undefined || sort_mode === undefined){
        return arr
    }
    switch(sort_mode){
        case "SORT":{
            return arr.sort((n0, n1) => (n0 as t[number])[sort_key] < (n1 as t[number])[sort_key] ? -1 : 1)
        }
        case "REVERSE":{
            return arr.sort((n0, n1) => (n0 as t[number])[sort_key] > (n1 as t[number])[sort_key] ? -1 : 1)
        }
        case "NO_SORT":{
            return arr
        }
        default:{
            console.log("--------------------------------------------------------------------")
            console.log("The sort_mode is invalid.")
            console.log("The sort_mode should be \"SORT\"|\"REVERSE\"|\"NO_SORT\"")
            console.log("Warning from frontend/ src/ src/ hook/ func_arrobj.tsx/ function sort_arrobj")
            console.log("--------------------------------------------------------------------")
            return arr
        }
        }
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

// TYPE : "EDIT_KEY"

export function edit_key<
    t extends object, 
    k extends keyof t>(
        arr:t[],
        index:number,
        input:t[k],
        key:k,
    ){
    const UPDATE_ARR = [...arr]
    // console.log("index",index)
    // console.log("UPDATE_ARR.length",UPDATE_ARR.length)
    if(index >= 0 && index < UPDATE_ARR.length){
        (UPDATE_ARR[index] as t)[key] = input
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
        const UPDATE_ARR = [...arr]
        UPDATE_ARR.splice(index, 1)
        return UPDATE_ARR
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

// TYPE : "WARNING"

export function warning(file_title:string)
{
    console.log("--------------------------------------------------------------------")
    console.log("The action.type of useArr is invalid.")
    console.log("The action.type should be \"COPY\"|\"PUSH\"|\"DELETE\"|\"EDIT\"|\"SET\"")
    console.log("Warning from frontend/ src/ atom/ arr/ " + file_title + "/ function reducer")
    console.log("--------------------------------------------------------------------")
}

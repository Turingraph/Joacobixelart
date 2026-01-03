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

// export function sort_arr<t>(
//     arr:t[],
//     is_ascending:boolean
// ){
//     // https://stackoverflow.com/questions/21687907/
//     // typescript-sorting-an-array

//     // https://stackoverflow.com/questions/26871106/
//     // check-if-all-elements-in-array-are-strings
//     if (is_ascending === true)
//     {
//         return arr.sort((n0, n1) => (n0 as t) < (n1 as t) ? -1 : 1)
//     }
//     return arr.sort((n0, n1) => (n0 as t) > (n1 as t) ? -1 : 1)
// }

export function sort_arr<
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

export function edit<t extends {id:number}>(
    arr:t[],
    id:number,
    input:t
){
    const UPDATE_ARR = [...arr]
    let i = 0
    while (i < UPDATE_ARR.length)
    {
        if (UPDATE_ARR[i].id === id)
        {
            UPDATE_ARR[i] = {
                ...input,
                id:UPDATE_ARR[i].id
            }
        }
        i += 1
    }
    return UPDATE_ARR
}

//-------------------------------------------------------------------------

// TYPE : "PUSH"

export function push_arr<t extends {id:number}>(
    arr:t[],
    input:t,
){
    const UPDATE_ARR = [...arr]
    let new_id = Math.random();
    const ids = new Set(arr.map(item => item.id));
    while (ids.has(new_id)) {
        new_id = Math.random();
    }
    const newItem = { ...input, id: new_id }; // clone to avoid mutating input
    UPDATE_ARR.push(newItem);
    return UPDATE_ARR
}

//-------------------------------------------------------------------------

// TYPE : "DELETE"

export function delete_item<t extends {id:number}>(arr:t[], id:number){
    return arr.filter((item)=> item.id !== id)
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

// export function copy_item<t>(arr:t[], index:number){
//     if(index >= 0 && index <= arr.length){
//         const UPDATE_ARR = push_arr(arr, arr[index])
//         return UPDATE_ARR
//     }
//     return arr
// }

export function copy_item<
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

// delete_item delete the selected item of array based on the selected id.
export function drag<t extends {id:number}>(arr:t[], new_index:number, old_index:number)
{
    if (arr.length <= 1 || new_index < 0 || new_index >= arr.length || old_index < 0 || old_index >= arr.length || arr.length === 0)
    {
        return arr
    }
    let target_id = arr[old_index].id
    if (new_index === 0)
    {
        let update_arr = delete_item(structuredClone(arr), target_id)
        return [
            ...[arr[old_index]],
            ...update_arr
        ]
    }
    if (new_index === arr.length - 1)
    {
        let update_arr = delete_item(structuredClone(arr), target_id)
        return [
            ...update_arr,
            ...[arr[old_index]]
        ]
    }
    let update_arr = delete_item(structuredClone(arr), target_id)
    let left_arr  = structuredClone(update_arr).slice(0, new_index)
    let right_arr = structuredClone(update_arr).slice(new_index, arr.length)
    return [
        ...left_arr,
        ...[arr[old_index]],
        ...right_arr
    ]
}

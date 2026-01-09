export type nominal<t> = t & { readonly '': unique symbol };

// button/
export type t_logo  = nominal<string | undefined>
export type t_func  = nominal<()=>(void|Promise<void>)>
export type t_func_xy<x,y>  = nominal<(input:x)=>(y)>
export type t_func_x<x>  = nominal<(input:x)=>(void|Promise<void>)>


// str
export type t_str_header  = nominal<string>
export type t_str_hover  = nominal<string>
export type t_str_input  = nominal<string>

// css
// export type t_class_name  = nominal<string>
export type t_css = nominal<string>

// function
export type t_setss<t>= React.Dispatch<
        React.SetStateAction<t>
    >|((e:t)=>void)
export type t_use_state<t>= {
    ss:t,
    setss:t_setss<t>
}

// rgb
export type t_rgb={
    r:number,
    g:number,
    b:number
}
export type nominal<t> = t & { readonly '': unique symbol };

// button/
export type t_logo  = nominal<string | undefined>
export type t_func  = nominal<()=>(void|Promise<void>)>
export type t_rgb_function  = nominal<string>

// str
export type t_str_header  = nominal<string>
export type t_str_hover  = nominal<string>
export type t_str_input  = nominal<string>

// css
// export type t_class_name  = nominal<string>
export type t_css = nominal<string>

// utils
export type t_setss<t>= React.Dispatch<
        React.SetStateAction<t>
    >|((e:t)=>void)
export type t_use_state<t>= {
    ss:t,
    setss:t_setss<t>
}

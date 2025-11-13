export type nominal<t> = t & { readonly '': unique symbol };

// button/
export type t_logo  = nominal<string | undefined>
export type t_name  = nominal<string>
export type t_func  = nominal<()=>(void|Promise<void>)>
export type t_rgb_function  = nominal<string>

// str
export type t_str_header  = nominal<string>
export type t_str_hover  = nominal<string>
export type t_str_input  = nominal<string>

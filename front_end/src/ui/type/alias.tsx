export type nominal<t> = t & { readonly '': unique symbol };

// button/
export type logo  = nominal<string>
export type name  = nominal<string>
export type b_function  = nominal<string>
export type b_rgb_function  = nominal<string>

// str
export type str_header  = nominal<string>
export type str_hover  = nominal<string>
export type str_input  = nominal<string>

import { createContext, CSSProperties, } from 'react';

export const CONTEXT_CSS_COLOR = createContext<{backgroundColor:string}|{}>({});
export const CONTEXT_CSS_MULTI_SELECT_BS = createContext<CSSProperties>({});

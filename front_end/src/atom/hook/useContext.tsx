import { createContext, CSSProperties, JSX } from 'react';

// const CSS_CONTEXT = createContext<(CSSProperties|undefined)[]>([{}]);
export const CSS_CONTEXT = createContext<CSSProperties>({});
export const JSX_CONTEXT = createContext<JSX.Element[]>([<></>]);

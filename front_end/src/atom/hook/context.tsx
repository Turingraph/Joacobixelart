import { createContext, JSX } from 'react';

export const CONTEXT_OTHER_JSX = createContext<{
	front:JSX.Element[]|undefined,
	back:JSX.Element[]|undefined
}|undefined>(undefined)

import { createContext, CSSProperties } from 'react';

// This context might be useful in the future, 
// e.g. highlight some div for testing, multi_select_bs.tsx in future specialized version etc.
// export const CONTEXT_CSS_COLOR = createContext<{backgroundColor:string}|{}>({});

export const CONTEXT_CSS_MULTI_SELECT_BS = createContext<CSSProperties>({});

// export function useOptionalContext(input:React.Context<any|undefined>){
//     const context = useContext(input);
//     if (context === undefined) {
//         throw new Error('context not found');
//     }
//     return context;
// };

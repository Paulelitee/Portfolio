import { createContext } from 'react'


export const Themecontext = createContext({
    theme: '',
    setTheme: (theme: string) => {},
})

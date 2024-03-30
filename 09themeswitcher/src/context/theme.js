import { createContext, useContext } from "react";

export const themecontext=createContext({
    thememode:"light",
    lighttheme:()=>{},
    darktheme:()=>{}
})

export const ThemeProvider=themecontext.Provider;

//creating our own hook
export default function useTheme(){
    return useContext(themecontext);
}
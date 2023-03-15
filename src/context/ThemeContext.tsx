import React, { createContext, ReactNode, useState } from "react";

type ThemeType = "lightBuild" | "darkBuild";

type ThemeContextType = {
    theme: ThemeType,
    changeTheme: ()=> void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "lightBuild",
    changeTheme: ()=> {}
});

type Themeprops = {
    children: ReactNode
}

const ThemProvider = (props:Themeprops) => {
    const [theme, setTheme] = useState<ThemeType>("lightBuild");

    const changeTheme = ():void => {
        setTheme((pre)=> {
            return pre == "lightBuild" ? "darkBuild" : "lightBuild"
        })
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            changeTheme
        }}>{props.children}</ThemeContext.Provider>
    )
}

export default ThemProvider
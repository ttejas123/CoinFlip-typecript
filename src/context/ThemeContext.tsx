import React, { createContext, ReactNode, useState } from "react";

type ThemeType = "light" | "dark";

type ThemeContextType = {
    theme: ThemeType,
    changeTheme: ()=> string
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    changeTheme: ()=> ""
});

type Themeprops = {
    children: ReactNode
}

const ThemProvider = (props:Themeprops) => {
    const [theme, setTheme] = useState<ThemeType>("dark");

    const changeTheme = () => {
        setTheme((pre)=> {
            return pre == "light" ? "dark" : "light"
        })

        return "";
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            changeTheme
        }}>{props.children}</ThemeContext.Provider>
    )
}

export default ThemProvider
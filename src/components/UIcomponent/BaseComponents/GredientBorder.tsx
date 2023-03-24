import React, { ReactNode, useCallback, useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext';

type GredientBorderProps = {
    children?: ReactNode,
    height?: string,
    tokentype?: "sol" | "t#"
}

function GredientBorder(props: GredientBorderProps) {
    const theme = useContext(ThemeContext);
    const TokentypeStyle = useCallback(() => {
        switch(props.tokentype){
            case "sol":
                return "from-[#00FFA3] to-[#DC1FFF]"
            case "t#":
                return "from-green-300 to-green-400"
            default:
                return "from-black to-black"
        }
    }, [props.tokentype])
  return (
    <div className={`${props.height ? props.height : "h-36"} w-full rounded-2xl bg-gradient-to-r ${TokentypeStyle()} p-0.5 hover:scale-105 transition-all duration-150 relative overflow-hidden`}>
        <div className={`h-full w-full ${theme.theme == 'light' ? "bg-white" : "bg-black"} rounded-2xl `}>
                {props.children}
        </div>
    </div>
  )
}

export default GredientBorder
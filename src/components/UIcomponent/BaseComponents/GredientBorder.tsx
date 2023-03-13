import React, { ReactNode, useCallback, useContext } from 'react'

type GredientBorderProps = {
    children?: ReactNode,
    height?: string,
    tokentype?: string
}

function GredientBorder(props: GredientBorderProps) {
    const TokentypeStyle = useCallback(() => {
        switch(props.tokentype){
            case "solana":
                return "from-[#00FFA3] to-[#DC1FFF]"
            case "usdc":
                return "from-sky-400 to-sky-600"
            default:
                return "from-black to-black"
        }
    }, [props.tokentype])
  return (
    <div className={`${props.height ? props.height : "h-36"} w-full rounded-2xl bg-gradient-to-r ${TokentypeStyle()} p-0.5 hover:scale-105 transition-all duration-150 relative`}>
        <div className="h-full w-full bg-white rounded-2xl">
                {props.children}
        </div>
    </div>
  )
}

export default GredientBorder
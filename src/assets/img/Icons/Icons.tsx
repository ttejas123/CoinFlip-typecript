import {SELECT_FLIPTOKEN, SELECT_TOKEN_ARROWDOWN, SELECT_TOKEN_INFO, SELECT_TOKEN_COUNT, SELECT_TOKEN_COUNT_IN} from './IconsString'

// model props
type selectTokenArrowDownProps = {
    size?: string,
    color_hash: string,
    bgcolor_hash: string,
    className?: string
}

type selectTokenInfoProps = {
    size?: string,
    className?: string
}

type selectFlipTokenProps = {
    color?: string
    className?: string
}

type selectTokenCountProps = {
    size?: string
    className?: string
}

type selectTokenCountInProps = {
    size?: string
    className?: string
}

//Icon resolvers
export const SelctArrowDown = (props: selectTokenArrowDownProps) => {
    const ReplacementObjectValue:any = {
        "{STROKECOLOR}": props.color_hash,
        "{BGCOLOR}": props.bgcolor_hash,
        "{SIZE}": props.size ? props.size : "56"
    }
    const ProcessHtmlstr = SELECT_TOKEN_ARROWDOWN.replace(/{SIZE}|{BGCOLOR}|{STROKECOLOR}/gi, (matched):string => {
        return ReplacementObjectValue[matched];
    })

    return <div className={`${props.className} cursor-pointer hover:opacity-90`} dangerouslySetInnerHTML={{__html: ProcessHtmlstr}}></div>
}

export const SelctTokeninfo = (props: selectTokenInfoProps) => {
    const ReplacementObjectValue:any = {
        "{SIZE}": props.size ? props.size : "20"
    }
    const ProcessHtmlstr = SELECT_TOKEN_INFO.replace(/{SIZE}/gi, (matched):string => {
        return ReplacementObjectValue[matched];
    })

    return <div className={`${props.className} cursor-pointer hover:opacity-90`} dangerouslySetInnerHTML={{__html: ProcessHtmlstr}}></div>
}

export const SelectFlipToken = (props: selectFlipTokenProps) => {
    const ReplacementObjectValue:any = {
        "{COLOR}": props.color ? props.color : "#DC1FFF"
    }
    const ProcessHtmlstr = SELECT_FLIPTOKEN.replace(/{COLOR}/gi, (matched):string => {
        return ReplacementObjectValue[matched];
    })

    return <div className={`${props.className} absolute bottom-0`} dangerouslySetInnerHTML={{__html: ProcessHtmlstr}}></div>
}

export const SelectTokenCount = (props: selectTokenCountProps) => {
    const ReplacementObjectValue:any = {
        "{SIZE}": props.size ? props.size : "46"
    }
    const ProcessHtmlstr = SELECT_TOKEN_COUNT.replace(/{SIZE}/gi, (matched):string => {
        return ReplacementObjectValue[matched];
    })

    return <div className={`${props.className}`} dangerouslySetInnerHTML={{__html: ProcessHtmlstr}}></div>
}

export const SelectTokenCountIn = (props: selectTokenCountInProps) => {
    const ReplacementObjectValue:any = {
        "{SIZE}": props.size ? props.size : "22"
    }
    const ProcessHtmlstr = SELECT_TOKEN_COUNT_IN.replace(/{SIZE}/gi, (matched):string => {
        return ReplacementObjectValue[matched];
    })

    return <div className={`${props.className}`} dangerouslySetInnerHTML={{__html: ProcessHtmlstr}}></div>
}

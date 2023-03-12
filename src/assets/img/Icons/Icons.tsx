const SELECT_TOKEN_ARROWDOWN = `<svg width="{SIZE}" height="{SIZE}" viewBox="0 0 56 56" fill="{BGCOLOR}" xmlns="http://www.w3.org/2000/svg"><path d="M24 2.3094C26.4752 0.880338 29.5248 0.880339 32 2.3094L48.2487 11.6906C50.7239 13.1197 52.2487 15.7607 52.2487 18.6188V37.3812C52.2487 40.2393 50.7239 42.8803 48.2487 44.3094L32 53.6906C29.5248 55.1197 26.4752 55.1197 24 53.6906L7.75129 44.3094C5.27608 42.8803 3.75129 40.2393 3.75129 37.3812V18.6188C3.75129 15.7607 5.27608 13.1197 7.75129 11.6906L24 2.3094Z" fill="#292929"/><path d="M33.3332 25.3332L27.9998 30.6665L22.6665 25.3332" stroke="{STROKECOLOR}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const SELECT_TOKEN_INFO = `<svg width={SIZE} height={SIZE} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5999 9.9999C19.5999 12.546 18.5885 14.9878 16.7881 16.7881C14.9878 18.5885 12.546 19.5999 9.9999 19.5999C7.45382 19.5999 5.01203 18.5885 3.21168 16.7881C1.41133 14.9878 0.399902 12.546 0.399902 9.9999C0.399902 7.45382 1.41133 5.01203 3.21168 3.21168C5.01203 1.41133 7.45382 0.399902 9.9999 0.399902C12.546 0.399902 14.9878 1.41133 16.7881 3.21168C18.5885 5.01203 19.5999 7.45382 19.5999 9.9999ZM11.1999 5.1999C11.1999 5.51816 11.0735 5.82339 10.8484 6.04843C10.6234 6.27347 10.3182 6.3999 9.9999 6.3999C9.68164 6.3999 9.37642 6.27347 9.15137 6.04843C8.92633 5.82339 8.7999 5.51816 8.7999 5.1999C8.7999 4.88164 8.92633 4.57642 9.15137 4.35137C9.37642 4.12633 9.68164 3.9999 9.9999 3.9999C10.3182 3.9999 10.6234 4.12633 10.8484 4.35137C11.0735 4.57642 11.1999 4.88164 11.1999 5.1999ZM8.7999 8.7999C8.48164 8.7999 8.17642 8.92633 7.95137 9.15137C7.72633 9.37642 7.5999 9.68164 7.5999 9.9999C7.5999 10.3182 7.72633 10.6234 7.95137 10.8484C8.17642 11.0735 8.48164 11.1999 8.7999 11.1999V14.7999C8.7999 15.1182 8.92633 15.4234 9.15137 15.6484C9.37642 15.8735 9.68164 15.9999 9.9999 15.9999H11.1999C11.5182 15.9999 11.8234 15.8735 12.0484 15.6484C12.2735 15.4234 12.3999 15.1182 12.3999 14.7999C12.3999 14.4816 12.2735 14.1764 12.0484 13.9514C11.8234 13.7263 11.5182 13.5999 11.1999 13.5999V9.9999C11.1999 9.68164 11.0735 9.37642 10.8484 9.15137C10.6234 8.92633 10.3182 8.7999 9.9999 8.7999H8.7999Z" fill="#292929"/>
</svg>`

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
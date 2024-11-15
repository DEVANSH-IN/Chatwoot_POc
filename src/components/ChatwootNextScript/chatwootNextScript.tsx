import React from 'react'
import Script from 'next/script'

export interface ChatwootNextProps {
    token: string
    lazyOnLoad?: boolean
    beforeInteractive?: boolean
    afterInteractive?: boolean
    async?: boolean
    defer?: boolean
}

declare global {
    interface Window {
        chatwootSDK: any;
    }
}

function ChatwootNextScript(props: ChatwootNextProps) {
    const { token, ...restProps } = props
    const BASE_URL = 'https://app.chatwoot.com'
    const SCRIPT_URL = BASE_URL + '/packs/js/sdk.js'

    function onLoadHandler() {
        if (!token) {
            console.error('Chatwoot SDK requires token.')
        }
        if (!window.chatwootSDK) {
            console.error("Chatwoot SDK didn't load from the source and will not be initialized.")
        }
        window.chatwootSDK.run({
            websiteToken: token,
            baseUrl: BASE_URL,
        })
    }

    return <Script id="chatwoot-script" src={SCRIPT_URL} onLoad={onLoadHandler} {...restProps} />
}

export default ChatwootNextScript

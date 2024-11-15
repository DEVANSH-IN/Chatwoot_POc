'use client';
import React, { useEffect, Fragment } from 'react'

export interface ChatwootProps {
    token: string;
}

declare global {
    interface Window {
        chatwootSDK: any;
    }
}

function ChatwootScript(props: ChatwootProps) {
    const { token } = props
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

    useEffect(() => {
        const script = document.createElement('script')
        script.src = SCRIPT_URL
        script.async = true
        script.defer = true
        script.onload = onLoadHandler
        document.body.appendChild(script)

        return () => {
            script.removeEventListener('load', onLoadHandler)
            document.body.removeChild(script)
        }
    }, [])

    return <Fragment />
}

export default ChatwootScript

"use client"

import { useState } from "react"
import Script from "next/script"

export default function BotpressInitializer() {
  const [injectScriptLoaded, setInjectScriptLoaded] = useState(false)

  // This function will safely initialize Botpress
  const initializeBotpress = () => {
    // Check multiple times with increasing delays to ensure botpress is loaded
    const checkAndInitialize = (attempts = 0, maxAttempts = 5) => {
      if (attempts >= maxAttempts) {
        console.error("Failed to initialize Botpress after multiple attempts")
        return
      }

      if (typeof window !== "undefined" && window.botpress) {
        try {
          window.botpress.init({
            botId: "1c5d9e01-f29c-4871-979c-f7e13402eabf",
            configuration: {
              website: {},
              email: {},
              phone: {},
              termsOfService: {},
              privacyPolicy: {},
              color: "#3B82F6",
              variant: "solid",
              themeMode: "light",
              fontFamily: "inter",
              radius: 1,
            },
            clientId: "d513bef8-8842-4adf-b151-2e06b6b08c43",
          })
          console.log("Botpress initialized successfully")
        } catch (error) {
          console.error("Failed to initialize Botpress:", error)
        }
      } else {
        // If botpress is not available yet, try again after a delay
        const delay = Math.pow(2, attempts) * 100 // Exponential backoff: 100ms, 200ms, 400ms, 800ms, 1600ms
        console.log(`Botpress not available yet, retrying in ${delay}ms (attempt ${attempts + 1}/${maxAttempts})`)
        setTimeout(() => checkAndInitialize(attempts + 1, maxAttempts), delay)
      }
    }

    checkAndInitialize()
  }

  return (
    <>
      {/* First load the inject script which defines window.botpress */}
      <Script
        id="botpress-inject"
        src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Botpress inject script loaded")
          setInjectScriptLoaded(true)
          // Wait a moment to ensure the script has fully executed
          setTimeout(() => {
            initializeBotpress()
          }, 300)
        }}
      />

      {/* Only load the config script after the inject script is loaded */}
      {injectScriptLoaded && (
        <Script
          id="botpress-config"
          src="https://files.bpcontent.cloud/2025/03/29/14/20250329141635-FAA5SGHZ.js"
          strategy="afterInteractive"
          onLoad={() => {
            console.log("Botpress config script loaded")
            // Try to initialize again after the config script loads
            setTimeout(() => {
              initializeBotpress()
            }, 300)
          }}
        />
      )}
    </>
  )
}


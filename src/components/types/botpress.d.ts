interface BotpressConfiguration {
  website?: Record<string, any> 
email?: Record<string, any>
phone?: Record<string, any>
termsOfService?: Record<string, any>
privacyPolicy?: Record<string, any>
color?: string
variant?: string
themeMode?: string
fontFamily?: string
radius?: number
}

interface BotpressInitOptions {
  botId: string
  configuration: BotpressConfiguration
  clientId: string
}

interface Botpress {
  init: (options: BotpressInitOptions) => void
}

interface Window {
  botpress: Botpress
}
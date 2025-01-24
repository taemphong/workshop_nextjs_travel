import React from 'react'
import { ThemeProvider } from './theme-provider'
import { Toaster } from "@/components/ui/toaster"

const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange>
        {children}
        <Toaster />
      </ThemeProvider>
    </div>
  )
}

export default Providers

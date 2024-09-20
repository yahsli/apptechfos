'use client'
import { SessionProvider } from "next-auth/react"
import FirstProvider from "./FirstProvider"

export default function SessionProviderTwo({children}) {
  return (
    <SessionProvider>
        <FirstProvider>
            {children}
        </FirstProvider>
    </SessionProvider>
  )
}

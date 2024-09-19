'use client'
import { SessionProvider } from "next-auth/react"
import FirstProvider from "./FirstProvider"

export default function SessionProviderTwo({children,session}) {
  return (
    <SessionProvider session={session}>
        <FirstProvider>
            {children}
        </FirstProvider>
    </SessionProvider>
  )
}

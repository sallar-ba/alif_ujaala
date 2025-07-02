import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alif Ujaala - Learn Urdu for Kids",
  description:
    "An educational app designed for children aged 1-7 to learn Urdu through interactive tracing, alphabet recognition, and engaging story videos.",
  keywords: "Urdu learning, kids education, alphabet tracing, children app, Urdu alphabets",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

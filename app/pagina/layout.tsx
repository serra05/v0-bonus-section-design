import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Universo Amigurumi - Curso de Croche",
  description:
    "Aprenda a criar plantinhas lindas e lucrativas em amigurumi. Transforme sua paixao por croche em um negocio verde e rentavel!",
}

export default function PaginaLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" async />
      <Script src="https://fast.wistia.com/embed/yqyai63o6o.js" async type="module" />
      {children}
    </>
  )
}

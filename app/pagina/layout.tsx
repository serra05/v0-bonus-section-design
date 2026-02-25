import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Universo Amigurumi - Curso de Croche Amigurumi | Plantinhas e Suculentas",
  description:
    "Aprenda a criar plantinhas lindas e lucrativas em amigurumi. Transforme sua paixao pelo croche em um negocio verde e rentavel. Mais de 100 receitas exclusivas.",
  alternates: {
    canonical: "https://www.universoamigurumi.shop/pagina",
    languages: {
      "es": "https://www.universoamigurumi.shop/page",
      "pt-BR": "https://www.universoamigurumi.shop/pagina",
    },
  },
}

export default function PaginaPtLayout({
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

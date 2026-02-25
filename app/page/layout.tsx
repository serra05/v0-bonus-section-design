import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Universo Amigurumi - Curso de Crochet en Amigurumi | Plantitas y Suculentas",
  description:
    "Aprende a crear plantitas hermosas y rentables en amigurumi. Transforma tu pasion por el crochet en un negocio verde y rentable. Mas de 100 patrones exclusivos.",
  alternates: {
    canonical: "https://www.universoamigurumi.shop/page",
    languages: {
      "es": "https://www.universoamigurumi.shop/page",
      "pt-BR": "https://www.universoamigurumi.shop/pagina",
    },
  },
}

export default function PageEsLayout({
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

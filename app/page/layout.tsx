import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Universo Amigurumi - Curso de Crochet",
  description:
    "Aprende a crear plantitas hermosas y rentables en amigurumi. Transforma tu pasion por el crochet en un negocio verde y rentable!",
  alternates: {
    canonical: "https://www.universoamigurumi.shop/page",
    languages: {
      "pt-BR": "https://www.universoamigurumi.shop/",
      "es": "https://www.universoamigurumi.shop/page",
    },
  },
}

export default function PageLayout({
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

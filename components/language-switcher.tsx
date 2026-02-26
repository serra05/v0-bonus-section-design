"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const isSpanish = pathname === "/page" || pathname.startsWith("/page/")

  return (
    <div className="flex items-center justify-center gap-2 bg-emerald-900/90 backdrop-blur-sm py-2 px-3">
      <Link
        href="/"
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
          !isSpanish
            ? "bg-white/20 text-white shadow-sm"
            : "text-white/60 hover:text-white/90 hover:bg-white/10"
        }`}
      >
        <span className="text-base" role="img" aria-label="Bandeira do Brasil">
          {"🇧🇷"}
        </span>
        <span>{"Português"}</span>
      </Link>
      <Link
        href="/page"
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
          isSpanish
            ? "bg-white/20 text-white shadow-sm"
            : "text-white/60 hover:text-white/90 hover:bg-white/10"
        }`}
      >
        <span className="text-base" role="img" aria-label="Bandera de España">
          {"🇪🇸"}
        </span>
        <span>{"Español"}</span>
      </Link>
    </div>
  )
}

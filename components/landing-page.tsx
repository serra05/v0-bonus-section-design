"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import PurchaseNotification from "./purchase-notification"

const LandingPage = () => {
  const [urgencyTime, setUrgencyTime] = useState({
    hours: 1,
    minutes: 14,
    seconds: 34,
  })

  const [activeTab, setActiveTab] = useState("flores")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  useEffect(() => {
    let totalSeconds = 1 * 3600 + 14 * 60 + 34

    const timer = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--
        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const seconds = totalSeconds % 60
        setUrgencyTime({ hours, minutes, seconds })
      } else {
        setUrgencyTime({ hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const flores = [
    "/images/flowers/anturio.jpg",
    "/images/flowers/tulipas.jpg",
    "/images/flowers/girassol.jpg",
    "/images/flowers/gerbera.jpg",
    "/images/flowers/rosa-deserto.jpg",
    "/images/flowers/5.webp",
    "/images/flowers/8.webp",
    "/images/flowers/2.webp",
    "/images/flowers/10.webp",
    "/images/flowers/9.webp",
  ]
  const suculentas = [
    "/images/succulents/new-1.jpg",
    "/images/succulents/new-2.jpg",
    "/images/succulents/new-3.jpg",
    "/images/succulents/new-4.jpg",
    "/images/succulents/new-5.jpg",
    "/images/succulents/new-6.jpg",
    "/images/succulents/14.webp",
    "/images/succulents/16.webp",
    "/images/succulents/15.webp",
    "/images/succulents/13.webp",
  ]

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("plano-completo")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/50 via-white to-green-50/30 font-sans overflow-x-hidden">
      <PurchaseNotification />

      {/* Urgency Banner - Fixed Top */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-2.5 sm:py-3 px-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.03)_20px,rgba(255,255,255,0.03)_40px)]" />
        <div className="relative z-10 flex flex-col items-center gap-1.5 sm:gap-2">
          <p className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider">
            As inscricoes se encerram hoje
          </p>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex items-center gap-1">
              <div className="bg-white/20 backdrop-blur-sm rounded-md px-2 py-1 sm:px-2.5 sm:py-1.5 min-w-[36px] sm:min-w-[42px] text-center">
                <span className="text-base sm:text-lg md:text-xl font-bold font-display tabular-nums">
                  {String(urgencyTime.hours).padStart(2, "0")}
                </span>
              </div>
              <span className="text-lg font-bold">:</span>
              <div className="bg-white/20 backdrop-blur-sm rounded-md px-2 py-1 sm:px-2.5 sm:py-1.5 min-w-[36px] sm:min-w-[42px] text-center">
                <span className="text-base sm:text-lg md:text-xl font-bold font-display tabular-nums">
                  {String(urgencyTime.minutes).padStart(2, "0")}
                </span>
              </div>
              <span className="text-lg font-bold">:</span>
              <div className="bg-white/20 backdrop-blur-sm rounded-md px-2 py-1 sm:px-2.5 sm:py-1.5 min-w-[36px] sm:min-w-[42px] text-center">
                <span className="text-base sm:text-lg md:text-xl font-bold font-display tabular-nums">
                  {String(urgencyTime.seconds).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative yarn elements */}
      <div className="fixed top-20 left-4 w-16 h-16 opacity-20 pointer-events-none animate-float hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-400">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="10 5" />
        </svg>
      </div>
      <div className="fixed bottom-40 right-8 w-12 h-12 opacity-15 pointer-events-none animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-green-300">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="10 5" />
        </svg>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-emerald-100/80 via-green-50 to-white yarn-texture">
        {/* Hero Image Area */}
        <div className="relative h-48 sm:h-56 md:h-72 lg:h-96 overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem] md:rounded-b-[3rem]">
          <Image src="/images/unnamed.jpg" alt="Hero Image" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-emerald-900/10" />
        </div>

        {/* Content Card */}
        <div className="bg-white mx-3 sm:mx-4 md:mx-auto md:max-w-xl lg:max-w-2xl -mt-12 sm:-mt-14 md:-mt-20 lg:-mt-24 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 relative z-10 border border-emerald-200">
          <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 mt-1 sm:mt-2">
            <Image
              src="/images/universo-amigurumi-logo.jpg"
              alt="Universo Amigurumi Logo"
              width={128}
              height={128}
              priority
              className="object-contain w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 drop-shadow-sm"
            />
          </div>

          <h1 className="text-emerald-800 text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug mb-3 sm:mb-4 md:mb-5 lg:mb-6 font-display text-balance">
            Aprenda a criar plantinhas lindas e lucrativas em amigurumi. Transforme sua paixao por croche em um negocio
            verde e rentavel, mesmo que esteja comecando agora!
          </h1>

          <p className="text-gray-600 text-[11px] sm:text-xs md:text-sm lg:text-base text-center leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            O <span className="font-bold text-emerald-700">Jardim Criativo Amigurumi</span> e o curso do{" "}
            <span className="font-bold text-emerald-700">Universo Amigurumi</span> que ensina, <span className="font-bold">do zero ao avancado</span>
            , a criar uma colecao exclusiva com <span className="font-bold">mais de 100 plantinhas e suculentas</span>{" "}
            em amigurumi, pensadas para <span className="font-bold">encantar clientes</span>,{" "}
            <span className="font-bold">decorar ambientes</span> e <span className="font-bold">gerar renda</span> com
            croche.
          </p>

          <button
            onClick={scrollToPricing}
            className="w-full md:w-auto md:px-10 lg:px-12 md:mx-auto md:block bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-3 sm:py-3.5 md:py-4 lg:py-5 text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 tracking-tight animate-pulse-soft"
          >
            QUERO ME INSCREVER NO CURSO
          </button>
        </div>

        {/* Decorative wave */}
        <div className="h-12 sm:h-16 md:h-20 lg:h-24 mt-6 sm:mt-8 relative">
          <svg viewBox="0 0 1440 120" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
            <path fill="white" d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-8 sm:py-10 md:py-16 lg:py-20 px-3 sm:px-4 bg-white">
        <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-[11px] sm:text-xs md:text-sm text-emerald-700 font-medium">
            <span>📖</span> Galeria de Amigurumis
          </div>

          <h2 className="text-emerald-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 font-display">+de 100 Criacoes Magicas</h2>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8 md:max-w-xl lg:max-w-2xl">
            Explore uma <span className="font-bold">previa</span> das encantadoras plantinhas que voce aprendera a
            crochetar. Cada padrao foi desenhado com amor para florescer sua criatividade.
          </p>

          {/* Tabs */}
          <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-sm md:max-w-md">
            <button
              onClick={() => setActiveTab("flores")}
              className={`flex-1 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === "flores"
                  ? "bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 shadow-md border-2 border-emerald-300"
                  : "bg-gray-50 text-gray-400 hover:bg-emerald-50 hover:text-emerald-500"
              }`}
            >
              🌸 Flores
            </button>
            <button
              onClick={() => setActiveTab("suculentas")}
              className={`flex-1 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === "suculentas"
                  ? "bg-gradient-to-r from-green-100 to-teal-100 text-green-700 shadow-md border-2 border-green-300"
                  : "bg-gray-50 text-gray-400 hover:bg-green-50 hover:text-green-500"
              }`}
            >
              🌵 Suculentas
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 lg:gap-5">
            {activeTab === "flores"
              ? flores.map((image, i) => (
                  <div
                    key={i}
                    onClick={() => setLightboxImage(image)}
                    className="aspect-square bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-emerald-100 hover:border-emerald-300 hover-lift"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Flor em Amigurumi ${i + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))
              : suculentas.map((image, i) => (
                  <div
                    key={i}
                    onClick={() => setLightboxImage(image)}
                    className="aspect-square bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-green-100 hover:border-green-300 hover-lift"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Suculenta em Amigurumi ${i + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>

      {/* Fioleta IA Section */}
      <div className="relative bg-gradient-to-b from-emerald-700 via-green-800 to-emerald-900 py-8 sm:py-10 md:py-16 lg:py-20 px-3 sm:px-4 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl" />
        
        <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto relative z-10">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-1.5 inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-[11px] sm:text-xs font-medium">
            <span>🤖</span> Sua mentora digital de croche
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight font-display">Voce nao vai aprender sozinha!</h2>

          <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed text-white/90">Ela foi pensada para quem:</p>

          <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            {[
              "Esta comecando agora",
              "Quer aprender com mais seguranca",
              "Precisa de apoio constante",
              "Quer transformar croche em algo maior que um hobby",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-white/20">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-900 font-bold text-[10px] sm:text-xs">
                  ✓
                </div>
                <p className="text-xs sm:text-sm">{text}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            {[
              "Suporte disponivel 24h",
              "Ideias ilimitadas sob demanda",
              "Orientacao para vender melhor",
              "Acompanhamento que motiva",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-2 sm:gap-3 bg-yellow-400/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-yellow-300/30">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-yellow-900 font-bold text-[10px] sm:text-xs">
                  ✓
                </div>
                <p className="text-xs sm:text-sm font-semibold">{text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 font-display">Veja a Assistente IA do Universo Amigurumi em acao:</h3>
          </div>

          {/* Video Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 mb-4 sm:mb-6 shadow-2xl border border-white/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="text-center mb-4 sm:mb-6 md:mb-8">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 md:mb-6">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-emerald-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                    Exclusivo para Alunas
                  </span>
                </div>

                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 leading-tight font-display">Vem Crochetar com a</h3>

                <div className="inline-block bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-xl sm:rounded-2xl py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 mb-3 sm:mb-4 shadow-lg transform hover:scale-105 transition-transform">
                  <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-tight">
                    ASSISTENTE IA AMIGURUMI
                  </h2>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-sm sm:max-w-md md:max-w-lg mx-auto leading-relaxed">
                  Sua mentora digital que transforma cada duvida em aprendizado e cada ponto em uma obra de arte
                </p>
              </div>

              {/* Video Container */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 mb-4 sm:mb-6 border border-slate-700/50 shadow-xl">
                <div className="mx-auto max-w-[240px] sm:max-w-[280px] md:max-w-[320px]">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl ring-4 ring-emerald-500/20">
                    <style
                      dangerouslySetInnerHTML={{
                        __html: `
                          wistia-player[media-id='yqyai63o6o']:not(:defined) {
                            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/yqyai63o6o/swatch');
                            display: block;
                            filter: blur(5px);
                            padding-top: 177.78%;
                          }
                          wistia-player {
                            width: 100%;
                            height: auto;
                            display: block;
                          }
                        `,
                      }}
                    />
                    <wistia-player media-id="yqyai63o6o" aspect="0.5625" />
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                {[
                  { icon: "🎯", title: "Suporte 24/7", desc: "Sempre disponivel" },
                  { icon: "💡", title: "Ideias Criativas", desc: "Projetos ilimitados" },
                  { icon: "📈", title: "Dicas de Vendas", desc: "Aumente seu lucro" },
                  { icon: "🎨", title: "Motivacao Diaria", desc: "Nunca desista" },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
                    <div className="text-xl sm:text-2xl mb-1.5 sm:mb-2">{item.icon}</div>
                    <p className="text-white text-[10px] sm:text-xs font-semibold mb-0.5 sm:mb-1">{item.title}</p>
                    <p className="text-slate-400 text-[10px] sm:text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500 text-white font-bold py-3 sm:py-3.5 md:py-4 lg:py-5 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02] transition-all duration-300 mb-2 sm:mb-3 relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  ASSISTIR DEMONSTRACAO
                </span>
              </button>

              <p className="text-center text-slate-400 text-[10px] sm:text-xs flex items-center justify-center gap-1">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Exclusivo para alunas do curso
              </p>
            </div>
          </div>

          <button
            onClick={scrollToPricing}
            className="block w-full max-w-xs sm:max-w-sm mx-auto bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold py-3 sm:py-3.5 md:py-4 text-sm sm:text-base rounded-xl sm:rounded-2xl shadow-lg mb-2 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            QUERO DESBLOQUEAR MINHA MENTORA
          </button>

          <p className="text-center text-[10px] sm:text-xs opacity-80">👍 Exclusiva para alunas do curso.</p>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-8 sm:py-10 md:py-16 lg:py-20 px-3 sm:px-4 bg-gradient-to-b from-emerald-50 to-white dots-pattern">
        <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-[11px] sm:text-xs md:text-sm text-emerald-700 font-medium">
            Depoimentos de Alunas
          </div>

          <h2 className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 font-display">Historias de Sucesso da Nossa Comunidade</h2>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-5 sm:mb-6 md:mb-8 md:max-w-xl lg:max-w-2xl">
            Nossas alunas ja superaram desafios e fazem croche que <span className="font-bold text-emerald-600">encanta clientes</span>,
            geram <span className="font-bold text-green-600">renda extra</span> e despertam uma{" "}
            <span className="font-bold text-amber-600">alegria</span> inesquecivel.
          </p>

          <div className="space-y-3 sm:space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:gap-6 mb-4 sm:mb-6">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-emerald-100 hover:border-emerald-200 hover-lift">
              <Image
                src="/images/2.webp"
                alt="Depoimento Maria de Lurdes"
                width={600}
                height={800}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-emerald-100 hover:border-emerald-200 hover-lift">
              <Image
                src="/images/1.webp"
                alt="Depoimento Gabriela Fonseca"
                width={600}
                height={800}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bonus */}
      <div className="py-8 sm:py-10 md:py-16 lg:py-20 px-3 sm:px-4 bg-white">
        <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-[11px] sm:text-xs md:text-sm text-amber-600 font-medium">
            🎁 Bonus Exclusivos
          </div>

          <h2 className="text-emerald-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 font-display">Ganhe Ainda Mais</h2>

          <div className="space-y-3 sm:space-y-4">
            <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border-2 border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="text-3xl sm:text-4xl animate-bounce-gentle">📅</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1.5 sm:mb-2 font-display">
                    Colecao Plantinhas de Sucesso 2024
                    <br />
                    <span className="text-emerald-600">De Brinde por Gulofar</span>
                  </h3>
                  <p className="text-gray-600 text-[11px] sm:text-xs leading-relaxed">
                    Um calendario recheado de padroes unicos e criativos para voce explorar o ano todo. Acesse qualquer
                    plantinha a qualquer momento e colecione renda ilimitada.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
              <Image
                src="https://i.ibb.co/Gf5HYx4Y/Jj-KEDr-S.webp"
                alt="Depoimentos de clientes satisfeitas"
                width={480}
                height={720}
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-lg border-2 border-emerald-100"
                loading="lazy"
              />
            </div>

            {[
              { icon: "🍯", title: "Carga de Precificacao", desc: "De Brinde por Gulofar", color: "amber" },
              { icon: "📄", title: "Kit Papelaria Digital", desc: "De Brinde por Gulofar", color: "sky" },
              { icon: "📅", title: "Colecao Plantinhas de Sucesso 2024", desc: "De Brinde por Gulofar", color: "emerald" },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-gradient-to-r ${
                  item.color === "amber" ? "from-amber-50 to-yellow-50 border-amber-200" :
                  item.color === "sky" ? "from-sky-50 to-blue-50 border-sky-200" :
                  "from-emerald-50 to-teal-50 border-emerald-200"
                } border-2 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:shadow-md transition-all duration-300 hover-lift`}
              >
                <div className="text-3xl sm:text-4xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-0.5 sm:mb-1 font-display">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="plano-completo" className="bg-gradient-to-b from-emerald-100 via-green-50 to-white py-8 sm:py-10 md:py-16 lg:py-20 px-3 sm:px-4 dots-pattern">
        <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-[11px] sm:text-xs md:text-sm text-emerald-700 font-medium">
              Escolha seu plano
            </div>
            <h2 className="text-emerald-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-display text-balance">Comece sua jornada no amigurumi</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 md:items-start">
            {/* Plano Basico */}
            

            {/* Plano Completo */}
            <div className="flex-1 bg-white border-3 sm:border-4 border-emerald-500 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full opacity-50" />

              {/* Best seller badge */}
              
              
              <div className="relative z-10">
                {/* Urgency inside pricing */}
                <div className="bg-red-600 text-white text-center py-2 sm:py-2.5 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-md">
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide mb-1">Inscricoes encerram hoje</p>
                  <p className="text-sm sm:text-base font-bold font-display tabular-nums">
                    {String(urgencyTime.hours).padStart(2, "0")}:{String(urgencyTime.minutes).padStart(2, "0")}:{String(urgencyTime.seconds).padStart(2, "0")}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-center py-2 sm:py-2.5 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 flex items-center justify-center gap-1.5 sm:gap-2 shadow-md">
                  <span className="font-bold text-xs sm:text-sm">Acesso Vitalicio</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center mb-3 sm:mb-4 font-display">Plano Completo</h2>

                <p className="text-center text-xs sm:text-sm text-gray-600 mb-1.5 sm:mb-2">
                  Tudo do Basico + colecao premium, IA, comunidade e bonus!
                </p>

                <div className="text-center mb-4 sm:mb-5">
                  <div className="text-xs sm:text-sm text-gray-400 line-through">De R$97 por</div>
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2 my-1.5 sm:my-2">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent font-display">R$27,90</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] sm:text-sm text-red-600 bg-red-50 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-semibold">
                    <span>⏰</span> Oferta exclusiva - encerra hoje!
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 mb-4 sm:mb-5 border border-emerald-200">
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-2 sm:mb-3 font-display">Voce vai receber:</h3>

                  <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
                    {[
                      { icon: "✅", text: <><span className="font-bold">Acesso vitalicio</span> as aulas + atualizacoes futuras</> },
                      { icon: "✅", text: <>Mais de <span className="font-bold">25 plantinhas e suculentas</span> + <span className="font-bold text-emerald-700">Colecao Premium: 100 Amigurumis Exclusivos Universo</span></> },
                      { icon: "📚", text: <><span className="font-bold">Passo a Passo</span> pra ver quando e quantas vezes quiser</> },
                      { icon: "📄", text: <><span className="font-bold">PDFs completos</span> com todas as receitas</> },
                      { icon: "🤖", text: <>Suporte com a <span className="font-bold">Assistente IA da Universo Amigurumi</span> 24h/dia</> },
                      { icon: "💬", text: <><span className="font-bold">Comunidade exclusiva</span> pra tirar duvidas e compartilhar</> },
                      { icon: "✅", text: <>Novas <span className="font-bold">colecoes botanicas gratis</span> sempre que sairem</> },
                      { icon: "✏️", text: <><span className="font-bold">Suporte vitalicio</span> garantido</> },
                      { icon: "🎁", text: <>Ganhe <span className="font-bold text-amber-600">R$300 em bonus</span> pra alavancar seu aprendizado e faturar com o que voce ama!</> },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="mt-0.5 text-emerald-600 flex-shrink-0">{item.icon}</span>
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://go.pepperpay.com.br/1fbar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-4 lg:py-5 rounded-2xl shadow-lg mb-3 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-center animate-pulse-slow text-base sm:text-lg"
                >
                  QUERO O PLANO COMPLETO
                </a>

                <div className="flex justify-center mb-2">
                  <Image
                    src="https://i.ibb.co/1JGgHDqJ/e-Ktt32b.webp"
                    alt="Formas de pagamento - Compra Segura, PIX, VISA, Mastercard, Elo"
                    width={300}
                    height={40}
                    className="h-8 object-contain opacity-80"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 border-dashed rounded-3xl p-6 mt-8 text-center shadow-lg max-w-sm sm:max-w-md md:max-w-lg mx-auto">
            <div className="mb-4">
              <Image
                src="https://i.ibb.co/5Xs3TZwx/30-dias-de-garantia-metodo-pi-compressor.png"
                alt="Garantia de 30 dias"
                width={180}
                height={180}
                className="mx-auto"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-amber-700 mb-2 font-display">
              30 Dias de Garantia
              <br />
              Incondicional
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Voce tem 30 dias para explorar o conteudo do curso, a qualidade e os bonus. Se por qualquer motivo sentir
              que nao e para voce, basta nos enviar um e-mail e nos devolveremos 100% do valor sem burocracia. Sua
              satisfacao e nossa prioridade.
            </p>
          </div>
        </div>
      </div>

      {/* Expert Section */}
      <div className="py-12 lg:py-20 px-4 bg-white">
        <div className="max-w-md lg:max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-4 py-1.5 inline-flex items-center gap-2 mb-4 text-xs lg:text-sm text-emerald-700 font-medium">
            Nossa Missao
          </div>

          <h2 className="text-emerald-700 text-2xl lg:text-4xl font-bold mb-8 lg:max-w-2xl font-display leading-tight">
            Ajudar voce a transformar suas habilidades de croche em uma fonte de renda, depois a realizacao pessoal.
          </h2>

          <div className="relative w-64 lg:w-80 h-80 lg:h-96 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-green-200 rounded-3xl transform rotate-3" />
            <Image
              src="/images/expert-laura.jpg"
              alt="Laura Vianell - Expert em Amigurumi"
              fill
              className="object-cover rounded-3xl shadow-xl relative z-10"
              loading="lazy"
            />
          </div>

          <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-6 lg:mb-8 lg:max-w-xl lg:mx-auto lg:text-center">
            Gisele Santos transformou sua paixao pelo croche em um negocio prospero e na missao de capacitar outras
            pessoas. Ela acredita que o amigurumi e mais do que um artesanato; e um caminho para a independencia
            financeira e o aumento da autoestima.
          </p>

          <div className="space-y-4 mb-8 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0 lg:max-w-2xl lg:mx-auto">
            <div className="flex gap-4 bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-2xl border border-amber-100 hover-lift">
              <div className="text-3xl">🏆</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1 font-display">
                  Metodo validado por +2500 alunas
                </h3>
                <p className="text-sm text-gray-600">
                  Seu metodo de ensino foi comprovado por mais de 2500 alunas que agora vendem suas criacoes com
                  sucesso.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-2xl border border-emerald-100 hover-lift">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1 font-display">Nossa Missao</h3>
                <p className="text-sm text-gray-600">
                  Ajuda-la a transformar suas habilidades de croche em uma fonte de renda, alegria e realizacao pessoal.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-8 lg:mb-10 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-6 lg:p-8 border border-emerald-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3 font-display">Pronta para Cultivar seu Talento no Croche?</h3>
            <p className="text-sm lg:text-base text-gray-600 mb-6 lg:max-w-lg lg:mx-auto">
              Nao perca a chance de criar plantinhas de amigurumi que encantam e transformam sua paixao em um negocio de
              sucesso. Inscreva-se agora!
            </p>
          </div>

          <button
            onClick={scrollToPricing}
            className="w-full lg:w-auto lg:px-16 lg:mx-auto lg:block bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-4 lg:py-5 lg:text-lg rounded-2xl shadow-lg mb-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-pulse-soft"
          >
            QUERO ME INSCREVER
          </button>

          <div className="flex justify-center mb-4">
            <img
              src="/images/security-badges.webp"
              alt="Site Seguro - Google - Site Blindado - Compra 100% Segura"
              className="h-12 object-contain w-64 opacity-70"
            />
          </div>

          <p className="text-center text-xs text-gray-400">© 2025 Universo Amigurumi. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden border-4 border-emerald-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-emerald-50 transition-colors border-2 border-emerald-200"
              aria-label="Fechar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-4">
              <Image
                src={lightboxImage || "/placeholder.svg"}
                alt="Visualizacao ampliada"
                width={800}
                height={800}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LandingPage

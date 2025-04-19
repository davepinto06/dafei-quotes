import { RefreshCw, QuoteIcon, Copy, Check } from "lucide-react"
import { Merriweather } from "next/font/google"

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
})

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 sm:p-6">
      <div className="grid w-full max-w-sm grid-cols-1 rounded-2xl bg-white/80 p-2 shadow-lg sm:grid-rows-3 sm:p-4 md:min-w-md">
        <div className="m-auto">
          <QuoteIcon className="size-12 text-rose-400" />
        </div>
        <div className="flex flex-col">
          <p
            className={`${merriweather.className} text-center text-xl leading-loose whitespace-pre-line`}
          >
            If life were predictable it would cease to be life, and be without
            flavor.
          </p>
          <span className="text-end font-semibold text-neutral-700">
            — Eleanor Roosevelt
          </span>
        </div>
        <div className="flex w-full items-center justify-between p-2">
          <button className="flex items-center justify-center gap-2 rounded-full bg-rose-400 bg-gradient-to-r from-rose-400 to-rose-500/60 px-3 py-2 font-bold text-white transition-all duration-200 ease-in-out hover:scale-105 hover:bg-rose-500">
            <RefreshCw className="size-4 text-white" />
            New Quote
          </button>
          <button className="flex cursor-pointer items-center justify-center gap-3 rounded-full border border-cyan-500 px-3 py-2 text-balance text-cyan-500 transition-all duration-200 ease-in-out hover:bg-cyan-300/10">
            <Copy className="text-cyan size-4" />
            Copy
          </button>
        </div>
      </div>
    </main>
  )
}

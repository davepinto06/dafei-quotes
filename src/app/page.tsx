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
    <main className="flex min-h-screen justify-center items-center">
      <div className="bg-white/80 rounded-2xl min-h-72 min-w-96 grid grid-cols-1 grid-rows-3 p-4 shadow-lg">
        <div className="m-auto">
          <QuoteIcon className="text-rose-400 size-12" />
        </div>
        <div className="flex flex-col">
          <p
            className={`${merriweather.className} text-center text-xl leading leading-loose whitespace-pre-line`}
          >
            If life were predictable it would cease to be life, and be without
            flavor.
          </p>
          <span className="text-end text-neutral-700 font-semibold">
            — Eleanor Roosevelt
          </span>
        </div>
        <div className="w-full flex justify-between items-center p-2">
          <button className="rounded-full font-bold text-white flex justify-center gap-2 items-center p-2 bg-rose-400 hover:bg-rose-500 transition-all duration-200 ease-in-out">
            <RefreshCw className="text-white size-4" />
            New Quote
          </button>
          <button className="rounded-full font-bold text-white flex justify-center gap-2 items-center p-2 bg-cyan-400 hover:bg-cyan-500 transition-all duration-200 ease-in-out">
            <Copy className="text-white" />
            Copy
          </button>
        </div>
      </div>
    </main>
  )
}

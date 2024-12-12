import { Fredoka, Nunito } from "next/font/google";
import localFont from "next/font/local";

export const nunito = Nunito({
    weight: ["400", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-body"
})

export const fredokaOne = localFont({
    src: "./FredokaOne-Regular.ttf",
    variable: "--font-heading",
    weight: "400"
})

export const fredoka = Fredoka({
    weight: ["700"],
    subsets: ["latin"],
    variable: "--font-alternate"
})


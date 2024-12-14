import { Outfit, Praise, Prompt } from "next/font/google"
import localFont from "next/font/local";

export const fontAlt = Praise({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-alt"
});

export const fontBody = Prompt({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-body"
});

export const fontHeading = Prompt({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-heading"
});


export const fontTest = localFont({
    src: [
        {
            path: "./Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Light.woff",
            weight: "300",
            style: "normal",
        },
        {
            path: "./Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Regular.woff",
            weight: "400",
            style: "normal"
        },
        {
            path: "./Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Medium.woff",
            weight: "500",
            style: "normal",
        },
        {
            path: "./Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.woff",
            weight: "700",
            style: "normal",
        },
        {
            path: "./Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Black.woff",
            weight: "900",
            style: "normal",
        },
        // {
        //     path: "./Satoshi_Complete/Fonts/WEB/fonts/Staoshi-Italic.ttf",
        //     weight: "400",
        //     style: "italic"
        // },
    ],
    variable: "--font-heading"
})
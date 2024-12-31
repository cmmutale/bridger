import { Montserrat, Open_Sans, DM_Mono } from "next/font/google"
import localFont from "next/font/local";

export const fontHeading = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-heading"
});

export const fontBody = Open_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-body"
});

export const fontAlt = DM_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-alt"
})


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
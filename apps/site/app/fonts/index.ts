import { Outfit, Praise } from "next/font/google"

export const PraiseFont = Praise({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-heading"
});

export const OutfitFont = Outfit({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-body"
}); 
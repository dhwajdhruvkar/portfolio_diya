import {
  Archivo,
  Hanken_Grotesk,
  Instrument_Serif,
  Space_Mono,
} from "next/font/google";

/**
 * Four families, each exposed as a CSS variable consumed by the `@theme`
 * font tokens in `src/styles/globals.css`.
 */

export const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const fontVariables = [
  archivo.variable,
  instrumentSerif.variable,
  hankenGrotesk.variable,
  spaceMono.variable,
].join(" ");

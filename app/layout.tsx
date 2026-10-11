import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Ninety East - Zanzibar & Beyond", description: "Zanzibar tours and safaris" };
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang="en"><body>{children}</body></html>)}
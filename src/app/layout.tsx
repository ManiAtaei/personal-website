import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mani Ataei",
  description: "Front End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

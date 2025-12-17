import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  weight: ["400", "700"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Test Tedolog | Tedolog bir doktor veri tabanı uygulamasıdır.",
  description: "Tedolog bir doktor veri tabanı uygulamasıdır.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppinsFont.variable}>
        {children}
      </body>
    </html>
  );
}

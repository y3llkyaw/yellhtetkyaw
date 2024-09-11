import localFont from "next/font/local";
import "./globals.css";
import ClientRootLayout from "@/components/layout";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Yell Htet Kyaw",
  description: "my personal blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientRootLayout>
          {children}
        </ClientRootLayout>
      </body>
    </html>
  );
}

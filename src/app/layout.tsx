import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Batch Form App",
  description: "Batch Form App for FCL Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-1f1f1f `}>
        <div className="p-2">
          <img src="./fcl_logo.png" className="logo w-60" alt="fcl-logo" />
        </div>
        <div className="mx-auto p-4 text-white flex flex-col items-center">
          {children}
        </div>
      </body>
    </html>
  );
}

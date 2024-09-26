import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import SessionProviderTwo from "../../components/providers/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "apptechfos",
  description: "siteweb pour proposer des cours en français",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <SessionProviderTwo>
           {children}
        </SessionProviderTwo>
      </body>
    </html>
  );
}

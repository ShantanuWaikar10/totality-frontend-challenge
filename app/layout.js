import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/Providers";
import { Toaster } from "react-hot-toast";
import { ProvidersChakra } from "./providers";
import { AuthProvider } from "./ProvidersAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ProvidersChakra>
            <Providers>
              <Toaster position="top-center" reverseOrder={false} />
              {children}
            </Providers>
          </ProvidersChakra>
        </AuthProvider>
      </body>
    </html>
  );
}

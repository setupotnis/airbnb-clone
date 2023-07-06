import "./globals.css";
import { Nunito } from "next/font/google";
import { ClientOnly, RegisterModal, Navbar } from "./components";
import { ToasterProvider } from "./providers";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb Clone",
  description: "An amazing Airbnb clone!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}

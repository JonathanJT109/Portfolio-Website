import "../styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="m-0 p-0">
      <head />
      <body className="bg-black text-neutral-100 flex flex-col min-h-screen m-0 p-0">
        <Header />
        <div className="container m-auto min-h-full space-y-40">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

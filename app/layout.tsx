import "../styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-black text-neutral-100 flex flex-col min-h-screen box-border m-0 p-0">
        <Header />
        <div className="container m-auto flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

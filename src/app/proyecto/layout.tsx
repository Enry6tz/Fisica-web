import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";



export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <Header />
      <div className="bg-slate-400 p-2  ">
        <div className="pt-6"></div>
        <main className="xl:mx-32 lg:mx-20 md:mx-10 sm:mx-5 mx-2.5 ">
          <div className="rounded-xl shadow-lg pb-6 mt-20 bg-white">
            {children}
            <Footer />
          </div>
        </main>

      </div>
    </>
  );
}

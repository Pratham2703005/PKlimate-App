import type { PropsWithChildren } from "react";
import { Header } from "./header";
import Footer from "./footer";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8 md:px-[4rem]">
        {children}
      </main>
      <Footer/>
    </div>
  );
}

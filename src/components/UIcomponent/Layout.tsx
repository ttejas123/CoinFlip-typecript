import React, { useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start bg-lightBg2">
      <NavBar />
      <div className="flex w-full flex-col justify-between px-24 py-16">
        <div className="flex-1 grow pb-16">
          <div className="border-default rounded-2xl border-2 bg-base-100">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

import React, { useContext, useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { ThemeContext } from "../../context/ThemeContext";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  const theame = useContext(ThemeContext);
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start bg-lightBg2">
      <NavBar />
      <div className="flex w-full flex-col justify-between px-24 py-16 rounded-3xl">
        <div className="flex-1 grow pb-16">
          <div className={`${theame.theme == "light" ? "border-base-300  border-2": ""} bg-base-200 rounded-2xl`}>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

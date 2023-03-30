import React, { useContext, useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { ThemeContext } from "../../context/ThemeContext";

type Props = {
  children: JSX.Element;
  fullWidth?: boolean;
  className?: string;
  id?: string;
};

export default function Layout({ children, className, fullWidth, id }: Props) {
  const theame = useContext(ThemeContext);
  return (
    
    <main className="flex min-h-screen w-screen flex-col items-center justify-start bg-lightBg2">
      <NavBar />
      <div className="flex w-full flex-col justify-between md:px-24 md:py-16 rounded-3xl">
        <div className="pb-16">
          <div id={id}
            className={`${className} ${
              fullWidth ? 'w-full' : 'max-w-screen-2xl'
            } mx-auto ${theame.theme == "light" ? "border-base-300  md:border-2": ""} bg-base-200  rounded-2xl`}>
            
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </main>
    
  );
}



// type ISectionProps = {
  // title?: string;
  // description?: string;
  // yPadding?: string;
  // fullWidth?: boolean;
  // children: ReactNode;
  // className?: string;
  // boolAnimetion?: boolean;
  // id?: string;
// };

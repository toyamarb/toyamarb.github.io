import "../styles/globals.css";
import type { AppProps } from "next/app";
import logo from "../public/images/buri.png";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="lg:max-w-[1024px] mx-auto text-gray-700">
        <div className="w-full lg:max-w-[1024px] h-[100vh] fixed z-[-1] overflow-hidden opacity-20 mx-auto">
          <div className="w-[60%] h-[60%] absolute right-[0%] bottom-0 flex justify-end items-end">
            <img
              alt="buri"
              src="/images/buri.png"
              className="bottom-0 object-contain"
            />
          </div>
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;

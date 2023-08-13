import "@/styles/globals.css";
import { helvetica } from "../../public/assets/fonts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --helvetica: ${helvetica.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

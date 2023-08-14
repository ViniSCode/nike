import "@/styles/globals.css";
import { helvetica, helveticaRegular } from "../../public/assets/fonts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --helvetica: ${helvetica.style.fontFamily};
            --helvetica-regular: ${helveticaRegular.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

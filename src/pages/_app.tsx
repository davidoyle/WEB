import "../styles/globals.css";
import { AppProps } from "next/app";
import { ToneProvider } from "../context/ToneContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToneProvider>
      <Component {...pageProps} />
    </ToneProvider>
  );
}

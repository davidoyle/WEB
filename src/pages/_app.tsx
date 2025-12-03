import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/*
      <div>
        {stories.map((story, index) => (
          <li key={String(story.id ?? index)}>
            {story.full_name ? `${story.full_name}: ` : ""}
            {typeof story.story === "string"
              ? story.story
              : JSON.stringify(story)}
          </li>
        ))}
      </div>
      */}
    </>
  );
}

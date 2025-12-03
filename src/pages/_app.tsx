import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";

type Story = {
  id?: string | number;
  full_name?: string;
  phone?: string;
  email?: string;
  postal_code?: string;
  incident_month_year?: string;
  issue_tags?: unknown;
  story?: string;
  public_permission?: boolean;
  consent?: boolean;
  [key: string]: unknown;
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const client = supabase;
    if (!client) return;

    const getStories = async () => {
      const { data, error } = await client.from("stories").select();

      if (error) {
        console.error("Error fetching stories", error);
        return;
      }

      if (data && data.length > 1) {
        setStories(data);
      }
    };

    void getStories();
  }, []);

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

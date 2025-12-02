import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";

type Todo = { id?: string | number; title?: string; [key: string]: unknown };

export default function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (!supabase) return;

    const getTodos = async () => {
      const { data, error } = await supabase.from("todos").select();

      if (error) {
        console.error("Error fetching todos", error);
        return;
      }

      if (data && data.length > 1) {
        setTodos(data);
      }
    };

    void getTodos();
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <div>
        {todos.map((todo, index) => (
          <li key={String(todo.id ?? index)}>
            {typeof todo.title === "string" ? todo.title : JSON.stringify(todo)}
          </li>
        ))}
      </div>
    </>
  );
}

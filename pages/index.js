import styled from "styled-components";
import { useState } from "react";
import BookList from "@/components/BookList";

export default function HomePage({ books }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <header>
        <h1>Book Hunting</h1>
      </header>
      <main>
        <input
          type="text"
          name="search"
          onChange={(event) => setSearchTerm(event.target.value)}
        ></input>
        <BookList books={books} />
      </main>
    </>
  );
}

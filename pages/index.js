import styled from "styled-components";
import BookList from "@/components/BookList";

export default function HomePage({ books }) {
  return (
    <>
      <header>
        <h1>Book Hunting</h1>
      </header>
      <main>
        <BookList books={books} />
      </main>
    </>
  );
}

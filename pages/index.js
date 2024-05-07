import styled from "styled-components";
import BookList from "@/components/BookList";

export default function HomePage({ books }) {
  return (
    <div>
      <h1>Book Hunting</h1>
      <BookList books={books} />
    </div>
  );
}

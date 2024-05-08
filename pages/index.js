import styled from "styled-components";
import { useState } from "react";
import BookList from "@/components/BookList";
import SearchBar from "@/components/Searchbar";

export default function HomePage({ books }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchClick() {
    books.filter((book) => book.includes(searchTerm));
  }

  return (
    <>
      <header>
        <h1>Book Hunting</h1>
      </header>
      <main>
        <SearchBar setSearchTerm={setSearchTerm} />
        {/* <button type="button" onClick={handleSearchClick}>
          Enter
        </button> */}
        <BookList books={books} />
      </main>
    </>
  );
}

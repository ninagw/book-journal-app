import { useState } from "react";
import BookList from "@/components/BookList";
import SearchBar from "@/components/Searchbar";

export default function HomePage({ books }) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log("SEARCHTERM", searchTerm);

  // function handleSearch(event) {
  //   const { value } = event.target;
  //   setSearchTerm(value);
  // }

  // const [filterModal, setFilterModal] = useState(false);

  // function handleToggleFilterModal() {
  //   setFilterModal(!filterModal);
  // }

  function handleSearchClick() {
    books.filter((book) => book.includes(searchTerm));
  }

  return (
    <>
      <header>
        <h1>Book Hunting</h1>
      </header>
      <main>
        <SearchBar
          setSearchTerm={setSearchTerm}
          handleSearchClick={() => handleSearchClick()}
        />
        {/* <button type="button" onClick={handleToggleFilterModal}>
          Enter
        </button> */}
        <BookList books={books} />
      </main>
    </>
  );
}

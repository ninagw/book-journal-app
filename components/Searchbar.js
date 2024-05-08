import styled from "styled-components";

const SearchInput = styled.input`
  padding: 0.3rem;
  font-size: 1rem;
  display: flex;
  margin: auto;
  width: 60%;
  border-style: none;
  border-radius: var(--border-radius);
`;

export default function SearchBar({ setSearchTerm }) {
  console.log(setSearchTerm);

  return (
    <SearchInput
      onChange={(event) => setSearchTerm(event.target.value.toLowerCase())}
      type="text"
      id="searchTerm"
      name="searchTerm"
      placeholder="Search... "
      aria-label="searchbar"
    />
  );
}

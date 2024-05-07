import styled from "styled-components";
import Image from "next/image";

const StyledList = styled.ul`
  padding-inline-start: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export default function BookList({ books }) {
  return (
    <StyledList>
      {books?.map((book) => (
        <li key={book.id}>
          <Image
            alt={book.title}
            height={100}
            width={70}
            src={book.cover}
            book={book}
          />
        </li>
      ))}
    </StyledList>
  );
}

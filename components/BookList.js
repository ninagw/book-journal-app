import styled from "styled-components";
import Image from "next/image";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 10px auto;
  padding: 0 5px 40px;
`;

export default function BookList({ books }) {
  return (
    <ul>
      {books?.map((book) => (
        <li key={book.id}>
          <Image
            alt={book.title}
            height={50}
            width={50}
            src={book.cover}
            book={book}
          />
        </li>
      ))}
    </ul>
  );
}

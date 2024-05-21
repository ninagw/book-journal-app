import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

const StyledList = styled.ul`
  padding-inline-start: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export default function BookList({ books }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <StyledList>
      {books?.map((book) => (
        <li key={book.id}>
          <Image
            alt={book.title}
            height={100}
            width={70}
            src={book.cover}
            id={book.id}
            onClick={() => {
              router.push(`/details/${id}`);
            }}
          />
        </li>
      ))}
    </StyledList>
  );
}

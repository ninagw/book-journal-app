import { useRouter } from "next/router";
import Image from "next/image";

export default function bookDetailPage({ books }) {
  console.log("BOOKS: ", books);

  const router = useRouter();
  const { id } = router.query;

  const currentBook = books.find((book) => book.id === id);
  console.log("CURRENTBOOK: ", currentBook);

  if (!currentBook) {
    return null;
  }

  const { title, author, publishYear, description, genre, pages, cover } =
    currentBook;

  return (
    <>
      <header>{title}</header>
      <main>
        <Image alt={title} height={100} width={70} src={cover} />
        <p>author: {author}</p>
        <p>year: {publishYear}</p>
        <p>pages: {pages}</p>
        <p>genre: {genre}</p>
        <p>{description}</p>
      </main>
    </>
  );
}

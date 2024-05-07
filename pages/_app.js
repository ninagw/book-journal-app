import GlobalStyle from "../styles";
import books from "../lib/books.json";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} books={books} />
    </>
  );
}

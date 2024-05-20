// import { useState, useContext, useEffect } from "react";
// import { useCallback } from "react";

// const URL = "https://openlibrary.org/search.json?title=";
// const AppContext = React.createContext();

// export default function AppProvider({ children }) {
//   const [searchTerm, setSearchTerm] = useState("the lost world");
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [resultTitle, setResultTitle] = useState("");

//   const fetchBooks = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${URL}${searchTerm}`);
//       const bookData = await response.json();
//       console.log(bookData);
//       const { docs } = bookData;
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   }, [searchTerm]);

//   useEffect(() => {
//     fetchBooks();
//   }, [searchTerm, fetchBooks]);

//   return (
//     <AppContext.Provider
//       value={{
//         loading,
//         books,
//         setSearchTerm,
//         resultTitle,
//         setResultTitle,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// }

import { useContext, useEffect, useState } from "react";
import "./LibraryView.css"
import { getAllBooks } from "../dataServices/books";
import { getAllAuthors } from "../dataServices/authors";
import { getAllPublishers } from "../dataServices/publishers";

import AuthorList from "./AuthorList";
import BookList from "./BookList";
import PublisherList from "./PublisherList.tsx";
import { serverContext } from "../contexts/serverContext.js";

function LibraryView() {

  const serverState = useContext(serverContext)

  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])
  const [publishers, setPublishers] = useState([])

  useEffect(() => {
    getAllBooks()
    .then(books => setBooks(books))
    .catch((e) => {
      console.error(e);
      setBooks([])
    })
    getAllAuthors()
    .then(authors => setAuthors(authors))
    .catch((e) => {
      console.error(e);
      setAuthors([])
    })
    getAllPublishers()
    .then(publishers => setPublishers(publishers))
    .catch((e) => {
      console.error(e);
      setPublishers([])
    })
  }, [serverState])

  return (
    <div>
      <h1>Library</h1>
      <section className="tile-lists">
        <BookList books={books} />
        <AuthorList authors={authors} />
        <PublisherList publishers={publishers} />
      </section>
    </div>
  )
}

export default LibraryView;
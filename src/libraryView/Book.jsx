import "./Book.css";

function Book({book}) {
  return (
    <div className="tile" data-testid="book-list-item">
      <h1>{book.title}</h1>
      <h3>{book.author}</h3>
      <h3>{book.publisher}</h3>
      <p>{book.summary}</p>
    </div>
  )
}

export default Book;
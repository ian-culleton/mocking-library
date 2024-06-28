import Book from "./Book";
import "./BookList.css";

function BookList({ books }) {
  return (
    <div>
      <h2>Books in catalog</h2>
      <div className="tile-container">
        { 
          books.length === 0 ? 
          <p>No authors found.</p> : 
          books.map(b => <Book book={b} key={b.id} />) 
        }
      </div>
    </div>
  )
}

export default BookList;
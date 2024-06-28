import Author from "./Author";

function AuthorList({ authors }) {
  return (
    <div>
      <h2>Authors in catalog</h2>
      <div className="tile-container">
        { 
          authors.length === 0 ? 
          <p>No authors found.</p> : 
          authors.map(a => <Author author={a} key={a.id} />) 
        }
      </div>
    </div>

  )
}

export default AuthorList;
function Author({author}) {
  return (
    <div className="tile" data-testid="author-list-item">
      <h1>{author.name}</h1>
      <h3>{author.birthday}</h3>
      <p>{author.bio}</p>
    </div>
  )
}

export default Author;
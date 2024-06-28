function Publisher({publisher}) {
  return (
    <div className="tile" data-testid="publisher-list-item">
      <h1>{publisher.name}</h1>
      <h3>{publisher.location}</h3>
    </div>
  )
}

export default Publisher;
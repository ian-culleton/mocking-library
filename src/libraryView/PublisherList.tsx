import React from 'react'
import Publisher from "./Publisher";

function PublisherList({ publishers }) {
  return (
    <div>
      <h2>Publishers in catalog</h2>
      <div className="tile-container">
        { 
          publishers.length === 0 ? 
          <p>No authors found.</p> : 
          publishers.map(p => <Publisher publisher={p} key={p.id} />) 
        }
      </div>
    </div>

  )
}

export default PublisherList;
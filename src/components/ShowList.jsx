import React from 'react';
import { Link } from 'react-router-dom';

function ShowList(props) {
  const { shows } = props;

  return (
    <div className="show-list">
      <h1>Show List</h1>
      {shows.map(show => (
        <div key={show.show.id} className="show-card">
          <img src={show.show.image?.medium} alt={show.show.name} />
          <div>
            <h2>{show.show.name}</h2>
            <p>{show.show.genres.join(', ')}</p>
            <Link
              to={{
                pathname: `/details/${show.show.id}`,
                state: { show }
              }}
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowList;

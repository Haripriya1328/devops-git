import React from 'react';
import { Link } from 'react-router-dom';

function ShowDetails(props) {
  const { show } = props.location.state;

  return (
    <div>
      <h1>{show.show.name}</h1>
      <img src={show.show.image?.medium} alt={show.show.name} />
      <div>
        <h2>Summary</h2>
        <p>{show.show.summary}</p>
      </div>
      <Link
        to={{
          pathname: `/booking/${show.show.id}`,
          state: { show }
        }}
      >
        Book Tickets
      </Link>
    </div>
  );
}

export default ShowDetails;

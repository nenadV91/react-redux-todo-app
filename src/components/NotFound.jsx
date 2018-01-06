import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = (props) => {
  return (
    <div className="notFound">
      <h1>404<br/>Page not found!</h1>
      <Link to="/">Return home!</Link>
    </div>
  )
}

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <br />
    <p>This is not the page you are looking for.</p>
    <br />
    <Link to="/">Go To Home Page</Link>
  </div>
);

export default NotFound;

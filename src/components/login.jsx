// login.jsx
import React from 'react';
import { Link } from 'react-router-dom';


export default function Login(){
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/app">Go to Main Page</Link>
    </div>
  );
};

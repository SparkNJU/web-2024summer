import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/input.css';

export default function Login() {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">登录页面</h1>
      <Link to="/app" className="text-red-500 text-center hover:underline">进入主页面</Link>
    </div>
  );
}

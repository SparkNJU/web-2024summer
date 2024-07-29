// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';  // 从 react-dom/client 中导入 createRoot 方法
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App.jsx';
import Login from './components/login.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/app" element={<App />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>
);

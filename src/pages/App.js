
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Login from './login/login';
import KartisLakohSapak from '../modals/kartasot/kartis-lakoh-sapak/kartis-lakoh-sapak';
import NotFound from './not-found/not-found';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/kartis" element={<KartisLakohSapak/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
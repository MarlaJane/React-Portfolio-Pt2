import React, { useState } from "react";
import background from "./components/background/images/marlaJane1.png";

import Header from './components/header/index';
import Body from './components/body/index';
import Footer from './components/footer/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('About');

  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      minHeight: '90vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <Header setCurrentPage={setCurrentPage}/>
      <Body currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
}

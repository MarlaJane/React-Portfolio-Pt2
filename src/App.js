import React, { useState } from "react";
import background from "./components/background/images/marlaJanesplat.png";

import Header from './components/header/index';
import Body from './components/body/index';
import Footer from './components/footer/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      minHeight: '100%',
      minWidth: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      padding: '0',
      margin: '0',
    }}>
      <Header setCurrentPage={setCurrentPage}/>
      <Body currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
}

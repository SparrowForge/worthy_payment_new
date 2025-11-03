import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';


function Header() {
    
  return (
    <div className="layout-container sticky top-0 z-50">
      <Navbar />
    </div>
  );
}

export default Header;
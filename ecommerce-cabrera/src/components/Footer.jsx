import React from 'react';
import GitHub from '../img/GitHub.png';
import Instagram from '../img/Instagram.png';
import LinkedIn from '../img/LinkedIn.png';


export default function Footer() {

  return (
    <>
      <footer>
        <p>Proyecto Final - CoderHouse - React JS by Joel Cabrera</p>
        <div>
          <a href="https://github.com/cabrerajn"><img src={GitHub} alt="GitHub Icon"/></a>
          <a href="https://www.instagram.com/cabrerajn/"><img src={Instagram} alt="Instagram Icon"/></a>
          <a href="https://www.linkedin.com/in/joel-cabrera-/"><img src={LinkedIn} alt="LinkedIn Icon"/></a>
        </div>        
      </footer>
    </>
  )
  
}


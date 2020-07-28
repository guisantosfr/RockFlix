import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

import { Link } from 'react-router-dom';

function Menu(){
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="GuiFlix logo"></img>
      </a>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
      
    </nav>

  );
}

export default Menu;
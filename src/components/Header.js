import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="title">
        <div className="logo">
          <h1>Beer Tour Manager <FontAwesomeIcon icon={faBeer}/></h1>
        </div>
    </div>
  );
}

export default Header;
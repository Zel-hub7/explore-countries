import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import './navBar.css';

const NavBar = () => (
  <nav className="navigation">
    <h2 className='name'>Explore World Countries</h2>
    <div className="buttons">
      <BiMicrophone data-testid="microphone-button" />
      {' '}
      <AiFillSetting data-testid="settings-button" />
      {' '}
    </div>
  </nav>
);

export default NavBar;
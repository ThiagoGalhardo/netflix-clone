import React from 'react';
import "./Header.css"



export default({black})=> {
return(

  <header className={black ? 'black' : ''}>

  <div className='header--logo'>
    <a href="/">
      <img src="https://brandlogos.net/wp-content/files/nAMr39DXwW/netflix_logo_FllsnsDw.svg" alt="logo netflix"/>
      
    </a>
  </div>

  <div className='header--user'>
    <a href="/">
      <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Usuário" />
    </a>
  </div>

  </header>



)


}
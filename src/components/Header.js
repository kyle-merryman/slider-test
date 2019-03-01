import React from 'react';
import github from '../assets/icons/social/github.svg';
import email from '../assets/icons/social/email.svg';
import linkedin from '../assets/icons/social/linkedin.svg';
// import me from '../assets/icons/social/me.jpeg';


function Header() {
  return(
    <header>
      <section>
        <a href="https://www.linkedin.com/in/kyle-merryman/" target="_blank">
          <img src={linkedin} alt="LinkedIn" height="24px" width="24px"/>
        </a>
        <a href="" target="_blank">
          <img src={email} alt="Gmail" height="24px" width="24px"/>
        </a>
        <a href="https://github.com/kyle-merryman/" target="_blank">
          <img src={github} alt="GitHub Repository" />
        </a>
      </section>
    </header>
  )
}

export default Header;
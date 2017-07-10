import React from 'react';

import Navigation from './Header/Navigation';

export default class Header extends React.Component{
   render(){
      return(
         <nav className="Navbar navbar navbar-default navbar-fixed-top">
            <Navigation />
         </nav>
      )
   }
}

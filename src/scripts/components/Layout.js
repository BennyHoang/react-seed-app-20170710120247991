import React from 'react';

import Header from './Layout/Header';
import Footer from './Layout/Footer';

export default class Layout extends React.Component{
   render(){
      return(
         <div>
            <Header
               title="React Seed App"
            />

            <main>
               {this.props.children} //Dynamic view through Router
            </main>

            <Footer
               copyrightYear="2017"
               copyrightHolder="Lars Henrik Nordli"
               url="https://github.com/larshnordli/react-seed-app"
               urlTitle="GitHub"
               faIcon="github"
            />
         </div>
      )
   }
}

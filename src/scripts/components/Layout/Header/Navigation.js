import React from 'react';

import NavigationItem from './NavigationItem';

export default class Navigation extends React.Component {
  constructor() {
    super();
    const navItems = [
      {
        url: '/',
        title: 'Home'
      }, {
        url: '/about',
        title: 'Fighters'
      }, {
        url: '/pricing',
        title: 'Pricing'
      }
    ];

    this.navigationItems = navItems.map((navItem, index) => <NavigationItem key={index} url={navItem.url} title={navItem.title}/>);
  }

  render() {
    return (
      <div>
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            <img className="logo" src="https://vignette4.wikia.nocookie.net/logopedia/images/7/7f/UFC-logo-2015.png/revision/latest?cb=20150713223527" alt="UFC_Logo"/>
          </a>
        </div>
        {this.navigationItems}
      </div>
    )
  }
}

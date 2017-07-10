import React from 'react';
import {NavLink} from 'react-router-dom';

export default class NavigationItem extends React.Component {
  render() {
    return (
      <ul className="nav navbar-nav">
        <li>
          <NavLink to={this.props.url} activeClassName="active">{this.props.title}</NavLink>
        </li>
      </ul>
    )
  }
}

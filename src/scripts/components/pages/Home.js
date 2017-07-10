import React from 'react';

// Import all your components here, e.g.:
// import Component from './Main/Component';

import EventGenerator from './Home/EventGenerator';

export default class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="container-fluid">
          <h2>Welcome</h2>
          <p>Here you can find a list of upcoming events with local time. In addition you can list out all fighters and see if they are active or not</p>
        </div>
        <EventGenerator/>
      </div>
    )
  }
}

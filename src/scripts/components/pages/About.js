import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //apiUrl: 'http://setgetgo.com/randomword/get.php',
      apiUrl: 'http://ufc-data-api.ufc.com/api/v1/us/fighters',
      //apiUrl: 'https://api.punkapi.com/v2/beers/random',
      fighters: []
    }
  }
  formatStatus(status) {
    var returnValue;
    if (status === "Active") {
      returnValue = "Active"
    } else {
      returnValue = "Inactive"
    }
    return returnValue;
  }
  setStatus(status){
    var returnValue;
    if (status === "Active") {
      returnValue = "activeFighter"
    } else {
      returnValue = "inactiveFighter"
    }
    return returnValue;
  }
  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/' + this.state.apiUrl).then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({fighters: json})
    }).catch((ex) => {
      console.log('parsing failed', ex)
    });
  }
  render() {
    return (
      <div class="row About">
        {this.state.fighters.map((fighter, i) => (
          <div key={i} className="col-xs-4 text-center">
            <a href={`${this.state.apiUrl}/${fighter.id}`}>
              <div className="fighter-item">
                <img src={fighter.thumbnail}/>
                <h3>
                  {`${fighter.first_name} ${fighter.last_name}`}
                </h3>
                <h4>Status: <span className={this.setStatus(fighter.fighter_status)}>{this.formatStatus(fighter.fighter_status)}</span></h4>
              </div>
            </a>
          </div>
        ))}
      </div>
    )
  }
}

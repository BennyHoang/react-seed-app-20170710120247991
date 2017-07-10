import React from 'react';
import moment from 'moment';
import moment_tz from 'moment-timezone';

export default class EventGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //apiUrl: 'http://setgetgo.com/randomword/get.php',
      apiUrl: 'http://ufc-data-api.ufc.com/api/v1/us/events',
      //apiUrl: 'https://api.punkapi.com/v2/beers/random',
      events: []
    }
  }

  componentDidMount() {

    //enabling cors-anywhere
    fetch('https://cors-anywhere.herokuapp.com/' + this.state.apiUrl).then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({events: json})
    }).catch((ex) => {
      console.log('parsing failed', ex)
    });
  }
  checkTime(time) {
    var temp;
    if (time.includes("PM")) {
      var tempTime = time.split("PM");
      temp = parseInt(tempTime[0]) + 12;
    } else {
      time.split("AM");
      temp = time[0];
    }
    return temp;
  }
  parseLocalTime(time, text) {
    if (!text) {
      return "no time scheduled";
    } else {
      var textResponse = text.split("/"),
        timeResponse = time.split("T"),
        hourResponse = this.checkTime(textResponse[0]);
      var testDateUtc = moment_tz.tz(`${timeResponse[0]}T${hourResponse}:00:00`, "America/Los_Angeles");
      var localDate = moment(testDateUtc).local();
      //console.log(`${timeResponse[0]}T${hourResponse}:00:00`);
      return localDate.format("MMM-DD-YYYY ddd,hA");
    }

  }

  render() {
    return (
      <div className="EventGenerator">
        {this.state.events.map((event, i) => (
          <div key={i} className="col-xs-12 text-center">
            <div className="event-item">
              <h3 >
                {event.title_tag_line}
              </h3>
              <h4>
                <i className="fa fa-calendar"></i> {this.parseLocalTime(event.event_date, event.event_time_text)}
              </h4>
              <img src={event.feature_image} className="img-responsive"/>
              <a className="btn btn-primary" href={`${this.state.apiUrl}/${event.id}`}>See more details <i className="fa fa-angle-right"></i></a>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

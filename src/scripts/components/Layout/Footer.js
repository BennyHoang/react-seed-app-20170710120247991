import React from 'react';

export default class Footer extends React.Component {

  render() {
    return (
      <footer className="row">
        <div className="container-fluid">
          <p>
            © {this.props.copyrightYear}
            {this.props.copyrightHolder}
             <a class="footer-link icon" href={this.props.url} title={this.props.urlTitle}>
              <i class={'fa fa-' + this.props.faIcon}></i>
            </a>
          </p>
        </div>
      </footer>
    )
  }
}

import React, {Component} from 'react';

class Cards extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Cards;
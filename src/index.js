import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const points = [
  "0",
  "1",
  "2",
  "3",
  "5",
  "8",
  "13",
  "21",
  "34",
  "55",
  "89",
  "?",
];

class Card extends React.Component {
  render() {
    const point = this.props.point;
    return <div className="card">{point}</div>;
  }
}

class Table extends React.Component {
  render() {
    const cards = points.map((point) => {
      return <Card key={point} point={point} />;
    });
    return <div className="table">{cards}</div>;
  }
}

class User extends React.Component {
  render() {
    return <div className="user">{this.props.name}</div>;
  }
}

class Estimater extends React.Component {
  render() {
    return(
      <div className='estimater'>
        <div className='estimater-point'>{this.props.point}</div>
        <div className='estimater-name'>{this.props.name}</div>
      </div>
    );
  }
}

class PlanningPoker extends React.Component {
  constructor(props) {
    super(props);
    let myName = undefined;
    while (!myName) {
      //myName = window.prompt("your name");
      myName = 'demo';
    }
    let estimaters = [
      {name:'demo', point:undefined},
      {name:'demo2', point:'3'},
      {name:'demo3', point:'?'},
      {name:'demo4', point:'?'},
      {name:'demo5', point:'?'},
      {name:'demo6', point:'?'},
      {name:'demo7', point:'?'},
    ];
    this.state = {
      myName: myName,
      estimaters: estimaters,
    };
  }

  render() {
    const estimaters = this.state.estimaters.map(estimater => {
        return <Estimater key={estimater.name} name={estimater.name} point={estimater.point} />;
    });
    return (
      <div>
        <User name={this.state.myName} />
        <Table />
        <div className="estimaters">
          {estimaters}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<PlanningPoker />, document.getElementById("root"));

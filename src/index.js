import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const points = ["0", "1", "2", "3", "5", "8", "13", "21", "34", "55", "?", "∞"];

class Card extends React.Component {
  render() {
    const point = this.props.point;
    const className = "card" + (this.props.isSelected ? " selected" : "");
    return (
      <div className={className} onClick={this.props.handleClick}>
        {point}
      </div>
    );
  }
}

class Selection extends React.Component {
  render() {
    const cards = points.map((point) => {
      const isSelected = this.props.mySelectedPoint === point;
      return (
        <Card
          isSelected={isSelected}
          key={point}
          point={point}
          handleClick={() => this.props.handleSelectionCardClick(point)}
        />
      );
    });
    return <div className="selection">{cards}</div>;
  }
}
class User extends React.Component {
  render() {
    return <div className="user">{this.props.name}</div>;
  }
}

class Table extends React.Component {
  render() {
    const estimaters = this.props.estimaters.map((estimater) => {
      return (
        <Estimater
          key={estimater.name}
          name={estimater.name}
          point={estimater.point}
          isOpend={this.props.isOpend}
        />
      );
    });
    return (
      <div className="table">
        <div className="estimaters">{estimaters}</div>
        <OpenButton
          isOpend={this.props.isOpend}
          handleClick={() => this.props.handleOpenButtonClick()}
        />
      </div>
    );
  }
}

class Estimater extends React.Component {
  render() {
    const point = this.props.isOpend ? this.props.point : undefined;
    const className = "estimater " + (this.props.isOpend ? "opend" : "closed");
    return (
      <div className={className}>
        <Card point={point} />
        <div className="estimater-name">{this.props.name}</div>
      </div>
    );
  }
}

class OpenButton extends React.Component {
  render() {
    const className = "open-button";
    return (
      <div className={className} onClick={() => this.props.handleClick()}>
        {this.props.isOpend ? "return" : "open"}
      </div>
    );
  }
}

class PlanningPoker extends React.Component {
  constructor(props) {
    super(props);
    let myName = undefined;
    while (!myName) {
      //myName = window.prompt('your name');
      myName = "you";
    }
    let estimaters = [
      { name: "demo", point: "5" },
      { name: "demo2", point: "3" },
      { name: "demo3", point: "?" },
      { name: "demo4", point: "?" },
      { name: "demo5", point: "?" },
      { name: "demo6", point: "?" },
      { name: "demo7", point: "?" },
      { name: "demo8", point: "?" },
    ];
    estimaters = [];
    this.state = {
      myName: myName,
      mySelectedPoint: undefined,
      estimaters: estimaters,
      isOend: false,
    };
  }

  handleOpenButtonClick() {
    const estimaters = this.state.isOpend ? [] : this.state.estimaters.slice();
    const isOpend =
      this.state.estimaters.length === 0 ? false : !this.state.isOpend;
    const mySelectedPoint = isOpend ? this.state.mySelectedPoint : undefined;
    this.setState({
      estimaters: estimaters,
      isOpend: isOpend,
      mySelectedPoint: mySelectedPoint,
    });
  }

  handleSelectionCardClick(point) {
    const isOff = this.state.mySelectedPoint === point;
    let estimaters = this.state.estimaters.slice();
    let mySelectedPoint = isOff ? undefined : point;
    if (isOff) {
      estimaters = this.state.estimaters.filter(
        (e) => e.name !== this.state.myName
      );
    } else {
      let myEstimater = estimaters.find((e) => e.name === this.state.myName);
      if (!myEstimater) {
        myEstimater = { name: this.state.myName };
        estimaters[estimaters.length] = myEstimater;
      }
      myEstimater["point"] = point;
    }
    this.setState({ estimaters: estimaters, mySelectedPoint: mySelectedPoint });
  }

  render() {
    return (
      <div>
        <Table
          estimaters={this.state.estimaters}
          isOpend={this.state.isOpend}
          handleOpenButtonClick={() => this.handleOpenButtonClick()}
        />
        <User name={this.state.myName} />
        <Selection
          mySelectedPoint={this.state.mySelectedPoint}
          handleSelectionCardClick={(point) =>
            this.handleSelectionCardClick(point)
          }
        />
      </div>
    );
  }
}

ReactDOM.render(<PlanningPoker />, document.getElementById("root"));

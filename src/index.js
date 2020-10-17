import React from "react";
import ReactDOM from "react-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { v4 as uuidv4 } from "uuid";
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
  createCopyText() {
    const estimaters = this.props.estimaters;
    if (estimaters.length === 0) {
      return "empty.";
    }
    const now = new Date();
    return (
      "[" +
      now.toLocaleDateString() +
      " " +
      now.toLocaleTimeString() +
      "] " +
      estimaters.sort((e1, e2) => e1.name > e2.name ? 1 : -1).reduce(
        (acc, cur) => (acc ? acc + " " : "") + `${cur.name}(${cur.point})`,
        null
      )
    );
  }
  render() {
    const isOpend = this.props.isOpend;
    const estimaters = this.props.estimaters.map((estimater) => {
      return (
        <Estimater
          key={estimater.name}
          name={estimater.name}
          point={estimater.point}
          isOpend={isOpend}
        />
      );
    });
    return (
      <div className="table">
        <div className="estimaters">{estimaters}</div>
        <OpenButton
          isOpend={isOpend}
          handleClick={() => this.props.handleOpenButtonClick()}
        />
        {isOpend && estimaters.length > 0 ? (
          <CopyButton text={this.createCopyText()} />
        ) : null}
      </div>
    );
  }
}

class CopyButton extends React.Component {
  render() {
    return (
      <CopyToClipboard text={this.props.text}>
        <div className="copy-button">Copy</div>
      </CopyToClipboard>
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
      myName = window.prompt("your name");
    }
    const socket = setupWebsocket(this.getSetupedRoomId());
    this.state = {
      myName: myName,
      estimaters: [],
      isOend: false,
      socket: socket,
    };
    this.handleSelectionCardClick = this.handleSelectionCardClick.bind(this);
    this.handleOpenButtonClick = this.handleOpenButtonClick.bind(this);
  }

  getSetupedRoomId() {
    const search = window.location.search;
    let roomId;
    if (!search) {
      const uuid = uuidv4();
      window.location.hash = uuid;
      window.history.replaceState("", "", "?" + uuid);
      roomId = uuid;
    } else {
      roomId = search.substring(1);
    }
    return roomId;
  }
  componentDidMount() {
    this.state.socket.on("do event", (event) => {
      const subscriber = this.eventSubscribers[event.type];
      if (subscriber) {
        subscriber(event);
      }
    });
  }

  eventSubscribers = {
    select: (event) => {
      let estimaters = this.state.estimaters.slice();
      let estimater = estimaters.find((e) => e.name === event.name);
      if (!estimater) {
        estimater = { name: event.name };
        estimaters[estimaters.length] = estimater;
      }
      estimater["point"] = event.point;
      this.setState({ estimaters: estimaters });
    },
    unselect: (event) => {
      const estimaters = this.state.estimaters.filter(
        (e) => e.name !== event.name
      );
      this.setState({ estimaters: estimaters });
    },
    open: (event) => {
      this.setState({
        isOpend: true,
      });
    },
    return: (event) => {
      this.setState({
        estimaters: [],
        isOpend: false,
      });
    },
  };

  handleOpenButtonClick() {
    const isOpend =
      this.state.estimaters.length === 0 ? false : !this.state.isOpend;
    const eventType = isOpend ? "open" : "return";
    this.state.socket.emit("do event", { type: eventType });
  }

  handleSelectionCardClick(point) {
    const myEstimater = this.state.estimaters.find(
      (e) => e.name === this.state.myName
    );
    const isOff = myEstimater && myEstimater.point === point;
    let estimaters = this.state.estimaters.slice();
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
    const eventType = isOff ? "unselect" : "select";
    this.state.socket.emit("do event", {
      type: eventType,
      name: this.state.myName,
      point: point,
    });
  }

  render() {
    const myEstimater = this.state.estimaters.find(
      (e) => e.name === this.state.myName
    );
    return (
      <div>
        <h1>Planning Poker</h1>
        <Table
          estimaters={this.state.estimaters}
          isOpend={this.state.isOpend}
          handleOpenButtonClick={this.handleOpenButtonClick}
        />
        <User name={this.state.myName} />
        <Selection
          mySelectedPoint={myEstimater ? myEstimater.point : undefined}
          handleSelectionCardClick={this.handleSelectionCardClick}
        />
      </div>
    );
  }
}

function setupWebsocket(roomId) {
  return window.io(
    "https://simple-websocket-server.herokuapp.com/?roomId=" + roomId
  );
}

ReactDOM.render(<PlanningPoker />, document.getElementById("root"));

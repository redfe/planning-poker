import React from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import { Table } from "./components/Table"
import { User } from "./components/User"
import { CardSelection } from "./components/CardSelection"

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
        <CardSelection
          selectedPoint={myEstimater ? myEstimater.point : undefined}
          handleCardClick={this.handleSelectionCardClick}
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

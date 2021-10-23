import { React, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Page } from './pages/Page';
import './App.css';

export const App = (props) => {
  const [myName, setMyName] = useState();
  const [estimaters, setEstimaters] = useState([]);
  const [isOpend, setIsOpend] = useState(false);
  const [socket, setSocket] = useState(undefined);

  const eventSubscribers = {
    select: (event) => {
      const newEstimaters = estimaters.slice();
      let estimater = newEstimaters.find((e) => e.name === event.name);
      if (!estimater) {
        estimater = { name: event.name };
        newEstimaters[newEstimaters.length] = estimater;
      }
      estimater['point'] = String(event.point);
      setEstimaters(newEstimaters);
    },
    unselect: (event) => {
      const newEstimaters = estimaters.filter((e) => e.name !== event.name);
      setEstimaters(newEstimaters);
    },
    open: () => {
      setIsOpend(true);
    },
    return: () => {
      setEstimaters([]);
      setIsOpend(false);
    },
  };

  // 初回のみ
  useEffect(() => {
    console.log('begin init.');
    if (!myName) {
      let name = myName;
      while (!name) {
        name = window.prompt('your name');
        setMyName(name);
      }
    }
    setSocket(setupWebsocket(getSetupedRoomId()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('begin socket setup.');
    if (!socket) {
      return;
    }
    socket.on('do event', (event) => {
      const subscriber = eventSubscribers[event.type];
      if (subscriber) {
        subscriber(event);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const handleOpenButtonClick = () => {
    const isOpendFlag = estimaters.length === 0 ? false : !isOpend;
    const eventType = isOpendFlag ? 'open' : 'return';
    socket.emit('do event', { type: eventType });
  };

  const handleSelectionCardClick = (point) => {
    const myEstimater = estimaters.find((e) => e.name === myName);
    const isOff = myEstimater && myEstimater.point === point;
    let newEstimaters = estimaters.slice();
    if (isOff) {
      newEstimaters = estimaters.filter((e) => e.name !== myName);
    } else {
      let myEstimater = estimaters.find((e) => e.name === myName);
      if (!myEstimater) {
        myEstimater = { name: myName };
        newEstimaters[newEstimaters.length] = myEstimater;
      }
      myEstimater['point'] = String(point);
    }
    const eventType = isOff ? 'unselect' : 'select';
    socket.emit('do event', {
      type: eventType,
      name: myName,
      point: String(point),
    });
  };

  return (
    <Page
      userName={myName}
      isOpend={isOpend}
      estimaters={estimaters}
      handleOpenButtonClick={handleOpenButtonClick}
      handleSelectionCardClick={handleSelectionCardClick}
    />
  );
};

function setupWebsocket(roomId) {
  return window.io('https://simple-websocket-server.herokuapp.com/?roomId=' + roomId);
}

function getSetupedRoomId() {
  const search = window.location.search;
  let roomId;
  if (!search) {
    const uuid = uuidv4();
    window.location.hash = uuid;
    window.history.replaceState('', '', '?' + uuid);
    roomId = uuid;
  } else {
    roomId = search.substring(1);
  }
  return roomId;
}

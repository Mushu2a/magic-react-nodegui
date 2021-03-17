import React, { useState } from "react";
import { Window, hot } from "@nodegui/react-nodegui";

import { QIcon } from "@nodegui/nodegui";

import { Layout } from "./components/index";

import nodeguiIcon from "../assets/nodegui.jpg";

import path from "path";

const rootDir = path.resolve(__dirname, "../");
const assetUrl = path.resolve(rootDir, "assets/images");

const minSize = { width: 1000, height: 500 };

const winIcon = new QIcon(nodeguiIcon);

function App() {
  var [pointer, setPointer] = useState(0);

  function changeImage() {
    const newPointer = pointer === 6 - 1 ? 0 : pointer + 1;
    setPointer(newPointer);
  }

  return (
    <Window
      styleSheet={styleSheet}
      windowIcon={winIcon}
      windowTitle="Magic 🃏"
      minSize={minSize}
      maxSize={minSize}
    >
      <Layout
        onClick={() => changeImage()}
        image={`${path.resolve(assetUrl, `${pointer}.jpg`)}`}
      />
    </Window>
  );
}

const styleSheet = `
  #container {
    flex: 1;
  }
  #controls {
    margin: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  #button {
    border: 4px solid #FFFFFF;
    background-color: rgba(105, 105, 105, 0.6);
  }
  #button-transparent {
    background-color: transparent;
  }
  #input {
    font-size: 40px;
    width: 250px;
    background: rgba(105, 105, 105, 0.6);
    border: 4px solid #FFFFFF;
    border-radius: 5px;
    qproperty-alignment: 'AlignCenter';
    text-transform: uppercase;
    color: #FFFFFF;
  }
  #rect {
    width: 180px;
    height: 150px;
    background: rgba(105, 105, 105, 0.6);
    border: 4px solid #FFFFFF;
    border-radius: 5px;
    qproperty-alignment: 'AlignCenter';
    text-transform: uppercase;
    color: #FFFFFF;;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  #content {
    margin-top: 20px;
  }
  #row {
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: "5%";
  }
  #item {
    flex-grow: 0;
    flex-shrink: 1;
  }
  #score {
    margin-top: 40px;
    margin-left: 35px;
  }
`;

export default hot(App);

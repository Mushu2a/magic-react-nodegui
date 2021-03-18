import React, { useState } from "react";
import { Window, hot } from "@nodegui/react-nodegui";

import { QIcon } from "@nodegui/nodegui";

import { Layout } from "./components/index";

import nodeguiIcon from "../assets/nodegui.jpg";

import image0 from "../assets/images/0.jpg";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";

import path from "path";

const rootDir = path.resolve(__dirname, "../");

// Use only if not build folder with image inside
// const assetImages = path.resolve(rootDir, "assets/images");

const minSize = { width: 1000, height: 500 };

const winIcon = new QIcon(nodeguiIcon);

function App() {
  var [pointer, setPointer] = useState(0);
  var [images, setImages] = useState([
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
  ]);

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
        image={`${path.resolve(rootDir, `${images[pointer]}`)}`}
      />
    </Window>
  );
}

const styleSheet = `
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

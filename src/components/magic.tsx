import React, { useEffect, useState } from "react";
import { LineEdit, Button, View } from "@nodegui/react-nodegui";

import { QSize, QIcon, QCursor } from "@nodegui/nodegui";

import btnUpLeft from "../../assets/images/btn_triangle_bleu_up.png";
import btnDownLeft from "../../assets/images/btn_triangle_bleu_down.png";
import btnUpRight from "../../assets/images/btn_triangle_rouge_up.png";
import btnDownRight from "../../assets/images/btn_triangle_rouge_down.png";

const size = 80;
const icon = new QSize(size, size);
const btnSize = { width: size, height: size };

const btnIconUpLeft = new QIcon(btnUpLeft);
const btnIconDownLeft = new QIcon(btnDownLeft);
const btnIconUpRight = new QIcon(btnUpRight);
const btnIconDownRight = new QIcon(btnDownRight);

const cursor = new QCursor(13);

function Magic(props: any) {
  const [namePlayer1, setNamePlayer1] = useState("");
  const [namePlayer2, setNamePlayer2] = useState("");

  const [countP1, setCountP1] = useState(0);
  const [countP2, setCountP2] = useState(0);

  const [fontSizeP1, setFontSizeP1] = useState(85);
  const [fontSizeP2, setFontSizeP2] = useState(85);

  const [status, setStatus] = useState(false);
  const [player, setPlayer] = useState(1);
  const [type, setType] = useState("up");

  useEffect(() => {
    const interval = setInterval(() => {
      if (status) playerCount(player, type);
    }, 100);

    return () => clearInterval(interval);
  }, [status]);

  function playerCount(player: number, thisType: any) {
    const fontSize = player <= 1 ? setFontSizeP1 : setFontSizeP2;
    const functionPlayer = player <= 1 ? setCountP1 : setCountP2;
    const count = player <= 1 ? countP1 : countP2;

    count > 999 && count < 1000000
      ? fontSize(40)
      : count >= 1000000
      ? fontSize(20)
      : fontSize(85);

    if (thisType == "up") {
      functionPlayer((count) => count + 1);
    } else if (thisType == "down") {
      functionPlayer((count) => (count <= 0 ? 0 : count - 1));
    }
  }

  const handleTextChanged = (value: any, thisType: number) => {
    if (thisType == 1) {
      setCountP1(parseInt(value, 10));
    } else if (thisType == 2) {
      setCountP2(parseInt(value, 10));
    }
  };

  return (
    <View id="content">
      <View id="row">
        <View id="item">
          <LineEdit
            id="input"
            text={namePlayer1}
            placeholderText="Joueur 1"
            on={{
              textChanged: (value) => setNamePlayer1(value),
            }}
          />

          <View id="score">
            <Button
              id="button-transparent"
              style={`margin-left: "20%";`}
              icon={btnIconUpLeft}
              iconSize={icon}
              maxSize={btnSize}
              minSize={btnSize}
              cursor={cursor}
              on={{
                clicked: () => {
                  playerCount(1, "up");
                },
                pressed: () => {
                  setPlayer(1);
                  setType("up");
                  setStatus(true);
                },
                released: () => {
                  setStatus(false);
                },
              }}
            />

            <LineEdit
              id="rect"
              style={`font-size: ${fontSizeP1}px;`}
              text={countP1.toString()}
              on={{
                textChanged: (value) => handleTextChanged(value ? value : 0, 1),
              }}
            />

            <Button
              id="button-transparent"
              style={`margin-left: "20%";`}
              icon={btnIconDownLeft}
              iconSize={icon}
              maxSize={btnSize}
              minSize={btnSize}
              cursor={cursor}
              on={{
                clicked: () => {
                  playerCount(1, "down");
                },
                pressed: () => {
                  setPlayer(1);
                  setType("down");
                  setStatus(true);
                },
                released: () => {
                  setStatus(false);
                },
              }}
            />
          </View>
        </View>
        <View id="item">
          <LineEdit
            id="input"
            text={namePlayer2}
            placeholderText="Joueur 2"
            on={{ textChanged: (value) => setNamePlayer2(value) }}
          />

          <View id="score">
            <Button
              id="button-transparent"
              style={`margin-left: "20%";`}
              icon={btnIconUpRight}
              iconSize={icon}
              maxSize={btnSize}
              minSize={btnSize}
              cursor={cursor}
              on={{
                clicked: () => {
                  playerCount(2, "up");
                },
                pressed: () => {
                  setPlayer(2);
                  setType("up");
                  setStatus(true);
                },
                released: () => {
                  setStatus(false);
                },
              }}
            />

            <LineEdit
              id="rect"
              style={`font-size: ${fontSizeP2}px;`}
              text={countP2.toString()}
              on={{
                textChanged: (value) => handleTextChanged(value ? value : 0, 2),
              }}
            />

            <Button
              id="button-transparent"
              style={`margin-left: "20%";`}
              icon={btnIconDownRight}
              iconSize={icon}
              maxSize={btnSize}
              minSize={btnSize}
              cursor={cursor}
              on={{
                clicked: () => {
                  playerCount(2, "down");
                },
                pressed: () => {
                  setPlayer(2);
                  setType("down");
                  setStatus(true);
                },
                released: () => {
                  setStatus(false);
                },
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Magic;

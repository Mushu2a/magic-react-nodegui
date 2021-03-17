import React from "react";
import { View, Button } from "@nodegui/react-nodegui";

import { QIcon, QSize, QCursor } from "@nodegui/nodegui";

import btnChangeImage from "../../assets/images/btn.png";

const size = 60;
const btnSize = { width: size, height: size };

const btnIcon = new QIcon(btnChangeImage);

const ButtonImage = (props: any) => {
  return (
    <View id="controls">
      <Button
        id="button"
        icon={btnIcon}
        iconSize={new QSize(size, size)}
        maxSize={btnSize}
        minSize={btnSize}
        cursor={new QCursor(13)}
        on={{
          clicked: () => props.onClick(),
        }}
      />
    </View>
  );
};

export default ButtonImage;

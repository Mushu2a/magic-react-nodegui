import React from "react";
import { Text, View } from "@nodegui/react-nodegui";

import { ButtonImage, Example, Magic } from "./index";

const Layout = (props: any) => {
  return (
    <View
      id="container"
      style={`background-image: url("${props.image}") 0 0 0 0 stretch stretch;`}
    >
      <Magic />
      <ButtonImage onClick={() => props.onClick()} />
    </View>
  );
};

export default Layout;

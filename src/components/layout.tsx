import React from "react";
import { View } from "@nodegui/react-nodegui";

import { ButtonImage, Magic } from "./index";

const Layout = (props: any) => {
  return (
    <View
      style={`background-image: url("${props.image}") 0 0 0 0 stretch stretch;`}
    >
      <Magic />
      <ButtonImage onClick={() => props.onClick()} />
    </View>
  );
};

export default Layout;

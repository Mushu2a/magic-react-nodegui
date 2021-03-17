import React from "react";
import { Text, View, Button } from "@nodegui/react-nodegui";

export default function Example() {
  return (
    <View
      style={`
        align-items: 'center';
        justify-content: 'center';
      `}
    >
      <Text>Home Page</Text>
      <Text>You are now looking at Home Page 🤓</Text>
      <Button text="Go to about"></Button>
    </View>
  );
}

import React from "react";
import { View, Image } from "react-native";

function BottomBar(props) {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        alignItems: "center",
        width: "100%",
      }}
    >
      <Image
        source={require("../assets/logo.png")}
        style={{
          width: 120,
          height: 120,
        }}
      ></Image>
    </View>
  );
}

export default BottomBar;

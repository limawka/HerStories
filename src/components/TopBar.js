import React from "react";
import { View, Text } from "react-native";
import colors from "../config/colors";

const TopBar = () => {
  return (
    <View
      style={{
        height: 120,
        backgroundColor: colors.background,
        alignItems: "center",
      }}
    >
      <View style={{ flex: 0.3 }}></View>
      <Text style={{ color: colors.white, fontSize: 30, fontFamily: "Nunito" }}>
        HerStories
      </Text>
      <View
        style={{
          width: "100%",
          height: 50,
          backgroundColor: colors.secondPurple,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute", //Here is the trick
          bottom: 0, //Here is the trick
          shadowColor: "black",
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 4,
          shadowOpacity: 1,
          elevation: 10,
        }}
      ></View>
    </View>
  );

  return (
    <View
      style={{
        width: "100%",
        height: 80,
        backgroundColor: colors.secondPurple,
        justifyContent: "center",
        alignItems: "center",

        shadowColor: "black",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 10,
      }}
    >
      <View style={{ height: 20 }}></View>
      <Text
        style={{
          color: colors.white,
          fontSize: 30,
          fontFamily: "Nunito",
        }}
      >
        HerStories
      </Text>
    </View>
  );
};

export default TopBar;

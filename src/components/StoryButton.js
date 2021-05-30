import React from "react";
import { View, Text, Image } from "react-native";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";

function StoryButton(props) {
  return (
    <LinearGradient
      colors={props.colors}
      style={{
        width: 150,
        height: 220,
        borderRadius: 25,
        borderColor: colors.dark,
        borderWidth: 1.5,
        paddingTop: 12,
        paddingLeft: 12,
        paddingRight: 12,
        overflow: "hidden",
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "NunitoBold",
              fontSize: 20,
              color: colors.white,
            }}
          >
            {props.title}
          </Text>
          <Text
            style={{
              fontFamily: "Nunito",
              fontSize: 15,
              textAlign: "right",
              color: colors.white,
            }}
          >
            {props.character}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "column",
            paddingTop: 4,
          }}
        >
          <View style={{ flex: 1, flexDirection: "row-reverse" }}>
            <Image
              source={props.img}
              style={{ width: 110, height: 150, resizeMode: "contain" }}
            ></Image>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

export default StoryButton;

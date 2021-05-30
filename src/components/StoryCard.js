import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);

const StoryCard = ({ item, index, ...rest }) => {
  const Cover = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 10 }}>
          <Text style={styles.header}>{item.title}</Text>
          <Text style={styles.body}>{item.description}</Text>
        </View>

        <View
          style={{
            flex: 10,
            alignItems: "center",
            flexDirection: "column-reverse",
          }}
        >
          <Image source={item.img} style={{ width: 250, height: 290 }} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ ...styles.body, textAlign: "right" }}>
            Swipe to read
          </Text>
        </View>
      </View>
    );
  };

  const Content = () => {
    return (
      <View
        style={{
          borderRadius: 15,
          backgroundColor: colors.white,
          height: "100%",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column-reverse",
            paddingBottom: 15,
          }}
        >
          <Image source={item.img} style={{ width: 40, height: 40 }} />
        </View>
        <View style={{ flex: 1, flexDirection: "column", paddingTop: 15 }}>
          <Text
            style={{ ...styles.body, color: colors.dark, textAlign: "center" }}
          >
            {item.body}
          </Text>
        </View>
      </View>
    );
  };

  const End = () => {
    return (
      <View
        style={{
          height: "100%",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              fontFamily: "Nunito",
              textAlign: "center",
              fontSize: 40,
              color: colors.white,
            }}
          >
            Koniec
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          {/* <TouchableWithoutFeedback
            onPress={this.props.navigation.navigate("Stories")}
          >
            <View></View>
          </TouchableWithoutFeedback> */}
        </View>
      </View>
    );
  };

  const CardContent = () => {
    switch (item.screen) {
      case "cover":
        return <Cover></Cover>;
      case "content":
        return <Content></Content>;
      case "end":
        return <End></End>;
    }
  };

  return (
    <View key={index}>
      <LinearGradient
        // Background Linear Gradient
        colors={item.colors}
        style={styles.container}
      >
        <CardContent></CardContent>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 25,
    width: ITEM_WIDTH,
    shadowColor: "#000",
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    height: 500,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
    width: 150,
  },
  header: {
    color: colors.white,
    fontSize: 38,
    fontFamily: "NunitoBold",
    paddingLeft: 30,
    paddingTop: 20,
  },
  body: {
    color: colors.white,
    fontFamily: "Nunito",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default StoryCard;

import React from "react";
import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import TopBar from "../TopBar";
import StoryButton from "../StoryButton";
import colors from "../../config/colors";
import BottomBar from "../BottomBar";

function MainTemplate(props) {
  return (
    <View style={{ ...styles.background, ...props.style }}>
      <View>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#2D1C6E",
  },
});

export default MainTemplate;

import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <View>
      <View style={{ height: 150 }}></View>
      <Text> WITAMMM</Text>

      <TouchableWithoutFeedback onPress={() => navigation.navigate("Stories")}>
        <Text>Dalejjj</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default WelcomeScreen;

import React from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import StoryButton from "../components/StoryButton";
import MainTemplate from "../components/templates/MainTemplate";
import colors from "../config/colors";
import illustrations from "../config/illustrations";
import LinearGradient from "expo-linear-gradient";
import TopBar from "../components/TopBar";

import stories from "../assets/exampleStories";

function StoriesScreen({ navigation }) {
  var panelsLeft = [];
  var panelsRight = [];
  let i = true;
  stories.forEach((story) => {
    (i ? panelsLeft : panelsRight).push(
      <View
        key={story.id}
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Story", story)}
        >
          <View>
            <StoryButton
              colors={[story.primaryColor, story.secondaryColor]}
              title={story.title}
              img={story.illustration}
              character={story.characterName}
            ></StoryButton>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
    i = !i;
  });
  let j = stories.length;
  while (j < 5 || j <= stories.length + 2) {
    j++;
    (i ? panelsLeft : panelsRight).push(
      <View
        key={j}
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.dark,
            width: 150,
            height: 220,
            borderRadius: 25,
            paddingTop: 10,
            paddingLeft: 5,
            paddingRight: 5,
            overflow: "hidden",
          }}
        ></View>
      </View>
    );
    i = !i;
  }

  return (
    <MainTemplate>
      <TopBar></TopBar>
      <ScrollView style={{ zIndex: -1, paddingTop: 10 }}>
        <View style={{ zIndex: -3 }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                width: "50%",
                paddingLeft: "5%",
                flex: 1,
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 0.5 }}></View>
              <View>{panelsLeft}</View>
            </View>

            <View
              style={{
                width: "50%",
                paddingLeft: "5%",
                flex: 1,
                flexDirection: "row-reverse",
              }}
            >
              <View style={{ flex: 0.5 }}></View>
              <View>
                <View style={{ height: 100 }}></View>
                {panelsRight}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </MainTemplate>
  );
}

export default StoriesScreen;

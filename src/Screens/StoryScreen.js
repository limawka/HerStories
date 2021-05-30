import React from "react";
import { View, Text } from "react-native";
import MainTemplate from "../components/templates/MainTemplate";
import styles from "../styles/style";
import StoryCard, { SLIDER_WIDTH, ITEM_WIDTH } from "../components/StoryCard";
import Carousel from "react-native-snap-carousel";
import illustrations from "../config/illustrations";
import icons from "../config/icons";
import TopBar from "../components/TopBar";

function StoryScreen(props) {
  let params = props.route.params;
  let data = [
    {
      screen: "cover",
      title: params.title,
      description: params.description,
      img: params.illustration,
      colors: [params.primaryColor, params.secondaryColor],
    },
    {
      screen: "content",
      body: "Była sobie " + params.characterName,
      img: icons.book,
      colors: [params.primaryColor, params.secondaryColor],
    },
    {
      screen: "content",
      body: params.content.challenge,
      img: icons.play,
      colors: [params.primaryColor, params.secondaryColor],
    },
    {
      screen: "content",
      body: params.content.emotions,
      img: icons.diamond,
      colors: [params.primaryColor, params.secondaryColor],
    },
    {
      screen: "content",
      body: params.content.solution,
      img: icons.flower,
      colors: [params.primaryColor, params.secondaryColor],
    },
    {
      screen: "content",
      body: params.content.result,
      img: icons.confetti,
      colors: [params.primaryColor, params.secondaryColor],
    },
    {
      screen: "end",
      body: params.content.result,
      colors: [params.primaryColor, params.secondaryColor],
      navigation: props.navigation,
    },
  ];

  const isCarousel = React.useRef(null);
  return (
    <MainTemplate>
      <TopBar></TopBar>
      <View>
        <Carousel
          layout={"default"}
          ref={isCarousel}
          data={data}
          renderItem={StoryCard}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
        />
      </View>
    </MainTemplate>
  );
}

export default StoryScreen;

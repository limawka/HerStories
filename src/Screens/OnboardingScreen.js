import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import colors from "../config/colors";
import {
  Image,
  StyleSheet,
  Button,
  View,
  Text,
  Touchable,
  TouchableWithoutFeedback,
} from "react-native";

const Skip = ({ isLight, skipLabel, ...props }) => (
  <TouchableWithoutFeedback title="Skip" {...props}>
    <View style={{ marginLeft: 20 }}>
      <Text style={{ fontFamily: "Nunito", color: colors.lightBlue }}>
        {skipLabel}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

const Next = ({ isLight, nextLabel, ...props }) => (
  <TouchableWithoutFeedback title="Next" {...props}>
    <View
      style={{
        marginRight: 20,
        backgroundColor: colors.lightBlue,
        borderRadius: 8,
        width: 80,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontFamily: "Nunito", color: colors.white, fontSize: 18 }}>
        {nextLabel}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

const Done = ({ isLight, ...props }) => (
  <TouchableWithoutFeedback title="Done" {...props}>
    <View
      style={{
        marginRight: 100,
        backgroundColor: colors.lightBlue,
        borderRadius: 8,
        width: 200,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontFamily: "Nunito", color: colors.white, fontSize: 18 }}>
        Join our storytelling
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

function OnboardingScreen({ navigation }) {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onDone={() => navigation.navigate("Stories")}
      onSkip={() => navigation.navigate("Stories")}
      pages={[
        {
          backgroundColor: colors.background,
          title: "Hi, we are HerStories!",
          subtitle: "Ready to help you create your own HerStory about courage",
          image: (
            <Image
              source={require("../assets/images/Girl1_comp.png")}
              style={{ width: 240, height: 282 }}
            ></Image>
          ),
          titleStyles: styles.title,
          subTitleStyles: styles.subTitle,
          imageContainerStyles: styles.image,
          containerStyles: styles.container,
        },
        {
          backgroundColor: colors.background,
          title: "Storytelling \nan interactive art",
          subtitle:
            "Using words nad actions reveals the elements and images of a story while encouraging the listener's imagination.",
          image: (
            <Image
              source={require("../assets/images/Girl2_comp.png")}
              style={{ width: 222, height: 282 }}
            ></Image>
          ),
          titleStyles: styles.title,
          subTitleStyles: styles.subTitle,
          imageContainerStyles: styles.image,
          containerStyles: styles.container,
        },
        {
          backgroundColor: colors.background,
          title: "Why cannot\nwe be our own \nlisteners?",
          subtitle: "What is your story then?",
          image: (
            <Image
              source={require("../assets/images/Girl3_comp.png")}
              style={{ width: 190, height: 282 }}
            ></Image>
          ),
          titleStyles: styles.title,
          imageContainerStyles: styles.image,
          containerStyles: styles.container,
          subTitleStyles: {
            fontFamily: "Nunito",
            color: colors.lightBlue,
            fontSize: 20,
            textAlign: "left",
          },
        },
      ]}
    ></Onboarding>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Nunito",

    textAlign: "left",
    width: 200,
  },
  subTitle: {
    fontFamily: "Nunito",
    width: 200,
    textAlign: "left",
    marginBottom: 25,
  },
  image: {
    width: 205,
    height: 282,
  },
  container: {},
});

export default OnboardingScreen;

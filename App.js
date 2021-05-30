import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import WelcomeScreen from "./src/Screens/WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import StoriesScreen from "./src/Screens/StoriesScreen";
import StoryScreen from "./src/Screens/StoryScreen";
import { useFonts } from "expo-font";
import Onboarding from "react-native-onboarding-swiper";
import Navigation from "./src/navigations/Navigation";
import OnboardingScreen from "./src/Screens/OnboardingScreen";

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Nunito: require("./src/assets/fonts/Nunito-Light.ttf"),
    NunitoBold: require("./src/assets/fonts/Nunito-Bold.ttf"),
  });
  if (!loaded) return null;

  return <Navigation></Navigation>;
}

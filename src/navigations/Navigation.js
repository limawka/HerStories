import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MainTemplate from "../components/templates/MainTemplate";
import StoriesScreen from "../Screens/StoriesScreen";
import StoryScreen from "../Screens/StoryScreen";
import { Text } from "react-native";
import OnboardingScreen from "../Screens/OnboardingScreen";

const Stack = createStackNavigator();

function StoriesNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          options={{ headerShown: false }}
          component={OnboardingScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Stories"
          options={{ headerShown: false }}
          component={StoriesScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Story"
          options={{ headerShown: false }}
          component={StoryScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StoriesNavigation;

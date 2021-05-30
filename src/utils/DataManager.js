import React from "react";
import { AsyncStorage } from "react-native";

storeData = async (stories) => {
  try {
    await AsyncStorage.setItem("stories", stories);
  } catch (err) {
    console.log(err);
  }
};

export default Stories;

retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem("name");
    return value;
  } catch (error) {
    console.log(console.error());
  }
};

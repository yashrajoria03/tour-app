import { ImageBackground, Text, View } from "react-native";
import React, { Component } from "react";
const bg = require("../assets/bg-dark.png");

const Loading = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("Home");
  }, 3000);
  return (
    <View className="flex-1">
      <ImageBackground
        source={bg}
        className="flex-1 items-center justify-center"
      >
        <Text className="text-5xl text-white">Loading....</Text>
      </ImageBackground>
    </View>
  );
};

export default Loading;

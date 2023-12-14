import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { Card } from "react-native-elements";
import React, { useState } from "react";
import { FiBell } from "react-icons/fi";

import { SafeAreaView } from "react-native-safe-area-context";
const cover = require("../../assets/cover4.jpg");

export default function CreateTrip({ navigation }) {
  const [city, setCity] = useState("Delhi");
  return (
    <SafeAreaView className="flex-1 flex-col">
      <View className="h-2/5 w-full ">
        <ImageBackground
          source={cover}
          className="object-contain h-full w-full flex flex-col justify-end "
        >
          <View className="flex flex-col items-start justify-end m-4 space-y-3 ">
            <Text className="text-md font-medium uppercase text-[#EEEEEE]">
              You are in {city}
            </Text>
            <TextInput
              className="placeholder:text-3xl uppercase text-[#EEEEEE] placeholder:text-[#EEEEEE]]"
              placeholder="Select a City"
            ></TextInput>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

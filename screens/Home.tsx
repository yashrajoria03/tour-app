import {
  View,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const user = require("../assets/user.png");

const Home = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-[#F1F6F7]">
      <View className="w-full  h-14 flex flex-row items-center justify-between px-2">
        <View className="flex flex-row items-center justify-center w-1/3 space-x-2">
          <TouchableOpacity
            className="rounded-full object-contain"
            onPress={() => navigation.navigate("CreateTrip")}
          >
            <Image source={user}></Image>
          </TouchableOpacity>
          <Text className="font-medium text-base ">Hi, Yash!</Text>
        </View>
        <View className=" flex flex-row justify-end bg-[#ffffff] shadow-xl shadow-primary rounded-full p-2">
          <TouchableOpacity className="rounded-full object-contain ">
            <Icon name="bell-outline" size={20} color="#FF971D" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

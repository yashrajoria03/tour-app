import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackgroundImage } from "react-native-elements/dist/config";

export default function PastTrip() {
  return (
    <SafeAreaView className="flex-1 bg-[#F1F6F7] py-1 px-3 space-y-10">
      <View className="flex flex-col justify-start items-start h-2/3 relative ">
        <Image
          source={require("../../assets/desert.jpg")}
          className="w-full h-full rounded-xl"
        />
        <View className=" absolute flex flex-col items-end justify-start bottom-0 w-full p-2 bg-primary rounded-b-xl opacity-80">
          <Text className=" text-2xl text-white font-bold ">Jaipur</Text>
          <Text className="text-white  font-bold">₹20000</Text>
          <Text className=" text-sm text-white font-bold ">3N/4D</Text>
        </View>

        <View className="flex flex-col p-2 justify-start w-full space-y-2 mt-1">
          <View className="flex flex-row  justify-between items-center w-full">
            <Text className="font-medium text-xl text-orange "> Overview</Text>
            <Text className="font-medium text-base">⭐ 3.4 out of 5</Text>
          </View>
          <Text className="text-justify w-full font-light text-sm px-1 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deserunt
            quasi, doloribus, vero nobis dolorum architecto odit sapiente ex
            eius cupiditate id aspernatur aliquam corporis sunt iste nihil.
            Velit, aspernatur.
          </Text>
        </View>

        {/* <Text className="font-bold text-4xl text-primary">Ready for</Text>
        <Text className="font-bold text-4xl text-primary">your next trip?</Text>
        <View className="rounded-md w-full h-12 mt-4 flex items-center justify-center bg-white shadow-xl shadow-primary">
          <TextInput
            onChangeText={(e) => handleSearch}
            placeholder="Search for a place"
            className="rounded-md w-[93%] h-12 px-2 py-3 text-xl  text-[#272829]"
            autoFocus={false}
            placeholderTextColor={"#E0E0E0"}
          />
        </View> */}
      </View>
    </SafeAreaView>
  );
}

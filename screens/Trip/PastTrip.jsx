import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";

export default function PastTrip() {
  return (
    <ScrollView>
      <SafeAreaView className="flex-1 bg-[#F1F6F7] py-1 px-3 space-y-2">
        <View className="flex flex-col justify-start items-start h-[60vh] relative ">
          <Image
            source={require("../../assets/desert.jpg")}
            className="w-full h-full rounded-xl"
          />
          <View className=" absolute flex flex-col items-end justify-start w-full p-2 bg-primary rounded-b-xl opacity-80 bottom-0">
            <Text className=" text-2xl text-white font-bold ">Jaipur</Text>
            <Text className="text-white  font-bold">₹20000</Text>
            <Text className=" text-sm text-white font-bold ">3N/4D</Text>
          </View>
        </View>
        <View className="flex flex-col p-2 justify-start w-full space-y-2 mt-1">
          <View className="flex flex-row  justify-between items-center w-full">
            <Text className="font-medium text-xl text-orange ">Overview</Text>
            <Text className="font-medium text-base">⭐ 3.4 out of 5</Text>
          </View>
          <Text className="text-justify w-full font-light text-sm  flex-wrap ">
            Lorem ipsum dolor sit amet conasdasdsectetur
            adipidasdasdasdasdasdasdasadasdadsadasding elit. Ab deserunt quasi,
            doloribus, vero nobis dolorum architecto odit sapiente ex eius
            cupiditate id aspernatur aliquam corporis sunt iste nihil. Ve lit,
            aspernatur.
          </Text>
        </View>
        <View className="flex flex-col p-2 justify-start w-full mt-1">
          {/* header */}
          <View className="flex flex-row justify-between items-center ">
            <View className="flex flex-col items-start justify-center w-1/2 ">
              <Text className=" text-2xl text-orange font-bold">Jaipur</Text>
              <Text className="text-xs font-light text-darkGray">
                from 8/9 to 12/9, 3N4D
              </Text>
            </View>
            <View className="flex items-center justify-center w-1/2 ">
              <SelectDropdown
                buttonStyle={{
                  backgroundColor: "#FF971D",
                  borderRadius: 10,
                  width: 75,
                  height: 30,
                }}
                dropdownStyle={{
                  marginTop: 0,
                  width: 100,
                  // height: 200,
                  borderRadius: 10,
                  backgroundColor: "#FFE8D6",
                }}
                // dropdownTexttyle={{ fontSize: 10, fontWeight: "bold" }}
                buttonTextStyle={{
                  color: "#FFFFFF",
                  fontSize: 10,
                  fontWeight: "bold",
                }}
                searchInputTxtColor="#FFFFFF"
                searchPlaceHolderColor="#FFFFFF"
                data={[
                  "8/91 Mon",
                  "9/9 Tue",
                  "10/9 Wed",
                  "11/9 Thu",
                  "12/9 Fri",
                ]}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultValueByIndex={0}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            </View>
          </View>
          {/* header ends */}
          <View className="flex flex-col items-center justify-start space-y-4 mt-10">
            <View className="w-full h-auto min-h-[90px]  max-h-[150px] rounded-lg flex flex-row items-center justify-between ">
              <View className=" w-1/3 h-full flex flex-col items-center justify-start ">
                <Text className="text-darkGray text-xs font-medium">15:30</Text>
                <Icon name="flight-land" size={35} color="#FF971D" />
                <View className="w-[0.1px]  flex-1 border-l border-dotted  py-2 border-primary"></View>
              </View>
              <View className="bg-lightOrange w-2/3 h-full rounded-lg"></View>
            </View>
            <View className="w-full h-20  rounded-lg flex flex-row items-center justify-between">
              <View className=" w-1/3 h-full flex flex-col items-center justify-start ">
                <Text className="text-darkGray text-xs font-medium">15:30</Text>
                <Icon name="hotel" size={35} color="#FF971D" />
                <View className="w-[0.1px]  flex-1 border-l border-dotted  py-2 border-primary"></View>
              </View>
              <View className="bg-lightOrange w-2/3 h-full rounded-lg"></View>
            </View>
            <View className="w-full h-20  rounded-lg flex flex-row items-center justify-between">
              <View className=" w-1/3 h-full flex flex-col items-center justify-start ">
                <Text className="text-darkGray text-xs font-medium">15:30</Text>
                <Icon name="restaurant" size={35} color="#FF971D" />
                <View className="w-[0.1px]  flex-1 border-l border-dotted  py-2 border-primary"></View>
              </View>
              <View className="bg-lightOrange w-2/3 h-full rounded-lg"></View>
            </View>
            <View className="w-full h-20  rounded-lg flex flex-row items-center justify-between">
              <View className=" w-1/3 h-full flex flex-col items-center justify-start ">
                <Text className="text-darkGray text-xs font-medium">15:30</Text>
                <Icon2 name="binoculars" size={35} color="#FF971D" />
                <View className="w-[0.1px]  flex-1 border-l border-dotted  py-2 border-primary"></View>
              </View>
              <View className="bg-lightOrange w-2/3 h-full rounded-lg"></View>
            </View>
            <View className="w-full h-20  rounded-lg flex flex-row items-center justify-between">
              <View className=" w-1/3 h-full flex flex-col items-center justify-start ">
                <Text className="text-darkGray text-xs font-medium">15:30</Text>
                <Icon name="drive-eta" size={35} color="#FF971D" />
                <View className="w-[0.1px]  flex-1 border-l border-dotted  py-2 border-primary"></View>
              </View>
              <View className="bg-lightOrange w-2/3 h-full rounded-lg"></View>
            </View>
          </View>
        </View>
        {/* <View className="bg-primary">
        </View> */}
      </SafeAreaView>
    </ScrollView>
  );
}

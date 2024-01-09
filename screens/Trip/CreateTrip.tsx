import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/EvilIcons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatDate } from "../../utils/date";

export default function CreateTrip({ route, navigation }) {
  const { place } = route.params;
  const [departDate, setDepartDate] = useState(new Date().toDateString());
  const [returnDate, setReturnDate] = useState(new Date().toDateString());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date, e) => {
    switch (e) {
      case "depart":
        setDepartDate(
          new Date(date).toLocaleDateString("en-US", {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        );
        break;
      case "arrival":
        setReturnDate(new Date(date).toDateString());
        break;
    }
    hideDatePicker();
  };

  // const { place } = route.params;

  return (
    <ScrollView>
      <SafeAreaView className="flex-1 bg-[#F1F6F7] py-1 px-3 space-y-2">
        <View className="flex flex-col justify-start items-start h-[60vh] relative ">
          <Image
            source={require("../../assets/moutain.jpg")}
            className="w-full h-full rounded-xl"
          />
          <View className=" absolute flex flex-col items-end justify-start w-full p-2 bg-primary rounded-b-xl opacity-80 bottom-0">
            <Text className=" text-2xl text-white font-bold capitalize">
              {place}
            </Text>
            <Text className="text-white  font-bold">₹20000</Text>
            <Text className=" text-sm text-white font-bold ">3N/4D</Text>
          </View>
        </View>
        <View className="border border-gray rounded-lg w-full py-2 flex flex-col justify-center items-center">
          {/* calendar component */}
          <View className="flex flex-row items-center justify-evenly w-full ">
            {/* Departure Calendar */}
            <TouchableOpacity onPress={showDatePicker}>
              <View className="flex flex-col justify-start items-start border border-gray p-1 rounded-md">
                <View className="flex flex-row items-center justify-start ">
                  <Icon name="calendar" size={35}></Icon>
                  <Text>Depart </Text>
                </View>
                <Text className="text-orange font-medium px-2">
                  {departDate}
                </Text>
              </View>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                minimumDate={new Date()}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </TouchableOpacity>
            {/* Arrival Calendart */}
            <TouchableOpacity>
              <View className="flex flex-col justify-start items-start border border-gray p-1 rounded-md">
                <View className="flex flex-row items-center justify-start ">
                  <Icon name="calendar" size={35}></Icon>
                  <Text>Arrival </Text>
                </View>
                <Text className="text-orange font-medium px-2">
                  {returnDate}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

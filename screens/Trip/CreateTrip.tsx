import { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/EvilIcons";
import { FAB } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialIcons";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import { formatDate } from "../../utils/date";

export default function CreateTrip({ route, navigation }) {
  const { place } = route.params;
  const [departDate, setDepartDate] = useState(new Date().toDateString());
  const [returnDate, setReturnDate] = useState(new Date().toDateString());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [visible, setVisible] = useState(true);

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
    <>
      <ScrollView className="mb-2">
        <SafeAreaView className="flex-1 bg-[#F1F6F7] py-1 px-3 space-y-2 relative">
          <View className="flex flex-col justify-start items-start h-[60vh]  ">
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
          <View className="border border-gray rounded-lg w-full py-2 flex flex-col justify-center items-center space-y-2">
            {/* calendar component */}
            <View className="flex flex-row items-center justify-evenly w-full ">
              {/* Departure Calendar */}
              <TouchableOpacity onPress={showDatePicker}>
                <View className="flex flex-col justify-start items-start border border-gray p-1 rounded-md">
                  <View className="flex flex-row items-center justify-start ">
                    <Icon3 name="calendar" size={35}></Icon3>
                    <Text>Depart </Text>
                  </View>
                  <Text className="text-orange font-medium px-2">
                    {departDate}
                  </Text>
                </View>
                {/* <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                minimumDate={new Date()}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              /> */}
              </TouchableOpacity>
              {/* Arrival Calendart */}
              <TouchableOpacity>
                <View className="flex flex-col justify-start items-start border border-gray p-1 rounded-md">
                  <View className="flex flex-row items-center justify-start ">
                    <Icon3 name="calendar" size={35}></Icon3>
                    <Text>Arrival </Text>
                  </View>
                  <Text className="text-orange font-medium px-2">
                    {returnDate}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row items-center justify-evenly w-full bg-gray h-12 rounded-md p-1">
              <Text>More Options Here</Text>
            </View>
          </View>
          <View className="flex flex-col items-center justify-start space-y-4 mt-10">
            {/* <Text className="font-medium text-2xl text-primary">
            Let's plan your trip
          </Text> */}
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
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

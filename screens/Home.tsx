import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import Card from "../components/Card";

const user = require("../assets/user.png");

const Home = ({ navigation }) => {
  const [search, setSearch] = useState(null);

  const handleSearch = (e): void => {
    setSearch(e);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F1F6F7] py-1 px-3 space-y-10">
      <View className="w-full  h-14 flex flex-row items-center justify-between ">
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
            <IconM name="bell-outline" size={20} color="#FF971D" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-col justify-start items-start ">
        <Text className="font-bold text-4xl text-primary">Ready for</Text>
        <Text className="font-bold text-4xl text-primary">your next trip?</Text>
        <View className="rounded-md w-full h-12 mt-4 flex items-center justify-center bg-white shadow-xl shadow-primary">
          <TextInput
            onChangeText={(e) => handleSearch(e)}
            placeholder="Search for a place"
            className="rounded-md w-[93%] h-12 px-2 py-3 text-xl  text-[#272829]"
            autoFocus={false}
            onSubmitEditing={() =>
              navigation.navigate("CreateTrip", { place: search })
            }
            placeholderTextColor={"#E0E0E0"}
          />
        </View>
      </View>
      {/* past trip section */}
      <View className="flex flex-col justify-start items-start mx-auto">
        <View className="flex flex-row items-center justify-between w-full ">
          <Text className="font-bold text-2xl text-primary">Past Trips</Text>
          <TouchableOpacity onPress={() => navigation.navigate("PastTrip")}>
            <Text className="font-light text-base text-primary">View all</Text>
          </TouchableOpacity>
        </View>
        <Card />
      </View>
    </SafeAreaView>
  );
};

export default Home;

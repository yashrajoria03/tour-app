import { View, Text, Button, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-primary items-center justify-center space-y-10 ">
      <TouchableOpacity
        style={style.btn}
        onPress={() => navigation.navigate("CreateTrip")}
      >
        <Text style={style.text}>Plan New Trip</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.btn}
        onPress={() => navigation.navigate("ViewTrip")}
      >
        <Text style={style.text}>View Existing Trips</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  btn: {
    borderRadius: 8,
    color: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
    height: 70,
    width: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: "#fff",
  },
});

export default Home;

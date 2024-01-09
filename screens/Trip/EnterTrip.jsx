import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-elements";

const EnterTrip = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="flex  justify-center items-center flex-row h-full w-full">
        <Button
          onPress={() => {
            navigation.navigate("Home");
          }}
          className="w-16 h-12 bg-primary"
        >
          Press
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default EnterTrip;

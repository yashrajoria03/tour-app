import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/AntDesign";

const FloatingButton = () => {
  const [icon_1] = useState(new Animated.Value(40));
  const [icon_2] = useState(new Animated.Value(40));
  const [icon_3] = useState(new Animated.Value(40));

  const [pop, setPop] = useState(false);

  const popIn = () => {
    setPop(true);
    Animated.timing(icon_1, {
      toValue: 130,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 110,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 130,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const popOut = () => {
    setPop(false);
    Animated.timing(icon_1, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View className="absolute flex-1 w-16 float-right bottom-3 right-3 ">
      <FAB
        visible={visible}
        icon={{ name: "add", color: "white" }}
        color="#FF971D"
        className=""
      />
    </View>
  );
};

export default FloatingButton;

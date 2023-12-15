import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const data = [
  {
    id: 1,
    name: "Paris",
    myNote: "It was few amazing days in the city of Paris",
    date: "12-15 Jan 2021",
    days: 4,
    nights: 3,
    image: require("../assets/desert.jpg"),
    budget: 1000,
  },
  {
    id: 2,
    name: "Paris",
    myNote: "It was few amazing days in the city of Paris",
    date: "12-15 Jan 2021",
    days: 4,
    nights: 3,
    image: require("../assets/desert.jpg"),
    budget: 1000,
  },
  {
    id: 3,
    name: "Paris",
    myNote: "It was few amazing days in the city of Paris",
    date: "12-15 Jan 2021",
    days: 4,
    nights: 3,
    image: require("../assets/desert.jpg"),
    budget: 1000,
  },
  {
    id: 4,
    name: "Paris",
    myNote: "It was few amazing days in the city of Paris",
    date: "12-15 Jan 2021",
    days: 4,
    nights: 3,
    image: require("../assets/desert.jpg"),
    budget: 1000,
  },
  {
    id: 5,
    name: "Paris",
    myNote: "It was few amazing days in the city of Paris",
    date: "12-15 Jan 2021",
    days: 4,
    nights: 3,
    image: require("../assets/desert.jpg"),
    budget: 1000,
  },
  {
    id: 6,
    name: "Paris",
    myNote: "It was few amazing days in the city of Paris",
    date: "12-15 Jan 2021",
    days: 4,
    nights: 3,
    image: require("../assets/desert.jpg"),
    budget: 1000,
  },
  {
    id: 7,
    name: "Paris",
    myNote: "It was few amazing days in the city of Paris",
    date: "12-15 Jan 2021",
    days: 4,
    nights: 3,
    image: require("../assets/desert.jpg"),
    budget: 1000,
  },
];

const Card = () => {
  return (
    <FlatList
      horizontal={true}
      data={data}
      initialNumToRender={2}
      refreshing={true}
      renderItem={({ item }) => (
        <View className="flex flex-col items-start justify-start w-[43vw] h-[30vh] my-2 mr-4 bg-white shadow-md shadow-primary rounded-2xl">
          <View className="flex flex-col items-center justify-center h-1/2 w-full">
            <Image
              source={item.image}
              className="w-full h-full rounded-lg object-cover"
            />
          </View>
          <View className="flex-col items-start justify-between ">
            <View className="flex flex-col items-start justify-between p-2">
              <View className="flex flex-row justify-between items-center w-full ">
                <Text className="font-bold text-xl text-primary">
                  {item.name}
                </Text>
                <Text className="font-light text-sm text-primary">
                  {`${item.nights}N ${item.days}D`}
                </Text>
              </View>
              <Text className="font-light text-sm text-primary">
                {item.myNote && item.myNote.substring(0, 30) + "..."}
              </Text>
            </View>
            <View className="flex flex-row items-center justify-end w-full px-2">
              <Text className="font-normal text-sm text-primary">
                {` ₹${item.budget} Spent`}
              </Text>
            </View>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Card;

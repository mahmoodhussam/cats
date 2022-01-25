import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import CatItem from "../components/CatItem";
import { AntDesign } from "@expo/vector-icons";

export default function CatsList({ navigation }) {
  const [cats, setCats] = useState([
    {
      name: "LoL",
      breed: "Abyssinian",
      description:
        "Abyssinians are highly intelligent and intensely inquisitive. They love to investigate and will leave no nook or cranny unexplored. They’re sometimes referred to as “Aby-grabbys” because they tend to take things that grab their interest. The playful Aby loves to jump and climb. Keep a variety of toys on hand to keep her occupied, including puzzle toys that challenge her intelligence.",
    },
    {
      name: "SoS",
      breed: "Abyssinian",
      description:
        "Despite their somewhat wild appearance, American Bobtails are devoted companion cats who fit perfectly into families. Social and easygoing, they get along well with children and other four-legged pets.",
    },
    {
      name: "Bob",
      breed: "Japanese Bobtail",
      description:
        "One of the oldest cat breeds, the Japanese Bobtail is believed to bring good luck and prosperity. The two coat varieties, longhair and shorthair, are exactly the same except for coat length. This delightfully mischievous feline enjoys a good game of fetch and likes to carry things in her mouth. A healthy breed that lives an average of 15 to 18 years, the Japanese Bobtail is social and particularly good with children.",
    },
  ]);
  // handle add new cat
  const addCat = (newCat) => {
    const newCats = [...cats, newCat];
    setCats(newCats);
    navigation.navigate("cats");
  };
  // handle edit cat
  const editCat = (newCat, prevName) => {
    // const newCats = [...cats, newCat];
    let newCats = cats.map((el) => (el.name === prevName ? { ...newCat } : el));
    setCats(newCats);
    navigation.navigate("cats");
  };
  // handle edit cat
  const deleteCat = (name) => {
    let newCats = cats.filter((item) => item.name != name);
    setCats(newCats);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("add cat", { addCat });
        }}
        style={styles.addContainer}
      >
        <Text style={styles.addText}>Add Cat</Text>
        <AntDesign name="plus" size={24} color="#2595DB" />
      </TouchableOpacity>
      <FlatList
        data={cats}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CatItem
            item={item}
            navigation={navigation}
            editCat={editCat}
            deleteCat={deleteCat}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  addContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  addText: {
    fontSize: 20,
    color: "#2595DB",
    marginRight: 5,
  },
});

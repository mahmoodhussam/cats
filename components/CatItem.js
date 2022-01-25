import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome, Feather } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function CatItem({ navigation, item, editCat, deleteCat }) {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={() => {}}>
      <Text style={styles.catName}>{item.name}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("preview cat", item);
          }}
        >
          <MaterialIcons name="preview" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("edit cat", { item, editCat });
          }}
        >
          <MaterialIcons name="edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            deleteCat(item.name);
          }}
        >
          <MaterialIcons name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
  },
  catName: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

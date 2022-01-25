import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";

export default function EditCat({ navigation, route }) {
  const [name, setName] = useState(route.params.item.name);
  const [breed, setBreed] = useState(route.params.item.breed);
  const [description, setDescription] = useState(route.params.item.description);
  const prevName = route.params.item.name;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScrollView style={{ width: Dimensions.get("screen").width }}>
          <View style={{ marginTop: "25%" }}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Name: </Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={(value) => {
                  setName(value);
                }}
                value={name}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Breed: </Text>
              <TextInput
                style={styles.input}
                value={breed}
                onChangeText={(value) => {
                  setBreed(value);
                }}
                value={breed}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Description: </Text>
              <TextInput
                style={styles.input}
                value={description}
                onChangeText={(value) => {
                  setDescription(value);
                }}
                multiline
                numberOfLines={5}
                value={description}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Submit"
                onPress={() => {
                  const newCat = {
                    name: name,
                    breed: breed,
                    description: description,
                  };
                  route.params.editCat(newCat, prevName);
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    alignSelf: "center",
    width: 200,
    alignItems: "flex-start",
    marginBottom: 20,
  },
  input: {
    width: 200,
    padding: 10,
    borderWidth: 1,
    borderColor: "#2595DB",
  },
  inputLabel: {
    color: "#2595DB",
    marginRight: 20,
    marginBottom: 5,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

export default function PreviewCat({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.catPreviewInfo}>
        <Text style={styles.catPreviewText}>Name: </Text>
        <Text style={styles.catPreviewText}>{route.params.name}</Text>
      </View>
      <View style={styles.catPreviewInfo}>
        <Text style={styles.catPreviewText}>Breed: </Text>
        <Text style={styles.catPreviewText}>{route.params.breed}</Text>
      </View>
      <View style={styles.catPreviewInfo}>
        <Text style={styles.catPreviewText}>Description: </Text>
        <Text style={styles.catPreviewText}>{route.params.description}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
  },
  catPreviewInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  catPreviewText: {
    fontSize: 20,
  },
});

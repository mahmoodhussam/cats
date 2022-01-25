import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackCats from "./routes/StackCats";
import "react-native-gesture-handler";
export default function App() {
  return (
    <NavigationContainer>
      <StackCats />
    </NavigationContainer>
  );
}

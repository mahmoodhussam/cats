import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import CatsList from "../screens/CatsList";
import AddCat from "../screens/AddCat";
import EditCat from "../screens/EditCat";
import { StatusBar } from "react-native";
import PreviewCat from "../screens/PreviewCat";

const stack = createStackNavigator();
export default function StackCats() {
  return (
    <stack.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 25 },
        headerStyle: {
          backgroundColor: "#10203A",
        },
      }}
    >
      <stack.Screen
        name="cats"
        component={CatsList}
        options={{ title: "Cats" }}
      />
      <stack.Screen
        name="add cat"
        component={AddCat}
        options={{ title: "Add Cat" }}
      />
      <stack.Screen
        name="edit cat"
        component={EditCat}
        options={{ title: "Edit Cat" }}
      />
      <stack.Screen
        name="preview cat"
        component={PreviewCat}
        options={{ title: "Edit Cat" }}
      />
    </stack.Navigator>
  );
}

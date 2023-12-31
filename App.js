import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { useLoadFonts } from "./utils/fonts.js";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/HomeScreen";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

export default function App() {
  const fontsLoaded = useLoadFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          {/*<Stack.Screen*/}
          {/*  options={{ headerShown: false }}*/}
          {/*  name="SignIn"*/}
          {/*  component={SignIn}*/}
          {/*/>*/}
          {/*<Stack.Screen*/}
          {/*  options={{ headerShown: false }}*/}
          {/*  name="SignUp"*/}
          {/*  component={SignUp}*/}
          {/*/>*/}
          <Stack.Screen options={{ headerShown: false }}  name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeFeed from "./src/screens/HomeFeed";
import Welcome from "./src/screens/Welcome";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen key={"SignUp"} name={"SignUp"} component={SignUp} />
			<Stack.Screen key={"SignIn"} name={"SignIn"} component={SignIn} />
			<Stack.Screen key={"HomeFeed"} name={"HomeFeed"} component={HomeFeed} />
			<Stack.Screen key={"Welcome"} name={"Welcome"} component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
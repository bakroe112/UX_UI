import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeFeed from "./src/screens/HomeFeed";
import Welcome from "./src/screens/Welcome";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import QuizRole from "./src/screens/Quiz/Role";
import QuizExperience from "./src/screens/Quiz/Experience";
import QuizSkills from "./src/screens/Quiz/Skills";
import QuizLocation from "./src/screens/Quiz/Location";
import QuizSalary from "./src/screens/Quiz/Salary";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen key={"HomeFeed"} name={"HomeFeed"} component={HomeFeed} />
			
			<Stack.Screen key={"SignIn"} name={"SignIn"} component={SignIn} />
			<Stack.Screen key={"SignUp"} name={"SignUp"} component={SignUp} />
			<Stack.Screen key={"QuizRole"} name={"QuizRole"} component={QuizRole} />
			<Stack.Screen key={"QuizExperience"} name={"QuizExperience"} component={QuizExperience} />
			<Stack.Screen key={"QuizSkills"} name={"QuizSkills"} component={QuizSkills} />
			<Stack.Screen key={"QuizLocation"} name={"QuizLocation"} component={QuizLocation} />
			<Stack.Screen key={"QuizSalary"} name={"QuizSalary"} component={QuizSalary} />
			<Stack.Screen key={"Welcome"} name={"Welcome"} component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
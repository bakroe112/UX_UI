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
import SearchList from "./src/screens/Search/List";
import SearchBefore from "./src/screens/Search/Before";
import JobDetail from "./src/screens/Job/Detail";
import ApplyPersionalInfo from "./src/screens/Apply/PersionalInfo";
import ApplyExperience from "./src/screens/Apply/Experience";
import ApplyDocument from "./src/screens/Apply/Document";
import ApplyQuestions from "./src/screens/Apply/Questions";
import ApplyReview from "./src/screens/Apply/Review";
import ApplicationSubmit from "./src/screens/Complete/ApplicationSubmit";
import TrackerAll from "./src/screens/Tracker/All";
import TrackerScreening from "./src/screens/Tracker/Screening";
import TrackerInterview from "./src/screens/Tracker/Interview";
import TrackerOffers from "./src/screens/Tracker/Offers";
import ChatList from "./src/screens/Message/ChatList";
import ChatFrame from "./src/screens/Message/ChatFrame";
import ProfileOverview from "./src/screens/Profile/Overview";
import ProfileSetting from "./src/screens/Profile/Setting";

export type RootStackParamList = {
  ApplicationSubmit: undefined;
  ApplyPersionalInfo: undefined;
  ApplyExperience: undefined;
  ApplyDocument: undefined;
  ApplyQuestions: undefined;
  ApplyReview: undefined;
  JobDetail: undefined;
  SearchList: undefined;
  SearchBefore: undefined;
  SignIn: undefined;
  SignUp: undefined;
  QuizRole: undefined;
  QuizExperience: undefined;
  QuizSkills: undefined;
  QuizLocation: undefined;
  QuizSalary: undefined;
  HomeFeed: undefined;
  Welcome: undefined;
  TrackerAll: undefined;
  TrackerScreening: undefined;
  TrackerInterview: undefined;
  TrackerOffers: undefined;
  ChatList: undefined;
  ChatFrame: undefined;
  ProfileOverview: undefined;
  ProfileSetting: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TrackerAll">
			<Stack.Screen name="TrackerAll" component={TrackerAll} />
			<Stack.Screen name="TrackerScreening" component={TrackerScreening} />
			<Stack.Screen name="TrackerInterview" component={TrackerInterview} />
			<Stack.Screen name="TrackerOffers" component={TrackerOffers} />
			<Stack.Screen name="ChatList" component={ChatList} />
			<Stack.Screen name="ChatFrame" component={ChatFrame} />
			<Stack.Screen name="ProfileOverview" component={ProfileOverview} />
			<Stack.Screen name="ProfileSetting" component={ProfileSetting} />
			<Stack.Screen name="ApplicationSubmit" component={ApplicationSubmit} />
			<Stack.Screen name="ApplyPersionalInfo" component={ApplyPersionalInfo} />
			<Stack.Screen name="ApplyExperience" component={ApplyExperience} />
			<Stack.Screen name="ApplyDocument" component={ApplyDocument} />
			<Stack.Screen name="ApplyQuestions" component={ApplyQuestions} />
			<Stack.Screen name="ApplyReview" component={ApplyReview} />
			<Stack.Screen name="JobDetail" component={JobDetail} />
			<Stack.Screen name="SearchList" component={SearchList} />
			<Stack.Screen name="SearchBefore" component={SearchBefore} />
			<Stack.Screen name="SignIn" component={SignIn} />
			<Stack.Screen name="SignUp" component={SignUp} />
			<Stack.Screen name="QuizRole" component={QuizRole} />
			<Stack.Screen name="QuizExperience" component={QuizExperience} />
			<Stack.Screen name="QuizSkills" component={QuizSkills} />
			<Stack.Screen name="QuizLocation" component={QuizLocation} />
			<Stack.Screen name="QuizSalary" component={QuizSalary} />
			<Stack.Screen name="HomeFeed" component={HomeFeed} />
			<Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
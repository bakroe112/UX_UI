import React from "react";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from "@expo-google-fonts/plus-jakarta-sans";

import WelcomeScreen from "./screens/WelcomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import QuizRoleScreen from "./screens/QuizRoleScreen";
import QuizExperienceScreen from "./screens/QuizExperienceScreen";
import QuizSkillsScreen from "./screens/QuizSkillsScreen";
import QuizLocationScreen from "./screens/QuizLocationScreen";
import QuizSalaryScreen from "./screens/QuizSalaryScreen";
import SetupCompleteScreen from "./screens/SetupCompleteScreen";
import HomeFeedScreen from "./screens/HomeFeedScreen";
import SearchScreen from "./screens/SearchScreen";
import SearchResultsScreen from "./screens/SearchResultsScreen";
import JobDetailScreen from "./screens/JobDetailScreen";
import JobDetail from "./screens/JobDetail";
import SearchMapScreen from "./screens/SearchMapScreen";
import CompanyDetailScreen from "./screens/CompanyDetailScreen";
import ChatListScreen from "./screens/ChatListScreen";
import ChatFrameScreen from "./screens/ChatFrameScreen";
import TrackerScreen from "./screens/TrackerScreen";
import ApplicationDetailScreen from "./screens/ApplicationDetailScreen";
import ApplicationTimelineScreen from "./screens/ApplicationTimelineScreen";
import WithdrawalFeedbackScreen from "./screens/WithdrawalFeedbackScreen";
import WithdrawalCompleteScreen from "./screens/WithdrawalCompleteScreen";
import AIMockInterviewSetupScreen from "./screens/AIMockInterviewSetupScreen";
import AIMockInterviewSessionScreen from "./screens/AIMockInterviewSessionScreen";
import AIMockInterviewFeedbackScreen from "./screens/AIMockInterviewFeedbackScreen";
import InterviewScheduleScreen from "./screens/InterviewScheduleScreen";
import PrepTipsScreen from "./screens/PrepTipsScreen";
import ApplyPersonalInfoScreen from "./screens/ApplyPersonalInfoScreen";
import ApplyExperienceScreen from "./screens/ApplyExperienceScreen";
import ApplyDocumentsScreen from "./screens/ApplyDocumentsScreen";
import ApplyQuestionsScreen from "./screens/ApplyQuestionsScreen";
import ApplyReviewScreen from "./screens/ApplyReviewScreen";
import ApplySubmittedScreen from "./screens/ApplySubmittedScreen";
import ProfileOverviewScreen from "./screens/ProfileOverviewScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ResumeBuilderScreen from "./screens/ResumeBuilderScreen";
import MainDashboard from "./screens/MainDashboard";
import JobListingActive from "./screens/JobListingActive";
import JobListingDraft from "./screens/JobListingDraft";
import TalentList from "./screens/TalentList";
import InboxPage from "./screens/InboxPage";
import AnalyticsOverview from "./screens/AnalyticsOverview";
import ToDoList from "./screens/ToDoList";
import TeamOverview from "./screens/TeamOverview";
import Resume from "./screens/Resume";
import BasicInformation from "./screens/BasicInformation";
import Description from "./screens/Description";
import ApplicationDetails from "./screens/ApplicationDetails";
import Requirements from "./screens/Requirements";
import ScreeningQS from "./screens/ScreeningQS";
import Review from "./screens/Review";
import JobPreview from "./screens/JobPreview";
import InviteToInterview from "./screens/InviteToInterview";
import InterviewSucces from "./screens/InterviewSucces";
import CompanyProfilePreviewAbout from "./screens/CompanyProfilePreviewAbout";
import CompanyProfilePreviewJobs from "./screens/CompanyProfilePreviewJobs";
import CompanyProfilePreviewCulture from "./screens/CompanyProfilePreviewCulture";
import CompanyProfilePreviewReview from "./screens/CompanyProfilePreviewReview";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          contentStyle: { backgroundColor: "#f9f5f0" },
        }}
      >
        {/* Auth */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />

        {/* Onboarding Quiz — 5 Figma frames */}
        <Stack.Screen name="QuizRole" component={QuizRoleScreen} />
        <Stack.Screen name="QuizExperience" component={QuizExperienceScreen} />
        <Stack.Screen name="QuizSkills" component={QuizSkillsScreen} />
        <Stack.Screen name="QuizLocation" component={QuizLocationScreen} />
        <Stack.Screen name="QuizSalary" component={QuizSalaryScreen} />
        <Stack.Screen name="SetupComplete" component={SetupCompleteScreen} />
        
        {/* Main App */}
        <Stack.Screen name="HomeFeed" component={HomeFeedScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
        <Stack.Screen name="SearchMap" component={SearchMapScreen} />
        <Stack.Screen name="JobDetail" component={JobDetailScreen} />
        <Stack.Screen name="JobDetailNew" component={JobDetail} />
        <Stack.Screen name="CompanyDetail" component={CompanyDetailScreen} />
        <Stack.Screen name="ChatList" component={ChatListScreen} />
        <Stack.Screen name="ChatFrame" component={ChatFrameScreen} />
        <Stack.Screen name="Tracker" component={TrackerScreen} />
        <Stack.Screen name="ApplicationDetail" component={ApplicationDetailScreen} />
        <Stack.Screen name="ApplicationTimeline" component={ApplicationTimelineScreen} />
        <Stack.Screen name="WithdrawalFeedback" component={WithdrawalFeedbackScreen} />
        <Stack.Screen name="WithdrawalComplete" component={WithdrawalCompleteScreen} />
        {/* AI Mock Interview Flow - 4 Screens */}
        <Stack.Screen name="AIMockInterviewSetup" component={AIMockInterviewSetupScreen} />
        <Stack.Screen name="AIMockInterviewSession" component={AIMockInterviewSessionScreen} />
        <Stack.Screen name="AIMockInterviewFeedback" component={AIMockInterviewFeedbackScreen} />
        <Stack.Screen name="InterviewSchedule" component={InterviewScheduleScreen} />
        <Stack.Screen name="PrepTips" component={PrepTipsScreen} />
        {/* Apply Flow - 6 Screens */}
        <Stack.Screen name="ApplyPersonalInfo" component={ApplyPersonalInfoScreen} />
        <Stack.Screen name="ApplyExperience" component={ApplyExperienceScreen} />
        <Stack.Screen name="ApplyDocuments" component={ApplyDocumentsScreen} />
        <Stack.Screen name="ApplyQuestions" component={ApplyQuestionsScreen} />
        <Stack.Screen name="ApplyReview" component={ApplyReviewScreen} />
        <Stack.Screen name="ApplySubmitted" component={ApplySubmittedScreen} />
        {/* Profile Screens */}
        <Stack.Screen name="Profile" component={ProfileOverviewScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="ResumeBuilder" component={ResumeBuilderScreen} />
        
        {/* Recruiter Screens */}
        <Stack.Screen name="MainDashboard" component={MainDashboard} />
        <Stack.Screen name="JobListingActive" component={JobListingActive} />
        <Stack.Screen name="JobListingDraft" component={JobListingDraft} />
        <Stack.Screen name="TalentList" component={TalentList} />
        <Stack.Screen name="InboxPage" component={InboxPage} />
        <Stack.Screen name="AnalyticsOverview" component={AnalyticsOverview} />
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="TeamOverview" component={TeamOverview} />
        <Stack.Screen name="Resume" component={Resume} />
        <Stack.Screen name="BasicInformation" component={BasicInformation} />
        <Stack.Screen name="Description" component={Description} />
        <Stack.Screen name="Requirements" component={Requirements} />
        <Stack.Screen name="ScreeningQS" component={ScreeningQS} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="JobPreview" component={JobPreview} />
        <Stack.Screen name="ApplicationDetails" component={ApplicationDetails} />
        <Stack.Screen name="InviteToInterview" component={InviteToInterview} />
        <Stack.Screen name="InterviewSucces" component={InterviewSucces} />
        <Stack.Screen name="CompanyProfilePreviewAbout" component={CompanyProfilePreviewAbout} />
        <Stack.Screen name="CompanyProfilePreviewJobs" component={CompanyProfilePreviewJobs} />
        <Stack.Screen name="CompanyProfilePreviewCulture" component={CompanyProfilePreviewCulture} />
        <Stack.Screen name="CompanyProfilePreviewReview" component={CompanyProfilePreviewReview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

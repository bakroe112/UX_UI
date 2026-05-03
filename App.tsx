import React, { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./src/contexts/AuthContext";
import Navigation from "./src/components/Navigation";
import HomeFeed from "./src/screens/Candidate/HomeFeed";
import Welcome from "./src/screens/Candidate/Welcome";
import SignIn from "./src/screens/Candidate/SignIn";
import SignUp from "./src/screens/Candidate/SignUp";
import QuizRole from "./src/screens/Candidate/Quiz/Role";
import QuizExperience from "./src/screens/Candidate/Quiz/Experience";
import QuizSkills from "./src/screens/Candidate/Quiz/Skills";
import QuizLocation from "./src/screens/Candidate/Quiz/Location";
import QuizSalary from "./src/screens/Candidate/Quiz/Salary";
import SearchList from "./src/screens/Candidate/Search/List";
import SearchBefore from "./src/screens/Candidate/Search/Before";
import JobDetail from "./src/screens/Candidate/Job/Detail";
import ApplyPersionalInfo from "./src/screens/Candidate/Apply/PersionalInfo";
import ApplyExperience from "./src/screens/Candidate/Apply/Experience";
import ApplyDocument from "./src/screens/Candidate/Apply/Document";
import ApplyQuestions from "./src/screens/Candidate/Apply/Questions";
import ApplyReview from "./src/screens/Candidate/Apply/Review";
import ApplicationSubmit from "./src/screens/Candidate/Complete/ApplicationSubmit";
import SetUp from "./src/screens/Candidate/Complete/SetUp";
import TrackerAll from "./src/screens/Candidate/Tracker/All";
import TrackerScreening from "./src/screens/Candidate/Tracker/Screening";
import TrackerInterview from "./src/screens/Candidate/Tracker/Interview";
import TrackerOffers from "./src/screens/Candidate/Tracker/Offers";
import ApplicationDetail from "./src/screens/Candidate/Tracker/ApplicationDetail";
import ChatList from "./src/screens/Candidate/Message/ChatList";
import ChatFrame from "./src/screens/Candidate/Message/ChatFrame";
import ProfileOverview from "./src/screens/Candidate/Profile/Overview";
import ProfileSetting from "./src/screens/Candidate/Profile/Setting";
import AIMockInterview from "./src/screens/Candidate/AIMockInterview/AIMockInterview";
import InterviewSession from "./src/screens/Candidate/AIMockInterview/InterviewSession";
import SessionFeedback from "./src/screens/Candidate/AIMockInterview/SessionFeedback";
import AnalyticsOverview from "./src/screens/Recruiter/AnalyticsOverview";
import ApplicationDetails from "./src/screens/Recruiter/ApplicationDetails";
import BasicInformation from "./src/screens/Recruiter/BasicInformation";
import CompanyProfilePreviewAbout from "./src/screens/Recruiter/CompanyProfilePreviewAbout";
import CompanyProfilePreviewCulture from "./src/screens/Recruiter/CompanyProfilePreviewCulture";
import CompanyProfilePreviewJobs from "./src/screens/Recruiter/CompanyProfilePreviewJobs";
import CompanyProfilePreviewReview from "./src/screens/Recruiter/CompanyProfilePreviewReview";
import Description from "./src/screens/Recruiter/Description";
import InboxPage from "./src/screens/Recruiter/InboxPage";
import InterviewSucces from "./src/screens/Recruiter/InterviewSucces";
import InviteToInterview from "./src/screens/Recruiter/InviteToInterview";
import RecruiterJobDetail from "./src/screens/Recruiter/JobDetail";
import JobListingActive from "./src/screens/Recruiter/JobListingActive";
import JobListingDraft from "./src/screens/Recruiter/JobListingDraft";
import MainDashboard from "./src/screens/Recruiter/MainDashboard";
import Notes from "./src/screens/Recruiter/Notes";
import PreviewJob from "./src/screens/Recruiter/PreviewJob";
import Requirements from "./src/screens/Recruiter/Requirements";
import Resume from "./src/screens/Recruiter/Resume";
import RecruiterReview from "./src/screens/Recruiter/Review";
import ScreeningQS from "./src/screens/Recruiter/ScreeningQS";
import SkillRatings from "./src/screens/Recruiter/SkillRatings";
import TalentList from "./src/screens/Recruiter/TalentList";
import TeamOverview from "./src/screens/Recruiter/TeamOverview";
import ToDoList from "./src/screens/Recruiter/ToDoList";

export type RootStackParamList = {
  ApplicationSubmit: undefined;
  SetUp: undefined;
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
  ApplicationDetail: undefined;
  ChatList: undefined;
  ChatFrame: undefined;
  ProfileOverview: undefined;
  ProfileSetting: undefined;
  AIMockInterview: undefined;
  InterviewSession: undefined;
  SessionFeedback: undefined;
  AnalyticsOverview: undefined;
  ApplicationDetails: undefined;
  BasicInformation: undefined;
  CompanyProfilePreviewAbout: undefined;
  CompanyProfilePreviewCulture: undefined;
  CompanyProfilePreviewJobs: undefined;
  CompanyProfilePreviewReview: undefined;
  Description: undefined;
  InboxPage: undefined;
  InterviewSucces: undefined;
  InviteToInterview: undefined;
  RecruiterJobDetail: undefined;
  JobListingActive: undefined;
  JobListingDraft: undefined;
  MainDashboard: undefined;
  Notes: undefined;
  PreviewJob: undefined;
  Requirements: undefined;
  Resume: undefined;
  RecruiterReview: undefined;
  ScreeningQS: undefined;
  SkillRatings: undefined;
  TalentList: undefined;
  TeamOverview: undefined;
  ToDoList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Wrapper component for Recruiter screens with Navigation
const RecruiterScreenWrapper = ({ screen, onNavigate, currentScreen }: any) => {
  const screenMap: any = {
    dashboard: MainDashboard,
    active: JobListingActive,
    draft: JobListingDraft,
    todolist: ToDoList,
    teamoverview: TeamOverview,
    analytics: AnalyticsOverview,
    talent: TalentList,
    inbox: InboxPage,
    resume: Resume,
    applicationdetails: ApplicationDetails,
    interviewinvite: InviteToInterview,
    interviewsucces: InterviewSucces,
    companyprofile: CompanyProfilePreviewAbout,
    companyjobsjobs: CompanyProfilePreviewJobs,
    companyprofileculture: CompanyProfilePreviewCulture,
    companyprofilereview: CompanyProfilePreviewReview,
    basicinformation: BasicInformation,
    description: Description,
    requirements: Requirements,
    review: RecruiterReview,
    screeningqs: ScreeningQS,
    previewjob: PreviewJob,
    jobdetail: RecruiterJobDetail,
    notes: Notes,
    skillratings: SkillRatings,
  };

  const ScreenComponent = screenMap[screen];
  const hideNavigation = [
    "resume", "applicationdetails", "interviewinvite", "interviewsucces",
    "companyprofile", "companyjobsjobs", "companyprofileculture", "companyprofilereview",
    "basicinformation", "description", "requirements", "review", "screeningqs",
    "previewjob", "jobdetail", "notes", "skillratings"
  ].includes(screen);

  return (
    <View style={{ flex: 1 }}>
      {ScreenComponent && <ScreenComponent onNavigate={onNavigate} currentScreen={currentScreen} />}
      {!hideNavigation && <Navigation onNavigate={onNavigate} currentScreen={currentScreen} />}
    </View>
  );
};

const App = () => {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("dashboard");

  if (isRecruiterMode) {
    return (
      <AuthProvider>
        <RecruiterScreenWrapper 
          screen={currentScreen} 
          onNavigate={setCurrentScreen} 
          currentScreen={currentScreen} 
        />
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
      {/* Candidate */}
    	<Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="TrackerAll" component={TrackerAll} />
			<Stack.Screen name="TrackerScreening" component={TrackerScreening} />
			<Stack.Screen name="TrackerInterview" component={TrackerInterview} />
			<Stack.Screen name="TrackerOffers" component={TrackerOffers} />
			<Stack.Screen name="ApplicationDetail" component={ApplicationDetail} />
			<Stack.Screen name="ChatList" component={ChatList} />
			<Stack.Screen name="ChatFrame" component={ChatFrame} />
			<Stack.Screen name="ProfileOverview" component={ProfileOverview} />
			<Stack.Screen name="ProfileSetting" component={ProfileSetting} />
			<Stack.Screen name="AIMockInterview" component={AIMockInterview} />
			<Stack.Screen name="InterviewSession" component={InterviewSession} />
			<Stack.Screen name="SessionFeedback" component={SessionFeedback} />
			<Stack.Screen name="ApplicationSubmit" component={ApplicationSubmit} />
			<Stack.Screen name="SetUp" component={SetUp} />
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
      {/* Recruiter */}
			<Stack.Screen name="AnalyticsOverview" component={AnalyticsOverview} />
			<Stack.Screen name="ApplicationDetails" component={ApplicationDetails} />
			<Stack.Screen name="BasicInformation" component={BasicInformation} />
			<Stack.Screen name="CompanyProfilePreviewAbout" component={CompanyProfilePreviewAbout} />
			<Stack.Screen name="CompanyProfilePreviewCulture" component={CompanyProfilePreviewCulture} />
			<Stack.Screen name="CompanyProfilePreviewJobs" component={CompanyProfilePreviewJobs} />
			<Stack.Screen name="CompanyProfilePreviewReview" component={CompanyProfilePreviewReview} />
			<Stack.Screen name="Description" component={Description} />
			<Stack.Screen name="InboxPage" component={InboxPage} />
			<Stack.Screen name="InterviewSucces" component={InterviewSucces} />
			<Stack.Screen name="InviteToInterview" component={InviteToInterview} />
			<Stack.Screen name="RecruiterJobDetail" component={RecruiterJobDetail} />
			<Stack.Screen name="JobListingActive" component={JobListingActive} />
			<Stack.Screen name="JobListingDraft" component={JobListingDraft} />
			<Stack.Screen name="MainDashboard" component={MainDashboard} />
			<Stack.Screen name="Notes" component={Notes} />
			<Stack.Screen name="PreviewJob" component={PreviewJob} />
			<Stack.Screen name="Requirements" component={Requirements} />
			<Stack.Screen name="Resume" component={Resume} />
			<Stack.Screen name="RecruiterReview" component={RecruiterReview} />
			<Stack.Screen name="ScreeningQS" component={ScreeningQS} />
			<Stack.Screen name="SkillRatings" component={SkillRatings} />
			<Stack.Screen name="TalentList" component={TalentList} />
			<Stack.Screen name="TeamOverview" component={TeamOverview} />
			<Stack.Screen name="ToDoList" component={ToDoList} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
};
export default App;
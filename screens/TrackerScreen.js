import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Calendar,
  Clock,
  MessageCircle,
  MoreHorizontal,
  Search,
  Filter,
  TrendingUp,
} from "lucide-react-native";
import BottomNavBar from "../components/BottomNavBar";

// ─── DATA ────────────────────────────────────────────────────────────────────

const TRACKER_DATA = {
  all: [
    {
      id: "t1",
      company: "Figma",
      logo: "F",
      logoBg: "#0d5c63",
      position: "Sr. Product Designer",
      status: "offers",
      stage: "Offer letter sent : $155K + equity",
      appliedDate: "Applied Apr 03",
      nextStep: "Accept Offer",
      type: "design",
    },
    {
      id: "t2", 
      company: "Figma",
      logo: "F",
      logoBg: "#0d5c63",
      position: "Dev System",
      status: "offers",
      stage: "Offer letter sent : $255K + equity", 
      appliedDate: "Applied Apr 10",
      nextStep: "Accept Offer",
      type: "engineering",
    },
    {
      id: "t3",
      company: "Figma",
      logo: "F", 
      logoBg: "#0d5c63",
      position: "Sr.Product Designer",
      status: "screening",
      stage: "Recruiter viewed your profile 2 days ago",
      appliedDate: "Applied Apr1",
      nextStep: "Screening",
      type: "design",
    },
    {
      id: "t4",
      company: "Notion",
      logo: "N",
      logoBg: "#0d5c63", 
      position: "Design Systems Lead",
      status: "screening",
      stage: "Application under review",
      appliedDate: "Applied Mar 30",
      nextStep: "Screening",
      type: "design",
    },
    {
      id: "t5",
      company: "Stripe",
      logo: "S",
      logoBg: "#c4892a",
      position: "Staff UX Designer", 
      status: "screening",
      stage: "Profile viewed by hiring team",
      appliedDate: "Applied Mar 28",
      nextStep: "Viewed",
      type: "design",
    },
    {
      id: "t6",
      company: "Figma",
      logo: "F",
      logoBg: "#7a6181",
      position: "Sr.Product Designer",
      status: "interview", 
      stage: "Technical Round 2 - Meet - Tomorrow",
      appliedDate: "Applied Apr1",
      nextStep: "Interview",
      type: "design",
    },
    {
      id: "t7", 
      company: "Vercel",
      logo: "V",
      logoBg: "#7a6181",
      position: "Design Lead",
      status: "interview",
      stage: "Portfolio presentation - Onsite", 
      appliedDate: "Applied Mar 30",
      nextStep: "Interview",
      type: "design",
    },
    {
      id: "t8",
      company: "Linear", 
      logo: "L",
      logoBg: "#7a6181",
      position: "Product Design",
      status: "interview",
      stage: "Final round- Panel interview",
      appliedDate: "Applied Mar 28", 
      nextStep: "Interview",
      type: "design",
    },
  ],
};

const TRACKER_TABS = [
  { id: "all", label: "All", count: 8 },
  { id: "screening", label: "Screening", count: 4 },
  { id: "interview", label: "Interview", count: 3 },
  { id: "offers", label: "Offers", count: 1 },
];

const STATUS_CONFIG = {
  screening: {
    color: "#0d5c63",
    bg: "#ebf6f7",
    label: "Screening",
  },
  interview: {
    color: "#0d5c63", 
    bg: "#ebf6f7",
    label: "Interview",
  },
  offers: {
    color: "#16a34a",
    bg: "rgba(22, 163, 74, 0.14)", 
    label: "Offer",
  },
  viewed: {
    color: "#c4892a",
    bg: "#f1eee8",
    label: "Viewed", 
  },
};

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function StatusBar() {
  return (
    <View className="flex-row items-center justify-between px-[20px] py-[12px] bg-[#ffffff]">
      <Text
        className="text-[15px] text-[#1c1a2e]"
        style={{ 
          fontFamily: "PlusJakartaSans_700Bold",
          letterSpacing: -0.3
        }}
      >
     
      </Text>
      
      <View className="flex-row items-center gap-x-[5px]">
        {/* Signal Icons - placeholder */}
      </View>
    </View>
  );
}

function TrackerCard({ application, onPress }) {
  const statusConfig = STATUS_CONFIG[application.status] || STATUS_CONFIG.screening;

  function handleCardPress() {
    onPress(application, 'detail');
  }

  function handleSchedulePress() {
    onPress(application, 'schedule');
  }

  function handlePrepTipsPress() {
    onPress(application, 'prepTips');
  }

  return (
    <TouchableOpacity
      className="mb-[11px] rounded-[12px] bg-[#ffffff] p-[12px]"
      onPress={handleCardPress}
    >
      {/* Header */}
      <View className="flex-row items-start">
        {/* Company Logo */}
        <View
          className="h-[45px] w-[45px] items-center justify-center rounded-[10px]"
          style={{ backgroundColor: application.logoBg }}
        >
          <Text
            className="text-[17px] text-[#ffffff]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
          >
            {application.logo}
          </Text>
        </View>
        
        {/* Job Info */}
        <View className="ml-[14px] flex-1">
          <Text
            className="text-[16px] text-[#1a1828]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            {application.position}
          </Text>
          <Text
            className="mt-[2px] text-[12px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            {application.company}
          </Text>
          <Text
            className="mt-[4px] text-[13px] text-[#4a4868]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            {application.stage}
          </Text>
          <Text
            className="mt-[2px] text-[12px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            {application.appliedDate}
          </Text>
        </View>
        
        {/* Status Badge */}
        <View
          className="rounded-[12px] px-[10px] py-[3px]"
          style={{ backgroundColor: statusConfig.bg }}
        >
          <Text
            className="text-[11px]"
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              color: statusConfig.color
            }}
          >
            {statusConfig.label}
          </Text>
        </View>
      </View>

      {/* Action Buttons - Only for Interview status */}
      {application.status === "interview" && (
        <View className="mt-[12px] flex-row justify-end gap-x-[17px]">
          <TouchableOpacity
            className="rounded-[12px] px-[13px] py-[9px]"
            style={{ backgroundColor: "#e8e0ed" }}
            onPress={handlePrepTipsPress}
          >
            <Text
              className="text-[11px] text-[#7a6181]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              Prep Tips
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            className="rounded-[12px] px-[12px] py-[9px]"
            style={{ backgroundColor: "#f3efe9" }}
            onPress={handleSchedulePress}
          >
            <Text
              className="text-[11px] text-[#4a4868]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              Reschedule
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
}

function OfferCard({ application, onPress }) {
  return (
    <TouchableOpacity
      className="mb-[17px] rounded-[16px] bg-[#ffffff] border border-[#0d5c634d]"
      onPress={() => onPress(application, 'detail')}
    >
      {/* Header */}
      <View className="flex-row items-start p-[12px]">
        {/* Company Logo */}
        <View
          className="h-[48px] w-[48px] items-center justify-center rounded-[13px] border border-[#0d5c63]"
          style={{ backgroundColor: "#0d5c63" }}
        >
          <Text
            className="text-[20px] text-[#ffffff]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
          >
            {application.logo}
          </Text>
        </View>
        
        {/* Job Info */}
        <View className="ml-[12px] flex-1">
          <Text
            className="text-[16px] text-[#0d5c63]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
          >
            {application.position}
          </Text>
          <Text
            className="mt-[2px] text-[11px] text-[#0d5c63b2]"
            style={{ fontFamily: "PlusJakartaSans_500Medium" }}
          >
            {application.company} - Remote
          </Text>
          <Text
            className="mt-[4px] text-[12px] text-[#0d5c63]"
            style={{ fontFamily: "PlusJakartaSans_500Medium" }}
          >
            {application.stage}
          </Text>
          <Text
            className="mt-[2px] text-[10px] text-[#0d5c637a]"
            style={{ fontFamily: "PlusJakartaSans_500Medium" }}
          >
            {application.appliedDate}
          </Text>
        </View>
        
        {/* Status Badge */}
        <View
          className="rounded-[14px] px-[14px] py-[6px]"
          style={{ backgroundColor: "rgba(22, 163, 74, 0.14)" }}
        >
          <Text
            className="text-[11px] text-[#16a34a]"
            style={{ fontFamily: "Inter_600SemiBold" }}
          >
            Offer
          </Text>
        </View>
      </View>
      
      {/* Divider */}
      <View className="h-[1px] bg-[#0d5c634d] mx-[1px]" />
      
      {/* Action Buttons */}
      <View className="flex-row p-[12px] gap-x-[18px]">
        <TouchableOpacity
          className="flex-1 rounded-[14px] py-[8px] items-center"
          style={{ backgroundColor: "rgba(76, 175, 80, 0.14)" }}
        >
          <Text
            className="text-[13px] text-[#16a34a]"
            style={{ fontFamily: "Inter_600SemiBold" }}
          >
            Accept Offer
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          className="rounded-[14px] px-[18px] py-[8px] items-center"
          style={{ backgroundColor: "rgba(139, 132, 154, 0.14)" }}
        >
          <Text
            className="text-[13px] text-[#7a6181]"
            style={{ fontFamily: "Inter_600SemiBold" }}
          >
            Negotiate
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

function FilterTab({ tab, isActive, onPress }) {
  return (
    <TouchableOpacity
      className="flex-1 items-center"
      onPress={() => onPress(tab.id)}
    >
      <Text
        className="text-[12px]"
        style={{
          fontFamily: isActive ? "PlusJakartaSans_700Bold" : "PlusJakartaSans_500Medium",
          color: isActive ? "#0d5c63" : "#8a88a8",
        }}
      >
        {tab.label}({tab.count})
      </Text>
    </TouchableOpacity>
  );
}

function NextInterviewBanner({ activeTab }) {
  if (activeTab !== "interview") return null;
  
  return (
    <View className="mx-[20px] mb-[12px] rounded-[12px] bg-[#f2edf5] border border-[#e8e0ed] p-[12px]">
      <View className="flex-row items-center">
        <Clock size={12} color="#7a6181" />
        <Text
          className="ml-[8px] text-[13px] text-[#7a6181] flex-1"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          Next interview: Tomorrow at 2:00 PM - Figma{'\n'}Technical Round
        </Text>
      </View>
    </View>
  );
}

function ScreeningBanner({ activeTab }) {
  if (activeTab !== "screening") return null;
  
  return (
    <View className="mx-[20px] mb-[12px] rounded-[12px] bg-[#ebf6f7] border border-[#c8e6e8] p-[12px]">
      <View className="flex-row items-center">
        <Search size={16} color="#0d5c63" />
        <Text
          className="ml-[8px] text-[13px] text-[#0d5c63] flex-1"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          5 applications in screening - 2 recruiter view this week
        </Text>
      </View>
    </View>
  );
}

function OffersBanner({ activeTab }) {
  if (activeTab !== "all") return null;
  
  return (
    <View className="mx-[20px] mb-[12px] rounded-[12px] p-[17px] border" style={{ backgroundColor: "#0d5c63", borderColor: "#0d5c63" }}>
      <View className="flex-row items-start">
        <View
          className="h-[48px] w-[48px] items-center justify-center rounded-[10px]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
        >
          <Text
            className="text-[17px] text-[#ffffff]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
          >
            F
          </Text>
        </View>
        
        <View className="ml-[17px] flex-1">
          <Text
            className="text-[17px] text-[#ffffff]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
          >
            Sr. Product Designer
          </Text>
          <Text
            className="mt-[2px] text-[12px]"
            style={{ 
              fontFamily: "PlusJakartaSans_400Regular",
              color: "rgba(255, 255, 255, 0.65)"
            }}
          >
            Figma - Remote
          </Text>
        </View>
      </View>
      
      {/* Salary Info - Centered */}
      <View className="mt-[17px] flex-row justify-center gap-x-[31px]">
        <View className="items-center">
          <Text
            className="text-[16px] text-[#ffffff]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
          >
            $155,000
          </Text>
          <Text
            className="text-[10px]"
            style={{ 
              fontFamily: "PlusJakartaSans_400Regular",
              color: "rgba(255, 255, 255, 0.6)"
            }}
          >
            Base Salary
          </Text>
        </View>
        
        <View className="items-center">
          <Text
            className="text-[16px] text-[#ffffff]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
          >
            $120k / 4yr
          </Text>
          <Text
            className="text-[10px]"
            style={{ 
              fontFamily: "PlusJakartaSans_400Regular",
              color: "rgba(255, 255, 255, 0.6)"
            }}
          >
            Equity
          </Text>
        </View>
        
        <View className="items-center">
          <Text
            className="text-[16px] text-[#ffffff]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
          >
            15%
          </Text>
          <Text
            className="text-[10px]"
            style={{ 
              fontFamily: "PlusJakartaSans_800ExtraBold",
              color: "rgba(255, 255, 255, 0.6)"
            }}
          >
            Bonus
          </Text>
        </View>
      </View>
      
      {/* Expiry Info - Centered */}
      <View className="mt-[13px] rounded-[8px] p-[11px] border" style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", borderColor: "rgba(255, 255, 255, 0.2)" }}>
        <View className="flex-row items-center justify-center">
          <Clock size={14} color="rgba(255, 255, 255, 0.8)" />
          <Text
            className="ml-[8px] text-[13px]"
            style={{ 
              fontFamily: "PlusJakartaSans_400Regular",
              color: "rgba(255, 255, 255, 0.8)"
            }}
          >
            Offer expires in 5 days - Apr 8,2026
          </Text>
        </View>
      </View>
    </View>
  );
}

// ─── MAIN SCREEN ─────────────────────────────────────────────────────────────

export default function TrackerScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("all");
  const [applications, setApplications] = useState(TRACKER_DATA.all);

  function handleApplicationPress(application, action = 'detail') {
    if (action === 'schedule') {
      navigation.navigate("InterviewSchedule", { 
        interview: {
          company: application.company,
          position: application.position,
          stage: application.stage,
          duration: "60 min"
        }
      });
    } else if (action === 'prepTips') {
      navigation.navigate("PrepTips", {
        interview: {
          company: application.company,
          position: application.position,
          stage: application.stage,
        }
      });
    } else {
      navigation.navigate("ApplicationDetail", { application });
    }
  }

  function getFilteredApplications() {
    if (activeTab === "all") {
      return applications;
    }
    return applications.filter(app => app.status === activeTab);
  }

  const filteredApplications = getFilteredApplications();

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* Status Bar */}
      <StatusBar />
      
      {/* Header */}
      <View className="bg-[#ffffff] px-[20px] pb-[16px]">
        <View className="flex-row items-center justify-between">
          <Text
            className="text-[20px] text-[#000000]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
          >
            My Applications
          </Text>
          
          <View className="flex-row items-center gap-x-[12px]">
            <TouchableOpacity className="h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f3efe9]">
              <Search size={16} color="#4a4868" />
            </TouchableOpacity>
            <TouchableOpacity className="h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f3efe9]">
              <Filter size={16} color="#4a4868" />
            </TouchableOpacity>
            <TouchableOpacity className="h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f3efe9]">
              <TrendingUp size={16} color="#4a4868" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Filter Tabs */}
      <View className="bg-[#ffffff] px-[20px] mb-[12px]">
        <View className="flex-row justify-between py-[16px]">
          {TRACKER_TABS.map((tab) => (
            <FilterTab
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onPress={setActiveTab}
            />
          ))}
        </View>
        {/* Bottom border line */}
        <View className="h-[1px] bg-[#f0f0f0] relative">
          {/* Active tab underline */}
          <View 
            className="absolute bottom-0 h-[2px] bg-[#0d5c63] rounded-full"
            style={{
              width: `${100 / TRACKER_TABS.length}%`,
              left: `${(TRACKER_TABS.findIndex(tab => tab.id === activeTab) * 100) / TRACKER_TABS.length}%`,
            }}
          />
        </View>
      </View>

      {/* Content */}
      <ScrollView 
        className="flex-1" 
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Banners */}
        <OffersBanner activeTab={activeTab} />
        <ScreeningBanner activeTab={activeTab} />
        <NextInterviewBanner activeTab={activeTab} />
        
        {/* Applications List */}
        <View className="px-[20px]">
          {filteredApplications.length > 0 ? (
            filteredApplications.map((application) => (
              activeTab === "offers" ? (
                <OfferCard
                  key={application.id}
                  application={application}
                  onPress={handleApplicationPress}
                />
              ) : (
                <TrackerCard
                  key={application.id}
                  application={application}
                  onPress={handleApplicationPress}
                />
              )
            ))
          ) : (
            <View className="flex-1 items-center justify-center px-[40px] py-[60px]">
              <Text
                className="text-[18px] text-[#1c1a2e]"
                style={{ fontFamily: "PlusJakartaSans_700Bold" }}
              >
                No applications found
              </Text>
              <Text
                className="mt-[8px] text-center text-[14px] text-[#8a88a8]"
                style={{ fontFamily: "PlusJakartaSans_500Medium" }}
              >
                No applications in {activeTab} stage
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Bottom Nav Bar */}
      <BottomNavBar navigation={navigation} activeTab="applied" />
    </SafeAreaView>
  );
}
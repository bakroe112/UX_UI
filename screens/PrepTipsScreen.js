import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ArrowLeft,
  Clock,
  BarChart3,
  Eye,
  MessageSquare,
  Building2,
} from "lucide-react-native";

// ─── DATA ────────────────────────────────────────────────────────────────────

const PREP_CATEGORIES = [
  {
    id: "1",
    title: "Role - Specific Q&A",
    description: "40 curated questions",
    progress: 35,
    color: "#0d5c63",
    bgColor: "rgba(13, 92, 99, 0.08)",
    icon: BarChart3,
  },
  {
    id: "2",
    title: "Portfolio Review", 
    description: "AI feedback on 4 project",
    progress: 60,
    color: "#7a6181",
    bgColor: "rgba(122, 97, 129, 0.08)",
    icon: Eye,
  },
  {
    id: "3",
    title: "Behavioral STAR",
    description: "12 scenarios practiced",
    progress: 35,
    color: "#e2b053",
    bgColor: "rgba(226, 176, 83, 0.08)",
    icon: MessageSquare,
  },
  {
    id: "4",
    title: "Company Research",
    description: "40 curated questions", 
    progress: 20,
    color: "#0d5c63",
    bgColor: "rgba(13, 92, 99, 0.08)",
    icon: Building2,
  },
];

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

function PrepCategoryCard({ category }) {
  const IconComponent = category.icon;
  const progressWidth = `${category.progress}%`;

  return (
    <View className="mb-[15px] rounded-[16px] bg-[#ffffff] p-[19px]">
      <View className="flex-row items-center">
        {/* Icon */}
        <View
          className="h-[44px] w-[44px] items-center justify-center rounded-[13px]"
          style={{ backgroundColor: category.bgColor }}
        >
          <IconComponent size={20} color={category.color} />
        </View>
        
        {/* Content */}
        <View className="ml-[16px] flex-1">
          <Text
            className="text-[16px] text-[#1a1828]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            {category.title}
          </Text>
          <Text
            className="mt-[1px] text-[12px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            {category.description}
          </Text>
          
          {/* Progress Bar */}
          <View className="mt-[8px] flex-row items-center">
            <View className="flex-1 h-[2px] bg-[#f3efe9] rounded-full">
              <View 
                className="h-[2px] rounded-full"
                style={{ 
                  backgroundColor: category.color,
                  width: progressWidth
                }}
              />
            </View>
          </View>
        </View>
        
        {/* Percentage */}
        <Text
          className="text-[13px] ml-[16px]"
          style={{ 
            fontFamily: "PlusJakartaSans_700Bold",
            color: category.color
          }}
        >
          {category.progress}%
        </Text>
      </View>
    </View>
  );
}

// ─── MAIN SCREEN ─────────────────────────────────────────────────────────────

export default function PrepTipsScreen({ navigation, route }) {
  // Get interview details from route params if available
  const interviewDetails = route?.params?.interview || {
    company: "Figma",
    position: "Sr.Product Designer",
    stage: "Technical Round 2"
  };

  function handleBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* Status Bar */}
      <StatusBar />
      
      {/* Header */}
      <View className="bg-[#ffffff] px-[20px] py-[16px]">
        <View className="flex-row items-center">
          <TouchableOpacity
            className="h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f3efe9]"
            onPress={handleBack}
          >
            <ArrowLeft size={12} color="#4a4868" />
          </TouchableOpacity>
          
          <View className="ml-[12px] flex-1">
            <Text
              className="text-[18px] text-[#000000]"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              Interview Prep
            </Text>
            <Text
              className="text-[13px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              {interviewDetails.company} - {interviewDetails.position}
            </Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <ScrollView 
        className="flex-1" 
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Interview Countdown Banner */}
        <View className="mb-[35px] rounded-[16px] p-[13px]" style={{ backgroundColor: "#0d5c63" }}>
          <View className="flex-row items-center">
            {/* Calendar Icon */}
            <View
              className="h-[44px] w-[44px] items-center justify-center rounded-[12px]"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            >
              <Clock size={20} color="#ffffff" />
            </View>
            
            {/* Interview Info */}
            <View className="ml-[13px] flex-1">
              <Text
                className="text-[14px] text-[#ffffff]"
                style={{ fontFamily: "PlusJakartaSans_700Bold" }}
              >
                Technical Round 2 - Tomorrow
              </Text>
              <Text
                className="mt-[2px] text-[12px]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  color: "rgba(255, 255, 255, 0.8)"
                }}
              >
                Apr 4 - 2:00 PM - Google Meet - 60 min
              </Text>
            </View>
            
            {/* Countdown */}
            <Text
              className="text-[12px]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                color: "rgba(255, 255, 255, 0.8)"
              }}
            >
              ~18h
            </Text>
          </View>
        </View>

        {/* Overall Progress */}
        <View className="mb-[17px]">
          <View className="flex-row items-center justify-between mb-[8px]">
            <Text
              className="text-[14px] text-[#1a1828]"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              Overall Prep : 49%
            </Text>
            <Text
              className="text-[12px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              2.5 hrs invested
            </Text>
          </View>
          
          {/* Progress Bar */}
          <View className="h-[8px] bg-[#d9d9d9] rounded-[16px]">
            <View 
              className="h-[8px] rounded-[16px]"
              style={{ 
                backgroundColor: "#0d5c63",
                width: "49%"
              }}
            />
          </View>
        </View>

        {/* Prep Categories */}
        {PREP_CATEGORIES.map((category) => (
          <PrepCategoryCard key={category.id} category={category} />
        ))}

        {/* Bottom Spacing */}
        <View className="h-[20px]" />
      </ScrollView>
    </SafeAreaView>
  );
}
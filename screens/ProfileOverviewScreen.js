import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Bell,
  Settings,
  MapPin,
  CheckCircle,
  Award,
  BarChart3,
  Activity,
  FileText,
  Briefcase,
  ChevronRight,
  Edit,
} from "lucide-react-native";
import BottomNavBar from "../components/BottomNavBar";

export default function ProfileOverviewScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* Status Bar */}
      <View className="h-[45px] bg-[#ffffff]" />

      {/* Header */}
      <View className="bg-[#ffffff] px-[20px] py-[0px]">
        <View className="flex-row items-center justify-end">
          <View className="flex-row items-center gap-x-[10px]">
            <TouchableOpacity className="h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-[#f3efe9]">
              <Bell size={18} color="#4a4868" />
            </TouchableOpacity>
            <TouchableOpacity 
              className="h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-[#f3efe9]"
              onPress={() => navigation.navigate("Settings")}
            >
              <Settings size={18} color="#4a4868" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Profile Section */}
      <View className="bg-[#ffffff] px-[20px] pb-[12px]">
        <View className="flex-row items-center">
          {/* Avatar */}
          <View className="relative">
            <View className="h-[70px] w-[70px] items-center justify-center rounded-[21px] bg-[#0d5c63]">
              <Text
                className="text-[26px] text-[#ffffff]"
                style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
              >
                SJ
              </Text>
            </View>
            {/* Verified badge */}
            <View className="absolute bottom-0 right-0 h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-[#16a34a]" style={{ borderWidth: 2, borderColor: "#ffffff" }}>
              <CheckCircle size={9} color="#ffffff" fill="#ffffff" />
            </View>
          </View>

          {/* Name and details */}
          <View className="ml-[18px] flex-1">
            <View className="flex-row items-center">
              <Text
                className="text-[20px] text-[#1a1828]"
                style={{ 
                  fontFamily: "PlusJakartaSans_800ExtraBold",
                  letterSpacing: -0.4,
                  lineHeight: 30
                }}
              >
                Sarah Johnson
              </Text>
              <TouchableOpacity className="ml-[10px]">
                <Edit size={15} color="#0d5c63" />
              </TouchableOpacity>
            </View>
            <Text
              className="text-[13px] text-[#4a4868]"
              style={{ 
                fontFamily: "PlusJakartaSans_400Regular",
                lineHeight: 19.5
              }}
            >
              Senior Product Designer
            </Text>
            <View className="flex-row items-center">
              <MapPin size={11} color="#8a88a8" />
              <Text
                className="ml-[3px] text-[11px] text-[#8a88a8]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 16.5
                }}
              >
                San Francisco - Open to Remote
              </Text>
            </View>
          </View>
        </View>

        {/* Open to Work badge */}
        <View className="mt-[24px] self-start rounded-[12px] bg-[#f0fdf4] px-[10px] py-[6px]" style={{ borderWidth: 1, borderColor: "#bbf7d0" }}>
          <View className="flex-row items-center">
            <View className="h-[6px] w-[6px] rounded-full bg-[#16a34a]" />
            <Text
              className="ml-[6px] text-[11px] text-[#16a34a]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                lineHeight: 16.5
              }}
            >
              Open to Work - Senior Design roles
            </Text>
          </View>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 96, paddingTop: 12, paddingHorizontal: 20 }}
      >
        {/* Stats */}
        <View className="mb-[12px] rounded-[12px] bg-[#ffffff] px-[0px] py-[12px]">
          <View className="flex-row items-center justify-between px-[20px]">
            <View className="items-center">
              <Text
                className="text-[18px] text-[#0d5c63]"
                style={{ 
                  fontFamily: "PlusJakartaSans_800ExtraBold",
                  lineHeight: 27
                }}
              >
                14
              </Text>
              <Text
                className="text-[10px] text-[#8a88a8]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 15
                }}
              >
                Applied
              </Text>
            </View>
            <View className="items-center">
              <Text
                className="text-[18px] text-[#0d5c63]"
                style={{ 
                  fontFamily: "PlusJakartaSans_800ExtraBold",
                  lineHeight: 27
                }}
              >
                5
              </Text>
              <Text
                className="text-[10px] text-[#8a88a8]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 15
                }}
              >
                Interviews
              </Text>
            </View>
            <View className="items-center">
              <Text
                className="text-[18px] text-[#0d5c63]"
                style={{ 
                  fontFamily: "PlusJakartaSans_800ExtraBold",
                  lineHeight: 27
                }}
              >
                234
              </Text>
              <Text
                className="text-[10px] text-[#8a88a8]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 15
                }}
              >
                Views
              </Text>
            </View>
            <View className="items-center">
              <Text
                className="text-[18px] text-[#0d5c63]"
                style={{ 
                  fontFamily: "PlusJakartaSans_800ExtraBold",
                  lineHeight: 27
                }}
              >
                28
              </Text>
              <Text
                className="text-[10px] text-[#8a88a8]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 15
                }}
              >
                Saved
              </Text>
            </View>
          </View>
        </View>

        {/* Achievement Cards */}
        <View className="mb-[18px] flex-row gap-x-[13px]">
          {/* Skill Badge */}
          <View className="flex-1 rounded-[12px] bg-[#e2b0531f] px-[14px] py-[10px]" style={{ borderWidth: 1, borderColor: "#e2b05338" }}>
            <View className="items-center">
              <View className="mb-[9px] h-[36px] w-[36px] items-center justify-center rounded-[12px] bg-[#ffffff]">
                <Award size={18} color="#e2b053" />
              </View>
              <Text
                className="text-[12px] text-[#1c1a2e]"
                style={{ 
                  fontFamily: "PlusJakartaSans_600SemiBold",
                  lineHeight: 16,
                  textAlign: "center"
                }}
              >
                Skill Badge
              </Text>
              <Text
                className="text-[11px] text-[#e2b053]"
                style={{ 
                  fontFamily: "PlusJakartaSans_500Medium",
                  lineHeight: 16,
                  textAlign: "center"
                }}
              >
                4 earned
              </Text>
            </View>
          </View>

          {/* Career Insights */}
          <View className="flex-1 rounded-[12px] bg-[#0d5c631a] px-[0px] py-[10px]" style={{ borderWidth: 1, borderColor: "#0d5c632e" }}>
            <View className="items-center">
              <View className="mb-[9px] h-[36px] w-[36px] items-center justify-center rounded-[12px] bg-[#ffffff]">
                <BarChart3 size={15} color="#0d5c63" />
              </View>
              <Text
                className="text-[12px] text-[#1c1a2e]"
                style={{ 
                  fontFamily: "PlusJakartaSans_600SemiBold",
                  lineHeight: 16,
                  textAlign: "center"
                }}
              >
                Career Insights
              </Text>
              <Text
                className="text-[11px] text-[#0d5c63]"
                style={{ 
                  fontFamily: "PlusJakartaSans_500Medium",
                  lineHeight: 16,
                  textAlign: "center"
                }}
              >
                Top 18%
              </Text>
            </View>
          </View>

          {/* Activity */}
          <View className="flex-1 rounded-[12px] bg-[#7a61811a] px-[14px] py-[10px]" style={{ borderWidth: 1, borderColor: "#7a61812e" }}>
            <View className="items-center">
              <View className="mb-[9px] h-[36px] w-[36px] items-center justify-center rounded-[12px] bg-[#ffffff]">
                <Activity size={15} color="#7a6181" />
              </View>
              <Text
                className="text-[12px] text-[#1c1a2e]"
                style={{ 
                  fontFamily: "PlusJakartaSans_600SemiBold",
                  lineHeight: 16,
                  textAlign: "center"
                }}
              >
                Activity
              </Text>
              <Text
                className="text-[11px] text-[#7a6181]"
                style={{ 
                  fontFamily: "PlusJakartaSans_500Medium",
                  lineHeight: 16,
                  textAlign: "center"
                }}
              >
                8 events
              </Text>
            </View>
          </View>
        </View>

        {/* Resume and Portfolio */}
        <View className="mb-[18px] flex-row gap-x-[19px]">
          {/* Resume */}
          <TouchableOpacity 
            className="flex-1 rounded-[14px] bg-[#ffffff] px-[13px] py-[13px]"
            onPress={() => navigation.navigate("ResumeBuilder")}
          >
            <View className="flex-row items-center">
              <View className="h-[36px] w-[36px] items-center justify-center rounded-[14px] bg-[#0d5c631a]">
                <FileText size={16} color="#0d5c63" />
              </View>
              <View className="ml-[14px] flex-1">
                <Text
                  className="text-[14px] text-[#1e2939]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_500Medium",
                    lineHeight: 16
                  }}
                >
                  Resume
                </Text>
                <Text
                  className="text-[11px] text-[#0d5c63]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_500Medium",
                    lineHeight: 16
                  }}
                >
                  ATS 94/100
                </Text>
              </View>
              <ChevronRight size={14} color="#d1d5dc" />
            </View>
          </TouchableOpacity>

          {/* Portfolio */}
          <View className="flex-1 rounded-[14px] bg-[#ffffff] px-[13px] py-[13px]">
            <View className="flex-row items-center">
              <View className="h-[36px] w-[36px] items-center justify-center rounded-[14px] bg-[#7a61811a]">
                <Briefcase size={17} color="#7a6181" />
              </View>
              <View className="ml-[14px] flex-1">
                <Text
                  className="text-[14px] text-[#1e2939]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_500Medium",
                    lineHeight: 16
                  }}
                >
                  Portfolio
                </Text>
                <Text
                  className="text-[11px] text-[#0d5c63]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_500Medium",
                    lineHeight: 16
                  }}
                >
                  4 projects
                </Text>
              </View>
              <ChevronRight size={14} color="#d1d5dc" />
            </View>
          </View>
        </View>

        {/* About Section */}
        <View className="mb-[18px] rounded-[12px] bg-[#ffffff] px-[13px] py-[8px]">
          <Text
            className="mb-[12px] text-[12px] text-[#0d5c63]"
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              letterSpacing: 0.5,
              lineHeight: 18
            }}
          >
            ABOUT
          </Text>
          <Text
            className="text-[12px] text-[#4a4868]"
            style={{ 
              fontFamily: "PlusJakartaSans_400Regular",
              lineHeight: 21
            }}
          >
            Product designer with 6+ years crafting experiences that simplify complex workflows. Expert in design systems, accessibility, and cross-functional collaboration.
          </Text>
        </View>

        {/* Experience Section */}
        <View className="mb-[18px] rounded-[12px] bg-[#ffffff] px-[13px] py-[14px]">
          <View className="flex-row items-center justify-between mb-[16px]">
            <Text
              className="text-[12px] text-[#0d5c63]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                letterSpacing: 0.5,
                lineHeight: 18
              }}
            >
              EXPERIENCE
            </Text>
            <ChevronRight size={14} color="#d1d5dc" />
          </View>

          {/* Current Job */}
          <View className="flex-row items-start mb-[25px]">
            <View className="mt-[6px] h-[8px] w-[8px] rounded-full bg-[#8d8c8c]" />
            <View className="ml-[21px] flex-1">
              <Text
                className="text-[13px] text-[#1a1828]"
                style={{ 
                  fontFamily: "PlusJakartaSans_700Bold",
                  lineHeight: 19.5
                }}
              >
                Senior Product Designer
              </Text>
              <Text
                className="text-[11px] text-[#7a6181]"
                style={{ 
                  fontFamily: "PlusJakartaSans_600SemiBold",
                  lineHeight: 16.5
                }}
              >
                Figma
              </Text>
              <Text
                className="text-[11px] text-[#8a88a8]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 16.5
                }}
              >
                Apr 2025 - Present
              </Text>
            </View>
          </View>

          {/* Previous Job */}
          <View className="flex-row items-start">
            <View className="mt-[6px] h-[8px] w-[8px] rounded-full bg-[#0d5c63]" />
            <View className="ml-[21px] flex-1">
              <Text
                className="text-[13px] text-[#1a1828]"
                style={{ 
                  fontFamily: "PlusJakartaSans_700Bold",
                  lineHeight: 19.5
                }}
              >
                Product Designer
              </Text>
              <Text
                className="text-[11px] text-[#0d5c63]"
                style={{ 
                  fontFamily: "PlusJakartaSans_600SemiBold",
                  lineHeight: 16.5
                }}
              >
                Airbnb
              </Text>
              <Text
                className="text-[11px] text-[#8a88a8]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 16.5
                }}
              >
                Apr 2024 - Mar 2025
              </Text>
            </View>
          </View>
        </View>

        {/* Skills Section */}
        <View className="rounded-[12px] bg-[#ffffff] px-[11px] py-[15px]">
          <View className="flex-row items-center justify-between mb-[17px]">
            <Text
              className="text-[12px] text-[#0d5c63]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                letterSpacing: 0.5,
                lineHeight: 18
              }}
            >
              SKILLS
            </Text>
            <ChevronRight size={14} color="#d1d5dc" />
          </View>

          <View className="flex-row gap-x-[13px]">
            <View className="rounded-[28px] bg-[#ebf6f7] px-[11px] py-[7px]">
              <Text
                className="text-[12px] text-[#0d5c63]"
                style={{ 
                  fontFamily: "PlusJakartaSans_600SemiBold",
                  lineHeight: 16.5
                }}
              >
                Figma
              </Text>
            </View>
            <View className="rounded-[28px] bg-[#ebf6f7] px-[11px] py-[7px]">
              <Text
                className="text-[12px] text-[#0d5c63]"
                style={{ 
                  fontFamily: "PlusJakartaSans_600SemiBold",
                  lineHeight: 16.5
                }}
              >
                Design Systems
              </Text>
            </View>
            <View className="rounded-[28px] bg-[#ebf6f7] px-[11px] py-[7px]">
              <Text
                className="text-[12px] text-[#0d5c63]"
                style={{ 
                  fontFamily: "PlusJakartaSans_600SemiBold",
                  lineHeight: 16.5
                }}
              >
                Prototyping
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavBar navigation={navigation} activeTab="profile" />
    </SafeAreaView>
  );
}
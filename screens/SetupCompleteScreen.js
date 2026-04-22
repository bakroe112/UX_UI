import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { CircleCheckBig, PenTool, Globe, Award, DollarSign, Zap } from "lucide-react-native";
import AppStatusBar from "../components/AppStatusBar";

// Extracted from Figma: Setup Complete
// bg #f9f5f0
// Group 133: icon container h=88 w=88 rounded-[26px] bg #ebf6f7 border #c8e6e8
//   circle-check-big icon color #0d5c63, size ~39
// Group 26: "You're all set, Lucy!" text-[26px] ExtraBold #1a1828 center, letterSpacing -0.6
//   subtitle text-[14px] Regular #8a88a8 center, lineHeight 23.8
// Group 42 (preferences card) h=246, rounded-[16px] bg #ffffff border #0d5c63
//   "YOUR PREFERENCES" text-[11px] Bold #8a88a8 letterSpacing 0.8
//   4 rows: icon (32x32 rounded-[9px]) + label text-[13px] SemiBold #1a1828
// Group 43 (matching jobs) h=48, rounded-[16px] border #c8e6e8
//   Zap icon #0d5c63, "47 matching jobs found today" text-[13px] SemiBold #0d5c63
// Group 29 (CTA) h=55, rounded-[14px] bg #0d5c63
//   "Start Exploring Jobs" text-[16px] Bold #ffffff

const PREFERENCES = [
  {
    id: "role",
    icon: PenTool,
    iconColor: "#7a6181",
    iconBg: "#7a618114",
    label: "Design, Product",
  },
  {
    id: "location",
    icon: Globe,
    iconColor: "#e05b5b",
    iconBg: "#e05b5b14",
    label: "Remote · SF-based",
    borderColor: "#e05b5b",
  },
  {
    id: "level",
    icon: Award,
    iconColor: "#e2b053",
    iconBg: "#e2b05314",
    label: "Senior Level",
    borderColor: "#e05b5b",
  },
  {
    id: "salary",
    icon: DollarSign,
    iconColor: "#16a34a",
    iconBg: "#16a34a14",
    label: "$130k – $160k",
    borderColor: "#e05b5b",
  },
];

function PrefRow({ item }) {
  const Icon = item.icon;
  return (
    <View className="mb-[12px] flex-row items-center">
      <View
        className="h-[32px] w-[32px] items-center justify-center rounded-[9px]"
        style={{
          backgroundColor: item.iconBg,
          borderWidth: item.borderColor ? 1 : 0,
          borderColor: item.borderColor,
        }}
      >
        <Icon size={14} color={item.iconColor} />
      </View>
      <Text
        className="ml-[13px] text-[13px] leading-[19.5px] text-[#1a1828]"
        style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
      >
        {item.label}
      </Text>
    </View>
  );
}

export default function SetupCompleteScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      <AppStatusBar />

      <View className="flex-1 px-[20px]">
        {/* Check icon */}
        <View className="mt-[20px] items-center">
          <View
            className="h-[88px] w-[88px] items-center justify-center rounded-[26px]"
            style={{ backgroundColor: "#ebf6f7", borderWidth: 1, borderColor: "#c8e6e8" }}
          >
            <CircleCheckBig size={39} color="#0d5c63" />
          </View>
        </View>

        {/* Heading */}
        <View className="mt-[20px] items-center px-[20px]">
          <Text
            className="text-center text-[26px] leading-[39px] text-[#1a1828]"
            style={{
              fontFamily: "PlusJakartaSans_800ExtraBold",
              letterSpacing: -0.6,
            }}
          >
            You're all set, Lucy!
          </Text>
          <Text
            className="mt-[8px] text-center text-[14px] text-[#8a88a8]"
            style={{
              fontFamily: "PlusJakartaSans_400Regular",
              lineHeight: 23.8,
            }}
          >
            We've personalised your job feed based on your preferences
          </Text>
        </View>

        {/* Preferences summary card */}
        <View
          className="mt-[20px] rounded-[16px] bg-[#ffffff] px-[17px] py-[18px]"
          style={{ borderWidth: 1, borderColor: "#0d5c63" }}
        >
          <Text
            className="mb-[14px] text-[11px] text-[#8a88a8]"
            style={{
              fontFamily: "PlusJakartaSans_700Bold",
              letterSpacing: 0.8,
            }}
          >
            YOUR PREFERENCES
          </Text>
          {PREFERENCES.map((item) => (
            <PrefRow key={item.id} item={item} />
          ))}
        </View>

        {/* Matching jobs banner */}
        <View
          className="mt-[10px] flex-row items-center rounded-[16px] px-[17px]"
          style={{ height: 48, borderWidth: 1, borderColor: "#c8e6e8" }}
        >
          <Zap size={16} color="#0d5c63" />
          <Text
            className="ml-[10px] text-[13px] text-[#0d5c63]"
            style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
          >
            47 matching jobs found today
          </Text>
        </View>

        {/* CTA */}
        <View className="mt-auto pb-[28px]">
          <TouchableOpacity
            className="h-[55px] items-center justify-center rounded-[14px] bg-[#0d5c63]"
            activeOpacity={0.9}
            onPress={() => navigation.replace("HomeFeed")}
          >
            <Text
              className="text-[16px] tracking-[-0.2px] leading-[22.5px] text-[#ffffff]"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              Start Exploring Jobs
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

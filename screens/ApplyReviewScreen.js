import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeft, CheckCircle, Briefcase, FileText, CircleHelp, ShieldCheck, ChevronRight } from "lucide-react-native";

const STEPS = 5;

function ProgressBar({ current }) {
  return (
    <View className="flex-row gap-x-[5.8px]">
      {Array.from({ length: STEPS }).map((_, i) => (
        <View
          key={i}
          className="h-[3px] flex-1"
          style={{ backgroundColor: i < current ? "#0d5c63" : "#0d5c631a" }}
        />
      ))}
    </View>
  );
}

const SECTIONS = [
  { label: "Personal Info", status: "Complete", statusColor: "#16a34a", icon: <CheckCircle size={15} color="#16a34a" />, iconBg: "#16a34a14" },
  { label: "Work Experience", status: "Complete", statusColor: "#16a34a", icon: <Briefcase size={15} color="#16a34a" />, iconBg: "#16a34a14" },
  { label: "Documents", status: "Complete", statusColor: "#16a34a", icon: <FileText size={15} color="#16a34a" />, iconBg: "#16a34a14" },
  { label: "Screening Questions", status: "1 pending", statusColor: "#e2b053", icon: <CircleHelp size={15} color="#e2b053" />, iconBg: "#979a6714" },
];

export default function ApplyReviewScreen({ navigation, route }) {
  const { job } = route.params || {};

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      <View className="h-[45px] bg-[#ffffff]" />

      {/* Header */}
      <View className="bg-[#ffffff] px-[20px] pt-[8px] pb-[12px]">
        <View className="flex-row items-center justify-between mb-[12px]">
          <TouchableOpacity
            className="h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f3efe9]"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeft size={18} color="#4a4868" />
          </TouchableOpacity>
          <Text className="text-[12px] text-[#8a88a8]" style={{ fontFamily: "PlusJakartaSans_400Regular", letterSpacing: -0.3 }}>
            Step 5 of 5
          </Text>
          <Text className="text-[14px] text-[#8a88a8]" style={{ fontFamily: "PlusJakartaSans_700Bold", letterSpacing: -0.3 }}>
            Save
          </Text>
        </View>
        <ProgressBar current={5} />
        <Text className="text-[20px] text-[#1a1828] mt-[12px]" style={{ fontFamily: "PlusJakartaSans_800ExtraBold", letterSpacing: -0.4 }}>
          Review & Submit
        </Text>
      </View>

      <ScrollView className="flex-1 px-[20px] pt-[16px]" contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Score banner */}
        <View className="rounded-[16px] bg-[#0d5c63] px-[23px] py-[17px] flex-row items-center mb-[16px]">
          <View className="rounded-[16px] bg-[#ffffff26] px-[13px] py-[10px] mr-[16px]">
            <Text className="text-[22px] text-[#ffffff]" style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}>94</Text>
          </View>
          <View className="flex-1">
            <Text className="text-[17px] text-[#ffffff]" style={{ fontFamily: "PlusJakartaSans_700Bold" }}>
              Application Score
            </Text>
            <Text className="text-[12px] text-[#ffffffa6]" style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 18 }}>
              Excellent - Completes 1 question to reach 100
            </Text>
          </View>
        </View>

        {/* Sections checklist */}
        <View className="gap-y-[8px] mb-[16px]">
          {SECTIONS.map((s, i) => (
            <View key={i} className="rounded-[16px] bg-[#ffffff] px-[12px] py-[10px] flex-row items-center">
              <View className="h-[40px] w-[40px] rounded-[10px] items-center justify-center mr-[12px]" style={{ backgroundColor: s.iconBg }}>
                {s.icon}
              </View>
              <View className="flex-1">
                <Text className="text-[16px] text-[#1a1828]" style={{ fontFamily: "PlusJakartaSans_700Bold" }}>
                  {s.label}
                </Text>
                <Text className="text-[12px]" style={{ fontFamily: "PlusJakartaSans_600SemiBold", color: s.statusColor }}>
                  {s.status}
                </Text>
              </View>
              <ChevronRight size={14} color={s.statusColor} />
            </View>
          ))}
        </View>

        {/* Privacy notice */}
        <View className="rounded-[16px] bg-[#ebf6f7] border border-[#c8e6e8] px-[12px] py-[10px] flex-row items-center mb-[20px]">
          <ShieldCheck size={15} color="#0d5c63" />
          <Text className="text-[14px] text-[#0d5c63] ml-[10px] flex-1" style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 17.6 }}>
            Your data is encrypted and never shared without permission
          </Text>
        </View>

        <TouchableOpacity
          className="h-[49px] rounded-[13px] bg-[#0d5c63] items-center justify-center"
          onPress={() => navigation.navigate("ApplySubmitted", { job })}
        >
          <Text className="text-[15px] text-[#ffffff]" style={{ fontFamily: "PlusJakartaSans_700Bold" }}>
            Submit Application
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

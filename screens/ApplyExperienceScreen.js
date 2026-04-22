import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeft, Briefcase, Plus, AlertTriangle } from "lucide-react-native";

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

const EXPERIENCES = [
  { title: "Senior Product Designer", company: "Figma", period: "Apr 2025 - Present" },
  { title: "Product Designer", company: "Airbnb", period: "Jan 2025 - Mar 2026" },
];

export default function ApplyExperienceScreen({ navigation, route }) {
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
            Step 2 of 5
          </Text>
          <Text className="text-[14px] text-[#8a88a8]" style={{ fontFamily: "PlusJakartaSans_700Bold", letterSpacing: -0.3 }}>
            Save
          </Text>
        </View>
        <ProgressBar current={2} />
        <Text className="text-[20px] text-[#1a1828] mt-[12px]" style={{ fontFamily: "PlusJakartaSans_800ExtraBold", letterSpacing: -0.4 }}>
          Work Experience
        </Text>
      </View>

      <ScrollView className="flex-1 px-[20px] pt-[16px]" contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Experience list */}
        <View className="gap-y-[10px] mb-[10px]">
          {EXPERIENCES.map((exp, i) => (
            <View key={i} className="rounded-[12px] bg-[#ffffff] px-[11px] py-[15px] flex-row items-center">
              <View className="h-[36px] w-[36px] rounded-[10px] bg-[#ebf6f7] items-center justify-center mr-[10px]">
                <Briefcase size={13} color="#0d5c63" />
              </View>
              <View className="flex-1">
                <Text className="text-[16px] text-[#1a1828]" style={{ fontFamily: "PlusJakartaSans_700Bold" }}>
                  {exp.title}
                </Text>
                <Text className="text-[12px] text-[#0d5c63]" style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}>
                  {exp.company}
                </Text>
                <Text className="text-[13px] text-[#8a88a8]" style={{ fontFamily: "PlusJakartaSans_400Regular" }}>
                  {exp.period}
                </Text>
              </View>
            </View>
          ))}

          {/* Add experience */}
          <TouchableOpacity className="rounded-[12px] border border-[#0d5c6312] px-[10px] py-[15px] flex-row items-center">
            <View className="h-[36px] w-[36px] rounded-[10px] bg-[#ebf6f7] items-center justify-center mr-[10px]">
              <Plus size={12} color="#8a88a8" />
            </View>
            <Text className="text-[16px] text-[#8a88a8]" style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}>
              Add work experience
            </Text>
          </TouchableOpacity>
        </View>

        {/* Auto-import notice */}
        <View className="rounded-[12px] bg-[#fdf8ee] border border-[#f9edd0] px-[10px] py-[11px] flex-row items-center mb-[20px]">
          <AlertTriangle size={14} color="#c4892a" />
          <Text className="text-[13px] text-[#c4892a] ml-[10px] flex-1" style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 19.2 }}>
            Your experience has been auto-imported from your resume. Tap to edit any entry.
          </Text>
        </View>

        <TouchableOpacity
          className="h-[49px] rounded-[13px] bg-[#0d5c63] items-center justify-center"
          onPress={() => navigation.navigate("ApplyDocuments", { job })}
        >
          <Text className="text-[15px] text-[#ffffff]" style={{ fontFamily: "PlusJakartaSans_700Bold" }}>
            Next : Upload Documents →
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

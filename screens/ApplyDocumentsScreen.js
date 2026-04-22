import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeft, FileText, CheckCircle, Upload, AlertTriangle, Pencil } from "lucide-react-native";

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

export default function ApplyDocumentsScreen({ navigation, route }) {
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
            Step 3 of 5
          </Text>
          <Text className="text-[14px] text-[#8a88a8]" style={{ fontFamily: "PlusJakartaSans_700Bold", letterSpacing: -0.3 }}>
            Save
          </Text>
        </View>
        <ProgressBar current={3} />
        <Text className="text-[20px] text-[#1a1828] mt-[12px]" style={{ fontFamily: "PlusJakartaSans_800ExtraBold", letterSpacing: -0.4 }}>
          Work Documents
        </Text>
      </View>

      <ScrollView className="flex-1 px-[20px] pt-[16px]" contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Resume */}
        <View className="mb-[20px]">
          <Text className="text-[12px] text-[#4a4868] mb-[8px]" style={{ fontFamily: "PlusJakartaSans_700Bold", letterSpacing: 0.5 }}>
            RESUME *
          </Text>
          <View className="rounded-[16px] bg-[#ffffff] border border-[#0d5c63] px-[11px] py-[15px] flex-row items-center">
            <View className="h-[36px] w-[36px] rounded-[10px] bg-[#ebf6f7] items-center justify-center mr-[10px]">
              <FileText size={16} color="#0d5c63" />
            </View>
            <View className="flex-1">
              <Text className="text-[14px] text-[#000000]" style={{ fontFamily: "PlusJakartaSans_700Bold" }}>
                Sarah_Johnson_Resume_2024.pdf
              </Text>
              <Text className="text-[12px] text-[#8a88a8]" style={{ fontFamily: "PlusJakartaSans_400Regular" }}>
                2.4 MB - Uploaded 3 days ago
              </Text>
            </View>
            <CheckCircle size={14} color="#16a34a" />
          </View>
        </View>

        {/* Cover Letter */}
        <View className="mb-[20px]">
          <Text className="text-[12px] text-[#4a4868] mb-[8px]" style={{ fontFamily: "PlusJakartaSans_700Bold", letterSpacing: 0.5 }}>
            COVER LETTER
          </Text>
          <View className="rounded-[14px] bg-[#fdf8ee] border border-[#f9edd0] p-[14px]">
            <View className="flex-row items-center mb-[10px]">
              <AlertTriangle size={16} color="#c4892a" />
              <Text className="text-[15px] text-[#c4892a] ml-[8px]" style={{ fontFamily: "PlusJakartaSans_700Bold" }}>
                AI-Generated Cover Letter
              </Text>
            </View>
            <Text className="text-[14px] text-[#4a4868] mb-[14px]" style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20.4 }}>
              "Dear Figma Hiring Team, I'm excited to apply for the Senior Product Designer role. With 6+ years crafting design systems at Airbnb and Google..."
            </Text>
            <TouchableOpacity className="self-start rounded-[15px] bg-[#ffffff] border border-[#f9edd0] px-[12px] py-[11px] flex-row items-center">
              <Pencil size={12} color="#c4892a" />
              <Text className="text-[12px] text-[#c4892a] ml-[6px]" style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}>
                Edit letter
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Portfolio */}
        <View className="mb-[20px]">
          <Text className="text-[12px] text-[#4a4868] mb-[8px]" style={{ fontFamily: "PlusJakartaSans_700Bold", letterSpacing: 0.5 }}>
            PORTFOLIO (OPTIONAL)
          </Text>
          <TouchableOpacity className="rounded-[16px] border border-[#0d5c6312] py-[20px] items-center">
            <Upload size={18} color="#8a88a8" />
            <Text className="text-[12px] text-[#8a88a8] mt-[8px]" style={{ fontFamily: "PlusJakartaSans_400Regular" }}>
              Upload PDF or enter URL
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="h-[49px] rounded-[13px] bg-[#0d5c63] items-center justify-center"
          onPress={() => navigation.navigate("ApplyQuestions", { job })}
        >
          <Text className="text-[15px] text-[#ffffff]" style={{ fontFamily: "PlusJakartaSans_700Bold" }}>
            Next : Custom Questions →
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

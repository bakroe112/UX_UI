import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CircleDollarSign, ChevronRight, Zap } from "lucide-react-native";
import { Check } from "lucide-react-native";
import QuizStepHeader from "../components/QuizStepHeader";

// Extracted from Figma: Quiz: Salary
// Group 42 (salary card) h=220, rounded-[16px], border #0d5c63
//   "Annual Salary Range" text-[13px] #8a88a8
//   "$120k — $180k" text-[38px] ExtraBold #0d5c63 letterSpacing -1.5
//   "USD · per year" text-[12px] #8a88a8
//   Slider: track bg #0d5c631a, filled #0d5c63, thumbs #ffffff border #0d5c63
//   Range labels: $60k ... $300k+
// Group 42 (currency) h=68, rounded-[16px], border #0d5c63
//   Icon bg #fdf8ee border #7a6181, icon color #e2b053
//   "Currency" text-[15px] SemiBold #1c1a2e
//   "United States Dollar (USD)" text-[13px] #8a88a8
//   ChevronRight color #8a88a8
// Group 43 (market context) h=98, rounded-[16px] bg #ebf6f7 border #c8e6e8
//   "Market Context · Product Designers · SF" text-[12px] Bold #0d5c63
//   P25 $100k, Median $145k, P75 $190k — text-[14px] Bold #0d5c63
// Group 76 (checkbox) — "Only show roles at or above minimum" text-[13px] Medium #4a4868
// Group 29 (matching jobs) h=48, rounded-[16px] border #c8e6e8
//   Zap icon #0d5c63, "47 matching jobs found today" text-[13px] SemiBold #0d5c63

export default function QuizSalaryScreen({ navigation }) {
  const [onlyAboveMin, setOnlyAboveMin] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      <QuizStepHeader
        step={4}
        navigation={navigation}
        onSkip={() => navigation.navigate("SetupComplete")}
      />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Heading */}
        <View className="px-[20px] pt-[20px]">
          <Text
            className="text-[22px] tracking-[-0.6px] leading-[28.6px] text-[#1a1828]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
          >
            What are your salary expectations?
          </Text>
          <Text
            className="mt-[8px] text-[14px] leading-[22.4px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            We use this to filter and highlight the best-matching offers.
          </Text>
        </View>

        <View className="mt-[20px] px-[20px] gap-y-[10px]">
          {/* Salary range card */}
          <View
            className="rounded-[16px] bg-[#ffffff] px-[19px] py-[18px]"
            style={{ borderWidth: 1, borderColor: "#0d5c63" }}
          >
            <Text
              className="text-center text-[13px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              Annual Salary Range
            </Text>

            {/* Big salary display */}
            <Text
              className="mt-[12px] text-center text-[38px] leading-[57px] text-[#0d5c63]"
              style={{
                fontFamily: "PlusJakartaSans_800ExtraBold",
                letterSpacing: -1.5,
              }}
            >
              $120k — $180k
            </Text>

            <Text
              className="text-center text-[12px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              USD · per year
            </Text>

            {/* Dual-thumb slider */}
            <View className="mt-[16px]">
              <View className="relative h-[8px] w-full rounded-full bg-[#0d5c631a]">
                {/* Filled range */}
                <View
                  className="absolute top-0 h-[8px] rounded-full bg-[#0d5c63]"
                  style={{ left: "25%", right: "30%" }}
                />
                {/* Left thumb */}
                <View
                  className="absolute top-[-7px] h-[22px] w-[22px] rounded-full bg-[#ffffff]"
                  style={{ left: "23%", borderWidth: 1.5, borderColor: "#0d5c63" }}
                />
                {/* Right thumb */}
                <View
                  className="absolute top-[-7px] h-[22px] w-[22px] rounded-full bg-[#ffffff]"
                  style={{ right: "28%", borderWidth: 1.5, borderColor: "#0d5c63" }}
                />
              </View>

              {/* Range labels */}
              <View className="mt-[8px] flex-row justify-between">
                <Text
                  className="text-[12px] text-[#8a88a8]"
                  style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                >
                  $60k
                </Text>
                <Text
                  className="text-[12px] text-[#8a88a8]"
                  style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                >
                  $300k+
                </Text>
              </View>
            </View>
          </View>

          {/* Currency card */}
          <View
            className="flex-row items-center rounded-[16px] bg-[#ffffff] px-[14px]"
            style={{ height: 68, borderWidth: 1, borderColor: "#0d5c63" }}
          >
            <View
              className="h-[43px] w-[43px] items-center justify-center rounded-[14px]"
              style={{ backgroundColor: "#fdf8ee", borderWidth: 1, borderColor: "#7a6181" }}
            >
              <CircleDollarSign size={20} color="#e2b053" />
            </View>
            <View className="ml-[14px] flex-1">
              <Text
                className="text-[15px] leading-[22.4px] text-[#1c1a2e]"
                style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
              >
                Currency
              </Text>
              <Text
                className="text-[13px] leading-[22.4px] text-[#8a88a8]"
                style={{ fontFamily: "PlusJakartaSans_400Regular" }}
              >
                United States Dollar (USD)
              </Text>
            </View>
            <ChevronRight size={20} color="#8a88a8" />
          </View>

          {/* Market context card */}
          <View
            className="rounded-[16px] px-[17px] py-[14px]"
            style={{ backgroundColor: "#ebf6f7", borderWidth: 1, borderColor: "#c8e6e8" }}
          >
            <Text
              className="text-[12px] text-[#0d5c63]"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              Market Context · Product Designers · SF
            </Text>

            {/* P25 / Median / P75 */}
            <View className="mt-[12px] flex-row justify-between">
              {[
                { label: "$100k", sub: "P25" },
                { label: "$145k", sub: "Median" },
                { label: "$190k", sub: "P75" },
              ].map((item) => (
                <View key={item.sub} className="items-center">
                  <Text
                    className="text-[14px] leading-[22.4px] text-[#0d5c63]"
                    style={{ fontFamily: "PlusJakartaSans_700Bold" }}
                  >
                    {item.label}
                  </Text>
                  <Text
                    className="text-[11px] leading-[22.4px] text-[#0d5c63]"
                    style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                  >
                    {item.sub}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Checkbox — only show roles at or above minimum */}
          <TouchableOpacity
            className="flex-row items-center"
            activeOpacity={0.8}
            onPress={() => setOnlyAboveMin((v) => !v)}
          >
            <View
              className="h-[20px] w-[20px] items-center justify-center rounded-[4px]"
              style={{
                backgroundColor: onlyAboveMin ? "#0d5c63" : "#ffffff",
                borderWidth: onlyAboveMin ? 0 : 1,
                borderColor: "#0d5c6340",
              }}
            >
              {onlyAboveMin && <Check size={12} color="#ffffff" />}
            </View>
            <Text
              className="ml-[10px] text-[13px] leading-[19.5px] text-[#4a4868]"
              style={{ fontFamily: "PlusJakartaSans_500Medium" }}
            >
              Only show roles at or above minimum
            </Text>
          </TouchableOpacity>

          {/* Matching jobs banner */}
          <View
            className="flex-row items-center rounded-[16px] px-[17px]"
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
        </View>
      </ScrollView>

      {/* Continue */}
      <View className="absolute bottom-0 left-0 right-0 px-[21px] pb-[28px]">
        <TouchableOpacity
          className="h-[55px] items-center justify-center rounded-[14px] bg-[#0d5c63]"
          activeOpacity={0.9}
          onPress={() => navigation.navigate("SetupComplete")}
        >
          <Text
            className="text-[16px] tracking-[-0.2px] leading-[22.5px] text-[#ffffff]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            Continue →
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

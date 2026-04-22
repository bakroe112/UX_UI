import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Baby, Backpack, Star, Award } from "lucide-react-native";
import { Check } from "lucide-react-native";
import QuizStepHeader from "../components/QuizStepHeader";

// Extracted from Figma: Quiz: Experience
// Frame 44 — 4 list rows, each h=86, w=353, rounded-[16px], bg #ffffff, border #7a6181
// Selected row: border #0d5c63, title color #0d5c63, check circle filled #0d5c63
// Unselected: title #1a1828, check circle border only #0d5c6312
// Below: Group 42 — experience slider card h=86, w=353

const LEVELS = [
  {
    id: "entry",
    label: "Entry Level",
    sub: "0-2 years",
    icon: Baby,
    iconColor: "#296fca",
    iconBg: "#f3efe9",
  },
  {
    id: "mid",
    label: "Mid Level",
    sub: "3-5 years",
    icon: Backpack,
    iconColor: "#0d5c63",
    iconBg: "#0d5c6314",
    defaultSelected: true,
  },
  {
    id: "senior",
    label: "Senior",
    sub: "6-10 years",
    icon: Star,
    iconColor: "#e05b5b",
    iconBg: "#f3efe9",
  },
  {
    id: "lead",
    label: "Lead / Principal",
    sub: "10+ years",
    icon: Award,
    iconColor: "#e2b053",
    iconBg: "#f3efe9",
  },
];

// Slider tick labels from Figma Frame 45
const TICKS = ["0yr", "2yr", "4yr", "6yr", "8yr", "10+yr"];

function LevelRow({ item, selected, onPress }) {
  const Icon = item.icon;
  const isSelected = selected === item.id;

  return (
    <TouchableOpacity
      className="mb-[10px] flex-row items-center rounded-[16px] bg-[#ffffff] px-[14px]"
      style={{
        height: 86,
        borderWidth: 1,
        borderColor: isSelected ? "#0d5c63" : "#7a6181",
      }}
      activeOpacity={0.8}
      onPress={() => onPress(item.id)}
    >
      {/* Icon */}
      <View
        className="h-[48px] w-[48px] items-center justify-center rounded-[14px]"
        style={{ borderWidth: 1, borderColor: "#7a6181", backgroundColor: item.iconBg }}
      >
        <Icon size={20} color={item.iconColor} />
      </View>

      {/* Text */}
      <View className="ml-[14px] flex-1">
        <Text
          className="text-[15px] leading-[22.4px]"
          style={{
            fontFamily: "PlusJakartaSans_700Bold",
            color: isSelected ? "#0d5c63" : "#1a1828",
          }}
        >
          {item.label}
        </Text>
        <Text
          className="text-[13px] leading-[22.4px] text-[#8a88a8]"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          {item.sub}
        </Text>
      </View>

      {/* Radio circle */}
      <View
        className="h-[20px] w-[20px] items-center justify-center rounded-full"
        style={{
          backgroundColor: isSelected ? "#0d5c63" : "transparent",
          borderWidth: isSelected ? 0 : 1,
          borderColor: "#0d5c6312",
        }}
      >
        {isSelected && <Check size={12} color="#ffffff" />}
      </View>
    </TouchableOpacity>
  );
}

export default function QuizExperienceScreen({ navigation }) {
  const [selected, setSelected] = useState("mid");

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      <QuizStepHeader
        step={2}
        navigation={navigation}
        onSkip={() => navigation.navigate("QuizSkills")}
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
            How much experience do you have?
          </Text>
          <Text
            className="mt-[8px] text-[14px] leading-[22.4px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            This helps match you with the right seniority level roles.
          </Text>
        </View>

        {/* Level list */}
        <View className="mt-[20px] px-[20px]">
          {LEVELS.map((item) => (
            <LevelRow
              key={item.id}
              item={item}
              selected={selected}
              onPress={setSelected}
            />
          ))}
        </View>

        {/* Experience slider card — Figma Group 42, h=86, rounded-[16px] */}
        <View
          className="mx-[20px] mt-[4px] rounded-[16px] bg-[#ffffff] px-[19px] py-[14px]"
          style={{ borderWidth: 1, borderColor: "#7a6181" }}
        >
          <Text
            className="text-[12px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            Your experience level
          </Text>

          {/* Slider track */}
          <View className="mt-[16px]">
            <View className="relative h-[8px] w-full rounded-full bg-[#0d5c631a]">
              {/* Filled portion ~33% (mid level) */}
              <View
                className="absolute left-0 top-0 h-[8px] rounded-full bg-[#0d5c63]"
                style={{ width: "33%" }}
              />
              {/* Thumb */}
              <View
                className="absolute top-[-7px] h-[22px] w-[22px] rounded-full bg-[#ffffff]"
                style={{ left: "31%", borderWidth: 1.5, borderColor: "#0d5c63" }}
              />
            </View>

            {/* Tick labels */}
            <View className="mt-[8px] flex-row justify-between">
              {TICKS.map((t) => (
                <Text
                  key={t}
                  className="text-[9px] text-[#8a88a8]"
                  style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                >
                  {t}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Continue */}
      <View className="absolute bottom-0 left-0 right-0 px-[21px] pb-[28px]">
        <TouchableOpacity
          className="h-[55px] items-center justify-center rounded-[14px] bg-[#0d5c63]"
          activeOpacity={0.9}
          onPress={() => navigation.navigate("QuizSkills")}
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

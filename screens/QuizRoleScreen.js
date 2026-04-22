import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { PenTool, Code, BarChart2, Layers, TrendingUp, Target } from "lucide-react-native";
import { Check } from "lucide-react-native";
import QuizStepHeader from "../components/QuizStepHeader";

// Extracted from Figma: Quiz: Role
// Colors: bg #f9f5f0, card bg #ffffff, selected border #7a6181
// Icon bg colors from Figma fills
const ROLES = [
  {
    id: "product_design",
    label: "Product Design",
    icon: PenTool,
    iconColor: "#7a6181",
    iconBg: "#7a618114",
    selected: true, // default selected in Figma
  },
  {
    id: "engineering",
    label: "Engineering",
    icon: Code,
    iconColor: "#0d5c63",
    iconBg: "#0d5c6314",
  },
  {
    id: "engineering2",
    label: "Engineering",
    icon: BarChart2,
    iconColor: "#e05b5b",
    iconBg: "#e05b5b14",
  },
  {
    id: "product_mgmt",
    label: "Product Management",
    icon: Layers,
    iconColor: "#e2b053",
    iconBg: "#e2b05314",
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: TrendingUp,
    iconColor: "#16a34a",
    iconBg: "#16a34a14",
  },
  {
    id: "operations",
    label: "Operations",
    icon: Target,
    iconColor: "#7a6181",
    iconBg: "#7a618114",
  },
];

function RoleCard({ item, selected, onPress }) {
  const Icon = item.icon;
  const isSelected = selected === item.id;

  return (
    <TouchableOpacity
      className="relative rounded-[16px] bg-[#ffffff] p-[14px]"
      style={{
        borderWidth: 1,
        borderColor: "#7a6181",
        flex: 1,
        minHeight: 114,
        justifyContent: "center",
        alignItems: "center",
      }}
      activeOpacity={0.8}
      onPress={() => onPress(item.id)}
    >
      {/* Check badge — top right */}
      {isSelected && (
        <View
          className="absolute right-[8px] top-[8px] h-[20px] w-[20px] items-center justify-center rounded-[4px] bg-[#0d5c63]"
        >
          <Check size={12} color="#ffffff" />
        </View>
      )}

      {/* Icon container */}
      <View
        className="h-[46px] w-[46px] items-center justify-center rounded-[14px]"
        style={{ backgroundColor: item.iconBg }}
      >
        <Icon size={20} color={item.iconColor} />
      </View>

      {/* Label */}
      <Text
        className="mt-[10px] text-center text-[13px]"
        style={{
          fontFamily: "PlusJakartaSans_600SemiBold",
          color: isSelected ? "#8a88a8" : "#1a1828",
        }}
        numberOfLines={2}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );
}

export default function QuizRoleScreen({ navigation }) {
  const [selected, setSelected] = useState("product_design");

  // Build rows of 2
  const rows = [];
  for (let i = 0; i < ROLES.length; i += 2) {
    rows.push(ROLES.slice(i, i + 2));
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      <QuizStepHeader
        step={1}
        navigation={navigation}
        onSkip={() => navigation.navigate("QuizExperience")}
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
            What's your primary role?
          </Text>
          <Text
            className="mt-[8px] text-[14px] leading-[22.4px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            We'll tailor your job feed to match your expertise and career goals.
          </Text>
        </View>

        {/* Role grid */}
        <View className="mt-[20px] px-[20px] gap-y-[12px]">
          {rows.map((row, ri) => (
            <View key={ri} className="flex-row gap-x-[12px]">
              {row.map((item) => (
                <RoleCard
                  key={item.id}
                  item={item}
                  selected={selected}
                  onPress={setSelected}
                />
              ))}
              {/* Fill empty slot if odd */}
              {row.length === 1 && <View style={{ flex: 1 }} />}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Continue button */}
      <View className="absolute bottom-0 left-0 right-0 px-[21px] pb-[28px]">
        <TouchableOpacity
          className="h-[55px] items-center justify-center rounded-[14px] bg-[#0d5c63]"
          activeOpacity={0.9}
          onPress={() => navigation.navigate("QuizExperience")}
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

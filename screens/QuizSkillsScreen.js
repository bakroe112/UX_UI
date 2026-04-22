import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Plus } from "lucide-react-native";
import QuizStepHeader from "../components/QuizStepHeader";

// Extracted from Figma: Quiz: Skills
// Skill pills: rounded-[24px], h=42
// Selected: bg #0d5c63, text #ffffff
// Unselected: bg #ffffff, text #000000 or #4a4868
// Section labels: text-[12px] Bold #8a88a8, letterSpacing 0.8
// "Add a custom skill" card: rounded-[16px] bg #ffffff border #0d5c632e
//   plus icon bg #d0eaec, icon color #0d5c63
//   "5 skills selected" text-[13px] #8a88a8

const SKILL_SECTIONS = [
  {
    id: "design",
    label: "DESIGN TOOLS",
    skills: ["Figma", "Sketch", "Framer", "Protopie"],
    defaultSelected: ["Figma", "Framer"],
  },
  {
    id: "research",
    label: "RESEARCH",
    skills: ["User Research", "Usability Testing"],
    defaultSelected: ["User Research"],
  },
  {
    id: "misc",
    label: null,
    skills: ["A/B Testing"],
    defaultSelected: ["A/B Testing"],
  },
  {
    id: "dev",
    label: "DEV KNOWLEDGE",
    skills: ["HTML/CSS", "React", "Webflow"],
    defaultSelected: ["HTML/CSS"],
  },
];

function SkillPill({ label, selected, onPress }) {
  return (
    <TouchableOpacity
      className="h-[42px] items-center justify-center rounded-[24px] px-[16px]"
      style={{
        backgroundColor: selected ? "#0d5c63" : "#ffffff",
      }}
      activeOpacity={0.8}
      onPress={() => onPress(label)}
    >
      <Text
        className="text-[13px] leading-[19.5px]"
        style={{
          fontFamily: "PlusJakartaSans_600SemiBold",
          color: selected ? "#ffffff" : "#000000",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default function QuizSkillsScreen({ navigation }) {
  const initialSelected = new Set(
    SKILL_SECTIONS.flatMap((s) => s.defaultSelected)
  );
  const [selected, setSelected] = useState(initialSelected);

  function toggle(skill) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(skill)) next.delete(skill);
      else next.add(skill);
      return next;
    });
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      <QuizStepHeader
        step={3}
        navigation={navigation}
        onSkip={() => navigation.navigate("QuizLocation")}
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
            Select your top skills
          </Text>
          <Text
            className="mt-[8px] text-[14px] leading-[22.4px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            Pick skills you're proficient in. You can always update these later.
          </Text>
        </View>

        <View className="mt-[20px] px-[20px]">
          {SKILL_SECTIONS.map((section) => (
            <View key={section.id} className="mb-[20px]">
              {section.label && (
                <Text
                  className="mb-[10px] text-[12px] text-[#8a88a8]"
                  style={{
                    fontFamily: "PlusJakartaSans_700Bold",
                    letterSpacing: 0.8,
                  }}
                >
                  {section.label}
                </Text>
              )}
              <View className="flex-row flex-wrap gap-[8px]">
                {section.skills.map((skill) => (
                  <SkillPill
                    key={skill}
                    label={skill}
                    selected={selected.has(skill)}
                    onPress={toggle}
                  />
                ))}
              </View>
            </View>
          ))}

          {/* Add custom skill card — Figma Group 62 */}
          <View
            className="mt-[4px] rounded-[16px] bg-[#ffffff] px-[15px] py-[15px]"
            style={{ borderWidth: 1, borderColor: "#0d5c632e" }}
          >
            <View className="flex-row items-center">
              {/* Plus icon */}
              <View className="h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-[#d0eaec]">
                <Plus size={18} color="#0d5c63" />
              </View>
              <Text
                className="ml-[12px] text-[13px] leading-[19.5px] text-[#0d5c63]"
                style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
              >
                Add a custom skill
              </Text>
            </View>
            <Text
              className="mt-[8px] text-[13px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              {selected.size} skills selected
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Continue */}
      <View className="absolute bottom-0 left-0 right-0 px-[21px] pb-[28px]">
        <TouchableOpacity
          className="h-[55px] items-center justify-center rounded-[14px] bg-[#0d5c63]"
          activeOpacity={0.9}
          onPress={() => navigation.navigate("QuizLocation")}
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

import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeft } from "lucide-react-native";

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

const QUESTIONS = [
  {
    id: "q1",
    question: "Why are you interested in joining Figma?",
    placeholder: "Focus on your passion for the product and company mission...",
    defaultAnswer: "Figma has profoundly impacted how I design — it's the only tool where I can take an idea from concept to handoff without switching apps. I'd love to shape the product from the inside...",
  },
  {
    id: "q2",
    question: "Describe a design challenge you solved under tight constraints.",
    placeholder: "Focus on your process and measurable outcome...",
    defaultAnswer: "Focus on yours process and measurable outcome...",
  },
];

export default function ApplyQuestionsScreen({ navigation, route }) {
  const { job } = route.params || {};
  const [answers, setAnswers] = useState(
    Object.fromEntries(QUESTIONS.map((q) => [q.id, q.defaultAnswer]))
  );

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
            Step 4 of 5
          </Text>
          <Text className="text-[14px] text-[#8a88a8]" style={{ fontFamily: "PlusJakartaSans_700Bold", letterSpacing: -0.3 }}>
            Save
          </Text>
        </View>
        <ProgressBar current={4} />
        <Text className="text-[20px] text-[#1a1828] mt-[12px]" style={{ fontFamily: "PlusJakartaSans_800ExtraBold", letterSpacing: -0.4 }}>
          Questions
        </Text>
      </View>

      <ScrollView className="flex-1 px-[20px] pt-[16px]" contentContainerStyle={{ paddingBottom: 40 }}>
        {QUESTIONS.map((q) => (
          <View key={q.id} className="rounded-[16px] bg-[#ffffff] p-[13px] mb-[12px]">
            <Text className="text-[15px] text-[#1a1828] mb-[12px]" style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 18.2 }}>
              {q.question}
            </Text>
            <View className="rounded-[16px] bg-[#f3efe9] p-[10px]">
              <TextInput
                className="text-[14px] text-[#4a4868]"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20, minHeight: 80 }}
                multiline
                value={answers[q.id]}
                onChangeText={(v) => setAnswers((p) => ({ ...p, [q.id]: v }))}
                placeholder={q.placeholder}
                placeholderTextColor="#8a88a8"
                textAlignVertical="top"
              />
            </View>
          </View>
        ))}

        <TouchableOpacity
          className="h-[49px] rounded-[13px] bg-[#0d5c63] items-center justify-center mt-[8px]"
          onPress={() => navigation.navigate("ApplyReview", { job })}
        >
          <Text className="text-[15px] text-[#ffffff]" style={{ fontFamily: "PlusJakartaSans_700Bold" }}>
            Next : Review Application →
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

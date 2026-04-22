import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import AppStatusBar from "./AppStatusBar";

// 5-segment progress bar + back/skip header — matches Figma "Group 35"
export default function QuizStepHeader({ step, total = 5, navigation, onSkip }) {
  return (
    <View>
      <AppStatusBar />
      {/* Back + Step label + Skip */}
      <View className="h-[36px] flex-row items-center justify-between px-[20px] pt-[12px]">
        <TouchableOpacity
          className="h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#0d5c630f]"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={20} color="#000000" />
        </TouchableOpacity>

        <Text
          className="text-[13px] text-[#8a88a8]"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          Step {step} of {total}
        </Text>

        <TouchableOpacity onPress={onSkip}>
          <Text
            className="text-[14px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_500Medium" }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>

      {/* Progress segments */}
      <View className="mt-[10px] flex-row items-center gap-x-[5px] px-[23px]">
        {Array.from({ length: total }).map((_, i) => (
          <View
            key={i}
            className="h-[2px] flex-1 rounded-full"
            style={{ backgroundColor: i < step ? "#0d5c63" : "#0d5c631f" }}
          />
        ))}
      </View>
    </View>
  );
}

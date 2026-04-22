import React from "react";
import { View, Text } from "react-native";
import { Bot } from "lucide-react-native";

export default function ProgressIndicator({ currentQuestion = 1, totalQuestions = 5 }) {
  return (
    <View className="items-center py-[17px]">
      <View className="flex-row gap-x-[9px] mb-[6px]">
        {Array.from({ length: totalQuestions }, (_, index) => (
          <View
            key={index}
            className={`h-[12px] w-[12px] rounded-full ${
              index < currentQuestion ? "bg-[#0d5c63]" : "bg-[#0d5c6333]"
            }`}
          />
        ))}
      </View>
      
      <Text
        className="text-[12px] text-[#0d5c63a3] mb-[6px]"
        style={{ 
          fontFamily: "PlusJakartaSans_400Regular", 
          lineHeight: 20 
        }}
      >
        Q{currentQuestion} of {totalQuestions}
      </Text>

      {/* AI Avatar */}
      <View className="h-[80px] w-[80px] rounded-full bg-[#0d5c63] items-center justify-center">
        <Bot size={35} color="#ffffff" />
      </View>
    </View>
  );
}
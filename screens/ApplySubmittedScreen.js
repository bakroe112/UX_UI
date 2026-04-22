import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CheckCircle, Bell, Zap } from "lucide-react-native";

const WHATS_NEXT = [
  { icon: <CheckCircle size={14} color="#0d5c63" />, iconBg: "#0d5c6314", text: "Typically hear back in 3-5 business days" },
  { icon: <Bell size={14} color="#7a6181" />, iconBg: "#7a618114", text: "We'll notify you on every status update" },
  { icon: <Zap size={14} color="#e2b053" />, iconBg: "#e2b05314", text: "Start interview prep while you wait" },
];

export default function ApplySubmittedScreen({ navigation, route }) {
  const { job } = route.params || {};

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0] items-center justify-center px-[20px]">
      {/* Icon */}
      <View className="h-[88px] w-[88px] rounded-[26px] bg-[#ebf6f7] border border-[#c8e6e8] items-center justify-center mb-[30px]">
        <CheckCircle size={35} color="#0d5c63" />
      </View>

      {/* Title */}
      <Text
        className="text-[28px] text-[#1a1828] text-center mb-[12px]"
        style={{ fontFamily: "PlusJakartaSans_800ExtraBold", letterSpacing: -0.5, lineHeight: 36 }}
      >
        Application Submitted
      </Text>

      <Text
        className="text-[15px] text-center mb-[32px]"
        style={{ fontFamily: "PlusJakartaSans_400Regular", letterSpacing: -0.5, lineHeight: 24, color: "#4a4868" }}
      >
        Your application to{" "}
        <Text style={{ fontFamily: "PlusJakartaSans_700Bold", color: "#1a1828" }}>
          {job?.company ?? "Figma"}
        </Text>{" "}
        for the{" "}
        <Text style={{ fontFamily: "PlusJakartaSans_700Bold", color: "#1a1828" }}>
          {job?.title ?? "Sr.Product Designer"}
        </Text>{" "}
        role has been sent
      </Text>

      {/* What's next */}
      <View className="w-full rounded-[16px] bg-[#ffffff] px-[26px] py-[16px] mb-[24px]">
        <Text className="text-[14px] text-[#8a88a8] mb-[16px]" style={{ fontFamily: "PlusJakartaSans_700Bold" }}>
          WHAT'S NEXT?
        </Text>
        <View className="gap-y-[14px]">
          {WHATS_NEXT.map((item, i) => (
            <View key={i} className="flex-row items-center">
              <View className="h-[36px] w-[36px] rounded-[10px] items-center justify-center mr-[12px]" style={{ backgroundColor: item.iconBg }}>
                {item.icon}
              </View>
              <Text className="text-[14px] text-[#4a4868] flex-1" style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 19.5 }}>
                {item.text}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* CTA */}
      <TouchableOpacity
        className="w-full h-[49px] rounded-[13px] bg-[#0d5c63] items-center justify-center mb-[16px]"
        onPress={() => navigation.navigate("AIMockInterviewSetup")}
      >
        <Text className="text-[15px] text-[#ffffff]" style={{ fontFamily: "PlusJakartaSans_700Bold" }}>
          Prep for {job?.company ?? "Figma"} Interview
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Tracker")}>
        <Text className="text-[13px] text-[#8a88a8]" style={{ fontFamily: "PlusJakartaSans_500Medium" }}>
          Back to Applications
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

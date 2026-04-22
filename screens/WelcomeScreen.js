import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Brain, Zap, Trophy, Star } from "lucide-react-native";

const features = [
  { icon: Brain, text: "10,000+ questions across 20+ categories", color: "#E2B053" },
  { icon: Zap, text: "Instant feedback and detailed explanations", color: "#4AACB5" },
  { icon: Trophy, text: "Compete on global leaderboards", color: "#FFFFFF" },
];

function FeatureRow({ Icon, text, color }) {
  return (
    <View className="h-[38px] w-full flex-row items-center">
      <View className="h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#FFFFFF14]">
        <Icon size={18} color={color} />
      </View>
      <Text
        className="ml-[14px] flex-1 text-[13px] leading-[28px] text-[#FFFFFFAD]"
        style={{ fontFamily: "PlusJakartaSans_400Regular" }}
      >
        {text}
      </Text>
    </View>
  );
}

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-[#0D5C63]">
      <View className="flex-1">
        {/* Hero */}
        <View className="items-center pt-[96px]">
          <View className="h-[80px] w-[80px] items-center justify-center rounded-[24px] border border-[#FFFFFF2E] bg-[#FFFFFF1A]">
            <Brain size={38} color="#FFFFFF" />
          </View>
          <Text
            className="mt-[16px] text-[40px] tracking-[-1.8px] leading-[60px] text-[#FFFFFF]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
          >
            QuizFlow
          </Text>
          <Text
            className="mt-[5px] text-center text-[15px] leading-[28px] text-[#FFFFFF8C]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            Challenge your mind, one question{"\n"}at a time
          </Text>
        </View>

        {/* Features */}
        <View className="mt-[50px] px-[61px]">
          {features.map((item) => (
            <View key={item.text} className="mb-[16px]">
              <FeatureRow Icon={item.icon} text={item.text} color={item.color} />
            </View>
          ))}
        </View>

        {/* Rating badge */}
        <View className="mt-[24px] flex-row items-center justify-center gap-x-[4px]">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={14} color="#E2B053" fill="#E2B053" />
          ))}
          <Text
            className="ml-[6px] text-[12px] text-[#FFFFFF8C]"
            style={{ fontFamily: "PlusJakartaSans_500Medium" }}
          >
            4.9 · 120k+ players
          </Text>
        </View>

        {/* CTA */}
        <View className="mt-auto px-[20px] pb-[28px]">
          <TouchableOpacity
            className="h-[54px] items-center justify-center rounded-[14px] bg-[#E2B053]"
            activeOpacity={0.9}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text
              className="text-[15px] leading-[28px] text-[#000000]"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              Start Playing — It's Free
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-[14px] h-[54px] items-center justify-center rounded-[14px] border border-[#FFFFFF2E] bg-[#FFFFFF1A]"
            activeOpacity={0.9}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text
              className="text-[15px] leading-[28px] text-[#FFFFFF]"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              Sign In to My Account
            </Text>
          </TouchableOpacity>

          <Text
            className="mt-[18px] text-center text-[11px] leading-[28px] text-[#FFFFFF47]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            Trusted by 500,000+ quiz enthusiasts worldwide
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

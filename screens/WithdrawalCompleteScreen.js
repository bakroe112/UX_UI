import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  CheckCircle,
  Home,
  Search,
} from "lucide-react-native";

// ─── MAIN SCREEN ─────────────────────────────────────────────────────────────

export default function WithdrawalCompleteScreen({ navigation, route }) {
  const { application } = route.params || {};

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      <View className="flex-1 items-center justify-center px-[40px]">
        {/* Success Icon */}
        <View className="h-[80px] w-[80px] items-center justify-center rounded-[20px] bg-[#d1fae5] mb-[24px]">
          <CheckCircle size={40} color="#10b981" />
        </View>

        {/* Title */}
        <Text
          className="text-[24px] text-[#1c1a2e] text-center"
          style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
        >
          Application Withdrawn
        </Text>

        {/* Description */}
        <Text
          className="mt-[12px] text-[16px] text-[#8a88a8] text-center leading-[24px]"
          style={{ fontFamily: "PlusJakartaSans_500Medium" }}
        >
          Your application for {application?.position || "Senior Product Designer"} at {application?.company || "Figma"} has been successfully withdrawn.
        </Text>

        {/* Thank you message */}
        <Text
          className="mt-[16px] text-[14px] text-[#4a4868] text-center leading-[20px]"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          Thank you for your feedback. It helps us improve the application process for everyone.
        </Text>

        {/* Actions */}
        <View className="mt-[40px] w-full gap-y-[12px]">
          <TouchableOpacity
            className="rounded-[12px] bg-[#0d5c63] py-[16px]"
            onPress={() => navigation.navigate("HomeFeed")}
          >
            <View className="flex-row items-center justify-center">
              <Home size={20} color="#ffffff" />
              <Text
                className="ml-[8px] text-[16px] text-[#ffffff]"
                style={{ fontFamily: "PlusJakartaSans_700Bold" }}
              >
                Back to Home
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="rounded-[12px] bg-[#f3efe9] py-[16px]"
            onPress={() => navigation.navigate("Search")}
          >
            <View className="flex-row items-center justify-center">
              <Search size={20} color="#8a88a8" />
              <Text
                className="ml-[8px] text-[16px] text-[#8a88a8]"
                style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
              >
                Find New Jobs
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
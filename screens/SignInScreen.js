import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Briefcase, Check } from "lucide-react-native";
import AppStatusBar from "../components/AppStatusBar";

export default function SignInScreen({ navigation }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [keepSignedIn, setKeepSignedIn] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-[#F9F5F0]">
      {/* Figma: Status Bar */}
      <AppStatusBar />
      
      <View className="flex-1 px-[20px] pb-[35px] pt-[12px]">
        {/* Figma: Group 26 - Logo + Heading */}
        <View className="items-center">
          {/* Figma: Group 31 - Logo Container */}
          <View className="h-[64px] w-[64px] items-center justify-center rounded-[20px] bg-[#0D5C63]">
            {/* Figma: BriefcaseIcon */}
            <Briefcase size={30} color="#FFFFFF" strokeWidth={2} />
          </View>
          <Text
            className="mt-[18px] text-[26px] tracking-[-0.3px] leading-[22.5px] text-[#000000]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
          >
            Welcome back
          </Text>
          <Text
            className="mt-[15px] text-[14px] leading-[21px] text-[#8A88A8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            Sign in to your HireFlow account
          </Text>
        </View>

        {/* Figma: Group 28 - Input Fields Container */}
        <View className="mt-[27px] gap-y-[14px]">
          {/* Figma: Group 27 - Email Input */}
          <View>
            <Text
              className="mb-[10px] text-[13px] leading-[22.4px] text-[#4A4868]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              Email Address
            </Text>
            {/* Figma: Group 23 - Input Field */}
            <View
              className="h-[52px] flex-row items-center rounded-[14px] bg-[#FFFFFF] px-[18px]"
              style={{ borderWidth: 1, borderColor: "#0D5C63" }}
            >
              <TextInput
                className="flex-1 text-[15px] leading-[21px] text-[#4A4868]"
                style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                value={form.email}
                onChangeText={(email) => setForm((prev) => ({ ...prev, email }))}
                placeholder="lucy@example.com"
                placeholderTextColor="#4A4868"
              />
            </View>
          </View>
          
          {/* Figma: Group 23 - Password Input */}
          <View>
            <View className="flex-row items-center justify-between mb-[10px]">
              <Text
                className="text-[13px] leading-[22.4px] text-[#4A4868]"
                style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
              >
                Password
              </Text>
              <Text
                className="text-[13px] leading-[22.4px] text-[#0D5C63]"
                style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
              >
                Forgot password?
              </Text>
            </View>
            {/* Figma: Group 23 - Input Field */}
            <View
              className="h-[52px] flex-row items-center rounded-[14px] bg-[#FFFFFF] px-[18px]"
              style={{ borderWidth: 1, borderColor: "#0D5C6312" }}
            >
              <TextInput
                className="flex-1 text-[14px] leading-[21px] text-[#8A88A8]"
                style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                value={form.password}
                onChangeText={(password) => setForm((prev) => ({ ...prev, password }))}
                placeholder="••••••••••••"
                placeholderTextColor="#8A88A8"
                secureTextEntry
              />
            </View>
          </View>
        </View>

        {/* Figma: Group 32 - Keep Signed In Checkbox */}
        <TouchableOpacity
          className="mt-[14px] flex-row items-center"
          activeOpacity={0.8}
          onPress={() => setKeepSignedIn((v) => !v)}
        >
          {/* Figma: Group 30 - Checkbox */}
          <View
            className="h-[20px] w-[20px] items-center justify-center rounded-[4px]"
            style={{
              backgroundColor: keepSignedIn ? "#0D5C63" : "#FFFFFF",
              borderWidth: keepSignedIn ? 0 : 1,
              borderColor: "#0D5C6340",
            }}
          >
            {keepSignedIn && <Check size={12} color="#FFFFFF" />}
          </View>
          <Text
            className="ml-[9px] text-[13px] tracking-[-0.2px] leading-[22.5px] text-[#4A4868]"
            style={{ fontFamily: "PlusJakartaSans_500Medium" }}
          >
            Keep me signed in
          </Text>
        </TouchableOpacity>

        {/* Figma: Group 29 - Footer Buttons */}
        <View className="mt-auto">
          {/* Figma: Group 470 - Sign In Button */}
          <TouchableOpacity
            className="h-[55px] items-center justify-center rounded-[14px] bg-[#0D5C63]"
            activeOpacity={0.9}
            onPress={() => navigation.navigate("HomeFeed")}
          >
            <Text
              className="text-[16px] tracking-[-0.2px] leading-[22.5px] text-[#FFFFFF]"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              Sign In
            </Text>
          </TouchableOpacity>

          {/* Figma: Create Account Link Text */}
          <View className="mt-[18px] flex-row items-center justify-center">
            <Text
              className="text-[13px] tracking-[-0.2px] leading-[22.5px] text-[#8A88A8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              New to HireFlow?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.replace("SignUp")}>
              <Text
                className="text-[13px] tracking-[-0.2px] leading-[22.5px] text-[#0D5C63]"
                style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
              >
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

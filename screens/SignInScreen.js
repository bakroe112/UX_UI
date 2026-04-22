import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Brain, Check } from "lucide-react-native";
import AppStatusBar from "../components/AppStatusBar";
import AuthInput from "../components/AuthInput";

export default function SignInScreen({ navigation }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [keepSignedIn, setKeepSignedIn] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-[#F9F5F0]">
      <AppStatusBar />
      <View className="flex-1 px-[20px] pb-[35px] pt-[12px]">
        {/* Logo + heading */}
        <View className="items-center">
          <View className="h-[64px] w-[64px] items-center justify-center rounded-[20px] bg-[#0D5C63]">
            <Brain size={30} color="#FFFFFF" />
          </View>
          <Text
            className="mt-[18px] text-[26px] tracking-[-0.3px] leading-[34px] text-[#000000]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
          >
            Welcome back
          </Text>
          <Text
            className="mt-[8px] text-[14px] leading-[21px] text-[#8A88A8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            Sign in to your QuizFlow account
          </Text>
        </View>

        {/* Inputs */}
        <View className="mt-[27px] gap-y-[14px]">
          <AuthInput
            label="Email Address"
            value={form.email}
            onChangeText={(email) => setForm((prev) => ({ ...prev, email }))}
            placeholder="you@example.com"
          />
          <AuthInput
            label="Password"
            rightLabel="Forgot password?"
            value={form.password}
            onChangeText={(password) => setForm((prev) => ({ ...prev, password }))}
            placeholder="Your password"
            icon="lock"
            secure
          />
        </View>

        {/* Keep signed in */}
        <TouchableOpacity
          className="mt-[14px] flex-row items-center"
          activeOpacity={0.8}
          onPress={() => setKeepSignedIn((v) => !v)}
        >
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

        {/* Footer */}
        <View className="mt-auto">
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

          <View className="mt-[18px] flex-row items-center justify-center">
            <Text
              className="text-[13px] tracking-[-0.2px] leading-[22.5px] text-[#8A88A8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              New to QuizFlow?{" "}
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

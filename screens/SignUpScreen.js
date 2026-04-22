import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Check, ChevronDown } from "lucide-react-native";
import AppStatusBar from "../components/AppStatusBar";
import AuthInput from "../components/AuthInput";

const ROLES = ["Candidate", "Recruiter"];

export default function SignUpScreen({ navigation }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [roleOpen, setRoleOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Candidate");

  return (
    <SafeAreaView className="flex-1 bg-[#F9F5F0]">
      <AppStatusBar />
      <View className="flex-1 px-[20px] pb-[35px] pt-[21px]">
        {/* Header */}
        <Text
          className="text-[28px] tracking-[-0.3px] leading-[34px] text-[#000000]"
          style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
        >
          Create Account
        </Text>
        <Text
          className="mt-[10px] text-[14px] leading-[22.4px] text-[#8A88A8]"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          Join 500K+ players and start your quiz journey
        </Text>

        {/* Form */}
        <View className="mt-[28px] gap-y-[14px]">
          <AuthInput
            label="Display Name"
            value={form.name}
            onChangeText={(name) => setForm((prev) => ({ ...prev, name }))}
            placeholder="e.g. QuizMaster99"
          />
          <AuthInput
            label="Email Address"
            value={form.email}
            onChangeText={(email) => setForm((prev) => ({ ...prev, email }))}
            placeholder="you@example.com"
          />

          {/* Choose Role picker */}
          <View className="w-full">
            <Text
              className="mb-[10px] text-[13px] leading-[22.4px] text-[#4A4868]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              Choose Role
            </Text>
            <TouchableOpacity
              className="h-[52px] flex-row items-center justify-between rounded-[14px] bg-[#FFFFFF] px-[18px]"
              style={{ borderWidth: 1, borderColor: "#0D5C6312" }}
              activeOpacity={0.8}
              onPress={() => setRoleOpen((v) => !v)}
            >
              <Text
                className="text-[15px] leading-[21px] text-[#4A4868]"
                style={{ fontFamily: "PlusJakartaSans_400Regular" }}
              >
                {selectedRole}
              </Text>
              <ChevronDown size={20} color="#1C1A2EAB" />
            </TouchableOpacity>

            {roleOpen && (
              <View
                className="mt-[4px] rounded-[14px] bg-[#FFFFFF] overflow-hidden"
                style={{ borderWidth: 1, borderColor: "#0D5C6312" }}
              >
                {ROLES.map((role) => (
                  <TouchableOpacity
                    key={role}
                    className="h-[44px] flex-row items-center justify-between px-[18px]"
                    style={{
                      borderBottomWidth: role !== ROLES[ROLES.length - 1] ? 1 : 0,
                      borderBottomColor: "#0D5C630A",
                    }}
                    onPress={() => {
                      setSelectedRole(role);
                      setRoleOpen(false);
                    }}
                  >
                    <Text
                      className="text-[14px] text-[#4A4868]"
                      style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                    >
                      {role}
                    </Text>
                    {selectedRole === role && (
                      <Check size={14} color="#0D5C63" />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <AuthInput
            label="Password"
            value={form.password}
            onChangeText={(password) => setForm((prev) => ({ ...prev, password }))}
            placeholder="Min. 8 characters"
            icon="lock"
            secure
          />

          {/* Terms */}
          <TouchableOpacity
            className="mt-[2px] flex-row items-center"
            activeOpacity={0.8}
            onPress={() => setAgreed((v) => !v)}
          >
            <View
              className="h-[20px] w-[20px] items-center justify-center rounded-[4px]"
              style={{ backgroundColor: agreed ? "#0D5C63" : "#FFFFFF", borderWidth: agreed ? 0 : 1, borderColor: "#0D5C6340" }}
            >
              {agreed && <Check size={12} color="#FFFFFF" />}
            </View>
            <Text
              className="ml-[11px] flex-1 text-[12px] leading-[19.2px] text-[#8A88A8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              I agree to QuizFlow's{" "}
              <Text className="text-[#0D5C63]" style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}>
                Terms of Service
              </Text>{" "}
              and{" "}
              <Text className="text-[#0D5C63]" style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}>
                Privacy Policy
              </Text>
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View className="mt-auto">
          <TouchableOpacity
            className="h-[55px] items-center justify-center rounded-[14px] bg-[#0D5C63]"
            activeOpacity={0.9}
            onPress={() => {
              if (selectedRole === "Candidate") {
                navigation.navigate("QuizRole");
              } else {
                navigation.navigate("MainDashboard");
              }
            }}
          >
            <Text
              className="text-[16px] tracking-[-0.2px] leading-[22.5px] text-[#FFFFFF]"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              Create My Account
            </Text>
          </TouchableOpacity>

          <View className="mt-[18px] flex-row items-center justify-center">
            <Text
              className="text-[13px] tracking-[-0.2px] leading-[22.5px] text-[#8A88A8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.replace("SignIn")}>
              <Text
                className="text-[13px] tracking-[-0.2px] leading-[22.5px] text-[#0D5C63]"
                style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

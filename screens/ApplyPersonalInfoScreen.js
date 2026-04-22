import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeft, User, Mail, Phone, Link2, Globe } from "lucide-react-native";

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

export default function ApplyPersonalInfoScreen({ navigation, route }) {
  const { job } = route.params || {};
  const [form, setForm] = useState({
    fullName: "Sarah Johnson",
    email: "",
    phone: "",
    linkedin: "",
    website: "",
  });

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
          <Text
            className="text-[12px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular", letterSpacing: -0.3 }}
          >
            Step 1 of 5
          </Text>
          <Text
            className="text-[14px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_700Bold", letterSpacing: -0.3 }}
          >
            Save
          </Text>
        </View>
        <ProgressBar current={1} />
        <Text
          className="text-[20px] text-[#1a1828] mt-[12px]"
          style={{ fontFamily: "PlusJakartaSans_800ExtraBold", letterSpacing: -0.4 }}
        >
          Personal Information
        </Text>
      </View>

      <ScrollView className="flex-1 px-[20px] pt-[16px]" contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Applying to banner */}
        <View className="rounded-[12px] bg-[#ebf6f7] border border-[#c8e6e8] px-[13px] py-[9px] flex-row items-center mb-[20px]">
          <View className="h-[36px] w-[36px] rounded-[10px] bg-[#0d5c6333] items-center justify-center mr-[10px]">
            <Text className="text-[15px] text-[#0d5c63]" style={{ fontFamily: "PlusJakartaSans_700Bold" }}>
              {job?.company?.[0] ?? "F"}
            </Text>
          </View>
          <Text className="text-[13px] text-[#0d5c63] flex-1" style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}>
            Applying to : {job?.title ?? "Sr.Product Designer"} at {job?.company ?? "Figma"}
          </Text>
        </View>

        {/* Fields */}
        {[
          { label: "Full Name", key: "fullName", icon: <User size={17} color="#0d5c63" />, placeholder: "Sarah Johnson" },
          { label: "Email Address", key: "email", icon: <Mail size={17} color="#8a88a8" />, placeholder: "sarah@email.com" },
          { label: "Phone Number", key: "phone", icon: <Phone size={17} color="#8a88a8" />, placeholder: "+1 (415) 555 - 0192" },
          { label: "LinkedIn URL", key: "linkedin", icon: <Link2 size={17} color="#8a88a8" />, placeholder: "linkedin.com/in/sarahjohnson" },
          { label: "Website", key: "website", icon: <Globe size={17} color="#8a88a8" />, placeholder: "sarahjohnson.design" },
        ].map(({ label, key, icon, placeholder }) => (
          <View key={key} className="mb-[16px]">
            <Text
              className="text-[14px] text-[#4a4868] mb-[8px]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              {label}
            </Text>
            <View
              className="h-[50px] rounded-[10px] bg-[#ffffff] flex-row items-center px-[16px]"
              style={{ borderWidth: key === "fullName" ? 1.5 : 0, borderColor: "#0d5c63" }}
            >
              {icon}
              <TextInput
                className="flex-1 ml-[10px] text-[14px]"
                style={{ fontFamily: "PlusJakartaSans_400Regular", color: key === "fullName" ? "#1a1828" : "#8a88a8" }}
                value={form[key]}
                onChangeText={(v) => setForm((p) => ({ ...p, [key]: v }))}
                placeholder={placeholder}
                placeholderTextColor="#8a88a8"
              />
            </View>
          </View>
        ))}

        <TouchableOpacity
          className="h-[49px] rounded-[13px] bg-[#0d5c63] items-center justify-center mt-[8px]"
          onPress={() => navigation.navigate("ApplyExperience", { job })}
        >
          <Text className="text-[15px] text-[#ffffff]" style={{ fontFamily: "PlusJakartaSans_700Bold" }}>
            Next : Work Experience →
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

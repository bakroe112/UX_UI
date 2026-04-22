import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ChevronLeft,
  Bookmark,
  Upload,
  Building2,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react-native";

export default function JobDetailScreen({ navigation, route }) {
  const { job } = route.params || {};
  const [isSaved, setIsSaved] = useState(job?.saved || false);

  if (!job) {
    return (
      <SafeAreaView className="flex-1 bg-[#f9f5f0] items-center justify-center">
        <Text className="text-[16px] text-[#8a88a8]">Job not found</Text>
      </SafeAreaView>
    );
  }

  function toggleSave() {
    setIsSaved(!isSaved);
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* Status Bar */}
      <View className="h-[45px] bg-[#ffffff]" />

      {/* Header */}
      <View className="bg-[#ffffff] px-[21px] py-[17px]">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            className="h-[33px] w-[33px] items-center justify-center rounded-[11px] bg-[#f3efe9]"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeft size={18} color="#4a4868" />
          </TouchableOpacity>

          <View className="flex-row items-center gap-x-[6px]">
            <TouchableOpacity
              className="h-[33px] w-[33px] items-center justify-center rounded-[11px] bg-[#f3efe9]"
              onPress={toggleSave}
            >
              <Bookmark
                size={16}
                color="#4a4868"
                fill={isSaved ? "#4a4868" : "transparent"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="h-[33px] w-[33px] items-center justify-center rounded-[11px] bg-[#f3efe9]"
            >
              <Upload size={16} color="#4a4868" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Job Title and Company */}
        <View className="mt-[18px] flex-row items-center">
          <View
            className="h-[57px] w-[60px] items-center justify-center rounded-[18px]"
            style={{ backgroundColor: "#7a618114", borderWidth: 1, borderColor: "#7a618121" }}
          >
            <Building2 size={32} color="#7a6181" />
          </View>
          <View className="ml-[27px] flex-1">
            <Text
              className="text-[20px] text-[#1a1828]"
              style={{ 
                fontFamily: "PlusJakartaSans_800ExtraBold",
                letterSpacing: -0.5,
                lineHeight: 30
              }}
            >
              Sr. Product Designer
            </Text>
            <Text
              className="text-[14px] text-[#8a88a8]"
              style={{ 
                fontFamily: "PlusJakartaSans_400Regular",
                lineHeight: 21
              }}
            >
              Figma · San Francisco · 3 days ago
            </Text>
          </View>
        </View>

        {/* Tags */}
        <View className="mt-[21px] flex-row gap-x-[5px]">
          <View className="rounded-[18px] bg-[#ebf6f7] px-[0px] py-[0px]" style={{ borderWidth: 1, borderColor: "#0d5c6312" }}>
            <Text
              className="px-[20px] py-[6px] text-[13px] text-[#0d5c63]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                lineHeight: 18
              }}
            >
              Remote
            </Text>
          </View>
          <View className="rounded-[18px] bg-[#f3efe9] px-[0px] py-[0px]" style={{ borderWidth: 1, borderColor: "#0d5c6312" }}>
            <Text
              className="px-[20px] py-[6px] text-[13px] text-[#5a5570]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                lineHeight: 18
              }}
            >
              Full-time
            </Text>
          </View>
          <View className="rounded-[18px] bg-[#fff4e5] px-[0px] py-[0px]" style={{ borderWidth: 1, borderColor: "#0d5c6312" }}>
            <Text
              className="px-[20px] py-[6px] text-[13px] text-[#c4892a]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                lineHeight: 18
              }}
            >
              NEW
            </Text>
          </View>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 115, paddingTop: 15, paddingHorizontal: 21 }}
      >
        {/* Salary and Match Score Cards */}
        <View className="mb-[24px] flex-row gap-x-[21px]">
          {/* Salary Card */}
          <View className="flex-1 rounded-[16px] bg-[#ffffff] px-[21px] py-[14px] items-center justify-center">
            <Text
              className="text-[12px] text-[#8a88a8]"
              style={{ 
                fontFamily: "PlusJakartaSans_400Regular",
                lineHeight: 16.5
              }}
            >
              Annual Salary
            </Text>
            <Text
              className="mt-[0px] text-[20px] text-[#0d5c63]"
              style={{ 
                fontFamily: "PlusJakartaSans_800ExtraBold",
                letterSpacing: -0.8,
                lineHeight: 39
              }}
            >
              $140k – $180k
            </Text>
            <View className="mt-[6px] gap-[3px] flex-row items-center justify-center">
              <View className="flex-row items-center">
                <Users size={12} color="#8a88a8" />
                <Text
                  className="ml-[4px] text-[10px] text-[#8a88a8]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_400Regular",
                    lineHeight: 16
                  }}
                >
                  12 applied
                </Text>
              </View>
              <View className="flex-row items-center">
                <Clock size={12} color="#8a88a8" />
                <Text
                  className="ml-[4px] text-[10px] text-[#8a88a8]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_400Regular",
                    lineHeight: 16
                  }}
                >
                  Closes Apr 20
                </Text>
              </View>
            </View>
          </View>

          {/* Match Score Card */}
          <View className="w-[119px] rounded-[16px] bg-[#ebf6f7] px-[13px] py-[12px]" style={{ borderWidth: 1, borderColor: "#c8e6e8" }}>
            <Text
              className="text-[10px] text-[#0d5c63]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                lineHeight: 19
              }}
            >
              Your Match Score
            </Text>
            <View className="mt-[2px] items-center">
              <View className="h-[62px] w-[62px] items-center justify-center">
                {/* Background Circle */}
                <View 
                  className="absolute h-[62px] w-[62px] rounded-full" 
                  style={{ borderWidth: 1, borderColor: "#0d5c631f" }}
                />
                {/* Progress Circle - 96% (approximately 3/4 of circle) */}
                <View 
                  className="absolute h-[62px] w-[62px] rounded-full"
                  style={{ 
                    borderWidth: 6,
                    borderColor: "transparent",
                    borderTopColor: "#0d5c63",
                    borderRightColor: "#0d5c63", 
                    borderBottomColor: "#0d5c63",
                    borderLeftColor: "#0d5c631f",
                    transform: [{ rotate: '135deg' }]
                  }}
                />
                <Text
                  className="text-[15px] text-[#0d5c63]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_800ExtraBold",
                    lineHeight: 22.5
                  }}
                >
                  75%
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* About the Role */}
        <View className="mb-[24px] rounded-[16px] bg-[#ffffff] px-[27px] py-[17px]">
          <Text
            className="mb-[10px] text-[14px] text-[#1a1828]"
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              lineHeight: 21
            }}
          >
            About the Role
          </Text>
          <Text
            className="text-[13px] text-[#4a4868]"
            style={{ 
              fontFamily: "PlusJakartaSans_400Regular",
              lineHeight: 23.4
            }}
          >
            We're looking for a passionate Senior Product Designer to join our Design Systems team. You'll shape the visual language used by millions of designers worldwide, collaborating closely with engineering and product teams to create cohesive, accessible experiences...
          </Text>
        </View>

        {/* Requirements */}
        <View className="mb-[24px] rounded-[16px] bg-[#ffffff] px-[27px] py-[22px]">
          <Text
            className="mb-[10px] text-[14px] text-[#1a1828]"
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              lineHeight: 21
            }}
          >
            Requirements
          </Text>
          <View className="gap-y-[9px]">
            <View className="flex-row items-center">
              <CheckCircle size={16} color="#0d5c63" />
              <Text
                className="ml-[10px] text-[13px] text-[#4a4868]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 20.8
                }}
              >
                5+ years product design experience
              </Text>
            </View>
            <View className="flex-row items-center">
              <CheckCircle size={16} color="#0d5c63" />
              <Text
                className="ml-[10px] text-[13px] text-[#4a4868]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 20.8
                }}
              >
                Expert-level Figma proficiency
              </Text>
            </View>
            <View className="flex-row items-center">
              <CheckCircle size={16} color="#0d5c63" />
              <Text
                className="ml-[10px] text-[13px] text-[#4a4868]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 20.8
                }}
              >
                Design systems experience at scale
              </Text>
            </View>
            <View className="flex-row items-center">
              <CheckCircle size={16} color="#0d5c63" />
              <Text
                className="ml-[10px] text-[13px] text-[#4a4868]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 20.8
                }}
              >
                Strong cross-functional collaboration
              </Text>
            </View>
            <View className="flex-row items-center">
              <CheckCircle size={16} color="#0d5c63" />
              <Text
                className="ml-[10px] text-[13px] text-[#4a4868]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 20.8
                }}
              >
                Portfolio demonstrating end-to-end design
              </Text>
            </View>
          </View>
        </View>

        {/* Company Card */}
        <TouchableOpacity 
          className="rounded-[10px] bg-[#ebf6f7] px-[17px] py-[10px]"
          style={{ borderWidth: 1, borderColor: "#0d5c63" }}
          onPress={() => navigation.navigate("CompanyDetail", { company: "Figma" })}
        >
          <View className="flex-row items-center">
            <View
              className="h-[40px] w-[40px] items-center justify-center rounded-[8px]"
              style={{ backgroundColor: "#7a618114", borderWidth: 1, borderColor: "#7a618121" }}
            >
              <Building2 size={20} color="#7a6181" />
            </View>
            <View className="ml-[12px] flex-1">
              <Text
                className="text-[14px] text-[#1a1828]"
                style={{ 
                  fontFamily: "PlusJakartaSans_700Bold",
                  lineHeight: 21
                }}
              >
                Figma
              </Text>
              <Text
                className="text-[11px] text-[#1a18288f]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 21
                }}
              >
                view company details
              </Text>
            </View>
            <ArrowRight size={20} color="#0d5c63" />
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Apply Button */}
      <View
        className="absolute bottom-0 left-0 right-0 bg-[#ffffff] px-[21px] py-[20px]"
        style={{ borderTopWidth: 1, borderTopColor: "#0d5c6312" }}
      >
        <TouchableOpacity
          className="h-[55px] items-center justify-center rounded-[14px] bg-[#0d5c63]"
          onPress={() => navigation.navigate("ApplyPersonalInfo", { job })}
        >
          <Text
            className="text-[15px] text-[#ffffff]"
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              lineHeight: 22.5
            }}
          >
            Quick Apply
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
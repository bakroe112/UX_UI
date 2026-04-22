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
  CheckCircle,
  ChevronRight,
  Plus,
} from "lucide-react-native";

const CATEGORIES = [
  { id: "all", label: "All", active: true },
  { id: "product", label: "Product", active: false },
  { id: "system", label: "System", active: false },
  { id: "research", label: "Research", active: false },
];

export default function ResumeBuilderScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* Status Bar */}
      <View className="h-[47px] bg-[#ffffff]" />

      {/* Header */}
      <View className="bg-[#ffffff] px-[20px] py-[7.25px]">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <TouchableOpacity
              className="h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f3efe9]"
              onPress={() => navigation.goBack()}
            >
              <ChevronLeft size={12} color="#4a4868" />
            </TouchableOpacity>
            <Text
              className="ml-[11px] text-[17px] text-[#1a1828]"
              style={{ 
                fontFamily: "PlusJakartaSans_800ExtraBold",
                lineHeight: 25.5
              }}
            >
              Resume Builder
            </Text>
          </View>
          <TouchableOpacity className="rounded-[10px] bg-[#0d5c63] px-[16px] py-[8px]">
            <Text
              className="text-[13px] text-[#ffffff]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                lineHeight: 19.5
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>

        {/* Category Filters */}
        <View className="mt-[8px] flex-row gap-x-[20px]">
          {CATEGORIES.map((category) => (
            <TouchableOpacity
              key={category.id}
              className={`rounded-[16px] px-[16px] py-[8px] ${
                activeCategory === category.id
                  ? "bg-[#0d5c63]"
                  : "bg-[#f3efe9]"
              }`}
              style={
                activeCategory !== category.id
                  ? { borderWidth: 1, borderColor: "#0d5c6312" }
                  : {}
              }
              onPress={() => setActiveCategory(category.id)}
            >
              <Text
                className={`text-[13px] ${
                  activeCategory === category.id ? "text-[#ffffff]" : "text-[#4a4868]"
                }`}
                style={{ 
                  fontFamily: "PlusJakartaSans_600SemiBold",
                  lineHeight: 19.5
                }}
              >
                {category.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 20, paddingHorizontal: 20 }}
      >
        {/* Resume Preview Card */}
        <View className="mb-[25px] rounded-[12px] bg-[#ffffff] px-[27px] py-[20px]" style={{ borderWidth: 1, borderColor: "#0d5c63" }}>
          {/* Header */}
          <View className="mb-[15px]">
            <Text
              className="text-[18px] text-[#1a1828]"
              style={{ 
                fontFamily: "PlusJakartaSans_800ExtraBold",
                lineHeight: 27
              }}
            >
              Sarah Johnson
            </Text>
            <Text
              className="text-[12px] text-[#0d5c63]"
              style={{ 
                fontFamily: "PlusJakartaSans_600SemiBold",
                lineHeight: 18
              }}
            >
              Senior Product Designer
            </Text>
            <Text
              className="text-[10px] text-[#8a88a8]"
              style={{ 
                fontFamily: "PlusJakartaSans_400Regular",
                lineHeight: 15
              }}
            >
              SF, CA · sarah@email.com · linkedin · sarahjohnson.design
            </Text>
          </View>

          {/* Experience Section */}
          <View className="mb-[11px]">
            <Text
              className="mb-[4px] text-[8px] text-[#0d5c63]"
              style={{ 
                fontFamily: "PlusJakartaSans_800ExtraBold",
                letterSpacing: 1,
                lineHeight: 12
              }}
            >
              EXPERIENCE
            </Text>
            <View className="gap-y-[5px]">
              <View className="h-[3px] rounded-[10px] bg-[#ebf6f7]" />
              <View className="h-[3px] w-[233px] rounded-[10px] bg-[#f3efe9]" />
              <View className="h-[3px] w-[206px] rounded-[10px] bg-[#f3efe9]" />
            </View>
          </View>

          {/* Education Section */}
          <View className="mb-[11px]">
            <Text
              className="mb-[4px] text-[8px] text-[#0d5c63]"
              style={{ 
                fontFamily: "PlusJakartaSans_800ExtraBold",
                letterSpacing: 1,
                lineHeight: 12
              }}
            >
              EDUCATION
            </Text>
            <View className="gap-y-[5px]">
              <View className="h-[3px] rounded-[10px] bg-[#ebf6f7]" />
              <View className="h-[3px] w-[233px] rounded-[10px] bg-[#f3efe9]" />
              <View className="h-[3px] w-[206px] rounded-[10px] bg-[#f3efe9]" />
            </View>
          </View>

          {/* Skills Section */}
          <View>
            <Text
              className="mb-[4px] text-[8px] text-[#0d5c63]"
              style={{ 
                fontFamily: "PlusJakartaSans_800ExtraBold",
                letterSpacing: 1,
                lineHeight: 12
              }}
            >
              SKILLS
            </Text>
            <View className="gap-y-[5px]">
              <View className="h-[3px] rounded-[10px] bg-[#ebf6f7]" />
              <View className="h-[3px] w-[233px] rounded-[10px] bg-[#f3efe9]" />
              <View className="h-[3px] w-[206px] rounded-[10px] bg-[#f3efe9]" />
            </View>
          </View>
        </View>

        {/* ATS Score Card */}
        <View className="mb-[25px] rounded-[12px] bg-[#ffffff] px-[14px] py-[14px]">
          <View className="flex-row items-center">
            <View className="h-[44px] w-[44px] items-center justify-center rounded-[10px] bg-[#f0fdf4]">
              <CheckCircle size={14} color="#16a34a" />
            </View>
            <View className="ml-[12px] flex-1">
              <Text
                className="text-[14px] text-[#000000]"
                style={{ 
                  fontFamily: "PlusJakartaSans_700Bold",
                  lineHeight: 21
                }}
              >
                ATS Score: 94/100
              </Text>
              <Text
                className="text-[11px] text-[#8a88a8]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 16.5
                }}
              >
                Excellent - Optimized for applicant tracking
              </Text>
            </View>
            <ChevronRight size={12} color="#0d5c63" />
          </View>
        </View>

        {/* Resume Sections */}
        <View className="gap-y-[14px]">
          {/* Work Experience */}
          <TouchableOpacity className="rounded-[12px] bg-[#ffffff] px-[11px] py-[14px]">
            <View className="flex-row items-center">
              <View className="h-[32px] w-[32px] items-center justify-center rounded-[7px] bg-[#f0fdf4]">
                <CheckCircle size={12} color="#16a34a" />
              </View>
              <Text
                className="ml-[10px] flex-1 text-[13px] text-[#1a1828]"
                style={{ 
                  fontFamily: "PlusJakartaSans_600SemiBold",
                  lineHeight: 19.5
                }}
              >
                Work Experience
              </Text>
              <ChevronRight size={12} color="#8a88a8" />
            </View>
          </TouchableOpacity>

          {/* Education */}
          <TouchableOpacity className="rounded-[12px] bg-[#ffffff] px-[11px] py-[14px]">
            <View className="flex-row items-center">
              <View className="h-[32px] w-[32px] items-center justify-center rounded-[7px] bg-[#f0fdf4]">
                <CheckCircle size={12} color="#16a34a" />
              </View>
              <Text
                className="ml-[10px] flex-1 text-[13px] text-[#1a1828]"
                style={{ 
                  fontFamily: "PlusJakartaSans_600SemiBold",
                  lineHeight: 19.5
                }}
              >
                Education
              </Text>
              <ChevronRight size={12} color="#8a88a8" />
            </View>
          </TouchableOpacity>

          {/* Skill & Expertise */}
          <TouchableOpacity className="rounded-[12px] bg-[#ffffff] px-[11px] py-[14px]">
            <View className="flex-row items-center">
              <View className="h-[32px] w-[32px] items-center justify-center rounded-[7px] bg-[#f0fdf4]">
                <CheckCircle size={12} color="#16a34a" />
              </View>
              <Text
                className="ml-[10px] flex-1 text-[13px] text-[#1a1828]"
                style={{ 
                  fontFamily: "PlusJakartaSans_600SemiBold",
                  lineHeight: 19.5
                }}
              >
                Skill & Expertise
              </Text>
              <ChevronRight size={12} color="#8a88a8" />
            </View>
          </TouchableOpacity>

          {/* Projects & Portfolio */}
          <TouchableOpacity className="rounded-[12px] bg-[#ffffff] px-[11px] py-[14px]">
            <View className="flex-row items-center">
              <View className="h-[32px] w-[32px] items-center justify-center rounded-[7px] bg-[#f3efe9]">
                <Plus size={14} color="#8a88a8" />
              </View>
              <Text
                className="ml-[10px] flex-1 text-[13px] text-[#8a88a8]"
                style={{ 
                  fontFamily: "PlusJakartaSans_600SemiBold",
                  lineHeight: 19.5
                }}
              >
                Projects & Portfolio
              </Text>
              <ChevronRight size={12} color="#8a88a8" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
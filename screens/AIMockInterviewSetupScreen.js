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
  Bot,
  ChevronDown,
  CircleAlert,
  Mic,
  Clock,
  Target,
} from "lucide-react-native";

export default function AIMockInterviewSetupScreen({ navigation }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState("Medium");
  const [selectedRole, setSelectedRole] = useState("Designer Figma");
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  const roles = [
    "Designer Figma",
    "Frontend Developer",
    "Backend Developer",
    "Product Manager",
    "Data Scientist"
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* Status Bar */}
      <View className="h-[45px] bg-[#ffffff]" />

      {/* Header */}
      <View className="h-[60px] bg-[#0d5c63] px-[20px] py-[10px] flex-row items-center">
        <TouchableOpacity
          className="h-[33.4px] w-[33.4px] rounded-[11px] bg-[#ffffff26] items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={17.58} color="#ffffff" />
        </TouchableOpacity>
        
        <View className="flex-1 ml-[14px]">
          <Text
            className="text-[16px] text-[#ffffff]"
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              lineHeight: 22.5
            }}
          >
            AI Mock Interview
          </Text>
        </View>
      </View>

      <ScrollView 
        className="flex-1" 
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 38, paddingBottom: 38 }}
        showsVerticalScrollIndicator={false}
      >
        {/* AI Avatar Section */}
        <View className="items-center mb-[38px]">
          <View className="h-[100px] w-[100px] rounded-full bg-[#0d5c63] items-center justify-center mb-[31px]">
            <Bot size={50} color="#ffffff" />
          </View>
          
          <Text
            className="text-[22px] text-[#1c1a2e] text-center mb-[0px]"
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              lineHeight: 39,
              letterSpacing: -0.6
            }}
          >
            Prepare with AI
          </Text>
          
          <Text
            className="text-[14px] text-[#1c1a2e99] text-center"
            style={{ 
              fontFamily: "PlusJakartaSans_400Regular",
              lineHeight: 20
            }}
          >
            Practice with our AI interviewer tuned to real job requirements
          </Text>
        </View>

        {/* Stats Cards */}
        <View className="flex-row justify-between mb-[38px]">
          <View className="h-[62px] w-[110px] rounded-[12px] bg-[#ebf6f7] items-center justify-center">
            <Text
              className="text-[15px] text-[#0d5c63]"
              style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 20 }}
            >
              6
            </Text>
            <Text
              className="text-[11px] text-[#0d5c6399]"
              style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
            >
              Sessions
            </Text>
          </View>
          
          <View className="h-[62px] w-[110px] rounded-[12px] bg-[#ebf6f7] items-center justify-center">
            <Text
              className="text-[15px] text-[#16a34a]"
              style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 20 }}
            >
              67%
            </Text>
            <Text
              className="text-[11px] text-[#0d5c6399]"
              style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
            >
              Avg Score
            </Text>
          </View>
          
          <View className="h-[62px] w-[110px] rounded-[12px] bg-[#ebf6f7] items-center justify-center">
            <Text
              className="text-[15px] text-[#0d5c63]"
              style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 20 }}
            >
              3
            </Text>
            <Text
              className="text-[11px] text-[#0d5c6399]"
              style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
            >
              This week
            </Text>
          </View>
        </View>

        {/* Select Job Role */}
        <View className="mb-[22px]">
          <View className="flex-row items-center mb-[16px]">
            <Text
              className="text-[15px] text-[#1a7a83]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                lineHeight: 25.5
              }}
            >
              Select job role
            </Text>
            <View className="flex-1 h-[1px] bg-[#1a7a835c] ml-[13px]" />
          </View>
          
          <TouchableOpacity
            className="h-[52px] rounded-[14px] bg-[#ffffff] border border-[#0d5c6312] px-[20px] flex-row items-center justify-between"
            onPress={() => setShowRoleDropdown(!showRoleDropdown)}
          >
            <Text
              className="text-[15px] text-[#4a4868]"
              style={{ 
                fontFamily: "PlusJakartaSans_400Regular",
                lineHeight: 21
              }}
            >
              {selectedRole}
            </Text>
            <ChevronDown size={20.06} color="#1c1a2eab" />
          </TouchableOpacity>

          {showRoleDropdown && (
            <View className="mt-[8px] rounded-[14px] bg-[#ffffff] border border-[#0d5c6312] overflow-hidden">
              {roles.map((role, index) => (
                <TouchableOpacity
                  key={index}
                  className="px-[20px] py-[12px] border-b border-[#f0f0f0]"
                  onPress={() => {
                    setSelectedRole(role);
                    setShowRoleDropdown(false);
                  }}
                >
                  <Text
                    className="text-[15px] text-[#4a4868]"
                    style={{ 
                      fontFamily: "PlusJakartaSans_400Regular",
                      lineHeight: 21
                    }}
                  >
                    {role}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Choose Difficulty */}
        <View className="mb-[22px]">
          <View className="flex-row items-center mb-[16px]">
            <Text
              className="text-[15px] text-[#1a7a83]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                lineHeight: 25.5
              }}
            >
              Choose difficulty
            </Text>
            <View className="flex-1 h-[1px] bg-[#1a7a835c] ml-[14px]" />
          </View>
          
          <View className="flex-row justify-between">
            <TouchableOpacity
              className={`h-[67px] w-[110px] rounded-[12px] items-center justify-center ${
                selectedDifficulty === "Easy" ? "bg-[#d0eaec] border border-[#0d5c63]" : "bg-[#ebf6f7]"
              }`}
              onPress={() => setSelectedDifficulty("Easy")}
            >
              <Text
                className="text-[14px] text-[#0d5c63] mb-[3px]"
                style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 20 }}
              >
                Easy
              </Text>
              <Text
                className="text-[11px] text-[#0d5c6399]"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 15 }}
              >
                Basic assessment
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              className={`h-[67px] w-[110px] rounded-[12px] items-center justify-center ${
                selectedDifficulty === "Medium" ? "bg-[#d0eaec] border border-[#0d5c63]" : "bg-[#ebf6f7]"
              }`}
              onPress={() => setSelectedDifficulty("Medium")}
            >
              <Text
                className="text-[14px] text-[#0d5c63] mb-[3px]"
                style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 20 }}
              >
                Medium
              </Text>
              <Text
                className="text-[11px] text-[#0d5c6399]"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 15 }}
              >
                Skill evaluation
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              className={`h-[67px] w-[110px] rounded-[12px] items-center justify-center ${
                selectedDifficulty === "Hard" ? "bg-[#d0eaec] border border-[#0d5c63]" : "bg-[#ebf6f7]"
              }`}
              onPress={() => setSelectedDifficulty("Hard")}
            >
              <Text
                className="text-[14px] text-[#0d5c63] mb-[3px]"
                style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 20 }}
              >
                Hard
              </Text>
              <Text
                className="text-[11px] text-[#0d5c6399]"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 15 }}
              >
                Pressure test
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* How it Works */}
        <View className="rounded-[12px] bg-[#ffffff] p-[16px] mb-[22px]">
          <View className="flex-row items-center mb-[14px]">
            <CircleAlert size={16} color="#7a6181" />
            <Text
              className="text-[14px] text-[#7a6181] ml-[10px]"
              style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 20 }}
            >
              How it Works
            </Text>
          </View>
          
          <View className="gap-y-[14px]">
            <View className="flex-row items-center">
              <Mic size={18} color="#7a6181" />
              <Text
                className="text-[13px] text-[#7a6181] ml-[6px]"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
              >
                Use a microphone or type on the keyboard
              </Text>
            </View>
            
            <View className="flex-row items-center">
              <Clock size={18} color="#7a6181" />
              <Text
                className="text-[13px] text-[#7a6181] ml-[6px]"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
              >
                30-45 minutes per session
              </Text>
            </View>
            
            <View className="flex-row items-center">
              <Target size={18} color="#7a6181" />
              <Text
                className="text-[13px] text-[#7a6181] ml-[6px]"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
              >
                Receive detailed AI feedback after each session
              </Text>
            </View>
          </View>
        </View>

        {/* Start Interview Button */}
        <TouchableOpacity
          className="h-[55px] rounded-[14px] bg-[#0d5c63] items-center justify-center"
          onPress={() => navigation.navigate("AIMockInterviewSession")}
        >
          <Text
            className="text-[16px] text-[#ffffff]"
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              letterSpacing: -0.2,
              lineHeight: 22.5
            }}
          >
            Start Interview
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
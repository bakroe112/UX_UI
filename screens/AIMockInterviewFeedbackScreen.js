import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ChevronLeft,
  Calendar,
  CircleCheckBig,
  Eye,
  FileCheck,
  CircleAlert,
  RefreshCw,
} from "lucide-react-native";

export default function AIMockInterviewFeedbackScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* Status Bar */}
      <View className="h-[45px] bg-[#ffffff]" />

      {/* Header */}
      <View className="h-[60px] bg-[#0d5c63] px-[20px] py-[10px] flex-row items-center">
        <TouchableOpacity
          className="h-[33.4px] w-[33.4px] rounded-[11px] bg-[#ffffff26] items-center justify-center"
          onPress={() => navigation.navigate("Tracker")}
        >
          <ChevronLeft size={17.58} color="#ffffff" />
        </TouchableOpacity>
        
        <View className="flex-1 ml-[14px]">
          <Text
            className="text-[16px] text-[#ffffff]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            Session Feedback
          </Text>
        </View>
      </View>

      <ScrollView className="flex-1 px-[20px] py-[30px]" contentContainerStyle={{ paddingBottom: 40 }}>
        {/* AI Evaluation Complete */}
        <View className="rounded-[16px] bg-[#ebf6f7] border border-[#c8e6e8] p-[24px] mb-[24px] items-center">
          <Text
            className="text-[13px] text-[#0d5c63] mb-[11px]"
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              lineHeight: 19.5
            }}
          >
            AI EVALUATION COMPLETE
          </Text>

          {/* Score Circle */}
          <View className="items-center mb-[11px]">
            <View className="h-[100px] w-[100px] rounded-full border border-[#0d5c631f] bg-[#ffffff] items-center justify-center mb-[11px]">
              <View className="items-center">
                <Text
                  className="text-[26px] text-[#0d5c63]"
                  style={{ fontFamily: "PlusJakartaSans_800ExtraBold", lineHeight: 22.5 }}
                >
                  86
                </Text>
                <Text
                  className="text-[13px] text-[#0d5c6380]"
                  style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 22.5 }}
                >
                  / 100
                </Text>
              </View>
            </View>

            <View className="h-[39px] w-[169px] rounded-[13px] bg-[#d0eaec] border border-[#0d5c631c] items-center justify-center">
              <Text
                className="text-[13px] text-[#0d5c63]"
                style={{ 
                  fontFamily: "PlusJakartaSans_700Bold",
                  lineHeight: 19.5
                }}
              >
                Good Performance
              </Text>
            </View>
          </View>

          {/* Session Stats */}
          <View className="flex-row justify-between w-full">
            <View className="items-center">
              <Text
                className="text-[13px] text-[#0d5c63]"
                style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 19.5 }}
              >
                30 min
              </Text>
              <Text
                className="text-[11px] text-[#0d5c63]"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 19.5 }}
              >
                Duration
              </Text>
            </View>
            
            <View className="items-center">
              <Text
                className="text-[13px] text-[#0d5c63]"
                style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 19.5 }}
              >
                5 / 5
              </Text>
              <Text
                className="text-[11px] text-[#0d5c63]"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 19.5 }}
              >
                Question
              </Text>
            </View>
            
            <View className="items-center">
              <Text
                className="text-[13px] text-[#0d5c63]"
                style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 19.5 }}
              >
                Medium
              </Text>
              <Text
                className="text-[11px] text-[#0d5c63]"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 19.5 }}
              >
                Difficulty
              </Text>
            </View>
          </View>
        </View>

        {/* Evaluation Criteria */}
        <View className="mb-[24px]">
          <View className="flex-row items-center mb-[16px]">
            <Text
              className="text-[15px] text-[#1a7a83]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                lineHeight: 25.5
              }}
            >
              Evaluation Criteria
            </Text>
            <View className="flex-1 h-[1px] bg-[#1a7a835c] ml-[14px]" />
          </View>

          <View className="rounded-[16px] bg-[#ffffff] p-[16px]">
            {/* Communication */}
            <View className="flex-row items-center mb-[16px]">
              <View className="h-[34px] w-[34px] rounded-[10px] bg-[#f0fdf4] border border-[#0d5c633d] items-center justify-center">
                <Calendar size={16} color="#0d5c63" />
              </View>
              
              <View className="flex-1 ml-[10px]">
                <View className="flex-row items-center justify-between mb-[10px]">
                  <Text
                    className="text-[13px] text-[#1c1a2e]"
                    style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
                  >
                    Communication
                  </Text>
                  <Text
                    className="text-[14px] text-[#0d5c63]"
                    style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 20 }}
                  >
                    89%
                  </Text>
                </View>
                <View className="h-[1px] bg-[#0d5c634d] relative">
                  <View className="h-[1px] w-[85%] bg-[#0d5c63] absolute" />
                </View>
              </View>
            </View>

            {/* Technical Knowledge */}
            <View className="flex-row items-center mb-[16px]">
              <View className="h-[34px] w-[34px] rounded-[10px] bg-[#fafcff] border border-[#3b82f63d] items-center justify-center">
                <CircleCheckBig size={16} color="#3b82f6" />
              </View>
              
              <View className="flex-1 ml-[10px]">
                <View className="flex-row items-center justify-between mb-[10px]">
                  <Text
                    className="text-[13px] text-[#1c1a2e]"
                    style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
                  >
                    Technical Knowledge
                  </Text>
                  <Text
                    className="text-[14px] text-[#3b82f6]"
                    style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 20 }}
                  >
                    73%
                  </Text>
                </View>
                <View className="h-[1px] bg-[#3b82f64d] relative">
                  <View className="h-[1px] w-[73%] bg-[#3b82f6] absolute" />
                </View>
              </View>
            </View>

            {/* Structured Answer */}
            <View className="flex-row items-center mb-[16px]">
              <View className="h-[34px] w-[34px] rounded-[10px] bg-[#fef2f2] border border-[#e05b5b3d] items-center justify-center">
                <Eye size={16} color="#e05b5b" />
              </View>
              
              <View className="flex-1 ml-[10px]">
                <View className="flex-row items-center justify-between mb-[10px]">
                  <Text
                    className="text-[13px] text-[#1c1a2e]"
                    style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
                  >
                    Structured Answer
                  </Text>
                  <Text
                    className="text-[14px] text-[#e05b5b]"
                    style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 20 }}
                  >
                    90%
                  </Text>
                </View>
                <View className="h-[1px] bg-[#e05b5b4d] relative">
                  <View className="h-[1px] w-[90%] bg-[#e05b5b] absolute" />
                </View>
              </View>
            </View>

            {/* Confidence */}
            <View className="flex-row items-center">
              <View className="h-[34px] w-[34px] rounded-[10px] bg-[#fdf8ee] border border-[#e2b0533d] items-center justify-center">
                <FileCheck size={16} color="#e2b053" />
              </View>
              
              <View className="flex-1 ml-[10px]">
                <View className="flex-row items-center justify-between mb-[10px]">
                  <Text
                    className="text-[13px] text-[#1c1a2e]"
                    style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
                  >
                    Confidence
                  </Text>
                  <Text
                    className="text-[14px] text-[#e2b053]"
                    style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 20 }}
                  >
                    83%
                  </Text>
                </View>
                <View className="h-[1px] bg-[#e2b0534d] relative">
                  <View className="h-[1px] w-[83%] bg-[#e2b053] absolute" />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Strengths */}
        <View className="mb-[24px]">
          <View className="flex-row items-center mb-[16px]">
            <Text
              className="text-[15px] text-[#1a7a83]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                lineHeight: 25.5
              }}
            >
              Strengths
            </Text>
            <View className="flex-1 h-[1px] bg-[#1a7a835c] ml-[14px]" />
          </View>

          <View className="gap-y-[10px]">
            <View className="rounded-[16px] bg-[#f0fdf4] border border-[#4caf5066] p-[16px] flex-row items-center">
              <CircleCheckBig size={15.93} color="#16a34a" />
              <Text
                className="text-[13px] text-[#1c1a2ecc] ml-[10px] flex-1"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
              >
                Clearly articulated trade-offs between distributed training approaches
              </Text>
            </View>
            
            <View className="rounded-[13px] bg-[#f0fdf4] border border-[#4caf5066] p-[16px] flex-row items-center">
              <CircleCheckBig size={13.96} color="#16a34a" />
              <Text
                className="text-[13px] text-[#1c1a2ecc] ml-[10px] flex-1"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
              >
                Strong use of concrete metrics in system design
              </Text>
            </View>
            
            <View className="rounded-[13px] bg-[#f0fdf4] border border-[#4caf5066] p-[16px] flex-row items-center">
              <CircleCheckBig size={13.96} color="#16a34a" />
              <Text
                className="text-[13px] text-[#1c1a2ecc] ml-[10px] flex-1"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
              >
                Confident delivery with minimal filler words
              </Text>
            </View>
          </View>
        </View>

        {/* Improvements */}
        <View className="mb-[24px]">
          <View className="flex-row items-center mb-[16px]">
            <Text
              className="text-[15px] text-[#1a7a83]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                lineHeight: 25.5
              }}
            >
              Improvements
            </Text>
            <View className="flex-1 h-[1px] bg-[#1a7a835c] ml-[14px]" />
          </View>

          <View className="gap-y-[10px]">
            <View className="rounded-[16px] bg-[#fdf8ee] border border-[#e2b05366] p-[16px] flex-row items-center">
              <CircleAlert size={16} color="#e2b053" />
              <Text
                className="text-[13px] text-[#1c1a2ecc] ml-[10px] flex-1"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
              >
                Deeper dive needed on fault tolerance mechanisms
              </Text>
            </View>
            
            <View className="rounded-[16px] bg-[#fdf8ee] border border-[#e2b05366] p-[16px] flex-row items-center">
              <CircleAlert size={16} color="#e2b053" />
              <Text
                className="text-[13px] text-[#1c1a2ecc] ml-[10px] flex-1"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
              >
                Behavioral answers lacked specific quantifiable outcomes
              </Text>
            </View>
          </View>
        </View>

        {/* Practice Again Button */}
        <TouchableOpacity
          className="h-[55px] rounded-[14px] bg-[#0d5c63] items-center justify-center flex-row"
          onPress={() => navigation.navigate("AIMockInterviewSetup")}
        >
          <RefreshCw size={18} color="#ffffff" />
          <Text
            className="text-[16px] text-[#ffffff] ml-[8px]"
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              letterSpacing: -0.2,
              lineHeight: 22.5
            }}
          >
            Practice Again
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
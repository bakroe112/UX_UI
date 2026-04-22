import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import {
  ChevronLeft,
  AlertCircle,
  CheckCircle,
} from "lucide-react-native";

// ─── DATA ────────────────────────────────────────────────────────────────────

const WITHDRAWAL_REASONS = [
  { id: "accepted", label: "Accepted another offer" },
  { id: "salary", label: "Salary expectations not met" },
  { id: "location", label: "Location/remote work concerns" },
  { id: "culture", label: "Company culture mismatch" },
  { id: "timeline", label: "Process taking too long" },
  { id: "personal", label: "Personal circumstances" },
  { id: "other", label: "Other" },
];

// ─── MAIN SCREEN ─────────────────────────────────────────────────────────────

export default function WithdrawalFeedbackScreen({ navigation, route }) {
  const { application } = route.params || {};
  const [selectedReason, setSelectedReason] = useState("");
  const [feedback, setFeedback] = useState("");

  function handleWithdraw() {
    if (selectedReason) {
      navigation.navigate("WithdrawalComplete", { 
        application,
        reason: selectedReason,
        feedback 
      });
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* ── HEADER ── */}
      <View className="bg-[#ffffff] px-[20px] pb-[12px] pt-[45px]">
        <View className="flex-row items-center">
          <TouchableOpacity
            className="h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f3efe9]"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeft size={20} color="#4a4868" />
          </TouchableOpacity>
          
          <View className="ml-[12px] flex-1">
            <Text
              className="text-[18px] text-[#1c1a2e]"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              Withdraw Application
            </Text>
            <Text
              className="text-[14px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_500Medium" }}
            >
              Help us improve by sharing your feedback
            </Text>
          </View>
        </View>
      </View>

      <ScrollView 
        className="flex-1" 
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Warning */}
        <View className="mb-[24px] rounded-[12px] bg-[#fef3c7] p-[16px] border border-[#e2b053]">
          <View className="flex-row items-start">
            <AlertCircle size={20} color="#e2b053" />
            <View className="ml-[12px] flex-1">
              <Text
                className="text-[14px] text-[#e2b053]"
                style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
              >
                Are you sure you want to withdraw?
              </Text>
              <Text
                className="mt-[4px] text-[12px] text-[#e2b053]"
                style={{ fontFamily: "PlusJakartaSans_400Regular" }}
              >
                This action cannot be undone. You'll need to reapply if you change your mind.
              </Text>
            </View>
          </View>
        </View>

        {/* Reason Selection */}
        <View className="mb-[24px] rounded-[16px] bg-[#ffffff] p-[20px] shadow-sm border border-[#e5e5e5]">
          <Text
            className="mb-[16px] text-[16px] text-[#1c1a2e]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            Reason for withdrawal
          </Text>
          
          <View className="gap-y-[12px]">
            {WITHDRAWAL_REASONS.map((reason) => (
              <TouchableOpacity
                key={reason.id}
                className="flex-row items-center rounded-[8px] p-[12px] border"
                style={{
                  backgroundColor: selectedReason === reason.id ? "#ebf6f7" : "#f9f5f0",
                  borderColor: selectedReason === reason.id ? "#0d5c63" : "#e5e5e5",
                }}
                onPress={() => setSelectedReason(reason.id)}
              >
                <View
                  className="h-[20px] w-[20px] items-center justify-center rounded-[10px] border-2"
                  style={{
                    borderColor: selectedReason === reason.id ? "#0d5c63" : "#8a88a8",
                    backgroundColor: selectedReason === reason.id ? "#0d5c63" : "transparent",
                  }}
                >
                  {selectedReason === reason.id && (
                    <CheckCircle size={12} color="#ffffff" fill="#ffffff" />
                  )}
                </View>
                <Text
                  className="ml-[12px] text-[14px]"
                  style={{
                    fontFamily: "PlusJakartaSans_500Medium",
                    color: selectedReason === reason.id ? "#0d5c63" : "#1c1a2e",
                  }}
                >
                  {reason.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Additional Feedback */}
        <View className="mb-[24px] rounded-[16px] bg-[#ffffff] p-[20px] shadow-sm border border-[#e5e5e5]">
          <Text
            className="mb-[16px] text-[16px] text-[#1c1a2e]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            Additional feedback (optional)
          </Text>
          
          <TextInput
            className="rounded-[8px] bg-[#f3efe9] p-[12px] text-[14px] text-[#1c1a2e]"
            style={{ 
              fontFamily: "PlusJakartaSans_400Regular",
              minHeight: 100,
              textAlignVertical: "top"
            }}
            placeholder="Share any additional thoughts or suggestions..."
            placeholderTextColor="#8a88a8"
            value={feedback}
            onChangeText={setFeedback}
            multiline
          />
        </View>

        {/* Actions */}
        <View className="gap-y-[12px]">
          <TouchableOpacity
            className="rounded-[12px] py-[16px]"
            style={{
              backgroundColor: selectedReason ? "#ef4444" : "#f3efe9",
            }}
            onPress={handleWithdraw}
            disabled={!selectedReason}
          >
            <Text
              className="text-center text-[16px]"
              style={{
                fontFamily: "PlusJakartaSans_700Bold",
                color: selectedReason ? "#ffffff" : "#8a88a8",
              }}
            >
              Withdraw Application
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            className="rounded-[12px] bg-[#f3efe9] py-[16px]"
            onPress={() => navigation.goBack()}
          >
            <Text
              className="text-center text-[16px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
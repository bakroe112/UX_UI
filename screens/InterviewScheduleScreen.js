import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ArrowLeft,
  Clock,
  Calendar,
  MapPin,
  Video,
} from "lucide-react-native";

// ─── DATA ────────────────────────────────────────────────────────────────────

const AVAILABLE_DATES = [
  { id: "mon7", day: "Mon", date: "7", isSelected: false, isDisabled: false },
  { id: "tue8", day: "Tue", date: "8", isSelected: true, isDisabled: false },
  { id: "wed9", day: "Wed", date: "9", isSelected: false, isDisabled: true },
  { id: "thu10", day: "Thu", date: "10", isSelected: false, isDisabled: false },
  { id: "fri11", day: "Fri", date: "11", isSelected: false, isDisabled: false },
];

const AVAILABLE_TIMES = [
  {
    id: "9am",
    time: "9:00 AM PST",
    details: "Tue, Apr 8 - 60 min - Google Meet",
    isSelected: true,
    isAvailable: true,
  },
  {
    id: "11am",
    time: "11:00 AM PST",
    details: "Tue, Apr 8 - 60 min - Google Meet",
    isSelected: false,
    isAvailable: true,
  },
  {
    id: "3pm",
    time: "3:00 PM PST",
    details: "Tue, Apr 8 - 60 min - Google Meet",
    isSelected: false,
    isAvailable: true,
  },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function StatusBar() {
  return (
    <View className="flex-row items-center justify-between px-[20px] py-[12px] bg-[#ffffff]">
      <Text
        className="text-[15px] text-[#1c1a2e]"
        style={{ 
          fontFamily: "PlusJakartaSans_700Bold",
          letterSpacing: -0.3
        }}
      >
      </Text>
      
      <View className="flex-row items-center gap-x-[5px]">
        {/* Signal Icons */}
        <View className="h-[20px] w-[20px] items-center justify-center">
          {/* Signal icon placeholder */}
        </View>
        <View className="h-[20px] w-[20px] items-center justify-center">
          {/* WiFi icon placeholder */}
        </View>
        <View className="h-[24px] w-[24px] items-center justify-center">
          {/* Battery icon placeholder */}
        </View>
      </View>
    </View>
  );
}

function InterviewHeader({ onBack }) {
  return (
    <View className="bg-[#ffffff] px-[20px] py-[12px]">
      <View className="flex-row items-center">
        <TouchableOpacity
          className="h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f3efe9]"
          onPress={onBack}
        >
          <ArrowLeft size={12} color="#4a4868" />
        </TouchableOpacity>
        
        <View className="ml-[12px] flex-1">
          <Text
            className="text-[18px] text-[#000000]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            Schedule Interview
          </Text>
          <Text
            className="text-[12px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            Figma - Technical Round 2 - 60 min
          </Text>
        </View>
      </View>
    </View>
  );
}

function DateSelector({ dates, onDateSelect }) {
  return (
    <View className="px-[20px] py-[16px]">
      <View className="flex-row justify-between">
        {dates.map((date) => (
          <TouchableOpacity
            key={date.id}
            className={`h-[59px] w-[64px] items-center justify-center rounded-[12px] border ${
              date.isSelected
                ? "bg-[#0d5c63] border-[#0d5c6312]"
                : date.isDisabled
                ? "bg-[#f3efe9] border-[#0d5c6312] opacity-40"
                : "bg-[#f3efe9] border-[#0d5c6312]"
            }`}
            onPress={() => !date.isDisabled && onDateSelect(date.id)}
            disabled={date.isDisabled}
          >
            <Text
              className={`text-[10px] ${
                date.isSelected ? "text-[#ffffffb2]" : "text-[#8a88a8]"
              }`}
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              {date.day}
            </Text>
            <Text
              className={`mt-[4px] text-[16px] ${
                date.isSelected ? "text-[#ffffff]" : "text-[#1a1828]"
              }`}
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              {date.date}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

function AvailableTimesHeader() {
  return (
    <View className="px-[20px] py-[8px]">
      <Text
        className="text-[15px] text-[#1a1828]"
        style={{ fontFamily: "PlusJakartaSans_700Bold" }}
      >
        Available Times - Tue, Apr 8
      </Text>
    </View>
  );
}

function TimeSlot({ timeSlot, onTimeSelect }) {
  return (
    <TouchableOpacity
      className={`mb-[14px] rounded-[16px] p-[12px] ${
        timeSlot.isSelected
          ? "bg-[#ebf6f7] border border-[#0d5c63]"
          : "bg-[#ffffff]"
      }`}
      onPress={() => onTimeSelect(timeSlot.id)}
    >
      <View className="flex-row items-center">
        {/* Time Icon */}
        <View
          className={`h-[40px] w-[40px] items-center justify-center rounded-[12px] ${
            timeSlot.isSelected ? "bg-[#0d5c6320]" : "bg-[#f3efe9]"
          }`}
        >
          <Clock 
            size={15} 
            color={timeSlot.isSelected ? "#0d5c63" : "#8a88a8"} 
          />
        </View>
        
        {/* Time Details */}
        <View className="ml-[17px] flex-1">
          <Text
            className={`text-[16px] ${
              timeSlot.isSelected ? "text-[#0d5c63]" : "text-[#1a1828]"
            }`}
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              lineHeight: 22.5
            }}
          >
            {timeSlot.time}
          </Text>
          <Text
            className="text-[12px] text-[#8a88a8]"
            style={{ 
              fontFamily: "PlusJakartaSans_400Regular",
              lineHeight: 16.5
            }}
          >
            {timeSlot.details}
          </Text>
        </View>
        
        {/* Selection Indicator */}
        {timeSlot.isSelected && (
          <View className="h-[10px] w-[12px]">
            {/* Checkmark placeholder */}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

function TimezoneInfo() {
  return (
    <View className="mx-[20px] mb-[24px] rounded-[12px] bg-[#f3efe9] p-[12px]">
      <View className="flex-row items-center justify-between">
        <Text
          className="text-[13px] text-[#4a4868]"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          Timezone
        </Text>
        <Text
          className="text-[13px] text-[#1a1828]"
          style={{ fontFamily: "PlusJakartaSans_700Bold" }}
        >
          PST ( UTC -8) - Auto - detected
        </Text>
      </View>
    </View>
  );
}

function ConfirmButton({ selectedTime, onConfirm }) {
  return (
    <View className="px-[20px] pb-[20px]">
      <TouchableOpacity
        className="h-[49px] items-center justify-center rounded-[13px] bg-[#0d5c63]"
        onPress={onConfirm}
      >
        <Text
          className="text-[15px] text-[#ffffff]"
          style={{ fontFamily: "PlusJakartaSans_700Bold" }}
        >
          Confirm - Tue Apr 8 at {selectedTime}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// ─── MAIN SCREEN ─────────────────────────────────────────────────────────────

export default function InterviewScheduleScreen({ navigation, route }) {
  const [selectedDate, setSelectedDate] = useState("tue8");
  const [selectedTime, setSelectedTime] = useState("9am");
  const [availableDates, setAvailableDates] = useState(AVAILABLE_DATES);
  const [availableTimes, setAvailableTimes] = useState(AVAILABLE_TIMES);

  // Get interview details from route params if available
  const interviewDetails = route?.params?.interview || {
    company: "Figma",
    position: "Technical Round 2",
    duration: "60 min"
  };

  function handleDateSelect(dateId) {
    setSelectedDate(dateId);
    setAvailableDates(dates =>
      dates.map(date => ({
        ...date,
        isSelected: date.id === dateId
      }))
    );
  }

  function handleTimeSelect(timeId) {
    setSelectedTime(timeId);
    setAvailableTimes(times =>
      times.map(time => ({
        ...time,
        isSelected: time.id === timeId
      }))
    );
  }

  function handleConfirm() {
    const selectedTimeSlot = availableTimes.find(time => time.isSelected);
    const selectedDateInfo = availableDates.find(date => date.isSelected);
    
    // Navigate back or to confirmation screen
    navigation.goBack();
    
    // You can add logic here to save the scheduled interview
    console.log("Interview scheduled:", {
      date: selectedDateInfo,
      time: selectedTimeSlot,
      interview: interviewDetails
    });
  }

  function handleBack() {
    navigation.goBack();
  }

  const selectedTimeSlot = availableTimes.find(time => time.isSelected);

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* Status Bar */}
      <StatusBar />
      
      {/* Header */}
      <InterviewHeader onBack={handleBack} />
      
      {/* Content */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Date Selector */}
        <DateSelector 
          dates={availableDates} 
          onDateSelect={handleDateSelect} 
        />
        
        {/* Available Times Header */}
        <AvailableTimesHeader />
        
        {/* Time Slots */}
        <View className="px-[20px] py-[12px]">
          {availableTimes.map((timeSlot) => (
            <TimeSlot
              key={timeSlot.id}
              timeSlot={timeSlot}
              onTimeSelect={handleTimeSelect}
            />
          ))}
        </View>
        
        {/* Timezone Info */}
        <TimezoneInfo />
      </ScrollView>
      
      {/* Confirm Button */}
      <ConfirmButton 
        selectedTime={selectedTimeSlot?.time || "9:00 AM"}
        onConfirm={handleConfirm}
      />
    </SafeAreaView>
  );
}
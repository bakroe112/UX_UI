import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Backpack, Laptop, Building2, MapPin, X, Search, Navigation } from "lucide-react-native";
import { Check } from "lucide-react-native";
import QuizStepHeader from "../components/QuizStepHeader";

// Extracted from Figma: Quiz: Location
// Frame 56 — 3 work arrangement rows, each h=86, rounded-[16px]
// Selected: border #0d5c63, title #0d5c63 (Remote) or #1c1a2e (Hybrid/On-site)
// Unselected: border #0d5c63 (all selected in Figma), title #1c1a2e
// Group 42 (location card) h=177, rounded-[16px], border #0d5c63
//   Location tags: rounded-[20px] bg #ebf6f7 border #c8e6e8, text #0d5c63
//   Search bar: rounded-[10px] bg #f3efe9
// Group 42 (current location) h=68, rounded-[16px], border #0d5c63
//   Toggle: rounded-[30px] bg #0d5c63, inner circle #ffffff

const ARRANGEMENTS = [
  {
    id: "remote",
    label: "Remote",
    sub: "Work from anywhere",
    icon: Backpack,
    iconColor: "#0d5c63",
    iconBg: "#0d5c6314",
    defaultSelected: true,
  },
  {
    id: "hybrid",
    label: "Hybrid",
    sub: "Mix of Home & office",
    icon: Laptop,
    iconColor: "#4a4868",
    iconBg: "#f3efe9",
    defaultSelected: true,
  },
  {
    id: "onsite",
    label: "On-site",
    sub: "Full-time at office",
    icon: Building2,
    iconColor: "#4a4868",
    iconBg: "#f3efe9",
    defaultSelected: true,
  },
];

const DEFAULT_LOCATIONS = ["San Francisco", "New York", "London"];

function ArrangementRow({ item, selected, onToggle }) {
  const Icon = item.icon;
  const isSelected = selected.has(item.id);

  return (
    <TouchableOpacity
      className="mb-[10px] flex-row items-center rounded-[16px] bg-[#ffffff] px-[14px]"
      style={{
        height: 86,
        borderWidth: 1,
        borderColor: "#0d5c63",
      }}
      activeOpacity={0.8}
      onPress={() => onToggle(item.id)}
    >
      {/* Icon */}
      <View
        className="h-[48px] w-[48px] items-center justify-center rounded-[14px]"
        style={{ borderWidth: 1, borderColor: "#7a6181", backgroundColor: item.iconBg }}
      >
        <Icon size={20} color={item.iconColor} />
      </View>

      {/* Text */}
      <View className="ml-[14px] flex-1">
        <Text
          className="text-[15px] leading-[22.4px]"
          style={{
            fontFamily: "PlusJakartaSans_700Bold",
            color: item.id === "remote" && isSelected ? "#0d5c63" : "#1c1a2e",
          }}
        >
          {item.label}
        </Text>
        <Text
          className="text-[13px] leading-[22.4px] text-[#8a88a8]"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          {item.sub}
        </Text>
      </View>

      {/* Check circle */}
      <View
        className="h-[20px] w-[20px] items-center justify-center rounded-full"
        style={{
          backgroundColor: isSelected ? "#0d5c63" : "transparent",
          borderWidth: isSelected ? 0 : 1,
          borderColor: "#0d5c6312",
        }}
      >
        {isSelected && <Check size={12} color="#ffffff" />}
      </View>
    </TouchableOpacity>
  );
}

function LocationTag({ label, onRemove }) {
  return (
    <View
      className="flex-row items-center rounded-[20px] px-[14px] py-[7px]"
      style={{ backgroundColor: "#ebf6f7", borderWidth: 1, borderColor: "#c8e6e8" }}
    >
      <MapPin size={12} color="#0d5c63" />
      <Text
        className="ml-[4px] text-[12px] text-[#0d5c63]"
        style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
      >
        {label}
      </Text>
      <TouchableOpacity className="ml-[6px]" onPress={() => onRemove(label)}>
        <X size={13} color="#0d5c63" />
      </TouchableOpacity>
    </View>
  );
}

export default function QuizLocationScreen({ navigation }) {
  const [arrangements, setArrangements] = useState(
    new Set(ARRANGEMENTS.filter((a) => a.defaultSelected).map((a) => a.id))
  );
  const [locations, setLocations] = useState(DEFAULT_LOCATIONS);
  const [useCurrentLocation, setUseCurrentLocation] = useState(true);

  function toggleArrangement(id) {
    setArrangements((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function removeLocation(label) {
    setLocations((prev) => prev.filter((l) => l !== label));
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      <QuizStepHeader
        step={4}
        navigation={navigation}
        onSkip={() => navigation.navigate("QuizSalary")}
      />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Heading */}
        <View className="px-[20px] pt-[20px]">
          <Text
            className="text-[22px] tracking-[-0.6px] leading-[28.6px] text-[#1a1828]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
          >
            Where do you prefer to work?
          </Text>
          <Text
            className="mt-[8px] text-[14px] leading-[22.4px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            Choose your ideal work arrangement.
          </Text>
        </View>

        {/* Work arrangement rows */}
        <View className="mt-[20px] px-[20px]">
          {ARRANGEMENTS.map((item) => (
            <ArrangementRow
              key={item.id}
              item={item}
              selected={arrangements}
              onToggle={toggleArrangement}
            />
          ))}
        </View>

        {/* Preferred locations card — Figma Group 42, h=177 */}
        <View
          className="mx-[20px] mt-[4px] rounded-[16px] bg-[#ffffff] px-[19px] py-[14px]"
          style={{ borderWidth: 1, borderColor: "#0d5c63" }}
        >
          <Text
            className="text-[12px] text-[#4a4868]"
            style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
          >
            Preferred Location(s)
          </Text>

          {/* Location tags */}
          <View className="mt-[12px] flex-row flex-wrap gap-[8px]">
            {locations.map((loc) => (
              <LocationTag key={loc} label={loc} onRemove={removeLocation} />
            ))}
          </View>

          {/* Search input */}
          <View className="mt-[12px] h-[39px] flex-row items-center rounded-[10px] bg-[#f3efe9] px-[11px]">
            <Search size={14} color="#8a88a8" />
            <Text
              className="ml-[8px] text-[13px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              Add a city or country...
            </Text>
          </View>
        </View>

        {/* Use current location card — Figma Group 42, h=68 */}
        <View
          className="mx-[20px] mt-[10px] flex-row items-center rounded-[16px] bg-[#ffffff] px-[14px]"
          style={{ height: 68, borderWidth: 1, borderColor: "#0d5c63" }}
        >
          {/* Location icon */}
          <View
            className="h-[43px] w-[43px] items-center justify-center rounded-[14px]"
            style={{ backgroundColor: "#fdf8ee", borderWidth: 1, borderColor: "#7a6181" }}
          >
            <Navigation size={16} color="#e2b053" />
          </View>

          {/* Text */}
          <View className="ml-[14px] flex-1">
            <Text
              className="text-[15px] leading-[22.4px] text-[#1c1a2e]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              Use my current location
            </Text>
            <Text
              className="text-[13px] leading-[22.4px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              San Francisco, CA
            </Text>
          </View>

          {/* Toggle — Figma: rounded-[30px] bg #0d5c63, inner circle #ffffff */}
          <TouchableOpacity
            className="h-[26px] w-[43px] items-center justify-center rounded-[30px]"
            style={{ backgroundColor: useCurrentLocation ? "#0d5c63" : "#0d5c631a" }}
            onPress={() => setUseCurrentLocation((v) => !v)}
          >
            <View
              className="h-[18px] w-[18px] rounded-full bg-[#ffffff]"
              style={{
                alignSelf: useCurrentLocation ? "flex-end" : "flex-start",
                marginHorizontal: 3,
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Continue */}
      <View className="absolute bottom-0 left-0 right-0 px-[21px] pb-[28px]">
        <TouchableOpacity
          className="h-[55px] items-center justify-center rounded-[14px] bg-[#0d5c63]"
          activeOpacity={0.9}
          onPress={() => navigation.navigate("QuizSalary")}
        >
          <Text
            className="text-[16px] tracking-[-0.2px] leading-[22.5px] text-[#ffffff]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            Continue →
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

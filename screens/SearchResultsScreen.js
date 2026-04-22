import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ChevronLeft,
  Search,
  SlidersVertical,
  MapPin,
  Heart,
  Atom,
  List,
  Map,
  X,
} from "lucide-react-native";
import AppStatusBar from "../components/AppStatusBar";

// ─── DATA ────────────────────────────────────────────────────────────────────

const ACTIVE_FILTERS = [
  { id: "remote", label: "Remote" },
  { id: "salary", label: "$120k+" },
  { id: "level", label: "Senior" },
];

const JOB_RESULTS = Array(6).fill({
  title: "Sr. Product Designer",
  company: "Figma",
  location: "Remote",
  salary: "$140–180k",
  match: "96%",
  saved: false,
  isNew: true,
});

// ─── MAIN SCREEN ─────────────────────────────────────────────────────────────

export default function SearchResultsScreen({ navigation, route }) {
  const { query = "Senior Product Designer" } = route.params || {};
  const [searchText, setSearchText] = useState(query);
  const [activeFilters, setActiveFilters] = useState(ACTIVE_FILTERS);
  const [jobs, setJobs] = useState(JOB_RESULTS);
  const [viewMode, setViewMode] = useState("list"); // "list" or "map"

  function removeFilter(filterId) {
    setActiveFilters((prev) => prev.filter((f) => f.id !== filterId));
  }

  function toggleSaveJob(index) {
    setJobs((prev) =>
      prev.map((job, i) => (i === index ? { ...job, saved: !job.saved } : job))
    );
  }

  function handleJobPress(job) {
    navigation.navigate("JobDetail", { job });
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* Figma: Status Bar */}
      <AppStatusBar />

      {/* Figma: Group 468 - Header Container */}
      <View className="bg-[#ffffff]">
        {/* Figma: Group 146 - Search Bar Section */}
        <View className="px-[20px] pb-[16px] pt-[17px]">
          {/* Figma: Group 199 - Back Button + Search Input */}
          <View className="flex-row items-center">
            {/* Figma: Group 142 - Back Button */}
            <TouchableOpacity
              className="h-[33px] w-[33px] items-center justify-center rounded-[11px] bg-[#f3efe9]"
              onPress={() => navigation.goBack()}
            >
              <ChevronLeft size={18} color="#4a4868" strokeWidth={2} />
            </TouchableOpacity>

            {/* Figma: Group 198 - Search Input */}
            <View
              className="ml-[11px] flex-1 h-[35px] flex-row items-center rounded-[14px] bg-[#ffffff] px-[16px]"
              style={{ borderWidth: 1, borderColor: "#0d5c6312" }}
            >
              <Search size={16} color="#8a88a8" />
              <TextInput
                className="ml-[10px] flex-1 text-[14px] text-[#1a1828]"
                style={{ fontFamily: "PlusJakartaSans_600SemiBold", textAlignVertical: "center", paddingVertical: 0 }}
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Senior Product Designer"
                placeholderTextColor="#1a1828"
              />
              <SlidersVertical size={16} color="#0d5c63" />
            </View>
          </View>

          {/* Figma: Frame 302 - Active Filters Chips */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 15 }}
          >
            {activeFilters.map((filter) => (
              <View
                key={filter.id}
                className="mr-[5px] h-[30px] flex-row items-center rounded-[18px] bg-[#0d5c63] px-[12px]"
              >
                <Text
                  className="text-[12px] leading-[18px] text-[#ffffff]"
                  style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
                >
                  {filter.label}
                </Text>
                <TouchableOpacity
                  className="ml-[8px]"
                  onPress={() => removeFilter(filter.id)}
                >
                  <X size={10} color="#ffffff" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Figma: Frame 529 - Content Container */}
      <View className="flex-1 bg-[#f9f5f0] pt-[18px]">
        {/* Figma: Group 216 - Results Count + View Toggle */}
        <View className="px-[20px] pb-[13px] flex-row items-center justify-between">
          <Text
            className="text-[13px] leading-[19.5px]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            <Text className="text-[#1a1828]" style={{ fontFamily: "PlusJakartaSans_700Bold" }}>
              247 results
            </Text>
            <Text className="text-[#8a88a8]"> Best match</Text>
          </Text>

          {/* Figma: Frame 213 - View Toggle Buttons */}
          <View className="flex-row gap-x-[10px]">
            {/* Figma: Group 215 - List View Button */}
            <TouchableOpacity
              className="h-[30px] w-[30px] items-center justify-center rounded-[5px]"
              style={{ backgroundColor: viewMode === "list" ? "#0d5c63" : "#f3efe9" }}
              onPress={() => setViewMode("list")}
            >
              <List size={16} color={viewMode === "list" ? "#ffffff" : "#0d5c63"} />
            </TouchableOpacity>

            {/* Figma: Frame 214 - Map View Button */}
            <TouchableOpacity
              className="h-[30px] w-[30px] items-center justify-center rounded-[5px]"
              style={{ backgroundColor: viewMode === "map" ? "#0d5c63" : "#f3efe9" }}
              onPress={() => setViewMode("map")}
            >
              <Map size={16} color={viewMode === "map" ? "#ffffff" : "#0d5c63"} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Figma: Frame 306 - Job Cards List */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
        >
          {jobs.map((job, index) => (
            <TouchableOpacity
              key={index}
              className="mb-[12px] rounded-[16px] bg-[#ffffff]"
              onPress={() => handleJobPress(job)}
            >
              {/* Figma: Group 220/221/222/223/224/225 - Job Card */}
              <View className="px-[12px] pt-[12px] pb-[10px]">
                <View className="flex-row">
                  {/* Figma: Rectangle 52 + atom icon - Company Logo */}
                  <View
                    className="h-[46px] w-[46px] items-center justify-center rounded-[13px]"
                    style={{ backgroundColor: "#7a618112", borderWidth: 1, borderColor: "#7a618121" }}
                  >
                    <Atom size={20} color="#7a6181" />
                  </View>

                  {/* Figma: Group 217 - Job Title + Company */}
                  <View className="ml-[13px] flex-1">
                    <Text
                      className="text-[14px] leading-[18.2px] text-[#1a1828]"
                      style={{ fontFamily: "PlusJakartaSans_700Bold" }}
                    >
                      {job.title}
                    </Text>
                    <Text
                      className="mt-[0px] text-[12px] leading-[18px] text-[#8a88a8]"
                      style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                    >
                      {job.company}
                    </Text>
                  </View>

                  {/* Top right icons */}
                  <View className="items-end">
                    {/* Figma: Frame 304 - NEW Badge (only on first card) */}
                    {index === 0 && job.isNew && (
                      <View className="mb-[8px] h-[21px] rounded-[22px] bg-[#ebf6f7] px-[9px] items-center justify-center">
                        <Text
                          className="text-[10px] leading-[15px] text-[#0d5c63]"
                          style={{ fontFamily: "PlusJakartaSans_700Bold" }}
                        >
                          NEW
                        </Text>
                      </View>
                    )}
                    {/* Figma: heart icon - Save Button */}
                    {index !== 0 && (
                      <View className="h-[21px]" />
                    )}
                    <TouchableOpacity onPress={() => toggleSaveJob(index)}>
                      <Heart
                        size={16}
                        color="#8a88a8"
                        fill={job.saved ? "#8a88a8" : "transparent"}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Figma: Group 218 + Frame 303 - Remote Tag + Location */}
                <View className="mt-[12px] flex-row items-center">
                  {/* Figma: Group 218 - Remote Badge */}
                  <View className="h-[22px] rounded-[21px] bg-[#ebf6f7] px-[12px] items-center justify-center">
                    <Text
                      className="text-[11px] leading-[18px] text-[#0d5c63]"
                      style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
                    >
                      Remote
                    </Text>
                  </View>

                  {/* Figma: Frame 303 - Location with icon */}
                  <View className="ml-[5px] flex-row items-center">
                    <MapPin size={12} color="#8a88a8" />
                    <Text
                      className="ml-[4px] text-[11px] leading-[16.5px] text-[#8a88a8]"
                      style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                    >
                      {job.location}
                    </Text>
                  </View>

                  {/* Salary */}
                  <Text
                    className="ml-auto text-[13px] leading-[19.5px] text-[#1a1828]"
                    style={{ fontFamily: "PlusJakartaSans_700Bold" }}
                  >
                    {job.salary}
                  </Text>
                </View>

                {/* Figma: Frame 305 - Match Progress Bar */}
                <View className="mt-[10px] flex-row items-center">
                  {/* Figma: Group 219 - Progress Bar Lines */}
                  <View className="flex-1 h-[1px] bg-[#0d5c631a]">
                    <View className="h-[1px] bg-[#0d5c63]" style={{ width: "96%" }} />
                  </View>
                  {/* Match percentage */}
                  <Text
                    className="ml-[13px] text-[11px] leading-[16.5px] text-[#0d5c63]"
                    style={{ fontFamily: "PlusJakartaSans_700Bold" }}
                  >
                    {job.match}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import {
  ChevronLeft,
  Search,
  SlidersVertical,
  MapPin,
  Navigation,
  Layers,
  Plus,
  Minus,
  Locate,
  Bookmark,
  DollarSign,
  Clock,
} from "lucide-react-native";

const { width, height } = Dimensions.get("window");

// ─── DATA ────────────────────────────────────────────────────────────────────

const MAP_JOBS = [
  {
    id: "m1",
    title: "Senior Product Designer",
    company: "Figma",
    location: "San Francisco, CA",
    salary: "140-160k",
    coordinates: { x: 120, y: 200 },
    logo: "F",
    logoBg: "#7a618112",
    logoColor: "#7a6181",
    saved: false,
    distance: "2.3 km",
    match: "98%",
  },
  {
    id: "m2",
    title: "Design Systems Lead",
    company: "Notion",
    location: "San Francisco, CA",
    salary: "$130-155k",
    coordinates: { x: 180, y: 150 },
    logo: "N",
    logoBg: "#0d5c6312",
    logoColor: "#0d5c63",
    saved: true,
    distance: "1.8 km",
    match: "89%",
  },
  {
    id: "m3",
    title: "Product Designer",
    company: "Meta",
    location: "Menlo Park, CA",
    salary: "$120-140k",
    coordinates: { x: 250, y: 280 },
    logo: "M",
    logoBg: "#e2b05312",
    logoColor: "#e2b053",
    saved: false,
    distance: "5.2 km",
    match: "85%",
  },
  {
    id: "m4",
    title: "UX Designer",
    company: "Google",
    location: "Mountain View, CA",
    salary: "$110-130k",
    coordinates: { x: 300, y: 320 },
    logo: "G",
    logoBg: "#16a34a12",
    logoColor: "#16a34a",
    saved: false,
    distance: "7.1 km",
    match: "82%",
  },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function JobMapPin({ job, isSelected, onPress }) {
  return (
    <TouchableOpacity
      className="absolute items-center"
      style={{
        left: job.coordinates.x,
        top: job.coordinates.y,
        transform: [{ translateX: -20 }, { translateY: -40 }],
      }}
      onPress={() => onPress(job)}
    >
      {/* Pin */}
      <View
        className="h-[40px] w-[40px] items-center justify-center rounded-full"
        style={{
          backgroundColor: isSelected ? "#0d5c63" : "#ffffff",
          borderWidth: 3,
          borderColor: isSelected ? "#ffffff" : "#0d5c63",
          shadowColor: "#000000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <Text
          className="text-[14px]"
          style={{
            fontFamily: "PlusJakartaSans_700Bold",
            color: isSelected ? "#ffffff" : "#0d5c63",
          }}
        >
          {job.logo}
        </Text>
      </View>
      {/* Pin tail */}
      <View
        className="h-[8px] w-[8px] rotate-45"
        style={{
          backgroundColor: isSelected ? "#0d5c63" : "#ffffff",
          borderRightWidth: 2,
          borderBottomWidth: 2,
          borderColor: isSelected ? "#ffffff" : "#0d5c63",
          marginTop: -4,
        }}
      />
    </TouchableOpacity>
  );
}

function JobCard({ job, onPress, onToggleSave }) {
  return (
    <TouchableOpacity
      className="mb-[12px] rounded-[16px] bg-[#ffffff] px-[14px] py-[16px]"
      onPress={() => onPress(job)}
    >
      <View className="flex-row items-start">
        {/* Logo */}
        <View
          className="h-[44px] w-[44px] items-center justify-center rounded-[10px]"
          style={{ backgroundColor: job.logoBg }}
        >
          <Text
            className="text-[18px]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold", color: job.logoColor }}
          >
            {job.logo}
          </Text>
        </View>

        {/* Title + company */}
        <View className="ml-[14px] flex-1">
          <Text
            className="text-[14px] leading-[21px] text-[#1c1a2e]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            {job.title}
          </Text>
          <Text
            className="text-[12px] leading-[18px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            {job.company}
          </Text>
          <View className="mt-[4px] flex-row items-center">
            <MapPin size={12} color="#8a88a8" />
            <Text
              className="ml-[4px] text-[12px] leading-[18px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              {job.distance}
            </Text>
          </View>
        </View>

        {/* Match % badge */}
        <View className="rounded-[10px] bg-[#ebf6f7] px-[8px] py-[2px]">
          <Text
            className="text-[11px] text-[#0d5c63]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            {job.match}
          </Text>
        </View>
      </View>

      {/* Bottom row */}
      <View className="mt-[12px] flex-row items-center justify-between">
        <View className="flex-row items-center">
          <DollarSign size={12} color="#e2b053" />
          <Text
            className="ml-[2px] text-[11px] text-[#e2b053]"
            style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
          >
            {job.salary}
          </Text>
        </View>

        {/* Bookmark */}
        <TouchableOpacity
          className="h-[24px] w-[24px] items-center justify-center rounded-full"
          style={{ borderWidth: 1, borderColor: "#e2b053" }}
          onPress={() => onToggleSave(job.id)}
        >
          <Bookmark
            size={13}
            color="#e2b053"
            fill={job.saved ? "#e2b053" : "transparent"}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

// ─── MAIN SCREEN ─────────────────────────────────────────────────────────────

export default function SearchMapScreen({ navigation, route }) {
  const { query = "Product Designer" } = route.params || {};
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState(MAP_JOBS);
  const [showJobsList, setShowJobsList] = useState(false);

  function toggleSaveJob(jobId) {
    setJobs((prev) =>
      prev.map((job) => (job.id === jobId ? { ...job, saved: !job.saved } : job))
    );
  }

  function handleJobPress(job) {
    navigation.navigate("JobDetail", { job });
  }

  function handlePinPress(job) {
    setSelectedJob(job);
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* ── HEADER ── */}
      <View className="bg-[#ffffff] px-[20px] pb-[12px] pt-[45px]">
        {/* Back + Search bar */}
        <View className="flex-row items-center gap-x-[12px]">
          <TouchableOpacity
            className="h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f3efe9]"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeft size={20} color="#4a4868" />
          </TouchableOpacity>

          <View className="flex-1 h-[45px] flex-row items-center rounded-[14px] bg-[#f9f5f0] px-[16px]">
            <Search size={16} color="#8a88a8" />
            <Text
              className="ml-[10px] flex-1 text-[14px] leading-[21px] text-[#1c1a2e]"
              style={{ fontFamily: "PlusJakartaSans_500Medium" }}
            >
              {query}
            </Text>
            <TouchableOpacity onPress={() => console.log("Filters pressed")}>
              <SlidersVertical size={16} color="#0d5c63" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Results count */}
        <Text
          className="mt-[12px] text-[13px] leading-[19.5px] text-[#8a88a8]"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          {jobs.length} jobs found near you
        </Text>
      </View>

      {/* ── MAP CONTAINER ── */}
      <View className="flex-1 bg-[#e8f4f8]">
        {/* Map background with grid pattern */}
        <View
          className="flex-1"
          style={{
            backgroundColor: "#e8f4f8",
            backgroundImage: "linear-gradient(#d1e7dd 1px, transparent 1px), linear-gradient(90deg, #d1e7dd 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        >
          {/* Job pins */}
          {jobs.map((job) => (
            <JobMapPin
              key={job.id}
              job={job}
              isSelected={selectedJob?.id === job.id}
              onPress={handlePinPress}
            />
          ))}

          {/* Map controls */}
          <View className="absolute right-[20px] top-[20px] gap-y-[8px]">
            {/* Zoom in */}
            <TouchableOpacity
              className="h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[#ffffff]"
              style={{ shadowColor: "#000000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}
            >
              <Plus size={20} color="#4a4868" />
            </TouchableOpacity>
            {/* Zoom out */}
            <TouchableOpacity
              className="h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[#ffffff]"
              style={{ shadowColor: "#000000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}
            >
              <Minus size={20} color="#4a4868" />
            </TouchableOpacity>
            {/* Layers */}
            <TouchableOpacity
              className="h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[#ffffff]"
              style={{ shadowColor: "#000000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}
            >
              <Layers size={20} color="#4a4868" />
            </TouchableOpacity>
          </View>

          {/* Current location button */}
          <TouchableOpacity
            className="absolute bottom-[20px] right-[20px] h-[48px] w-[48px] items-center justify-center rounded-full bg-[#0d5c63]"
            style={{ shadowColor: "#000000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 }}
          >
            <Locate size={24} color="#ffffff" />
          </TouchableOpacity>

          {/* List toggle button */}
          <TouchableOpacity
            className="absolute bottom-[20px] left-[20px] h-[48px] flex-row items-center rounded-[24px] bg-[#ffffff] px-[16px]"
            style={{ shadowColor: "#000000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}
            onPress={() => setShowJobsList(!showJobsList)}
          >
            <Navigation size={18} color="#0d5c63" />
            <Text
              className="ml-[8px] text-[14px] text-[#0d5c63]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              List
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ── SELECTED JOB CARD ── */}
      {selectedJob && (
        <View className="bg-[#ffffff] px-[20px] py-[16px]">
          <JobCard
            job={selectedJob}
            onPress={handleJobPress}
            onToggleSave={toggleSaveJob}
          />
        </View>
      )}

      {/* ── JOBS LIST OVERLAY ── */}
      {showJobsList && (
        <View
          className="absolute bottom-0 left-0 right-0 bg-[#ffffff] rounded-t-[20px] px-[20px] pt-[20px]"
          style={{ height: height * 0.6 }}
        >
          {/* Handle bar */}
          <View className="mb-[16px] h-[4px] w-[40px] self-center rounded-full bg-[#e5e5e5]" />
          
          {/* Header */}
          <View className="mb-[16px] flex-row items-center justify-between">
            <Text
              className="text-[18px] text-[#1c1a2e]"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              {jobs.length} Jobs Near You
            </Text>
            <TouchableOpacity onPress={() => setShowJobsList(false)}>
              <Text
                className="text-[14px] text-[#0d5c63]"
                style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>

          {/* Jobs list */}
          <ScrollView showsVerticalScrollIndicator={false}>
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onPress={handleJobPress}
                onToggleSave={toggleSaveJob}
              />
            ))}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
}
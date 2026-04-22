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
  MapPin,
  Globe,
  Star,
  Building2,
  TrendingUp,
  DollarSign,
  Bookmark,
  Upload,
  Heart,
  Users,
  Check,
  ChartNoAxesCombined,
  Share,
  Clock,
  ThumbsUp,
  ThumbsDown,
  Award,
  Calendar,
} from "lucide-react-native";

// ─── DATA ────────────────────────────────────────────────────────────────────

const COMPANY_DATA = {
  name: "Figma",
  tagline: "Design Software · San Francisco, CA",
  location: "San Francisco, CA",
  website: "figma.com",
  rating: "4.7",
  openJobs: 48,
  followers: "48",
  tags: ["Series E", "500–1k emp", "Founded 2012"],
  isFollowing: false,
  
  // Quick Facts
  headquarters: "San Francisco, CA",
  teamSize: "500 – 1,000 employees", 
  stage: "Series E · $10B Valuation",
  revenue: "~$400M ARR (est.)",
  
  // About
  description: "Figma is a cloud-based design tool enabling real-time team collaboration on UI/UX projects. Used by over 4 million designers at 150k+ companies including Apple, Google, and Airbnb...",
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "jobs", label: "Jobs 48" },
  { id: "culture", label: "Culture" },
  { id: "reviews", label: "Reviews" },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function StatusBar() {
  return (
    <View className="flex-row items-center justify-between px-[20px] py-[20px] bg-[#ffffff]">
      {/* Empty space to maintain height and width */}
    </View>
  );
}

// ─── MAIN SCREEN ─────────────────────────────────────────────────────────────

export default function CompanyDetailScreen({ navigation, route }) {
  const { company: companyName } = route.params || {};
  const company = COMPANY_DATA;
  const [isFollowing, setIsFollowing] = useState(company.isFollowing || false);
  const [activeTab, setActiveTab] = useState("overview");

  function toggleFollow() {
    setIsFollowing(!isFollowing);
  }

  function handleJobPress(job) {
    navigation.navigate("JobDetail", { job: { ...job, company: company.name } });
  }

  function renderTabContent() {
    switch (activeTab) {
      case "overview":
        return <OverviewTab company={company} />;
      case "jobs":
        return <JobsTab company={company} />;
      case "culture":
        return <CultureTab company={company} />;
      case "reviews":
        return <ReviewsTab company={company} />;
      default:
        return <OverviewTab company={company} />;
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* Status Bar */}
      <StatusBar />
      
      {/* ── HEADER WITH COVER ── */}
      <View className="relative">
        {/* Cover Image with Gradient */}
        <View className="h-[210px] bg-[#0d5c63]">
          {/* Gradient overlay */}
          <View className="absolute inset-0 bg-gradient-to-b from-[#0d5c63] to-[#4a9ca6]" />
        </View>
        
        {/* Header Controls */}
        <View className="absolute top-[20px] left-[20px] right-[20px] flex-row items-center justify-between">
          <TouchableOpacity
            className="h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#ffffff20]"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeft size={22} color="#ffffff" />
          </TouchableOpacity>
          
          <View className="flex-row items-center gap-x-[12px]">
            <TouchableOpacity className="h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#ffffff20]">
              <Calendar size={20} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity className="h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#ffffff20]">
              <Share size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Company Logo and Info */}
        <View className="absolute top-[80px] left-[20px] right-[20px] flex-row items-start">
          {/* Company Logo */}
          <View className="h-[80px] w-[80px] items-center justify-center rounded-[20px] bg-[#ffffff] shadow-lg mr-[16px] top-[25px]">
            <Text
              className="text-[32px] text-[#0d5c63]"
              style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
            >
              F
            </Text>
          </View>
          
          {/* Company Info */}
          <View className="flex-1 pt-[8px]">
            {/* Company Name */}
            <Text
              className="text-[28px] text-[#ffffff] mb-[4px]"
              style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
            >
              {company.name}
            </Text>
            
            {/* Company Tagline */}
            <Text
              className="text-[13px] text-[#ffffff] opacity-90 mb-[8px]"
              style={{ fontFamily: "PlusJakartaSans_500Medium" }}
            >
              {company.tagline}
            </Text>
            
            {/* Company Tags */}
            <View className="flex-row gap-x-[5px]">
              {company.tags.map((tag, index) => (
                <View key={index} className="rounded-[16px] bg-[#ffffff20] px-[10px] py-[5px] flex items-center justify-center text-center">
                  <Text
                    className="text-[9px] text-[#ffffff]"
                    style={{ fontFamily: "PlusJakartaSans_500Medium" }}
                  >
                    {tag}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>

      {/* ── CONTENT ── */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingTop: 20, paddingHorizontal: 20, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Stats Cards */}
        <View className="mb-[24px] flex-row justify-between ">
          {/* Rating */}
          <View className="items-center">
            <View className="flex-row items-center mb-[4px]">
              <Text
                className="text-[32px] text-[#e2b053] mr-[4px]"
                style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
              >
                {company.rating}
              </Text>
              <Star size={20} color="#e2b053" fill="#e2b053" />
            </View>
            <Text
              className="text-[14px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_500Medium" }}
            >
              Glassdoor
            </Text>
          </View>
          
          {/* Open Roles */}
          <View className="items-center">
            <Text
              className="text-[32px] text-[#0d5c63] mb-[4px]"
              style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
            >
              {company.openJobs}
            </Text>
            <Text
              className="text-[14px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_500Medium" }}
            >
              Open Roles
            </Text>
          </View>
          
          {/* Open Roles (duplicate as shown in image) */}
          <View className="items-center">
            <Text
              className="text-[32px] text-[#0d5c63] mb-[4px]"
              style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
            >
              {company.openJobs}
            </Text>
            <Text
              className="text-[14px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_500Medium" }}
            >
              Open Roles
            </Text>
          </View>
        </View>

        {/* Tab Navigation */}
        <View className="mb-[24px]">
          <View className="flex-row justify-between border-b border-[#e5e5e5]">
            {TABS.map((tab) => (
              <TouchableOpacity
                key={tab.id}
                className="flex-1 items-center pb-[12px]"
                onPress={() => setActiveTab(tab.id)}
              >
                <Text
                  className="text-[14px]"
                  style={{
                    fontFamily: activeTab === tab.id ? "PlusJakartaSans_700Bold" : "PlusJakartaSans_500Medium",
                    color: activeTab === tab.id ? "#0d5c63" : "#8a88a8",
                  }}
                >
                  {tab.label}
                </Text>
                {activeTab === tab.id && (
                  <View className="absolute bottom-0 h-[2px] w-full bg-[#0d5c63] rounded-full" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Tab Content */}
        {renderTabContent()}
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── TAB COMPONENTS ──────────────────────────────────────────────────────────

function OverviewTab({ company }) {
  return (
    <View>
      {/* About Section */}
      <View className="mb-[24px] rounded-[16px] bg-[#ffffff] p-[20px]">
        <Text
          className="mb-[16px] text-[18px] text-[#1a1828]"
          style={{ fontFamily: "PlusJakartaSans_700Bold" }}
        >
          About {company.name}
        </Text>
        <Text
          className="text-[14px] leading-[22px] text-[#4a4868] mb-[12px]"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          {company.description}
        </Text>
        <TouchableOpacity>
          <Text
            className="text-[14px] text-[#0d5c63]"
            style={{ fontFamily: "PlusJakartaSans_500Medium" }}
          >
            Read more →
          </Text>
        </TouchableOpacity>
      </View>

      {/* Quick Facts */}
      <View className="mb-[24px] rounded-[16px] bg-[#ffffff] p-[20px]">
        <Text
          className="mb-[16px] text-[18px] text-[#1a1828]"
          style={{ fontFamily: "PlusJakartaSans_700Bold" }}
        >
          Quick Facts
        </Text>
        
        <View className="gap-y-[16px]">
          {/* Headquarters */}
          <View className="flex-row items-center justify-between border-b border-[#f0f0f0] pb-[16px]">
            <View className="flex-row items-center">
              <View className="h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#ebf6f7]">
                <Globe size={20} color="#0d5c63" />
              </View>
              <Text
                className="ml-[12px] text-[14px] text-[#8a88a8]"
                style={{ fontFamily: "PlusJakartaSans_500Medium" }}
              >
                Headquarters
              </Text>
            </View>
            <Text
              className="text-[14px] text-[#1a1828]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              {company.headquarters}
            </Text>
          </View>
          
          {/* Team Size */}
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#ebf6f7]">
                <Users size={20} color="#0d5c63" />
              </View>
              <Text
                className="ml-[12px] text-[14px] text-[#8a88a8]"
                style={{ fontFamily: "PlusJakartaSans_500Medium" }}
              >
                Team Size
              </Text>
            </View>
            <Text
              className="text-[14px] text-[#1a1828]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              {company.teamSize}
            </Text>
          </View>
        </View>
      </View>

      {/* View All Jobs Button */}
      <TouchableOpacity
        className="rounded-[16px] py-[16px] items-center"
        style={{ backgroundColor: "#0d5c63" }}
      >
        <Text
          className="text-[16px] text-[#ffffff]"
          style={{ fontFamily: "PlusJakartaSans_700Bold" }}
        >
          View All {company.openJobs} Open Positions →
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function JobsTab({ company }) {
  const jobs = [
    {
      id: 1,
      title: "Sr. Product Designer",
      company: "Figma",
      location: "Remote",
      salary: "$140–180k",
      match: "96%",
      badge: "NEW",
    },
    {
      id: 2,
      title: "Sr. Product Designer",
      company: "Figma",
      location: "Remote",
      salary: "$140–180k",
      match: "96%",
    },
    {
      id: 3,
      title: "Sr. Product Designer",
      company: "Figma",
      location: "Remote",
      salary: "$140–180k",
      match: "96%",
    },
    {
      id: 4,
      title: "Sr. Product Designer",
      company: "Figma",
      location: "Remote",
      salary: "$140–180k",
      match: "96%",
    },
    {
      id: 5,
      title: "Sr. Product Designer",
      company: "Figma",
      location: "Remote",
      salary: "$140–180k",
      match: "96%",
    },
    {
      id: 6,
      title: "Sr. Product Designer",
      company: "Figma",
      location: "Remote",
      salary: "$140–180k",
      match: "96%",
    },
  ];

  const filters = [
    { id: 1, label: "All (48)", active: true },
    { id: 2, label: "Design (12)", active: false },
    { id: 3, label: "Engineering (20)", active: false },
    { id: 4, label: "PM (12)", active: false },
  ];

  return (
    <View>
      {/* Search Bar */}
      <View className="mb-[15px] rounded-[7px] bg-[#f3efe9] px-[16px] py-[9px]">
        <Text
          className="text-[14px] text-[#8a88a8]"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          Search Figma jobs...
        </Text>
      </View>

      {/* Filter Chips */}
      <View className="mb-[25px] flex-row gap-x-[8px]">
        {filters.map((filter) => (
          <View
            key={filter.id}
            className={`rounded-[18px] px-[12px] py-[6px] ${
              filter.active ? "bg-[#0d5c63]" : "bg-[#ffffff]"
            }`}
            style={!filter.active && { borderWidth: 1, borderColor: "#0d5c6314" }}
          >
            <Text
              className={`text-[12px] ${filter.active ? "text-[#ffffff]" : "text-[#1c1a2e]"}`}
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              {filter.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Job Cards */}
      <View className="gap-y-[12px]">
        {jobs.map((job) => (
          <View key={job.id} className="rounded-[16px] bg-[#ffffff] p-[12px]">
            {/* Header */}
            <View className="mb-[12px] flex-row items-start">
              {/* Company Icon */}
              <View
                className="mr-[13px] h-[46px] w-[46px] items-center justify-center rounded-[13px] bg-[#7a618112]"
                style={{ borderWidth: 1, borderColor: "#7a618121" }}
              >
                <Building2 size={20} color="#7a6181" />
              </View>

              {/* Job Info */}
              <View className="flex-1">
                <Text
                  className="mb-[1px] text-[14px] text-[#1a1828]"
                  style={{ fontFamily: "PlusJakartaSans_700Bold" }}
                >
                  {job.title}
                </Text>
                <Text
                  className="text-[12px] text-[#8a88a8]"
                  style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                >
                  {job.company}
                </Text>
              </View>

              {/* Badge */}
              {job.badge && (
                <View className="rounded-[22px] bg-[#ebf6f7] px-[9px] py-[3px]">
                  <Text
                    className="text-[10px] text-[#0d5c63]"
                    style={{ fontFamily: "PlusJakartaSans_700Bold" }}
                  >
                    {job.badge}
                  </Text>
                </View>
              )}

              {/* Heart Icon */}
              {!job.badge && (
                <TouchableOpacity className="ml-[8px]">
                  <Heart size={16} color="#8a88a8" />
                </TouchableOpacity>
              )}
            </View>

            {/* Location & Salary */}
            <View className="mb-[12px] flex-row items-center justify-between">
              <View className="flex-row items-center gap-x-[5px]">
                {/* Remote Badge */}
                <View className="rounded-[21px] bg-[#ebf6f7] px-[12px] py-[2px]">
                  <Text
                    className="text-[11px] text-[#0d5c63]"
                    style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
                  >
                    Remote
                  </Text>
                </View>

                {/* Location */}
                <View className="flex-row items-center">
                  <MapPin size={12} color="#8a88a8" />
                  <Text
                    className="ml-[4px] text-[11px] text-[#8a88a8]"
                    style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                  >
                    {job.location}
                  </Text>
                </View>
              </View>

              {/* Salary */}
              <Text
                className="text-[13px] text-[#1a1828]"
                style={{ fontFamily: "PlusJakartaSans_700Bold" }}
              >
                {job.salary}
              </Text>
            </View>

            {/* Match Progress */}
            <View className="flex-row items-center">
              <View className="mr-[13px] h-[1px] flex-1 bg-[#0d5c631a]">
                <View className="h-[1px] bg-[#0d5c63]" style={{ width: job.match }} />
              </View>
              <Text
                className="text-[11px] text-[#0d5c63]"
                style={{ fontFamily: "PlusJakartaSans_700Bold" }}
              >
                {job.match}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

function CultureTab({ company }) {
  const values = [
    {
      id: 1,
      title: "Collaborative",
      description: "Cross-functional design sprints every 2 weeks",
      iconBg: "#0d5c6312",
      iconColor: "#0d5c63",
      icon: "users",
    },
    {
      id: 2,
      title: "User-Obsessed",
      description: "Weekly user research sessions company-wide",
      iconBg: "#7a618112",
      iconColor: "#7a6181",
      icon: "chart",
    },
    {
      id: 3,
      title: "Collaborative",
      description: "Cross-functional design sprints every 2 weeks",
      iconBg: "#e2b05312",
      iconColor: "#e2b053",
      icon: "users",
    },
    {
      id: 4,
      title: "User-Obsessed",
      description: "Weekly user research sessions company-wide",
      iconBg: "#16a34a12",
      iconColor: "#16a34a",
      icon: "chart",
    },
  ];

  const perks = [
    ["Remote-First", "Unlimited PTO"],
    ["Remote-First", "Equity"],
    ["Remote-First", "Unlimited PTO"],
    ["Remote-First", "Equity"],
  ];

  return (
    <View>
      {/* Culture Match Score */}
      <View className="mb-[26px] rounded-[18px] p-[17px]" style={{ backgroundColor: "#0d5c63" }}>
        <Text
          className="mb-[6px] text-[13px] text-[#ffffffb2]"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          Culture Match Score
        </Text>
        <Text
          className="mb-[6px] text-[36px] text-[#ffffff]"
          style={{ fontFamily: "PlusJakartaSans_800ExtraBold", letterSpacing: -1.5 }}
        >
          92%
        </Text>
        <Text
          className="text-[13px] text-[#ffffffb2]"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          You align with Figma's work culture · Excellent fit
        </Text>
      </View>

      {/* Company Values */}
      <Text
        className="mb-[16px] text-[14px] text-[#1a1828]"
        style={{ fontFamily: "PlusJakartaSans_700Bold" }}
      >
        Company Values
      </Text>

      <View className="mb-[26px] gap-y-[16px]">
        {values.map((value) => (
          <View key={value.id} className="rounded-[16px] bg-[#ffffff] p-[16px]">
            <View className="flex-row items-center">
              {/* Icon */}
              <View
                className="mr-[18px] h-[44px] w-[44px] items-center justify-center rounded-[13px]"
                style={{ backgroundColor: value.iconBg }}
              >
                {value.icon === "users" ? (
                  <Users size={16} color={value.iconColor} />
                ) : (
                  <ChartNoAxesCombined size={20} color={value.iconColor} />
                )}
              </View>

              {/* Text */}
              <View className="flex-1">
                <Text
                  className="mb-[0px] text-[14px] text-[#1a1828]"
                  style={{ fontFamily: "PlusJakartaSans_700Bold" }}
                >
                  {value.title}
                </Text>
                <Text
                  className="text-[12px] text-[#8a88a8]"
                  style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                >
                  {value.description}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Perks & Benefits */}
      <Text
        className="mb-[16px] text-[14px] text-[#1a1828]"
        style={{ fontFamily: "PlusJakartaSans_700Bold" }}
      >
        Perks & Benefits
      </Text>

      <View className="gap-y-[14px]">
        {perks.map((row, idx) => (
          <View key={idx} className="flex-row gap-x-[12px]">
            {row.map((perk, perkIdx) => (
              <View
                key={perkIdx}
                className="flex-1 rounded-[20px] bg-[#f2edf5] px-[12px] py-[6px]"
                style={{ borderWidth: 1, borderColor: "#e8e0ed" }}
              >
                <View className="flex-row items-center">
                  <Check size={14} color="#7a6181" strokeWidth={2.5} />
                  <Text
                    className="ml-[6px] text-[12px] text-[#7a6181]"
                    style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
                  >
                    {perk}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

function ReviewsTab({ company }) {
  const reviews = [
    {
      id: 1,
      name: "David",
      date: "18:30 - 03/25/2026",
      rating: 5,
      comment: "Work-life balance is respected.",
    },
    {
      id: 2,
      name: "Monica",
      date: "18:30 - 03/25/2026",
      rating: 4,
      comment: "A good place to learn and grow, especially for junior developers",
    },
    {
      id: 3,
      name: "Monica",
      date: "18:30 - 03/25/2026",
      rating: 4,
      comment: "A good place to learn and grow, especially for junior developers",
    },
    {
      id: 4,
      name: "David",
      date: "18:30 - 03/25/2026",
      rating: 5,
      comment: "Work-life balance is respected.",
    },
    {
      id: 5,
      name: "David",
      date: "18:30 - 03/25/2026",
      rating: 5,
      comment: "Work-life balance is respected.",
    },
  ];

  const ratingBars = [
    { stars: 5, percentage: 88.7 },
    { stars: 4, percentage: 13.6 },
    { stars: 3, percentage: 8.5 },
    { stars: 2, percentage: 8.5 },
    { stars: 1, percentage: 8.5 },
  ];

  return (
    <View>
      {/* Rating Overview */}
      <View
        className="mb-[24px] rounded-[9px] p-[12px]"
        style={{ borderWidth: 1, borderColor: "#0d5c634d" }}
      >
        <View className="flex-row items-center justify-between">
          {/* Left: Rating */}
          <View className="items-center">
            <Text
              className="text-[40px] text-[#0d5c63]"
              style={{ fontFamily: "PlusJakartaSans_700Bold", lineHeight: 48 }}
            >
              4.8
            </Text>
            <View className="mb-[2px] mt-[12px] flex-row gap-x-[2px]">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={16}
                  color="#e2b053"
                  fill={i < 5 ? "#e2b053" : "transparent"}
                />
              ))}
            </View>
            <Text
              className="text-[14px] text-[#000000]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              127
            </Text>
          </View>

          {/* Right: Bar Chart */}
          <View className="flex-1 ml-[19px]">
            {ratingBars.map((bar) => (
              <View key={bar.stars} className="mb-[20px] flex-row items-center">
                <Text
                  className="mr-[12px] w-[11px] text-[15px] text-[#000000]"
                  style={{ fontFamily: "PlusJakartaSans_500Medium" }}
                >
                  {bar.stars}
                </Text>
                <View className="h-[1px] flex-1 bg-[#0d5c631a]">
                  <View
                    className="h-[1px] bg-[#0d5c63]"
                    style={{ width: `${bar.percentage}%` }}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Comment Input */}
      <View className="mb-[24px] rounded-[16px] bg-[#ffffff] p-[12px]">
        {/* User Info */}
        <View className="mb-[8px] flex-row items-center">
          <View className="mr-[6px] h-[28px] w-[28px] items-center justify-center rounded-[11px] bg-[#0d5c63]">
            <Text
              className="text-[12px] text-[#ffffff]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              LK
            </Text>
          </View>
          <Text
            className="text-[16px] text-[#7a6181]"
            style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
          >
            Lucy
          </Text>
        </View>

        {/* Star Rating */}
        <View className="mb-[8px] flex-row gap-x-[14px]">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={22} color="#e2b053" fill={i === 1 ? "#e2b053" : "transparent"} />
          ))}
        </View>

        {/* Comment Box */}
        <View
          className="mb-[10px] rounded-[14px] px-[14px] py-[8px]"
          style={{ borderWidth: 1, borderColor: "#0d5c63", minHeight: 80 }}
        >
          <Text
            className="text-[12px] text-[#1c1a2ed9]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            Enter a comment...
          </Text>
        </View>

        {/* Bottom Actions */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row gap-x-[17px]">
            <TouchableOpacity>
              <Upload size={16} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Award size={16} color="#000000" />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center gap-x-[8px]">
            <Text
              className="text-[12px] text-[#1c1a2ed9]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              0/2000
            </Text>
            <View className="h-[16px] w-[1px] bg-[#0d5c6399]" />
            <TouchableOpacity className="rounded-[8px] bg-[#0d5c63] px-[11px] py-[3px] flex-row items-center">
              <Text
                className="mr-[2px] text-[12px] text-[#ffffff]"
                style={{ fontFamily: "PlusJakartaSans_400Regular" }}
              >
                Post
              </Text>
              <Upload size={14} color="#ffffff" style={{ transform: [{ rotate: "45deg" }] }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Reviews List */}
      <View className="gap-y-[10px]">
        {reviews.map((review) => (
          <View key={review.id} className="border-b border-[#0d5c633d] pb-[22px]">
            {/* User Info */}
            <View className="mb-[2px] flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="mr-[6px] h-[28px] w-[28px] items-center justify-center rounded-[11px] bg-[#0d5c63]">
                  <Text
                    className="text-[12px] text-[#ffffff]"
                    style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
                  >
                    LK
                  </Text>
                </View>
                <View>
                  <Text
                    className="text-[16px] text-[#7a6181]"
                    style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
                  >
                    {review.name}
                  </Text>
                  <Text
                    className="text-[10px] text-[#1c1a2e99]"
                    style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                  >
                    {review.date}
                  </Text>
                </View>
              </View>

              {/* Star Rating */}
              <View className="flex-row gap-x-[1px]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={14}
                    color="#e2b053"
                    fill={i <= review.rating ? "#e2b053" : "transparent"}
                  />
                ))}
              </View>
            </View>

            {/* Comment */}
            <View
              className="ml-[34px] mt-[2px] rounded-[14px] bg-[#0d5c630f] px-[12px] py-[10px]"
              style={{ borderWidth: 1, borderColor: "#0d5c631a" }}
            >
              <Text
                className="text-[12px] text-[#1c1a2eb2]"
                style={{ fontFamily: "PlusJakartaSans_400Regular" }}
              >
                {review.comment}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Bell,
  Search,
  SlidersVertical,
  House,
  Search as SearchIcon,
  NotepadText,
  MessageSquareMore,
  User,
  Bookmark,
  Eye,
  Paintbrush,
  Code2,
  ChevronRight,
  RefreshCcw,
} from "lucide-react-native";
import BottomNavBar from "../components/BottomNavBar";

// ─── DATA ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "14", label: "Applied",      bg: "#ebf6f7", color: "#0d5c63" },
  { value: "5",  label: "Interviews",   bg: "#f2edf5", color: "#7a6181" },
  { value: "47", label: "New matches",  bg: "#fdf8ee", color: "#e2b053" },
  { value: "47", label: "New matches",  bg: "#f0fdf4", color: "#16a34a" },
];

const FEATURED_JOBS = [
  {
    id: "f1",
    logo: "H",
    logoBg: "#7a618112",
    logoColor: "#7a6181",
    title: "Senior Product Designer",
    company: "Figma · Remote",
    titleColor: "#1c1a2e",
    salary: "140-160k",
    type: "Remote",
    match: "98%",
    saved: false,
  },
  {
    id: "f2",
    logo: "H",
    logoBg: "#7a618112",
    logoColor: "#7a6181",
    title: "Design Systems Lead",
    company: "Notion · SF / Remote",
    titleColor: "#1a1828",
    salary: "$130-155k",
    type: "Remote",
    match: "89%",
    saved: true,
  },
  {
    id: "f3",
    logo: "H",
    logoBg: "#7a618112",
    logoColor: "#7a6181",
    title: "Design Systems Lead",
    company: "Notion · SF / Remote",
    titleColor: "#1a1828",
    salary: "$130-155k",
    type: "Remote",
    match: "89%",
    saved: true,
  },
];

const FOR_YOU_JOBS = [
  ...FEATURED_JOBS,
  {
    id: "y4",
    logo: "H",
    logoBg: "#7a618112",
    logoColor: "#7a6181",
    title: "Design Systems Lead",
    company: "Notion · SF / Remote",
    titleColor: "#1a1828",
    salary: "$130-155k",
    type: "Remote",
    match: "89%",
    saved: true,
  },
];

const CATEGORIES = [
  { id: "design",    label: "Design",           count: "2k",  iconBg: "#7a618112", iconColor: "#7a6181",  Icon: Paintbrush },
  { id: "eng",       label: "Engineering",      count: "3k",  iconBg: "#0d5c6312", iconColor: "#0d5c63",  Icon: Code2 },
  { id: "technical", label: "Technical",        count: "3k",  iconBg: "#0d5c6312", iconColor: "#0d5c63",  Icon: Code2 },
  { id: "analysis",  label: "Analysis Business",count: "3k",  iconBg: "#0d5c6312", iconColor: "#0d5c63",  Icon: Code2 },
  { id: "ops",       label: "Operations",       count: "3k",  iconBg: "#0d5c6312", iconColor: "#0d5c63",  Icon: Code2 },
];

const TRENDING = [
  { rank: 1,  company: "Figma", views: "3.3k", rankOpacity: "#0d5c63cc" },
  { rank: 2,  company: "Shopee",               views: "3.1k", rankOpacity: "#0d5c6366" },
  { rank: 3,  company: "Meta",                 views: "2.3k", rankOpacity: "#0d5c6366" },
  { rank: 4,  company: "Leo Technical",        views: "2.0k", rankOpacity: "#0d5c6366" },
  { rank: 5,  company: "Notion", views: "1.3k", rankOpacity: "#0d5c6366" },
];

const NAV_ITEMS = [
  { id: "home", label: "Home", Icon: House },
  { id: "search", label: "Search", Icon: SearchIcon },
  { id: "applied", label: "Applied", Icon: NotepadText },
  { id: "messages", label: "Messages", Icon: MessageSquareMore },
  { id: "profile", label: "Profile", Icon: User },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function StatCard({ value, label, bg, color }) {
  return (
    <View
      className="flex-1 items-center justify-center rounded-[12px] py-[10px]"
      style={{ backgroundColor: bg }}
    >
      <Text
        className="text-[20px] leading-[21px]"
        style={{ fontFamily: "PlusJakartaSans_700Bold", color }}
      >
        {value}
      </Text>
      <Text
        className="mt-[4px] text-[10px]"
        style={{ fontFamily: "PlusJakartaSans_400Regular", color }}
      >
        {label}
      </Text>
    </View>
  );
}

function JobCard({ job, onToggleSave, onPress }) {
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
            className="text-[14px] leading-[21px]"
            style={{ fontFamily: "PlusJakartaSans_700Bold", color: job.titleColor }}
          >
            {job.title}
          </Text>
          <Text
            className="text-[12px] leading-[21px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            {job.company}
          </Text>
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

      {/* Tags + bookmark */}
      <View className="mt-[10px] flex-row items-center justify-between">
        <View className="flex-row gap-x-[8px]">
          {/* Salary tag */}
          <View
            className="rounded-[30px] px-[10px] py-[3px]"
            style={{ backgroundColor: "#e2b0530d", borderWidth: 1, borderColor: "#e2b053" }}
          >
            <Text
              className="text-[10px] text-[#e2b053]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              {job.salary}
            </Text>
          </View>
          {/* Type tag */}
          <View className="rounded-[30px] bg-[#ebf6f7] px-[10px] py-[3px]">
            <Text
              className="text-[10px] text-[#0d5c63]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              {job.type}
            </Text>
          </View>
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

function SectionHeader({ title, onSeeAll }) {
  return (
    <View className="mb-[14px] flex-row items-center justify-between">
      <Text
        className="text-[15px] text-[#000000]"
        style={{ fontFamily: "PlusJakartaSans_700Bold" }}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={onSeeAll}>
        <Text
          className="text-[12px] leading-[18px] text-[#0d5c63]"
          style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
        >
          See all
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function CategoryRow({ item, onPress }) {
  const { Icon } = item;
  return (
    <TouchableOpacity 
      className="mb-[8px] flex-row items-center rounded-[16px] bg-[#ffffff] px-[14px] py-[13px]"
      onPress={() => onPress(item)}
    >
      <View
        className="h-[44px] w-[44px] items-center justify-center rounded-[10px]"
        style={{ backgroundColor: item.iconBg }}
      >
        <Icon size={20} color={item.iconColor} />
      </View>
      <View className="ml-[14px] flex-1">
        <Text
          className="text-[14px] leading-[21px] text-[#1c1a2e]"
          style={{ fontFamily: "PlusJakartaSans_700Bold" }}
        >
          {item.label}
        </Text>
        <Text
          className="text-[12px] leading-[21px] text-[#8a88a8]"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          {item.count} jobs
        </Text>
      </View>
      <ChevronRight size={16} color="#b0b0c8" />
    </TouchableOpacity>
  );
}

function TrendingRow({ item, onPress }) {
  return (
    <TouchableOpacity
      className="flex-row items-center"
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "#0d5c6333",
        minHeight: 99,
      }}
      onPress={() => onPress(item)}
    >
      {/* Rank number */}
      <View className="w-[63px] items-center justify-center">
        <Text
          className="text-[28px] leading-[21px]"
          style={{ fontFamily: "PlusJakartaSans_800ExtraBold", color: item.rankOpacity }}
        >
          {item.rank}
        </Text>
      </View>

      {/* Icon */}
      <View
        className="h-[50px] w-[50px] items-center justify-center rounded-[10px]"
        style={{ backgroundColor: "#e2b05312" }}
      >
        <Paintbrush size={22} color="#e2b053" />
      </View>

      {/* Company + views */}
      <View className="ml-[14px] flex-1">
        <Text
          className="text-[16px] leading-[21px] text-[#1c1a2e]"
          style={{ fontFamily: "PlusJakartaSans_700Bold" }}
        >
          {item.company}
        </Text>
        <View className="mt-[4px] flex-row items-center gap-x-[4px]">
          <Eye size={16} color="#4aacb5" />
          <Text
            className="text-[14px] leading-[21px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            {item.views} views
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// ─── MAIN SCREEN ─────────────────────────────────────────────────────────────

export default function HomeFeedScreen({ navigation }) {
  const [activeNav, setActiveNav] = useState("home");
  const [featuredJobs, setFeaturedJobs] = useState(FEATURED_JOBS);
  const [forYouJobs, setForYouJobs] = useState(FOR_YOU_JOBS);

  function toggleSaveFeatured(id) {
    setFeaturedJobs((prev) =>
      prev.map((j) => (j.id === id ? { ...j, saved: !j.saved } : j))
    );
  }
  function toggleSaveForYou(id) {
    setForYouJobs((prev) =>
      prev.map((j) => (j.id === id ? { ...j, saved: !j.saved } : j))
    );
  }

  function handleNavPress(navId) {
    setActiveNav(navId);
    if (navId === "search") {
      navigation.navigate("Search");
    } else if (navId === "messages") {
      navigation.navigate("ChatList");
    } else if (navId === "applied") {
      navigation.navigate("Tracker");
    }
  }

  function handleSearchPress() {
    navigation.navigate("Search");
  }

  function handleJobPress(job) {
    navigation.navigate("JobDetail", { job });
  }

  function handleCategoryPress(category) {
    navigation.navigate("SearchResults", { query: category.label });
  }

  function handleTrendingPress(item) {
    navigation.navigate("CompanyDetail", { company: item.company });
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* ── STICKY HEADER (Status Bar + Greeting + Search) ── */}
      <View className="bg-[#ffffff]">
        {/* Status bar row */}
        <View className="h-[45px]" />

        {/* Greeting row */}
        <View className="flex-row items-center justify-between px-[20px] pt-[0px] pb-[8px]">
          <View>
            <Text
              className="text-[11px] leading-[16.5px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              Good morning
            </Text>
            <Text
              className="text-[20px] tracking-[-0.4px] leading-[30px] text-[#1a1828]"
              style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
            >
              Lucyna Kushinada
            </Text>
          </View>

          <View className="flex-row items-center gap-x-[10px]">
          
            {/* Bell */}
            <View className="relative h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-[#f3efe9]">
              <Bell size={18} color="#4a4868" />
              {/* Notification dot */}
              <View className="absolute right-[8px] top-[8px] h-[5px] w-[5px] rounded-full bg-[#e2b053]" />
            </View>
              {/* Avatar */}
            <View className="h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-[#0d5c63]">
              <Text
                className="text-[14px] text-[#ffffff]"
                style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
              >
                LK
              </Text>
            </View>
          </View>
        </View>

        {/* Search bar */}
        <View className="px-[20px] pb-[12px]">
          <TouchableOpacity
            className="h-[45px] flex-row items-center rounded-[14px] bg-[#ffffff] px-[16px]"
            style={{ borderWidth: 1, borderColor: "#0d5c6312" }}
            onPress={handleSearchPress}
          >
            <Search size={16} color="#8a88a8" />
            <Text
              className="ml-[10px] flex-1 text-[14px] leading-[21px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              Search jobs, companies, skills...
            </Text>
            <SlidersVertical size={16} color="#0d5c63" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ── SCROLLABLE CONTENT ── */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 96, paddingTop: 18, paddingHorizontal: 20 }}
      >
        {/* Stats row */}
        <View className="flex-row gap-x-[8px]">
          {STATS.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </View>

        {/* ── Featured Jobs ── */}
        <View className="mt-[22px]">
          <SectionHeader title="Featured jobs" />
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} onToggleSave={toggleSaveFeatured} onPress={handleJobPress} />
          ))}

          {/* Carousel dots */}
          <View className="mt-[4px] flex-row items-center justify-center gap-x-[8px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <View
                key={i}
                className="h-[10px] w-[10px] rounded-full"
                style={{ backgroundColor: i === 0 ? "#0d5c63" : "#0d5c634d" }}
              />
            ))}
          </View>
        </View>

        {/* ── For You ── */}
        <View className="mt-[28px]">
          <SectionHeader title="For you" />
          {forYouJobs.map((job) => (
            <JobCard key={job.id} job={job} onToggleSave={toggleSaveForYou} onPress={handleJobPress} />
          ))}

          {/* Carousel dots */}
          <View className="mt-[4px] flex-row items-center justify-center gap-x-[8px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <View
                key={i}
                className="h-[10px] w-[10px] rounded-full"
                style={{ backgroundColor: i === 0 ? "#0d5c63" : "#0d5c634d" }}
              />
            ))}
          </View>
        </View>

        {/* ── Browse Categories ── */}
        <View className="mt-[28px]">
          <SectionHeader title="Browse Categories" />
          {CATEGORIES.map((cat) => (
            <CategoryRow key={cat.id} item={cat} onPress={handleCategoryPress} />
          ))}
        </View>

        {/* ── Trending ── */}
        <View className="mt-[28px]">
          {/* Trending header card */}
          <View
            className="rounded-t-[16px] bg-[#0d5c63] px-[14px]"
            style={{ height: 59, flexDirection: "row", alignItems: "center" }}
          >
            {/* chess-queen icon placeholder */}
            <View className="h-[20px] w-[20px] items-center justify-center">
              <Text style={{ fontSize: 16 }}>♛</Text>
            </View>
            <Text
              className="ml-[10px] flex-1 text-[20px] leading-[21px] text-[#ffffff]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              Trending
            </Text>
            <RefreshCcw size={18} color="#ffffff" />
          </View>

          {/* Trending list */}
          <View
            className="rounded-b-[16px] bg-[#ffffff] overflow-hidden"
            style={{ borderWidth: 1, borderColor: "#0d5c6333", borderTopWidth: 0 }}
          >
            {TRENDING.map((item) => (
              <TrendingRow key={item.rank} item={item} onPress={handleTrendingPress} />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* ── BOTTOM NAV BAR ── */}
      <BottomNavBar navigation={navigation} activeTab="home" />
    </SafeAreaView>
  );
}

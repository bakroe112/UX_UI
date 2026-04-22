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
  Search,
  SlidersVertical,
  X,
  Clock,
  TrendingUp,
  House,
  Search as SearchIcon,
  NotepadText,
  MessageSquareMore,
  User,
  PenTool,
  Code,
  ChartNoAxesColumn,
  UsersRound,
  BadgeDollarSign,
  ChevronLeft,
} from "lucide-react-native";
import AppStatusBar from "../components/AppStatusBar";
import BottomNavBar from "../components/BottomNavBar";

// ─── DATA ────────────────────────────────────────────────────────────────────

const RECENT_SEARCHES = [
  "Senior Product Designer",
  "Design Systems Lead",
  "UX Researcher at Stripe",
];

const TRENDING_SEARCHES = [
  { term: "AI Product Manager", jobs: "2.4k jobs" },
  { term: "Design Engineer", jobs: "1.8k jobs" },
  { term: "Staff Designer", jobs: "1.2k jobs" },
];

const CATEGORIES = [
  { id: "design", label: "Design", Icon: PenTool, bg: "#f2edf5", color: "#7a6181" },
  { id: "engineering", label: "Engineering", Icon: Code, bg: "#ebf6f7", color: "#0d5c63" },
  { id: "product", label: "Product", Icon: ChartNoAxesColumn, bg: "#ebf6f7", color: "#1a7a83" },
  { id: "marketing", label: "Marketing", Icon: TrendingUp, bg: "#fef2f2", color: "#e05b5b" },
  { id: "hr", label: "HR & People", Icon: UsersRound, bg: "#fdf8ee", color: "#e2b053" },
  { id: "finance", label: "Finance", Icon: BadgeDollarSign, bg: "#f0fdf4", color: "#16a34a" },
];

// ─── MAIN SCREEN ─────────────────────────────────────────────────────────────

export default function SearchScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [recentSearches, setRecentSearches] = useState(RECENT_SEARCHES);

  function handleSearch(term) {
    if (term.trim()) {
      navigation.navigate("SearchResults", { query: term });
    }
  }

  function removeRecentSearch(term) {
    setRecentSearches((prev) => prev.filter((s) => s !== term));
  }

  function clearAllRecent() {
    setRecentSearches([]);
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* Figma: Status Bar */}
      <AppStatusBar />

      {/* Figma: Group 146 - Header Container */}
      <View className="bg-[#ffffff]">
        {/* Figma: Group 199 - Search Bar + Back Button */}
        <View className="flex-row items-center px-[20px] pb-[11px] pt-[17px]">
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
              className="ml-[10px] flex-1 text-[14px] text-[#4a4868]"
              style={{ fontFamily: "PlusJakartaSans_400Regular", textAlignVertical: "center", paddingVertical: 0, fontSize: 12 }}
              placeholder="Search jobs, companies, skills..."
              placeholderTextColor="#8a88a8"
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={() => handleSearch(searchText)}
              returnKeyType="search"
            />
            <SlidersVertical size={16} color="#0d5c63" />
          </View>
        </View>
      </View>

      {/* Figma: Frame 301 - Scrollable Content Container */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 96, paddingTop: 21, paddingHorizontal: 21 }}
      >
        {/* Figma: Frame 300 - Recent Section */}
        {recentSearches.length > 0 && (
          <View className="mb-[21px]">
            {/* Figma: Group 200 - Section Header */}
            <View className="mb-[16px] flex-row items-center justify-between">
              <Text
                className="text-[13px] leading-[19.5px] text-[#1a1828]"
                style={{ fontFamily: "PlusJakartaSans_700Bold" }}
              >
                Recent
              </Text>
              <TouchableOpacity onPress={clearAllRecent}>
                <Text
                  className="text-[12px] leading-[19.5px] text-[#0d5c63]"
                  style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                >
                  Clear all
                </Text>
              </TouchableOpacity>
            </View>

            {/* Figma: Frame 292 - Recent Items List */}
            <View className="gap-y-[0px]">
              {recentSearches.map((term, index) => (
                <TouchableOpacity
                  key={term}
                  className="h-[40px] flex-row items-center justify-between"
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "#0d5c6312",
                  }}
                  onPress={() => handleSearch(term)}
                >
                  <View className="flex-1 flex-row items-center">
                    {/* Figma: clock icon */}
                    <Clock size={16} color="#8a88a8" />
                    <Text
                      className="ml-[12px] text-[13px] leading-[19.5px] text-[#4a4868]"
                      style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                    >
                      {term}
                    </Text>
                  </View>
                  {/* Figma: x icon */}
                  <TouchableOpacity
                    className="h-[24px] w-[24px] items-center justify-center"
                    onPress={() => removeRecentSearch(term)}
                  >
                    <X size={16} color="#8a88a8" />
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Figma: Frame 299 - Trending Searches Section */}
        <View className="mb-[21px]">
          {/* Figma: Group 201 - Section Header */}
          <Text
            className="mb-[16px] text-[13px] leading-[19.5px] text-[#1a1828]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            Trending searches
          </Text>

          {/* Figma: Frame 295 - Trending Items List */}
          <View className="gap-y-[0px]">
            {TRENDING_SEARCHES.map((item, index) => (
              <TouchableOpacity
                key={item.term}
                className="h-[40px] flex-row items-center justify-between"
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "#0d5c6312",
                }}
                onPress={() => handleSearch(item.term)}
              >
                <View className="flex-1 flex-row items-center">
                  {/* Figma: trending-up icon */}
                  <TrendingUp size={16} color="#0d5c63" />
                  <Text
                    className="ml-[12px] text-[13px] leading-[19.5px] text-[#4a4868]"
                    style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                  >
                    {item.term}
                  </Text>
                </View>
                <Text
                  className="text-[11px] leading-[19.5px] text-[#8a88a8]"
                  style={{ fontFamily: "PlusJakartaSans_400Regular" }}
                >
                  {item.jobs}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Figma: Frame 205 - Categories Section */}
        <View>
          {/* Figma: Group 202 - Section Header */}
          <Text
            className="mb-[16px] text-[13px] leading-[19.5px] text-[#1a1828]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            Trending searches
          </Text>

          {/* Figma: Frame 298 - Categories Grid */}
          <View className="gap-y-[17px]">
            {/* Figma: Frame 296 - First Row */}
            <View className="flex-row gap-x-[11px]">
              {CATEGORIES.slice(0, 3).map((cat) => {
                const Icon = cat.Icon;
                return (
                  <TouchableOpacity
                    key={cat.id}
                    className="flex-1 h-[70px] items-center justify-center rounded-[12px]"
                    style={{ backgroundColor: cat.bg }}
                    onPress={() => handleSearch(cat.label)}
                  >
                    {/* Figma: Frame 237 - Icon + Label */}
                    <Icon size={20} color={cat.color} />
                    <Text
                      className="mt-[5px] text-[10px] leading-[12px]"
                      style={{ fontFamily: "Inter_600SemiBold", color: cat.color }}
                    >
                      {cat.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Figma: Frame 297 - Second Row */}
            <View className="flex-row gap-x-[11px]">
              {CATEGORIES.slice(3, 6).map((cat) => {
                const Icon = cat.Icon;
                return (
                  <TouchableOpacity
                    key={cat.id}
                    className="flex-1 h-[70px] items-center justify-center rounded-[12px]"
                    style={{ backgroundColor: cat.bg }}
                    onPress={() => handleSearch(cat.label)}
                  >
                    {/* Figma: Frame 237 - Icon + Label */}
                    <Icon size={20} color={cat.color} />
                    <Text
                      className="mt-[5px] text-[10px] leading-[12px]"
                      style={{ fontFamily: "Inter_600SemiBold", color: cat.color }}
                    >
                      {cat.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Figma: Nav Bar - Bottom Navigation */}
      <BottomNavBar navigation={navigation} activeTab="search" />
    </SafeAreaView>
  );
}

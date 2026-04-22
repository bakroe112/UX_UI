import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
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
  MapPin,
  DollarSign,
  Briefcase,
  Calendar,
  Check,
} from "lucide-react-native";
import BottomNavBar from "../components/BottomNavBar";

// ─── DATA ────────────────────────────────────────────────────────────────────

const RECENT_SEARCHES = [
  "Product Designer",
  "UX Designer",
  "Senior Designer",
  "Design System",
  "Figma",
];

const TRENDING_SEARCHES = [
  { term: "Remote Product Designer", trend: "+12%" },
  { term: "Senior UX Designer", trend: "+8%" },
  { term: "Design Systems Lead", trend: "+15%" },
  { term: "Frontend Developer", trend: "+5%" },
  { term: "Product Manager", trend: "+10%" },
];

const POPULAR_COMPANIES = [
  { name: "Figma", jobs: "12 jobs", logo: "F", logoBg: "#7a618112", logoColor: "#7a6181" },
  { name: "Notion", jobs: "8 jobs", logo: "N", logoBg: "#0d5c6312", logoColor: "#0d5c63" },
  { name: "Meta", jobs: "15 jobs", logo: "M", logoBg: "#e2b05312", logoColor: "#e2b053" },
  { name: "Google", jobs: "23 jobs", logo: "G", logoBg: "#16a34a12", logoColor: "#16a34a" },
];

const NAV_ITEMS = [
  { id: "home", label: "Home", Icon: House },
  { id: "search", label: "Search", Icon: SearchIcon },
  { id: "applied", label: "Applied", Icon: NotepadText },
  { id: "messages", label: "Messages", Icon: MessageSquareMore },
  { id: "profile", label: "Profile", Icon: User },
];

// ─── FILTER DATA ────────────────────────────────────────────────────────────

const FILTER_OPTIONS = {
  jobType: [
    { id: "fulltime", label: "Full-time", selected: false },
    { id: "parttime", label: "Part-time", selected: false },
    { id: "contract", label: "Contract", selected: false },
    { id: "internship", label: "Internship", selected: false },
  ],
  location: [
    { id: "remote", label: "Remote", selected: true },
    { id: "onsite", label: "On-site", selected: false },
    { id: "hybrid", label: "Hybrid", selected: false },
  ],
  experience: [
    { id: "entry", label: "Entry Level", selected: false },
    { id: "mid", label: "Mid Level", selected: false },
    { id: "senior", label: "Senior Level", selected: true },
    { id: "lead", label: "Lead/Principal", selected: false },
  ],
  salary: [
    { id: "0-50k", label: "$0 - $50k", selected: false },
    { id: "50k-100k", label: "$50k - $100k", selected: false },
    { id: "100k-150k", label: "$100k - $150k", selected: true },
    { id: "150k+", label: "$150k+", selected: false },
  ],
};

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function RecentSearchItem({ term, onPress, onRemove }) {
  return (
    <View className="mb-[8px] flex-row items-center justify-between rounded-[12px] bg-[#ffffff] px-[14px] py-[12px]">
      <TouchableOpacity className="flex-1 flex-row items-center" onPress={() => onPress(term)}>
        <Clock size={16} color="#8a88a8" />
        <Text
          className="ml-[10px] flex-1 text-[14px] leading-[21px] text-[#1c1a2e]"
          style={{ fontFamily: "PlusJakartaSans_500Medium" }}
        >
          {term}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="h-[24px] w-[24px] items-center justify-center"
        onPress={() => onRemove(term)}
      >
        <X size={14} color="#8a88a8" />
      </TouchableOpacity>
    </View>
  );
}

function TrendingSearchItem({ item, onPress }) {
  return (
    <TouchableOpacity
      className="mb-[8px] flex-row items-center justify-between rounded-[12px] bg-[#ffffff] px-[14px] py-[12px]"
      onPress={() => onPress(item.term)}
    >
      <View className="flex-1 flex-row items-center">
        <TrendingUp size={16} color="#16a34a" />
        <Text
          className="ml-[10px] flex-1 text-[14px] leading-[21px] text-[#1c1a2e]"
          style={{ fontFamily: "PlusJakartaSans_500Medium" }}
        >
          {item.term}
        </Text>
      </View>
      <View className="rounded-[6px] bg-[#f0fdf4] px-[6px] py-[2px]">
        <Text
          className="text-[10px] text-[#16a34a]"
          style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
        >
          {item.trend}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function CompanyCard({ company, onPress }) {
  return (
    <TouchableOpacity
      className="mr-[12px] w-[140px] rounded-[12px] bg-[#ffffff] px-[12px] py-[14px]"
      onPress={() => onPress(company.name)}
    >
      <View
        className="h-[40px] w-[40px] items-center justify-center rounded-[10px]"
        style={{ backgroundColor: company.logoBg }}
      >
        <Text
          className="text-[16px]"
          style={{ fontFamily: "PlusJakartaSans_800ExtraBold", color: company.logoColor }}
        >
          {company.logo}
        </Text>
      </View>
      <Text
        className="mt-[8px] text-[14px] leading-[21px] text-[#1c1a2e]"
        style={{ fontFamily: "PlusJakartaSans_700Bold" }}
      >
        {company.name}
      </Text>
      <Text
        className="text-[12px] leading-[18px] text-[#8a88a8]"
        style={{ fontFamily: "PlusJakartaSans_400Regular" }}
      >
        {company.jobs}
      </Text>
    </TouchableOpacity>
  );
}

// ─── FILTER MODAL COMPONENT ─────────────────────────────────────────────────

function FilterModal({ visible, onClose, filters, onUpdateFilters }) {
  const [localFilters, setLocalFilters] = useState(filters);

  function toggleFilter(category, filterId) {
    setLocalFilters(prev => ({
      ...prev,
      [category]: prev[category].map(item =>
        item.id === filterId ? { ...item, selected: !item.selected } : item
      )
    }));
  }

  function applyFilters() {
    onUpdateFilters(localFilters);
    onClose();
  }

  function clearAllFilters() {
    const clearedFilters = {};
    Object.keys(localFilters).forEach(category => {
      clearedFilters[category] = localFilters[category].map(item => ({
        ...item,
        selected: false
      }));
    });
    setLocalFilters(clearedFilters);
  }

  function FilterSection({ title, icon: Icon, iconColor, items, category }) {
    return (
      <View className="mb-[24px]">
        <View className="mb-[12px] flex-row items-center">
          <Icon size={16} color={iconColor} />
          <Text
            className="ml-[8px] text-[15px] text-[#1c1a2e]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            {title}
          </Text>
        </View>
        <View className="flex-row flex-wrap gap-[8px]">
          {items.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="rounded-[20px] px-[14px] py-[8px]"
              style={{
                backgroundColor: item.selected ? "#0d5c63" : "#ffffff",
                borderWidth: 1,
                borderColor: item.selected ? "#0d5c63" : "#e5e5e5",
              }}
              onPress={() => toggleFilter(category, item.id)}
            >
              <Text
                className="text-[13px]"
                style={{
                  fontFamily: "PlusJakartaSans_600SemiBold",
                  color: item.selected ? "#ffffff" : "#4a4868",
                }}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView className="flex-1 bg-[#f9f5f0]">
        {/* Header */}
        <View className="bg-[#ffffff] px-[20px] py-[16px]">
          <View className="flex-row items-center justify-between">
            <Text
              className="text-[18px] text-[#1c1a2e]"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              Filters
            </Text>
            <TouchableOpacity
              className="h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-[#f3efe9]"
              onPress={onClose}
            >
              <X size={18} color="#4a4868" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Filter Content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
        >
          <FilterSection
            title="Job Type"
            icon={Briefcase}
            iconColor="#7a6181"
            items={localFilters.jobType}
            category="jobType"
          />
          <FilterSection
            title="Location"
            icon={MapPin}
            iconColor="#0d5c63"
            items={localFilters.location}
            category="location"
          />
          <FilterSection
            title="Experience Level"
            icon={Calendar}
            iconColor="#e2b053"
            items={localFilters.experience}
            category="experience"
          />
          <FilterSection
            title="Salary Range"
            icon={DollarSign}
            iconColor="#16a34a"
            items={localFilters.salary}
            category="salary"
          />
        </ScrollView>

        {/* Bottom Actions */}
        <View
          className="bg-[#ffffff] px-[20px] py-[16px]"
          style={{ borderTopWidth: 1, borderTopColor: "#f3efe9" }}
        >
          <View className="flex-row gap-x-[12px]">
            <TouchableOpacity
              className="flex-1 h-[48px] items-center justify-center rounded-[12px]"
              style={{ borderWidth: 1, borderColor: "#0d5c63" }}
              onPress={clearAllFilters}
            >
              <Text
                className="text-[15px] text-[#0d5c63]"
                style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
              >
                Clear All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 h-[48px] items-center justify-center rounded-[12px] bg-[#0d5c63]"
              onPress={applyFilters}
            >
              <Text
                className="text-[15px] text-[#ffffff]"
                style={{ fontFamily: "PlusJakartaSans_700Bold" }}
              >
                Apply Filters
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

// ─── MAIN SCREEN ─────────────────────────────────────────────────────────────

export default function SearchScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [activeNav, setActiveNav] = useState("search");
  const [recentSearches, setRecentSearches] = useState(RECENT_SEARCHES);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filters, setFilters] = useState(FILTER_OPTIONS);

  function handleSearch(term) {
    if (term.trim()) {
      navigation.navigate("SearchResults", { query: term });
    }
  }

  function removeRecentSearch(term) {
    setRecentSearches((prev) => prev.filter((s) => s !== term));
  }

  function handleNavPress(navId) {
    setActiveNav(navId);
    if (navId === "home") {
      navigation.navigate("HomeFeed");
    }
  }

  function openFilterModal() {
    setShowFilterModal(true);
  }

  function closeFilterModal() {
    setShowFilterModal(false);
  }

  function updateFilters(newFilters) {
    setFilters(newFilters);
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* ── HEADER ── */}
      <View className="bg-[#ffffff] px-[20px] pb-[12px] pt-[45px]">
        {/* Search bar */}
        <View className="h-[45px] flex-row items-center rounded-[14px] bg-[#f9f5f0] px-[16px]">
          <Search size={16} color="#8a88a8" />
          <TextInput
            className="ml-[10px] flex-1 text-[14px] leading-[21px] text-[#1c1a2e]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            placeholder="Search jobs, companies, skills..."
            placeholderTextColor="#8a88a8"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={() => handleSearch(searchText)}
            returnKeyType="search"
          />
          <TouchableOpacity onPress={openFilterModal}>
            <SlidersVertical size={16} color="#0d5c63" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ── SCROLLABLE CONTENT ── */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 96, paddingTop: 18, paddingHorizontal: 20 }}
      >
        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <View className="mb-[28px]">
            <View className="mb-[14px] flex-row items-center justify-between">
              <Text
                className="text-[15px] text-[#000000]"
                style={{ fontFamily: "PlusJakartaSans_700Bold" }}
              >
                Recent Searches
              </Text>
              <TouchableOpacity onPress={() => setRecentSearches([])}>
                <Text
                  className="text-[12px] leading-[18px] text-[#0d5c63]"
                  style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
                >
                  Clear all
                </Text>
              </TouchableOpacity>
            </View>
            {recentSearches.map((term) => (
              <RecentSearchItem
                key={term}
                term={term}
                onPress={handleSearch}
                onRemove={removeRecentSearch}
              />
            ))}
          </View>
        )}

        {/* Trending Searches */}
        <View className="mb-[28px]">
          <Text
            className="mb-[14px] text-[15px] text-[#000000]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            Trending Searches
          </Text>
          {TRENDING_SEARCHES.map((item) => (
            <TrendingSearchItem key={item.term} item={item} onPress={handleSearch} />
          ))}
        </View>

        {/* Popular Companies */}
        <View>
          <Text
            className="mb-[14px] text-[15px] text-[#000000]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            Popular Companies
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {POPULAR_COMPANIES.map((company) => (
              <CompanyCard
                key={company.name}
                company={company}
                onPress={(name) => handleSearch(`jobs at ${name}`)}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* ── BOTTOM NAV BAR ── */}
      <BottomNavBar navigation={navigation} activeTab="search" />

      {/* ── FILTER MODAL ── */}
      <FilterModal
        visible={showFilterModal}
        onClose={closeFilterModal}
        filters={filters}
        onUpdateFilters={updateFilters}
      />
    </SafeAreaView>
  );
}
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import {
  ChevronLeft,
  Search,
  SlidersVertical,
  MapPin,
  Clock,
  Bookmark,
  Building2,
  Users,
  DollarSign,
  X,
  Briefcase,
  Calendar,
  Map,
} from "lucide-react-native";

// ─── DATA ────────────────────────────────────────────────────────────────────

const FILTER_CHIPS = [
  { id: "remote", label: "Remote", active: true },
  { id: "design", label: "Design", active: true },
  { id: "senior", label: "Senior", active: false },
  { id: "fulltime", label: "Full-time", active: false },
];

const JOB_RESULTS = [
  {
    id: "j1",
    title: "Senior Product Designer",
    company: "Figma",
    location: "Remote",
    salary: "140-160k",
    type: "Full-time",
    posted: "2 days ago",
    logo: "F",
    logoBg: "#7a618112",
    logoColor: "#7a6181",
    match: "98%",
    saved: false,
    description: "We're looking for a Senior Product Designer to join our growing design team...",
    applicants: "50+ applicants",
    companySize: "1k-5k employees",
  },
  {
    id: "j2",
    title: "Design Systems Lead",
    company: "Notion",
    location: "SF / Remote",
    salary: "$130-155k",
    type: "Full-time",
    posted: "1 day ago",
    logo: "N",
    logoBg: "#0d5c6312",
    logoColor: "#0d5c63",
    match: "89%",
    saved: true,
    description: "Join our design systems team to build and maintain our component library...",
    applicants: "25+ applicants",
    companySize: "500-1k employees",
  },
  {
    id: "j3",
    title: "Product Designer",
    company: "Meta",
    location: "Menlo Park, CA",
    salary: "$120-140k",
    type: "Full-time",
    posted: "3 days ago",
    logo: "M",
    logoBg: "#e2b05312",
    logoColor: "#e2b053",
    match: "85%",
    saved: false,
    description: "Help shape the future of social connection through thoughtful design...",
    applicants: "100+ applicants",
    companySize: "10k+ employees",
  },
  {
    id: "j4",
    title: "UX Designer",
    company: "Google",
    location: "Mountain View, CA",
    salary: "$110-130k",
    type: "Full-time",
    posted: "1 week ago",
    logo: "G",
    logoBg: "#16a34a12",
    logoColor: "#16a34a",
    match: "82%",
    saved: false,
    description: "Design intuitive experiences for millions of users across Google products...",
    applicants: "200+ applicants",
    companySize: "10k+ employees",
  },
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

function FilterChip({ chip, onToggle }) {
  return (
    <TouchableOpacity
      className="mr-[8px] rounded-[20px] px-[12px] py-[6px]"
      style={{
        backgroundColor: chip.active ? "#0d5c63" : "#ffffff",
        borderWidth: 1,
        borderColor: chip.active ? "#0d5c63" : "#0d5c6333",
      }}
      onPress={() => onToggle(chip.id)}
    >
      <Text
        className="text-[12px]"
        style={{
          fontFamily: "PlusJakartaSans_600SemiBold",
          color: chip.active ? "#ffffff" : "#4a4868",
        }}
      >
        {chip.label}
      </Text>
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
              {job.location}
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

      {/* Description */}
      <Text
        className="mt-[10px] text-[13px] leading-[19.5px] text-[#4a4868]"
        style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        numberOfLines={2}
      >
        {job.description}
      </Text>

      {/* Bottom row */}
      <View className="mt-[12px] flex-row items-center justify-between">
        <View className="flex-row items-center gap-x-[12px]">
          {/* Salary */}
          <View className="flex-row items-center">
            <DollarSign size={12} color="#e2b053" />
            <Text
              className="ml-[2px] text-[11px] text-[#e2b053]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              {job.salary}
            </Text>
          </View>
          {/* Posted time */}
          <View className="flex-row items-center">
            <Clock size={12} color="#8a88a8" />
            <Text
              className="ml-[2px] text-[11px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              {job.posted}
            </Text>
          </View>
          {/* Applicants */}
          <View className="flex-row items-center">
            <Users size={12} color="#8a88a8" />
            <Text
              className="ml-[2px] text-[11px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              {job.applicants}
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

export default function SearchResultsScreen({ navigation, route }) {
  const { query = "Product Designer" } = route.params || {};
  const [filterChips, setFilterChips] = useState(FILTER_CHIPS);
  const [jobs, setJobs] = useState(JOB_RESULTS);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filters, setFilters] = useState(FILTER_OPTIONS);

  function toggleFilter(chipId) {
    setFilterChips((prev) =>
      prev.map((chip) => (chip.id === chipId ? { ...chip, active: !chip.active } : chip))
    );
  }

  function toggleSaveJob(jobId) {
    setJobs((prev) =>
      prev.map((job) => (job.id === jobId ? { ...job, saved: !job.saved } : job))
    );
  }

  function handleJobPress(job) {
    navigation.navigate("JobDetail", { job });
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
            <TouchableOpacity onPress={openFilterModal}>
              <SlidersVertical size={16} color="#0d5c63" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Results count + Map button */}
        <View className="mt-[12px] flex-row items-center justify-between">
          <Text
            className="text-[13px] leading-[19.5px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            {jobs.length} jobs found for "{query}"
          </Text>
          <TouchableOpacity
            className="flex-row items-center rounded-[20px] bg-[#ebf6f7] px-[12px] py-[6px]"
            onPress={() => navigation.navigate("SearchMap", { query, jobs })}
          >
            <Map size={14} color="#0d5c63" />
            <Text
              className="ml-[4px] text-[12px] text-[#0d5c63]"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              Map View
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ── FILTER CHIPS ── */}
      <View className="bg-[#ffffff] px-[20px] pb-[12px]">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20 }}
        >
          {filterChips.map((chip) => (
            <FilterChip key={chip.id} chip={chip} onToggle={toggleFilter} />
          ))}
        </ScrollView>
      </View>

      {/* ── JOB RESULTS ── */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 18, paddingHorizontal: 20 }}
      >
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onPress={handleJobPress}
            onToggleSave={toggleSaveJob}
          />
        ))}

        {/* Load more */}
        <TouchableOpacity
          className="mt-[12px] h-[44px] items-center justify-center rounded-[12px] bg-[#ffffff]"
          style={{ borderWidth: 1, borderColor: "#0d5c6333" }}
        >
          <Text
            className="text-[14px] text-[#0d5c63]"
            style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
          >
            Load more jobs
          </Text>
        </TouchableOpacity>
      </ScrollView>

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
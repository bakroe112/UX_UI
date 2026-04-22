import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ChevronLeft,
  CheckCircle,
  Clock,
  AlertCircle,
  Circle,
  Calendar,
  User,
  MessageCircle,
} from "lucide-react-native";

// ─── DATA ────────────────────────────────────────────────────────────────────

const TIMELINE_EVENTS = [
  {
    id: "e1",
    title: "Application Submitted",
    description: "Your application has been successfully submitted",
    date: "Dec 15, 2024",
    time: "10:30 AM",
    status: "completed",
    type: "application",
  },
  {
    id: "e2",
    title: "Application Under Review",
    description: "HR team is reviewing your application",
    date: "Dec 16, 2024",
    time: "2:15 PM",
    status: "completed",
    type: "review",
  },
  {
    id: "e3",
    title: "Phone Screening Scheduled",
    description: "Initial phone screening with Sarah Johnson",
    date: "Dec 17, 2024",
    time: "3:00 PM",
    status: "completed",
    type: "interview",
  },
  {
    id: "e4",
    title: "Technical Interview",
    description: "Technical interview with the engineering team",
    date: "Dec 18, 2024",
    time: "11:00 AM",
    status: "current",
    type: "interview",
  },
  {
    id: "e5",
    title: "Final Interview",
    description: "Final interview with hiring manager",
    date: "Dec 20, 2024",
    time: "2:00 PM",
    status: "upcoming",
    type: "interview",
  },
  {
    id: "e6",
    title: "Decision",
    description: "Final hiring decision",
    date: "Dec 22, 2024",
    time: "TBD",
    status: "upcoming",
    type: "decision",
  },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function TimelineItem({ event, isLast }) {
  const getStatusIcon = () => {
    switch (event.status) {
      case "completed":
        return <CheckCircle size={20} color="#10b981" fill="#10b981" />;
      case "current":
        return <Clock size={20} color="#3b82f6" />;
      case "upcoming":
        return <Circle size={20} color="#8a88a8" />;
      default:
        return <Circle size={20} color="#8a88a8" />;
    }
  };

  const getStatusColor = () => {
    switch (event.status) {
      case "completed": return "#10b981";
      case "current": return "#3b82f6";
      case "upcoming": return "#8a88a8";
      default: return "#8a88a8";
    }
  };

  return (
    <View className="flex-row">
      {/* Timeline Line */}
      <View className="items-center">
        <View className="h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-[#ffffff] border-2" style={{ borderColor: getStatusColor() }}>
          {getStatusIcon()}
        </View>
        {!isLast && (
          <View 
            className="mt-[8px] h-[60px] w-[2px]" 
            style={{ backgroundColor: event.status === "completed" ? "#10b981" : "#e5e5e5" }}
          />
        )}
      </View>

      {/* Content */}
      <View className="ml-[16px] flex-1 pb-[24px]">
        <View className="rounded-[12px] bg-[#ffffff] p-[16px] shadow-sm border border-[#e5e5e5]">
          <Text
            className="text-[16px] text-[#1c1a2e]"
            style={{ fontFamily: "PlusJakartaSans_700Bold" }}
          >
            {event.title}
          </Text>
          <Text
            className="mt-[4px] text-[14px] text-[#4a4868]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            {event.description}
          </Text>
          
          <View className="mt-[12px] flex-row items-center">
            <Calendar size={14} color="#8a88a8" />
            <Text
              className="ml-[4px] text-[12px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_500Medium" }}
            >
              {event.date} • {event.time}
            </Text>
          </View>
          
          {event.status === "current" && (
            <View className="mt-[12px]">
              <TouchableOpacity className="flex-row items-center justify-center rounded-[8px] bg-[#dbeafe] py-[8px]">
                <MessageCircle size={14} color="#3b82f6" />
                <Text
                  className="ml-[4px] text-[12px] text-[#3b82f6]"
                  style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
                >
                  Join Interview
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

// ─── MAIN SCREEN ─────────────────────────────────────────────────────────────

export default function ApplicationTimelineScreen({ navigation, route }) {
  const { application } = route.params || {};

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
              Application Timeline
            </Text>
            <Text
              className="text-[14px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_500Medium" }}
            >
              {application?.position || "Senior Product Designer"} at {application?.company || "Figma"}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView 
        className="flex-1" 
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Timeline */}
        <View className="mb-[24px]">
          {TIMELINE_EVENTS.map((event, index) => (
            <TimelineItem
              key={event.id}
              event={event}
              isLast={index === TIMELINE_EVENTS.length - 1}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import {
  Search,
  MessageCircle,
  Phone,
  Video,
  MoreHorizontal,
  Circle,
  Check,
  CheckCheck,
  Camera,
  Mic,
  Plus,
  Edit3,
} from "lucide-react-native";
import BottomNavBar from "../components/BottomNavBar";

// ─── DATA ────────────────────────────────────────────────────────────────────

const CHAT_DATA = [
  {
    id: "c1",
    name: "Sarah Johnson",
    company: "Figma",
    role: "Senior Designer",
    lastMessage: "Thanks for the interview! Looking forward to hearing back from you.",
    time: "2m",
    unread: 2,
    online: true,
    avatar: "SJ",
    messageStatus: "delivered", // sent, delivered, read
    type: "recruiter",
  },
  {
    id: "c2", 
    name: "Tech Recruiter",
    company: "Google",
    role: "Talent Acquisition",
    lastMessage: "We'd love to schedule a technical interview with you. Are you available next week?",
    time: "15m",
    unread: 0,
    online: false,
    avatar: "TR",
    messageStatus: "read",
    type: "recruiter",
  },
  {
    id: "c3",
    name: "Alex Chen",
    company: "Airbnb", 
    role: "Engineering Manager",
    lastMessage: "Your portfolio looks impressive! Let's discuss the frontend role.",
    time: "1h",
    unread: 1,
    online: true,
    avatar: "AC",
    messageStatus: "delivered",
    type: "hiring_manager",
  },
  {
    id: "c4",
    name: "Maria Rodriguez",
    company: "Stripe",
    role: "Product Manager",
    lastMessage: "Could you walk me through your design process for the mobile app?",
    time: "3h",
    unread: 0,
    online: false,
    avatar: "MR", 
    messageStatus: "read",
    type: "interviewer",
  },
  {
    id: "c5",
    name: "David Kim",
    company: "Netflix",
    role: "Senior Developer",
    lastMessage: "The coding challenge was great! When can we schedule the next round?",
    time: "1d",
    unread: 3,
    online: true,
    avatar: "DK",
    messageStatus: "sent",
    type: "peer",
  },
  {
    id: "c6",
    name: "Emma Wilson",
    company: "Spotify",
    role: "UX Designer",
    lastMessage: "I'd love to learn more about your experience with design systems.",
    time: "2d",
    unread: 0,
    online: false,
    avatar: "EW",
    messageStatus: "read", 
    type: "peer",
  },
  {
    id: "c7",
    name: "HR Team",
    company: "Microsoft",
    role: "Human Resources",
    lastMessage: "Congratulations! We're excited to extend you an offer. Please check your email for details.",
    time: "3d",
    unread: 1,
    online: false,
    avatar: "HR",
    messageStatus: "delivered",
    type: "hr",
  },
];

const FILTER_TABS = [
  { id: "all", label: "All", count: 7 },
  { id: "unread", label: "Unread", count: 3 },
  { id: "recruiters", label: "Recruiters", count: 2 },
  { id: "interviews", label: "Interviews", count: 4 },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function ChatItem({ chat, onPress }) {
  const getMessageStatusIcon = () => {
    switch (chat.messageStatus) {
      case "sent":
        return <Check size={14} color="#8a88a8" />;
      case "delivered":
        return <CheckCheck size={14} color="#8a88a8" />;
      case "read":
        return <CheckCheck size={14} color="#0d5c63" />;
      default:
        return null;
    }
  };

  const getTypeColor = () => {
    switch (chat.type) {
      case "recruiter":
        return "#0d5c63";
      case "hiring_manager":
        return "#e2b053";
      case "interviewer":
        return "#8b5cf6";
      case "hr":
        return "#10b981";
      default:
        return "#8a88a8";
    }
  };

  return (
    <TouchableOpacity
      className="flex-row items-center px-[20px] py-[16px] bg-[#ffffff] border-b border-[#f0f0f0]"
      onPress={() => onPress(chat)}
    >
      {/* Avatar */}
      <View className="relative">
        <View
          className="h-[52px] w-[52px] items-center justify-center rounded-[16px]"
          style={{ backgroundColor: `${getTypeColor()}15` }}
        >
          <Text
            className="text-[16px]"
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              color: getTypeColor()
            }}
          >
            {chat.avatar}
          </Text>
        </View>
        {chat.online && (
          <View className="absolute -bottom-[2px] -right-[2px] h-[16px] w-[16px] items-center justify-center rounded-full bg-[#ffffff]">
            <View className="h-[12px] w-[12px] rounded-full bg-[#10b981]" />
          </View>
        )}
      </View>

      {/* Content */}
      <View className="ml-[12px] flex-1">
        <View className="flex-row items-center justify-between">
          <View className="flex-1">
            <Text
              className="text-[16px] text-[#1c1a2e]"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
              numberOfLines={1}
            >
              {chat.name}
            </Text>
            <Text
              className="mt-[2px] text-[12px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_500Medium" }}
              numberOfLines={1}
            >
              {chat.role} at {chat.company}
            </Text>
          </View>
          
          <View className="items-end">
            <Text
              className="text-[12px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_500Medium" }}
            >
              {chat.time}
            </Text>
            {chat.unread > 0 && (
              <View className="mt-[4px] h-[20px] min-w-[20px] items-center justify-center rounded-[10px] bg-[#0d5c63] px-[6px]">
                <Text
                  className="text-[11px] text-[#ffffff]"
                  style={{ fontFamily: "PlusJakartaSans_700Bold" }}
                >
                  {chat.unread > 9 ? "9+" : chat.unread}
                </Text>
              </View>
            )}
          </View>
        </View>
        
        <View className="mt-[6px] flex-row items-center">
          <View className="mr-[6px]">
            {getMessageStatusIcon()}
          </View>
          <Text
            className="flex-1 text-[14px] text-[#4a4868]"
            style={{ 
              fontFamily: chat.unread > 0 ? "PlusJakartaSans_600SemiBold" : "PlusJakartaSans_400Regular"
            }}
            numberOfLines={1}
          >
            {chat.lastMessage}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function FilterTab({ tab, isActive, onPress }) {
  return (
    <TouchableOpacity
      className="mr-[12px] rounded-[20px] px-[16px] py-[8px]"
      style={{
        backgroundColor: isActive ? "#0d5c63" : "#f3efe9",
      }}
      onPress={() => onPress(tab.id)}
    >
      <View className="flex-row items-center">
        <Text
          className="text-[14px]"
          style={{
            fontFamily: "PlusJakartaSans_600SemiBold",
            color: isActive ? "#ffffff" : "#8a88a8",
          }}
        >
          {tab.label}
        </Text>
        {tab.count > 0 && (
          <View
            className="ml-[6px] h-[18px] min-w-[18px] items-center justify-center rounded-[9px] px-[4px]"
            style={{
              backgroundColor: isActive ? "#ffffff20" : "#0d5c6320",
            }}
          >
            <Text
              className="text-[11px]"
              style={{
                fontFamily: "PlusJakartaSans_700Bold",
                color: isActive ? "#ffffff" : "#0d5c63",
              }}
            >
              {tab.count}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

// ─── MAIN SCREEN ─────────────────────────────────────────────────────────────

export default function ChatListScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [chats, setChats] = useState(CHAT_DATA);

  function handleChatPress(chat) {
    navigation.navigate("ChatFrame", { chat });
  }

  function getFilteredChats() {
    let filtered = chats;
    
    if (activeFilter === "unread") {
      filtered = chats.filter(chat => chat.unread > 0);
    } else if (activeFilter === "recruiters") {
      filtered = chats.filter(chat => chat.type === "recruiter");
    } else if (activeFilter === "interviews") {
      filtered = chats.filter(chat => 
        chat.type === "hiring_manager" || 
        chat.type === "interviewer" || 
        chat.type === "hr"
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(chat =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }

  const filteredChats = getFilteredChats();
  const totalUnread = chats.reduce((sum, chat) => sum + chat.unread, 0);

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* ── HEADER ── */}
      <View className="bg-[#ffffff] px-[20px] pb-[16px] pt-[45px]">
        <View className="flex-row items-center justify-between">
          <View>
            <Text
              className="text-[24px] text-[#1c1a2e]"
              style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
            >
              Messages
            </Text>
            {totalUnread > 0 && (
              <Text
                className="mt-[2px] text-[14px] text-[#8a88a8]"
                style={{ fontFamily: "PlusJakartaSans_500Medium" }}
              >
                {totalUnread} unread message{totalUnread > 1 ? "s" : ""}
              </Text>
            )}
          </View>
          
          <View className="flex-row items-center gap-x-[12px]">
            <TouchableOpacity className="h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#f3efe9]">
              <Edit3 size={20} color="#8a88a8" />
            </TouchableOpacity>
            <TouchableOpacity className="h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#0d5c63]">
              <Plus size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View className="mt-[16px] flex-row items-center rounded-[12px] bg-[#f3efe9] px-[16px] py-[12px]">
          <Search size={20} color="#8a88a8" />
          <TextInput
            className="ml-[12px] flex-1 text-[16px] text-[#1c1a2e]"
            style={{ fontFamily: "PlusJakartaSans_500Medium" }}
            placeholder="Search messages..."
            placeholderTextColor="#8a88a8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* ── FILTER TABS ── */}
      <View className="bg-[#ffffff] px-[20px] py-[16px] border-b border-[#f0f0f0]">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20 }}
        >
          {FILTER_TABS.map((tab) => (
            <FilterTab
              key={tab.id}
              tab={tab}
              isActive={activeFilter === tab.id}
              onPress={setActiveFilter}
            />
          ))}
        </ScrollView>
      </View>

      {/* ── CHAT LIST ── */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <ChatItem
              key={chat.id}
              chat={chat}
              onPress={handleChatPress}
            />
          ))
        ) : (
          <View className="flex-1 items-center justify-center px-[40px] py-[60px]">
            <View className="h-[80px] w-[80px] items-center justify-center rounded-[20px] bg-[#f3efe9]">
              <MessageCircle size={32} color="#8a88a8" />
            </View>
            <Text
              className="mt-[16px] text-[18px] text-[#1c1a2e]"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              No messages found
            </Text>
            <Text
              className="mt-[8px] text-center text-[14px] text-[#8a88a8]"
              style={{ fontFamily: "PlusJakartaSans_500Medium" }}
            >
              {searchQuery 
                ? "Try adjusting your search terms"
                : "Start a conversation with recruiters and hiring managers"
              }
            </Text>
          </View>
        )}
      </ScrollView>

      {/* ── BOTTOM NAV BAR ── */}
      <BottomNavBar navigation={navigation} activeTab="messages" />
    </SafeAreaView>
  );
}
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Search, PenLine } from "lucide-react-native";
import AppStatusBar from "../components/AppStatusBar";
import BottomNavBar from "../components/BottomNavBar";

const CHATS = [
  {
    id: "1",
    initial: "M",
    name: "Emma Chen",
    company: "Figma",
    message: "Looking forward to our next round!",
    time: "2:34 PM",
    unread: 2,
    bold: true,
  },
  {
    id: "2",
    initial: "M",
    name: "Emma Chen",
    company: "Figma",
    message: "Looking forward to our next round!",
    time: "2:34 PM",
    unread: 2,
    bold: true,
  },
  {
    id: "3",
    initial: "M",
    name: "Emma Chen",
    company: "Figma",
    message: "Looking forward to our next round!",
    time: "2:34 PM",
    unread: 2,
    bold: true,
  },
  {
    id: "4",
    initial: "J",
    name: "Jordan Lee",
    company: "Linear",
    message: "We'd love to move you to final round",
    time: "Mar 30",
    unread: 0,
    bold: false,
  },
];

export default function ChatListScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");

  return (
    <View className="flex-1 bg-[#f9f5f0]">
      {/* Figma: Status Bar */}
      <AppStatusBar />

      {/* Figma: Group 146 - Header */}
      <View className="bg-[#ffffff] px-[21px] pt-[11px] pb-[16px]">
        {/* Figma: Frame 391 - Title Row */}
        <View className="flex-row items-center justify-between" style={{ height: 33.4 }}>
          <Text
            className="text-[20px] text-[#1a1828]"
            style={{ fontFamily: "PlusJakartaSans_800ExtraBold", letterSpacing: -0.4, lineHeight: 30 }}
          >
            Messages
          </Text>

          {/* Figma: Group 199 / Group 142 - Pen Button */}
          <TouchableOpacity
            className="items-center justify-center rounded-[11px] bg-[#f3efe9]"
            style={{ width: 33.4, height: 33.4 }}
          >
            <PenLine size={14} color="#4a4868" />
          </TouchableOpacity>
        </View>

        {/* Figma: Group 198 - Search Input */}
        <View
          className="mt-[15px] flex-row items-center rounded-[7px] bg-[#f3efe9] px-[16px]"
          style={{ height: 34.77 }}
        >
          {/* Figma: Frame 235 - search icon */}
          <Search size={16} color="#8a88a8" />
          {/* Figma: Search messages... text */}
          <TextInput
            className="ml-[11px] flex-1 text-[14px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular", textAlignVertical: "center", paddingVertical: 0 }}
            placeholder="Search messages..."
            placeholderTextColor="#8a88a8"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      {/* Figma: Frame 396 - Chat List */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {CHATS.map((chat) => (
          <TouchableOpacity
            key={chat.id}
            className="bg-[#ffffff]"
            style={{ height: 83, borderBottomWidth: 1, borderBottomColor: "#0d5c6312" }}
            onPress={() => navigation.navigate("ChatFrame", { chat })}
          >
            {/* Figma: Frame 395 */}
            <View className="flex-row px-[20px]" style={{ paddingTop: 13 }}>
              {/* Figma: Group 322 - Avatar */}
              <View style={{ width: 54, height: 51 }}>
                <View
                  className="items-center justify-center"
                  style={{ width: 48, height: 48, borderRadius: 15, backgroundColor: "#7a618114", marginTop: 5.5 }}
                >
                  <Text
                    className="text-[#7a6181]"
                    style={{ fontFamily: "PlusJakartaSans_800ExtraBold", fontSize: 19, lineHeight: 28.5 }}
                  >
                    {chat.initial}
                  </Text>
                </View>

                {/* Figma: Group 321 - Unread Badge */}
                {chat.unread > 0 && (
                  <View
                    className="absolute items-center justify-center"
                    style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: "#ffffff", top: 2.5, right: 0 }}
                  >
                    <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "#0d5c63", alignItems: "center", justifyContent: "center" }}>
                      <Text style={{ fontFamily: "PlusJakartaSans_700Bold", fontSize: 9, color: "#ffffff", lineHeight: 13.5 }}>
                        {chat.unread}
                      </Text>
                    </View>
                  </View>
                )}
              </View>

              {/* Figma: Frame 394 - Content */}
              <View className="ml-[11px] flex-1">
                {/* Figma: Frame 393 - Name + Time */}
                <View className="flex-row items-center justify-between" style={{ height: 21 }}>
                  <Text
                    className="text-[#1c1a2e]"
                    style={{ fontFamily: "PlusJakartaSans_700Bold", fontSize: 14, lineHeight: 21 }}
                  >
                    {chat.name}
                  </Text>
                  <Text
                    className="text-[#8a88a8]"
                    style={{ fontFamily: "PlusJakartaSans_400Regular", fontSize: 11, lineHeight: 16.5 }}
                  >
                    {chat.time}
                  </Text>
                </View>

                {/* Figma: Company */}
                <Text
                  className="text-[#0d5c63]"
                  style={{ fontFamily: "PlusJakartaSans_600SemiBold", fontSize: 11, lineHeight: 16.5 }}
                >
                  {chat.company}
                </Text>

                {/* Figma: Message Preview */}
                <Text
                  style={{
                    fontFamily: chat.bold ? "PlusJakartaSans_600SemiBold" : "PlusJakartaSans_400Regular",
                    fontSize: 12,
                    lineHeight: 18,
                    color: chat.bold ? "#1c1a2e" : "#8a88a8",
                  }}
                  numberOfLines={1}
                >
                  {chat.message}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Figma: Nav Bar */}
      <BottomNavBar navigation={navigation} activeTab="messages" />
    </View>
  );
}

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import {
  House,
  Search as SearchIcon,
  NotepadText,
  MessageSquareMore,
  User,
} from "lucide-react-native";

const NAV_ITEMS = [
  { id: "home", label: "Home", Icon: House, route: "HomeFeed" },
  { id: "search", label: "Search", Icon: SearchIcon, route: "Search" },
  { id: "applied", label: "Applied", Icon: NotepadText, route: "Tracker" },
  { id: "messages", label: "Messages", Icon: MessageSquareMore, route: "ChatList" },
  { id: "profile", label: "Profile", Icon: User, route: "Profile" },
];

export default function BottomNavBar({ navigation, activeTab = "home" }) {
  function handleNavPress(navId, route) {
    if (route && route !== navigation.getState().routeNames[navigation.getState().index]) {
      navigation.navigate(route);
    }
  }

  return (
    <View
      className="absolute bottom-0 left-0 right-0 h-[76px] flex-row items-center justify-between px-[20px]"
      style={{ backgroundColor: "#ffffff" }}
    >
      {NAV_ITEMS.map((item) => {
        const { Icon } = item;
        const isActive = activeTab === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            className="items-center"
            style={{ width: 56 }}
            onPress={() => handleNavPress(item.id, item.route)}
          >
            {/* Active indicator line */}
            {isActive && (
              <View className="absolute top-[-14px] h-[2px] w-[24px] rounded-full bg-[#0d5c63]" />
            )}
            <Icon
              size={24}
              color={isActive ? "#0d5c63" : "#b0b0c8"}
              fill={isActive ? "#0d5c631f" : "transparent"}
            />
            <Text
              className="mt-[4px] text-[12px] tracking-[-0.3px] leading-[15px]"
              style={{
                fontFamily: isActive ? "PlusJakartaSans_600SemiBold" : "PlusJakartaSans_400Regular",
                color: isActive ? "#0d5c63" : "#b0b0c8",
              }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
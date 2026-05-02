import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Search, PenLine } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import StatusBar from "../../components/StatusBar";
import NavBar from "../../components/NavBar";
import { RootStackParamList } from "../../../App";

type ChatListNavigationProp = NativeStackNavigationProp<RootStackParamList, "ChatList">;

const ChatList = () => {
  const navigation = useNavigation<ChatListNavigationProp>();

  const chats = [
    {
      id: 1,
      initial: "M",
      name: "Emma Chen",
      company: "Figma",
      message: "Looking forward to our next round!",
      time: "2:34 PM",
      unread: 2,
      hasUnread: true,
      messageColor: "#1C1A2E",
    },
    {
      id: 2,
      initial: "M",
      name: "Lee Chen",
      company: "Figma",
      message: "I need to see more",
      time: "2:34 PM",
      unread: 2,
      hasUnread: true,
      messageColor: "#1C1A2E",
    },
    {
      id: 3,
      initial: "M",
      name: "Mia Clarie",
      company: "Figma",
      message: "Good to see you",
      time: "2:34 PM",
      unread: 2,
      hasUnread: true,
      messageColor: "#8A88A8",
    },
    {
      id: 4,
      initial: "J",
      name: "Jordan Lee",
      company: "Linear",
      message: "I've seen your Applications",
      time: "Mar 30",
      unread: 0,
      hasUnread: false,
      messageColor: "#8A88A8",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Messages</Text>
          <TouchableOpacity style={styles.iconButton}>
            <PenLine size={14} color="#4A4868" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={16} color="#8A88A8" />
          </View>
          <Text style={styles.searchPlaceholder}>Search messages...</Text>
        </View>
      </View>

      {/* Chat List */}
      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {chats.map((chat) => (
          <TouchableOpacity
            key={chat.id}
            style={styles.chatItem}
            onPress={() => navigation.navigate("ChatFrame")}
          >
            <View style={styles.chatContent}>
              {/* Avatar with badge */}
              <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{chat.initial}</Text>
                </View>
                {chat.hasUnread && (
                  <View style={styles.unreadBadgeContainer}>
                    <View style={styles.unreadBadgeOuter}>
                      <View style={styles.unreadBadgeInner} />
                    </View>
                    <Text style={styles.unreadBadgeText}>{chat.unread}</Text>
                  </View>
                )}
              </View>

              {/* Chat Info */}
              <View style={styles.chatInfo}>
                <View style={styles.chatHeader}>
                  <Text style={styles.chatName}>{chat.name}</Text>
                  <Text style={styles.chatTime}>{chat.time}</Text>
                </View>
                <Text style={styles.chatCompany}>{chat.company}</Text>
                <Text style={[styles.chatMessage, { color: chat.messageColor }]}>{chat.message}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <NavBar
        activeTab="Messages"
        onTabPress={(tab) => {
          if (tab === "Home") navigation.navigate("HomeFeed");
          else if (tab === "Search") navigation.navigate("SearchBefore");
          else if (tab === "Applied") navigation.navigate("TrackerAll");
          else if (tab === "Messages") navigation.navigate("ChatList");
          else if (tab === "Profile") navigation.navigate("ProfileOverview");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F5F0",
  },
  header: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 21,
    paddingTop: 12,
    paddingBottom: 19,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 17,
  },
  headerTitle: {
    color: "#1A1828",
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 30,
    letterSpacing: -0.4,
  },
  iconButton: {
    width: 33.4,
    height: 33.4,
    borderRadius: 11,
    backgroundColor: "#F3EFE9",
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    position: "relative",
  },
  searchBar: {
    height: 34.77,
    backgroundColor: "#F3EFE9",
    borderRadius: 7,
    paddingLeft: 16,
    justifyContent: "center",
  },
  searchPlaceholder: {
    position: "absolute",
    left: 42.88,
    top: 9.39,
    color: "#8A88A8",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
  },
  scrollContent: {
    flex: 1,
  },
  chatItem: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#0D5C6312",
    height: 83,
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  chatContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatarContainer: {
    position: "relative",
    width: 54,
    height: 51,
    marginRight: 11,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "#7A618114",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5.5,
  },
  avatarText: {
    color: "#7A6181",
    fontSize: 19,
    fontWeight: "800",
    lineHeight: 28.5,
  },
  unreadBadgeContainer: {
    position: "absolute",
    top: 2.5,
    right: 0,
    width: 18,
    height: 18,
  },
  unreadBadgeOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  unreadBadgeInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#0D5C63",
  },
  unreadBadgeText: {
    position: "absolute",
    top: 2,
    left: 6,
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "700",
    lineHeight: 13.5,
  },
  chatInfo: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 0,
  },
  chatName: {
    color: "#1C1A2E",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21,
  },
  chatTime: {
    color: "#8A88A8",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 16.5,
  },
  chatCompany: {
    color: "#0D5C63",
    fontSize: 11,
    fontWeight: "600",
    lineHeight: 16.5,
  },
  chatMessage: {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 18,
  },
});

export default ChatList;

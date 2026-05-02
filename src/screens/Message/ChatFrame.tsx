import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { ChevronLeft, Phone, Video, Info, Bell, ArrowRight, Check, CheckCheck, Calendar, Link, SmilePlus, Send } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import StatusBar from "../../components/StatusBar";
import { RootStackParamList } from "../../../App";

type ChatFrameNavigationProp = NativeStackNavigationProp<RootStackParamList, "ChatFrame">;

const ChatFrame = () => {
  const navigation = useNavigation<ChatFrameNavigationProp>();

  return (
    <View style={styles.container}>
      <StatusBar />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ChevronLeft size={17.58} color="#4A4868" />
        </TouchableOpacity>

        <View style={styles.headerInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>EC</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Emma Chen</Text>
            <View style={styles.statusRow}>
              <View style={styles.onlineDot} />
              <Text style={styles.userStatus}>Recruiter · Figma</Text>
            </View>
          </View>
        </View>

        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Phone size={16} color="#4A4868" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Video size={16} color="#4A4868" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Info size={16} color="#4A4868" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Job Banner */}
      <View style={styles.jobBanner}>
        <Bell size={16} color="#0D5C63" />
        <Text style={styles.jobBannerText}>
          <Text style={styles.jobBannerRegular}>Discussing: </Text>
          <Text style={styles.jobBannerBold}>Sr. Product Designer at </Text>
          <Text style={styles.jobBannerRegular}>Figma</Text>
          <Text style={styles.jobBannerRegular}> · </Text>
          <Text style={styles.jobBannerRegular}>$140k–$180k</Text>
        </Text>
        <ArrowRight size={16} color="#0D5C63" />
      </View>

      {/* Messages */}
      <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false}>
        {/* Date Divider */}
        <View style={styles.dateDivider}>
          <Text style={styles.dateDividerText}>Today, Apr 6</Text>
        </View>

        {/* Message from Emma */}
        <View style={styles.messageRow}>
          <View style={styles.messageAvatar}>
            <Text style={styles.messageAvatarText}>EC</Text>
          </View>
          <View style={styles.messageBubbleLeft}>
            <Text style={styles.messageText}>
              Hi Sarah! I reviewed your portfolio and I'm really impressed with your design systems work at Airbnb.
            </Text>
            <Text style={styles.messageTime}>11:23 AM</Text>
          </View>
        </View>

        {/* Message from User */}
        <View style={styles.messageRowRight}>
          <View style={styles.messageBubbleRight}>
            <Text style={styles.messageTextRight}>
              Thank you so much Emma! I'm really excited about the opportunity at Figma — the product deeply aligns with how I work.
            </Text>
            <View style={styles.messageTimeRight}>
              <Text style={styles.messageTimeTextRight}>11:45 AM</Text>
              <CheckCheck size={14} color="#FFFFFF8C" />
            </View>
          </View>
        </View>

        {/* Message from Emma */}
        <View style={styles.messageRow}>
          <View style={styles.messageAvatar}>
            <Text style={styles.messageAvatarText}>EC</Text>
          </View>
          <View style={styles.messageBubbleLeft}>
            <Text style={styles.messageText}>
              Perfect! Sending you a Google Meet invite for Thursday at 2 PM.
            </Text>
            <Text style={styles.messageTime}>12:18 PM</Text>
          </View>
        </View>

        {/* Interview Invite Card */}
        <View style={styles.inviteCard}>
          <View style={styles.inviteHeader}>
            <View style={styles.inviteIcon}>
              <Calendar size={18} color="#0D5C63" />
            </View>
            <View style={styles.inviteInfo}>
              <Text style={styles.inviteTitle}>Video Interview Invite</Text>
              <Text style={styles.inviteDetails}>Thursday, Apr 4 · 2:00 PM · 45 min</Text>
            </View>
          </View>
          <View style={styles.inviteActions}>
            <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.acceptButtonText}>Accept</Text>
              <Check size={16} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.declineButton}>
              <Text style={styles.declineButtonText}>Decline</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Input Bar */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.inputIconButton}>
          <Link size={18} color="#4A4868" />
        </TouchableOpacity>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            placeholderTextColor="#8A88A8"
          />
        </View>
        <TouchableOpacity style={styles.inputIconButton}>
          <SmilePlus size={18} color="#4A4868" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton}>
          <Send size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
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
    borderBottomWidth: 1,
    borderBottomColor: "#0D5C6312",
    paddingHorizontal: 16,
    paddingVertical: 0,
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    width: 33.4,
    height: 33.4,
    borderRadius: 10,
    backgroundColor: "#F3EFE9",
    justifyContent: "center",
    alignItems: "center",
  },
  headerInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginLeft: 11,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "#7A618118",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#7A6181",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 16.5,
  },
  userInfo: {
    marginLeft: 8.53,
  },
  userName: {
    color: "#1A1828",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 22.5,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  onlineDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#22C55E",
    marginRight: 4,
  },
  userStatus: {
    color: "#8A88A8",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 16.5,
  },
  headerActions: {
    flexDirection: "row",
    gap: 5.2,
  },
  actionButton: {
    width: 33.4,
    height: 33.4,
    borderRadius: 10,
    backgroundColor: "#F3EFE9",
    justifyContent: "center",
    alignItems: "center",
  },
  jobBanner: {
    backgroundColor: "#EBF6F7",
    borderWidth: 1,
    borderColor: "#C8E6E8",
    height: 53,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  jobBannerText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
  },
  jobBannerBold: {
    color: "#0D5C63",
    fontWeight: "700",
  },
  jobBannerRegular: {
    color: "#0D5C63",
    fontWeight: "500",
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  dateDivider: {
    alignSelf: "center",
    backgroundColor: "#F3EFE9",
    borderRadius: 12,
    paddingHorizontal: 32.5,
    paddingVertical: 2.25,
    marginBottom: 20,
  },
  dateDividerText: {
    color: "#8A88A8",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 16.5,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 16,
  },
  messageAvatar: {
    width: 30,
    height: 30,
    borderRadius: 7,
    backgroundColor: "#7A618118",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  messageAvatarText: {
    color: "#7A6181",
    fontSize: 11,
    fontWeight: "600",
    lineHeight: 16.5,
  },
  messageBubbleLeft: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderBottomLeftRadius: 4,
    padding: 14,
    maxWidth: 240,
  },
  messageText: {
    color: "#1A1828",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22.4,
    marginBottom: 4,
  },
  messageTime: {
    color: "#8A88A8",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 15,
  },
  messageRowRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  messageBubbleRight: {
    backgroundColor: "#0D5C63",
    borderRadius: 16,
    borderBottomRightRadius: 4,
    padding: 16,
    maxWidth: 255,
  },
  messageTextRight: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22.4,
    marginBottom: 8,
  },
  messageTimeRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 4,
  },
  messageTimeTextRight: {
    color: "#FFFFFF8C",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 15,
  },
  inviteCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#C8E6E8",
    borderRadius: 16,
    padding: 19,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
  },
  inviteHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 14,
  },
  inviteIcon: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: "#EBF6F7",
    justifyContent: "center",
    alignItems: "center",
  },
  inviteInfo: {
    marginLeft: 10,
    flex: 1,
  },
  inviteTitle: {
    color: "#1A1828",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19.5,
  },
  inviteDetails: {
    color: "#8A88A8",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 16.5,
  },
  inviteActions: {
    flexDirection: "row",
    gap: 5,
  },
  acceptButton: {
    flex: 1,
    backgroundColor: "#0D5C63",
    borderRadius: 10,
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  acceptButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 18,
  },
  declineButton: {
    flex: 1,
    backgroundColor: "#F3EFE9",
    borderRadius: 10,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  declineButtonText: {
    color: "#7A6181",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 18,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#0D5C6312",
    height: 83,
    paddingHorizontal: 16,
    paddingVertical: 19.5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  inputIconButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#F3EFE9",
    justifyContent: "center",
    alignItems: "center",
  },
  inputWrapper: {
    flex: 1,
    height: 44,
    backgroundColor: "#F3EFE9",
    borderRadius: 22,
    justifyContent: "center",
    paddingHorizontal: 19,
  },
  input: {
    color: "#8A88A8",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#0D5C63",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatFrame;

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  ChevronLeft,
  Phone,
  Video,
  Info,
  Bell,
  ArrowRight,
  CheckCheck,
  Calendar,
  Check,
  Link,
  SmilePlus,
  Send,
} from "lucide-react-native";
import AppStatusBar from "../components/AppStatusBar";

export default function ChatFrameScreen({ navigation }) {
  const [messageText, setMessageText] = useState("");

  return (
    <View className="flex-1 bg-[#f9f5f0]">
      {/* Figma: Status Bar */}
      <AppStatusBar />

      {/* Figma: Frame 146 - Header (h=64, px=16) */}
      <View
        className="bg-[#ffffff] flex-row items-center px-[16px]"
        style={{ height: 64, borderBottomWidth: 1, borderBottomColor: "#0d5c6312" }}
      >
        {/* Figma: Group 142 - Back Button (33.4x33.4, radius=10) */}
        <TouchableOpacity
          className="items-center justify-center rounded-[10px] bg-[#f3efe9]"
          style={{ width: 33.4, height: 33.4 }}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={17.58} color="#4a4868" />
        </TouchableOpacity>

        {/* Figma: Frame 268 - Avatar + Name (x=64.2, w=188) */}
        <View className="flex-row items-center flex-1" style={{ marginLeft: 10.8 }}>
          {/* Figma: Group 263 - Avatar (40x40, radius=13, bg=#7a618118) */}
          <View
            className="items-center justify-center"
            style={{ width: 40, height: 40, borderRadius: 13, backgroundColor: "#7a618118" }}
          >
            <Text style={{ fontFamily: "PlusJakartaSans_700Bold", fontSize: 16, lineHeight: 16.5, color: "#7a6181" }}>
              EC
            </Text>
          </View>

          {/* Figma: Frame 318 - Name + status (ml=8.53) */}
          <View style={{ marginLeft: 8.53 }}>
            <Text style={{ fontFamily: "PlusJakartaSans_700Bold", fontSize: 15, lineHeight: 22.5, color: "#1a1828" }}>
              Emma Chen
            </Text>
            {/* Figma: Group 328 - green dot + role text */}
            <View className="flex-row items-center">
              {/* Figma: Ellipse 34 - green dot (6x6) */}
              <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#22c55e" }} />
              <Text style={{ fontFamily: "PlusJakartaSans_400Regular", fontSize: 11, lineHeight: 16.5, color: "#8a88a8", marginLeft: 4 }}>
                Recruiter · Figma
              </Text>
            </View>
          </View>
        </View>

        {/* Figma: Frame 142 - 3 action buttons (w=110, gap=5) */}
        <View className="flex-row items-center" style={{ gap: 5 }}>
          {/* Figma: Group 333 - Phone (33.4x33.4, radius=10) */}
          <TouchableOpacity className="items-center justify-center rounded-[10px] bg-[#f3efe9]" style={{ width: 33.4, height: 33.4 }}>
            <Phone size={16} color="#4a4868" />
          </TouchableOpacity>
          {/* Figma: Group 333 - Video */}
          <TouchableOpacity className="items-center justify-center rounded-[10px] bg-[#f3efe9]" style={{ width: 33.4, height: 33.4 }}>
            <Video size={16} color="#4a4868" />
          </TouchableOpacity>
          {/* Figma: Group 334 - Info */}
          <TouchableOpacity className="items-center justify-center rounded-[10px] bg-[#f3efe9]" style={{ width: 33.4, height: 33.4 }}>
            <Info size={16} color="#4a4868" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Figma: Group 267 - Job Banner (h=53, bg=#ebf6f7, border=#c8e6e8) */}
      <View
        className="bg-[#ebf6f7] flex-row items-center px-[20px]"
        style={{ height: 53, borderBottomWidth: 1, borderBottomColor: "#c8e6e8" }}
      >
        {/* Figma: bell icon (16x16) */}
        <Bell size={16} color="#0d5c63" />
        {/* Figma: Frame 399 - text (w=295, ml=13) */}
        <Text
          className="flex-1"
          style={{ fontFamily: "PlusJakartaSans_400Regular", fontSize: 12, lineHeight: 18, color: "#000000", marginLeft: 13 }}
        >
          {"Discussing: "}
          <Text style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}>Sr. Product Designer at Figma</Text>
          {" · "}
          <Text style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}>$140k–$180k</Text>
        </Text>
        {/* Figma: arrow-right icon (16x16) */}
        <ArrowRight size={16} color="#0d5c63" />
      </View>

      {/* Figma: Group 351 - Messages + Input */}
      <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView className="flex-1 px-[20px]" showsVerticalScrollIndicator={false}>

          {/* Figma: Group 336 - Date separator (x=153, y=181, w=88, h=21, radius=12) */}
          <View className="items-center mt-[26px]">
            <View className="items-center justify-center" style={{ width: 88, height: 21, borderRadius: 12, backgroundColor: "#f3efe9" }}>
              <Text style={{ fontFamily: "PlusJakartaSans_400Regular", fontSize: 11, lineHeight: 16.5, color: "#8a88a8" }}>
                Today, Apr 6
              </Text>
            </View>
          </View>

          {/* Figma: Group 350 - All messages container */}

          {/* Figma: Frame 403 - Received msg 1 (avatar bottom-aligned, bubble w=255) */}
          <View className="mt-[15px] flex-row items-end">
            {/* Figma: Group 264 - Avatar EC (30x30, radius=7, bg=#7a618118) */}
            <View className="items-center justify-center" style={{ width: 30, height: 30, borderRadius: 7, backgroundColor: "#7a618118" }}>
              <Text style={{ fontFamily: "PlusJakartaSans_600SemiBold", fontSize: 11, lineHeight: 16.5, color: "#7a6181" }}>EC</Text>
            </View>

            {/* Figma: Group 338 - Bubble (w=255, bg=#ffffff, radius mixed: TL=16,TR=16,BR=16,BL=0) */}
            <View style={{ marginLeft: 8, width: 255, backgroundColor: "#ffffff", borderTopLeftRadius: 16, borderTopRightRadius: 16, borderBottomRightRadius: 16, borderBottomLeftRadius: 0, paddingHorizontal: 18, paddingTop: 10, paddingBottom: 10 }}>
              {/* Figma: Group 337 - text + timestamp inside bubble */}
              <Text style={{ fontFamily: "PlusJakartaSans_400Regular", fontSize: 14, lineHeight: 22.4, color: "#1a1828" }}>
                Hi Sarah! I reviewed your portfolio and I'm really impressed with your design systems work at Airbnb.
              </Text>
              {/* Figma: 11:23 AM (inside bubble, below text) */}
              <Text style={{ fontFamily: "PlusJakartaSans_400Regular", fontSize: 10, lineHeight: 15, color: "#8a88a8", marginTop: 2 }}>
                11:23 AM
              </Text>
            </View>
          </View>

          {/* Figma: Group 343 - Sent msg (bubble w=255, bg=#0d5c63, radius: TL=16,TR=16,BR=0,BL=16) */}
          <View className="mt-[16px] flex-row justify-end">
            <View style={{ width: 255, backgroundColor: "#0d5c63", borderTopLeftRadius: 16, borderTopRightRadius: 16, borderBottomRightRadius: 0, borderBottomLeftRadius: 16, paddingHorizontal: 19, paddingTop: 14, paddingBottom: 14 }}>
              {/* Figma: Frame 404 - text */}
              <Text style={{ fontFamily: "PlusJakartaSans_400Regular", fontSize: 14, lineHeight: 22.4, color: "#ffffff" }}>
                Thank you so much Emma! I'm really excited about the opportunity at Figma — the product deeply aligns with how I work.
              </Text>
              {/* Figma: Group 342 - time + check-check (inside bubble, right-aligned) */}
              <View className="flex-row items-center justify-end" style={{ marginTop: 4 }}>
                <Text style={{ fontFamily: "PlusJakartaSans_400Regular", fontSize: 10, lineHeight: 15, color: "rgba(255,255,255,0.55)" }}>
                  11:45 AM
                </Text>
                <CheckCheck size={14} color="rgba(255,255,255,0.55)" style={{ marginLeft: 4 }} />
              </View>
            </View>
          </View>

          {/* Figma: Frame 404 - Received msg 2 */}
          <View className="mt-[16px] flex-row items-end">
            {/* Figma: Group 264 - Avatar EC */}
            <View className="items-center justify-center" style={{ width: 30, height: 30, borderRadius: 7, backgroundColor: "#7a618118" }}>
              <Text style={{ fontFamily: "PlusJakartaSans_600SemiBold", fontSize: 11, lineHeight: 16.5, color: "#7a6181" }}>EC</Text>
            </View>

            {/* Figma: Group 338 - Bubble */}
            <View style={{ marginLeft: 8, width: 255, backgroundColor: "#ffffff", borderTopLeftRadius: 16, borderTopRightRadius: 16, borderBottomRightRadius: 16, borderBottomLeftRadius: 0, paddingHorizontal: 18, paddingTop: 10, paddingBottom: 10 }}>
              <Text style={{ fontFamily: "PlusJakartaSans_400Regular", fontSize: 14, lineHeight: 22.4, color: "#1a1828" }}>
                Perfect! Sending you a Google Meet invite for Thursday at 2 PM.
              </Text>
              {/* Figma: 12:18 PM */}
              <Text style={{ fontFamily: "PlusJakartaSans_400Regular", fontSize: 10, lineHeight: 15, color: "#8a88a8", marginTop: 2 }}>
                12:18 PM
              </Text>
            </View>
          </View>

          {/* Figma: Group 349 - Video Interview Card (w=299, h=123, x=47 → right-aligned, radius=16, border=#c8e6e8) */}
          <View className="mt-[16px] mb-[20px] items-end">
            <View style={{ width: 299, borderRadius: 16, backgroundColor: "#ffffff", borderWidth: 1, borderColor: "#c8e6e8", paddingHorizontal: 19, paddingVertical: 17 }}>
              {/* Figma: Frame 407 - calendar icon + title/time */}
              <View className="flex-row items-center">
                {/* Figma: Group 344 - calendar icon (38x38, radius=11, bg=#ebf6f7) */}
                <View className="items-center justify-center" style={{ width: 38, height: 38, borderRadius: 11, backgroundColor: "#ebf6f7" }}>
                  <Calendar size={18} color="#0d5c63" />
                </View>
                {/* Figma: Frame 405 - title + subtitle */}
                <View style={{ marginLeft: 10, flex: 1 }}>
                  <Text style={{ fontFamily: "PlusJakartaSans_700Bold", fontSize: 13, lineHeight: 19.5, color: "#1a1828" }}>
                    Video Interview Invite
                  </Text>
                  <Text style={{ fontFamily: "PlusJakartaSans_400Regular", fontSize: 11, lineHeight: 16.5, color: "#8a88a8" }}>
                    Thursday, Apr 4 · 2:00 PM · 45 min
                  </Text>
                </View>
              </View>

              {/* Figma: Frame 406 - Accept + Decline buttons (mt=14) */}
              <View className="flex-row" style={{ marginTop: 14 }}>
                {/* Figma: Group 347 - Accept (128x38, radius=10, bg=#0d5c63) */}
                <TouchableOpacity className="flex-row items-center justify-center" style={{ width: 128, height: 38, borderRadius: 10, backgroundColor: "#0d5c63" }}>
                  <Text style={{ fontFamily: "PlusJakartaSans_700Bold", fontSize: 12, lineHeight: 18, color: "#ffffff" }}>Accept</Text>
                  <Check size={16} color="#ffffff" style={{ marginLeft: 5 }} />
                </TouchableOpacity>
                {/* Figma: Group 348 - Decline (128x38, radius=10, bg=#f3efe9, ml=5) */}
                <TouchableOpacity className="items-center justify-center" style={{ width: 128, height: 38, borderRadius: 10, backgroundColor: "#f3efe9", marginLeft: 5 }}>
                  <Text style={{ fontFamily: "PlusJakartaSans_700Bold", fontSize: 12, lineHeight: 18, color: "#7a6181" }}>Decline</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </ScrollView>

        {/* Figma: Group 356 - Input Bar (h=83, bg=#ffffff, border-top=#0d5c6312) */}
        <View className="bg-[#ffffff]" style={{ height: 83, borderTopWidth: 1, borderTopColor: "#0d5c6312", justifyContent: "center" }}>
          {/* Figma: Frame 409 - inner row (w=362, x=16, y=789→centered) */}
          <View className="flex-row items-center" style={{ paddingHorizontal: 16 }}>
            {/* Figma: Group 354 - Link button (36x36, radius=10, bg=#f3efe9) */}
            <TouchableOpacity className="items-center justify-center rounded-[10px] bg-[#f3efe9]" style={{ width: 36, height: 36 }}>
              <Link size={18} color="#4a4868" />
            </TouchableOpacity>

            {/* Figma: Group 352 - Input field (w=220, h=44, radius=22, bg=#f3efe9, ml=10) */}
            <View style={{ width: 220, height: 44, borderRadius: 22, backgroundColor: "#f3efe9", marginLeft: 10, paddingHorizontal: 19, justifyContent: "center" }}>
              <TextInput
                style={{ fontFamily: "PlusJakartaSans_400Regular", fontSize: 14, lineHeight: 21, color: "#8a88a8", textAlignVertical: "center", paddingVertical: 0 }}
                placeholder="Type a message..."
                placeholderTextColor="#8a88a8"
                value={messageText}
                onChangeText={setMessageText}
              />
            </View>

            {/* Figma: Group 353 - Emoji button (36x36, radius=10, bg=#f3efe9, ml=10) */}
            <TouchableOpacity className="items-center justify-center rounded-[10px] bg-[#f3efe9]" style={{ width: 36, height: 36, marginLeft: 10 }}>
              <SmilePlus size={18} color="#4a4868" />
            </TouchableOpacity>

            {/* Figma: Group 355 - Send button (40x40, radius=12, bg=#0d5c63, ml=10) */}
            <TouchableOpacity className="items-center justify-center" style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: "#0d5c63", marginLeft: 10 }}>
              <Send size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

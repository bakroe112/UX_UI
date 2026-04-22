import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ChevronLeft,
  User,
  Mail,
  Bell,
  MapPin,
  DollarSign,
  Shield,
  Lock,
  Eye,
  Palette,
  ChevronRight,
} from "lucide-react-native";
import BottomNavBar from "../components/BottomNavBar";

export default function SettingsScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [jobAlertsEnabled, setJobAlertsEnabled] = useState(true);
  const [profileVisibilityEnabled, setProfileVisibilityEnabled] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const ToggleSwitch = ({ enabled, onToggle }) => (
    <TouchableOpacity
      className="h-[29px] w-[42px] rounded-[14px] justify-center"
      style={{ backgroundColor: enabled ? "#0d5c63" : "#0000001a" }}
      onPress={onToggle}
    >
      <View
        className="h-[21px] w-[21px] rounded-full bg-[#ffffff]"
        style={{
          marginLeft: enabled ? 19 : 2.27,
        }}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* Status Bar */}
      <View className="h-[47px] bg-[#ffffff]" />

      {/* Header */}
      <View className="bg-[#ffffff] px-[20px] py-[7.5px]">
        <View className="flex-row items-center">
          <TouchableOpacity
            className="h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f3efe9]"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeft size={12} color="#4a4868" />
          </TouchableOpacity>
          <Text
            className="ml-[11px] text-[17px] text-[#1a1828]"
            style={{ 
              fontFamily: "PlusJakartaSans_800ExtraBold",
              lineHeight: 25.5
            }}
          >
            Settings
          </Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 96, paddingTop: 20, paddingHorizontal: 20 }}
      >
        {/* Profile Card */}
        <View className="mb-[17px] rounded-[12px] bg-[#ffffff] px-[19px] py-[14px]">
          <View className="flex-row items-center">
            <View className="h-[55px] w-[55px] items-center justify-center rounded-[10px] bg-[#0d5c63]">
              <Text
                className="text-[20px] text-[#ffffff]"
                style={{ fontFamily: "PlusJakartaSans_700Bold" }}
              >
                SJ
              </Text>
            </View>
            <View className="ml-[18px] flex-1">
              <Text
                className="text-[16px] text-[#1a1828]"
                style={{ 
                  fontFamily: "PlusJakartaSans_700Bold",
                  lineHeight: 22.5
                }}
              >
                Sarah Johnson
              </Text>
              <Text
                className="text-[13px] text-[#8a88a8]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 18
                }}
              >
                sarah@email.com
              </Text>
            </View>
            <ChevronRight size={12} color="#8a88a8" />
          </View>
        </View>

        {/* Account Section */}
        <Text
          className="mb-[12px] text-[12px] text-[#8a88a8]"
          style={{ 
            fontFamily: "PlusJakartaSans_700Bold",
            letterSpacing: 0.8,
            lineHeight: 15
          }}
        >
          ACCOUNT
        </Text>

        <View className="mb-[17px] rounded-[12px] bg-[#ffffff] overflow-hidden">
          {/* Edit Profile */}
          <TouchableOpacity className="px-[19px] py-[12px]">
            <View className="flex-row items-center">
              <View className="h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-[#f3efe9]">
                <User size={15} color="#4a4868" />
              </View>
              <View className="ml-[15px] flex-1">
                <Text
                  className="text-[14px] text-[#1a1828]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_600SemiBold",
                    lineHeight: 19.5
                  }}
                >
                  Edit Profile
                </Text>
                <Text
                  className="text-[11px] text-[#8a88a8]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_400Regular",
                    lineHeight: 16.5
                  }}
                >
                  Name,photo,bio
                </Text>
              </View>
              <ChevronRight size={10} color="#8a88a8" />
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <View className="h-[1px] bg-[#0d5c6312]" />

          {/* Email & Password */}
          <TouchableOpacity className="px-[19px] py-[12px]">
            <View className="flex-row items-center">
              <View className="h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-[#f3efe9]">
                <Mail size={14} color="#4a4868" />
              </View>
              <View className="ml-[15px] flex-1">
                <Text
                  className="text-[14px] text-[#1a1828]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_600SemiBold",
                    lineHeight: 19.5
                  }}
                >
                  Email & Password
                </Text>
                <Text
                  className="text-[11px] text-[#8a88a8]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_400Regular",
                    lineHeight: 16.5
                  }}
                >
                  sara@gmail.com
                </Text>
              </View>
              <ChevronRight size={10} color="#8a88a8" />
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <View className="h-[1px] bg-[#0d5c6312]" />

          {/* Notifications */}
          <View className="px-[19px] py-[12px]">
            <View className="flex-row items-center">
              <View className="h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-[#f3efe9]">
                <Bell size={18} color="#4a4868" />
              </View>
              <View className="ml-[15px] flex-1">
                <Text
                  className="text-[14px] text-[#1a1828]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_600SemiBold",
                    lineHeight: 19.5
                  }}
                >
                  Notifications
                </Text>
                <Text
                  className="text-[11px] text-[#8a88a8]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_400Regular",
                    lineHeight: 16.5
                  }}
                >
                  Job alerts, messages
                </Text>
              </View>
              <ToggleSwitch 
                enabled={notificationsEnabled} 
                onToggle={() => setNotificationsEnabled(!notificationsEnabled)} 
              />
            </View>
          </View>
        </View>

        {/* Job Preferences Section */}
        <Text
          className="mb-[12px] text-[12px] text-[#8a88a8]"
          style={{ 
            fontFamily: "PlusJakartaSans_700Bold",
            letterSpacing: 0.8,
            lineHeight: 15
          }}
        >
          JOB PREFERENCES
        </Text>

        <View className="mb-[17px] rounded-[12px] bg-[#ffffff] overflow-hidden">
          {/* Job Alerts */}
          <View className="px-[19px] py-[12px]">
            <View className="flex-row items-center">
              <View className="h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-[#f3efe9]">
                <Bell size={18} color="#4a4868" />
              </View>
              <View className="ml-[15px] flex-1">
                <Text
                  className="text-[14px] text-[#1a1828]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_600SemiBold",
                    lineHeight: 19.5
                  }}
                >
                  Job Alerts
                </Text>
                <Text
                  className="text-[11px] text-[#8a88a8]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_400Regular",
                    lineHeight: 16.5
                  }}
                >
                  Daily - Design roles
                </Text>
              </View>
              <ToggleSwitch 
                enabled={jobAlertsEnabled} 
                onToggle={() => setJobAlertsEnabled(!jobAlertsEnabled)} 
              />
            </View>
          </View>

          {/* Divider */}
          <View className="h-[1px] bg-[#0d5c6312]" />

          {/* Location Preferences */}
          <TouchableOpacity className="px-[19px] py-[12px]">
            <View className="flex-row items-center">
              <View className="h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-[#f3efe9]">
                <MapPin size={16} color="#4a4868" />
              </View>
              <View className="ml-[15px] flex-1">
                <Text
                  className="text-[14px] text-[#1a1828]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_600SemiBold",
                    lineHeight: 19.5
                  }}
                >
                  Location Preferences
                </Text>
                <Text
                  className="text-[11px] text-[#8a88a8]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_400Regular",
                    lineHeight: 16.5
                  }}
                >
                  Remote - SF
                </Text>
              </View>
              <ChevronRight size={10} color="#8a88a8" />
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <View className="h-[1px] bg-[#0d5c6312]" />

          {/* Salary */}
          <TouchableOpacity className="px-[19px] py-[12px]">
            <View className="flex-row items-center">
              <View className="h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-[#f3efe9]">
                <DollarSign size={18} color="#4a4868" />
              </View>
              <View className="ml-[15px] flex-1">
                <Text
                  className="text-[14px] text-[#1a1828]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_600SemiBold",
                    lineHeight: 19.5
                  }}
                >
                  Salary
                </Text>
                <Text
                  className="text-[11px] text-[#8a88a8]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_400Regular",
                    lineHeight: 16.5
                  }}
                >
                  $130k - $180k
                </Text>
              </View>
              <ChevronRight size={10} color="#8a88a8" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Privacy Section */}
        <Text
          className="mb-[12px] text-[12px] text-[#8a88a8]"
          style={{ 
            fontFamily: "PlusJakartaSans_700Bold",
            letterSpacing: 0.8,
            lineHeight: 15
          }}
        >
          PRIVACY
        </Text>

        <View className="mb-[17px] rounded-[12px] bg-[#ffffff] overflow-hidden">
          {/* Profile Visibility */}
          <View className="px-[19px] py-[12px]">
            <View className="flex-row items-center">
              <View className="h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-[#f3efe9]">
                <Eye size={23} color="#4a4868" />
              </View>
              <View className="ml-[15px] flex-1">
                <Text
                  className="text-[14px] text-[#1a1828]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_600SemiBold",
                    lineHeight: 19.5
                  }}
                >
                  Profile Visibility
                </Text>
                <Text
                  className="text-[11px] text-[#8a88a8]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_400Regular",
                    lineHeight: 16.5
                  }}
                >
                  Visible to recruiters
                </Text>
              </View>
              <ToggleSwitch 
                enabled={profileVisibilityEnabled} 
                onToggle={() => setProfileVisibilityEnabled(!profileVisibilityEnabled)} 
              />
            </View>
          </View>

          {/* Divider */}
          <View className="h-[1px] bg-[#0d5c6312]" />

          {/* Privacy & Security */}
          <TouchableOpacity className="px-[19px] py-[12px]">
            <View className="flex-row items-center">
              <View className="h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-[#f3efe9]">
                <Shield size={17} color="#4a4868" />
              </View>
              <View className="ml-[15px] flex-1">
                <Text
                  className="text-[14px] text-[#1a1828]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_600SemiBold",
                    lineHeight: 19.5
                  }}
                >
                  Privacy & Security
                </Text>
              </View>
              <ChevronRight size={10} color="#8a88a8" />
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <View className="h-[1px] bg-[#0d5c6312]" />

          {/* Two-Factor Auth */}
          <View className="px-[19px] py-[12px]">
            <View className="flex-row items-center">
              <View className="h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-[#f3efe9]">
                <Lock size={19} color="#4a4868" />
              </View>
              <View className="ml-[15px] flex-1">
                <Text
                  className="text-[14px] text-[#1a1828]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_600SemiBold",
                    lineHeight: 19.5
                  }}
                >
                  Two - Factor Auth
                </Text>
                <Text
                  className="text-[11px] text-[#8a88a8]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_400Regular",
                    lineHeight: 16.5
                  }}
                >
                  Enabled
                </Text>
              </View>
              <ToggleSwitch 
                enabled={twoFactorEnabled} 
                onToggle={() => setTwoFactorEnabled(!twoFactorEnabled)} 
              />
            </View>
          </View>
        </View>

        {/* Display Section */}
        <Text
          className="mb-[12px] text-[12px] text-[#8a88a8]"
          style={{ 
            fontFamily: "PlusJakartaSans_700Bold",
            letterSpacing: 0.8,
            lineHeight: 15
          }}
        >
          DISPLAY
        </Text>

        <View className="mb-[17px] rounded-[12px] bg-[#ffffff]">
          <TouchableOpacity className="px-[19px] py-[12px]">
            <View className="flex-row items-center">
              <View className="h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-[#f3efe9]">
                <Palette size={20} color="#4a4868" />
              </View>
              <View className="ml-[15px] flex-1">
                <Text
                  className="text-[14px] text-[#1a1828]"
                  style={{ 
                    fontFamily: "PlusJakartaSans_600SemiBold",
                    lineHeight: 19.5
                  }}
                >
                  Appearance
                </Text>
              </View>
              <ChevronRight size={10} color="#8a88a8" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Log Out Button */}
        <TouchableOpacity 
          className="rounded-[12px] bg-[#e05b5b14] py-[16px] items-center justify-center"
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text
            className="text-[15px] text-[#e05b5b]"
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              letterSpacing: -0.3,
              lineHeight: 15
            }}
          >
            LOG OUT
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavBar navigation={navigation} activeTab="profile" />
    </SafeAreaView>
  );
}
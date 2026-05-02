import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { ChevronLeft, ChevronRight, User, Mail, Bell, Calendar, MapPin, DollarSign, Eye, Shield, Lock, Palette, LogOut } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import StatusBar from "../../components/StatusBar";
import NavBar from "../../components/NavBar";
import { RootStackParamList } from "../../../App";

type ProfileSettingNavigationProp = NativeStackNavigationProp<RootStackParamList, "ProfileSetting">;

const ProfileSetting = () => {
  const navigation = useNavigation<ProfileSettingNavigationProp>();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [jobAlertsEnabled, setJobAlertsEnabled] = useState(true);
  const [profileVisibilityEnabled, setProfileVisibilityEnabled] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const ToggleSwitch = ({ value, onValueChange }: { value: boolean; onValueChange: (value: boolean) => void }) => (
    <TouchableOpacity
      style={[styles.toggleContainer, value ? styles.toggleActive : styles.toggleInactive]}
      onPress={() => onValueChange(!value)}
    >
      <View style={[styles.toggleCircle, value && styles.toggleCircleActive]} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ChevronLeft size={16} color="#4A4868" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <LinearGradient
            colors={["#E2B053", "#C4892A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.avatar}
          >
            <Text style={styles.avatarText}>SJ</Text>
          </LinearGradient>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Sarah Johnson</Text>
            <Text style={styles.profileEmail}>sarah@email.com</Text>
          </View>
          <ChevronRight size={16} color="#8A88A8" />
        </View>

        {/* Account Section */}
        <Text style={styles.sectionTitle}>ACCOUNT</Text>
        <View style={styles.settingsGroup}>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <User size={15} color="#4A4868" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Edit Profile</Text>
              <Text style={styles.settingSubtitle}>Name,photo,bio</Text>
            </View>
            <ChevronRight size={16} color="#8A88A8" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Mail size={14} color="#4A4868" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Email & Password</Text>
              <Text style={styles.settingSubtitle}>sara@gmail.com</Text>
            </View>
            <ChevronRight size={16} color="#8A88A8" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <View style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Bell size={18} color="#4A4868" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Notifications</Text>
              <Text style={styles.settingSubtitle}>Job alerts, messages</Text>
            </View>
            <ToggleSwitch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
          </View>
        </View>

        {/* Job Preferences Section */}
        <Text style={styles.sectionTitle}>JOB PREFERENCES</Text>
        <View style={styles.settingsGroup}>
          <View style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Calendar size={18} color="#4A4868" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Job Alerts</Text>
              <Text style={styles.settingSubtitle}>Daily - Design roles</Text>
            </View>
            <ToggleSwitch value={jobAlertsEnabled} onValueChange={setJobAlertsEnabled} />
          </View>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <MapPin size={16} color="#4A4868" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Location Preferences</Text>
              <Text style={styles.settingSubtitle}>Remote - SF</Text>
            </View>
            <ChevronRight size={16} color="#8A88A8" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <DollarSign size={18} color="#4A4868" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Salary</Text>
              <Text style={styles.settingSubtitle}>$130k - $180k</Text>
            </View>
            <ChevronRight size={16} color="#8A88A8" />
          </TouchableOpacity>
        </View>

        {/* Privacy Section */}
        <Text style={styles.sectionTitle}>PRIVACY</Text>
        <View style={styles.settingsGroup}>
          <View style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Eye size={23} color="#4A4868" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Profile Visibility</Text>
              <Text style={styles.settingSubtitle}>Visible to recruiters</Text>
            </View>
            <ToggleSwitch value={profileVisibilityEnabled} onValueChange={setProfileVisibilityEnabled} />
          </View>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Shield size={17} color="#4A4868" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Privacy & Security</Text>
            </View>
            <ChevronRight size={16} color="#8A88A8" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <View style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Lock size={19} color="#4A4868" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Two - Factor Auth</Text>
              <Text style={styles.settingSubtitle}>Enabled</Text>
            </View>
            <ToggleSwitch value={twoFactorEnabled} onValueChange={setTwoFactorEnabled} />
          </View>
        </View>

        {/* Display Section */}
        <Text style={styles.sectionTitle}>DISPLAY</Text>
        <View style={styles.settingsGroup}>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Palette size={20} color="#4A4868" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Appearance</Text>
            </View>
            <ChevronRight size={16} color="#8A88A8" />
          </TouchableOpacity>
        </View>

        {/* Log Out Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>LOG OUT</Text>
        </TouchableOpacity>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      <NavBar
        activeTab="Profile"
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
    height: 67,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#F3EFE9",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#1A1828",
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 25.5,
    marginLeft: 11,
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 19,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 27,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 18,
  },
  profileName: {
    color: "#1A1828",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22.5,
  },
  profileEmail: {
    color: "#8A88A8",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 18,
  },
  sectionTitle: {
    color: "#8A88A8",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.8,
    lineHeight: 15,
    marginBottom: 12,
    marginTop: 5,
  },
  settingsGroup: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 17,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 19,
    paddingVertical: 14,
  },
  settingIcon: {
    width: 38,
    height: 38,
    borderRadius: 9,
    backgroundColor: "#F3EFE9",
    justifyContent: "center",
    alignItems: "center",
  },
  settingContent: {
    flex: 1,
    marginLeft: 15,
  },
  settingTitle: {
    color: "#1A1828",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19.5,
  },
  settingSubtitle: {
    color: "#8A88A8",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 16.5,
  },
  divider: {
    height: 1,
    backgroundColor: "#0D5C6312",
    marginHorizontal: 19,
  },
  toggleContainer: {
    width: 42,
    height: 29,
    borderRadius: 14,
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  toggleActive: {
    backgroundColor: "#0D5C63",
  },
  toggleInactive: {
    backgroundColor: "#0000001A",
  },
  toggleCircle: {
    width: 21,
    height: 21,
    borderRadius: 10.5,
    backgroundColor: "#FFFFFF",
  },
  toggleCircleActive: {
    alignSelf: "flex-end",
  },
  logoutButton: {
    backgroundColor: "#E05B5B14",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 6,
  },
  logoutText: {
    color: "#E05B5B",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: -0.3,
    lineHeight: 15,
  },
  bottomSpacer: {
    height: 18,
  },
});

export default ProfileSetting;

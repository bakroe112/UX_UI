import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { BellRing , Settings, MapPin, Star, ChartNoAxesColumn, Eye, FileText, Briefcase, ChevronRight,PencilLine  } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import StatusBar from "../../../components/StatusBar";
import NavBar from "../../../components/NavBar";
import { RootStackParamList } from "../../../App";

type ProfileOverviewNavigationProp = NativeStackNavigationProp<RootStackParamList, "ProfileOverview">;

const ProfileOverview = () => {
  const navigation = useNavigation<ProfileOverviewNavigationProp>();

  return (
    <View style={styles.container}>
      <StatusBar />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton}>
            <BellRing size={18} color="#1A1828" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("ProfileSetting")}>
            <Settings size={18} color="#1A1828" />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <LinearGradient
            colors={["#E2B053", "#C4892A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.avatar}
          >
            <Text style={styles.avatarText}>SJ</Text>
            <View style={styles.verifiedBadge}>
              <View style={styles.verifiedIcon}>
                <Text style={styles.checkIcon}>✓</Text>
              </View>
            </View>
          </LinearGradient>

          <View style={styles.profileInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.profileName}>Sarah Johnson</Text>
              <View style={styles.verifiedIconSmall}>
                <PencilLine size={16} color={"#0D5C63"}/>
              </View>
            </View>
            <Text style={styles.profileTitle}>Senior Product Designer</Text>
            <View style={styles.locationRow}>
              <MapPin size={11} color="#8A88A8" />
              <Text style={styles.locationText}>San Francisco - Open to Remote</Text>
            </View>
          </View>
        </View>

        {/* Open to Work Badge */}
        <View style={styles.openToWorkBadge}>
          <View style={styles.openToWorkContent}>
            <View style={styles.greenDot} />
            <Text style={styles.openToWorkText}>Open to Work - Senior Design roles</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Stats */}
        <View style={styles.statsCard}>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>14</Text>
              <Text style={styles.statLabel}>Applied</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>5</Text>
              <Text style={styles.statLabel}>Interviews</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>234</Text>
              <Text style={styles.statLabel}>Views</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>28</Text>
              <Text style={styles.statLabel}>Saved</Text>
            </View>
          </View>
        </View>

        {/* Feature Cards */}
        <View style={styles.featureCards}>
          <View style={[styles.featureCard, { backgroundColor: "#E2B0531F", borderColor: "#E2B05338" }]}>
            <View style={styles.featureIcon}>
              <Star size={20} color="#E2B053" />
            </View>
            <Text style={styles.featureTitle}>Skill Badge</Text>
            <Text style={[styles.featureSubtitle, { color: "#E2B053" }]}>4 earned</Text>
          </View>

          <View style={[styles.featureCard, { backgroundColor: "#0D5C631A", borderColor: "#0D5C632E" }]}>
            <View style={styles.featureIcon}>
              <ChartNoAxesColumn size={20} color="#0D5C63" />
            </View>
            <Text style={styles.featureTitle}>Career Insights</Text>
            <Text style={[styles.featureSubtitle, { color: "#0D5C63" }]}>Top 18%</Text>
          </View>

          <View style={[styles.featureCard, { backgroundColor: "#7A61811A", borderColor: "#7A61812E" }]}>
            <View style={styles.featureIcon}>
              <Eye size={20} color="#7A6181" />
            </View>
            <Text style={styles.featureTitle}>Activity</Text>
            <Text style={[styles.featureSubtitle, { color: "#7A6181" }]}>8 events</Text>
          </View>
        </View>

        {/* Resume & Portfolio */}
        <View style={styles.documentsRow}>
          <View style={styles.documentCard}>
            <View style={[styles.documentIcon, { backgroundColor: "#0D5C631A" }]}>
              <FileText size={16} color="#0D5C63" />
            </View>
            <View style={styles.documentInfo}>
              <Text style={styles.documentTitle}>Resume</Text>
              <Text style={[styles.documentSubtitle, { color: "#0D5C63" }]}>ATS 94/100</Text>
            </View>
            <ChevronRight size={14} color="#D1D5DC" />
          </View>

          <View style={styles.documentCard}>
            <View style={[styles.documentIcon, { backgroundColor: "#7A61811A" }]}>
              <Briefcase size={17} color="#7A6181" />
            </View>
            <View style={styles.documentInfo}>
              <Text style={styles.documentTitle}>Portfolio</Text>
              <Text style={[styles.documentSubtitle, { color: "#0D5C63" }]}>4 projects</Text>
            </View>
            <ChevronRight size={14} color="#D1D5DC" />
          </View>
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ABOUT</Text>
          <Text style={styles.aboutText}>
            Product designer with 6+ years crafting experiences that simplify complex workflows. Expert in design systems, accessibility, and cross-functional collaboration.
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>EXPERIENCE</Text>
            <ChevronRight size={14} color="#D1D5DC" />
          </View>

          <View style={styles.experienceItem}>
            <View style={[styles.experienceDot, { backgroundColor: "#8D8C8C" }]} />
            <View style={styles.experienceContent}>
              <Text style={styles.experienceTitle}>Senior Product Designer</Text>
              <Text style={[styles.experienceCompany, { color: "#7A6181" }]}>Figma</Text>
              <Text style={styles.experienceDate}>Apr 2025 - Present</Text>
            </View>
          </View>

          <View style={styles.experienceDivider} />

          <View style={styles.experienceItem}>
            <View style={[styles.experienceDot, { backgroundColor: "#0D5C63" }]} />
            <View style={styles.experienceContent}>
              <Text style={styles.experienceTitle}>Product Designer</Text>
              <Text style={[styles.experienceCompany, { color: "#0D5C63" }]}>Airbnb</Text>
              <Text style={styles.experienceDate}>Apr 2024 - Mar 2025</Text>
            </View>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            <ChevronRight size={14} color="#D1D5DC" />
          </View>
          <View style={styles.skillsRow}>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>Figma</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>Design Systems</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>Prototyping</Text>
            </View>
          </View>
        </View>

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
    paddingBottom: 18,
  },
  headerActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 0,
    gap: 4,
  },
  iconButton: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: "#F3EFE9",
    justifyContent: "center",
    alignItems: "center",
  },
  profileSection: {
    paddingHorizontal: 24,
    paddingTop: 7,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "800",
    lineHeight: 36,
  },
  verifiedBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 5,
    backgroundColor: "#16A34A",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  verifiedIcon: {
    width: 9,
    height: 9,
    top:-2,
    left:1
  },
  checkIcon: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "700",
  },
  profileInfo: {
    marginLeft: 18,
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    color: "#1A1828",
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 30,
    letterSpacing: -0.4,
  },
  verifiedIconSmall: {
    marginLeft: 5,
  },
  verifiedText: {
    color: "#0D5C63",
    fontSize: 15,
  },
  profileTitle: {
    color: "#4A4868",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 19.5,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  locationText: {
    color: "#8A88A8",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 16.5,
  },
  openToWorkBadge: {
    marginHorizontal: 20,
    marginTop: 12,
    backgroundColor: "#F0FDF4",
    borderWidth: 1,
    borderColor: "#BBF7D0",
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    width:215
  },
  openToWorkContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  greenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#16A34A",
    marginRight: 6,
  },
  openToWorkText: {
    color: "#16A34A",
    fontSize: 11,
    fontWeight: "700",
    lineHeight: 16.5,
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  statsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    // paddingVertical: 23,
    marginBottom: 19,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
    flex: 1,
    justifyContent:"center",
    height:60,
    borderLeftWidth:0.5,
    borderColor:"#0d5c6313",
  },
  statValue: {
    color: "#0D5C63",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 27,
  },
  statLabel: {
    color: "#8A88A8",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 15,
    marginTop: 1,
  },
  featureCards: {
    flexDirection: "row",
    gap: 13,
    marginBottom: 19,
  },
  featureCard: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  featureIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 9,
  },
  featureTitle: {
    color: "#1C1A2E",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
    textAlign: "center",
  },
  featureSubtitle: {
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 16,
    marginTop: 0,
  },
  documentsRow: {
    flexDirection: "row",
    gap: 19,
    marginBottom: 19,
  },
  documentCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  documentIcon: {
    width: 36,
    height: 36,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  documentInfo: {
    flex: 1,
    marginLeft: 8,
  },
  documentTitle: {
    color: "#1E2939",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 16,
  },
  documentSubtitle: {
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 16,
    marginTop: 3,
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 13,
    marginBottom: 19,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  sectionTitle: {
    color: "#0D5C63",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
    lineHeight: 18,
  },
  aboutText: {
    color: "#4A4868",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 21,
    marginTop: 12,
  },
  experienceItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 15,
  },
  experienceDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 6,
    marginRight: 13,
  },
  experienceContent: {
    flex: 1,
  },
  experienceTitle: {
    color: "#1A1828",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19.5,
  },
  experienceCompany: {
    fontSize: 11,
    fontWeight: "600",
    lineHeight: 16.5,
  },
  experienceDate: {
    color: "#8A88A8",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 16.5,
  },
  experienceDivider: {
    height: 1,
    backgroundColor: "#0D5C6312",
    marginVertical: 15,
  },
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 13,
    marginTop: 12,
  },
  skillBadge: {
    backgroundColor: "#EBF6F7",
    borderRadius: 28,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
  skillText: {
    color: "#0D5C63",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16.5,
  },
  bottomSpacer: {
    height: 12,
  },
});

export default ProfileOverview;

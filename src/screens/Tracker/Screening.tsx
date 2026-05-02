import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Search, Filter, TrendingUp  } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import StatusBar from "../../components/StatusBar";
import NavBar from "../../components/NavBar";
import { RootStackParamList } from "../../../App";

type TrackerScreeningNavigationProp = NativeStackNavigationProp<RootStackParamList, "TrackerScreening">;

const TrackerScreening = () => {
  const navigation = useNavigation<TrackerScreeningNavigationProp>();

  const applications = [
    {
      id: 1,
      initial: "F",
      initialBg: "#0D5C63B2",
      title: "Sr.Product  Desigher",
      company: "Figma",
      status: "Recruiter viewed your profile  2 days ago",
      applied: "Applied Apri1",
      badge: "Screening",
      badgeBg: "#EBF6F7",
      badgeColor: "#0D5C63",
    },
    {
      id: 2,
      initial: "N",
      initialBg: "#0D5C63B2",
      title: "Design Systems Lead",
      company: "Notion",
      status: "Application under review",
      applied: "Applied  Mar 30",
      badge: "Screening",
      badgeBg: "#EBF6F7",
      badgeColor: "#0D5C63",
    },
    {
      id: 3,
      initial: "S",
      initialBg: "#C4892AB2",
      title: "Staff UX Designer",
      company: "Stripe",
      status: "Profile viewed by hiring team",
      applied: "Applied Mar 28",
      badge: "Viewed",
      badgeBg: "#F1EEE8",
      badgeColor: "#C4892A",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Applications</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Search size={16} color="#4A4868" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Filter size={16} color="#4A4868" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("TrackerAll")}>
          <Text style={styles.tabText}>All(8)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TrackerScreening")}>
          <Text style={[styles.tabText, styles.tabActive]}>Screening(4)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TrackerInterview")}>
          <Text style={styles.tabText}>Interview(3)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TrackerOffers")}>
          <Text style={styles.tabText}>Offers(1)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabIndicator} />

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Info Banner */}
        <View style={styles.infoBanner}>
          <TrendingUp  size={16} color="#0D5C63" />
          <Text style={styles.infoBannerText}>
            5 applications in screening - 2 recruiter view this week
          </Text>
        </View>

        {/* Application Cards */}
        {applications.map((app) => (
          <View key={app.id} style={styles.applicationCard}>
            <View style={styles.cardContent}>
              <View style={[styles.initial, { backgroundColor: app.initialBg }]}>
                <Text style={styles.initialText}>{app.initial}</Text>
              </View>
              <View style={styles.cardInfo}>
                <View style={styles.cardTitleRow}>
                  <Text style={styles.cardTitle}>{app.title}</Text>
                  <View style={[styles.statusBadge, { backgroundColor: app.badgeBg }]}>
                    <Text style={[styles.statusBadgeText, { color: app.badgeColor }]}>
                      {app.badge}
                    </Text>
                  </View>
                </View>
                <Text style={styles.cardCompany}>{app.company}</Text>
                <Text style={styles.cardStatus}>{app.status}</Text>
                <Text style={styles.cardApplied}>{app.applied}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <NavBar 
        activeTab="Applied" 
        onTabPress={(tab) => {
          if (tab === "Home") navigation.navigate("HomeFeed");
          else if (tab === "Search") navigation.navigate("SearchBefore");
          else if (tab === "Applied") navigation.navigate("TrackerAll");
          else if (tab === "Messages") navigation.navigate("ChatList");
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
    paddingHorizontal: 20,
    paddingTop: 9,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 30,
  },
  headerIcons: {
    flexDirection: "row",
    gap: 13,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#F3EFE9",
    justifyContent: "center",
    alignItems: "center",
  },
  tabsContainer: {
     backgroundColor: "#FFFFFF",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 16.5,
    paddingBottom: 15,
    gap: 22,
  },
  tabText: {
    color: "#8A88A8",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 16.5,
  },
  tabActive: {
    color: "#0D5C63",
    fontWeight: "700",
  },
  tabIndicator: {
    position: "absolute",
    top: 148,
    left: 71,
    width: 94,
    height: 2,
    borderRadius: 5,
    backgroundColor: "#0D5C63",
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  infoBanner: {
    backgroundColor: "#EBF6F7",
    borderWidth: 1,
    borderColor: "#C8E6E8",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 15,
  },
  infoBannerText: {
    color: "#0D5C63",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 18,
    flex: 1,
  },
  applicationCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 11,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  initial: {
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  initialText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 25.5,
  },
  cardInfo: {
    flex: 1,
    marginLeft: 16,
  },
  cardTitleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8,
  },
  cardTitle: {
    color: "#1A1828",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 25.5,
    flexShrink: 1,
  },
  cardCompany: {
    color: "#8A88A8",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 25.5,
    marginTop: -4,
  },
  cardStatus: {
    color: "#4A4868",
    fontSize: 12.3,
    fontWeight: "400",
    lineHeight: 25.5,
    marginTop: -4,
  },
  cardApplied: {
    color: "#8A88A8",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 25.5,
    marginTop: -4,
  },
  statusBadge: {
    borderRadius: 12,
    paddingHorizontal: 11,
    paddingVertical: 4.5,
  },
  statusBadgeText: {
    fontSize: 11,
    fontWeight: "700",
    lineHeight: 15,
  },
});

export default TrackerScreening;

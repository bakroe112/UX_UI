import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Search, Bell, Filter, ShoppingBag, Clock,Bookmark  } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import StatusBar from "../../../components/StatusBar";
import NavBar from "../../../components/NavBar";
import { RootStackParamList } from "../../../App";

type TrackerAllNavigationProp = NativeStackNavigationProp<RootStackParamList, "TrackerAll">;

const TrackerAll = () => {
  const navigation = useNavigation<TrackerAllNavigationProp>();

  const applications = [
    {
      id: 1,
      initial: "F",
      initialBg: "#0D5C63B2",
      title: "Sr.Product  Designer",
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
            <Bookmark size={16} color="#4A4868" />
          </TouchableOpacity>
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
          <Text style={[styles.tabText, styles.tabActive]}>All(8)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TrackerScreening")}>
          <Text style={styles.tabText}>Screening(4)</Text>
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
          <ShoppingBag  size={16} color="#00786F" />
          <Text style={styles.infoBannerText}>
            Next interview: Tomorrow at 2:00 PM - Figma{"\n"}Technical Round
          </Text>
        </View>

        {/* Offers Section */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Offers</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </View>
          <Text style={styles.viewAllText}>View all</Text>
        </View>

        {/* Offer Card - Gradient Background */}
        <LinearGradient
          colors={["#0D5C63", "#1A7A83"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.offerCard}
        >
          <View style={styles.offerContent}>
            <View style={styles.offerInitial}>
              <Text style={styles.offerInitialText}>F</Text>
            </View>
            <View style={styles.offerInfo}>
              <Text style={styles.offerTitle}>Sr. Product Designer</Text>
              <Text style={styles.offerCompany}>Figma - Remote</Text>
            </View>
          </View>
          <View style={styles.offerSalary}>
            <View style={styles.salaryItem}>
              <Text style={styles.salaryValue}>$155,000</Text>
              <Text style={styles.salaryLabel}>Base Salary</Text>
            </View>
            <View style={styles.salaryItem}>
              <Text style={styles.salaryValue}>$120k / 4yr</Text>
              <Text style={styles.salaryLabel}>Equity</Text>
            </View>
            <View style={styles.salaryItem}>
              <Text style={styles.salaryValue}>15%</Text>
              <Text style={styles.salaryLabel}>Bonus</Text>
            </View>
          </View>
          <View style={styles.offerExpiry}>
            <Clock size={14} color="#FFFFFFCC" />
            <Text style={styles.offerExpiryText}>Offer expires in 5 days - Apr 8,2026</Text>
          </View>
        </LinearGradient>

        {/* Screening Section */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Screening</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>4</Text>
            </View>
          </View>
          <Text style={styles.viewAllText}>View all</Text>
        </View>

        {/* Application Cards */}
        {applications.map((app) => (
          <TouchableOpacity 
            key={app.id} 
            style={styles.applicationCard}
            onPress={() => navigation.navigate("ApplicationDetail")}
          >
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
          </TouchableOpacity>
        ))}

        {/* Interview Section */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Interview</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>
          <Text style={styles.viewAllText}>View all</Text>
        </View>

        {/* Interview Cards */}
        <TouchableOpacity 
          style={styles.applicationCard}
          onPress={() => navigation.navigate("ApplicationDetail")}
        >
          <View style={styles.cardContent}>
            <View style={[styles.initial, { backgroundColor: "#0D5C63B2" }]}>
              <Text style={styles.initialText}>F</Text>
            </View>
            <View style={styles.cardInfo}>
              <View style={styles.cardTitleRow}>
                <Text style={styles.cardTitle}>Sr.Product  Designer</Text>
                <View style={[styles.statusBadge, { backgroundColor: "#EBF6F7" }]}>
                  <Text style={[styles.statusBadgeText, { color: "#0D5C63" }]}>Interview</Text>
                </View>
              </View>
              <Text style={styles.cardCompany}>Figma</Text>
              <Text style={styles.cardStatus}>Recruiter viewed your profile  2 days ago</Text>
              <Text style={styles.cardApplied}>Applied Apri1</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.applicationCard}
          onPress={() => navigation.navigate("ApplicationDetail")}
        >
          <View style={styles.cardContent}>
            <View style={[styles.initial, { backgroundColor: "#0D5C63B2" }]}>
              <Text style={styles.initialText}>N</Text>
            </View>
            <View style={styles.cardInfo}>
              <View style={styles.cardTitleRow}>
                <Text style={styles.cardTitle}>Dev Systems Leader</Text>
                <View style={[styles.statusBadge, { backgroundColor: "#EBF6F7" }]}>
                  <Text style={[styles.statusBadgeText, { color: "#0D5C63" }]}>Interview</Text>
                </View>
              </View>
              <Text style={styles.cardCompany}>Notion</Text>
              <Text style={styles.cardStatus}>Application under review</Text>
              <Text style={styles.cardApplied}>Applied  Mar 30</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.divider} />
      </ScrollView>

      <NavBar 
        activeTab="Applied" 
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
    left: 10,
    width: 57,
    height: 2,
    borderRadius:5,
    backgroundColor: "#0D5C63",
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  infoBanner: {
    backgroundColor: "#F0FDFA",
    borderWidth: 1,
    borderColor: "#CBFBF1",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 15,
  },
  infoBannerText: {
    color: "#00786F",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 18,
    flex: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    marginTop: 15,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  sectionTitle: {
    color: "#1A1828",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21,
  },
  badge: {
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 1,
  },
  badgeText: {
    color: "#1A1828",
    fontSize: 10,
    fontWeight: "600",
    lineHeight: 21,
  },
  viewAllText: {
    color: "#0D5C63",
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 16,
  },
  offerCard: {
    borderRadius: 18,
    padding: 25,
    marginBottom: 15,
  },
  offerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
  },
  offerInitial: {
    width: 48,
    height: 48,
    borderRadius: 13,
    backgroundColor: "#FFFFFF26",
    justifyContent: "center",
    alignItems: "center",
  },
  offerInitialText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 25.5,
  },
  offerInfo: {
    marginLeft: 17,
    flex: 1,
  },
  offerTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 24,
  },
  offerCompany: {
    color: "#FFFFFFA6",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    marginTop: 3,
  },
  offerSalary: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 13,
  },
  salaryItem: {
    flexShrink: 1,
  },
  salaryValue: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 24,
  },
  salaryLabel: {
    color: "#FFFFFF99",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 15,
    marginTop: 3,
  },
  offerExpiry: {
    backgroundColor: "#FFFFFF1F",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 11,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  offerExpiryText: {
    color: "#FFFFFFCC",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 16.5,
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
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
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
  divider: {
    height: 2,
    backgroundColor: "#F9F5F0",
    marginTop: 20,
    marginBottom: 30,
  },
});

export default TrackerAll;

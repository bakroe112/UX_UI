import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Search, Bell, ShoppingBag } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import StatusBar from "../../components/StatusBar";
import NavBar from "../../components/NavBar";
import { RootStackParamList } from "../../../App";

type TrackerInterviewNavigationProp = NativeStackNavigationProp<RootStackParamList, "TrackerInterview">;

const TrackerInterview = () => {
  const navigation = useNavigation<TrackerInterviewNavigationProp>();

  const interviews = [
    {
      id: 1,
      initial: "F",
      initialBg: "#7A6181",
      title: "Sr.Product  Designer",
      company: "Figma",
      status: "Technical Round 2 - Meet - Tomorrow",
    },
    {
      id: 2,
      initial: "V",
      initialBg: "#7A6181",
      title: "Design Lead ",
      company: "Vercel",
      status: "Portfolio presentation -  Onsite",
    },
    {
      id: 3,
      initial: "L",
      initialBg: "#7A6181",
      title: "Product Design",
      company: "Linear",
      status: "Final round- Panel interview",
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
            <Bell size={16} color="#4A4868" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("TrackerAll")}>
          <Text style={styles.tabText}>All(14)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TrackerScreening")}>
          <Text style={styles.tabText}>Screening(4)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TrackerInterview")}>
          <Text style={[styles.tabText, styles.tabActive]}>Interview(3)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TrackerOffers")}>
          <Text style={styles.tabText}>Offers(1)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabIndicator} />

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Info Banner */}
        <View style={styles.infoBanner}>
          <ShoppingBag size={16} color="#7A6181" />
          <Text style={styles.infoBannerText}>
            Next interview: Tomorrow at 2:00 PM - Figma{"\n"}Technical Round
          </Text>
        </View>

        {/* Interview Cards */}
        {interviews.map((interview) => (
          <View key={interview.id} style={styles.interviewCard}>
            <View style={styles.cardHeader}>
              <View style={[styles.initial, { backgroundColor: interview.initialBg }]}>
                <Text style={styles.initialText}>{interview.initial}</Text>
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{interview.title}</Text>
                <Text style={styles.cardCompany}>{interview.company}</Text>
                <Text style={styles.cardStatus}>{interview.status}</Text>
              </View>
            </View>
            <View style={styles.cardActions}>
              <TouchableOpacity style={styles.prepButton}>
                <Text style={styles.prepButtonText}>Prep Tips</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rescheduleButton}>
                <Text style={styles.rescheduleButtonText}>Reschedule</Text>
              </TouchableOpacity>
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
    color: "#7A6181",
    fontWeight: "700",
  },
  tabIndicator: {
    position: "absolute",
    top: 148,
    left: 181,
    width: 94,
    height: 2,
    borderRadius: 5,
    backgroundColor: "#7A6181",
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 21,
    paddingTop: 20,
  },
  infoBanner: {
    backgroundColor: "#F2EDF5",
    borderWidth: 1,
    borderColor: "#E8E0ED",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 15,
  },
  infoBannerText: {
    color: "#7A6181",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    flex: 1,
  },
  interviewCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 11,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 11,
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
    marginLeft: 17,
  },
  cardTitle: {
    color: "#1A1828",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 25.5,
  },
  cardCompany: {
    color: "#8A88A8",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 25.5,
    marginTop: -2,
  },
  cardStatus: {
    color: "#4A4868",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 25.5,
    marginTop: -2,
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 17,
  },
  prepButton: {
    backgroundColor: "#E8E0ED",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E8E0ED",
    paddingHorizontal: 13,
    paddingVertical: 9,
  },
  prepButtonText: {
    color: "#7A6181",
    fontSize: 11,
    fontWeight: "600",
    lineHeight: 16.5,
  },
  rescheduleButton: {
    backgroundColor: "#F3EFE9",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2DDDD",
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  rescheduleButtonText: {
    color: "#4A4868",
    fontSize: 11,
    fontWeight: "600",
    lineHeight: 16.5,
  },
});

export default TrackerInterview;

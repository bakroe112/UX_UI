import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import StatusBar from "../../components/StatusBar";
import NavBar from "../../components/NavBar";
import { RootStackParamList } from "../../../App";

type TrackerOffersNavigationProp = NativeStackNavigationProp<RootStackParamList, "TrackerOffers">;

const TrackerOffers = () => {
  const navigation = useNavigation<TrackerOffersNavigationProp>();

  const offers = [
    {
      id: 1,
      initial: "F",
      title: "Sr. Product Designer",
      company: "Figma - Remote",
      offerDetails: "Offer letter sent : $155K + equity",
      applied: "Applied Apr 03",
    },
    {
      id: 2,
      initial: "F",
      title: "Dev System",
      company: "FE - Remote",
      offerDetails: "Offer letter sent : $255K + equity",
      applied: "Applied Apr 10",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Applications</Text>
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
          <Text style={styles.tabText}>Interview(3)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TrackerOffers")}>
          <Text style={[styles.tabText, styles.tabActive]}>Offers(1)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabIndicator} />

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Offer Cards */}
        {offers.map((offer) => (
          <View key={offer.id} style={styles.offerCard}>
            <View style={styles.cardHeader}>
              <View style={styles.initial}>
                <Text style={styles.initialText}>{offer.initial}</Text>
              </View>
              <View style={styles.cardInfo}>
                <View style={styles.cardTitleRow}>
                  <Text style={styles.cardTitle}>{offer.title}</Text>
                  <View style={styles.offerBadge}>
                    <Text style={styles.offerBadgeText}>Offer</Text>
                  </View>
                </View>
                <Text style={styles.cardCompany}>{offer.company}</Text>
                <Text style={styles.offerDetails}>{offer.offerDetails}</Text>
                <Text style={styles.cardApplied}>{offer.applied}</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.cardActions}>
              <TouchableOpacity style={styles.acceptButton}>
                <Text style={styles.acceptButtonText}>Accept Offer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.negotiateButton}>
                <Text style={styles.negotiateButtonText}>Negotiate</Text>
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
    paddingTop: 14,
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
    left: 280,
    width: 71,
    height: 2,
    borderRadius: 5,
    backgroundColor: "#0D5C63",
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  offerCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#0D5C634D",
    borderRadius: 16,
    padding: 0,
    marginBottom: 17,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 19,
    paddingTop: 12,
    paddingBottom: 12,
  },
  initial: {
    width: 48,
    height: 48,
    borderRadius: 13,
    backgroundColor: "#0D5C63",
    borderWidth: 1,
    borderColor: "#0D5C63",
    justifyContent: "center",
    alignItems: "center",
  },
  initialText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 25.5,
  },
  cardInfo: {
    flex: 1,
    marginLeft: 13,
  },
  cardTitleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8,
  },
  cardTitle: {
    color: "#0D5C63",
    fontSize: 15.5,
    fontWeight: "800",
    lineHeight: 24,
    flexShrink: 1,
  },
  cardCompany: {
    color: "#0D5C63B2",
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 18,
  },
  offerDetails: {
    color: "#0D5C63",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 18,
    marginTop: 3,
  },
  cardApplied: {
    color: "#0D5C637A",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 18,
  },
  offerBadge: {
    backgroundColor: "#16A34A24",
    borderRadius: 14,
    paddingHorizontal: 13.5,
    paddingVertical: 5.5,
  },
  offerBadgeText: {
    color: "#16A34A",
    fontSize: 11,
    fontWeight: "600",
    lineHeight: 18,
  },
  divider: {
    height: 1.5,
    backgroundColor: "#0D5C634D",
    opacity: 0.5,
    marginHorizontal: 1,
  },
  cardActions: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 11,
    gap: 18,
  },
  acceptButton: {
    flex: 1,
    backgroundColor: "#4CAF5024",
    borderRadius: 14,
    paddingVertical: 8,
    alignItems: "center",
  },
  acceptButtonText: {
    color: "#16A34A",
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 18,
  },
  negotiateButton: {
    backgroundColor: "#8B849A24",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 8,
    alignItems: "center",
  },
  negotiateButtonText: {
    color: "#7A6181",
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 18,
  },
});

export default TrackerOffers;

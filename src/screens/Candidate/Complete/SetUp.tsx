import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CircleCheckBig, PenTool, Globe, Award, DollarSign, Zap } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import StatusBar from "../../../components/StatusBar";
import { RootStackParamList } from "../../../App";

type SetUpNavigationProp = NativeStackNavigationProp<RootStackParamList, "SetUp">;

const SetUp = () => {
  const navigation = useNavigation<SetUpNavigationProp>();

  return (
    <View style={styles.container}>

      {/* Success Icon */}
      <View style={styles.iconContainer}>
        <CircleCheckBig size={39} color="#0D5C63" />
      </View>

      {/* Title and Description */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>You're all set, Lucy!</Text>
        <Text style={styles.description}>
          We've personalised your job feed based on your preferences
        </Text>
      </View>

      {/* Preferences Card */}
      <View style={styles.preferencesCard}>
        <Text style={styles.preferencesTitle}>YOUR PREFERENCES</Text>

        <View style={styles.preferencesList}>
          {/* Design, Product */}
          <View style={styles.preferenceItem}>
            <View style={[styles.preferenceIcon, styles.preferenceIconPurple]}>
              <PenTool size={14} color="#7A6181" />
            </View>
            <Text style={styles.preferenceText}>Design, Product</Text>
          </View>

          {/* Remote · SF-based */}
          <View style={styles.preferenceItem}>
            <View style={[styles.preferenceIcon, styles.preferenceIconRed]}>
              <Globe size={14} color="#E05B5B" />
            </View>
            <Text style={styles.preferenceText}>Remote · SF-based</Text>
          </View>

          {/* Senior Level */}
          <View style={styles.preferenceItem}>
            <View style={[styles.preferenceIcon, styles.preferenceIconYellow]}>
              <Award size={14} color="#E2B053" />
            </View>
            <Text style={styles.preferenceText}>Senior Level</Text>
          </View>

          {/* Salary */}
          <View style={styles.preferenceItem}>
            <View style={[styles.preferenceIcon, styles.preferenceIconGreen]}>
              <DollarSign size={14} color="#16A34A" />
            </View>
            <Text style={styles.preferenceText}>$130k – $160k</Text>
          </View>
        </View>
      </View>

      {/* Matching Jobs Banner */}
      <LinearGradient
        colors={[ "#ebf6f78e","#0d5c6348", "#ebf6f78e"]}
         locations={[0, 0.3, 1]} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.matchingBanner}
      >
        <Zap size={20} color="#0D5C63" />
        <Text style={styles.matchingText}>47 matching jobs found today</Text>
      </LinearGradient>

      {/* Start Exploring Button */}
      <TouchableOpacity
        style={styles.exploreButton}
        onPress={() => navigation.navigate("HomeFeed")}
      >
        <Text style={styles.exploreButtonText}>Start Exploring Jobs</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F5F0",
    paddingHorizontal: 20,
    marginTop:20
  },
  iconContainer: {
    width: 88,
    height: 88,
    borderRadius: 26,
    backgroundColor: "#EBF6F7",
    borderWidth: 1,
    borderColor: "#C8E6E8",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 63,
    marginBottom: 30,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 26,
  },
  title: {
    color: "#1A1828",
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: -0.6,
    lineHeight: 39,
    textAlign: "center",
    marginBottom: 3,
  },
  description: {
    color: "#8A88A8",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 23.8,
    textAlign: "center",
  },
  preferencesCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 30,
    paddingTop: 22,
    paddingBottom: 26,
    marginBottom: 30,
  },
  preferencesTitle: {
    color: "#8A88A8",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.8,
    lineHeight: 16.5,
    marginBottom: 16,
  },
  preferencesList: {
    gap: 12,
  },
  preferenceItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  preferenceIcon: {
    width: 32,
    height: 32,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },
  preferenceIconPurple: {
    backgroundColor: "#7A618114",
    borderColor: "#E05B5B",
  },
  preferenceIconRed: {
    backgroundColor: "#E05B5B14",
    borderColor: "#E05B5B",
  },
  preferenceIconYellow: {
    backgroundColor: "#E2B05314",
    borderColor: "#E05B5B",
  },
  preferenceIconGreen: {
    backgroundColor: "#16A34A14",
    borderColor: "#E05B5B",
  },
  preferenceText: {
    color: "#1A1828",
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 19.5,
  },
  matchingBanner: {
    height: 48,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#C8E6E8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    marginBottom: 30,
  },
  matchingText: {
    color: "#0D5C63",
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 19.5,
  },
  exploreButton: {
    height: 55,
    backgroundColor: "#0D5C63",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  exploreButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: -0.2,
    lineHeight: 22.5,
  },
});

export default SetUp;

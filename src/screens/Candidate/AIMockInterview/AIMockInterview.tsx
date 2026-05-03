import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { ChevronLeft, ChevronDown, Bot, Mic, Clock, Target, CircleAlert } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import StatusBar from "../../../components/StatusBar";
import { RootStackParamList } from "../../../App";

type AIMockInterviewNavigationProp = NativeStackNavigationProp<RootStackParamList, "AIMockInterview">;

const AIMockInterview = () => {
  const navigation = useNavigation<AIMockInterviewNavigationProp>();
  const [selectedDifficulty, setSelectedDifficulty] = useState("Medium");

  return (
    <View style={styles.container}>
      <StatusBar />

      {/* Header */}
      <LinearGradient
        colors={["#0D5C63", "#1A7A83"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.header}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("ApplicationDetail")}>
          <ChevronLeft size={17.58} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AI Mock Interview</Text>
      </LinearGradient>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.botIconContainer}>
            <LinearGradient
              colors={["#0D5C63", "#4AACB5"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1.3 }}
              style={styles.botIcon}
            >
              <Bot size={50} color="#FFFFFF" />
            </LinearGradient>
          </View>
          <Text style={styles.heroTitle}>Prepare with AI</Text>
          <Text style={styles.heroDescription}>
            Practice with our AI interviewer tuned to real job requirements
          </Text>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>6</Text>
            <Text style={styles.statLabel}>Sessions</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={[styles.statValue, { color: "#16A34A" }]}>67%</Text>
            <Text style={styles.statLabel}>Avg Score</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>This week</Text>
          </View>
        </View>

        {/* Select Job Role */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Select job role</Text>
            <View style={styles.sectionLine1} />
          </View>

          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Designer Figma</Text>
            <ChevronDown size={20} color="#1C1A2EAB" />
          </TouchableOpacity>
        </View>

        {/* Choose Difficulty */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Choose difficulty</Text>
            <View style={styles.sectionLine} />
          </View>

          <View style={styles.difficultyRow}>
            <TouchableOpacity
              style={[
                styles.difficultyCard,
                selectedDifficulty === "Easy" && styles.difficultyCardActive,
              ]}
              onPress={() => setSelectedDifficulty("Easy")}
            >
              <Text style={styles.difficultyTitle}>Easy</Text>
              <Text style={styles.difficultySubtitle}>Basic assessment</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.difficultyCard,
                selectedDifficulty === "Medium" && styles.difficultyCardActive,
              ]}
              onPress={() => setSelectedDifficulty("Medium")}
            >
              <Text style={styles.difficultyTitle}>Medium</Text>
              <Text style={styles.difficultySubtitle}>Skill evaluation</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.difficultyCard,
                selectedDifficulty === "Hard" && styles.difficultyCardActive,
              ]}
              onPress={() => setSelectedDifficulty("Hard")}
            >
              <Text style={styles.difficultyTitle}>Hard</Text>
              <Text style={styles.difficultySubtitle}>Pressure test</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* How it Works */}
        <View style={styles.howItWorksCard}>
          <View style={styles.howItWorksHeader}>
            <CircleAlert size={16} color="#7A6181" />
            <Text style={styles.howItWorksTitle}>How it Works</Text>
          </View>

          <View style={styles.howItWorksList}>
            <View style={styles.howItWorksItem}>
              <Mic size={18} color="#7A6181" />
              <Text style={styles.howItWorksText}>
                Use a microphone or type on the keyboard
              </Text>
            </View>
            <View style={styles.howItWorksItem}>
              <Clock size={18} color="#7A6181" />
              <Text style={styles.howItWorksText}>30-45 minutes per session</Text>
            </View>
            <View style={styles.howItWorksItem}>
              <Target size={18} color="#7A6181" />
              <Text style={styles.howItWorksText}>
                Receive detailed AI feedback after each session
              </Text>
            </View>
          </View>
        </View>

        {/* Start Button */}
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate("InterviewSession")}
        >
          <Text style={styles.startButtonText}>Start Interview</Text>
        </TouchableOpacity>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F5F0",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 13.3,
    paddingBottom: 13.3,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 33.4,
    height: 33.4,
    borderRadius: 11,
    backgroundColor: "#FFFFFF26",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22.5,
    marginLeft: 14,
  },
  scrollContent: {
    flex: 1,
  },
  heroSection: {
    alignItems: "center",
    paddingTop: 38,
    paddingHorizontal: 18.5,
  },
  botIconContainer: {
    marginBottom: 6,
  },
  botIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: {
    color: "#1C1A2E",
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 39,
    letterSpacing: -0.6,
    marginTop: 6,
  },
  heroDescription: {
    color: "#1C1A2E99",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    textAlign: "center",
    marginTop: 0,
    width:260
  },
  statsRow: {
    flexDirection: "row",
    gap: 11.5,
    paddingHorizontal: 18.5,
    marginTop: 25,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#EBF6F7",
    borderRadius: 12,
    paddingVertical: 11,
    alignItems: "center",
    shadowColor: "#0D5C63",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    color: "#0D5C63",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 20,
  },
  statLabel: {
    color: "#0D5C6399",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 20,
    marginTop: 0,
    textAlign:"center",
    width:60
  },
  section: {
    paddingHorizontal: 19,
    marginTop: 22,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    color: "#1A7A83",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 25.5,
    textTransform:"uppercase",
    width:155,
  },
    sectionLine1: {
    flex: 1,
    height: 1,
    backgroundColor: "#1A7A835C",
    marginLeft: 0,
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#1A7A835C",
    marginLeft: 14,
  },
  dropdown: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#0D5C6312",
    borderRadius: 14,
    paddingHorizontal: 23.07,
    paddingVertical: 15.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownText: {
    color: "#4A4868",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 21,
  },
  difficultyRow: {
    flexDirection: "row",
    gap: 11.5,
  },
  difficultyCard: {
    flex: 1,
    backgroundColor: "#EBF6F7",
    borderRadius: 12,
    paddingVertical: 14.5,
    alignItems: "center",
    shadowColor: "#0D5C63",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  difficultyCardActive: {
    backgroundColor: "#D0EAEC",
    borderWidth: 1,
    borderColor: "#0D5C63",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  difficultyTitle: {
    color: "#0D5C63",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  difficultySubtitle: {
    color: "#0D5C6399",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 15,
    marginTop: 3.5,
  },
  howItWorksCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginHorizontal: 18.5,
    marginTop: 22,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 17,
  },
  howItWorksHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 14,
  },
  howItWorksTitle: {
    color: "#7A6181",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  howItWorksList: {
    gap: 14,
  },
  howItWorksItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  howItWorksText: {
    color: "#7A6181",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 20,
    flex: 1,
  },
  startButton: {
    backgroundColor: "#0D5C63",
    borderRadius: 14,
    marginHorizontal: 18.5,
    marginTop: 22,
    paddingVertical: 16.5,
    alignItems: "center",
  },
  startButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22.5,
    letterSpacing: -0.2,
  },
  bottomSpacer: {
    height: 38,
  },
});

export default AIMockInterview;

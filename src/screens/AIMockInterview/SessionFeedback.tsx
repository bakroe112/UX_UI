import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { ChevronLeft, Calendar, CircleCheckBig, Eye, FileCheck, CircleAlert, RefreshCw } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle, Defs, LinearGradient as SvgLinearGradient, Stop } from "react-native-svg";
import StatusBar from "../../components/StatusBar";
import { RootStackParamList } from "../../../App";

type SessionFeedbackNavigationProp = NativeStackNavigationProp<RootStackParamList, "SessionFeedback">;

const SessionFeedback = () => {
  const navigation = useNavigation<SessionFeedbackNavigationProp>();

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
        <Text style={styles.headerTitle}>Session Feedback</Text>
      </LinearGradient>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Score Card */}
        <View style={styles.scoreCard}>
          <Text style={styles.scoreLabel}>AI EVALUATION COMPLETE</Text>
          <View style={styles.scoreCircleContainer}>
            <Svg width={120} height={120} viewBox="0 0 120 120" style={{ position: "absolute" }}>
              <Defs>
                <SvgLinearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <Stop offset="0%" stopColor="#0D5C63" />
                  <Stop offset="100%" stopColor="#4AACB5" />
                </SvgLinearGradient>
              </Defs>
              {/* Background circle */}
              <Circle cx={60} cy={60} r={48} stroke="#0D5C631F" strokeWidth={10} fill="none" />
              {/* Progress circle - 86% */}
              <Circle
                cx={60}
                cy={60}
                r={48}
                stroke="url(#scoreGradient)"
                strokeWidth={10}
                fill="none"
                strokeDasharray={`${2 * Math.PI * 48}`}
                strokeDashoffset={`${2 * Math.PI * 48 * (1 - 0.86)}`}
                transform="rotate(-40 60 60)"
              />
            </Svg>
            <View style={styles.scoreTextContainer}>
              <Text style={styles.scoreValue}>86</Text>
              <Text style={styles.scoreMax}>/ 100</Text>
            </View>
          </View>
          <View style={styles.performanceBadge}>
            <Text style={styles.performanceBadgeText}>Good Performance</Text>
          </View>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statItemValue}>30 min</Text>
              <Text style={styles.statItemLabel}>Duration</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statItemValue}>5 / 5</Text>
              <Text style={styles.statItemLabel}>Question</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statItemValue}>Medium</Text>
              <Text style={styles.statItemLabel}>Difficulty</Text>
            </View>
          </View>
        </View>

        {/* Evaluation Criteria */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Evaluation Criteria</Text>
            <View style={styles.sectionLine} />
          </View>

          <View style={styles.criteriaCard}>
            {/* Communication */}
            <View style={styles.criteriaItem}>
              <View style={[styles.criteriaIcon, styles.criteriaIconGreen]}>
                <Calendar size={16} color="#0D5C63" />
              </View>
              <View style={styles.criteriaContent}>
                <Text style={styles.criteriaLabel}>Communication</Text>
                <Text style={[styles.criteriaValue, { color: "#0D5C63" }]}>89%</Text>
              </View>
              <View style={styles.criteriaProgress}>
                <View style={styles.criteriaProgressBg} />
                <View style={[styles.criteriaProgressFill, { width: "86%", backgroundColor: "#0D5C63" }]} />
              </View>
            </View>

            {/* Technical Knowledge */}
            <View style={styles.criteriaItem}>
              <View style={[styles.criteriaIcon, styles.criteriaIconBlue]}>
                <CircleCheckBig size={16} color="#3B82F6" />
              </View>
              <View style={styles.criteriaContent}>
                <Text style={styles.criteriaLabel}>Technical Knowledge</Text>
                <Text style={[styles.criteriaValue, { color: "#3B82F6" }]}>73%</Text>
              </View>
              <View style={styles.criteriaProgress}>
                <View style={styles.criteriaProgressBg1} />
                <View style={[styles.criteriaProgressFill, { width: "77%", backgroundColor: "#3B82F6" }]} />
              </View>
            </View>

            {/* Structured Answer */}
            <View style={styles.criteriaItem}>
              <View style={[styles.criteriaIcon, styles.criteriaIconRed]}>
                <Eye size={16} color="#E05B5B" />
              </View>
              <View style={styles.criteriaContent}>
                <Text style={styles.criteriaLabel}>Structured Answe</Text>
                <Text style={[styles.criteriaValue, { color: "#E05B5B" }]}>90%</Text>
              </View>
              <View style={styles.criteriaProgress}>
                <View style={styles.criteriaProgressBg2} />
                <View style={[styles.criteriaProgressFill, { width: "87%", backgroundColor: "#E05B5B" }]} />
              </View>
            </View>

            {/* Confidence */}
            <View style={styles.criteriaItem1}>
              <View style={[styles.criteriaIcon, styles.criteriaIconYellow]}>
                <FileCheck size={16} color="#E2B053" />
              </View>
              <View style={styles.criteriaContent}>
                <Text style={styles.criteriaLabel}>Confidence</Text>
                <Text style={[styles.criteriaValue, { color: "#E2B053" }]}>83%</Text>
              </View>
              <View style={styles.criteriaProgress}>
                <View style={styles.criteriaProgressBg3} />
                <View style={[styles.criteriaProgressFill, { width: "82%", backgroundColor: "#E2B053" }]} />
              </View>
            </View>
          </View>
        </View>

        {/* Strengths */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle1}>Strengths</Text>
            <View style={styles.sectionLine} />
          </View>

          <View style={styles.feedbackList}>
            <View style={styles.feedbackItemGreen}>
              <CircleCheckBig size={16} color="#16A34A" />
              <Text style={styles.feedbackText}>
                Clearly articulated trade-offs between distributed training approaches
              </Text>
            </View>
            <View style={styles.feedbackItemGreen}>
              <CircleCheckBig size={16} color="#16A34A" />
              <Text style={styles.feedbackText}>
                Strong use of concrete metrics in system design
              </Text>
            </View>
            <View style={styles.feedbackItemGreen}>
              <CircleCheckBig size={16} color="#16A34A" />
              <Text style={styles.feedbackText}>
                Confident delivery with minimal filler words
              </Text>
            </View>
          </View>
        </View>

        {/* Improvements */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle2}>Improvements</Text>
            <View style={styles.sectionLine} />
          </View>

          <View style={styles.feedbackList}>
            <View style={styles.feedbackItemYellow}>
              <CircleAlert size={16} color="#E2B053" />
              <Text style={styles.feedbackText}>
                Deeper dive needed on fault tolerance mechanisms
              </Text>
            </View>
            <View style={styles.feedbackItemYellow}>
              <CircleAlert size={16} color="#E2B053" />
              <Text style={styles.feedbackText}>
                Behavioral answers lacked specific quantifiable outcomes
              </Text>
            </View>
          </View>
        </View>

        {/* Practice Again Button */}
        <TouchableOpacity
          style={styles.practiceButton}
          onPress={() => navigation.navigate("AIMockInterview")}
        >
          <RefreshCw size={18} color="#FFFFFF" />
          <Text style={styles.practiceButtonText}>Practice Again</Text>
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
  scoreCard: {
    backgroundColor: "#EBF6F7",
    borderWidth: 1,
    borderColor: "#C8E6E8",
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 30,
    paddingVertical: 24,
    alignItems: "center",
  },
  scoreLabel: {
    color: "#0D5C63",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19.5,
    marginBottom: 11,
  },
  scoreCircleContainer: {
    position: "relative",
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 11,
  },
  scoreTextContainer: {
    position: "absolute",
    alignItems: "center",
  },
  scoreValue: {
    color: "#0D5C63",
    fontSize: 26,
    fontWeight: "800",
    lineHeight: 22.5,
  },
  scoreMax: {
    color: "#0D5C6380",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 22.5,
  },
  performanceBadge: {
    backgroundColor: "#D0EAEC",
    borderWidth: 1,
    borderColor: "#0D5C631C",
    borderRadius: 13,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 11,
  },
  performanceBadgeText: {
    color: "#0D5C63",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19.5,
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
  },
  statItem: {
    alignItems: "center",
  },
  statItemValue: {
    color: "#0D5C63",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19.5,
  },
  statItemLabel: {
    color: "#0D5C63",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 19.5,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
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
    width:170
  },
    sectionTitle1: {
    color: "#1A7A83",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 25.5,
    textTransform:"uppercase",
    width:95
  },
    sectionTitle2: {
    color: "#1A7A83",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 25.5,
    textTransform:"uppercase",
    width:130
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#1A7A835C",
    marginLeft: 14,
  },
  criteriaCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
  },
  criteriaItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
    borderBottomWidth:1,
    borderColor:"#0d5c6311"
  },
    criteriaItem1: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
  },
  criteriaIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  criteriaIconGreen: {
    backgroundColor: "#F0FDF4",
    borderColor: "#0D5C633D",
  },
  criteriaIconBlue: {
    backgroundColor: "#FAFCFF",
    borderColor: "#3B82F63D",
  },
  criteriaIconRed: {
    backgroundColor: "#FEF2F2",
    borderColor: "#E05B5B3D",
  },
  criteriaIconYellow: {
    backgroundColor: "#FDF8EE",
    borderColor: "#E2B0533D",
  },
  criteriaContent: {
    flex: 1,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:10
  },
  criteriaLabel: {
    color: "#1C1A2E",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  criteriaValue: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  criteriaProgress: {
    position: "absolute",
    bottom: 0,
    left: 44,
    right: 0,
    height: 15,
  },
  criteriaProgressBg: {
    position: "absolute",
    width: "100%",
    height: 3,
    backgroundColor: "#0D5C634D",
    borderRadius:5
  },
    criteriaProgressBg1: {
    position: "absolute",
    width: "100%",
    height: 3,
    backgroundColor: "#3b83f649",
    borderRadius:5
  },
    criteriaProgressBg2: {
    position: "absolute",
    width: "100%",
    height: 3,
    backgroundColor: "#e05b5b3b",
    borderRadius:5
  },
    criteriaProgressBg3: {
    position: "absolute",
    width: "100%",
    height: 3,
    backgroundColor: "#e2b05342",
    borderRadius:5
  },
  criteriaProgressFill: {
    position: "absolute",
    height: 3,
    borderRadius:5
  },
  feedbackList: {
    gap: 10,
  },
  feedbackItemGreen: {
    backgroundColor: "#F0FDF4",
    borderWidth: 1,
    borderColor: "#4CAF5066",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  feedbackItemYellow: {
    backgroundColor: "#FDF8EE",
    borderWidth: 1,
    borderColor: "#E2B05366",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  feedbackText: {
    color: "#1C1A2ECC",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 20,
    flex: 1,
  },
  practiceButton: {
    backgroundColor: "#0D5C63",
    borderRadius: 14,
    marginHorizontal: 20,
    marginTop: 24,
    paddingVertical: 16.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  practiceButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22.5,
    letterSpacing: -0.2,
  },
  bottomSpacer: {
    height: 30,
  },
});

export default SessionFeedback;

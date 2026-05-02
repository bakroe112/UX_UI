import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { ChevronLeft, Bookmark, Upload, Building, CircleCheckBig, MoveRight, Users, Clock } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { Svg, Circle, Defs, LinearGradient, Stop } from "react-native-svg";
import QuickApply from "./components/QuickApply";

const JobDetail = () => {
  const navigation = useNavigation();
  const [showQuickApply, setShowQuickApply] = useState(false);

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>10:21</Text>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          {/* Back button */}
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
            <ChevronLeft size={18} color="#4A4868" />
          </TouchableOpacity>

          {/* Right buttons */}
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Bookmark size={16} color="#4A4868" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.iconButton, { marginLeft: 6 }]}>
              <Upload size={16} color="#4A4868" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Job title and company */}
        <View style={styles.titleSection}>
          <View style={styles.companyIcon}>
            <Building size={32} color="#7A6181" />
          </View>
          <View style={styles.titleText}>
            <Text style={styles.jobTitle}>Sr. Product Designer</Text>
            <Text style={styles.jobMeta}>Figma · San Francisco · 3 days ago</Text>
          </View>
        </View>

        {/* Tags */}
        <View style={styles.tagsContainer}>
          <View style={[styles.tag, styles.tagRemote]}>
            <Text style={styles.tagTextRemote}>Remote</Text>
          </View>
          <View style={[styles.tag, styles.tagFullTime]}>
            <Text style={styles.tagTextFullTime}>Full-time</Text>
          </View>
          <View style={[styles.tag, styles.tagNew]}>
            <Text style={styles.tagTextNew}>NEW</Text>
          </View>
        </View>
      </View>

      {/* Scrollable content */}
      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.contentPadding}>
          {/* Salary and Match cards */}
          <View style={styles.cardsRow}>
            {/* Salary card */}
            <View style={styles.salaryCard}>
              <View style={styles.salaryContent}>
                <Text style={styles.salaryLabel}>Annual Salary</Text>
                <Text style={styles.salaryAmount}>$140k – $180k</Text>
              </View>
              <View style={styles.salaryFooter}>
                <View style={styles.salaryFooterItem}>
                  <Users size={14} color="#8A88A8" />
                  <Text style={styles.salaryFooterText}>
                    <Text style={styles.salaryFooterHighlight}>12</Text> applied
                  </Text>
                </View>
                <View style={styles.salaryFooterItem}>
                  <Clock size={14} color="#8A88A8" />
                  <Text style={styles.salaryFooterText}>
                    Closes <Text style={styles.salaryFooterHighlight}>Apr 20</Text>
                  </Text>
                </View>
              </View>
            </View>

            {/* Match score card */}
            <View style={styles.matchCard}>
              <Text style={styles.matchTitle}>Your Match Score</Text>
              <View style={styles.matchCircle}>
                <Svg width={62} height={62} style={{ position: "absolute" }}>
                  <Defs>
                    <LinearGradient id="matchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <Stop offset="0%" stopColor="#0D5C63" />
                      <Stop offset="100%" stopColor="#4AACB5" />
                    </LinearGradient>
                  </Defs>
                  {/* Background circle */}
                  <Circle
                    cx={31}
                    cy={31}
                    r={28}
                    stroke="#0D5C631F"
                    strokeWidth={6}
                    fill="none"
                  />
                  {/* Progress circle - 96% */}
                  <Circle
                    cx={31}
                    cy={31}
                    r={28}
                    stroke="url(#matchGradient)"
                    strokeWidth={6}
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - 0.93)}`}
                    rotation="-65"
                    origin="31, 31"
                  />
                </Svg>
                <Text style={styles.matchPercentage}>96%</Text>
              </View>
            </View>
          </View>

          {/* About the Role */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About the Role</Text>
            <Text style={styles.sectionText}>
              We're looking for a passionate Senior Product Designer to join our Design Systems team. You'll shape the visual language used by millions of designers worldwide, collaborating closely with engineering and product teams to create cohesive, accessible experiences...
            </Text>
          </View>

          {/* Requirements */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Requirements</Text>
            <View style={styles.requirementsList}>
              <View style={styles.requirementItem}>
                <CircleCheckBig size={16} color="#0D5C63" />
                <Text style={styles.requirementText}>5+ years product design experience</Text>
              </View>
              <View style={styles.requirementItem}>
                <CircleCheckBig size={16} color="#0D5C63" />
                <Text style={styles.requirementText}>Expert-level Figma proficiency</Text>
              </View>
              <View style={styles.requirementItem}>
                <CircleCheckBig size={16} color="#0D5C63" />
                <Text style={styles.requirementText}>Design systems experience at scale</Text>
              </View>
              <View style={styles.requirementItem}>
                <CircleCheckBig size={16} color="#0D5C63" />
                <Text style={styles.requirementText}>Strong cross-functional collaboration</Text>
              </View>
              <View style={styles.requirementItem}>
                <CircleCheckBig size={16} color="#0D5C63" />
                <Text style={styles.requirementText}>Portfolio demonstrating end-to-end design</Text>
              </View>
            </View>
          </View>

          {/* Company card */}
          <View style={styles.companyCard}>
            <View style={styles.companyCardContent}>
              <View style={styles.companyCardLeft}>
                <View style={styles.companyCardIcon}>
                  <Building size={20} color="#7A6181" />
                </View>
                <View style={styles.companyCardText}>
                  <Text style={styles.companyName}>Figma</Text>
                  <Text style={styles.companyLink}>view company details</Text>
                </View>
              </View>
              <MoveRight size={20} color="#0D5C63" />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.quickApplyButton} onPress={() => setShowQuickApply(true)}>
          <Text style={styles.quickApplyButtonText}>Quick Apply</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Apply Modal */}
      {showQuickApply && <QuickApply onClose={() => setShowQuickApply(false)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F5F0",
  },
  statusBar: {
    height: 45,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  time: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: -0.3,
    lineHeight: 22.5,
  },
  header: {
    backgroundColor: "#FFFFFF",
    paddingBottom: 13,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 21,
    paddingTop: 17,
  },
  iconButton: {
    width: 33.4,
    height: 33.4,
    borderRadius: 11,
    backgroundColor: "#F3EFE9",
    justifyContent: "center",
    alignItems: "center",
  },
  headerRight: {
    flexDirection: "row",
  },
  titleSection: {
    flexDirection: "row",
    paddingHorizontal: 29,
    marginTop: 18,
    alignItems: "center",
  },
  companyIcon: {
    width: 60,
    height: 57,
    borderRadius: 18,
    backgroundColor: "#7A618114",
    borderWidth: 1,
    borderColor: "#7A618121",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    marginLeft: 20,
    flex: 1,
  },
  jobTitle: {
    color: "#1A1828",
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.5,
    lineHeight: 30,
  },
  jobMeta: {
    color: "#8A88A8",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 21,
    marginTop: 3,
  },
  tagsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 24,
  },
  tag: {
    height: 30,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#0D5C6312",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    marginRight: 5,
  },
  tagRemote: {
    backgroundColor: "#EBF6F7",
  },
  tagFullTime: {
    backgroundColor: "#F3EFE9",
  },
  tagNew: {
    backgroundColor: "#FFF4E5",
  },
  tagTextRemote: {
    color: "#0D5C63",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 18,
  },
  tagTextFullTime: {
    color: "#5A5570",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 18,
  },
  tagTextNew: {
    color: "#C4892A",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 18,
  },
  scrollContent: {
    flex: 1,
  },
  contentPadding: {
    padding: 21,
    paddingBottom: 40,
  },
  cardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  salaryCard: {
    width: 190,
    height: 107,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    padding: 14,
  },
  salaryContent: {
    alignItems: "center",
  },
  salaryLabel: {
    color: "#8A88A8",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 16.5,
    marginBottom: 3,
  },
  salaryAmount: {
    color: "#0D5C63",
    fontSize: 23,
    fontWeight: "800",
    letterSpacing: -0.8,
    lineHeight: 39,
  },
  salaryFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    gap:5,
    paddingHorizontal: 6,
  },
  salaryFooterItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  salaryFooterText: {
    color: "#8A88A8",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 16.5,
  },
  salaryFooterHighlight: {
    color: "#0D5C63",
  },
  matchCard: {
    width: 119,
    height: 107,
    borderRadius: 16,
    backgroundColor: "#EBF6F7",
    borderWidth: 1,
    borderColor: "#C8E6E8",
    padding: 12,
    alignItems: "center",
  },
  matchTitle: {
    color: "#0D5C63",
    fontSize: 11,
    fontWeight: "700",
    lineHeight: 19.5,
  },
  matchCircle: {
    width: 62,
    height: 62,
    marginTop: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  matchPercentage: {
    color: "#0D5C63",
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 22.5,
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 27,
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#1A1828",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21,
    marginBottom: 10,
  },
  sectionText: {
    color: "#4A4868",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 23.4,
  },
  requirementsList: {
    gap: 9,
  },
  requirementItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  requirementText: {
    color: "#4A4868",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20.8,
    flex: 1,
  },
  companyCard: {
    height: 60,
    borderRadius: 10,
    backgroundColor: "#EBF6F7",
    borderWidth: 0.2,
    borderColor: "#0D5C63",
    paddingHorizontal: 17,
    justifyContent: "center",
  },
  companyCardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  companyCardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  companyCardIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#7A618114",
    borderWidth: 1,
    borderColor: "#7A618121",
    justifyContent: "center",
    alignItems: "center",
  },
  companyCardText: {
    marginLeft: 12,
  },
  companyName: {
    color: "#1A1828",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21,
  },
  companyLink: {
    color: "#1A18288F",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 21,
  },
  bottomBar: {
    height: 95,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#0D5C6312",
    justifyContent: "center",
    paddingHorizontal: 21,
  },
  quickApplyButton: {
    height: 55,
    borderRadius: 14,
    backgroundColor: "#0D5C63",
    justifyContent: "center",
    alignItems: "center",
  },
  quickApplyButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 22.5,
  },
});

export default JobDetail;

import React from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Bookmark, Upload, MapPin, Star, Clock, Calendar, CircleCheckBig, Eye, FileCheck, Bot } from "lucide-react-native";

export default function ApplicationDetailScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}></Text>
      </View>

      {/* Header Section */}
      <View style={styles.headerSection}>
        {/* Navigation and Actions */}
        <View style={styles.headerNav}>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.goBack()}>
            <ChevronLeft size={18} color="#4a4868" />
          </TouchableOpacity>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Bookmark size={16} color="#4a4868" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Upload size={16} color="#4a4868" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Job Info */}
        <View style={styles.jobInfo}>
          <View style={styles.companyLogo}>
            <View style={styles.logoIcon} />
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.jobTitle}>Sr.Product Designer</Text>
            <Text style={styles.companyName}>Figma</Text>
            <View style={styles.locationRow}>
              <MapPin size={16} color="#8a88a8" />
              <Text style={styles.locationText}>San Francisco</Text>
            </View>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Interview</Text>
          </View>
        </View>

        {/* Job Tags */}
        <View style={styles.jobTags}>
          <View style={[styles.tag, styles.fullTimeTag]}>
            <Text style={styles.fullTimeText}>Full-time</Text>
          </View>
          <View style={[styles.tag, styles.salaryTag]}>
            <Text style={styles.salaryText}>$180k-$240K</Text>
          </View>
          <View style={[styles.tag, styles.remoteTag]}>
            <Text style={styles.remoteText}>Remote</Text>
          </View>
        </View>

        {/* Rating and Applied Date */}
        <View style={styles.metaInfo}>
          <View style={styles.ratingSection}>
            <Star size={18} color="#e2b053" fill="#e2b053" />
            <Text style={styles.ratingText}>4.8</Text>
            <Text style={styles.ratingLabel}>Rating</Text>
          </View>
          <View style={styles.appliedSection}>
            <Clock size={18} color="#0d5c63" />
            <Text style={styles.appliedText}>Applied Apr 6</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Application Status Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Application Status</Text>
            <View style={styles.sectionLine} />
          </View>
          
          <View style={styles.statusCard}>
            <View style={styles.statusProgress}>
              <View style={styles.progressSteps}>
                <View style={styles.stepCompleted}>
                  <View style={styles.stepIcon}>
                    <View style={styles.checkIcon} />
                  </View>
                </View>
                <View style={styles.stepCompleted}>
                  <View style={styles.stepIcon}>
                    <View style={styles.checkIcon} />
                  </View>
                </View>
                <View style={styles.stepCompleted}>
                  <View style={styles.stepIcon}>
                    <View style={styles.checkIcon} />
                  </View>
                </View>
                <View style={styles.stepCurrent}>
                  <View style={styles.stepIconCurrent}>
                    <View style={styles.currentDot} />
                  </View>
                </View>
                <View style={styles.stepPending}>
                  <View style={styles.stepIconPending}>
                    <View style={styles.pendingDot} />
                  </View>
                </View>
              </View>
              <View style={styles.progressLine}>
                <View style={styles.progressCompleted} />
                <View style={styles.progressRemaining} />
              </View>
            </View>
            
            <View style={styles.statusLabels}>
              <Text style={styles.statusLabelCompleted}>Applied</Text>
              <Text style={styles.statusLabelCompleted}>Screening</Text>
              <Text style={styles.statusLabelCompleted}>Viewed</Text>
              <Text style={styles.statusLabelCurrent}>Interview</Text>
              <Text style={styles.statusLabelPending}>Offer</Text>
            </View>
            
            <View style={styles.interviewBanner}>
              <View style={styles.interviewDot} />
              <Text style={styles.interviewText}>Technical Round 2 · Google Meet · Tomorrow</Text>
            </View>
          </View>
        </View>

        {/* Activity Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Activity</Text>
            <View style={styles.sectionLine} />
          </View>
          
          <View style={styles.activityCard}>
            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, styles.activityIconGreen]}>
                <Calendar size={16} color="#0d5c63" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Technical round 2 scheduled · Google Meet</Text>
                <Text style={styles.activityTime}>2h ago</Text>
              </View>
            </View>
            
            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, styles.activityIconBlue]}>
                <CircleCheckBig size={16} color="#3b82f6" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitleBlue}>HR Screening completed</Text>
                <Text style={styles.activityTime}>3 days ago</Text>
              </View>
            </View>
            
            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, styles.activityIconRed]}>
                <Eye size={16} color="#e05b5b" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitleRed}>Recruiter viewed your profile</Text>
                <Text style={styles.activityTime}>5 days ago</Text>
              </View>
            </View>
            
            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, styles.activityIconYellow]}>
                <FileCheck size={16} color="#e2b053" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitleYellow}>Application submitted</Text>
                <Text style={styles.activityTime}>Apr 1</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.timelineButton}
            onPress={() => navigation.navigate("ApplicationTimeline")}
          >
            <Calendar size={17} color="#0d5c63" />
            <Text style={styles.timelineButtonText}>Timeline</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.aiPrepButton}
            onPress={() => navigation.navigate("AIMockInterviewSetup")}
          >
            <Bot size={21} color="#000000" />
            <Text style={styles.aiPrepButtonText}>AI Prep</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.withdrawButton}
          onPress={() => navigation.navigate("WithdrawalFeedback")}
        >
          <Text style={styles.withdrawButtonText}>Withdraw Application</Text>
        </TouchableOpacity>

        {/* Bottom Indicator */}
        <View style={styles.bottomIndicator} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f5f0",
  },
  statusBar: {
    height: 45,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  timeText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Plus Jakarta Sans",
    letterSpacing: -0.3,
  },
  headerSection: {
    backgroundColor: "#ffffff",
    paddingBottom: 18,
  },
  headerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 21,
    paddingTop: 17,
    paddingBottom: 18,
  },
  navButton: {
    width: 33.4,
    height: 33.4,
    backgroundColor: "#f3efe9",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  headerActions: {
    flexDirection: "row",
    gap: 6,
  },
  actionButton: {
    width: 33.4,
    height: 33.4,
    backgroundColor: "#f3efe9",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  jobInfo: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 21,
    marginBottom: 26,
  },
  companyLogo: {
    width: 60,
    height: 57,
    backgroundColor: "#7a618114",
    borderColor: "#7a618121",
    borderWidth: 1,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  logoIcon: {
    width: 32,
    height: 32,
    backgroundColor: "#7a6181",
    borderRadius: 16,
  },
  jobDetails: {
    flex: 1,
  },
  jobTitle: {
    color: "#1a1828",
    fontSize: 20,
    fontWeight: "800",
    fontFamily: "Plus Jakarta Sans",
    letterSpacing: -0.5,
    lineHeight: 30,
    marginBottom: 3,
  },
  companyName: {
    color: "#e2b053",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 21,
    marginBottom: 3,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "#8a88a8",
    fontSize: 14,
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 21,
    marginLeft: 3,
  },
  statusBadge: {
    backgroundColor: "#fdf8ee",
    borderColor: "#e2b05312",
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 4,
    height: 26,
    justifyContent: "center",
  },
  statusText: {
    color: "#e2b053",
    fontSize: 11,
    fontWeight: "700",
    fontFamily: "Plus Jakarta Sans",
    textAlign: "center",
    lineHeight: 18,
  },
  jobTags: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 16,
  },
  tag: {
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    height: 26,
    justifyContent: "center",
  },
  fullTimeTag: {
    backgroundColor: "#f2edf5",
  },
  fullTimeText: {
    color: "#7a6181",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Plus Jakarta Sans",
    textAlign: "center",
    lineHeight: 18,
  },
  salaryTag: {
    backgroundColor: "#fdf8ee",
  },
  salaryText: {
    color: "#e2b053",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Plus Jakarta Sans",
    textAlign: "center",
    lineHeight: 18,
  },
  remoteTag: {
    backgroundColor: "#f0fdf4",
  },
  remoteText: {
    color: "#16a34a",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Plus Jakarta Sans",
    textAlign: "center",
    lineHeight: 18,
  },
  metaInfo: {
    flexDirection: "row",
    paddingHorizontal: 21,
    gap: 13,
  },
  ratingSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    color: "#e2b053",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 18,
    marginLeft: 5,
  },
  ratingLabel: {
    color: "#1c1a2e70",
    fontSize: 11,
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 18,
    marginLeft: 6,
  },
  appliedSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  appliedText: {
    color: "#1c1a2e70",
    fontSize: 11,
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 18,
    marginLeft: 5,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 14,
  },
  section: {
    marginBottom: 22,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    color: "#1a7a83",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 25.5,
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#1a7a835c",
    marginLeft: 14,
  },
  statusCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
  },
  statusProgress: {
    marginBottom: 18,
  },
  progressSteps: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  stepCompleted: {
    alignItems: "center",
  },
  stepCurrent: {
    alignItems: "center",
  },
  stepPending: {
    alignItems: "center",
  },
  stepIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#4caf50",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  stepIconCurrent: {
    width: 24,
    height: 24,
    backgroundColor: "#e2b053",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  stepIconPending: {
    width: 24,
    height: 24,
    backgroundColor: "#e7eff0",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    width: 14,
    height: 14,
    backgroundColor: "#ffffff",
    borderRadius: 7,
  },
  currentDot: {
    width: 8,
    height: 8,
    backgroundColor: "#c8850a",
    borderRadius: 4,
  },
  pendingDot: {
    width: 8,
    height: 8,
    backgroundColor: "#0d5c6326",
    borderRadius: 4,
  },
  progressLine: {
    flexDirection: "row",
    height: 2,
    marginHorizontal: 27,
  },
  progressCompleted: {
    flex: 218,
    backgroundColor: "#4caf50",
  },
  progressRemaining: {
    flex: 58,
    backgroundColor: "#e7eff0",
  },
  statusLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 27,
  },
  statusLabelCompleted: {
    color: "#4caf50",
    fontSize: 10,
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 18,
  },
  statusLabelCurrent: {
    color: "#e2b053",
    fontSize: 10,
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 18,
  },
  statusLabelPending: {
    color: "#0d5c6340",
    fontSize: 10,
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 18,
  },
  interviewBanner: {
    backgroundColor: "#e2b05310",
    borderColor: "#e2b05325",
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 22,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  interviewDot: {
    width: 6,
    height: 6,
    backgroundColor: "#e2b053",
    borderRadius: 3,
    marginRight: 10,
  },
  interviewText: {
    color: "#e2b053",
    fontSize: 11.5,
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 18,
  },
  activityCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: "#0d5c632e",
  },
  activityIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  activityIconGreen: {
    backgroundColor: "#f0fdf4",
    borderColor: "#0d5c633d",
  },
  activityIconBlue: {
    backgroundColor: "#fafcff",
    borderColor: "#3b82f63d",
  },
  activityIconRed: {
    backgroundColor: "#fef2f2",
    borderColor: "#e05b5b3d",
  },
  activityIconYellow: {
    backgroundColor: "#fdf8ee",
    borderColor: "#e2b0533d",
  },
  activityContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activityTitle: {
    color: "#0d5c63",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 20,
    flex: 1,
  },
  activityTitleBlue: {
    color: "#3b82f6",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 20,
    flex: 1,
  },
  activityTitleRed: {
    color: "#e05b5b",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 20,
    flex: 1,
  },
  activityTitleYellow: {
    color: "#e2b053",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 20,
    flex: 1,
  },
  activityTime: {
    color: "#1c1a2e66",
    fontSize: 10.5,
    fontWeight: "500",
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 20,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 11,
    marginBottom: 12,
  },
  timelineButton: {
    flex: 1,
    backgroundColor: "#f0fdf4",
    borderColor: "#0d5c633d",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  timelineButtonText: {
    color: "#0d5c63",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 22.5,
  },
  aiPrepButton: {
    flex: 1,
    backgroundColor: "#e2b053de",
    borderRadius: 16,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  aiPrepButtonText: {
    color: "#1c1a2e",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 22.5,
  },
  withdrawButton: {
    backgroundColor: "#ef535014",
    borderColor: "#ef535033",
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  withdrawButtonText: {
    color: "#e05b5b",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 22.5,
  },
  bottomIndicator: {
    width: 158,
    height: 2,
    backgroundColor: "#f9f5f0",
    alignSelf: "center",
    marginBottom: 14,
  },
});
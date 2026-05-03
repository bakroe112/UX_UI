import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { ChevronLeft,MapPin , Bookmark, Upload, Star, Clock, Calendar, CircleCheckBig, Eye, FileCheck, Bot,Building } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Svg, { Polygon, Line, Circle } from "react-native-svg";
import StatusBar from "../../../components/StatusBar";
import { RootStackParamList } from "../../../App";

type ApplicationDetailNavigationProp = NativeStackNavigationProp<RootStackParamList, "ApplicationDetail">;

const ApplicationDetail = () => {
  const navigation = useNavigation<ApplicationDetailNavigationProp>();

  return (
    <View style={styles.container}>
      <StatusBar />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("TrackerAll")}>
          <ChevronLeft size={17.58} color="#4A4868" />
        </TouchableOpacity>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Bookmark size={16} color="#4A4868" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Upload size={16} color="#4A4868" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Job Info */}
        <View style={styles.jobInfo}>
          <View style={styles.jobHeader}>
            <View style={styles.companyIcon}>
              <Building size={24} color={"#7A6181"}/>
            </View>
            <View style={styles.jobTitleContainer}>
              <Text style={styles.jobTitle}>Sr.Product Designer</Text>
              <Text style={styles.companyName}>Figma</Text>
              <View style={styles.locationRow}>
                <MapPin size={14} color={"#8A88A8"}/>
                <Text style={styles.locationText}>San Francisco</Text>
              </View>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>Interview</Text>
            </View>
          </View>

          {/* Badges */}
          <View style={styles.badgesRow}>
            <View style={[styles.badge, styles.badgePurple]}>
              <Text style={styles.badgePurpleText}>Full-time</Text>
            </View>
            <View style={[styles.badge, styles.badgeYellow]}>
              <Text style={styles.badgeYellowText}>$180k-$240K</Text>
            </View>
            <View style={[styles.badge, styles.badgeGreen]}>
              <Text style={styles.badgeGreenText}>Remote</Text>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Rating & Applied Date */}
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Star size={18} color="#E2B053" />
              <Text style={styles.ratingValue}>4.8</Text>
              <Text style={styles.ratingLabel}>Rating</Text>
            </View>
            <View style={styles.metaItem}>
              <Clock size={18} color="#0D5C63" />
              <Text style={styles.appliedText}>Applied Apr 6</Text>
            </View>
          </View>
        </View>

        {/* Application Status */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Application Status</Text>
            <View style={styles.sectionLine} />
          </View>

          <View style={styles.statusCard}>
            <View style={styles.statusTimeline}>
              {/* Progress Circles */}
              <View style={styles.progressRow}>
                <View style={styles.progressCircleComplete}>
                  <View style={styles.checkIcon} />
                </View>
                <View style={styles.progressCircleComplete}>
                  <View style={styles.checkIcon} />
                </View>
                <View style={styles.progressCircleComplete}>
                  <View style={styles.checkIcon} />
                </View>
                <View style={styles.progressCircleActive}>
                  <View style={styles.activeDot} />
                </View>
                <View style={styles.progressCircleInactive}>
                  <View style={styles.inactiveDot} />
                </View>
              </View>

              {/* Progress Line */}
              <View style={styles.progressLineContainer}>
                <View style={styles.progressLineComplete} />
                <View style={styles.progressLineInactive} />
              </View>

              {/* Labels */}
              <View style={styles.statusLabels}>
                <Text style={styles.statusLabelComplete}>Applied</Text>
                <Text style={styles.statusLabelComplete}>Screening</Text>
                <Text style={styles.statusLabelComplete}>Viewed</Text>
                <Text style={styles.statusLabelActive}>Interview</Text>
                <Text style={styles.statusLabelInactive}>Offer</Text>
              </View>
            </View>

            {/* Next Interview Banner */}
            <View style={styles.interviewBanner}>
              <View style={styles.interviewDot} />
              <Text style={styles.interviewText}>Technical Round 2 · Google Meet · Tomorrow</Text>
            </View>
          </View>
        </View>

        {/* Activity */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Activity</Text>
            <View style={styles.sectionLine1} />
          </View>

          <View style={styles.activityCard}>
            {/* Activity Item 1 */}
            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, styles.activityIconGreen]}>
                <Calendar size={16} color="#0D5C63" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTextGreen}>Technical round 2 scheduled · Google Meet</Text>
                <Text style={styles.activityTime}>2h ago</Text>
              </View>
            </View>

            {/* Activity Item 2 */}
            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, styles.activityIconBlue]}>
                <CircleCheckBig size={16} color="#3B82F6" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTextBlue}>HR Screening completed</Text>
                <Text style={styles.activityTime}>3 days ago</Text>
              </View>
            </View>

            {/* Activity Item 3 */}
            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, styles.activityIconRed]}>
                <Eye size={16} color="#E05B5B" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTextRed}>Recruiter viewed your profile</Text>
                <Text style={styles.activityTime}>5 days ago</Text>
              </View>
            </View>

            {/* Activity Item 4 */}
            <View style={styles.activityItem1}>
              <View style={[styles.activityIcon, styles.activityIconYellow]}>
                <FileCheck size={16} color="#E2B053" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTextYellow}>Application submitted</Text>
                <Text style={styles.activityTime}>Apr 1</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.timelineButton}>
              <Calendar size={17} color="#0D5C63" />
              <Text style={styles.timelineButtonText}>Timeline</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.aiPrepButton}
              onPress={() => navigation.navigate("AIMockInterview")}
            >
              <Bot size={21} color="#1C1A2E" />
              <Text style={styles.aiPrepButtonText}>AI Prep</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.withdrawButton}>
            <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
              <Polygon 
                points="10.5,3 19,18 2,18" 
                stroke="#E05B5B" 
                strokeWidth={1.5} 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Line x1="10.5" y1="9" x2="10.5" y2="13" stroke="#E05B5B" strokeWidth={1.5} strokeLinecap="round" />
              <Circle cx="10.5" cy="15.5" r="0.75" fill="#E05B5B" />
            </Svg>
            <Text style={styles.withdrawButtonText}>Withdraw Application</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Spacer */}
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
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 21,
    paddingTop: 17,
    paddingBottom: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    width: 33.4,
    height: 33.4,
    borderRadius: 11,
    backgroundColor: "#F3EFE9",
    justifyContent: "center",
    alignItems: "center",
  },
  headerActions: {
    flexDirection: "row",
    gap: 6.4,
  },
  iconButton: {
    width: 33.4,
    height: 33.4,
    borderRadius: 11,
    backgroundColor: "#F3EFE9",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContent: {
    flex: 1,
  },
  jobInfo: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 21,
    paddingTop: 25,
    paddingBottom: 14,
  },
  jobHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 21,
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
  buildingWindow: {
    position: "absolute",
    width: 10.68,
    height: 21.33,
    top: 13.33,
    left: 16,
    borderWidth: 1.5,
    borderColor: "#7A6181",
  },
  jobTitleContainer: {
    flex: 1,
    marginLeft: 16,
  },
  jobTitle: {
    color: "#1A1828",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 30,
    letterSpacing: -0.5,
  },
  companyName: {
    color: "#E2B053",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 21,
    marginTop: 3,
  },
  locationRow: {
    gap: 2,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  locationText: {
    color: "#8A88A8",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
  },
  statusBadge: {
    backgroundColor: "#FDF8EE",
    borderWidth: 1,
    borderColor: "#E2B05312",
    borderRadius: 18,
    paddingHorizontal: 11,
    paddingVertical: 4,
    height: 26,
    justifyContent: "center",
  },
  statusBadgeText: {
    color: "#E2B053",
    fontSize: 11,
    fontWeight: "700",
    lineHeight: 18,
  },
  badgesRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 13,
  },
  badge: {
    borderRadius: 12,
    paddingHorizontal: 11,
    paddingVertical: 4,
    height: 26,
    justifyContent: "center",
  },
  badgePurple: {
    backgroundColor: "#F2EDF5",
  },
  badgePurpleText: {
    color: "#7A6181",
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 18,
  },
  badgeYellow: {
    backgroundColor: "#FDF8EE",
  },
  badgeYellowText: {
    color: "#E2B053",
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 18,
  },
  badgeGreen: {
    backgroundColor: "#F0FDF4",
  },
  badgeGreenText: {
    color: "#16A34A",
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 18,
  },
  divider: {
    height: 1,
    backgroundColor: "#0D5C6312",
    marginBottom: 14,
  },
  metaRow: {
    flexDirection: "row",
    gap: 13,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  ratingValue: {
    color: "#E2B053",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 18,
  },
  ratingLabel: {
    color: "#1C1A2E70",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 18,
  },
  appliedText: {
    color: "#1C1A2E70",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 18,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 14,
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
    width:160
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#1A7A835C",
    marginLeft: 10,
  },
    sectionLine1: {
    flex: 1,
    height: 1,
    backgroundColor: "#1A7A835C",
    marginLeft: -80,
  },
  statusCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
  },
  statusTimeline: {
    marginBottom: 17,
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 2,
  },
  progressCircleComplete: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },
  progressCircleActive: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E2B053",
    justifyContent: "center",
    alignItems: "center",
  },
  progressCircleInactive: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E7EFF0",
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    width: 9.33,
    height: 6.42,
    borderLeftWidth: 1.25,
    borderBottomWidth: 1.25,
    borderColor: "#FFFFFF",
    transform: [{ rotate: "-45deg" }],
    marginTop: -2,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#C8850A",
  },
  inactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#0D5C6326",
  },
  progressLineContainer: {
    position: "absolute",
    top: 12,
    left: 20,
    right: 27,
    flexDirection: "row",
    zIndex: 1,
  },
  progressLineComplete: {
    width: 190,
    height: 2,
    backgroundColor: "#4CAF50",
  },
  progressLineInactive: {
    width: 58,
    height: 2,
    backgroundColor: "#E7EFF0",
  },
  statusLabels: {
    flexDirection: "row",
    marginTop: 10,
    gap:26,
    right:4
  },
  statusLabelComplete: {
    color: "#4CAF50",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 18,
  },
  statusLabelActive: {
    color: "#E2B053",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 18,
  },
  statusLabelInactive: {
    color: "#0D5C6340",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 18,
  },
  interviewBanner: {
    backgroundColor: "#E2B05310",
    borderWidth: 1,
    borderColor: "#E2B05325",
    borderRadius: 14,
    paddingHorizontal: 22,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  interviewDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E2B053",
  },
  interviewText: {
    color: "#E2B053",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 18,
  },
  activityCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical:10
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
    borderBottomWidth:0.5,
    borderColor:"#0d5c630c",
    justifyContent:"center"
  },
    activityItem1: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
  },
  activityIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activityIconGreen: {
    backgroundColor: "#F0FDF4",
    borderColor: "#0D5C633D",
  },
  activityIconBlue: {
    backgroundColor: "#FAFCFF",
    borderColor: "#3B82F63D",
  },
  activityIconRed: {
    backgroundColor: "#FEF2F2",
    borderColor: "#E05B5B3D",
  },
  activityIconYellow: {
    backgroundColor: "#FDF8EE",
    borderColor: "#E2B0533D",
  },
  activityContent: {
    flex: 1,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activityTextGreen: {
    color: "#0D5C63",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 20,
    flex: 1,
  },
  activityTextBlue: {
    color: "#3B82F6",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 20,
    flex: 1,
  },
  activityTextRed: {
    color: "#E05B5B",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 20,
    flex: 1,
  },
  activityTextYellow: {
    color: "#E2B053",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 20,
    flex: 1,
  },
  activityTime: {
    color: "#1C1A2E66",
    fontSize: 10.5,
    fontWeight: "500",
    lineHeight: 20,
    marginLeft: 10,
  },
  actionButtons: {
    paddingHorizontal: 21,
    marginTop: 14,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 11,
    marginBottom: 12,
  },
  timelineButton: {
    flex: 1,
    backgroundColor: "#F0FDF4",
    borderWidth: 1,
    borderColor: "#0D5C633D",
    borderRadius: 10,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 9,
  },
  timelineButtonText: {
    color: "#0D5C63",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 22.5,
  },
  aiPrepButton: {
    flex: 1,
    backgroundColor: "#E2B053DE",
    borderRadius: 16,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  aiPrepButtonText: {
    color: "#1C1A2E",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 22.5,
  },
  withdrawButton: {
    backgroundColor: "#EF535014",
    borderWidth: 1,
    borderColor: "#EF535033",
    borderRadius: 16,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  withdrawButtonText: {
    color: "#E05B5B",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 22.5,
  },
  bottomSpacer: {
    height: 30,
  },
});

export default ApplicationDetail;

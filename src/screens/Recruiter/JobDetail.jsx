import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default (props) => {
  return (
    <View
      style={{
        display: props.currentScreen === "jobdetail" ? "flex" : "none",
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.jobHeader}>
            <View style={styles.iconRow}>
              <TouchableOpacity onPress={() => props.onNavigate("active")}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/90hgzfwo_expires_30_days.png",
                  }}
                  resizeMode="stretch"
                  style={styles.headerIcon}
                />
              </TouchableOpacity>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/w9ta4kqp_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.headerIcon}
              />
            </View>

            <View style={styles.jobTitleSection}>
              <TouchableOpacity style={styles.companyAvatar}>
                <Text style={styles.avatarText}>{"F"}</Text>
              </TouchableOpacity>
              <View style={styles.jobTitleContent}>
                <Text style={styles.jobTitle}>{"Sr. Product Designer"}</Text>
                <View style={styles.jobMeta}>
                  <Text style={styles.metaText}>{"Figma"}</Text>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/pbjituja_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.metaDot}
                  />
                  <Text style={styles.metaText}>{"Design"}</Text>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/4pqh83oq_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.metaDot}
                  />
                  <Text style={styles.metaText}>{"Posted 18 days ago"}</Text>
                </View>
              </View>
              <View style={styles.emptySpace}></View>
            </View>

            <View style={styles.jobTags}>
              <TouchableOpacity style={styles.tagActive}>
                <Text style={styles.tagActiveText}>{"Active"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tagSalary}>
                <Text style={styles.tagSalaryText}>{"$140-$165k"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tagApplicants}>
                <Text style={styles.tagApplicantsText}>{"47 Applicants"}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.statsSection}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{"1.2k"}</Text>
              <Text style={styles.statLabel}>{"Views"}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{"47"}</Text>
              <Text style={styles.statLabel}>{"Applied"}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{"12"}</Text>
              <Text style={styles.statLabel}>{"Screened"}</Text>
            </View>
            <TouchableOpacity style={styles.statCard}>
              <Text style={styles.statNumber}>{"5"}</Text>
              <Text style={styles.statLabel}>{"Interviewing"}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.roleSummaryCard}>
            <Text style={styles.roleSummaryTitle}>{"ROLE SUMMARY"}</Text>
            <Text style={styles.roleSummaryText}>
              {
                "Senior designer for Figma's design systems team. Owns features used by 8M+ designers. Requires 5+ years experience with Figma, design systems, and user research."
              }
            </Text>
          </View>

          <View style={styles.assignedTeamCard}>
            <Text style={styles.assignedTeamTitle}>{"ASSIGNED TEAM"}</Text>
            <View style={styles.teamMember}>
              <TouchableOpacity style={styles.teamAvatar1}>
                <Text style={styles.avatarInitial}>{"A"}</Text>
              </TouchableOpacity>
              <View style={styles.teamInfo}>
                <Text style={styles.teamName}>{"Alex Rivera"}</Text>
                <Text style={styles.teamRole}>{"Lead Recruiter"}</Text>
              </View>
            </View>

            <View style={styles.teamMember}>
              <TouchableOpacity style={styles.teamAvatar2}>
                <Text style={styles.avatarInitial2}>{"P"}</Text>
              </TouchableOpacity>
              <View style={styles.teamInfo}>
                <Text style={styles.teamName}>{"Priya Sharma"}</Text>
                <Text style={styles.teamRole}>{"Coordinator"}</Text>
              </View>
            </View>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.viewCandidatesBtn}>
              <Text style={styles.viewCandidatesBtnText}>
                {"View All Candidates"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.analyticsBtn}>
              <Text style={styles.analyticsBtnText}>{"Analytics"}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F5F0",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F9F5F0",
    paddingBottom: 20,
  },
  jobHeader: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    marginBottom: 16,
    paddingTop: 50,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 9,
    marginHorizontal: 20,
  },
  headerIcon: {
    width: 38,
    height: 38,
  },
  jobTitleSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
    marginLeft: 20,
    marginRight: 38,
  },
  companyAvatar: {
    backgroundColor: "#F4F2F5",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 12,
  },
  avatarText: {
    color: "#7A6181",
    fontSize: 20,
    fontWeight: "bold",
  },
  jobTitleContent: {
    flex: 1,
    marginRight: 12,
  },
  jobTitle: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  jobMeta: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  metaText: {
    color: "#4A4868",
    fontSize: 12,
    marginRight: 9,
    opacity: 0.7,
  },
  metaDot: {
    width: 2,
    height: 2,
    marginRight: 5,
  },
  emptySpace: {
    width: 50,
    height: 50,
  },
  jobTags: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  tagActive: {
    backgroundColor: "#EBF6F7",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 11,
    marginRight: 7,
  },
  tagActiveText: {
    color: "#0D5C63",
    fontSize: 11,
    fontWeight: "bold",
  },
  tagSalary: {
    backgroundColor: "#F3EFE9",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 7,
    marginRight: 7,
  },
  tagSalaryText: {
    color: "#4A4868",
    fontSize: 11,
    fontWeight: "bold",
  },
  tagApplicants: {
    backgroundColor: "#F2EDF5",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  tagApplicantsText: {
    color: "#7A6181",
    fontSize: 11,
    fontWeight: "bold",
  },
  statsSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    marginHorizontal: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginRight: 7,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#0000007c",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 12,
    elevation: 5,
  },
  statNumber: {
    color: "#0D5C63",
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#B6B4C8",
    fontSize: 10,
    lineHeight: 12,
  },
  roleSummaryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 15,
    paddingRight: 11,
    marginBottom: 16,
    marginHorizontal: 20,
    paddingLeft: 12,
  },
  roleSummaryTitle: {
    color: "#0D5C63",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 7,
  },
  roleSummaryText: {
    color: "#4A4868",
    fontSize: 13,
    fontWeight: "300",
    lineHeight: 18,
  },
  assignedTeamCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 17,
    paddingLeft: 11,
    marginBottom: 16,
    marginHorizontal: 20,
  },
  assignedTeamTitle: {
    color: "#0D5C63",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 12,
  },
  teamMember: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  teamAvatar1: {
    backgroundColor: "#E8F0F0",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 13,
    marginRight: 5,
  },
  teamAvatar2: {
    backgroundColor: "#F2F0F3",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 5,
  },
  avatarInitial: {
    color: "#0D5C63",
    fontSize: 18,
    fontWeight: "bold",
  },
  avatarInitial2: {
    color: "#7A6181",
    fontSize: 18,
    fontWeight: "bold",
  },
  // teamInfo: {
  //   marginBottom
  // },
  teamName: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
  },
  teamRole: {
    color: "#B6B4C8",
    fontSize: 12,
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  viewCandidatesBtn: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0D5C63",
    borderRadius: 12,
    paddingVertical: 13,
    marginRight: 10,
  },
  viewCandidatesBtnText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  analyticsBtn: {
    backgroundColor: "#F3EFE9",
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 19,
  },
  analyticsBtnText: {
    color: "#7A6181",
    fontSize: 15,
    fontWeight: "bold",
  },
});

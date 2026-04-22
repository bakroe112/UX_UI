import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, X, ChevronDown, AlertTriangle, Info } from "lucide-react-native";

export default function WithdrawalFeedbackScreen({ navigation }) {
  const [feedback, setFeedback] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>10:21</Text>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
          <ChevronLeft size={17.58} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Withdraw & Feedback</Text>
        <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
          <X size={16} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Warning Card */}
        <View style={styles.warningCard}>
          <View style={styles.warningIcon}>
            <AlertTriangle size={24} color="#e05b5b" />
          </View>
          <View style={styles.warningContent}>
            <Text style={styles.warningTitle}>Withdraw Application?</Text>
            <Text style={styles.warningText}>
              You are about to withdraw your application for{" "}
              <Text style={styles.warningTextBold}>Senior AI Software Engineer</Text>
              {" "}at{" "}
              <Text style={styles.warningTextBold}>Google DeepMind</Text>
              {" "}this action cannot be undone.
            </Text>
          </View>
        </View>

        {/* Job Card */}
        <View style={styles.jobCard}>
          <View style={styles.jobCardInner}>
            <View style={styles.jobLogoRow}>
              <View style={styles.jobLogo}>
                <Text style={styles.jobLogoText}>G</Text>
              </View>
              <View style={styles.jobInfo}>
                <Text style={styles.jobTitle}>Senior AI Software Engineer</Text>
                <Text style={styles.jobMeta}>Google DeepMind • Applied Apr 1</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Reason Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>reason for withdrawal</Text>
            <View style={styles.sectionLine} />
          </View>

          {/* Dropdown */}
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>Accepted another offer</Text>
            <ChevronDown size={20} color="#1c1a2ea3" />
          </View>

          {/* Feedback Text Area */}
          <View style={styles.textAreaWrapper}>
            <TextInput
              style={styles.textArea}
              placeholder="Share your experience with this application process. Your feedback helps recruiter improve."
              placeholderTextColor="#1c1a2e99"
              multiline
              value={feedback}
              onChangeText={setFeedback}
              maxLength={500}
            />
            <Text style={styles.charCount}>0 / 500</Text>
          </View>
        </View>

        {/* Anonymous Notice */}
        <View style={styles.anonymousNotice}>
          <Info size={17} color="#0d5c63a3" />
          <Text style={styles.anonymousText}>Your feedback is anonymous</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.withdrawButton}
            onPress={() => navigation.navigate("WithdrawalComplete")}
          >
            <Text style={styles.withdrawButtonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>
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
    letterSpacing: -0.3,
  },
  header: {
    height: 60,
    backgroundColor: "#0d5c63",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerBtn: {
    width: 33.4,
    height: 33.4,
    backgroundColor: "#ffffff26",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22.5,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  warningCard: {
    backgroundColor: "#ef53501f",
    borderColor: "#ef535066",
    borderWidth: 1,
    borderRadius: 16,
    padding: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  warningIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  warningContent: {
    flex: 1,
  },
  warningTitle: {
    color: "#e05b5b",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22.5,
    marginBottom: 4,
  },
  warningText: {
    color: "#1c1a2e99",
    fontSize: 12,
    lineHeight: 20,
  },
  warningTextBold: {
    color: "#1c1a2e",
    fontWeight: "700",
  },
  jobCard: {
    backgroundColor: "#ebf6f7",
    borderColor: "#0d5c636e",
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 19,
    paddingVertical: 18,
    marginBottom: 24,
  },
  jobCardInner: {},
  jobLogoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  jobLogo: {
    width: 40,
    height: 40,
    backgroundColor: "#0d5c6312",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  jobLogoText: {
    color: "#0d5c63",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 20,
    textAlign: "center",
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    color: "#1c1a2e",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 20,
  },
  jobMeta: {
    color: "#e2b053",
    fontSize: 12,
    lineHeight: 20,
  },
  section: {
    marginBottom: 16,
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
    lineHeight: 25.5,
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#1a7a835c",
    marginLeft: 14,
  },
  dropdown: {
    backgroundColor: "#ebf6f7",
    borderColor: "#0d5c636e",
    borderWidth: 1,
    borderRadius: 16,
    height: 50,
    paddingHorizontal: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  dropdownText: {
    color: "#1c1a2e",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 20,
  },
  textAreaWrapper: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 17,
    minHeight: 110,
  },
  textArea: {
    color: "#1c1a2e",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 21,
    minHeight: 70,
    textAlignVertical: "top",
  },
  charCount: {
    color: "#1c1a2e80",
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 21,
    textAlign: "right",
    marginTop: 4,
  },
  anonymousNotice: {
    backgroundColor: "#0d5c630a",
    borderColor: "#0d5c6375",
    borderWidth: 1,
    borderRadius: 11,
    height: 41,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 16,
  },
  anonymousText: {
    color: "#0d5c6399",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 21,
    textAlign: "center",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 30,
  },
  cancelButton: {
    flex: 1,
    height: 56,
    borderColor: "#0d5c63",
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#0d5c63",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: -0.2,
    lineHeight: 22.5,
  },
  withdrawButton: {
    flex: 1,
    height: 56,
    backgroundColor: "#e05b5b",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  withdrawButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: -0.2,
    lineHeight: 22.5,
  },
});

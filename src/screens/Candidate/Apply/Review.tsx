import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { ChevronLeft, User, Briefcase, FileText, PencilLine, CircleCheckBig, AlertCircle, Shield } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import StatusBar from "../../../components/StatusBar";
import { RootStackParamList } from "../../../App";

type ReviewNavigationProp = NativeStackNavigationProp<RootStackParamList, "ApplyReview">;

const Review = () => {
  const navigation = useNavigation<ReviewNavigationProp>();

  const sections = [
    {
      icon: User,
      title: "Personal Info",
      status: "Complete",
      statusColor: "#16A34A",
      iconBg: "#16A34A14",
      iconColor: "#16A34A",
      completed: true,
    },
    {
      icon: Briefcase,
      title: "Work Experience",
      status: "Complete",
      statusColor: "#16A34A",
      iconBg: "#16A34A14",
      iconColor: "#16A34A",
      completed: true,
    },
    {
      icon: FileText,
      title: "Documents",
      status: "Complete",
      statusColor: "#16A34A",
      iconBg: "#16A34A14",
      iconColor: "#16A34A",
      completed: true,
    },
    {
      icon: PencilLine,
      title: "Screening Questions",
      status: "1 pending",
      statusColor: "#E2B053",
      iconBg: "#979A6714",
      iconColor: "#E2B053",
      completed: false,
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <ChevronLeft size={12} color="#4A4868" />
          </TouchableOpacity>
          <Text style={styles.stepText}>Step 5  of 5</Text>
          <Text style={styles.saveText}>Save</Text>
        </View>
        
        {/* Progress bars */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, styles.progressActive]} />
          <View style={[styles.progressBar, styles.progressActive]} />
          <View style={[styles.progressBar, styles.progressActive]} />
          <View style={[styles.progressBar, styles.progressActive]} />
          <View style={[styles.progressBar, styles.progressActive]} />
        </View>

        <Text style={styles.title}>Review & Submit</Text>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Score card */}
        <LinearGradient
          colors={["#0D5C63", "#1A7A83"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.scoreCard}
        >
          <View style={styles.scoreContent}>
            <View style={styles.scoreNumber}>
              <Text style={styles.scoreText}>94</Text>
            </View>
            <View style={styles.scoreInfo}>
              <Text style={styles.scoreTitle}>Application Score</Text>
              <Text style={styles.scoreSubtitle}>
                Excellent - Completes 1 question to {"\n"}reach 100
              </Text>
            </View>
          </View>
        </LinearGradient>

        {/* Review sections */}
        <View style={styles.reviewList}>
          {sections.map((section, index) => (
            <View key={index} style={styles.reviewCard}>
              <View style={styles.reviewContent}>
                <View style={[styles.reviewIcon, { backgroundColor: section.iconBg }]}>
                  <section.icon size={15} color={section.iconColor} />
                </View>
                <View style={styles.reviewInfo}>
                  <Text style={styles.reviewTitle}>{section.title}</Text>
                  <Text style={[styles.reviewStatus, { color: section.statusColor }]}>
                    {section.status}
                  </Text>
                </View>
              </View>
              {section.completed ? (
                <CircleCheckBig size={14} color="#16A34A" />
              ) : (
                <AlertCircle size={18} color="#E2B053" />
              )}
            </View>
          ))}
        </View>

        {/* Security banner */}
        <View style={styles.securityBanner}>
          <Shield size={19} color="#0D5C63" />
          <Text style={styles.securityText}>
            Your data is encrypted and never shared without permission
          </Text>
        </View>

        {/* Submit button */}
        <TouchableOpacity 
          style={styles.submitButton}
          onPress={() => navigation.navigate("ApplicationSubmit")}
        >
          <Text style={styles.submitButtonText}>Submit Application </Text>
        </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 12,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 11,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#F3EFE9",
    justifyContent: "center",
    alignItems: "center",
  },
  stepText: {
    color: "#8A88A8",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: -0.1,
    lineHeight: 18,
  },
  saveText: {
    color: "#8A88A8",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: -0.3,
    lineHeight: 22.5,
  },
  progressContainer: {
    flexDirection: "row",
    gap: 5.8,
  },
  progressBar: {
    flex: 1,
    height: 3,
    backgroundColor: "#0D5C631A",
    borderRadius: 5,
  },
  progressActive: {
    backgroundColor: "#0D5C63",
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  title: {
    color: "#1A1828",
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.4,
    lineHeight: 30,
    marginTop: 10,
  },
  scoreCard: {
    borderRadius: 16,
    paddingHorizontal: 23,
    paddingVertical: 17,
    marginBottom: 28,
  },
  scoreContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreNumber: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: "#FFFFFF26",
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    lineHeight: 33,
  },
  scoreInfo: {
    marginLeft: 17,
    flex: 1,
  },
  scoreTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
    lineHeight: 22.5,
  },
  scoreSubtitle: {
    color: "#FFFFFFA6",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    marginTop: 0,
  },
  reviewList: {
    gap: 14,
    marginBottom: 14,
  },
  reviewCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reviewContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  reviewIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  reviewInfo: {
    marginLeft: 16,
    flex: 1,
  },
  reviewTitle: {
    color: "#1A1828",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 19.5,
  },
  reviewStatus: {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16.5,
    marginTop: 2,
  },
  securityBanner: {
    backgroundColor: "#EBF6F7",
    borderWidth: 1,
    borderColor: "#C8E6E8",
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 20,
  },
  securityText: {
    color: "#0D5C63",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 17.6,
    flex: 1,
  },
  submitButton: {
    height: 49,
    backgroundColor: "#0D5C63",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 21,
  },
});

export default Review;

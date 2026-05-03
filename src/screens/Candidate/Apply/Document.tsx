import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { ChevronLeft, FileText, CircleCheckBig, Zap, Upload } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar from "../../../components/StatusBar";

const Document = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <ChevronLeft size={12} color="#4A4868" />
          </TouchableOpacity>
          <Text style={styles.stepText}>Step 3 of 5</Text>
          <Text style={styles.saveText}>Save</Text>
        </View>
        
        {/* Progress bars */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, styles.progressActive]} />
          <View style={[styles.progressBar, styles.progressActive]} />
          <View style={[styles.progressBar, styles.progressActive]} />
          <View style={styles.progressBar} />
          <View style={styles.progressBar} />
        </View>

        <Text style={styles.title}>Work Documents</Text>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Resume section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>RESUME *</Text>
          <View style={styles.resumeCard}>
            <View style={styles.resumeContent}>
              <View style={styles.resumeIcon}>
                <FileText size={16} color="#0D5C63" />
              </View>
              <View style={styles.resumeInfo}>
                <Text style={styles.resumeTitle}>Sarah_Johnson_Resume_2024.pdf</Text>
                <Text style={styles.resumeMeta}>2.4 MB - Uploaded 3 days ago</Text>
              </View>
            </View>
            <CircleCheckBig size={14} color="#16A34A" />
          </View>
        </View>

        {/* Cover Letter section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>COVER LETTER</Text>
          <View style={styles.coverLetterCard}>
            <View style={styles.coverLetterContent}>
              <View style={styles.coverLetterHeader}>
                <Zap size={16} color="#C4892A" />
                <Text style={styles.coverLetterTitle}>AI - Generated Cover Letter</Text>
              </View>
              <Text style={styles.coverLetterText}>
                "Dear Figma Hiring Team, I'm excited to apply for the Senior Product Designer role. With 6+ years crafting design systems at Airbnb and Google..."
              </Text>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit letter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Portfolio section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>PORTFOLIO (OPTIONAL)</Text>
          <View style={styles.uploadCard}>
            <Upload size={18} color="#8A88A8" />
            <Text style={styles.uploadText}>Upload PDF or enter URL</Text>
          </View>
        </View>

        {/* Next button */}
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => navigation.navigate("ApplyQuestions")}
        >
          <Text style={styles.nextButtonText}>Next :Custom Questions →</Text>
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
    paddingTop: 20,
  },
  title: {
    color: "#1A1828",
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.4,
    lineHeight: 30,
    marginTop: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionLabel: {
    color: "#4A4868",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
    lineHeight: 18,
    marginBottom: 9,
  },
  resumeCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#0D5C63",
    borderRadius: 16,
    paddingHorizontal: 11,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  resumeContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  resumeIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#EBF6F7",
    justifyContent: "center",
    alignItems: "center",
  },
  resumeInfo: {
    marginLeft: 10,
    flex: 1,
  },
  resumeTitle: {
    color: "#000000",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19.5,
  },
  resumeMeta: {
    color: "#8A88A8",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16.5,
    marginTop: 0,
  },
  coverLetterCard: {
    backgroundColor: "#FDF8EE",
    borderWidth: 1,
    borderColor: "#F9EDD0",
    borderRadius: 14,
    padding: 14,
  },
  coverLetterContent: {
    flex: 1,
  },
  coverLetterHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  coverLetterTitle: {
    color: "#C4892A",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 18,
  },
  coverLetterText: {
    color: "#4A4868",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20.4,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F9EDD0",
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 11,
    alignSelf: "flex-start",
  },
  editButtonText: {
    color: "#C4892A",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16.5,
  },
  uploadCard: {
    borderWidth: 1,
    borderColor: "#0D5C6312",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    gap: 14,
  },
  uploadText: {
    color: "#8A88A8",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
  },
  nextButton: {
    height: 49,
    backgroundColor: "#0D5C63",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 21,
  },
});

export default Document;

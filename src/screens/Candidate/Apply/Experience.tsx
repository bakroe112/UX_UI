import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { ChevronLeft, Briefcase, Plus, Lightbulb, PencilLine } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar from "../../../components/StatusBar";

const Experience = () => {
  const navigation = useNavigation();

  const experiences = [
    {
      title: "Senior Product Designer",
      company: "Figma",
      period: "Apr 2025 - Present",
    },
    {
      title: "Product Designer",
      company: "Airbnb",
      period: "Jan 2025 - Mar 2026",
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
          <Text style={styles.stepText}>Step 2 of 5</Text>
          <Text style={styles.saveText}>Save</Text>
        </View>
        
        {/* Progress bars */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, styles.progressActive]} />
          <View style={[styles.progressBar, styles.progressActive]} />
          <View style={styles.progressBar} />
          <View style={styles.progressBar} />
          <View style={styles.progressBar} />
        </View>

        <Text style={styles.title}>Work Experience</Text>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Experience cards */}
        <View style={styles.experienceList}>
          {experiences.map((exp, index) => (
            <View key={index} style={styles.experienceCard}>
              <View style={styles.experienceContent}>
                <View style={styles.experienceIcon}>
                  <Briefcase size={13} color="#0D5C63" />
                </View>
                <View style={styles.experienceInfo}>
                  <Text style={styles.experienceTitle}>{exp.title}</Text>
                  <Text style={styles.experienceCompany}>{exp.company}</Text>
                  <Text style={styles.experiencePeriod}>{exp.period}</Text>
                </View>
              </View>
              <PencilLine size={12} color="#8A88A8" />
            </View>
          ))}

          {/* Add experience button */}
          <TouchableOpacity style={styles.addButton}>
            <View style={styles.addIcon}>
              <Plus size={18} color="#8A88A8" />
            </View>
            <Text style={styles.addText}>Add work experience</Text>
          </TouchableOpacity>
        </View>

        {/* Info banner */}
        <View style={styles.infoBanner}>
          <View style={styles.infoBannerContent}>
            <Lightbulb size={18} color="#C4892A" />
            <Text style={styles.infoText}>
              Your experience has been auto-imported {"\n"}from your resume. Tap to edit any entry.
            </Text>
          </View>
        </View>

        {/* Next button */}
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => navigation.navigate("ApplyDocument")}
        >
          <Text style={styles.nextButtonText}>Next : Upload Documents →</Text>
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
    paddingTop: 40,
  },
  title: {
    color: "#1A1828",
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.4,
    lineHeight: 30,
    marginTop: 10,
  },
  experienceList: {
    gap: 10,
    marginBottom: 18,
  },
  experienceCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 11,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "top",
    justifyContent: "space-between",
  },
  experienceContent: {
    flexDirection: "row",
    alignItems: "top",
    flex: 1,
  },
  experienceIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#EBF6F7",
    justifyContent: "center",
    alignItems: "center",
  },
  experienceInfo: {
    marginLeft: 19,
    flex: 1,
  },
  experienceTitle: {
    color: "#1A1828",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 21,
  },
  experienceCompany: {
    color: "#0D5C63",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 18,
    marginTop: 2,
  },
  experiencePeriod: {
    color: "#8A88A8",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 18,
    marginTop: 2,
  },
  addButton: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#0D5C6312",
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  addIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#EBF6F7",
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    color: "#8A88A8",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19.5,
    marginLeft: 19,
  },
  infoBanner: {
    backgroundColor: "#FDF8EE",
    borderWidth: 1,
    borderColor: "#F9EDD0",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 11,
    marginBottom: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  infoBannerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoText: {
    color: "#C4892A",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 19.2,
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

export default Experience;

import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { ChevronLeft, User, Mail, Phone, Link, Globe } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar from "../../../components/StatusBar";

const PersionalInfo = () => {
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
          <Text style={styles.stepText}>Step 1 of 5</Text>
          <Text style={styles.saveText}>Save</Text>
        </View>
        
        {/* Progress bars */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, styles.progressActive]} />
          <View style={styles.progressBar} />
          <View style={styles.progressBar} />
          <View style={styles.progressBar} />
          <View style={styles.progressBar} />
        </View>

        <Text style={styles.title}>Personal Information</Text>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Job banner */}
        <View style={styles.jobBanner}>
          <View style={styles.jobIcon}>
            <Text style={styles.jobIconText}>F</Text>
          </View>
          <Text style={styles.jobText}>Applying to : Sr.Product Designer at Figma</Text>
        </View>

        {/* Form fields */}
        <View style={styles.formContainer}>
          {/* Full Name */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Full Name</Text>
            <View style={[styles.input, styles.inputActive]}>
              <User size={17} color="#0D5C63" />
              <Text style={styles.inputText}>Sarah Johnson</Text>
            </View>
          </View>

          {/* Email Address */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.input}>
              <Mail size={17} color="#8A88A8" />
              <Text style={styles.inputTextPlaceholder}>sarah@email.com</Text>
            </View>
          </View>

          {/* Phone Number */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.input}>
              <Phone size={17} color="#8A88A8" />
              <Text style={styles.inputTextPlaceholder}>+1 (415) 555 - 0192</Text>
            </View>
          </View>

          {/* LinkedIn URL */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Linkedln URL</Text>
            <View style={styles.input}>
              <Globe size={20} color="#8A88A8" />
              <Text style={styles.inputTextPlaceholder}>linkedin.com/in/sarahjohnson</Text>
            </View>
          </View>

          {/* Website */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Website</Text>
            <View style={styles.input}>
              <Globe size={20} color="#8A88A8" />
              <Text style={styles.inputTextPlaceholder}>sarahjohnson.design</Text>
            </View>
          </View>
        </View>

        {/* Next button */}
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => navigation.navigate("ApplyExperience")}
        >
          <Text style={styles.nextButtonText}>Next : Work Experience →</Text>
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
  jobBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EBF6F7",
    borderWidth: 1,
    borderColor: "#C8E6E8",
    borderRadius: 12,
    paddingHorizontal: 13,
    paddingVertical: 9,
    marginBottom: 22,
  },
  jobIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#0D5C6333",
    justifyContent: "center",
    alignItems: "center",
  },
  jobIconText: {
    color: "#0D5C63",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 18,
  },
  jobText: {
    color: "#0D5C63",
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 18,
    marginLeft: 10,
    flex: 1,
  },
  formContainer: {
    gap: 8,
    marginBottom: 30,
  },
  fieldGroup: {
    marginBottom: 8,
  },
  label: {
    color: "#4A4868",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
    marginBottom: 8,
  },
  input: {
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  inputActive: {
    borderWidth: 1,
    borderColor: "#0D5C63",
  },
  inputText: {
    color: "#1A1828",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 19.5,
    flex: 1,
  },
  inputTextPlaceholder: {
    color: "#8A88A8",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 19.5,
    flex: 1,
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

export default PersionalInfo;

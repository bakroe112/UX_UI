import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CircleCheckBig , Bell, BookOpen } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

type ApplicationSubmitNavigationProp = NativeStackNavigationProp<RootStackParamList, "ApplicationSubmit">;

const ApplicationSubmit = () => {
  const navigation = useNavigation<ApplicationSubmitNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Success icon */}
      <View style={styles.iconContainer}>
        <CircleCheckBig  size={35} color="#0D5C63" />
      </View>

      {/* Title */}
      <Text style={styles.title}>Application Submitted</Text>

      {/* Description */}
      <Text style={styles.description}>
        Your application to <Text style={styles.descriptionBold}>Figma</Text> for the{" "}
        <Text style={styles.descriptionBold}>Sr.Product Designer</Text> role has been sent
      </Text>

      {/* What's Next card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>WHAT'S NEXT?</Text>
        
        <View style={styles.stepsList}>
          {/* Step 1 */}
          <View style={styles.stepItem}>
            <View style={[styles.stepIcon, styles.stepIconGreen]}>
              <CircleCheckBig  size={14} color="#0D5C63" />
            </View>
            <Text style={styles.stepText}>Typically hear back in 3-5 business days</Text>
          </View>

          {/* Step 2 */}
          <View style={styles.stepItem}>
            <View style={[styles.stepIcon, styles.stepIconPurple]}>
              <Bell size={14} color="#7A6181" />
            </View>
            <Text style={styles.stepText}>We'll notify you on every status update</Text>
          </View>

          {/* Step 3 */}
          <View style={styles.stepItem}>
            <View style={[styles.stepIcon, styles.stepIconYellow]}>
              <BookOpen size={14} color="#E2B053" />
            </View>
            <Text style={styles.stepText}>Start interview prep while you wait</Text>
          </View>
        </View>
      </View>

      {/* Prep button */}
      <TouchableOpacity style={styles.prepButton}>
        <Text style={styles.prepButtonText}>Prep for Figma Interview</Text>
      </TouchableOpacity>

      {/* Back link */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backLink}>Back to Applications</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F5F0",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 137,
  },
  iconContainer: {
    width: 88,
    height: 88,
    borderRadius: 26,
    backgroundColor: "#EBF6F7",
    borderWidth: 1,
    borderColor: "#C8E6E8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    color: "#1A1828",
    fontSize: 27,
    fontWeight: "800",
    letterSpacing: -0.5,
    lineHeight: 36,
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    color: "#8A88A8",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: -0.5,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 16,
    paddingHorizontal: 17,
  },
  descriptionBold: {
    color:"#1A1828",
    fontWeight: "700",
  },
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 21,
    marginBottom: 44,
  },
  cardTitle: {
    color: "#8A88A8",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 21,
    marginBottom: 21,
  },
  stepsList: {
    gap: 14,
  },
  stepItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  stepIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  stepIconGreen: {
    backgroundColor: "#0D5C6314",
  },
  stepIconPurple: {
    backgroundColor: "#7A618114",
  },
  stepIconYellow: {
    backgroundColor: "#E2B05314",
  },
  stepText: {
    color: "#4A4868",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 19.5,
    flex: 1,
  },
  prepButton: {
    width: "100%",
    height: 49,
    backgroundColor: "#0D5C63",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 17,
  },
  prepButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 22.5,
  },
  backLink: {
    color: "#8A88A8",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 19.5,
    textAlign: "center",
  },
});

export default ApplicationSubmit;

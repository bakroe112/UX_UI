import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CircleCheckBig } from "lucide-react-native";

export default function WithdrawalCompleteScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>10:21</Text>
      </View>

      {/* Center Content */}
      <View style={styles.content}>
        {/* Icon */}
        <View style={styles.iconWrapper}>
          <CircleCheckBig size={39} color="#e05b5b" strokeWidth={1.5} />
        </View>

        {/* Title */}
        <Text style={styles.title}>Application Withdrawn</Text>

        {/* Description */}
        <Text style={styles.description}>
          Your application to{" "}
          <Text style={styles.descriptionBold}>Google DeepMind</Text>
          {" "}has been successfully withdrawn. Thank you for your feedback.{" "}
        </Text>
      </View>

      {/* Bottom Actions */}
      <View style={styles.bottomActions}>
        <TouchableOpacity
          style={styles.returnButton}
          onPress={() => navigation.navigate("HomeFeed")}
        >
          <Text style={styles.returnButtonText}>Return to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Tracker")}>
          <Text style={styles.viewAllText}>View All Application →</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: "#f9f5f0",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  timeText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: -0.3,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  iconWrapper: {
    width: 88,
    height: 88,
    backgroundColor: "#fef2f2",
    borderColor: "#e05b5b",
    borderWidth: 1,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    color: "#1a1828",
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: -0.6,
    lineHeight: 39,
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    color: "#1c1a2e99",
    fontSize: 14,
    lineHeight: 23.8,
    textAlign: "center",
    paddingHorizontal: 0,
  },
  descriptionBold: {
    color: "#1c1a2e",
    fontWeight: "700",
  },
  bottomActions: {
    paddingHorizontal: 21,
    paddingBottom: 20,
    gap: 10,
    alignItems: "center",
  },
  returnButton: {
    width: 352,
    height: 55,
    backgroundColor: "#0d5c63",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  returnButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: -0.2,
    lineHeight: 22.5,
    textAlign: "center",
  },
  viewAllText: {
    color: "#1a7a83",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 23.8,
    textAlign: "center",
  },
});

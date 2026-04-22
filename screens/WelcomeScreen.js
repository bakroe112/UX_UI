import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Brain, NotebookTabs, ChartLine, Briefcase } from "lucide-react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background decorative circles */}
      <View style={styles.circleLarge} />
      <View style={styles.circleTop} />
      <View style={styles.circleSmall} />

      {/* Logo + Title */}
      <View style={styles.heroSection}>
        <View style={styles.logoBox}>
          <Briefcase size={30} color="#ffffff" strokeWidth={1.8} />
        </View>
        <Text style={styles.appName}>HireFlow</Text>
        <Text style={styles.tagline}>
          {"Your next great opportunity is one \ntap away"}
        </Text>
      </View>

      {/* Feature List */}
      <View style={styles.featureList}>
        <View style={styles.featureRow}>
          <View style={styles.featureIcon}>
            <Brain size={22} color="#e2b053" strokeWidth={1.5} />
          </View>
          <Text style={styles.featureText}>AI-matched jobs with 96%+ accuracy</Text>
        </View>

        <View style={styles.featureRow}>
          <View style={styles.featureIcon}>
            <NotebookTabs size={22} color="#4aacb5" strokeWidth={1.5} />
          </View>
          <Text style={styles.featureText}>One-tap Quick Apply in seconds</Text>
        </View>

        <View style={styles.featureRow}>
          <View style={styles.featureIcon}>
            <ChartLine size={22} color="#ffffff" strokeWidth={1.5} />
          </View>
          <Text style={styles.featureText}>One-tap Quick Apply in seconds</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.getStartedText}>Get Started - It's Free</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.signInText}>Sign In to My Account</Text>
        </TouchableOpacity>

        <Text style={styles.trustText}>Trusted by 50,000+ job seekers worldwide</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d5c63",
    paddingHorizontal: 20,
  },
  circleLarge: {
    position: "absolute",
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#ffffff08",
    left: -50,
    bottom: 202,
  },
  circleTop: {
    position: "absolute",
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "#ffffff08",
    right: -25,
    top: -70,
  },
  circleSmall: {
    position: "absolute",
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#e2b05329",
    right: 85,
    top: 110,
  },
  heroSection: {
    alignItems: "center",
    marginTop: 90,
    marginBottom: 46,
  },
  logoBox: {
    width: 80,
    height: 80,
    backgroundColor: "#ffffff1a",
    borderColor: "#ffffff2e",
    borderWidth: 1,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  appName: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "800",
    letterSpacing: -1.8,
    lineHeight: 60,
    textAlign: "center",
    fontFamily: "Plus Jakarta Sans",
  },
  tagline: {
    color: "#ffffff8c",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 28,
    textAlign: "center",
    fontFamily: "Plus Jakarta Sans",
  },
  featureList: {
    gap: 16,
    marginBottom: 54,
    paddingLeft: 41,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 38,
  },
  featureIcon: {
    width: 38,
    height: 38,
    backgroundColor: "#ffffff14",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  featureText: {
    color: "#ffffffad",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 28,
    fontFamily: "Plus Jakarta Sans",
  },
  buttonGroup: {
    gap: 0,
  },
  getStartedButton: {
    height: 54,
    backgroundColor: "#e2b053",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  getStartedText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 28,
    fontFamily: "Plus Jakarta Sans",
  },
  signInButton: {
    height: 54,
    backgroundColor: "#ffffff1a",
    borderColor: "#ffffff2e",
    borderWidth: 1,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  signInText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 28,
    fontFamily: "Plus Jakarta Sans",
  },
  trustText: {
    color: "#ffffff47",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 28,
    textAlign: "center",
    fontFamily: "Plus Jakarta Sans",
  },
});

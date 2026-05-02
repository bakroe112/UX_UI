import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar from "../../components/StatusBar";

const Questions = () => {
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
          <Text style={styles.stepText}>Step 4 of 5</Text>
          <Text style={styles.saveText}>Save</Text>
        </View>
        
        {/* Progress bars */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, styles.progressActive]} />
          <View style={[styles.progressBar, styles.progressActive]} />
          <View style={[styles.progressBar, styles.progressActive]} />
          <View style={[styles.progressBar, styles.progressActive]} />
          <View style={styles.progressBar} />
        </View>

        <Text style={styles.title}>Questions</Text>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Question 1 */}
        <View style={styles.questionCard}>
          <Text style={styles.questionTitle}>Why are you interested in joining Figma?</Text>
          <View style={styles.answerBox}>
            <Text style={styles.answerText}>
              Figma has profoundly impacted how I design  it's the only tool where I can take an idea from concept to handoff without switching apps. I'd love to shape the product from the inside...
            </Text>
          </View>
        </View>

        {/* Question 2 */}
        <View style={styles.questionCard}>
          <Text style={styles.questionTitle}>
            Describe a design challenge you solved under tight constraints.
          </Text>
          <View style={styles.answerBox}>
            <Text style={styles.answerTextPlaceholder}>
              Focus on yours process and measurable outcome...
            </Text>
          </View>
        </View>

        {/* Next button */}
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => navigation.navigate("ApplyReview")}
        >
          <Text style={styles.nextButtonText}>Next :Review Application →</Text>
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
  questionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    marginBottom: 22,
  },
  questionTitle: {
    color: "#1A1828",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 18.2,
    marginBottom: 15,
  },
  answerBox: {
    backgroundColor: "#F3EFE9",
    borderRadius: 16,
    padding: 14,
    minHeight: 65,
  },
  answerText: {
    color: "#4A4868",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "justify",
  },
  answerTextPlaceholder: {
    color: "#4A4868",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    textAlign: "justify",
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

export default Questions;

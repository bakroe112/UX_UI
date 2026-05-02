import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { X, Bot,SkipForward , ChevronDown, Send, Mic, MessageSquare, ChevronRight } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import StatusBar from "../../components/StatusBar";
import { RootStackParamList } from "../../../App";

type InterviewSessionNavigationProp = NativeStackNavigationProp<RootStackParamList, "InterviewSession">;

const InterviewSession = () => {
  const navigation = useNavigation<InterviewSessionNavigationProp>();
  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [answerType, setAnswerType] = useState<"text" | "voice">("text");

  return (
    <View style={styles.container}>
      <StatusBar />

      {/* Header */}
      <LinearGradient
        colors={["#0D5C63", "#1A7A83"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.header}
      >
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <X size={17} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AI Mock Interview</Text>
        <View style={styles.timerBadge}>
          <View style={styles.timerDot} />
          <Text style={styles.timerText}>2:00</Text>
        </View>
      </LinearGradient>

      {/* Progress Indicator */}
      <View style={styles.progressSection}>
        <View style={styles.progressDots}>
          <View style={[styles.progressDot, styles.progressDotActive]} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
        </View>
        <Text style={styles.progressText}>Q1 of 5</Text>
        <View style={styles.botIconSmall}>
          <LinearGradient
            colors={["#0D5C63", "#1A7A83"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.botIconSmallGradient}
          >
            <Bot size={35} color="#FFFFFF" />
          </LinearGradient>
        </View>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Question Card */}
        <View style={styles.questionSection}>
          <View style={styles.questionCard}>
            <Text style={styles.questionText}>
              What would you say are your main strengths, and can you give a short example of how one of those strengths has helped you in your studies or a project?
            </Text>
          </View>

          {/* Hint Section */}
          <TouchableOpacity
            style={styles.hintButton}
            onPress={() => setShowHint(!showHint)}
          >
            <Text style={styles.hintButtonText}>Show hint</Text>
            <ChevronDown size={14} color="#1C1A2E99" />
          </TouchableOpacity>

          {showHint && (
            <View style={styles.hintCard}>
              <Text style={styles.hintText}>
                Consider: Fast learner, Problem-solving, Teamwork, ...
              </Text>
            </View>
          )}
        </View>

        {/* Answer Type Toggle */}
        <View style={styles.answerTypeCard}>
          <View style={styles.answerTypeRow}>
            <TouchableOpacity
              style={answerType === "text" ? styles.answerTypeButtonActive : styles.answerTypeButton}
              onPress={() => setAnswerType("text")}
            >
              <Send size={15.62} color={answerType === "text" ? "#FFFFFF" : "#0D5C635E"} />
              <Text style={answerType === "text" ? styles.answerTypeTextActive : styles.answerTypeText}>
                Text Answer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={answerType === "voice" ? styles.answerTypeButtonActive : styles.answerTypeButton}
              onPress={() => setAnswerType("voice")}
            >
              <Mic size={15.62} color={answerType === "voice" ? "#FFFFFF" : "#0D5C635E"} />
              <Text style={answerType === "voice" ? styles.answerTypeTextActive : styles.answerTypeText}>
                Voice Answer
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Text Input or Voice Input */}
        {answerType === "text" ? (
          <>
            <View style={styles.textInputCard}>
              <TextInput
                style={styles.textInput}
                placeholder="Type your answer here..."
                placeholderTextColor="#0D5C6366"
                multiline
                value={answer}
                onChangeText={setAnswer}
                maxLength={500}
              />
              <View style={styles.textInputFooter}>
                <MessageSquare size={16} color="#0D5C6380" />
              </View>
            </View>
            <Text style={styles.charCount}>{answer.length} / 500</Text>
          </>
        ) : (
          <View style={styles.voiceInputCard}>
            <TouchableOpacity style={styles.micButton}>
              <Mic size={24} color="#0D5C63" />
            </TouchableOpacity>
            <Text style={styles.voiceInputText}>Tap microphone to record answer</Text>
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.skipButton}>
            <SkipForward size={16} color={"#0D5C63"}/>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => navigation.navigate("SessionFeedback")}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
            <ChevronRight size={17.96} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacer} />
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
    paddingHorizontal: 20,
    paddingTop: 13.3,
    paddingBottom: 13.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  closeButton: {
    width: 33.4,
    height: 33.4,
    borderRadius: 11,
    backgroundColor: "#FFFFFF26",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22.5,
    flex: 1,
    marginLeft: 14,
  },
  timerBadge: {
    backgroundColor: "#F0FDF44A",
    borderWidth: 1,
    borderColor: "#4CAF50",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  timerDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#3AE87A",
  },
  timerText: {
    color: "#3AE87A",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 22.5,
  },
  progressSection: {
    alignItems: "center",
    paddingTop: 17,
    paddingBottom: 18,
  },
  progressDots: {
    flexDirection: "row",
    gap: 9,
    marginBottom: 6,
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#0D5C6333",
  },
  progressDotActive: {
    backgroundColor: "#0D5C63",
  },
  progressText: {
    color: "#0D5C63A3",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20,
    marginBottom: 6,
  },
  botIconSmall: {
    marginTop: 0,
  },
  botIconSmallGradient: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContent: {
    flex: 1,
  },
  questionSection: {
    paddingHorizontal: 20,
    marginTop: 0,
  },
  questionCard: {
    backgroundColor: "#EBF6F7",
    borderWidth: 1,
    borderColor: "#C8E6E8",
    borderRadius: 16,
    padding: 17,
  },
  questionText: {
    color: "#1C1A2E",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 20,
  },
  hintButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    marginTop: 7,
  },
  hintButtonText: {
    color: "#1C1A2E99",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20,
  },
  hintCard: {
    backgroundColor: "#FDF8EE",
    borderWidth: 1,
    borderColor: "#F9EDD0",
    borderRadius: 6,
    padding: 8,
    marginTop: 7,
  },
  hintText: {
    color: "#E2B053",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 15,
  },
  answerTypeCard: {
    backgroundColor: "#EBF6F7",
    borderWidth: 1,
    borderColor: "#C8E6E8",
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 22,
    padding: 10,
  },
  answerTypeRow: {
    flexDirection: "row",
    gap: 16,
  },
  answerTypeButtonActive: {
    flex: 1,
    backgroundColor: "#1A7A83",
    borderRadius: 10,
    paddingVertical: 10.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },
  answerTypeTextActive: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 20,
  },
  answerTypeButton: {
    flex: 1,
    paddingVertical: 10.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },
  answerTypeText: {
    color: "#0D5C635E",
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 20,
  },
  textInputCard: {
    backgroundColor: "#EBF6F7",
    borderWidth: 1,
    borderColor: "#C8E6E8",
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 22,
    paddingHorizontal: 10,
    paddingVertical:6,
    minHeight: 115,
  },
  textInput: {
    color: "#1C1A2E",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    minHeight: 60,
    textAlignVertical: "top",
  },
  textInputFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 6,
    marginTop: 20,
  },
  charCount: {
    color: "#1C1A2E80",
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 21,
    textAlign: "right",
    marginTop: 4,
    marginRight: 20,
  },
  voiceInputCard: {
    backgroundColor: "#EBF6F7",
    borderWidth: 1,
    borderColor: "#C8E6E8",
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 22,
    paddingTop:20,
    paddingBottom:5,
    paddingVertical: 12,
    gap:10,
    alignItems: "center",
    minHeight: 115,
    justifyContent: "center",
  },
  voiceInputText: {
    color: "#0D5C6366",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "center",
    marginBottom: 12,
  },
  micButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#D0EAEC",
    borderWidth: 1,
    borderColor: "#0D5C6340",
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 16,
    paddingHorizontal: 20,
    marginTop: 22,
  },
  skipButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#0D5C63",
    borderRadius: 16,
    paddingVertical: 16.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  skipButtonText: {
    color: "#0D5C63",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22.5,
    letterSpacing: -0.2,
  },
  submitButton: {
    flex: 2.1,
    backgroundColor: "#0D5C63",
    borderRadius: 14,
    paddingVertical: 16.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22.5,
    letterSpacing: -0.2,
    marginLeft:10
  },
  bottomSpacer: {
    height: 22,
  },
});

export default InterviewSession;

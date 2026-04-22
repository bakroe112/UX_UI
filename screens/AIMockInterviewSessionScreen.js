import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from "react-native";
import {
  X,
  Bot,
  ChevronDown,
  Send,
  Mic,
  ChevronRight,
  Triangle,
  MessageSquare,
} from "lucide-react-native";

const QUESTIONS = [
  {
    text: "What would you say are your main strengths, and can you give a short example of how one of those strengths has helped you in your studies or a project?",
    hint: "Consider: Fast learner, Problem-solving, Teamwork, ...",
  },
  {
    text: "Tell me about a time you faced a significant challenge in a project. How did you approach it and what was the outcome?",
    hint: "Consider: Situation, Task, Action, Result (STAR method) ...",
  },
  {
    text: "How do you prioritize tasks when working on multiple projects or deadlines at the same time?",
    hint: "Consider: Time management tools, urgency vs importance, communication with team ...",
  },
  {
    text: "Describe a situation where you had to collaborate with someone who had a very different working style. How did you handle it?",
    hint: "Consider: Flexibility, communication, finding common ground ...",
  },
  {
    text: "Where do you see yourself professionally in the next 2–3 years, and how does this role align with those goals?",
    hint: "Consider: Career growth, skills you want to develop, alignment with company mission ...",
  },
];

export default function AIMockInterviewSessionScreen({ navigation }) {
  const [answerMode, setAnswerMode] = useState("text");
  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [timeLeft, setTimeLeft] = useState(120); // 2:00 in seconds
  const [isRecording, setIsRecording] = useState(false);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    if (answerMode === "text" && answer.trim() === "") {
      Alert.alert("Empty Answer", "Please provide an answer before submitting.");
      return;
    }
    
    if (currentQuestion < 5) {
      setCurrentQuestion(prev => prev + 1);
      setAnswer("");
      setShowHint(false);
      setTimeLeft(120); // Reset timer for next question
    } else {
      navigation.navigate("AIMockInterviewFeedback");
    }
  };

  const handleSkip = () => {
    if (currentQuestion < 5) {
      setCurrentQuestion(prev => prev + 1);
      setAnswer("");
      setShowHint(false);
      setTimeLeft(120);
    } else {
      navigation.navigate("AIMockInterviewFeedback");
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Here you would implement actual voice recording logic
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* Status Bar */}
      <View className="h-[45px] bg-[#ffffff]" />

      {/* Header */}
      <View className="h-[60px] bg-[#0d5c63] px-[20px] py-[10px] flex-row items-center justify-between">
        <TouchableOpacity
          className="h-[33.4px] w-[33.4px] rounded-[11px] bg-[#ffffff26] items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <X size={17} color="#ffffff" />
        </TouchableOpacity>
        
        <View className="flex-1 ml-[14px]">
          <Text
            className="text-[16px] text-[#ffffff]"
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              lineHeight: 22.5
            }}
          >
            AI Mock Interview
          </Text>
        </View>

        {/* Timer */}
        <View className="h-[28px] w-[62px] rounded-[12px] bg-[#f0fdf44a] border border-[#4caf50] items-center justify-center flex-row">
          <View className="h-[6px] w-[6px] rounded-full bg-[#3ae87a] mr-[4px]" />
          <Text
            className="text-[12px] text-[#3ae87a]"
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              lineHeight: 22.5
            }}
          >
            {formatTime(timeLeft)}
          </Text>
        </View>
      </View>

      {/* Progress Indicator */}
      <View className="items-center py-[17px]">
        <View className="flex-row gap-x-[9px] mb-[6px]">
          {Array.from({ length: 5 }, (_, index) => (
            <View
              key={index}
              className={`h-[12px] w-[12px] rounded-full ${
                index < currentQuestion ? "bg-[#0d5c63]" : "bg-[#0d5c6333]"
              }`}
            />
          ))}
        </View>
        
        <Text
          className="text-[12px] text-[#0d5c63a3] mb-[6px]"
          style={{ 
            fontFamily: "PlusJakartaSans_400Regular", 
            lineHeight: 20 
          }}
        >
          Q{currentQuestion} of 5
        </Text>

        {/* AI Avatar */}
        <View className="h-[80px] w-[80px] rounded-full bg-[#0d5c63] items-center justify-center">
          <Bot size={35} color="#ffffff" />
        </View>
      </View>

      <ScrollView className="flex-1 px-[20px]" showsVerticalScrollIndicator={false}>
        {/* Question Card */}
        <View className="mb-[22px]">
          <View className="rounded-[16px] bg-[#ebf6f7] border border-[#c8e6e8] p-[16px] mb-[5px]">
            <Text
              className="text-[14px] text-[#1c1a2e]"
              style={{ 
                fontFamily: "PlusJakartaSans_400Regular",
                lineHeight: 20
              }}
            >
              {QUESTIONS[currentQuestion - 1].text}
            </Text>
          </View>

          {/* Show Hint */}
          <TouchableOpacity
            className="items-center py-[7px]"
            onPress={() => setShowHint(!showHint)}
          >
            <View className="flex-row items-center">
              <Text
                className="text-[12px] text-[#1c1a2e99]"
                style={{ fontFamily: "PlusJakartaSans_400Regular", lineHeight: 20 }}
              >
                Show hint
              </Text>
              <ChevronDown 
                size={14} 
                color="#1c1a2e99" 
                style={{ 
                  transform: [{ rotate: showHint ? '180deg' : '0deg' }] 
                }}
              />
            </View>
          </TouchableOpacity>

          {showHint && (
            <View className="rounded-[6px] bg-[#fdf8ee] border border-[#f9edd0] p-[8px]">
              <Text
                className="text-[11px] text-[#e2b053]"
                style={{ 
                  fontFamily: "PlusJakartaSans_400Regular",
                  lineHeight: 15
                }}
              >
                {QUESTIONS[currentQuestion - 1].hint}
              </Text>
            </View>
          )}
        </View>

        {/* Answer Mode Toggle */}
        <View className="rounded-[12px] bg-[#ebf6f7] border border-[#c8e6e8] p-[10px] mb-[22px]">
          <View className="flex-row gap-x-[16px]">
            <TouchableOpacity
              className={`h-[41px] flex-1 rounded-[10px] items-center justify-center flex-row ${
                answerMode === "text" ? "bg-[#1a7a83]" : "bg-transparent"
              }`}
              onPress={() => setAnswerMode("text")}
            >
              <Send size={15.62} color={answerMode === "text" ? "#ffffff" : "#0d5c635e"} />
              <Text
                className={`text-[13px] ml-[8px] ${
                  answerMode === "text" ? "text-[#ffffff]" : "text-[#0d5c635e]"
                }`}
                style={{ fontFamily: "PlusJakartaSans_600SemiBold", lineHeight: 20 }}
              >
                Text Answer
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              className={`h-[41px] flex-1 rounded-[10px] items-center justify-center flex-row ${
                answerMode === "voice" ? "bg-[#1a7a83]" : "bg-transparent"
              }`}
              onPress={() => setAnswerMode("voice")}
            >
              <Mic size={15.62} color={answerMode === "voice" ? "#ffffff" : "#0d5c635e"} />
              <Text
                className={`text-[13px] ml-[8px] ${
                  answerMode === "voice" ? "text-[#ffffff]" : "text-[#0d5c635e]"
                }`}
                style={{ fontFamily: "PlusJakartaSans_600SemiBold", lineHeight: 20 }}
              >
                Voice Answer
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Answer Input */}
        {answerMode === "text" ? (
          <View className="rounded-[16px] bg-[#ebf6f7] border border-[#c8e6e8] p-[16px] mb-[22px] relative">
            <TextInput
              className="text-[14px] text-[#1c1a2e] min-h-[80px]"
              style={{ 
                fontFamily: "PlusJakartaSans_400Regular",
                lineHeight: 20,
                textAlignVertical: "top"
              }}
              placeholder="Type your answer here..."
              placeholderTextColor="#0d5c6366"
              multiline
              value={answer}
              onChangeText={setAnswer}
              maxLength={500}
            />
            
            <View className="absolute bottom-[16px] right-[16px] flex-row items-center">
              <MessageSquare size={16} color="#0d5c6380" />
              <Text
                className="text-[11px] text-[#1c1a2e80] ml-[8px]"
                style={{ fontFamily: "PlusJakartaSans_500Medium", lineHeight: 21 }}
              >
                {answer.length} / 500
              </Text>
            </View>
          </View>
        ) : (
          <View className="rounded-[16px] bg-[#ebf6f7] border border-[#c8e6e8] p-[16px] mb-[22px] items-center justify-center min-h-[115px]">
            <TouchableOpacity 
              className={`h-[54px] w-[54px] rounded-full items-center justify-center mb-[8px] ${
                isRecording ? "bg-[#ef4444] border border-[#dc2626]" : "bg-[#d0eaec] border border-[#0d5c6340]"
              }`}
              onPress={toggleRecording}
            >
              <Mic size={24} color={isRecording ? "#ffffff" : "#0d5c63"} />
            </TouchableOpacity>
            <Text
              className="text-[14px] text-[#0d5c6366] text-center"
              style={{ 
                fontFamily: "PlusJakartaSans_400Regular",
                lineHeight: 20
              }}
            >
              {isRecording ? "Recording... Tap to stop" : "Tap microphone to record answer"}
            </Text>
          </View>
        )}

        {/* Action Buttons */}
        <View className="flex-row gap-x-[24px] mb-[22px]">
          <TouchableOpacity 
            className="h-[55px] w-[106px] rounded-[16px] border border-[#0d5c63] items-center justify-center flex-row"
            onPress={handleSkip}
          >
            <View className="flex-row items-center">
              <Triangle size={13.16} color="#0d5c63" />
              <View className="h-[1px] w-[9.4px] bg-[#0d5c63] ml-[2px]" />
            </View>
            <Text
              className="text-[16px] text-[#0d5c63] ml-[8px]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                letterSpacing: -0.2,
                lineHeight: 22.5
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="h-[55px] flex-1 rounded-[14px] bg-[#0d5c63] items-center justify-center flex-row"
            onPress={handleSubmit}
          >
            <Text
              className="text-[16px] text-[#ffffff]"
              style={{ 
                fontFamily: "PlusJakartaSans_700Bold",
                letterSpacing: -0.2,
                lineHeight: 22.5
              }}
            >
              {currentQuestion === 5 ? "Finish" : "Submit"}
            </Text>
            <ChevronRight size={17.96} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
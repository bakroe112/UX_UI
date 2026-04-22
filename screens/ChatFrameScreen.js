import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  ChevronLeft,
  Phone,
  Video,
  MoreHorizontal,
  Send,
  Plus,
  Camera,
  Mic,
  Smile,
  Paperclip,
  Circle,
  Check,
  CheckCheck,
} from "lucide-react-native";

// ─── DATA ────────────────────────────────────────────────────────────────────

const SAMPLE_MESSAGES = [
  {
    id: "m1",
    text: "Hi! I saw your application for the Senior Product Designer role at Figma. Your portfolio is impressive!",
    sender: "other",
    timestamp: "10:30 AM",
    status: "read",
    type: "text",
  },
  {
    id: "m2", 
    text: "Thank you so much! I'm really excited about the opportunity to work at Figma.",
    sender: "me",
    timestamp: "10:32 AM", 
    status: "read",
    type: "text",
  },
  {
    id: "m3",
    text: "I'd love to schedule a call to discuss your experience with design systems. Are you available this week?",
    sender: "other",
    timestamp: "10:35 AM",
    status: "read", 
    type: "text",
  },
  {
    id: "m4",
    text: "Absolutely! I'm free Tuesday or Wednesday afternoon. What works best for you?",
    sender: "me",
    timestamp: "10:37 AM",
    status: "read",
    type: "text",
  },
  {
    id: "m5",
    text: "Perfect! Let's do Wednesday at 2 PM. I'll send you a calendar invite with the meeting link.",
    sender: "other", 
    timestamp: "10:40 AM",
    status: "read",
    type: "text",
  },
  {
    id: "m6",
    text: "Sounds great! Looking forward to it. Should I prepare anything specific for our conversation?",
    sender: "me",
    timestamp: "10:42 AM",
    status: "delivered",
    type: "text",
  },
  {
    id: "m7",
    text: "Just be ready to walk through some of your recent projects and your design process. We're particularly interested in how you approach user research and prototyping.",
    sender: "other",
    timestamp: "10:45 AM", 
    status: "delivered",
    type: "text",
  },
  {
    id: "m8",
    text: "Thanks for the interview! Looking forward to hearing back from you.",
    sender: "me",
    timestamp: "2:15 PM",
    status: "sent",
    type: "text",
  },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function MessageBubble({ message }) {
  const isMe = message.sender === "me";
  
  const getStatusIcon = () => {
    if (!isMe) return null;
    
    switch (message.status) {
      case "sent":
        return <Check size={12} color="#8a88a8" />;
      case "delivered":
        return <CheckCheck size={12} color="#8a88a8" />;
      case "read":
        return <CheckCheck size={12} color="#0d5c63" />;
      default:
        return null;
    }
  };

  return (
    <View className={`mb-[12px] flex-row ${isMe ? "justify-end" : "justify-start"}`}>
      <View className={`max-w-[280px] ${isMe ? "items-end" : "items-start"}`}>
        <View
          className={`rounded-[16px] px-[16px] py-[12px] ${
            isMe 
              ? "bg-[#0d5c63] rounded-br-[4px]" 
              : "bg-[#ffffff] border border-[#f0f0f0] rounded-bl-[4px]"
          }`}
        >
          <Text
            className={`text-[15px] leading-[20px] ${
              isMe ? "text-[#ffffff]" : "text-[#1c1a2e]"
            }`}
            style={{ fontFamily: "PlusJakartaSans_500Medium" }}
          >
            {message.text}
          </Text>
        </View>
        
        <View className={`mt-[4px] flex-row items-center ${isMe ? "flex-row-reverse" : "flex-row"}`}>
          <Text
            className="text-[12px] text-[#8a88a8]"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            {message.timestamp}
          </Text>
          {isMe && (
            <View className="mr-[4px]">
              {getStatusIcon()}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

function DateSeparator({ date }) {
  return (
    <View className="my-[16px] items-center">
      <View className="rounded-[12px] bg-[#f3efe9] px-[12px] py-[6px]">
        <Text
          className="text-[12px] text-[#8a88a8]"
          style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
        >
          {date}
        </Text>
      </View>
    </View>
  );
}

function TypingIndicator() {
  return (
    <View className="mb-[12px] flex-row justify-start">
      <View className="max-w-[280px] items-start">
        <View className="rounded-[16px] rounded-bl-[4px] bg-[#ffffff] border border-[#f0f0f0] px-[16px] py-[12px]">
          <View className="flex-row items-center">
            <View className="flex-row items-center space-x-[2px]">
              <Circle size={6} color="#8a88a8" fill="#8a88a8" />
              <Circle size={6} color="#8a88a8" fill="#8a88a8" />
              <Circle size={6} color="#8a88a8" fill="#8a88a8" />
            </View>
          </View>
        </View>
        <Text
          className="mt-[4px] text-[12px] text-[#8a88a8]"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          Sarah is typing...
        </Text>
      </View>
    </View>
  );
}

// ─── MAIN SCREEN ─────────────────────────────────────────────────────────────

export default function ChatFrameScreen({ navigation, route }) {
  const { chat } = route.params || {};
  const [messages, setMessages] = useState(SAMPLE_MESSAGES);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    // Simulate typing indicator
    const typingTimer = setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 3000);
    }, 2000);

    return () => clearTimeout(typingTimer);
  }, []);

  function handleSendMessage() {
    if (inputText.trim()) {
      const newMessage = {
        id: `m${messages.length + 1}`,
        text: inputText.trim(),
        sender: "me",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: "sent",
        type: "text",
      };
      
      setMessages(prev => [...prev, newMessage]);
      setInputText("");
      
      // Auto scroll to bottom
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }

  const getTypeColor = () => {
    if (!chat) return "#0d5c63";
    
    switch (chat.type) {
      case "recruiter":
        return "#0d5c63";
      case "hiring_manager":
        return "#e2b053";
      case "interviewer":
        return "#8b5cf6";
      case "hr":
        return "#10b981";
      default:
        return "#8a88a8";
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f9f5f0]">
      {/* ── HEADER ── */}
      <View className="bg-[#ffffff] px-[20px] pb-[12px] pt-[45px] border-b border-[#f0f0f0]">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center flex-1">
            <TouchableOpacity
              className="h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f3efe9] mr-[12px]"
              onPress={() => navigation.goBack()}
            >
              <ChevronLeft size={20} color="#4a4868" />
            </TouchableOpacity>
            
            {/* Avatar & Info */}
            <View className="flex-row items-center flex-1">
              <View className="relative">
                <View
                  className="h-[44px] w-[44px] items-center justify-center rounded-[12px]"
                  style={{ backgroundColor: `${getTypeColor()}15` }}
                >
                  <Text
                    className="text-[14px]"
                    style={{ 
                      fontFamily: "PlusJakartaSans_700Bold",
                      color: getTypeColor()
                    }}
                  >
                    {chat?.avatar || "SJ"}
                  </Text>
                </View>
                {chat?.online && (
                  <View className="absolute -bottom-[2px] -right-[2px] h-[14px] w-[14px] items-center justify-center rounded-full bg-[#ffffff]">
                    <View className="h-[10px] w-[10px] rounded-full bg-[#10b981]" />
                  </View>
                )}
              </View>
              
              <View className="ml-[12px] flex-1">
                <Text
                  className="text-[16px] text-[#1c1a2e]"
                  style={{ fontFamily: "PlusJakartaSans_700Bold" }}
                  numberOfLines={1}
                >
                  {chat?.name || "Sarah Johnson"}
                </Text>
                <Text
                  className="text-[12px] text-[#8a88a8]"
                  style={{ fontFamily: "PlusJakartaSans_500Medium" }}
                  numberOfLines={1}
                >
                  {chat?.online ? "Active now" : "Last seen 2h ago"}
                </Text>
              </View>
            </View>
          </View>
          
          <View className="flex-row items-center gap-x-[8px]">
            <TouchableOpacity className="h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f3efe9]">
              <Phone size={18} color="#8a88a8" />
            </TouchableOpacity>
            <TouchableOpacity className="h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f3efe9]">
              <Video size={18} color="#8a88a8" />
            </TouchableOpacity>
            <TouchableOpacity className="h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f3efe9]">
              <MoreHorizontal size={18} color="#8a88a8" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* ── MESSAGES ── */}
      <KeyboardAvoidingView 
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          ref={scrollViewRef}
          className="flex-1 px-[20px]"
          contentContainerStyle={{ paddingTop: 16, paddingBottom: 16 }}
          showsVerticalScrollIndicator={false}
        >
          <DateSeparator date="Today" />
          
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          
          {isTyping && <TypingIndicator />}
        </ScrollView>

        {/* ── INPUT BAR ── */}
        <View className="bg-[#ffffff] px-[20px] py-[16px] border-t border-[#f0f0f0]">
          <View className="flex-row items-end">
            {/* Attachment Button */}
            <TouchableOpacity className="h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#f3efe9] mr-[8px]">
              <Plus size={20} color="#8a88a8" />
            </TouchableOpacity>
            
            {/* Input Container */}
            <View className="flex-1 flex-row items-end rounded-[20px] bg-[#f3efe9] px-[16px] py-[8px] mr-[8px]">
              <TextInput
                className="flex-1 max-h-[100px] text-[16px] text-[#1c1a2e]"
                style={{ 
                  fontFamily: "PlusJakartaSans_500Medium",
                  paddingTop: Platform.OS === "ios" ? 8 : 4,
                  paddingBottom: Platform.OS === "ios" ? 8 : 4,
                }}
                placeholder="Type a message..."
                placeholderTextColor="#8a88a8"
                value={inputText}
                onChangeText={setInputText}
                multiline
                textAlignVertical="center"
              />
            </View>
            
            {/* Send/Voice Button */}
            <TouchableOpacity
              className="h-[40px] w-[40px] items-center justify-center rounded-[12px]"
              style={{
                backgroundColor: inputText.trim() ? "#0d5c63" : "#f3efe9",
              }}
              onPress={inputText.trim() ? handleSendMessage : undefined}
            >
            <Send size={20} color="#8a88a8" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Eye, Mail, Lock } from "lucide-react-native";

export default function AuthInput({
  label,
  value,
  onChangeText,
  placeholder,
  icon = "mail",
  secure = false,
  focused = false,
  rightLabel,
}) {
  const [hidden, setHidden] = useState(secure);

  const LeftIcon = icon === "lock" ? Lock : Mail;
  const iconColor = focused ? "#0D5C63" : "#8A88A8";
  const borderColor = focused ? "#0D5C63" : "#0D5C6312";

  return (
    <View className="w-full">
      <View className="mb-[10px] flex-row items-center justify-between">
        <Text className="font-['Plus Jakarta Sans'] text-[13px] font-semibold leading-[22.4px] text-[#4A4868]">
          {label}
        </Text>
        {rightLabel ? (
          <Text className="font-['Plus Jakarta Sans'] text-[13px] font-semibold leading-[22.4px] text-[#0D5C63]">
            {rightLabel}
          </Text>
        ) : null}
      </View>

      <View
        className="h-[52px] w-full flex-row items-center rounded-[14px] bg-[#FFFFFF] px-[18px]"
        style={{ borderWidth: 1, borderColor }}
      >
        <LeftIcon size={18} color={iconColor} />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#8A88A8"
          secureTextEntry={secure ? hidden : false}
          className="ml-[14px] flex-1 font-['Plus Jakarta Sans'] text-[15px] leading-[21px] text-[#4A4868]"
        />
        {secure ? (
          <TouchableOpacity onPress={() => setHidden((prev) => !prev)}>
            <Eye size={18} color="#8A88A8" />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

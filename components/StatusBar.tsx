import React from "react";
import { View } from "react-native";

/**
 * StatusBar placeholder — giữ đúng chiều cao 45px như Figma,
 * không hiển thị giờ hay icon (dùng chung cho tất cả màn hình).
 */
export default function StatusBar() {
  return (
    <View
      style={{
        width: "100%",
        height: 45,
        backgroundColor: "#FFFFFF",
      }}
    />
  );
}

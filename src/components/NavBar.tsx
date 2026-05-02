import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Svg, { Path, Rect, Circle } from "react-native-svg";

export type NavTab = "Home" | "Search" | "Applied" | "Messages" | "Profile";

interface NavBarProps {
  activeTab?: NavTab;
  onTabPress?: (tab: NavTab) => void;
}

// ── SVG Icons (từ Figma) ──────────────────────────────────────────────────────

function IconHome({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9.5Z" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M9 21V15H15V21" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function IconSearch({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Circle cx={11} cy={11} r={8} stroke={color} strokeWidth={1.5} fill={color === "#B0B0C8" ? "#B0B0C81F" : "transparent"} />
      <Path d="M21 21L16.65 16.65" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </Svg>
  );
}

function IconApplied({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Rect x={4} y={3} width={16} height={18} rx={2} stroke={color} strokeWidth={1.5} fill={color === "#B0B0C8" ? "#B0B0C81F" : "transparent"} />
      <Path d="M8 7H16M8 11H16M8 15H12" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </Svg>
  );
}

function IconMessages({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke={color} strokeWidth={1.5} fill={color === "#B0B0C8" ? "#B0B0C81F" : "transparent"} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function IconProfile({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={8} r={4} stroke={color} strokeWidth={1.5} fill={color === "#B0B0C8" ? "#B0B0C81F" : "transparent"} />
      <Path d="M5 20C5 17.2386 8.13401 15 12 15C15.866 15 19 17.2386 19 20" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </Svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

const TABS: { key: NavTab; label: string; Icon: React.FC<{ color: string }> }[] = [
  { key: "Home", label: "Home", Icon: IconHome },
  { key: "Search", label: "Search", Icon: IconSearch },
  { key: "Applied", label: "Applied", Icon: IconApplied },
  { key: "Messages", label: "Messages", Icon: IconMessages },
  { key: "Profile", label: "Profile", Icon: IconProfile },
];

export default function NavBar({ activeTab = "Home", onTabPress }: NavBarProps) {
  // Calculate indicator position based on active tab
  const getIndicatorPosition = () => {
    const tabIndex = TABS.findIndex(tab => tab.key === activeTab);
    // Each tab takes roughly 20% of the width (5 tabs)
    // We need to calculate the left position for each tab
    const positions = {
      Home: 5,
      Search: 69,
      Applied: 157,
      Messages: 242,
      Profile: 324
    };
    return positions[activeTab] || 5;
  };

  return (
    <View style={{ backgroundColor: "#FFFFFFFF", paddingTop: 13, paddingBottom: 16, paddingHorizontal: 20 }}>
      {/* Active indicator line */}
      <View style={{ position: "relative", height: 2, marginBottom: 6 }}>
        <View 
          style={{ 
            position: "absolute",
            width: 24, 
            height: 2, 
            backgroundColor: "#0D5C63",
            left: getIndicatorPosition()
          }} 
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        {TABS.map(({ key, label, Icon }) => {
          const isActive = activeTab === key;
          const color = isActive ? "#0D5C63" : "#B0B0C8";
          return (
            <TouchableOpacity key={key} onPress={() => onTabPress?.(key)} style={{ alignItems: "center" }}>
              <Icon color={color} />
              <Text style={{ color, fontSize: 12, fontWeight: isActive ? "600" : "400", marginTop: 4, letterSpacing: -0.3, lineHeight: 15 }}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

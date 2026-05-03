import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar as RNStatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path, Circle, Ellipse as SvgEllipse } from "react-native-svg";

const SCREEN_W = 393;
const SCREEN_H = 852;
const { width, height } = Dimensions.get("window");
const scaleX = width / SCREEN_W;
const scaleY = height / SCREEN_H;

// ── Briefcase icon (từ Figma BriefcaseIcon, 38×38) ───────────────────────────
// Vector 1: bag body (fill #4AACB533, stroke #FFFFFF) — bounds 30×20 at (4,14)
// Vector 2: handle (stroke #FFFFFF) — bounds 10×6 at (14,7)
// Vector 3: coin (fill #E2B053) — bounds 8.23×8.31 at (15,20)
function IconBriefcase() {
  return (
    <Svg width={38} height={38} viewBox="0 0 38 38" fill="none">
      {/* Bag body */}
      <Path
        d="M4 14C4 12.9 4.9 12 6 12H32C33.1 12 34 12.9 34 14V30C34 31.1 33.1 32 32 32H6C4.9 32 4 31.1 4 30V14Z"
        fill="#4AACB533"
        stroke="#FFFFFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Handle */}
      <Path
        d="M14 12V9C14 7.9 14.9 7 16 7H22C23.1 7 24 7.9 24 9V12"
        stroke="#FFFFFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Coin */}
      <SvgEllipse cx={19} cy={24} rx={4.115} ry={4.155} fill="#E2B053" />
    </Svg>
  );
}

// ── Brain icon (22×22, stroke #E2B053) ───────────────────────────────────────
// 6 vectors forming brain shape
function IconBrain() {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      <Path
        d="M11 2.5C8.8 2.5 7 4.1 7 6.1C7 6.5 7.1 6.9 7.2 7.2C5.9 7.8 5 9.1 5 10.6C5 12.6 6.6 14.2 8.6 14.2H13.4C15.4 14.2 17 12.6 17 10.6C17 9.1 16.1 7.8 14.8 7.2C14.9 6.9 15 6.5 15 6.1C15 4.1 13.2 2.5 11 2.5Z"
        stroke="#E2B053"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M11 6V11" stroke="#E2B053" strokeWidth={1.2} strokeLinecap="round" />
      <Path d="M8.5 9H13.5" stroke="#E2B053" strokeWidth={1.2} strokeLinecap="round" />
    </Svg>
  );
}

// ── Notebook-tabs icon (22×22, stroke #4AACB5) ───────────────────────────────
// 3 vectors: tab spine, body, tabs
function IconNotebook() {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      {/* Spine tabs */}
      <Path
        d="M3.67 7.33V5.5M3.67 11V9.17M3.67 14.67V12.83"
        stroke="#4AACB5"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
      {/* Body */}
      <Path
        d="M5.5 3.67H16.5C17.42 3.67 18.17 4.42 18.17 5.33V18.33C18.17 19.25 17.42 20 16.5 20H5.5C4.58 20 3.83 19.25 3.83 18.33V5.33C3.83 4.42 4.58 3.67 5.5 3.67Z"
        stroke="#4AACB5"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Tab lines */}
      <Path
        d="M7.33 7.33H15.58M7.33 11H15.58M7.33 14.67H11.92"
        stroke="#4AACB5"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

// ── Chart-line icon (22×22, stroke #FFFFFF) ───────────────────────────────────
// 2 vectors: axes + line
function IconChart() {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      {/* Axes */}
      <Path
        d="M3 3V19H19"
        stroke="#FFFFFF"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Line chart */}
      <Path
        d="M5 15L9 10L12 13L16 7L19 9"
        stroke="#FFFFFF"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

// ── Screen ────────────────────────────────────────────────────────────────────
export default function Welcome({ navigation }: any) {
  return (
    <View style={{ flex: 1, backgroundColor: "#0D3B40" }}>
      <RNStatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* Full-screen gradient background */}
      <LinearGradient
        colors={["#0D3B40", "#0D5C63", "#1A7A82"]}
        start={{ x: 0.3, y: 0 }}
        end={{ x: 0.7, y: 1 }}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />

      {/* ── Decorative ellipses (Group 7, relative to frame 393×852) ── */}
      {/* Ellipse 2: 240×240 at x=218, y=-70 */}
      <View
        style={{
          position: "absolute",
          top: -70,
          left: 218,
          width: 240,
          height: 240,
          borderRadius: 120,
          backgroundColor: "#FFFFFF08",
        }}
      />
      {/* Ellipse 3: 56×56 at x=218+92=310, y=-70+250=180 */}
      <View
        style={{
          position: "absolute",
          top: 180,
          left: 310,
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: "#E2B05329",
        }}
      />
      {/* Ellipse 1: 160×160 at x=-50, y=450 */}
      <View
        style={{
          position: "absolute",
          top: 450,
          left: -50,
          width: 160,
          height: 160,
          borderRadius: 80,
          backgroundColor: "#FFFFFF08",
        }}
      />

      {/* ── Frame 596: paddingHorizontal=20, starts at y=170 (shifted down 30px) ── */}
      <View
        style={{
          position: "absolute",
          top: 105,
          left: 20,
          right: 20,
          // height = 652 (from y=140 to y=792)
        }}
      >
        {/* ── Frame 6: Logo + Title + Subtitle (height=218) ── */}
        <View style={{ alignItems: "center", marginBottom: 58 }}>
          {/* Frame 597: 80×80, borderRadius=24, fill=#FFFFFF1A, stroke=#FFFFFF2E */}
          {/* padding: bottom=22, left=21, right=21, top=20 */}
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 24,
              backgroundColor: "#FFFFFF1A",
              borderWidth: 1,
              borderColor: "#FFFFFF2E",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <IconBriefcase />
          </View>

          {/* "HireFlow" — fontSize=40, ExtraBold, letterSpacing=-1.8, lineHeight=60 */}
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 40,
              fontWeight: "800",
              lineHeight: 60,
              letterSpacing: -1.8,
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            HireFlow
          </Text>

          {/* Subtitle — fontSize=15, Regular, color=#FFFFFF8C, lineHeight=28, width=240 */}
          <Text
            style={{
              color: "#FFFFFF8C",
              fontSize: 15,
              fontWeight: "400",
              lineHeight: 28,
              textAlign: "center",
              width: 240,
            }}
          >
            {"Your next great opportunity is one \ntap away"}
          </Text>
        </View>

        {/* ── Frame 5: 3 feature rows (height=146, marginLeft=36) ── */}
        {/* Each row: icon 38×38 (bg #FFFFFF12, borderRadius=10) + text */}
        <View style={{ marginLeft: 36, marginBottom: 67 }}>
          {/* Row 1: brain icon + "AI-matched jobs with 96%+ accuracy" */}
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
            <View
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                backgroundColor: "#FFFFFF12",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 14,
              }}
            >
              <IconBrain />
            </View>
            <Text style={{ color: "#FFFFFFAD", fontSize: 13, lineHeight: 28 }}>
              AI-matched jobs with 96%+ accuracy
            </Text>
          </View>

          {/* Row 2: notebook icon + "One-tap Quick Apply in seconds" */}
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
            <View
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                backgroundColor: "#FFFFFF12",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 14,
              }}
            >
              <IconNotebook />
            </View>
            <Text style={{ color: "#FFFFFFAD", fontSize: 13, lineHeight: 28 }}>
              One-tap Quick Apply in seconds
            </Text>
          </View>

          {/* Row 3: chart icon + "One-tap Quick Apply in seconds" */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                backgroundColor: "#FFFFFF12",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 14,
              }}
            >
              <IconChart />
            </View>
            <Text style={{ color: "#FFFFFFAD", fontSize: 13, lineHeight: 28 }}>
              One-tap Quick Apply in seconds
            </Text>
          </View>
        </View>

        {/* ── Frame 10: Buttons + Footer (height=172) ── */}
        {/* Frame 8: "Get Started" button — height=54, width=351.94 */}
        <TouchableOpacity
          style={{
            height: 54,
            backgroundColor: "#E2B053",
            borderRadius: 14,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 18,
            shadowColor: "#E2B053",
            shadowOpacity: 0.37,
            shadowOffset: { width: 0, height: 8 },
            shadowRadius: 24,
            elevation: 12,
          }}
          onPress={() => navigation.navigate("SignUp")}
          activeOpacity={0.85}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 15,
              fontWeight: "700",
              lineHeight: 28,
            }}
          >
            Get Started - It's Free
          </Text>
        </TouchableOpacity>

        {/* Frame 9: "Sign In" button — height=54, bg transparent, border #FFFFFF2E */}
        <TouchableOpacity
          style={{
            height: 54,
            backgroundColor: "#FFFFFF1A",
            borderRadius: 14,
            borderWidth: 1,
            borderColor: "#FFFFFF2E",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 18,
          }}
          onPress={() => navigation.navigate("SignIn")}
          activeOpacity={0.85}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 15,
              fontWeight: "700",
              lineHeight: 28,
            }}
          >
            Sign In to My Account
          </Text>
        </TouchableOpacity>

        {/* Footer text — color=#FFFFFF47, fontSize=11, lineHeight=28 */}
        <Text
          style={{
            color: "#FFFFFF47",
            fontSize: 11,
            fontWeight: "400",
            lineHeight: 28,
            textAlign: "center",
          }}
        >
          Trusted by 50,000+ job seekers worldwide
        </Text>
      </View>
    </View>
  );
}

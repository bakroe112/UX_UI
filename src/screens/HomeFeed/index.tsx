import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path, Circle, Ellipse as SvgEllipse } from "react-native-svg";
import { Paintbrush, ChessQueen } from "lucide-react-native";
import StatusBar from "../../components/StatusBar";
import NavBar from "../../components/NavBar";

// ── Icons từ Figma (Lucide icon set) ─────────────────────────────────────────

// bell: 18×18, Lucide Bell — clapper body + arc handle + dot notch
// Figma: Vector bounds 15×13.5 at (2.25,1.5), stroke #4A4868
function IconBell() {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
        stroke="#4A4868" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
      />
      <Path
        d="M13.73 21a2 2 0 0 1-3.46 0"
        stroke="#4A4868" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
      />
    </Svg>
  );
}

// search: 16×16, Lucide Search — circle + diagonal line
// Figma: 2 vectors: circle r=5.33 at (2,2) + line from (11.11,11.11)
function IconSearch() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Circle cx={11} cy={11} r={8} stroke="#8A88A8" strokeWidth={1.8} />
      <Path d="M21 21l-4.35-4.35" stroke="#8A88A8" strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

// sliders-vertical: 16×16, Lucide SlidersVertical — 2 vertical lines with horizontal handles
// Figma: Vector bounds 12×12 at (14,14), stroke #0D5C63
function IconFilter() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Path d="M4 21V14M4 10V3M12 21V12M12 8V3M20 21V16M20 12V3" stroke="#0D5C63" strokeWidth={1.8} strokeLinecap="round" />
      <Path d="M1 14h6M9 8h6M17 16h6" stroke="#0D5C63" strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

// bookmark in circle: ellipse 24.55×23.6 + bookmark shape
// Figma: Ellipse 14 (stroke #E2B053) + bookmark Vector (stroke/fill #E2B053)
function IconBookmark({ filled = false }: { filled?: boolean }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <SvgEllipse cx={12.275} cy={11.8} rx={11.025} ry={11.05} stroke="#E2B053" strokeWidth={1.5} />
      <Path
        d="M9.5 7.8h5.55c.5 0 .9.4.9.9v7.7l-3.675-2.2L8.6 16.4V8.7c0-.5.4-.9.9-.9z"
        fill={filled ? "#E2B053" : "none"}
        stroke="#E2B053" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round"
      />
    </Svg>
  );
}

// paintbrush: 20×20, Lucide Paintbrush — brush body + handle
// Figma: Vector bounds 16.67×16.64 at (1.67,1.67), stroke color
function IconPaintbrush({ color = "#7A6181" }: { color?: string }) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.37 2.63 14 7l-1.59-1.59-5.66 5.66 1.59 1.59L7 14l-4 4 1 3 3 1 4-4 1.34-1.34 1.59 1.59 5.66-5.66L18 10l4.37-4.37a2 2 0 0 0-4-2.99z"
        stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      />
    </Svg>
  );
}

// code-xml: 20×20, Lucide Code2 — two chevrons < >
// Figma: Vector bounds 16.67×13.33 at (1.67,3.33), stroke color
function IconCode({ color = "#0D5C63" }: { color?: string }) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

// eye: 16×16, Lucide Eye — eye outline + pupil
// Figma: 2 vectors: eye path (9.33×13.33) + pupil circle (4×4)
function IconEye() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Path
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="#4AACB5" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      />
      <Circle cx={12} cy={12} r={3} stroke="#4AACB5" strokeWidth={1.5} />
    </Svg>
  );
}

// chess-queen: 20×20, Lucide ChessQueen — crown with 4 vectors
// Figma: 4 vectors forming queen crown shape, stroke #FFFFFF
function IconChessQueen() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      {/* Base */}
      <Path d="M9 20h6M5 20h14" stroke="#FFFFFF" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      {/* Crown body */}
      <Path
        d="M5 16l2-9 5 6 5-6 2 9"
        stroke="#FFFFFF" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Top orb */}
      <Circle cx={12} cy={5} r={1.5} stroke="#FFFFFF" strokeWidth={1.5} />
      {/* Side orbs */}
      <Circle cx={4} cy={8} r={1} stroke="#FFFFFF" strokeWidth={1.3} />
      <Circle cx={20} cy={8} r={1} stroke="#FFFFFF" strokeWidth={1.3} />
    </Svg>
  );
}

// refresh-ccw: 18×18, Lucide RefreshCcw — counter-clockwise arrows
// Figma: 3 vectors: arc (13.5×13.5) + 2 arrow tips (6.75×13.5 and 3.75×3.75)
function IconRefreshCcw() {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 2v6h6"
        stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
      />
      <Path
        d="M21 12A9 9 0 0 0 6 5.3L3 8"
        stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
      />
      <Path
        d="M21 22v-6h-6"
        stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
      />
      <Path
        d="M3 12a9 9 0 0 0 15 6.7l3-2.7"
        stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
      />
    </Svg>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

// JobCard: width=353, height=106, borderRadius=16, paddingVertical=11, paddingHorizontal=14
// Logo: 44.25×44, borderRadius=10, bg=#7A618112, text "H" fontSize=18 ExtraBold #7A6181
// Title: fontSize=14 Bold, subtitle: fontSize=12 Regular
// Match badge: 40.23×22, borderRadius=10, bg=#EBF6F7, fontSize=11 Bold #0D5C63
// Salary tag: width=80, height=24, borderRadius=30, bg=#E2B0530D, border #E2B053, fontSize=10 SemiBold
// Location tag: width=72, height=24, borderRadius=30, bg=#EBF6F7, fontSize=10 SemiBold #0D5C63
// Bookmark: ellipse 24.55×23.6
function JobCard({ title, subtitle, matchPercent, salary, location, saved = false, mb = 17 }: {
  title: string; subtitle: string; matchPercent: string; salary: string; location: string; saved?: boolean; mb?: number;
}) {
  return (
    <View style={{ backgroundColor: "#FFFFFF", borderRadius: 16, paddingVertical: 11, paddingHorizontal: 14, marginBottom: mb, shadowColor: "#0D5C63", shadowOpacity: 0.03, shadowOffset: { width: 0, height: 0 }, shadowRadius: 1, elevation: 1 }}>
      {/* Top row: paddingVertical=5, marginBottom=11 */}
      <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 5, marginBottom: 11 }}>
        {/* Logo: 44.25×44, marginRight=15 */}
        <View style={{ backgroundColor: "#7A618112", borderRadius: 10, width: 44, height: 44, alignItems: "center", justifyContent: "center", marginRight: 15 }}>
          <Text style={{ color: "#7A6181", fontSize: 18, fontWeight: "800", lineHeight: 27 }}>H</Text>
        </View>
        {/* Title + subtitle */}
        <View style={{ flex: 1 }}>
          <Text style={{ color: "#1C1A2E", fontSize: 14, fontWeight: "700", lineHeight: 21 }} numberOfLines={1}>{title}</Text>
          <Text style={{ color: "#8A88A8", fontSize: 12, fontWeight: "400", lineHeight: 21 }} numberOfLines={1}>{subtitle}</Text>
        </View>
        {/* Match badge: 40.23×22, borderRadius=10 */}
        <View style={{ backgroundColor: "#EBF6F7", borderRadius: 20, paddingVertical: 2, paddingHorizontal: 8, minWidth: 45 }}>
          <Text style={{ color: "#0D5C63", fontSize: 11, fontWeight: "700", lineHeight: 22, textAlign: "center" }}>{matchPercent}</Text>
        </View>
      </View>
      {/* Bottom row */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* Salary: width=80, height=24, borderRadius=30 */}
          <View style={{ backgroundColor: "#E2B0530D", borderColor: "#E2B053", borderWidth: 1, borderRadius: 30, width: 80, height: 24, alignItems: "center", justifyContent: "center", marginRight: 9 }}>
            <Text style={{ color: "#E2B053", fontSize: 10, fontWeight: "600", lineHeight: 14, includeFontPadding: false }}>{salary}</Text>
          </View>
          {/* Location: width=72, height=24, borderRadius=30 */}
          <View style={{ backgroundColor: "#EBF6F7", borderRadius: 30, width: 72, height: 24, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#0D5C63", fontSize: 10, fontWeight: "600", lineHeight: 14, includeFontPadding: false }}>{location}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}}><IconBookmark filled={saved} /></TouchableOpacity>
      </View>
    </View>
  );
}

// SectionHeader: "Featured jobs" fontSize=15 Bold #000, "See all" fontSize=12 SemiBold #0D5C63
function SectionHeader({ title }: { title: string }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
      <Text style={{ color: "#000000", fontSize: 15, fontWeight: "700" }}>{title}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text style={{ color: "#0D5C63", fontSize: 12, fontWeight: "600", lineHeight: 18 }}>See all</Text>
      </TouchableOpacity>
    </View>
  );
}

// CategoryRow: height=70, borderRadius=16, icon 44×44, title fontSize=14 Bold, count fontSize=12
function CategoryRow({ title, count, iconColor, bgColor, IconComponent, mb = 17 }: {
  title: string; count: string; iconColor: string; bgColor: string; IconComponent: React.FC<{ color: string }>; mb?: number;
}) {
  return (
    <View style={{ backgroundColor: "#FFFFFF", borderRadius: 16, height: 70, paddingHorizontal: 14, flexDirection: "row", alignItems: "center", marginBottom: mb, shadowColor: "#0D5C63", shadowOpacity: 0.03, shadowOffset: { width: 0, height: 0 }, shadowRadius: 1, elevation: 1 }}>
      <View style={{ backgroundColor: bgColor, borderRadius: 10, width: 44, height: 44, alignItems: "center", justifyContent: "center", marginRight: 15 }}>
        <IconComponent color={iconColor} />
      </View>
      <View>
        <Text style={{ color: "#1C1A2E", fontSize: 14, fontWeight: "700", lineHeight: 21 }}>{title}</Text>
        <Text style={{ color: "#8A88A8", fontSize: 12, fontWeight: "400", lineHeight: 21 }}>{count}</Text>
      </View>
    </View>
  );
}

// TrendingRow: height=99, rank fontSize=28 ExtraBold, company fontSize=16 Bold, views fontSize=14
// Icon container: 50×50, borderRadius=10, bg=#E2B05312
function TrendingRow({ rank, company, views, rankOpacity, isLast = false }: {
  rank: string; company: string; views: string; rankOpacity: number; isLast?: boolean;
}) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: isLast ? 0 : 1, borderBottomColor: "#0D5C6333", height: 99 }}>
      {/* Rank: width=63, center */}
      <View style={{ width: 63, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: `rgba(13,92,99,${rankOpacity})`, fontSize: 28, fontWeight: "800", lineHeight: 21 }}>{rank}</Text>
      </View>
      {/* Icon: 50×50, borderRadius=10 */}
      <View style={{ backgroundColor: "#E2B05312", borderRadius: 10, width: 50, height: 50, alignItems: "center", justifyContent: "center", marginRight: 12 }}>
        <Paintbrush size={20} color="#E2B053" />
      </View>
      {/* Company info */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: "#1C1A2E", fontSize: 16, fontWeight: "700", lineHeight: 21 }}>{company}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 2 }}>
          <IconEye />
          <Text style={{ color: "#8A88A8", fontSize: 14, fontWeight: "400", lineHeight: 21, marginLeft: 4 }}>{views}</Text>
        </View>
      </View>
    </View>
  );
}

// ── Screen ────────────────────────────────────────────────────────────────────

export default function HomeFeed() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["left", "right"]}>
      <StatusBar />
      <ScrollView style={{ flex: 1, backgroundColor: "#F9F5F0" }} showsVerticalScrollIndicator={false}>

        {/* ── Header: Frame 146 (y=45, height=128) ── */}
        {/* Frame 234: greeting + buttons, y=0, height=47 */}
        {/* Frame 599: search bar, y=64, height=45 */}
        <View style={{ backgroundColor: "#FFFFFF", paddingHorizontal: 20, paddingTop: 12, paddingBottom: 19 }}>
          {/* Greeting row: height=47, marginBottom=17 */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 17 }}>
            {/* Group 144: width=171, height=47 */}
            <View>
              {/* "Good morning": fontSize=11, Regular, #8A88A8, lineHeight=16.5 */}
              <Text style={{ color: "#8A88A8", fontSize: 11, fontWeight: "400", lineHeight: 16.5 }}>Good morning</Text>
              {/* "Lucyna Kushinada": fontSize=20, ExtraBold, #1A1828, lineHeight=30, letterSpacing=-0.4 */}
              <Text style={{ color: "#1A1828", fontSize: 20, fontWeight: "800", lineHeight: 30, letterSpacing: -0.4 }}>Lucyna Kushinada</Text>
            </View>
            {/* Frame 233: buttons, width=86, height=38 */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* Group 142: bell button, 38×38, borderRadius=11, bg=#F3EFE9 */}
              <TouchableOpacity
                style={{ width: 38, height: 38, borderRadius: 11, backgroundColor: "#F3EFE9", alignItems: "center", justifyContent: "center", marginRight: 10 }}
                onPress={() => {}}
              >
                <IconBell />
                {/* Notification dot: outer white 7×7, inner gold 5×5, at (23,8) */}
                <View style={{ position: "absolute", top: 8, right: 7, width: 7, height: 7, borderRadius: 3.5, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center" }}>
                  <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: "#E2B053" }} />
                </View>
              </TouchableOpacity>
              {/* Group 141: LK avatar, 38×38, borderRadius=11, gradient */}
              <TouchableOpacity onPress={() => {}}>
                <LinearGradient
                  start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                  colors={["#E2B053", "#C4892A"]}
                  style={{ width: 38, height: 38, borderRadius: 11, alignItems: "center", justifyContent: "center" }}
                >
                  {/* "LK": fontSize=14, ExtraBold, #FFFFFF, lineHeight=21 */}
                  <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: "800", lineHeight: 21 }}>LK</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          {/* Search bar: Frame 599, height=45, borderRadius=14, bg=#FFFFFF */}
          {/* paddingLeft=16 (icon at x=16), paddingRight=16 (filter at x=337) */}
          <View style={{ height: 45, backgroundColor: "#FFFFFF", borderRadius: 14, flexDirection: "row", alignItems: "center", paddingHorizontal: 16, shadowColor: "#000000", shadowOpacity: 0.05, shadowOffset: { width: 0, height: 1 }, shadowRadius: 6, elevation: 3 }}>
            <IconSearch />
            {/* "Search jobs...": fontSize=14, Regular, #8A88A8, lineHeight=21, x=43 */}
            <Text style={{ color: "#8A88A8", fontSize: 14, fontWeight: "400", lineHeight: 21, marginLeft: 11, flex: 1 }}>Search jobs, companies, skills...</Text>
            <IconFilter />
          </View>
        </View>

        {/* ── Frame 528: main content, padding bottom=18, left=20, right=20, top=18 ── */}
        <View style={{ paddingHorizontal: 20, paddingTop: 18, paddingBottom: 18 }}>

          {/* Stats: Frame 244, y=18, height=61, 4 cards each width=81 */}
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 26 }}>
            {/* Applied: bg=#EBF6F7, borderRadius=12 */}
            <View style={{ flex: 1, backgroundColor: "#EBF6F7", borderRadius: 12, height: 61, alignItems: "center", justifyContent: "center", marginRight: 9, shadowColor: "#0D5C63", shadowOpacity: 0.3, shadowOffset: { width: 0, height: 1 }, shadowRadius: 1, elevation: 1 }}>
              <Text style={{ color: "#0D5C63", fontSize: 20, fontWeight: "700", lineHeight: 21, marginBottom: 5 }}>14</Text>
              <Text style={{ color: "#0D5C63", fontSize: 10, fontWeight: "400" }}>Applied</Text>
            </View>
            {/* Interviews: bg=#F2EDF5 */}
            <View style={{ flex: 1, backgroundColor: "#F2EDF5", borderRadius: 12, height: 61, alignItems: "center", justifyContent: "center", marginRight: 9, shadowColor: "#7A6181", shadowOpacity: 0.3, shadowOffset: { width: 0, height: 1 }, shadowRadius: 1, elevation: 1 }}>
              <Text style={{ color: "#7A6181", fontSize: 20, fontWeight: "700", lineHeight: 21, marginBottom: 5 }}>5</Text>
              <Text style={{ color: "#7A6181", fontSize: 10, fontWeight: "400" }}>Interviews</Text>
            </View>
            {/* New matches: bg=#FDF8EE */}
            <View style={{ flex: 1, backgroundColor: "#FDF8EE", borderRadius: 12, height: 61, alignItems: "center", justifyContent: "center", marginRight: 9, shadowColor: "#E2B053", shadowOpacity: 0.3, shadowOffset: { width: 0, height: 1 }, shadowRadius: 1, elevation: 1 }}>
              <Text style={{ color: "#E2B053", fontSize: 20, fontWeight: "700", lineHeight: 21, marginBottom: 5 }}>47</Text>
              <Text style={{ color: "#E2B053", fontSize: 10, fontWeight: "400" }}>New matches</Text>
            </View>
            {/* Profile: bg=#F0FDF4 */}
            <View style={{ flex: 1, backgroundColor: "#F0FDF4", borderRadius: 12, height: 61, alignItems: "center", justifyContent: "center", shadowColor: "#16A34A", shadowOpacity: 0.3, shadowOffset: { width: 0, height: 1 }, shadowRadius: 1, elevation: 1 }}>
              <Text style={{ color: "#16A34A", fontSize: 18, fontWeight: "700", lineHeight: 21, marginBottom: 5 }}>92%</Text>
              <Text style={{ color: "#16A34A", fontSize: 10, fontWeight: "400" }}>Profile</Text>
            </View>
          </View>

          {/* Featured jobs: Frame 254, y=105 */}
          <View style={{ marginBottom: 26 }}>
            <SectionHeader title="Featured jobs" />
            <JobCard title="Senior Product Designer" subtitle="Figma · Remote" matchPercent="98%" salary="$140-160k" location="Remote" saved={false} mb={17} />
            <JobCard title="Design Systems Lead" subtitle="Notion · SF / Remote" matchPercent="89%" salary="$130-155k" location="Remote" saved={true} mb={17} />
            <JobCard title="Design Systems Lead" subtitle="Notion · SF / Remote" matchPercent="89%" salary="$130-155k" location="Remote" saved={true} mb={0} />
          </View>

          {/* For you: Frame 266 (width=353, height=540) */}
          {/* Frame 265: 2 pages ngang (Frame 253 x=0 + Frame 264 x=373), mỗi page 4 cards dọc */}
          {/* Frame 263: 5 dots, width=106, x=123.5, y=530, spacing=24 */}
          <View style={{ marginBottom: 26 }}>
            <SectionHeader title="For you" />
            {/* Horizontal pager: mỗi page width=353, snap */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              snapToInterval={353}
              decelerationRate="fast"
            >
              {/* Page 1 — Frame 253: 4 cards dọc, gap=17 giữa các card */}
              <View style={{ width: 319, marginRight: 20 }}>
                <JobCard title="Senior Product Designer" subtitle="Figma · Remote" matchPercent="98%" salary="$140-160k" location="Remote" saved={false} mb={17} />
                <JobCard title="Design Systems Lead" subtitle="Notion · SF / Remote" matchPercent="89%" salary="$130-155k" location="Remote" saved={true} mb={17} />
                <JobCard title="Design Systems Lead" subtitle="Notion · SF / Remote" matchPercent="89%" salary="$130-155k" location="Remote" saved={true} mb={17} />
                <JobCard title="Design Systems Lead" subtitle="Notion · SF / Remote" matchPercent="89%" salary="$130-155k" location="Remote" saved={true} mb={0} />
              </View>
              {/* Page 2 — Frame 264: 4 cards dọc */}
              <View style={{ width: 319 }}>
                <JobCard title="Senior Product Designer" subtitle="Figma · Remote" matchPercent="98%" salary="$140-160k" location="Remote" saved={false} mb={17} />
                <JobCard title="Design Systems Lead" subtitle="Notion · SF / Remote" matchPercent="89%" salary="$130-155k" location="Remote" saved={true} mb={17} />
                <JobCard title="Design Systems Lead" subtitle="Notion · SF / Remote" matchPercent="89%" salary="$130-155k" location="Remote" saved={true} mb={17} />
                <JobCard title="Design Systems Lead" subtitle="Notion · SF / Remote" matchPercent="89%" salary="$130-155k" location="Remote" saved={true} mb={0} />
              </View>
            </ScrollView>
            {/* Frame 263: 5 dots, width=106, height=10, centered (x=123.5 of 353) */}
            {/* dots: width=10, height=10, spacing=24 (center-to-center) */}
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 18, gap: 14 }}>
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#0D5C63" }} />
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#0D5C634D" }} />
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#0D5C634D" }} />
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#0D5C634D" }} />
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#0D5C634D" }} />
            </View>
          </View>

          {/* Browse Categories: Frame 267, y=981 */}
          <View style={{ marginBottom: 26 }}>
            <SectionHeader title="Browse Categories" />
            {/* Design: icon=paintbrush, bg=#7A618112, iconColor=#7A6181 */}
            <CategoryRow title="Design" count="2k  jobs" iconColor="#7A6181" bgColor="#7A618112" IconComponent={Paintbrush} />
            {/* Engineering: icon=code-xml, bg=#0D5C6312, iconColor=#0D5C63 */}
            <CategoryRow title="Engineering" count="3k jobs" iconColor="#0D5C63" bgColor="#0D5C6312" IconComponent={IconCode} />
            <CategoryRow title="Technical" count="3k jobs" iconColor="#0D5C63" bgColor="#0D5C6312" IconComponent={IconCode} />
            <CategoryRow title="Analysis Business" count="3k jobs" iconColor="#0D5C63" bgColor="#0D5C6312" IconComponent={IconCode} />
            <CategoryRow title="Operations" count="3k jobs" iconColor="#0D5C63" bgColor="#0D5C6312" IconComponent={IconCode} mb={0} />
          </View>

          {/* Trending: Group 167 (Trending header + Frame 274 leaderboard) */}
          <View style={{ marginBottom: 18 }}>
            {/* Header: height=59, bg=#0D5C63, borderRadius top=16 */}
            {/* chess-queen at x=14, "Trending" fontSize=20 SemiBold at x=44, refresh-ccw at x=324 */}
            <View style={{ backgroundColor: "#0D5C63", borderTopLeftRadius: 16, borderTopRightRadius: 16, height: 59, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 14 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ChessQueen size={20} color="#FFFFFF" />
                <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "600", lineHeight: 21, marginLeft: 10 }}>Trending</Text>
              </View>
              <IconRefreshCcw />
            </View>
            {/* Leaderboard: Frame 274, 5 rows each height=99 */}
            <View style={{ backgroundColor: "#FFFFFF", borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderWidth: 1, borderTopWidth: 0, borderColor: "#0D5C6333", overflow: "hidden" }}>
              <TrendingRow rank="1" company="Notion · SF / Remote" views="3.3k  views" rankOpacity={0.8} />
              <TrendingRow rank="2" company="Shopee" views="3.1k  views" rankOpacity={0.4} />
              <TrendingRow rank="3" company="Meta" views="2.3k  views" rankOpacity={0.4} />
              <TrendingRow rank="4" company="Leo Technical" views="2.0k  views" rankOpacity={0.4} />
              <TrendingRow rank="5" company="Notion · SF / Remote" views="1.3k  views" rankOpacity={0.4} isLast />
            </View>
          </View>

          {/* Bottom spacer: Rectangle 142, height=16, bg=#F9F5F0 */}
          <View style={{ height: 16, backgroundColor: "#F9F5F0" }} />
        </View>
      </ScrollView>
      <NavBar activeTab="Home" />
    </SafeAreaView>
  );
}

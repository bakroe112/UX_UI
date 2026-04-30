import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, {
  Path,
  Rect,
  Circle,
  Ellipse as SvgEllipse,
  Line,
  G,
} from "react-native-svg";
import StatusBar from "../../components/StatusBar";
import NavBar from "../../components/NavBar";

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function IconBell() {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
        stroke="#4A4868"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.73 21a2 2 0 0 1-3.46 0"
        stroke="#4A4868"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function IconSearch() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Circle cx={11} cy={11} r={8} stroke="#8A88A8" strokeWidth={1.5} />
      <Path d="M21 21L16.65 16.65" stroke="#8A88A8" strokeWidth={1.5} strokeLinecap="round" />
    </Svg>
  );
}

function IconFilter() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Path d="M4 6H20M7 12H17M10 18H14" stroke="#0D5C63" strokeWidth={1.5} strokeLinecap="round" />
    </Svg>
  );
}

function IconBookmarkEmpty() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <SvgEllipse cx={12} cy={12} rx={11} ry={11} stroke="#E2B053" strokeWidth={1.5} />
      <Path
        d="M9 7H15C15.5523 7 16 7.44772 16 8V17L12 14.5L8 17V8C8 7.44772 8.44772 7 9 7Z"
        stroke="#E2B053"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function IconBookmarkFilled() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <SvgEllipse cx={12} cy={12} rx={11} ry={11} stroke="#E2B053" strokeWidth={1.5} />
      <Path
        d="M9 7H15C15.5523 7 16 7.44772 16 8V17L12 14.5L8 17V8C8 7.44772 8.44772 7 9 7Z"
        fill="#E2B053"
        stroke="#E2B053"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function IconPaintbrush({ color = "#7A6181" }: { color?: string }) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.37 2.63L14 7l-1.59-1.59-5.66 5.66 1.59 1.59L7 14l-4 4 1 3 3 1 4-4 1.34-1.34 1.59 1.59 5.66-5.66L18 10l4.37-4.37a2 2 0 0 0-4-2.99z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function IconCode({ color = "#0D5C63" }: { color?: string }) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16 18L22 12L16 6M8 6L2 12L8 18"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function IconEye() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Path
        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
        stroke="#4AACB5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={12} cy={12} r={3} stroke="#4AACB5" strokeWidth={1.5} />
    </Svg>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

/** Card việc làm dùng chung cho Featured jobs & For you */
function JobCard({
  title,
  subtitle,
  matchPercent,
  salary,
  location,
  saved = false,
  mb = 17,
}: {
  title: string;
  subtitle: string;
  matchPercent: string;
  salary: string;
  location: string;
  saved?: boolean;
  mb?: number;
}) {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        paddingVertical: 11,
        paddingHorizontal: 14,
        marginBottom: mb,
        shadowColor: "#0D5C63",
        shadowOpacity: 0.03,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 1,
        elevation: 1,
      }}
    >
      {/* Top row */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 5,
          marginBottom: 11,
        }}
      >
        {/* Logo placeholder */}
        <View
          style={{
            backgroundColor: "#7A618112",
            borderRadius: 10,
            width: 44,
            height: 44,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 15,
          }}
        >
          <Text
            style={{
              color: "#7A6181",
              fontSize: 18,
              fontWeight: "800",
              lineHeight: 27,
            }}
          >
            H
          </Text>
        </View>

        {/* Title + subtitle */}
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: "#1C1A2E",
              fontSize: 14,
              fontWeight: "700",
              lineHeight: 21,
            }}
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text
            style={{
              color: "#8A88A8",
              fontSize: 12,
              lineHeight: 21,
            }}
            numberOfLines={1}
          >
            {subtitle}
          </Text>
        </View>

        {/* Match badge */}
        <View
          style={{
            backgroundColor: "#EBF6F7",
            borderRadius: 10,
            paddingVertical: 6,
            paddingHorizontal: 8,
          }}
        >
          <Text
            style={{
              color: "#0D5C63",
              fontSize: 11,
              fontWeight: "700",
              lineHeight: 27,
            }}
          >
            {matchPercent}
          </Text>
        </View>
      </View>

      {/* Bottom row */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* Salary tag */}
          <View
            style={{
              backgroundColor: "#E2B0530D",
              borderColor: "#E2B053",
              borderWidth: 1,
              borderRadius: 30,
              paddingVertical: 7,
              paddingHorizontal: 13,
              marginRight: 9,
            }}
          >
            <Text
              style={{
                color: "#E2B053",
                fontSize: 10,
                fontWeight: "600",
                lineHeight: 27,
              }}
            >
              {salary}
            </Text>
          </View>

          {/* Location tag */}
          <View
            style={{
              backgroundColor: "#EBF6F7",
              borderRadius: 30,
              paddingVertical: 8,
              paddingHorizontal: 17,
            }}
          >
            <Text
              style={{
                color: "#0D5C63",
                fontSize: 10,
                fontWeight: "600",
                lineHeight: 27,
              }}
            >
              {location}
            </Text>
          </View>
        </View>

        {/* Bookmark */}
        <TouchableOpacity onPress={() => {}}>
          {saved ? <IconBookmarkFilled /> : <IconBookmarkEmpty />}
        </TouchableOpacity>
      </View>
    </View>
  );
}

/** Section header dùng chung */
function SectionHeader({ title }: { title: string }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 18,
      }}
    >
      <Text
        style={{
          color: "#000000",
          fontSize: 15,
          fontWeight: "700",
        }}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={() => {}}>
        <Text
          style={{
            color: "#0D5C63",
            fontSize: 12,
            fontWeight: "600",
            lineHeight: 18,
          }}
        >
          See all
        </Text>
      </TouchableOpacity>
    </View>
  );
}

/** Category row item */
function CategoryRow({
  title,
  count,
  iconColor,
  bgColor,
  IconComponent,
  mb = 17,
}: {
  title: string;
  count: string;
  iconColor: string;
  bgColor: string;
  IconComponent: React.FC<{ color: string }>;
  mb?: number;
}) {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        paddingVertical: 13,
        paddingHorizontal: 14,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: mb,
        shadowColor: "#0D5C63",
        shadowOpacity: 0.03,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 1,
        elevation: 1,
      }}
    >
      <View
        style={{
          backgroundColor: bgColor,
          borderRadius: 10,
          width: 44,
          height: 44,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 15,
        }}
      >
        <IconComponent color={iconColor} />
      </View>
      <View>
        <Text
          style={{
            color: "#1C1A2E",
            fontSize: 14,
            fontWeight: "700",
            lineHeight: 21,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: "#8A88A8",
            fontSize: 12,
            lineHeight: 21,
          }}
        >
          {count}
        </Text>
      </View>
    </View>
  );
}

/** Trending leaderboard row */
function TrendingRow({
  rank,
  company,
  views,
  rankOpacity,
  isLast = false,
}: {
  rank: string;
  company: string;
  views: string;
  rankOpacity: number;
  isLast?: boolean;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: isLast ? 0 : 1,
        borderBottomColor: "#0D5C6333",
        height: 99,
      }}
    >
      {/* Rank number */}
      <View
        style={{
          width: 63,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: `rgba(13,92,99,${rankOpacity})`,
            fontSize: 28,
            fontWeight: "800",
            lineHeight: 21,
          }}
        >
          {rank}
        </Text>
      </View>

      {/* Company icon */}
      <View
        style={{
          backgroundColor: "#E2B05312",
          borderRadius: 10,
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 12,
        }}
      >
        <IconPaintbrush color="#E2B053" />
      </View>

      {/* Company info */}
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: "#1C1A2E",
            fontSize: 16,
            fontWeight: "700",
            lineHeight: 21,
          }}
        >
          {company}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 2 }}>
          <IconEye />
          <Text
            style={{
              color: "#8A88A8",
              fontSize: 14,
              lineHeight: 21,
              marginLeft: 4,
            }}
          >
            {views}
          </Text>
        </View>
      </View>
    </View>
  );
}

// ── Screen ────────────────────────────────────────────────────────────────────

export default function HomeFeed() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["left", "right"]}>
      {/* Status Bar placeholder */}
      <StatusBar />

      <ScrollView
        style={{ flex: 1, backgroundColor: "#F9F5F0" }}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header section ── */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            paddingBottom: 19,
            paddingHorizontal: 20,
          }}
        >
          {/* Greeting row */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 12,
              marginBottom: 17,
            }}
          >
            {/* Name */}
            <View>
              <Text
                style={{
                  color: "#8A88A8",
                  fontSize: 11,
                  lineHeight: 16.5,
                }}
              >
                Good morning
              </Text>
              <Text
                style={{
                  color: "#1A1828",
                  fontSize: 20,
                  fontWeight: "800",
                  lineHeight: 30,
                  letterSpacing: -0.4,
                }}
              >
                Lucyna Kushinada
              </Text>
            </View>

            {/* Action buttons */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* Bell button */}
              <TouchableOpacity
                style={{
                  backgroundColor: "#F3EFE9",
                  borderRadius: 11,
                  padding: 10,
                  marginRight: 10,
                }}
                onPress={() => {}}
              >
                <IconBell />
                {/* Notification dot */}
                <View
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    width: 7,
                    height: 7,
                    borderRadius: 3.5,
                    backgroundColor: "#E2B053",
                    borderWidth: 1,
                    borderColor: "#FFFFFF",
                  }}
                />
              </TouchableOpacity>

              {/* Avatar button */}
              <TouchableOpacity onPress={() => {}}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={["#E2B053", "#C4892A"]}
                  style={{
                    borderRadius: 11,
                    paddingVertical: 13,
                    paddingHorizontal: 11,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 14,
                      fontWeight: "800",
                      lineHeight: 21,
                    }}
                  >
                    LK
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          {/* Search bar */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 14,
              paddingVertical: 14.5,
              paddingHorizontal: 16,
              shadowColor: "#000000",
              shadowOpacity: 0.05,
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 6,
              elevation: 3,
            }}
          >
            <IconSearch />
            <Text
              style={{
                color: "#8A88A8",
                fontSize: 14,
                lineHeight: 21,
                marginLeft: 11,
                flex: 1,
              }}
            >
              Search jobs, companies, skills...
            </Text>
            <IconFilter />
          </View>
        </View>

        {/* ── Stats row ── */}
        <View style={{ marginHorizontal: 20, marginBottom: 26, marginTop: 18 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* Applied */}
            <View
              style={{
                flex: 1,
                backgroundColor: "#EBF6F7",
                borderRadius: 12,
                paddingVertical: 13,
                alignItems: "center",
                marginRight: 9,
                shadowColor: "#0D5C63",
                shadowOpacity: 0.3,
                shadowOffset: { width: 0, height: 1 },
                shadowRadius: 1,
                elevation: 1,
              }}
            >
              <Text style={{ color: "#0D5C63", fontSize: 20, fontWeight: "700", marginBottom: 7 }}>14</Text>
              <Text style={{ color: "#0D5C63", fontSize: 10 }}>Applied</Text>
            </View>

            {/* Interviews */}
            <View
              style={{
                flex: 1,
                backgroundColor: "#F2EDF5",
                borderRadius: 12,
                paddingVertical: 13,
                alignItems: "center",
                marginRight: 9,
                shadowColor: "#7A6181",
                shadowOpacity: 0.3,
                shadowOffset: { width: 0, height: 1 },
                shadowRadius: 1,
                elevation: 1,
              }}
            >
              <Text style={{ color: "#7A6181", fontSize: 20, fontWeight: "700", marginBottom: 7 }}>5</Text>
              <Text style={{ color: "#7A6181", fontSize: 10 }}>Interviews</Text>
            </View>

            {/* New matches */}
            <View
              style={{
                flex: 1,
                backgroundColor: "#FDF8EE",
                borderRadius: 12,
                paddingVertical: 13,
                alignItems: "center",
                marginRight: 9,
                shadowColor: "#E2B053",
                shadowOpacity: 0.3,
                shadowOffset: { width: 0, height: 1 },
                shadowRadius: 1,
                elevation: 1,
              }}
            >
              <Text style={{ color: "#E2B053", fontSize: 20, fontWeight: "700", marginBottom: 7 }}>47</Text>
              <Text style={{ color: "#E2B053", fontSize: 10 }}>New matches</Text>
            </View>

            {/* Profile */}
            <View
              style={{
                flex: 1,
                backgroundColor: "#F0FDF4",
                borderRadius: 12,
                paddingVertical: 13,
                alignItems: "center",
                shadowColor: "#16A34A",
                shadowOpacity: 0.3,
                shadowOffset: { width: 0, height: 1 },
                shadowRadius: 1,
                elevation: 1,
              }}
            >
              <Text style={{ color: "#16A34A", fontSize: 20, fontWeight: "700", marginBottom: 7 }}>92%</Text>
              <Text style={{ color: "#16A34A", fontSize: 10 }}>Profile</Text>
            </View>
          </View>
        </View>

        {/* ── Content sections ── */}
        <View style={{ marginHorizontal: 20 }}>

          {/* Featured jobs */}
          <View style={{ marginBottom: 26 }}>
            <SectionHeader title="Featured jobs" />
            <JobCard
              title="Senior Product Designer"
              subtitle="Figma · Remote"
              matchPercent="98%"
              salary="$140-160k"
              location="Remote"
              saved={false}
              mb={17}
            />
            <JobCard
              title="Design Systems Lead"
              subtitle="Notion · SF / Remote"
              matchPercent="89%"
              salary="$130-155k"
              location="Remote"
              saved={true}
              mb={17}
            />
            <JobCard
              title="Design Systems Lead"
              subtitle="Notion · SF / Remote"
              matchPercent="89%"
              salary="$130-155k"
              location="Remote"
              saved={true}
              mb={0}
            />
          </View>

          {/* For you — horizontal scroll cards */}
          <View style={{ marginBottom: 26 }}>
            <SectionHeader title="For you" />

            {/* Pagination dots */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[
                { title: "Senior Product Designer", subtitle: "Figma · Remote", matchPercent: "98%", salary: "$140-160k", location: "Remote", saved: false },
                { title: "Design Systems Lead", subtitle: "Notion · SF / Remote", matchPercent: "89%", salary: "$130-155k", location: "Remote", saved: true },
                { title: "Design Systems Lead", subtitle: "Notion · SF / Remote", matchPercent: "89%", salary: "$130-155k", location: "Remote", saved: true },
                { title: "Design Systems Lead", subtitle: "Notion · SF / Remote", matchPercent: "89%", salary: "$130-155k", location: "Remote", saved: true },
              ].map((job, i) => (
                <View key={i} style={{ width: 353, marginRight: 20 }}>
                  <JobCard {...job} mb={0} />
                </View>
              ))}
            </ScrollView>

            {/* Dots indicator */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 18,
                gap: 14,
              }}
            >
              {[true, false, false, false, false].map((active, i) => (
                <View
                  key={i}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: active ? "#0D5C63" : "#0D5C634D",
                  }}
                />
              ))}
            </View>
          </View>

          {/* Browse Categories */}
          <View style={{ marginBottom: 26 }}>
            <SectionHeader title="Browse Categories" />
            <CategoryRow title="Design" count="2k  jobs" iconColor="#7A6181" bgColor="#7A618112" IconComponent={IconPaintbrush} />
            <CategoryRow title="Engineering" count="3k jobs" iconColor="#0D5C63" bgColor="#0D5C6312" IconComponent={IconCode} />
            <CategoryRow title="Technical" count="3k jobs" iconColor="#0D5C63" bgColor="#0D5C6312" IconComponent={IconCode} />
            <CategoryRow title="Analysis Business" count="3k jobs" iconColor="#0D5C63" bgColor="#0D5C6312" IconComponent={IconCode} />
            <CategoryRow title="Operations" count="3k jobs" iconColor="#0D5C63" bgColor="#0D5C6312" IconComponent={IconCode} mb={0} />
          </View>

          {/* Trending */}
          <View style={{ marginBottom: 18 }}>
            {/* Header tab */}
            <View
              style={{
                backgroundColor: "#0D5C63",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 14,
                height: 59,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" style={{ marginRight: 10 }}>
                  <Path d="M12 2L9 9H2L7.5 13.5L5.5 21L12 16.5L18.5 21L16.5 13.5L22 9H15L12 2Z" stroke="#FFFFFF" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                </Svg>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 20,
                    fontWeight: "600",
                    lineHeight: 21,
                  }}
                >
                  Trending
                </Text>
              </View>
              <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                <Path d="M23 4L13 14L9 10L1 18" stroke="#FFFFFF" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                <Path d="M17 4H23V10" stroke="#FFFFFF" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              </Svg>
            </View>

            {/* Leaderboard */}
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                borderWidth: 1,
                borderTopWidth: 0,
                borderColor: "#0D5C6333",
                overflow: "hidden",
              }}
            >
              <TrendingRow rank="1" company="Notion · SF / Remote" views="3.3k  views" rankOpacity={0.8} />
              <TrendingRow rank="2" company="Shopee" views="3.1k  views" rankOpacity={0.4} />
              <TrendingRow rank="3" company="Meta" views="2.3k  views" rankOpacity={0.4} />
              <TrendingRow rank="4" company="Leo Technical" views="2.0k  views" rankOpacity={0.4} />
              <TrendingRow rank="5" company="Notion · SF / Remote" views="1.3k  views" rankOpacity={0.4} isLast />
            </View>
          </View>

          {/* Bottom spacer */}
          <View style={{ height: 16, backgroundColor: "#F9F5F0" }} />
        </View>
      </ScrollView>

      {/* ── Navigation Bar ── */}
      <NavBar activeTab="Home" />
    </SafeAreaView>
  );
}

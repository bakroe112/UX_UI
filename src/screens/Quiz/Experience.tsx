import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Baby, Backpack, Star, Award } from "lucide-react-native";
import StatusBar from "../../components/StatusBar";

export default function QuizExperience({ navigation }: any) {
	const [selectedLevel, setSelectedLevel] = useState<string>("Mid Level");

	const levels = [
		{ id: "Entry Level", title: "Entry Level", years: "0-2 years", icon: Baby, bgColor: "#F3EFE9", iconColor: "#296FCA" },
		{ id: "Mid Level", title: "Mid Level", years: "3-5 years", icon: Backpack, bgColor: "#0D5C6314", iconColor: "#0D5C63" },
		{ id: "Senior", title: "Senior", years: "6-10 years", icon: Star, bgColor: "#F3EFE9", iconColor: "#E05B5B" },
		{ id: "Lead / Principal", title: "Lead / Principal", years: "10+ years", icon: Award, bgColor: "#F3EFE9", iconColor: "#E2B053" },
	];

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#F9F5F0" }} edges={["left", "right"]}>
	
			<ScrollView style={{ flex: 1, backgroundColor: "#F9F5F0", marginTop: 30 }} showsVerticalScrollIndicator={false}>
				{/* Header with progress */}
				<View style={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 18 }}>
					{/* Progress bars */}
					<View style={{ flexDirection: "row", gap: 7, marginBottom: 12 }}>
						<View style={{ flex: 1, height: 3, backgroundColor: "#0D5C63", borderRadius: 2 }} />
						<View style={{ flex: 1, height: 3, backgroundColor: "#0D5C63", borderRadius: 2 }} />
						<View style={{ flex: 1, height: 3, backgroundColor: "#0D5C631F", borderRadius: 2 }} />
						<View style={{ flex: 1, height: 3, backgroundColor: "#0D5C631F", borderRadius: 2 }} />
						<View style={{ flex: 1, height: 3, backgroundColor: "#0D5C631F", borderRadius: 2 }} />
					</View>

					{/* Navigation row */}
					<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
						<TouchableOpacity
							style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: "#0D5C630F", alignItems: "center", justifyContent: "center" }}
							onPress={() => navigation.goBack()}
						>
							<ChevronLeft size={20} color="#000000" />
						</TouchableOpacity>
						<Text style={{ color: "#8A88A8", fontSize: 13, fontWeight: "400", lineHeight: 22.4 }}>
							Step 2 of 5
						</Text>
						<TouchableOpacity onPress={() => navigation.navigate("QuizSkills")}>
							<Text style={{ color: "#8A88A8", fontSize: 14, fontWeight: "500", lineHeight: 22.4 }}>
								Skip
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* Title section */}
				<View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
					<Text style={{ color: "#1A1828", fontSize: 22, fontWeight: "800", lineHeight: 28.6, letterSpacing: -0.6, marginBottom: 9 }}>
						How much experience do you have?
					</Text>
					<Text style={{ color: "#8A88A8", fontSize: 14, fontWeight: "400", lineHeight: 22.4 }}>
						This helps match you with the right seniority level roles.
					</Text>
				</View>

				{/* Experience level cards */}
				<View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
					{levels.map((level) => {
						const isSelected = selectedLevel === level.id;
						const IconComponent = level.icon;

						return (
							<TouchableOpacity
								key={level.id}
								style={{
									height: 86,
									backgroundColor: "#FFFFFF",
									borderRadius: 16,
									borderWidth: isSelected ? 1 : 0,
									borderColor: "#0D5C63",
									flexDirection: "row",
									alignItems: "center",
									paddingHorizontal: 19,
									marginBottom: 12,
								}}
								onPress={() => setSelectedLevel(level.id)}
							>
								{/* Icon */}
								<View style={{ width: 48, height: 48, borderRadius: 14, backgroundColor: level.bgColor, alignItems: "center", justifyContent: "center", marginRight: 17 }}>
									<IconComponent size={20} color={level.iconColor} />
								</View>

								{/* Text */}
								<View style={{ flex: 1 }}>
									<Text style={{ color: isSelected ? "#0D5C63" : "#1A1828", fontSize: 15, fontWeight: "700", lineHeight: 22.4, marginBottom: 0 }}>
										{level.title}
									</Text>
									<Text style={{ color: "#8A88A8", fontSize: 13, fontWeight: "400", lineHeight: 22.4 }}>
										{level.years}
									</Text>
								</View>

								{/* Checkmark */}
								<View style={{ width: 20, height: 20, borderRadius: 39, backgroundColor: isSelected ? "#0D5C63" : "transparent", borderWidth: isSelected ? 0 : 1, borderColor: "#0D5C6312", alignItems: "center", justifyContent: "center" }}>
									{isSelected && (
										<View style={{ width: 10, height: 6, borderLeftWidth: 2, borderBottomWidth: 2, borderColor: "#FFFFFF", transform: [{ rotate: "-45deg" }], marginTop: -2 }} />
									)}
								</View>
							</TouchableOpacity>
						);
					})}
				</View>

				{/* Experience slider */}
				<View style={{ paddingHorizontal: 20, marginBottom: 28 }}>
					<View style={{ height: 86, backgroundColor: "#FFFFFF", borderRadius: 16, borderWidth: 0, paddingHorizontal: 19, paddingVertical: 16 }}>
						<Text style={{ color: "#C5C4D6", fontSize: 12, fontWeight: "400", lineHeight: 18, marginBottom: 16 }}>
							Your experience level
						</Text>

						{/* Slider track */}
						<View style={{ position: "relative", marginBottom: 19 }}>
							{/* Markers */}
							<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
								{["0yr", "2yr", "4yr", "6yr", "8yr", "10+yr"].map((label, index) => (
									<View key={label} style={{ alignItems: "center" }}>
										<View style={{ width: 42, height: 6,borderRadius:10 ,marginRight: 5, backgroundColor: index < 3 ? "#0D5C63" : "#E8E7F0", marginBottom: 1 }} />
										<Text style={{ color: "#C5C4D6", fontSize: 9, fontWeight: "400", lineHeight: 18 }}>
											{label}
										</Text>
									</View>
								))}
							</View>
						</View>
					</View>
				</View>

				{/* Continue button */}
				<View style={{ paddingHorizontal: 21, paddingBottom: 35 }}>
					<TouchableOpacity
						style={{
							alignSelf: "stretch",
							height: 55,
							backgroundColor: "#0D5C63",
							borderRadius: 14,
							alignItems: "center",
							justifyContent: "center",
						}}
						onPress={() => navigation.navigate("QuizSkills")}
					>
						<Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "700", lineHeight: 22.5, letterSpacing: -0.2 }}>
							Continue →
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

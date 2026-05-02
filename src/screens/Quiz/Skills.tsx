import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Plus } from "lucide-react-native";
import StatusBar from "../../components/StatusBar";

export default function QuizSkills({ navigation }: any) {
	const [selectedSkills, setSelectedSkills] = useState<string[]>(["Figma", "Framer", "HTML/CSS", "User Research", "A/B Testing"]);

	const toggleSkill = (skill: string) => {
		if (selectedSkills.includes(skill)) {
			setSelectedSkills(selectedSkills.filter(s => s !== skill));
		} else {
			setSelectedSkills([...selectedSkills, skill]);
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#F9F5F0" }} edges={["left", "right"]}>
			<ScrollView style={{ flex: 1, backgroundColor: "#F9F5F0", marginTop: 30 }} showsVerticalScrollIndicator={false}>
				{/* Header with progress */}
				<View style={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 18 }}>
					{/* Progress bars */}
					<View style={{ flexDirection: "row", gap: 7, marginBottom: 12 }}>
						<View style={{ flex: 1, height: 3, backgroundColor: "#0D5C63", borderRadius: 2 }} />
						<View style={{ flex: 1, height: 3, backgroundColor: "#0D5C63", borderRadius: 2 }} />
						<View style={{ flex: 1, height: 3, backgroundColor: "#0D5C63", borderRadius: 2 }} />
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
							Step 3 of 5
						</Text>
						<TouchableOpacity onPress={() => navigation.navigate("QuizLocation")}>
							<Text style={{ color: "#8A88A8", fontSize: 14, fontWeight: "500", lineHeight: 22.4 }}>
								Skip
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* Title section */}
				<View style={{ paddingHorizontal: 20, marginBottom: 15 }}>
					<Text style={{ color: "#1A1828", fontSize: 22, fontWeight: "800", lineHeight: 28.6, letterSpacing: -0.6, marginBottom: 9 }}>
						Select your top skills
					</Text>
					<Text style={{ color: "#8A88A8", fontSize: 14, fontWeight: "400", lineHeight: 22.4 }}>
						Pick skills you're proficient in. You can always update these later.
					</Text>
				</View>

				{/* Skills sections */}
				<View style={{ paddingHorizontal: 20, marginBottom: 28 }}>
					{/* DESIGN TOOLS */}
					<View style={{ marginBottom: 17 }}>
						<Text style={{ color: "#8A88A8", fontSize: 12, fontWeight: "700", lineHeight: 22.4, marginBottom: 11 }}>
							DESIGN TOOLS
						</Text>
						<View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
							{["Figma", "Sketch", "Framer", "Protopie"].map((skill) => (
								<TouchableOpacity
									key={skill}
									style={{
										height: 32,
										paddingHorizontal: 14,
										backgroundColor: selectedSkills.includes(skill) ? "#0D5C63" : "#FFFFFF",
										borderRadius: 20,
										alignItems: "center",
										justifyContent: "center",
									}}
									onPress={() => toggleSkill(skill)}
								>
									<Text style={{ color: selectedSkills.includes(skill) ? "#FFFFFF" : "#000000", fontSize: 12, fontWeight: "600", lineHeight: 18 }}>
										{skill}
									</Text>
								</TouchableOpacity>
							))}
						</View>
					</View>

					{/* RESEARCH */}
					<View style={{ marginBottom: 17 }}>
						<Text style={{ color: "#8A88A8", fontSize: 12, fontWeight: "700", lineHeight: 22.4, marginBottom: 11 }}>
							RESEARCH
						</Text>
						<View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
							{["User Research", "Usability Testing", "A/B Testing"].map((skill) => (
								<TouchableOpacity
									key={skill}
									style={{
										height: 32,
										paddingHorizontal: 14,
										backgroundColor: selectedSkills.includes(skill) ? "#0D5C63" : "#FFFFFF",
										borderRadius: 20,
										alignItems: "center",
										justifyContent: "center",
									}}
									onPress={() => toggleSkill(skill)}
								>
									<Text style={{ color: selectedSkills.includes(skill) ? "#FFFFFF" : "#4A4868", fontSize: 12, fontWeight: "600", lineHeight: 18 }}>
										{skill}
									</Text>
								</TouchableOpacity>
							))}
						</View>
					</View>

					{/* Dev Knowledge */}
					<View style={{ marginBottom: 17 }}>
						<Text style={{ color: "#8A88A8", fontSize: 12, fontWeight: "700", lineHeight: 18, letterSpacing: 0.8, marginBottom: 11 }}>
							DEV KNOWLEDGE
						</Text>
						<View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
							{["HTML/CSS", "React", "Webflow"].map((skill) => (
								<TouchableOpacity
									key={skill}
									style={{
										height: 32,
										paddingHorizontal: 14,
										backgroundColor: selectedSkills.includes(skill) ? "#0D5C63" : "#FFFFFF",
										borderRadius: 20,
										alignItems: "center",
										justifyContent: "center",
									}}
									onPress={() => toggleSkill(skill)}
								>
									<Text style={{ color: selectedSkills.includes(skill) ? "#FFFFFF" : "#000000", fontSize: 12, fontWeight: "600", lineHeight: 18 }}>
										{skill}
									</Text>
								</TouchableOpacity>
							))}
						</View>
					</View>

					{/* Add custom skill */}
					<View style={{ height: 62, backgroundColor: "#FFFFFF", borderRadius: 16, borderWidth: 1, borderColor: "#0D5C632E", paddingHorizontal: 15, paddingVertical: 15, marginBottom: 17 }}>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<View style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "#D0EAEC", alignItems: "center", justifyContent: "center", marginRight: 14 }}>
								<Plus size={18} color="#0D5C63" />
							</View>
							<Text style={{ color: "#0D5C63", fontSize: 13, fontWeight: "600", lineHeight: 19.5 }}>
								Add a custom skill
							</Text>
						</View>
					</View>

					{/* Skills count */}
					<Text style={{ color: "#8A88A8", fontSize: 13, fontWeight: "400", lineHeight: 19.5, textAlign: "center" }}>
						{selectedSkills.length} skills selected
					</Text>
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
						onPress={() => navigation.navigate("QuizLocation")}
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

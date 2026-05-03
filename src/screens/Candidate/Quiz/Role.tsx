import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, PenTool, Code, ChartNoAxesColumn, Layers, ChartNoAxesCombined, Target } from "lucide-react-native";
import StatusBar from "../../../components/StatusBar";

export default function QuizRole({ navigation }: any) {
	const [selectedRole, setSelectedRole] = useState<string>("Product Design");

	const roles = [
		{ id: "Product Design", label: "Product Design", icon: PenTool, bgColor: "#7A618112", iconColor: "#7A6181" },
		{ id: "Engineering", label: "Engineering", icon: Code, bgColor: "#0D5C6312", iconColor: "#0D5C63" },
		{ id: "Data Analysis", label: "Data Analysis", icon: ChartNoAxesColumn, bgColor: "#E05B5B14", iconColor: "#E05B5B" },
		{ id: "Product Management", label: "Product Management", icon: Layers, bgColor: "#E2B05314", iconColor: "#E2B053" },
		{ id: "Marketing", label: "Marketing", icon: ChartNoAxesCombined, bgColor: "#16A34A14", iconColor: "#16A34A" },
		{ id: "Operations", label: "Operations", icon: Target, bgColor: "#7A618114", iconColor: "#7A6181" },
	];

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#F9F5F0" }} edges={["left", "right"]}>
			<ScrollView style={{ flex: 1, backgroundColor: "#F9F5F0", marginTop: 30 }} showsVerticalScrollIndicator={false}>
				{/* Header with progress */}
				<View style={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 18 }}>
					{/* Progress bars */}
					<View style={{ flexDirection: "row", gap: 7, marginBottom: 12 }}>
						<View style={{ flex: 1, height: 3, backgroundColor: "#0D5C63", borderRadius: 2 }} />
						<View style={{ flex: 1, height: 3, backgroundColor: "#0D5C631F", borderRadius: 2 }} />
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
							Step 1 of 5
						</Text>
						<TouchableOpacity onPress={() => navigation.navigate("QuizExperience")}>
							<Text style={{ color: "#8A88A8", fontSize: 14, fontWeight: "500", lineHeight: 22.4 }}>
								Skip
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* Title section */}
				<View style={{ paddingHorizontal: 20, marginBottom: 28 }}>
					<Text style={{ color: "#1A1828", fontSize: 22, fontWeight: "800", lineHeight: 28.6, letterSpacing: -0.6, marginBottom: 9 }}>
						What's your primary role?
					</Text>
					<Text style={{ color: "#8A88A8", fontSize: 14, fontWeight: "400", lineHeight: 22.4 }}>
						We'll tailor your job feed to match your expertise and career goals.
					</Text>
				</View>

				{/* Role cards grid */}
				<View style={{ paddingHorizontal: 20, marginBottom: 28 }}>
					<View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
						{roles.map((role) => {
							const isSelected = selectedRole === role.id;
							const IconComponent = role.icon;
							
							return (
								<TouchableOpacity
									key={role.id}
									style={{
										width: "48.5%",
										height: 114,
										backgroundColor: "#FFFFFF",
										borderRadius: 16,
										borderWidth: isSelected ? 1 : 0,
										borderColor: isSelected ? role.iconColor : "transparent",
										alignItems: "center",
										justifyContent: "center",
										position: "relative",
										marginBottom: 13,
									}}
									onPress={() => setSelectedRole(role.id)}
								>
									{/* Checkmark */}
									{isSelected && (
										<View style={{ position: "absolute", top: 10, right: 10, width: 20, height: 20, borderRadius: 4, backgroundColor: "#0D5C63", alignItems: "center", justifyContent: "center" }}>
											<View style={{ width: 10, height: 6, borderLeftWidth: 2, borderBottomWidth: 2, borderColor: "#FFFFFF", transform: [{ rotate: "-45deg" }], marginTop: -2 }} />
										</View>
									)}

									{/* Icon */}
									<View style={{ width: 46, height: 46, borderRadius: 14, backgroundColor: role.bgColor, alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
										<IconComponent size={20} color={role.iconColor} />
									</View>

									{/* Label */}
									<Text style={{ color: isSelected ? "#1C1A2E" : "#8A88A8", fontSize: 13, fontWeight: "600", lineHeight: 22.4 }}>
										{role.label}
									</Text>
								</TouchableOpacity>
							);
						})}
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
						onPress={() => navigation.navigate("QuizExperience")}
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

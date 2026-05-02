import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, ChevronRight, CircleDollarSign } from "lucide-react-native";
import StatusBar from "../../components/StatusBar";

export default function QuizSalary({ navigation }: any) {
	const [minSalary, setMinSalary] = useState<number>(120);
	const [maxSalary, setMaxSalary] = useState<number>(180);
	const [onlyShowAboveMin, setOnlyShowAboveMin] = useState<boolean>(true);

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
						<View style={{ flex: 1, height: 3, backgroundColor: "#0D5C63", borderRadius: 2 }} />
						<View style={{ flex: 1, height: 3, backgroundColor: "#0D5C63", borderRadius: 2 }} />
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
							Step 5 of 5
						</Text>
						<TouchableOpacity onPress={() => navigation.navigate("HomeFeed")}>
							<Text style={{ color: "#8A88A8", fontSize: 14, fontWeight: "500", lineHeight: 22.4 }}>
								Skip
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* Title section */}
				<View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
					<Text style={{ color: "#1A1828", fontSize: 20, fontWeight: "800", lineHeight: 28.6, letterSpacing: -0.6, marginBottom: 9 }}>
						What are your salary expectations?
					</Text>
					<Text style={{ color: "#8A88A8", fontSize: 14, fontWeight: "400", lineHeight: 22.4 }}>
						We use this to filter and highlight the best-matching offers.
					</Text>
				</View>

				{/* Salary range card */}
				<View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
					<View style={{ backgroundColor: "#FFFFFF", borderRadius: 16, paddingHorizontal: 27, paddingVertical: 21 }}>
						<Text style={{ color: "#8A88A8", fontSize: 13, fontWeight: "400", lineHeight: 19.5, textAlign: "center", marginBottom: 6 }}>
							Annual Salary Range
						</Text>

						{/* Salary display */}
						<Text style={{ color: "#0D5C63", fontSize: 36, fontWeight: "800", lineHeight: 57, letterSpacing: -1.5, textAlign: "center", marginBottom: -3 }}>
							${minSalary}k — ${maxSalary}k
						</Text>

						<Text style={{ color: "#8A88A8", fontSize: 12, fontWeight: "400", lineHeight: 18, textAlign: "center", marginBottom: 23 }}>
							USD · per year
						</Text>

						{/* Slider */}
						<View style={{ position: "relative", marginBottom: 10 }}>
							{/* Track background */}
							<View style={{ height: 8, backgroundColor: "#0D5C631A", borderRadius: 8 }} />
							
							{/* Active track */}
							<View style={{ position: "absolute", left: "20%", width: "60%", height: 8, backgroundColor: "#0D5C63", borderRadius: 8, top: 0 }} />

							{/* Left handle */}
							<View style={{ position: "absolute", left: "15%", top: -7, width: 22, height: 22, borderRadius: 11, backgroundColor: "#FFFFFF", borderWidth: 2, borderColor: "#0D5C63" }} />

							{/* Right handle */}
							<View style={{ position: "absolute", left: "75%", top: -7, width: 22, height: 22, borderRadius: 11, backgroundColor: "#FFFFFF", borderWidth: 2, borderColor: "#0D5C63" }} />
						</View>

						{/* Labels */}
						<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
							<Text style={{ color: "#8A88A8", fontSize: 12, fontWeight: "400", lineHeight: 18 }}>
								$60k
							</Text>
							<Text style={{ color: "#8A88A8", fontSize: 12, fontWeight: "400", lineHeight: 18 }}>
								$300k+
							</Text>
						</View>
					</View>
				</View>

				{/* Currency selector */}
				<View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
					<TouchableOpacity
						style={{
							height: 68,
							backgroundColor: "#FFFFFF",
							borderRadius: 16,
							flexDirection: "row",
							alignItems: "center",
							paddingHorizontal: 19,
						}}
						onPress={() => {}}
					>
						{/* Icon */}
						<View style={{ width: 43, height: 43, borderRadius: 14, backgroundColor: "#FDF8EE", alignItems: "center", justifyContent: "center", marginRight: 17 }}>
							<CircleDollarSign size={20} color="#E2B053" />
						</View>

						{/* Text */}
						<View style={{ flex: 1 }}>
							<Text style={{ color: "#1C1A2E", fontSize: 15, fontWeight: "600", lineHeight: 22.4 }}>
								Currency
							</Text>
							<Text style={{ color: "#8A88A8", fontSize: 13, fontWeight: "400", lineHeight: 22.4 }}>
								United States Dollar (USD)
							</Text>
						</View>

						{/* Arrow */}
						<ChevronRight size={20} color="#8A88A8" />
					</TouchableOpacity>
				</View>

				{/* Market context */}
				<View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
					<View style={{ backgroundColor: "#EBF6F7", borderRadius: 16, borderWidth: 1, borderColor: "#C8E6E8", paddingHorizontal: 17, paddingVertical: 13 }}>
						<Text style={{ color: "#0D5C63", fontSize: 12, fontWeight: "700", lineHeight: 22.4, marginBottom: 5 }}>
							Market Context · Product Designers · SF
						</Text>

						<View style={{ flexDirection: "row", justifyContent: "space-around" }}>
							{/* P25 */}
							<View style={{ alignItems: "center" }}>
								<Text style={{ color: "#0D5C63", fontSize: 14, fontWeight: "700", lineHeight: 22.4 }}>
									$100k
								</Text>
								<Text style={{ color: "#0D5C63", fontSize: 11, fontWeight: "400", lineHeight: 22.4 }}>
									P25
								</Text>
							</View>

							{/* Median */}
							<View style={{ alignItems: "center" }}>
								<Text style={{ color: "#0D5C63", fontSize: 14, fontWeight: "700", lineHeight: 22.4 }}>
									$145k
								</Text>
								<Text style={{ color: "#0D5C63", fontSize: 11, fontWeight: "400", lineHeight: 22.4 }}>
									Median
								</Text>
							</View>

							{/* P75 */}
							<View style={{ alignItems: "center" }}>
								<Text style={{ color: "#0D5C63", fontSize: 14, fontWeight: "700", lineHeight: 22.4 }}>
									$190k
								</Text>
								<Text style={{ color: "#0D5C63", fontSize: 11, fontWeight: "400", lineHeight: 22.4 }}>
									P75
								</Text>
							</View>
						</View>
					</View>
				</View>

				{/* Checkbox */}
				<View style={{ paddingHorizontal: 20, marginBottom: 28 }}>
					<TouchableOpacity
						style={{ flexDirection: "row", alignItems: "center" }}
						onPress={() => setOnlyShowAboveMin(!onlyShowAboveMin)}
					>
						<View style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: onlyShowAboveMin ? "#0D5C63" : "transparent", borderWidth: onlyShowAboveMin ? 0 : 1, borderColor: "#0D5C6312", alignItems: "center", justifyContent: "center", marginRight: 7 }}>
							{onlyShowAboveMin && (
								<View style={{ width: 10, height: 6, borderLeftWidth: 2, borderBottomWidth: 2, borderColor: "#FFFFFF", transform: [{ rotate: "-45deg" }], marginTop: -2 }} />
							)}
						</View>
						<Text style={{ color: "#4A4868", fontSize: 13, fontWeight: "500", lineHeight: 19.5 }}>
							Only show roles at or above minimum
						</Text>
					</TouchableOpacity>
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
						onPress={() => navigation.navigate("HomeFeed")}
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

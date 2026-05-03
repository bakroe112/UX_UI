import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Backpack, Laptop, Building2, MapPin, X, Search } from "lucide-react-native";
import StatusBar from "../../../components/StatusBar";

export default function QuizLocation({ navigation }: any) {
	const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>(["Remote"]);
	const [selectedLocations, setSelectedLocations] = useState<string[]>(["San Francisco", "New York", "London"]);
	const [useCurrentLocation, setUseCurrentLocation] = useState<boolean>(true);

	const toggleWorkType = (type: string) => {
		if (selectedWorkTypes.includes(type)) {
			setSelectedWorkTypes(selectedWorkTypes.filter(t => t !== type));
		} else {
			setSelectedWorkTypes([...selectedWorkTypes, type]);
		}
	};

	const removeLocation = (location: string) => {
		setSelectedLocations(selectedLocations.filter(l => l !== location));
	};

	const workTypes = [
		{ id: "Remote", title: "Remote", subtitle: "Work from anywhere", icon: Backpack, bgColor: "#0D5C6314", iconColor: "#0D5C63" },
		{ id: "Hybrid", title: "Hybrid", subtitle: "Mix of Home & office", icon: Laptop, bgColor: "#F3EFE9", iconColor: "#4A4868" },
		{ id: "On-site", title: "On-site", subtitle: "Full-time at office", icon: Building2, bgColor: "#F3EFE9", iconColor: "#4A4868" },
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
						<View style={{ flex: 1, height: 3, backgroundColor: "#0D5C63", borderRadius: 2 }} />
						<View style={{ flex: 1, height: 3, backgroundColor: "#0D5C63", borderRadius: 2 }} />
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
							Step 4 of 5
						</Text>
						<TouchableOpacity onPress={() => navigation.navigate("QuizSalary")}>
							<Text style={{ color: "#8A88A8", fontSize: 14, fontWeight: "500", lineHeight: 22.4 }}>
								Skip
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* Title section */}
				<View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
					<Text style={{ color: "#1A1828", fontSize: 22, fontWeight: "800", lineHeight: 28.6, letterSpacing: -0.6, marginBottom: 5 }}>
						Where do you prefer to work?
					</Text>
					<Text style={{ color: "#8A88A8", fontSize: 14, fontWeight: "400", lineHeight: 22.4 }}>
						Choose your ideal work arrangement.
					</Text>
				</View>

				{/* Work type cards */}
				<View style={{ paddingHorizontal: 20, marginBottom: 5 }}>
					{workTypes.map((type) => {
						const isSelected = selectedWorkTypes.includes(type.id);
						const IconComponent = type.icon;

						return (
							<TouchableOpacity
								key={type.id}
								style={{
									height: 76,
									backgroundColor: "#FFFFFF",
									borderRadius: 16,
									borderWidth: isSelected ? 1 : 0,
									borderColor: "#0D5C63",
									flexDirection: "row",
									alignItems: "center",
									paddingHorizontal: 17,
									marginBottom: 10,
								}}
								onPress={() => toggleWorkType(type.id)}
							>
								{/* Icon */}
								<View style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: type.bgColor, alignItems: "center", justifyContent: "center", marginRight: 15 }}>
									<IconComponent size={18} color={type.iconColor} />
								</View>

								{/* Text */}
								<View style={{ flex: 1 }}>
									<Text style={{ color: isSelected ? "#0D5C63" : "#1C1A2E", fontSize: 14, fontWeight: "700", lineHeight: 21, marginBottom: 0 }}>
										{type.title}
									</Text>
									<Text style={{ color: "#8A88A8", fontSize: 12, fontWeight: "400", lineHeight: 20 }}>
										{type.subtitle}
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

				{/* Preferred locations */}
				<View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
					<View style={{ backgroundColor: "#FFFFFF", borderRadius: 16, padding: 19 }}>
						<Text style={{ color: "#4A4868", fontSize: 12, fontWeight: "600", lineHeight: 22.4, marginBottom: 8 }}>
							Preferred Location(s)
						</Text>

						{/* Location chips */}
						<View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
							{selectedLocations.map((location) => (
								<View key={location} style={{ height: 32, backgroundColor: "#EBF6F7", borderRadius: 20, borderWidth: 1, borderColor: "#C8E6E8", paddingHorizontal: 14, paddingVertical: 7, flexDirection: "row", alignItems: "center", gap: 3 }}>
									<MapPin size={12} color="#0D5C63" />
									<Text style={{ color: "#0D5C63", fontSize: 12, fontWeight: "600", lineHeight: 18 }}>
										{location}
									</Text>
									<TouchableOpacity onPress={() => removeLocation(location)}>
										<X size={13} color="#0D5C63" />
									</TouchableOpacity>
								</View>
							))}
						</View>

						{/* Search input */}
						<View style={{ height: 39, backgroundColor: "#F3EFE9", borderRadius: 10, paddingHorizontal: 11, flexDirection: "row", alignItems: "center" }}>
							<Search size={14} color="#8A88A8" />
							<Text style={{ color: "#8A88A8", fontSize: 13, fontWeight: "400", lineHeight: 19.5, marginLeft: 10 }}>
								Add a city or country...
							</Text>
						</View>
					</View>
				</View>

				{/* Use current location */}
				<View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
					<TouchableOpacity
						style={{
							height: 68,
							backgroundColor: "#FFFFFF",
							borderRadius: 16,
							flexDirection: "row",
							alignItems: "center",
							paddingHorizontal: 19,
						}}
						onPress={() => setUseCurrentLocation(!useCurrentLocation)}
					>
						{/* Icon */}
						<View style={{ width: 43, height: 43, borderRadius: 14, backgroundColor: "#FDF8EE", alignItems: "center", justifyContent: "center", marginRight: 17 }}>
							<MapPin size={20} color="#E2B053" />
						</View>

						{/* Text */}
						<View style={{ flex: 1 }}>
							<Text style={{ color: "#1C1A2E", fontSize: 15, fontWeight: "600", lineHeight: 22.4 }}>
								Use my current location
							</Text>
							<Text style={{ color: "#8A88A8", fontSize: 13, fontWeight: "400", lineHeight: 22.4 }}>
								San Francisco, CA
							</Text>
						</View>

						{/* Toggle */}
						<View style={{ width: 43, height: 26, backgroundColor: useCurrentLocation ? "#0D5C63" : "#E5E5E5", borderRadius: 30, padding: 2, alignItems: useCurrentLocation ? "flex-end" : "flex-start", justifyContent: "center" }}>
							<View style={{ width: 18, height: 18, borderRadius: 39, backgroundColor: "#FFFFFF" }} />
						</View>
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
						onPress={() => navigation.navigate("QuizSalary")}
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

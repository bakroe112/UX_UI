import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Search, SlidersVertical, Heart, MapPin, List, Map, Atom, X } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatusBar from "../../../components/StatusBar";

export default function SearchList({ navigation }: any) {
	const [viewMode, setViewMode] = useState<"list" | "map">("list");

	const activeFilters = [
		{ id: 1, label: "Remote" },
		{ id: 2, label: "$120k+" },
		{ id: 3, label: "Senior" }
	];

	const jobs = Array(6).fill({
		title: "Sr. Product Designer",
		company: "Figma",
		type: "Remote",
		location: "Remote",
		salary: "$140–180k",
		match: "96%",
		isNew: true
	});

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#F9F5F0" }} edges={["left", "right"]}>
			<StatusBar />

			<View style={{ flex: 1, backgroundColor: "#F9F5F0" }}>
				{/* Header with search bar */}
				<View style={{ backgroundColor: "#FFFFFF", paddingBottom: 13 }}>
					<View style={{ height: 68, paddingHorizontal: 21, paddingTop: 17 }}>
						<View style={{ flexDirection: "row", alignItems: "center", gap: 11 }}>
							{/* Back button */}
							<TouchableOpacity
								style={{ width: 33, height: 33, borderRadius: 11, backgroundColor: "#F3EFE9", alignItems: "center", justifyContent: "center" }}
								onPress={() => navigation.navigate("SearchBefore")}
							>
								<ChevronLeft size={18} color="#4A4868" />
							</TouchableOpacity>

							{/* Search input */}
							<View style={{
								flex: 1, height: 35, backgroundColor: "#FFFFFF", borderRadius: 14, paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between", shadowColor: "#000000",
								shadowOffset: { width: 0, height: 2 },
								shadowOpacity: 0.08,
								shadowRadius: 4,
								elevation: 0.4
							}}>
								<View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
									<Search size={16} color="#8A88A8" />
									<Text style={{ color: "#1A1828", fontSize: 14, fontWeight: "600", lineHeight: 21, marginLeft: 12 }}>
										Product Designer
									</Text>
								</View>
								<TouchableOpacity>
									<SlidersVertical size={16} color="#0D5C63" />
								</TouchableOpacity>
							</View>
						</View>
					</View>

					{/* Filter chips */}
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						style={{ paddingHorizontal: 21 }}
						contentContainerStyle={{ gap: 5 }}
					>
						{activeFilters.map((filter) => (
							<View
								key={filter.id}
								style={{
									height: 30,
									paddingHorizontal: 12,
									backgroundColor: "#0D5C63",
									borderRadius: 18,
									flexDirection: "row",
									alignItems: "center",
									gap: 4
								}}
							>
								<Text style={{ color: "#FFFFFF", fontSize: 12, fontWeight: "600", lineHeight: 18 }}>
									{filter.label}
								</Text>
								<X size={10} color="#FFFFFF" />
							</View>
						))}
						<View
							style={{
								height: 30,
								paddingHorizontal: 12,
								backgroundColor: "#F3EFE9",
								borderRadius: 18,
								borderWidth: 1,
								borderColor: "#0D5C6312",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center"
							}}
						>
							<Text style={{ color: "#1C1A2E", fontSize: 12, fontWeight: "600", lineHeight: 18 }}>
								Design
							</Text>
						</View>
					</ScrollView>
				</View>

				{/* Results header */}
				<View style={{ paddingHorizontal: 20, paddingTop: 13, paddingBottom: 13 }}>
					<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
						<Text style={{ color: "#8A88A8", fontSize: 13, lineHeight: 19.5 }}>
							<Text>
								<Text style={{ fontWeight: "bold", color:"#1A1828" }}>247</Text>
								<Text style={{ fontWeight: "400" }}> results · Best match</Text>
							</Text>
						</Text>

						{/* View toggle */}
						<View style={{ flexDirection: "row", gap: 10 }}>
							<TouchableOpacity
								style={{
									width: 30,
									height: 30,
									borderRadius: 5,
									backgroundColor: viewMode === "list" ? "#0D5C63" : "#F3EFE9",
									alignItems: "center",
									justifyContent: "center"
								}}
								onPress={() => setViewMode("list")}
							>
								<List size={16} color={viewMode === "list" ? "#FFFFFF" : "#0D5C63"} />
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									width: 30,
									height: 30,
									borderRadius: 5,
									backgroundColor: viewMode === "map" ? "#0D5C63" : "#F3EFE9",
									alignItems: "center",
									justifyContent: "center"
								}}
								onPress={() => setViewMode("map")}
							>
								<Map size={16} color={viewMode === "map" ? "#FFFFFF" : "#0D5C63"} />
							</TouchableOpacity>
						</View>
					</View>
				</View>

				{/* Job list */}
				<ScrollView
					style={{ flex: 1 }}
					contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
					showsVerticalScrollIndicator={false}
				>
					{jobs.map((job, index) => (
						<TouchableOpacity
							key={index}
							style={{
								height: 122,
								backgroundColor: "#FFFFFF",
								borderRadius: 16,
								paddingHorizontal: 12,
								paddingVertical: 12,
								marginBottom: 12
							}}
							onPress={() => navigation.navigate("JobDetail")}
						>
							{/* Company logo */}
							<View style={{ flexDirection: "row" }}>
								<View
									style={{
										width: 46,
										height: 46,
										borderRadius: 13,
										backgroundColor: "#7A618112",
										borderWidth: 1,
										borderColor: "#7A618121",
										alignItems: "center",
										justifyContent: "center",
										marginRight: 13
									}}
								>
									<Atom size={20} color="#7A6181" />
								</View>

								{/* Job info */}
								<View style={{ flex: 1 }}>
									<Text style={{ color: "#1A1828", fontSize: 14, fontWeight: "700", lineHeight: 18.2, marginBottom: 3 }}>
										{job.title}
									</Text>
									<Text style={{ color: "#8A88A8", fontSize: 12, fontWeight: "400", lineHeight: 18 }}>
										{job.company}
									</Text>
								</View>

								{/* Heart icon */}
								{index === 0 ? (
									<View style={{ position: "absolute", right: 0, top: 0 }}>
										<View
											style={{
												height: 21,
												paddingHorizontal: 9.5,
												backgroundColor: "#EBF6F7",
												borderRadius: 22,
												alignItems: "center",
												justifyContent: "center"
											}}
										>
											<Text style={{ color: "#0D5C63", fontSize: 10, fontWeight: "700", lineHeight: 15 }}>
												NEW
											</Text>
										</View>
									</View>
								) : (
									<TouchableOpacity style={{ position: "absolute", right: 0, top: 0 }}>
										<Heart size={16} color="#8A88A8" />
									</TouchableOpacity>
								)}
							</View>

							{/* Tags and salary */}
							<View style={{ flexDirection: "row", alignItems: "center", marginTop: 8, marginLeft: 59 }}>
								<View
									style={{
										height: 22,
										paddingHorizontal: 12,
										backgroundColor: "#EBF6F7",
										borderRadius: 21,
										alignItems: "center",
										justifyContent: "center",
										marginRight: 5
									}}
								>
									<Text style={{ color: "#0D5C63", fontSize: 11, fontWeight: "600", lineHeight: 18 }}>
										{job.type}
									</Text>
								</View>

								<View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
									<MapPin size={12} color="#8A88A8" />
									<Text style={{ color: "#8A88A8", fontSize: 11, fontWeight: "400", lineHeight: 16.5, marginLeft: 4 }}>
										{job.location}
									</Text>
								</View>

								<Text style={{ color: "#1A1828", fontSize: 13, fontWeight: "700", lineHeight: 19.5, marginLeft: "auto" }}>
									{job.salary}
								</Text>
							</View>

							{/* Match percentage */}
							<View style={{ flexDirection: "row", alignItems: "center", marginTop: 8, marginLeft: 47 }}>
								<View style={{ flex: 1, position: "relative", height: 1, marginRight: 13 }}>
									{/* Background bar */}
									<View style={{ position: "absolute", width: "100%", height: 3, backgroundColor: "#0D5C631A",borderRadius:10 }} />
									{/* Progress bar with gradient */}
									<LinearGradient
										colors={["#0D5C63", "#4AACB5"]}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 0 }}
										style={{ position: "absolute", width: job.match, height: 3, borderRadius:10 }}
									/>
								</View>
								<Text style={{ color: "#0D5C63", fontSize: 11, fontWeight: "700", lineHeight: 16.5 }}>
									{job.match}
								</Text>
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Search, SlidersVertical, Clock, X, TrendingUp, PenTool, Code, ChartNoAxesColumn, TrendingUpIcon, UsersRound, BadgeDollarSign } from "lucide-react-native";
import StatusBar from "../../components/StatusBar";
import NavBar from "../../components/NavBar";

export default function SearchBefore({ navigation }: any) {
	const recentSearches = [
		"Senior Product Designer",
		"Design Systems Lead",
		"UX Researcher at Stripe"
	];

	const trendingSearches = [
		{ title: "AI Product Manager", jobs: "2.4k jobs" },
		{ title: "Design Engineer", jobs: "1.8k jobs" },
		{ title: "Staff Designer", jobs: "1.2k jobs" }
	];

	const categories = [
		{ id: 1, title: "Design", icon: PenTool, bgColor: "#F2EDF5", iconColor: "#7A6181" },
		{ id: 2, title: "Engineering", icon: Code, bgColor: "#EBF6F7", iconColor: "#0D5C63" },
		{ id: 3, title: "Product", icon: ChartNoAxesColumn, bgColor: "#EBF6F7", iconColor: "#1A7A83" },
		{ id: 4, title: "Marketing", icon: TrendingUpIcon, bgColor: "#FEF2F2", iconColor: "#E05B5B" },
		{ id: 5, title: "HR & People", icon: UsersRound, bgColor: "#FDF8EE", iconColor: "#E2B053" },
		{ id: 6, title: "Finance", icon: BadgeDollarSign, bgColor: "#F0FDF4", iconColor: "#16A34A" }
	];

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#F9F5F0" }} edges={["left", "right"]}>
			<StatusBar />
			
			<ScrollView style={{ flex: 1, backgroundColor: "#F9F5F0" }} showsVerticalScrollIndicator={false}>
				{/* Header with search bar */}
				<View style={{ height: 68, backgroundColor: "#FFFFFF", paddingHorizontal: 21, paddingTop: 17 }}>
					<View style={{ flexDirection: "row", alignItems: "center", gap: 11 }}>
						{/* Back button */}
						<TouchableOpacity
							style={{ width: 33, height: 33, borderRadius: 11, backgroundColor: "#F3EFE9", alignItems: "center", justifyContent: "center" }}
							onPress={() => navigation.goBack()}
						>
							<ChevronLeft size={18} color="#4A4868" />
						</TouchableOpacity>

						{/* Search input */}
						<View style={{ 
							flex: 1, 
							height: 35, 
							backgroundColor: "#FFFFFF", 
							borderRadius: 12, 
							paddingHorizontal: 16, 
							flexDirection: "row", 
							alignItems: "center", 
							justifyContent: "space-between",
							shadowColor: "#000000",
							shadowOffset: { width: 0, height: 2 },
							shadowOpacity: 0.08,
							shadowRadius: 4,
							elevation: 0.4
						}}>
							<View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
								<Search size={16} color="#8A88A8" />
								<Text style={{ color: "#8A88A8", fontSize: 13, fontWeight: "400", lineHeight: 21, marginLeft: 6 }}>
									Search jobs, companies, skills...
								</Text>
							</View>
							<TouchableOpacity onPress={() => navigation.navigate("SearchList")}>
								<SlidersVertical size={16} color="#0D5C63" />
							</TouchableOpacity>
						</View>
					</View>
				</View>

				{/* Content */}
				<View style={{ paddingHorizontal: 21, paddingTop: 21 }}>
					{/* Recent searches */}
					<View style={{ marginBottom: 21 }}>
						<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
							<Text style={{ color: "#1A1828", fontSize: 13, fontWeight: "700", lineHeight: 19.5 }}>
								Recent
							</Text>
							<TouchableOpacity>
								<Text style={{ color: "#0D5C63", fontSize: 12, fontWeight: "400", lineHeight: 19.5 }}>
									Clear all
								</Text>
							</TouchableOpacity>
						</View>

						{recentSearches.map((search, index) => (
							<TouchableOpacity
								key={index}
								style={{
									height: 40,
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
									borderBottomWidth: 1,
									borderBottomColor: "#0D5C6312"
								}}
							>
								<View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
									<Clock size={16} color="#8A88A8" />
									<Text style={{ color: "#4A4868", fontSize: 13, fontWeight: "400", lineHeight: 19.5, marginLeft: 12 }}>
										{search}
									</Text>
								</View>
								<X size={16} color="#8A88A8" />
							</TouchableOpacity>
						))}
					</View>

					{/* Trending searches */}
					<View style={{ marginBottom: 21 }}>
						<View style={{ marginBottom: 16 }}>
							<Text style={{ color: "#1A1828", fontSize: 13, fontWeight: "700", lineHeight: 19.5 }}>
								Trending searches
							</Text>
						</View>

						{trendingSearches.map((item, index) => (
							<TouchableOpacity
								key={index}
								style={{
									height: 40,
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
									borderBottomWidth: 1,
									borderBottomColor: "#0D5C6312"
								}}
							>
								<View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
									<TrendingUp size={16} color="#0D5C63" />
									<Text style={{ color: "#4A4868", fontSize: 13, fontWeight: "400", lineHeight: 19.5, marginLeft: 12 }}>
										{item.title}
									</Text>
								</View>
								<Text style={{ color: "#8A88A8", fontSize: 11, fontWeight: "400", lineHeight: 19.5 }}>
									{item.jobs}
								</Text>
							</TouchableOpacity>
						))}
					</View>

					{/* Categories */}
					<View style={{ marginBottom: 21 }}>
						<View style={{ marginBottom: 16 }}>
							<Text style={{ color: "#1A1828", fontSize: 13, fontWeight: "700", lineHeight: 19.5 }}>
								Browse by Category
							</Text>
						</View>

						{/* First row */}
						<View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 17, gap: 10 }}>
							{categories.slice(0, 3).map((category) => {
								const IconComponent = category.icon;
								return (
									<TouchableOpacity
										key={category.id}
										style={{
											width: 100,
											height: 70,
											backgroundColor: category.bgColor,
											borderRadius: 12,
											alignItems: "center",
											justifyContent: "center",
											shadowColor: category.iconColor,
											shadowOffset: { width: 0, height: 4 },
											shadowOpacity: 0.15,
											shadowRadius: 8,
											elevation: 4
										}}
									>
										<IconComponent size={20} color={category.iconColor} />
										<Text style={{ color: category.iconColor, fontSize: 10, fontWeight: "600", marginTop: 5 }}>
											{category.title}
										</Text>
									</TouchableOpacity>
								);
							})}
						</View>

						{/* Second row */}
						<View style={{ flexDirection: "row", justifyContent: "space-between", gap:10 }}>
							{categories.slice(3, 6).map((category) => {
								const IconComponent = category.icon;
								return (
									<TouchableOpacity
										key={category.id}
										style={{
											width: 100,
											height: 70,
											backgroundColor: category.bgColor,
											borderRadius: 12,
											alignItems: "center",
											justifyContent: "center",
											shadowColor: category.iconColor,
											shadowOffset: { width: 0, height: 4 },
											shadowOpacity: 0.15,
											shadowRadius: 8,
											elevation: 4
										}}
									>
										<IconComponent size={20} color={category.iconColor} />
										<Text style={{ color: category.iconColor, fontSize: 10, fontWeight: "600", marginTop: 5 }}>
											{category.title}
										</Text>
									</TouchableOpacity>
								);
							})}
						</View>
					</View>
				</View>
			</ScrollView>

			{/* Bottom Navigation */}
			<NavBar 
				activeTab="Search" 
				onTabPress={(tab) => {
					if (tab === "Home") navigation.navigate("HomeFeed");
					else if (tab === "Search") navigation.navigate("SearchBefore");
					else if (tab === "Applied") navigation.navigate("TrackerAll");
				}} 
			/>
		</SafeAreaView>
	);
}

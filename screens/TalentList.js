import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Search, Filter } from "lucide-react-native";
import Navigation from "../components/Navigation";

export default function TalentList({ navigation }) {
	const [activeTab, setActiveTab] = useState("Screening");
	const [activeFilter, setActiveFilter] = useState("All");

	const handleNavigate = (screen) => {
		const screenMap = {
			dashboard: "MainDashboard",
			active: "JobListingActive",
			draft: "JobListingDraft",
			talent: "TalentList",
			inbox: "InboxPage",
			analytics: "AnalyticsOverview",
		};

		const route = screenMap[screen];
		if (route) {
			navigation.navigate(route);
		} else {
			console.log("Screen not found:", screen);
		}
	};

	const renderStatusBar = () => (
		<View style={styles.statusBar}>
			<Text style={styles.timeText}></Text>
			<View style={styles.statusIcons}>
				{/* Status icons would go here */}
			</View>
		</View>
	);

	const renderHeader = () => (
		<View style={styles.header}>
			<View style={styles.headerContent}>
				<Text style={styles.jobTitle}>Sr. Product Designer</Text>
				<Text style={styles.candidateCount}>
					{activeTab === "Hired" ? "4 candidates" : "34 candidates"}
				</Text>
			</View>
			<View style={styles.headerIcons}>
				<TouchableOpacity style={styles.iconButton}>
					<Search size={20} color="#7a6181" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconButton}>
					<Filter size={20} color="#7a6181" />
				</TouchableOpacity>
			</View>
		</View>
	);

	const renderTabs = () => (
		<View style={styles.tabContainer}>
			{["New", "Screening", "Interview", "Offer", "Hired"].map((tab) => (
				<TouchableOpacity
					key={tab}
					style={[
						styles.tab,
						activeTab === tab && styles.activeTab
					]}
					onPress={() => setActiveTab(tab)}
				>
					<Text style={[
						styles.tabText,
						activeTab === tab && styles.activeTabText
					]}>
						{tab}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);

	const renderScreeningFilters = () => (
		<View style={styles.filterContainer}>
			{["All", "Portfolio", "Questionnaire", "AI 80%+"].map((filter) => (
				<TouchableOpacity
					key={filter}
					style={[
						styles.filterButton,
						activeFilter === filter && styles.activeFilterButton
					]}
					onPress={() => setActiveFilter(filter)}
				>
					<Text style={[
						styles.filterText,
						activeFilter === filter && styles.activeFilterText
					]}>
						{filter}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);

	const renderScreeningCandidate = (candidate) => (
		<View key={candidate.id} style={styles.candidateCard}>
			<View style={styles.candidateInfo}>
				<View style={styles.candidateHeader}>
					<View style={[styles.avatar, { backgroundColor: candidate.avatarBg }]}>
						<Text style={[styles.avatarText, { color: candidate.avatarColor }]}>
							{candidate.initial}
						</Text>
					</View>
					<View style={styles.candidateDetails}>
						<Text style={styles.candidateName}>{candidate.name}</Text>
						<View style={styles.candidateSubInfo}>
							<Text style={styles.candidateRole}>{candidate.role}</Text>
							<View style={styles.dot} />
							<Text style={styles.candidateExperience}>{candidate.experience}</Text>
						</View>
					</View>
				</View>
				<View style={styles.candidateStats}>
					<View style={styles.matchScore}>
						<Text style={styles.matchScoreText}>{candidate.matchScore}</Text>
					</View>
					<View style={styles.statusBadge}>
						<Text style={styles.statusBadgeText}>Screening</Text>
					</View>
				</View>
			</View>
			{candidate.showScreeningStatus && (
				<View style={styles.screeningStatus}>
					<Text style={styles.screeningStatusTitle}>Screening status</Text>
					<View style={styles.screeningItems}>
						<View style={styles.screeningItem}>
							<View style={[styles.checkIcon, styles.completedCheck]} />
							<Text style={styles.screeningItemText}>Questionnaire</Text>
						</View>
						<View style={styles.screeningItem}>
							<View style={[styles.checkIcon, styles.completedCheck]} />
							<Text style={styles.screeningItemText}>Portfolio reviewed</Text>
						</View>
						<View style={styles.screeningItem}>
							<View style={styles.checkIcon} />
							<Text style={[styles.screeningItemText, styles.pendingText]}>Phone screen</Text>
						</View>
					</View>
					<View style={styles.actionButtons}>
						<TouchableOpacity style={styles.primaryButton}>
							<Text style={styles.primaryButtonText}>Move to Interview</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.secondaryButton}>
							<Text style={styles.secondaryButtonText}>Reject</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</View>
	);

	const renderInterviewBanner = () => (
		<View style={styles.interviewBanner}>
			<Text style={styles.interviewBannerText}>5 interviews scheduled this week</Text>
		</View>
	);

	const renderInterviewCandidate = (candidate) => (
		<View key={candidate.id} style={styles.candidateCard}>
			<View style={styles.candidateInfo}>
				<View style={styles.candidateHeader}>
					<View style={[styles.avatar, { backgroundColor: candidate.avatarBg }]}>
						<Text style={[styles.avatarText, { color: candidate.avatarColor }]}>
							{candidate.initial}
						</Text>
					</View>
					<View style={styles.candidateDetails}>
						<Text style={styles.candidateName}>{candidate.name}</Text>
						<Text style={styles.candidateRole}>{candidate.role}</Text>
					</View>
				</View>
				<View style={styles.matchScore}>
					<Text style={styles.matchScoreText}>{candidate.matchScore}</Text>
				</View>
			</View>
			<View style={styles.interviewDetails}>
				<Text style={styles.interviewType}>{candidate.interviewType}</Text>
				<View style={styles.dot} />
				<Text style={styles.interviewTime}>{candidate.interviewTime}</Text>
			</View>
			<View style={styles.actionButtons}>
				<TouchableOpacity style={styles.primaryButton}>
					<Text style={styles.primaryButtonText}>View Scorecard</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.secondaryButton}>
					<Text style={styles.secondaryButtonText}>Reschedule</Text>
				</TouchableOpacity>
			</View>
		</View>
	);

	const renderOfferCandidate = (candidate) => (
		<View key={candidate.id} style={styles.candidateCard}>
			<View style={styles.candidateInfo}>
				<View style={styles.candidateHeader}>
					<View style={[styles.avatar, { backgroundColor: candidate.avatarBg }]}>
						<Text style={[styles.avatarText, { color: candidate.avatarColor }]}>
							{candidate.initial}
						</Text>
					</View>
					<View style={styles.candidateDetails}>
						<Text style={styles.candidateName}>{candidate.name}</Text>
						<View style={styles.offerDetails}>
							<Text style={styles.salary}>{candidate.salary}</Text>
							<Text style={styles.location}>{candidate.location}</Text>
							<Text style={styles.startDate}>{candidate.startDate}</Text>
						</View>
					</View>
				</View>
				<View style={styles.offerStatus}>
					<View style={[styles.statusBadge, { backgroundColor: candidate.statusBg }]}>
						<Text style={[styles.statusBadgeText, { color: candidate.statusColor }]}>
							{candidate.status}
						</Text>
					</View>
					{candidate.expiry && (
						<Text style={styles.expiryText}>{candidate.expiry}</Text>
					)}
				</View>
			</View>
		</View>
	);

	const renderHiredCandidate = (candidate) => (
		<View key={candidate.id} style={styles.candidateCard}>
			<View style={styles.candidateInfo}>
				<View style={styles.candidateHeader}>
					<View style={[styles.avatar, { backgroundColor: candidate.avatarBg }]}>
						<Text style={[styles.avatarText, { color: candidate.avatarColor }]}>
							{candidate.initial}
						</Text>
					</View>
					<View style={styles.candidateDetails}>
						<Text style={styles.candidateName}>{candidate.name}</Text>
						<Text style={styles.startDate}>{candidate.startDate}</Text>
					</View>
				</View>
				<View style={styles.statusBadge}>
					<Text style={styles.statusBadgeText}>Hired</Text>
				</View>
			</View>
		</View>
	);

	const renderSearchBar = () => (
		<View style={styles.searchContainer}>
			<View style={styles.searchBar}>
				<Text style={styles.searchPlaceholder}>Search applicants...</Text>
			</View>
		</View>
	);

	const renderNewHeader = () => (
		<View style={styles.newHeader}>
			<Text style={styles.newHeaderText}>34 new • Sorted by match score</Text>
			<TouchableOpacity style={styles.selectButton}>
				<Text style={styles.selectButtonText}>Select</Text>
			</TouchableOpacity>
		</View>
	);

	const renderNewCandidate = (candidate) => (
		<View key={candidate.id} style={styles.candidateCard}>
			<View style={styles.candidateInfo}>
				<View style={styles.candidateHeader}>
					<View style={[styles.avatar, { backgroundColor: candidate.avatarBg }]}>
						<Text style={[styles.avatarText, { color: candidate.avatarColor }]}>
							{candidate.initial}
						</Text>
					</View>
					<View style={styles.candidateDetails}>
						<Text style={styles.candidateName}>{candidate.name}</Text>
						<View style={styles.candidateSubInfo}>
							<Text style={styles.candidateRole}>{candidate.role}</Text>
							<View style={styles.dot} />
							<Text style={styles.candidateExperience}>{candidate.experience}</Text>
						</View>
					</View>
				</View>
				<View style={styles.candidateStats}>
					<View style={styles.matchScore}>
						<Text style={styles.matchScoreText}>{candidate.matchScore}</Text>
					</View>
					<View style={styles.newStatusBadge}>
						<Text style={styles.newStatusBadgeText}>New</Text>
					</View>
				</View>
			</View>
		</View>
	);

	const renderContent = () => {
		switch (activeTab) {
			case "New":
				const newCandidates = [
					{
						id: 1,
						name: "Sarah Johnson",
						role: "Sr. Product Designer",
						experience: "6 yrs",
						matchScore: "96%",
						initial: "S",
						avatarBg: "#f4f2f5",
						avatarColor: "#7a6181"
					},
					{
						id: 2,
						name: "Ana Costa",
						role: "Design System Lead",
						experience: "7 yrs",
						matchScore: "84%",
						initial: "A",
						avatarBg: "#fcf8ef",
						avatarColor: "#e2b053"
					},
					{
						id: 3,
						name: "James Park",
						role: "UX Designer",
						experience: "5 yrs",
						matchScore: "79%",
						initial: "J",
						avatarBg: "#f0f1fb",
						avatarColor: "#6c77d6"
					},
					{
						id: 4,
						name: "Marcus Chen",
						role: "Product Designer",
						experience: "4 yrs",
						matchScore: "75%",
						initial: "M",
						avatarBg: "#e8f0f0",
						avatarColor: "#0d5c63"
					}
				];

				return (
					<View style={styles.content}>
						{renderSearchBar()}
						{renderNewHeader()}
						{newCandidates.map(renderNewCandidate)}
					</View>
				);

			case "Screening":
				const screeningCandidates = [
					{
						id: 1,
						name: "Sarah Johnson",
						role: "Sr. Product Designer",
						experience: "6 yrs",
						matchScore: "96%",
						initial: "S",
						avatarBg: "#f4f2f5",
						avatarColor: "#7a6181",
						showScreeningStatus: true
					},
					{
						id: 2,
						name: "Ana Costa",
						role: "Design System Lead",
						experience: "7 yrs",
						matchScore: "84%",
						initial: "A",
						avatarBg: "#fcf8ef",
						avatarColor: "#e2b053"
					},
					{
						id: 3,
						name: "James Park",
						role: "UX Designer",
						experience: "5 yrs",
						matchScore: "79%",
						initial: "J",
						avatarBg: "#f0f1fb",
						avatarColor: "#6c77d6"
					}
				];

				return (
					<View style={styles.content}>
						{renderScreeningFilters()}
						{screeningCandidates.map(renderScreeningCandidate)}
					</View>
				);

			case "Interview":
				const interviewCandidates = [
					{
						id: 1,
						name: "Sarah Johnson",
						role: "Sr. Product Designer",
						matchScore: "96%",
						initial: "S",
						avatarBg: "#f4f2f5",
						avatarColor: "#7a6181",
						interviewType: "Technical Round 2",
						interviewTime: "Tomorrow 2:00 PM"
					},
					{
						id: 2,
						name: "Ana Costa",
						role: "Design System Lead",
						matchScore: "84%",
						initial: "A",
						avatarBg: "#f4f2f5",
						avatarColor: "#7a6181",
						interviewType: "Portfolio Round",
						interviewTime: "Apr 8 4:00 PM"
					},
					{
						id: 3,
						name: "David Lee",
						role: "Senior Designer Lead",
						matchScore: "80%",
						initial: "A",
						avatarBg: "#f4f2f5",
						avatarColor: "#7a6181",
						interviewType: "Final Round",
						interviewTime: "Apr 11 10:00 AM"
					}
				];

				return (
					<View style={styles.content}>
						{renderInterviewBanner()}
						{interviewCandidates.map(renderInterviewCandidate)}
					</View>
				);

			case "Offer":
				const offerCandidates = [
					{
						id: 1,
						name: "Sarah Johnson",
						salary: "$155k",
						location: "Remote",
						startDate: "May 1",
						status: "Pending",
						statusBg: "#fdf8ee",
						statusColor: "#e2b053",
						expiry: "Exp. 3d",
						initial: "S",
						avatarBg: "#f4f2f5",
						avatarColor: "#7a6181"
					},
					{
						id: 2,
						name: "Marcus Chen",
						salary: "$145k",
						location: "SF",
						startDate: "May 15",
						status: "Accepted",
						statusBg: "#f0fdf4",
						statusColor: "#16a34a",
						initial: "M",
						avatarBg: "#e8f0f0",
						avatarColor: "#0d5c63"
					}
				];

				const recentlyHiredCandidates = [
					{
						id: 3,
						name: "Ana Costa",
						startDate: "Start May 1",
						initial: "S",
						avatarBg: "#f4f2f5",
						avatarColor: "#7a6181"
					},
					{
						id: 4,
						name: "David Lee",
						startDate: "Start May 15",
						initial: "D",
						avatarBg: "#e8f0f0",
						avatarColor: "#0d5c63"
					}
				];

				return (
					<View style={styles.content}>
						<Text style={styles.sectionTitle}>OFFER EXTENDED (2)</Text>
						{offerCandidates.map(renderOfferCandidate)}

						<Text style={[styles.sectionTitle, { marginTop: 20 }]}>RECENTLY HIRED (2)</Text>
						{recentlyHiredCandidates.map(renderHiredCandidate)}
					</View>
				);

			case "Hired":
				const hiredCandidates = [
					{
						id: 1,
						name: "Ana Costa",
						startDate: "Start May 1",
						initial: "S",
						avatarBg: "#f4f2f5",
						avatarColor: "#7a6181"
					},
					{
						id: 2,
						name: "David Lee",
						startDate: "Start May 15",
						initial: "D",
						avatarBg: "#e8f0f0",
						avatarColor: "#0d5c63"
					},
					{
						id: 3,
						name: "Mark Lee",
						startDate: "Start June 1",
						initial: "M",
						avatarBg: "#fcf8ef",
						avatarColor: "#e2b053"
					},
					{
						id: 4,
						name: "Jennie Kim",
						startDate: "Start June 5",
						initial: "J",
						avatarBg: "#f0f1fb",
						avatarColor: "#6c77d6"
					}
				];

				return (
					<View style={styles.content}>
						<Text style={styles.sectionTitle}>RECENTLY HIRED</Text>
						{hiredCandidates.map(renderHiredCandidate)}
					</View>
				);

			default:
				return <View style={styles.content} />;
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			{renderStatusBar()}
			<ScrollView style={styles.scrollView}>
				{renderHeader()}
				{renderTabs()}
				{renderContent()}
			</ScrollView>
			<Navigation currentScreen="talent" onNavigate={handleNavigate} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f9f5f0",
	},
	statusBar: {
		height: 45,
		backgroundColor: "#ffffff",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	timeText: {
		color: "#000000",
		fontSize: 15,
		fontWeight: "700",
		fontFamily: "Plus Jakarta Sans",
	},
	statusIcons: {
		flexDirection: "row",
		alignItems: "center",
	},
	scrollView: {
		flex: 1,
	},
	header: {
		backgroundColor: "#ffffff",
		paddingHorizontal: 20,
		paddingVertical: 25,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	headerContent: {
		flex: 1,
	},
	jobTitle: {
		color: "#000000",
		fontSize: 18,
		fontWeight: "700",
		fontFamily: "Plus Jakarta Sans",
		marginBottom: 5,
	},
	candidateCount: {
		color: "#a7a6be",
		fontSize: 13,
		fontFamily: "Plus Jakarta Sans",
	},
	headerIcons: {
		flexDirection: "row",
		gap: 11,
	},
	iconButton: {
		width: 38,
		height: 38,
		backgroundColor: "#f3efe9",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	tabContainer: {
		backgroundColor: "#ffffff",
		paddingHorizontal: 20,
		paddingBottom: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	tab: {
		width: 65,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	activeTab: {
		backgroundColor: "#ffffff",
		borderBottomColor: "#0d5c63",
		borderBottomWidth: 1,
	},
	tabText: {
		color: "#4a4868",
		fontSize: 12,
		fontWeight: "500",
		fontFamily: "Plus Jakarta Sans",
		textAlign: "center",
	},
	activeTabText: {
		color: "#0d5c63",
		fontWeight: "600",
	},
	content: {
		paddingHorizontal: 20,
		paddingBottom: 100,
	},
	filterContainer: {
		flexDirection: "row",
		gap: 5,
		marginBottom: 16,
	},
	filterButton: {
		backgroundColor: "#f4ede1",
		borderRadius: 12,
		paddingHorizontal: 10,
		paddingVertical: 1,
		height: 25,
		justifyContent: "center",
	},
	activeFilterButton: {
		backgroundColor: "#0d5c63",
	},
	filterText: {
		color: "#4a4868",
		fontSize: 11,
		fontWeight: "500",
		fontFamily: "Plus Jakarta Sans",
	},
	activeFilterText: {
		color: "#ffffff",
		fontWeight: "600",
	},
	candidateCard: {
		backgroundColor: "#ffffff",
		borderRadius: 12,
		padding: 11,
		marginBottom: 16,
	},
	candidateInfo: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	candidateHeader: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},
	avatar: {
		width: 35,
		height: 35,
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
	},
	avatarText: {
		fontSize: 14,
		fontWeight: "700",
		fontFamily: "Plus Jakarta Sans",
	},
	candidateDetails: {
		flex: 1,
	},
	candidateName: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "700",
		fontFamily: "Plus Jakarta Sans",
		marginBottom: 2,
	},
	candidateSubInfo: {
		flexDirection: "row",
		alignItems: "center",
	},
	candidateRole: {
		color: "#b6b4c8",
		fontSize: 12,
		fontFamily: "Plus Jakarta Sans",
	},
	dot: {
		width: 4,
		height: 4,
		backgroundColor: "#b6b4c8",
		borderRadius: 2,
		marginHorizontal: 7,
	},
	candidateExperience: {
		color: "#b6b4c8",
		fontSize: 12,
		fontFamily: "Plus Jakarta Sans",
	},
	candidateStats: {
		alignItems: "flex-end",
		gap: 5,
	},
	matchScore: {
		backgroundColor: "#ebf6f7",
		borderRadius: 15,
		paddingHorizontal: 11,
		paddingVertical: 1,
		height: 25,
		justifyContent: "center",
	},
	matchScoreText: {
		color: "#0d5c63",
		fontSize: 9,
		fontWeight: "600",
		fontFamily: "Plus Jakarta Sans",
	},
	statusBadge: {
		backgroundColor: "#ebf6f7",
		borderRadius: 15,
		paddingHorizontal: 11,
		paddingVertical: 1,
		height: 25,
		justifyContent: "center",
	},
	statusBadgeText: {
		color: "#0d5c63",
		fontSize: 9,
		fontWeight: "600",
		fontFamily: "Plus Jakarta Sans",
	},
	screeningStatus: {
		marginTop: 15,
		paddingTop: 15,
		borderTopWidth: 1,
		borderTopColor: "#d8e9e9",
	},
	screeningStatusTitle: {
		color: "#000000",
		fontSize: 11,
		fontWeight: "600",
		fontFamily: "Plus Jakarta Sans",
		marginBottom: 10,
	},
	screeningItems: {
		marginBottom: 15,
	},
	screeningItem: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 5,
	},
	checkIcon: {
		width: 15,
		height: 15,
		backgroundColor: "#f3efe9",
		borderRadius: 3,
		marginRight: 18,
	},
	completedCheck: {
		backgroundColor: "#16a34a",
	},
	screeningItemText: {
		color: "#000000",
		fontSize: 11,
		fontFamily: "Plus Jakarta Sans",
	},
	pendingText: {
		color: "#b0b0c8",
	},
	actionButtons: {
		flexDirection: "row",
		gap: 30,
	},
	primaryButton: {
		backgroundColor: "#0d5c63",
		borderRadius: 10,
		paddingHorizontal: 30,
		paddingVertical: 7,
		height: 30,
		justifyContent: "center",
		flex: 1,
	},
	primaryButtonText: {
		color: "#ffffff",
		fontSize: 12,
		fontWeight: "600",
		fontFamily: "Plus Jakarta Sans",
		textAlign: "center",
	},
	secondaryButton: {
		backgroundColor: "#f3efe9",
		borderRadius: 10,
		paddingHorizontal: 30,
		paddingVertical: 7,
		height: 30,
		justifyContent: "center",
		flex: 1,
	},
	secondaryButtonText: {
		color: "#7a6181",
		fontSize: 12,
		fontWeight: "600",
		fontFamily: "Plus Jakarta Sans",
		textAlign: "center",
	},
	interviewBanner: {
		backgroundColor: "#f2edf5",
		borderColor: "#b6b4c8",
		borderWidth: 1,
		borderRadius: 10,
		paddingHorizontal: 15,
		paddingVertical: 14,
		marginBottom: 16,
	},
	interviewBannerText: {
		color: "#7a6181",
		fontSize: 13,
		fontWeight: "600",
		fontFamily: "Plus Jakarta Sans",
	},
	interviewDetails: {
		backgroundColor: "#f4f2f5",
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 7,
		marginTop: 10,
		marginBottom: 15,
		flexDirection: "row",
		alignItems: "center",
	},
	interviewType: {
		color: "#7a6181",
		fontSize: 11,
		fontFamily: "Plus Jakarta Sans",
	},
	interviewTime: {
		color: "#7a6181",
		fontSize: 11,
		fontFamily: "Plus Jakarta Sans",
	},
	sectionTitle: {
		color: "#a7a6be",
		fontSize: 12,
		fontWeight: "700",
		fontFamily: "Plus Jakarta Sans",
		marginBottom: 16,
	},
	offerDetails: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	salary: {
		color: "#b6b4c8",
		fontSize: 12,
		fontFamily: "Plus Jakarta Sans",
	},
	location: {
		color: "#b6b4c8",
		fontSize: 12,
		fontFamily: "Plus Jakarta Sans",
	},
	startDate: {
		color: "#b6b4c8",
		fontSize: 12,
		fontFamily: "Plus Jakarta Sans",
	},
	offerStatus: {
		alignItems: "flex-end",
	},
	expiryText: {
		color: "#e05b5b",
		fontSize: 9,
		fontWeight: "500",
		fontFamily: "Plus Jakarta Sans",
		marginTop: 2,
	},
	searchContainer: {
		marginBottom: 16,
	},
	searchBar: {
		backgroundColor: "#ffffff",
		borderRadius: 12,
		paddingHorizontal: 18,
		paddingVertical: 13,
		height: 50,
		justifyContent: "center",
	},
	searchPlaceholder: {
		color: "#b6b4c8",
		fontSize: 14,
		fontFamily: "Plus Jakarta Sans",
	},
	newHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 16,
	},
	newHeaderText: {
		color: "#a7a6be",
		fontSize: 13,
		fontFamily: "Plus Jakarta Sans",
	},
	selectButton: {
		backgroundColor: "#f4ede1",
		borderRadius: 12,
		paddingHorizontal: 16,
		paddingVertical: 4,
		height: 25,
		justifyContent: "center",
	},
	selectButtonText: {
		color: "#4a4868",
		fontSize: 11,
		fontWeight: "500",
		fontFamily: "Plus Jakarta Sans",
	},
	newStatusBadge: {
		backgroundColor: "#0d5c63",
		borderRadius: 15,
		paddingHorizontal: 11,
		paddingVertical: 1,
		height: 25,
		justifyContent: "center",
	},
	newStatusBadgeText: {
		color: "#ffffff",
		fontSize: 9,
		fontWeight: "600",
		fontFamily: "Plus Jakarta Sans",
	},
});

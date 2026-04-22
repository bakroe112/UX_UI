import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function JobPreview({ navigation }) {
	return (
		<View style={styles.container}>
			{/* Status Bar */}
			<View style={styles.statusBar}></View>

			{/* Header */}
			<View style={styles.headerContainer}>
				<View style={styles.previewBanner}>
					<View style={styles.previewContent}>
						<View style={styles.warningIcon}>
							<View style={styles.warningTriangle}></View>
							<View style={styles.warningDot}></View>
						</View>
						<Text style={styles.previewText}>
							Preview Mode - This is how candicdates see your job post
						</Text>
					</View>
					<TouchableOpacity style={styles.publishButton} onPress={() => navigation.navigate("JobDetailNew")}>
						<Text style={styles.publishButtonText}>Publish</Text>
					</TouchableOpacity>
				</View>

				{/* Job Header */}
				<View style={styles.jobHeader}>
					<View style={styles.jobTitleSection}>
						<View style={styles.companyLogo}>
							<Text style={styles.logoText}>F</Text>
						</View>
						<View style={styles.jobInfo}>
							<Text style={styles.jobTitle}>Senior Product Designer</Text>
							<View style={styles.companyRow}>
								<View style={styles.companyInfo}>
									<Text style={styles.companyName}>Figma</Text>
									<View style={styles.dot}></View>
								</View>
								<Text style={styles.location}>San Francisco / Remote</Text>
							</View>
						</View>
					</View>
					<View style={styles.jobTags}>
						<View style={styles.remoteTag}>
							<Text style={styles.remoteTagText}>Remote</Text>
						</View>
						<View style={styles.salaryTag}>
							<Text style={styles.salaryTagText}>$140-$165k</Text>
						</View>
						<View style={styles.typeTag}>
							<Text style={styles.typeTagText}>Full-time</Text>
						</View>
						<View style={styles.levelTag}>
							<Text style={styles.levelTagText}>Senior</Text>
						</View>
					</View>
				</View>
			</View>

			<ScrollView style={styles.scrollView}>
				{/* About Section */}
				<View style={styles.sectionContainer}>
					<View style={styles.aboutSection}>
						<Text style={styles.sectionTitle}>About this role</Text>
						<Text style={styles.aboutText}>
							We are looking for a Senior Product Designer to join our Design Systems team at Figma. You will own core features used by 8M+ designers worldwide...
						</Text>
					</View>
				</View>

				{/* Responsibilities Section */}
				<View style={styles.sectionContainer}>
					<View style={styles.responsibilitiesSection}>
						<Text style={styles.sectionTitle}>Responsibilities</Text>
						<View style={styles.bulletPoints}>
							<View style={styles.bulletPoint}>
								<View style={styles.bullet}></View>
								<Text style={styles.bulletText}>Own end-to-end design from concept to ship</Text>
							</View>
							<View style={styles.bulletPoint}>
								<View style={styles.bullet}></View>
								<Text style={styles.bulletText}>Collaborate with cross-functional teams</Text>
							</View>
							<View style={styles.bulletPoint}>
								<View style={styles.bullet}></View>
								<Text style={styles.bulletText}>Contribute to our growing design system</Text>
							</View>
						</View>
					</View>
				</View>

				<View style={styles.bottomSpace}></View>
			</ScrollView>

			{/* Bottom Button */}
			<View style={styles.bottomContainer}>
				<TouchableOpacity style={styles.quickApplyButton}>
					<Text style={styles.quickApplyText} numberOfLines={1}>Quick Apply - 2  min (candidate view)</Text>
				</TouchableOpacity>
			</View>
		</View>
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
	},
	headerContainer: {
		backgroundColor: "#ffffff",
	},
	previewBanner: {
		backgroundColor: "#fdf8ee",
		paddingVertical: 3,
		paddingHorizontal: 20,
		paddingRight: 14,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	previewContent: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},
	warningIcon: {
		width: 16,
		height: 17,
		marginRight: 9,
		position: "relative",
	},
	warningTriangle: {
		width: 16,
		height: 11,
		backgroundColor: "#e2b053",
		position: "absolute",
		top: 0,
	},
	warningDot: {
		width: 4.8,
		height: 4.71,
		backgroundColor: "#e2b053",
		position: "absolute",
		left: 5.6,
		top: 3.14,
	},
	previewText: {
		color: "#e2b053",
		fontSize: 12,
		fontWeight: "600",
		lineHeight: 22.5,
		flex: 1,
	},
	publishButton: {
		backgroundColor: "#e2b053",
		borderRadius: 12,
		paddingVertical: 1,
		paddingHorizontal: 10,
		width: 60,
		height: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	publishButtonText: {
		color: "#000000",
		fontSize: 11,
		fontWeight: "600",
		lineHeight: 22.5,
	},
	jobHeader: {
		backgroundColor: "#ffffff",
		paddingTop: 15,
		paddingBottom: 20,
		paddingHorizontal: 20,
	},
	jobTitleSection: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	companyLogo: {
		width: 50,
		height: 50,
		backgroundColor: "#f4f2f5",
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 12,
	},
	logoText: {
		color: "#7a6181",
		fontSize: 20,
		fontWeight: "700",
		lineHeight: 22.5,
	},
	jobInfo: {
		flex: 1,
	},
	jobTitle: {
		color: "#000000",
		fontSize: 18,
		fontWeight: "700",
		lineHeight: 22.5,
		marginBottom: 0,
	},
	companyRow: {
		flexDirection: "row",
		alignItems: "center",
	},
	companyInfo: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 4,
	},
	companyName: {
		color: "#4a4868",
		fontSize: 13,
		fontWeight: "400",
		lineHeight: 22.5,
	},
	dot: {
		width: 2,
		height: 2,
		backgroundColor: "#4a4868",
		borderRadius: 1,
		marginLeft: 4,
	},
	location: {
		color: "#4a4868",
		fontSize: 13,
		fontWeight: "400",
		lineHeight: 22.5,
	},
	jobTags: {
		flexDirection: "row",
		alignItems: "center",
	},
	remoteTag: {
		backgroundColor: "#ebf6f7",
		borderRadius: 10,
		paddingVertical: 1,
		paddingHorizontal: 9,
		marginRight: 5,
		height: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	remoteTagText: {
		color: "#0d5c63",
		fontSize: 9,
		fontWeight: "600",
		lineHeight: 22.5,
	},
	salaryTag: {
		backgroundColor: "#f3efe9",
		borderRadius: 10,
		paddingVertical: 1,
		paddingHorizontal: 8.5,
		marginRight: 5,
		height: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	salaryTagText: {
		color: "#4a4868",
		fontSize: 9,
		fontWeight: "600",
		lineHeight: 22.5,
	},
	typeTag: {
		backgroundColor: "#f3efe9",
		borderRadius: 10,
		paddingVertical: 1,
		paddingHorizontal: 7,
		marginRight: 5,
		height: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	typeTagText: {
		color: "#4a4868",
		fontSize: 9,
		fontWeight: "600",
		lineHeight: 22.5,
	},
	levelTag: {
		backgroundColor: "#f2edf5",
		borderRadius: 10,
		paddingVertical: 1,
		paddingHorizontal: 8.5,
		height: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	levelTagText: {
		color: "#7a6181",
		fontSize: 9,
		fontWeight: "600",
		lineHeight: 22.5,
	},
	scrollView: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 16,
	},
	sectionContainer: {
		marginBottom: 16,
	},
	aboutSection: {
		backgroundColor: "#ffffff",
		borderRadius: 12,
		paddingTop: 10,
		paddingBottom: 4,
		paddingHorizontal: 11,
	},
	sectionTitle: {
		color: "#000000",
		fontSize: 15,
		fontWeight: "700",
		lineHeight: 22.5,
		marginBottom: 5,
	},
	aboutText: {
		color: "#4a4868",
		fontSize: 13,
		fontWeight: "400",
		lineHeight: 22.5,
	},
	responsibilitiesSection: {
		backgroundColor: "#ffffff",
		borderRadius: 12,
		paddingTop: 10,
		paddingBottom: 15,
		paddingHorizontal: 11,
	},
	bulletPoints: {
		marginTop: 7,
	},
	bulletPoint: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 1,
	},
	bullet: {
		width: 5,
		height: 5,
		backgroundColor: "#0d5c63",
		borderRadius: 2.5,
		marginRight: 10,
	},
	bulletText: {
		color: "#4a4868",
		fontSize: 13,
		fontWeight: "400",
		letterSpacing: -0.3,
		lineHeight: 22.5,
		flex: 1,
	},
	bottomSpace: {
		height: 120,
	},
	bottomContainer: {
		backgroundColor: "#ffffff",
		paddingVertical: 28,
		paddingHorizontal: 20,
	},
	quickApplyButton: {
		backgroundColor: "#0d5c63",
		borderRadius: 10,
		paddingVertical: 11,
		paddingHorizontal: 59,
		justifyContent: "center",
		alignItems: "center",
	},
	quickApplyText: {
		color: "#ffffff",
		fontSize: 11,
		fontWeight: "700",
		lineHeight: 22.5,
		textAlign: "center",
		numberOfLines: 1,
	},
});
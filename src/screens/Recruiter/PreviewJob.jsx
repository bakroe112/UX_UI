import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";

export default (props) => {
	return (
		<View style={{ display: props.currentScreen === "previewjob" ? "flex" : "none", flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.fixedHeader}>
					<View style={styles.previewBanner}>
						<View style={styles.bannerContent}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/tkauvna2_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.bannerIcon}
							/>
							<Text style={styles.bannerText}>
								{"Preview Mode - This is how candicdates see your job post"}
							</Text>
						</View>
					<TouchableOpacity style={styles.publishBtn} onPress={() => props.onNavigate("jobdetail")}>
							<Text style={styles.publishBtnText}>
								{"Publish"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<ScrollView  style={styles.scrollView}>

					<View style={styles.jobCardSection}>
						<View style={styles.jobCard}>
							<View style={styles.jobCardContent}>
								<TouchableOpacity style={styles.companyAvatar}>
									<Text style={styles.avatarText}>
										{"F"}
									</Text>
								</TouchableOpacity>
								<View style={styles.jobInfo}>
									<Text style={styles.jobTitle}>
										{"Senior Product Designer"}
									</Text>
									<View style={styles.jobMeta}>
										<View style={styles.metaItem}>
											<Text style={styles.metaText}>
												{"Figma"}
											</Text>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/08q3ujol_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={styles.metaDot}
											/>
										</View>
										<Text style={styles.metaText}>
											{"San Francisco / Remote"}
										</Text>
									</View>
								</View>
								<View style={styles.emptySpace}></View>
							</View>
							<View style={styles.jobTags}>
								<View style={styles.tagRemote}>
									<Text style={styles.tagRemoteText}>
										{"Remote"}
									</Text>
								</View>
								<View style={styles.tagSalary}>
									<Text style={styles.tagSalaryText}>
										{"$140-$165k"}
									</Text>
								</View>
								<View style={styles.tagType}>
									<Text style={styles.tagTypeText}>
										{"Full-time"}
									</Text>
								</View>
								<View style={styles.tagLevel}>
									<Text style={styles.tagLevelText}>
										{"Senior"}
									</Text>
								</View>
							</View>
						</View>
					</View>

					<View style={styles.detailsSection}>
						<View style={styles.detailCard}>
							<Text style={styles.detailTitle}>
								{"About this role"}
							</Text>
							<Text style={styles.detailText}>
								{"We are looking for a Senior Product Designer to join our Design Systems team at Figma. You will own core features used by 8M+ designers worldwide..."}
							</Text>
						</View>

						<View style={styles.responsibilitiesCard}>
							<Text style={styles.responsibilitiesTitle}>
								{"Responsibilities"}
							</Text>
							<View style={styles.responsibilitiesList}>
								<View style={styles.bulletPoint}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/kwdy4m7s_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.bulletIcon}
									/>
									<Text style={styles.bulletText}>
										{"Own end-to-end design from concept to ship"}
									</Text>
								</View>
								<View style={styles.bulletPoint}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/atkvd3he_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.bulletIcon}
									/>
									<Text style={styles.bulletText}>
										{"Collaborate with cross-functional teams"}
									</Text>
								</View>
								<View style={styles.bulletPoint}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/w3x1nz85_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.bulletIcon}
									/>
									<Text style={styles.bulletText}>
										{"Contribute to our growing design system"}
									</Text>
								</View>
							</View>
						</View>
					</View>

					<View style={styles.applySection}>
						<TouchableOpacity style={styles.applyButton}>
							<Text style={styles.applyButtonText}>
								{"Quick Apply - 2  min (candidate view)"}
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F9F5F0",
	},
	fixedHeader: {
		backgroundColor: "#FFFFFF",
		zIndex: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#F0F0F0",
		paddingTop: 40,
		paddingBottom: 0,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F9F5F0",
		paddingBottom: 100,
		
	},
	previewBanner: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FDF8EE",
		paddingVertical: 3,
		paddingHorizontal: 20,
		marginBottom: 0,
	},
	bannerContent: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		marginTop: 10,
		marginBottom: 10,
	},
	bannerIcon: {
		width: 16,
		height: 11,
		marginRight: 9,
	},
	bannerText: {
		color: "#E2B053",
		fontSize: 12,
		fontWeight:500,
		flex: 1,
	},
	publishBtn: {
		backgroundColor: "#E2B053",
		borderRadius: 12,
		paddingVertical: 5,
		paddingHorizontal: 15,
	},
	publishBtnText: {
		color: "#000000",
		fontSize: 11,
		fontWeight: "bold",
	},
	jobCardSection: {
		marginBottom: 16,
	},
	jobCard: {
		backgroundColor: "#FFFFFF",
		paddingVertical: 18,
		paddingRight: 36,
	},
	jobCardContent: {
		flexDirection: "row",
		marginBottom: 10,
		marginLeft: 20,
	},
	companyAvatar: {
		backgroundColor: "#F4F2F5",
		borderRadius: 15,
		paddingVertical: 12,
		paddingHorizontal: 22,
		marginRight: 12,
	},
	avatarText: {
		color: "#7A6181",
		fontSize: 20,
		fontWeight: "bold",
	},
	jobInfo: {
		flex: 1,
		paddingRight: 19,
	},
	jobTitle: {
		color: "#000000",
		fontSize: 19,
		fontWeight: "bold",
		width: 230,
	},
	jobMeta: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
	},
	metaItem: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 4,
	},
	metaText: {
		color: "#4A4868",
		fontSize: 13,
		marginRight: 7,
		opacity: 0.7,
		fontWeight:500
	},
	metaDot: {
		width: 2,
		height: 2,
	},
	emptySpace: {
		width: 0,
		height: 50,
	},
	jobTags: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 20,
	},
	tagRemote: {
		backgroundColor: "#EBF6F7",
		borderRadius: 15,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginRight: 5,
	},
	tagRemoteText: {
		color: "#0D5C63",
		fontSize: 10,
		fontWeight: "bold",
	},
	tagSalary: {
		backgroundColor: "#F3EFE9",
		borderRadius: 14,
		paddingHorizontal: 8,
		paddingVertical: 5,
		marginRight: 5,
	},
	tagSalaryText: {
		color: "#4A4868",
		fontSize: 10,
		fontWeight: "bold",
	},
	tagType: {
		backgroundColor: "#F3EFE9",
		borderRadius: 14,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginRight: 5,
	},
	tagTypeText: {
		color: "#4A4868",
		fontSize: 10,
		fontWeight: "bold",
	},
	tagLevel: {
		backgroundColor: "#F2EDF5",
		borderRadius: 14,
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	tagLevelText: {
		color: "#7A6181",
		fontSize: 10,
		fontWeight: "bold",
	},
	detailsSection: {
		marginBottom: 240,
		marginHorizontal: 20,
	},
	detailCard: {
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingTop: 12,
		paddingBottom: 7,
		paddingLeft: 11,
		paddingRight: 25,
		marginBottom: 16,
	},
	detailTitle: {
		color: "#000000",
		fontSize: 15,
		fontWeight: "bold",
		marginBottom: 7,
	},
	detailText: {
		color: "#4A4868",
		fontSize: 13,
		fontweight: 200,
		opacity: 0.7,
	},
	responsibilitiesCard: {
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingTop: 17,
		paddingBottom: 12,
		paddingLeft: 11,
	},
	responsibilitiesTitle: {
		color: "#000000",
		fontSize: 15,
		fontWeight: "bold",
		marginBottom: 7,
		marginLeft: 1,
		marginRight: 174,
	},
	responsibilitiesList: {
		alignSelf: "flex-start",
	},
	bulletPoint: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 3,
	},
	bulletIcon: {
		width: 5,
		height: 5,
		marginRight: 10,
	},
	bulletText: {
		color: "#4A4868",
		fontSize: 13,
		opacity: 0.7,
	},
	applySection: {
		backgroundColor: "#FFFFFF",
		paddingVertical: 27,
		paddingHorizontal: 20,
		paddingBottom: 30,
		marginTop: -30,
	},
	applyButton: {
		alignItems: "center",
		backgroundColor: "#0D5C63",
		borderRadius: 10,
		paddingVertical: 15,
	},
	applyButtonText: {
		color: "#FFFFFF",
		fontSize: 13,
		fontWeight: "bold",
	},
});

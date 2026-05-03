import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";

export default (props) => {
	return (
		<View style={{ display: props.currentScreen === "review" ? "flex" : "none", flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.fixedHeader}>
					<View style={styles.column}>
						<View style={styles.row3}>
							<View style={styles.backHeader}>
								<TouchableOpacity onPress={() => props.onNavigate("screeningqs")}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/90hgzfwo_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image4}
									/>
								</TouchableOpacity>
							</View>
							<Text style={styles.text2}>
								{"Step 5 of 5"}
							</Text>
							<Text style={styles.text2}>
								{"Save draft"}
							</Text>
						</View>
						<View style={styles.row4}>
							<View style={styles.box}>
							</View>
							<View style={styles.box2}>
							</View>
							<View style={styles.box2}>
							</View>
							<View style={styles.box2}>
							</View>
							<View style={styles.box4}>
							</View>
						</View>
						<Text style={styles.text3}>
							{"Review & Publish"}
						</Text>
					</View>
				</View>
				<ScrollView  style={styles.scrollView}>
					<View style={styles.jobQualityCard}>
						<TouchableOpacity style={styles.scoreButton}>
							<Text style={styles.scoreText}>
								{"88"}
							</Text>
						</TouchableOpacity>
						<View style={styles.scoreContent}>
							<Text style={styles.scoreTitle}>
								{"Job Quality Score"}
							</Text>
							<View style={styles.scoreSubtitle}>
								<Text style={styles.scoreSubtitleText}>
									{"Good"}
								</Text>
								<View style={styles.scoreSubtitleDot}></View>
								<Text style={styles.scoreSubtitleText}>
									{"Fix 1 issue to reach 100"}
								</Text>
							</View>
						</View>
						<View style={styles.scoreEmpty}></View>
					</View>

					<View style={styles.sectionsContainer}>
						<View style={styles.sectionItem}>
							<View style={styles.sectionContent}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/guzxdfa2_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={styles.sectionIcon}
								/>
								<View>
									<Text style={styles.sectionTitle}>
										{"Basic Information"}
									</Text>
									<Text style={styles.sectionStatus}>
										{"Complete"}
									</Text>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/mn36om64_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.sectionArrow}
							/>
						</View>

						<View style={styles.sectionItem}>
							<View style={styles.sectionContent}>
								<TouchableOpacity style={styles.editButton}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/9029vikb_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.editIcon}
									/>
								</TouchableOpacity>
								<View>
									<Text style={styles.sectionTitle}>
										{"Job Description"}
									</Text>
									<Text style={styles.sectionStatus}>
										{"Complete"}
									</Text>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/x25mbt1o_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.sectionArrow}
							/>
						</View>

						<View style={styles.sectionItem}>
							<View style={styles.sectionContent}>
								<TouchableOpacity style={styles.editButton}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/rrnsj4tu_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.editIcon}
									/>
								</TouchableOpacity>
								<View>
									<Text style={styles.sectionTitle}>
										{"Requirements"}
									</Text>
									<Text style={styles.sectionStatus}>
										{"Complete"}
									</Text>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/unhdoid4_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.sectionArrow}
							/>
						</View>

						<View style={styles.sectionItem}>
							<View style={styles.sectionContent}>
								<TouchableOpacity style={styles.editButtonPending}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/t30mto0j_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.editIcon}
									/>
								</TouchableOpacity>
								<View>
									<Text style={styles.sectionTitle}>
										{"Screening Questions"}
									</Text>
									<Text style={styles.sectionStatusPending}>
										{"1 required missing"}
									</Text>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/jq1vdeif_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.sectionArrow}
							/>
						</View>
					</View>

					<View style={styles.linkedInBox}>
						<Text style={styles.linkedInText}>
							{"Publish to Linkedln too"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/bgxcerz0_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.toggleSwitch}
						/>
					</View>

				<TouchableOpacity style={styles.publishButton} onPress={() => props.onNavigate("previewjob")}>
						<Text style={styles.publishButtonText}>
							{"Publish Job Post"}
						</Text>
					</TouchableOpacity>

					<View style={styles.box7}>
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
		paddingTop: 8,
		paddingBottom: 0,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingTop: 0,
		paddingHorizontal: 20,
		marginBottom: 10,
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 18,
        marginTop: 30,
	},
	backHeader: {
		width: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	image4: {
		width: 38,
		height: 38,
		resizeMode: "contain",
	},
	text2: {
		color: "#4A4868",
		fontSize: 13,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 18,
	},
	box: {
		height: 2,
		flex: 1,
		backgroundColor: "#0D5C63",
		marginRight: 6,
	},
	box2: {
		height: 2,
		flex: 1,
		backgroundColor: "#0D5C63",
		marginRight: 5,
	},
	box4: {
		height: 2,
		flex: 1,
		backgroundColor: "#0D5C63",
	},
	text3: {
		color: "#000000",
		fontSize: 18,
		fontWeight: "bold",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F9F5F0",
		paddingBottom: 42,
        paddingTop: 15,
	},
	jobQualityCard: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#17727A",
		borderRadius: 12,
		paddingVertical: 15,
		paddingLeft: 20,
		paddingRight: 33,
		marginBottom: 16,
		marginHorizontal: 20,
	},
	scoreButton: {
		backgroundColor: "#6A9EA3",
		borderRadius: 12,
		paddingVertical: 13,
		paddingHorizontal: 14,
		marginRight: 10,
	},
	scoreText: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "bold",
	},
	scoreContent: {
		flex: 1,
		marginRight: 10,
	},
	scoreTitle: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: 500,
	},
	scoreSubtitle: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
	},
	scoreSubtitleText: {
		color: "#FFFFFF",
		fontSize: 13,
		marginRight: 9,
		fontWeight: 300,
		opacity: 0.8,
	},
	scoreSubtitleDot: {
		width: 2,
		height: 2,
		backgroundColor: "#FFFFFF",
		marginRight: 6,
	},
	scoreEmpty: {
		width: 50,
		height: 50,
	},
	sectionsContainer: {
		marginBottom: 12,
		marginHorizontal: 20,
	},
	sectionItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 7,
		paddingHorizontal: 11,
		marginBottom: 12,
	},
	sectionContent: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},
	sectionIcon: {
		width: 35,
		height: 35,
		marginRight: 12,
	},
	editButton: {
		backgroundColor: "#ECF8F1",
		borderRadius: 8,
		paddingVertical: 10,
		paddingHorizontal: 12,
		marginRight: 12,
	},
	editButtonPending: {
		backgroundColor: "#FDF9F1",
		borderRadius: 8,
		paddingVertical: 11,
		paddingHorizontal: 12,
		marginRight: 12,
	},
	editIcon: {
		width: 12,
		height: 12,
	},
	sectionTitle: {
		color: "#000000",
		fontSize: 15,
		fontWeight: "bold",
	},
	sectionStatus: {
		color: "#16A34A",
		fontSize: 12,
		marginRight: 69,
		marginTop: 3,
	},
	sectionStatusPending: {
		color: "#E2B053",
		fontSize: 12,
		marginRight: 52,
		marginTop: 3,
	},
	sectionArrow: {
		width: 12,
		height: 12,
	},
	linkedInBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#F3EFE9",
		borderRadius: 12,
		paddingVertical: 9,
		paddingHorizontal: 11,
		marginBottom: 12,
		marginHorizontal: 20,
	},
	linkedInText: {
		color: "#000000",
		fontSize: 13,
		fontWeight: "bold",
	},
	toggleSwitch: {
		width: 45,
		height: 26,
	},
	publishButton: {
		alignItems: "center",
		backgroundColor: "#E2B053",
		borderRadius: 12,
		paddingVertical: 11,
		marginHorizontal: 20,
	},
	publishButtonText: {
		color: "#000000",
		fontSize: 15,
		fontWeight: "bold",
	},
	box7: {
		height: 80,
	},
});

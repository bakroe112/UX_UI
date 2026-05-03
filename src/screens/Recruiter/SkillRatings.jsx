import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function SkillRatings(props) {
	return (
		<View style={{ display: props.currentScreen === "skillratings" ? "flex" : "none", flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.fixedHeader}>
					<View style={styles.column}>
						<View style={styles.row3}>
							<View style={styles.backHeader}>
								<TouchableOpacity onPress={() => props.onNavigate("resume")}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/90hgzfwo_expires_30_days.png" }}
										resizeMode="stretch"
										style={styles.image4}
									/>
								</TouchableOpacity>
							</View>
							<View>
								<View style={styles.view}>
									<Text style={styles.text2}>
										{"Sarahn Johnson"}
									</Text>
								</View>
								<View style={styles.view2}>
									<Text style={styles.text3}>
										{"Skill Assesment Recruiter view"}
									</Text>
								</View>
							</View>
							<View style={styles.ratingBadge}>
								<Text style={styles.ratingText}>
									{"4.4/5"}
								</Text>
							</View>
						</View>
						<View style={styles.row4}>
							<TouchableOpacity style={styles.view3} onPress={() => props.onNavigate("resume")}>
								<Text style={styles.text4}>
									{"Resume"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.view3} onPress={() => props.onNavigate("notes")}>
								<Text style={styles.text4}>
									{"Notes"}
								</Text>
							</TouchableOpacity>
						<View style={styles.skillTab}>
								<Text style={styles.text5}>
									{"Skill"}
								</Text>
							</View>
							<View style={styles.view3}>
								<Text style={styles.text4}>
									{"Timeline"}
								</Text>
							</View>
						</View>
					</View>
				</View>
				<ScrollView style={styles.scrollView}>
					<View style={styles.column2}>
						<View style={styles.skillCard}>
							<View style={styles.skillHeader}>
								<View>
									<Text style={styles.skillTitle}>
										{"Figma Proficiency"}
									</Text>
								</View>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/6y12m695_expires_30_days.png" }}
									resizeMode="stretch"
									style={styles.ratingBar}
								/>
							</View>
							<View style={styles.skillDescription}>
								<Text style={styles.skillDescText}>
									{"Expert level — ships complex components"}
								</Text>
							</View>
						</View>

						<View style={styles.skillCard}>
							<View style={styles.skillHeader}>
								<View style={{ paddingRight: 28 }}>
									<Text style={styles.skillTitle}>
										{"User research"}
									</Text>
								</View>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/qafg6vkw_expires_30_days.png" }}
									resizeMode="stretch"
									style={styles.ratingBar}
								/>
							</View>
							<View style={styles.skillDescription}>
								<Text style={styles.skillDescText}>
									{"Built DS at Airbnb from scratch"}
								</Text>
							</View>
						</View>

						<View style={styles.skillCard}>
							<View style={styles.skillHeader}>
								<View style={{ paddingRight: 14 }}>
									<Text style={styles.skillTitle}>
										{"Communication"}
									</Text>
								</View>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/anav7f4i_expires_30_days.png" }}
									resizeMode="stretch"
									style={styles.ratingBar}
								/>
							</View>
							<View style={styles.skillDescription}>
								<Text style={styles.skillDescText}>
									{"Excellent in panel & phone screens"}
								</Text>
							</View>
						</View>

						<View style={styles.skillCard}>
							<View style={styles.skillHeader}>
								<View style={{ paddingRight: 44 }}>
									<Text style={styles.skillTitle}>
										{"Leadership"}
									</Text>
								</View>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/i9vk5gwr_expires_30_days.png" }}
									resizeMode="stretch"
									style={styles.ratingBar}
								/>
							</View>
							<View style={styles.skillDescription}>
								<Text style={styles.skillDescText}>
									{"Expert level — ships complex components"}
								</Text>
							</View>
						</View>

						<View style={styles.skillCard}>
							<View style={styles.skillHeader}>
								<View style={{ paddingRight: 44 }}>
									<Text style={styles.skillTitle}>
										{"Leadership"}
									</Text>
								</View>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/ib3oltgo_expires_30_days.png" }}
									resizeMode="stretch"
									style={styles.ratingBar}
								/>
							</View>
							<View style={styles.skillDescription}>
								<Text style={styles.skillDescText}>
									{"Expert level — ships complex components"}
								</Text>
							</View>
						</View>

						<View style={styles.recommendationCard}>
							<Image
								source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/8bfxr5xg_expires_30_days.png" }}
								resizeMode="stretch"
								style={styles.recommendationIcon}
							/>
							<View style={styles.recommendationContent}>
								<View style={styles.recommendationTitle}>
									<Text style={styles.recommendationTitleText}>
										{"Overall recommendation"}
									</Text>
								</View>
								<View style={styles.recommendationSubtitle}>
									<Text style={styles.recommendationSubtitleText}>
										{"Strong Hire — Move to final round"}
									</Text>
								</View>
							</View>
							<View style={styles.emptySpace}></View>
							<View style={styles.recommendationScore}>
								<Text style={styles.recommendationScoreText}>
									{"4.4"}
								</Text>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	fixedHeader: {
		backgroundColor: "#FFFFFF",
		paddingTop: 8,
		paddingBottom: 0,
		borderBottomWidth: 1,
		borderBottomColor: "#F0F0F0",
		zIndex: 10,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingTop: 0,
		paddingHorizontal: 20,
		marginBottom: 10,
	},
	column2: {
		marginHorizontal: 20,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 18,
		marginTop: 50,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 2,
		marginTop: -15,
		marginBottom: -10,
	},
	backHeader: {
		width: 48,
		height: 36,
	},
	image4: {
		width: 36,
		height: 36,
		marginRight: 16,
	},
	view: {
		alignSelf: "flex-start",
		paddingBottom: 1,
	},
	view2: {
		alignSelf: "flex-start",
		paddingBottom: 1,
	},
	view3: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 20,
	},
	skillTab: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 20,
		borderBottomWidth: 2,
		borderBottomColor: "#0D5C63",
	},
	text2: {
		color: "#1A1828",
		fontSize: 16,
		fontWeight: "bold",
	},
	text3: {
		color: "#8A88A8",
		fontSize: 13,
	},
	text4: {
		color: "#8A88A8",
		fontSize: 13,
	},
	text5: {
		color: "#0D5C63",
		fontSize: 14,
		fontWeight: "bold",
	},
	ratingBadge: {
		backgroundColor: "#EBF6F7",
		borderRadius: 18,
		paddingVertical: 11,
		paddingHorizontal: 12,
		marginLeft: 30,
	},
	ratingText: {
		color: "#0D5C63",
		fontSize: 12,
		fontWeight: "bold",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F9F5F0",
        paddingTop: 15,
	},
	skillCard: {
		backgroundColor: "#FFFFFF",
		borderRadius: 11,
		padding: 13,
		marginBottom: 16,
	},
	skillHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 6,
	},
	skillTitle: {
		color: "#1A1828",
		fontSize: 14,
		fontWeight: "bold",
	},
	ratingBar: {
		width: 82,
		height: 14,
	},
	skillDescription: {
		paddingBottom: 1,
	},
	skillDescText: {
		color: "#8A88A8",
		fontSize: 12,
	},
	recommendationCard: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#0D5C63",
		borderRadius: 13,
		paddingVertical: 14,
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	recommendationIcon: {
		borderRadius: 13,
		width: 24,
		height: 24,
		marginRight: 11,
	},
	recommendationContent: {
		paddingRight: 27,
	},
	recommendationTitle: {
		alignSelf: "flex-start",
		marginBottom: 2,
	},
	recommendationTitleText: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "bold",
	},
	recommendationSubtitle: {
		alignSelf: "flex-start",
		marginLeft: 1,
	},
	recommendationSubtitleText: {
		color: "#ffffffa8",
		fontSize: 11,
		opacity: 0.8,
	},
	emptySpace: {
		flex: 1,
		alignSelf: "stretch",
	},
	recommendationScore: {
		paddingBottom: 1,
	},
	recommendationScoreText: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "bold",
		marginRight: 10,
	},
});

import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "../components/Navigation";

export default function JobListingActive({ navigation }) {
	const handleNavigate = (screen) => {
		// Map recruiter screens to navigation routes
		const screenMap = {
			dashboard: "MainDashboard",
			active: "JobListingActive",
			draft: "JobListingDraft",
			talent: "TalentList",
			inbox: "InboxPage",
			analytics: "AnalyticsOverview",
			basicinformation: "BasicInformation",
			resume: "Resume",
		};
		
		const route = screenMap[screen];
		if (route) {
			navigation.navigate(route);
		} else {
			console.log("Screen not found:", screen);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.column}>
					<View style={styles.row3}>
						<Text style={styles.text2}>
							{"Job Listings"}
						</Text>
					<TouchableOpacity style={styles.buttonRow} onPress={() => handleNavigate("basicinformation")}>
							<Image
								source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/6c1v51xm_expires_30_days.png" }}
								resizeMode="stretch"
								style={styles.image4}
							/>
							<Text style={styles.text3}>
								{"Post Job"}
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.row2}>
						<View style={styles.view}>
							<Text style={styles.text4}>
								{"Active (8)"}
							</Text>
						</View>
						<TouchableOpacity style={styles.view2} onPress={() => handleNavigate("draft")}>
							<Text style={styles.text5}>
								{"Draft (3)"}
							</Text>
						</TouchableOpacity>
						<View style={styles.view3}>
							<Text style={styles.text5}>
								{"Closed (12)"}
							</Text>
						</View>
					</View>
				</View>
			</View>
			<ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
				<View style={styles.row4}>
					<Image
						source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/cdhkoqw5_expires_30_days.png" }}
						resizeMode="stretch"
						style={styles.image5}
					/>
					<Text style={styles.text6}>
						{"Search active jobs..."}
					</Text>
				</View>
				<View style={styles.column2}>
					<View style={styles.row5}>
						<View style={styles.row6}>
							<TouchableOpacity style={styles.button} onPress={() => {}}>
								<Text style={styles.text7}>
									{"D"}
								</Text>
							</TouchableOpacity>
							<View style={styles.column3}>
								<Text style={styles.text8}>
									{"Sr. Product Designer"}
								</Text>
								<View style={styles.row7}>
									<View style={styles.row8}>
										<Text style={styles.text9}>
											{"Designer"}
										</Text>
										<Image
											source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/g1q6au3e_expires_30_days.png" }}
											resizeMode="stretch"
											style={styles.image6}
										/>
									</View>
									<Text style={styles.text10}>
										{"Posted 18 day ago"}
									</Text>
								</View>
							</View>
						</View>
						<TouchableOpacity style={styles.button2} onPress={() => {}}>
							<Text style={styles.text4}>
								{"+12 new"}
							</Text>
						</TouchableOpacity>
						<Image
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/g4c0hhvi_expires_30_days.png" }}
							resizeMode="stretch"
							style={styles.image7}
						/>
					</View>
					<View style={styles.row2}>
						<TouchableOpacity style={styles.button3} onPress={() => {}}>
							<View style={styles.column4}>
								<Text style={styles.text11}>
									{"47"}
								</Text>
								<Text style={styles.text12}>
									{"Applicants"}
								</Text>
							</View>
						</TouchableOpacity>
					<TouchableOpacity style={styles.button4} onPress={() => handleNavigate("resume")}>
							<Text style={styles.text13}>
								{"Review Candidates"}
							</Text>
						</TouchableOpacity>
						<Image
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/iq27xmhw_expires_30_days.png" }}
							resizeMode="stretch"
							style={styles.image8}
						/>
					</View>
				</View>
				<View style={styles.column5}>
					<View style={styles.row9}>
						<View style={styles.row10}>
							<TouchableOpacity style={styles.button5} onPress={() => {}}>
								<Text style={styles.text14}>
									{"E"}
								</Text>
							</TouchableOpacity>
							<View style={styles.column3}>
								<Text style={styles.text15}>
									{"Staff Engineer"}
								</Text>
								<View style={styles.row2}>
									<View style={styles.row11}>
										<Text style={styles.text9}>
											{"Engineering"}
										</Text>
										<Image
											source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/n1rfebh7_expires_30_days.png" }}
											resizeMode="stretch"
											style={styles.image6}
										/>
									</View>
									<Text style={styles.text16}>
										{"Posted 18 day ago"}
									</Text>
								</View>
							</View>
						</View>
						<TouchableOpacity style={styles.button6} onPress={() => {}}>
							<Text style={styles.text4}>
								{"+31 new"}
							</Text>
						</TouchableOpacity>
						<Image
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/sfod9tee_expires_30_days.png" }}
							resizeMode="stretch"
							style={styles.image7}
						/>
					</View>
					<View style={styles.row12}>
						<TouchableOpacity style={styles.button7} onPress={() => {}}>
							<View style={styles.column4}>
								<Text style={styles.text11}>
									{"89"}
								</Text>
								<Text style={styles.text12}>
									{"Applicants"}
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button8} onPress={() => handleNavigate("resume")}>
							<Text style={styles.text13}>
								{"Review Candidates"}
							</Text>
						</TouchableOpacity>
						<Image
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/fvsbq0lj_expires_30_days.png" }}
							resizeMode="stretch"
							style={styles.image8}
						/>
					</View>
				</View>
				<View style={styles.column6}>
					<View style={styles.row5}>
						<View style={styles.row13}>
							<TouchableOpacity style={styles.button9} onPress={() => {}}>
								<Text style={styles.text17}>
									{"M"}
								</Text>
							</TouchableOpacity>
							<View style={styles.column7}>
								<Text style={styles.text18}>
									{"Growth Maketer"}
								</Text>
								<View style={styles.row7}>
									<View style={styles.row14}>
										<Text style={styles.text19}>
											{"Marketing"}
										</Text>
										<Image
											source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/px60s8w8_expires_30_days.png" }}
											resizeMode="stretch"
											style={styles.image6}
										/>
									</View>
									<Text style={styles.text10}>
										{"Posted 5 day ago"}
									</Text>
								</View>
							</View>
						</View>
						<TouchableOpacity style={styles.button10} onPress={() => {}}>
							<Text style={styles.text4}>
								{"+8 new"}
							</Text>
						</TouchableOpacity>
						<Image
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/bll506ql_expires_30_days.png" }}
							resizeMode="stretch"
							style={styles.image7}
						/>
					</View>
					<View style={styles.row2}>
						<TouchableOpacity style={styles.button7} onPress={() => {}}>
							<View style={styles.column4}>
								<Text style={styles.text11}>
									{"61"}
								</Text>
								<Text style={styles.text12}>
									{"Applicants"}
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button11} onPress={() => handleNavigate("resume")}>
							<Text style={styles.text13}>
								{"Review Candidates"}
							</Text>
						</TouchableOpacity>
						<Image
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/3cqp5kxp_expires_30_days.png" }}
							resizeMode="stretch"
							style={styles.image8}
						/>
					</View>
				</View>
			</ScrollView>
			<Navigation currentScreen="active" onNavigate={handleNavigate} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	headerContainer: {
		backgroundColor: "#FFFFFF",
		paddingTop: 0,
		paddingBottom: 12,
		borderBottomWidth: 1,
		borderBottomColor: "#E8E6F0",
	},
	box: {
		width: 20,
		height: 2,
		backgroundColor: "#0D5C63",
		marginBottom: 2,
	},
	button: {
		backgroundColor: "#F4F2F5",
		borderRadius: 10,
		paddingVertical: 6,
		paddingHorizontal: 10,
		marginRight: 8,
	},
	button2: {
		backgroundColor: "#EBF6F7",
		borderRadius: 15,
		paddingVertical: 3,
		paddingHorizontal: 12,
		marginRight: 2,
	},
	button3: {
		backgroundColor: "#F3EFE9",
		borderRadius: 8,
		paddingVertical: 8,
		paddingHorizontal: 10,
		marginRight: 6,
	},
	button4: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#7A6181",
		borderRadius: 8,
		paddingVertical: 10,
		marginRight: 6,
	},
	button5: {
		backgroundColor: "#ECF2F3",
		borderRadius: 10,
		paddingVertical: 9,
		paddingHorizontal: 11,
		marginRight: 8,
	},
	button6: {
		backgroundColor: "#EBF6F7",
		borderRadius: 15,
		paddingVertical: 4,
		paddingHorizontal: 11,
		marginRight: 2,
	},
	button7: {
		backgroundColor: "#F3EFE9",
		borderRadius: 8,
		paddingVertical: 8,
		paddingHorizontal: 10,
		marginRight: 6,
	},
	button8: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#0D5C63",
		borderRadius: 8,
		paddingVertical: 10,
		marginRight: 6,
	},
	button9: {
		backgroundColor: "#FDF9F1",
		borderRadius: 10,
		padding: 10,
		marginRight: 8,
	},
	button10: {
		backgroundColor: "#EBF6F7",
		borderRadius: 15,
		paddingVertical: 4,
		paddingHorizontal: 11,
		marginRight: 2,
	},
	button11: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#E2B053",
		borderRadius: 8,
		paddingVertical: 10,
		marginRight: 6,
	},
	buttonRow: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#E2B053",
		borderRadius: 10,
		paddingVertical: 8,
		paddingHorizontal: 13,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingTop: 8,
		paddingHorizontal: 20,
		marginBottom: 0,
	},
	column2: {
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 8,
		paddingHorizontal: 11,
		marginBottom: 12,
		marginHorizontal: 20,
	},
	column3: {
		flex: 1,
		paddingTop: 2,
	},
	column4: {
		alignSelf: "flex-start",
	},
	column5: {
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 8,
		marginBottom: 12,
		marginHorizontal: 20,
	},
	column6: {
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 8,
		paddingHorizontal: 11,
		marginBottom: 70,
		marginHorizontal: 20,
	},
	column7: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	column8: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	column9: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 20,
		height: 20,
		marginRight: 9,
	},
	image2: {
		width: 20,
		height: 20,
		marginRight: 6,
	},
	image3: {
		width: 24,
		height: 20,
	},
	image4: {
		width: 9,
		height: 9,
		marginRight: 5,
	},
	image5: {
		width: 24,
		height: 24,
		marginRight: 9,
	},
	image6: {
		width: 2,
		height: 2,
	},
	image7: {
		width: 13,
		height: 1,
		marginTop: 16,
	},
	image8: {
		width: 29,
		height: 45,
	},
	image9: {
		width: 18,
		height: 18,
		marginBottom: 2,
	},
	image10: {
		width: 18,
		height: 18,
		marginBottom: 2,
	},
	image11: {
		width: 18,
		height: 18,
		marginBottom: 2,
	},
	image12: {
		width: 18,
		height: 18,
		marginBottom: 2,
	},
	image13: {
		width: 18,
		height: 18,
		marginBottom: 2,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		paddingVertical: 4,
		paddingHorizontal: 20,
		marginTop: -18,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 12,
		marginTop: 15,
		alignItems: "center",
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 12,
		paddingLeft: 16,
		marginBottom: 14,
		marginTop: 10,
		marginHorizontal: 20,
	},
	row5: {
		flexDirection: "row",
		marginBottom: 12,
	},
	row6: {
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-start",
		marginRight: 16,
	},
	row7: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginTop: 2,
	},
	row8: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 4,
		paddingHorizontal: 0,
		marginRight: 8,
	},
	row9: {
		flexDirection: "row",
		marginBottom: 12,
		marginHorizontal: 11,
	},
	row10: {
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	row11: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingVertical: 4,
		marginRight: 6,
	},
	row12: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 11,
	},
	row13: {
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-start",
		marginRight: 12,
	},
	row14: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 4,
		paddingHorizontal: 0,
		marginRight: 7,
	},
	navigationBar: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		paddingVertical: 12,
		paddingHorizontal: 8,
		borderTopWidth: 1,
		borderTopColor: "#E8E6F0",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F9F5F0",
	},
	text: {
		color: "#000000",
		fontSize: 15,
		fontWeight: "bold",
	},
	text2: {
		color: "#000000",
		fontSize: 18,
		fontWeight: "bold",
	},
	text3: {
		color: "#000000",
		fontSize: 12,
		fontWeight: "bold",
	},
	text4: {
		color: "#0D5C63",
		fontSize: 13,
		fontWeight: "600",
		marginTop: 3,
		textAlign: "center",
	},
	text5: {
		color: "#8B8BA0",
		fontSize: 13,
	},
	text6: {
		color: "#A5A2B9",
		fontSize: 14,
	},
	text7: {
		color: "#9B99B0",
		fontSize: 16,
		fontWeight: "600",
	},
	text8: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "600",
		marginBottom: 3,
	},
	text9: {
		color: "#9B99B0",
		fontSize: 11,
		marginRight: 7,
	},
	text10: {
		color: "#9B99B0",
		fontSize: 11,
	},
	text11: {
		color: "#0D5C63",
		fontSize: 12,
		fontWeight: "600",
		marginLeft: 12,
	},
	text12: {
		color: "#9B99B0",
		fontSize: 10,
	},
	text13: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "600",
	},
	text14: {
		color: "#0D5C63",
		fontSize: 16,
		fontWeight: "600",
	},
	text15: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "600",
		marginBottom: 3,
	},
	text16: {
		color: "#9B99B0",
		fontSize: 11,
	},
	text17: {
		color: "#E2B053",
		fontSize: 16,
		fontWeight: "600",
	},
	text18: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "600",
		marginBottom: 3,
	},
	text19: {
		color: "#9B99B0",
		fontSize: 11,
		marginRight: 6,
	},
	text20: {
		color: "#9B99B0",
		fontSize: 11,
		fontWeight: "bold",
		marginTop: 2,
		textAlign: "center",
	},
	view: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 12,
		marginRight: 26,
		borderBottomWidth: 3,
		borderBottomColor: "#0D5C63",
	},
	view2: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 12,
		marginRight: 26,
	},
	view3: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 12,
	},
});





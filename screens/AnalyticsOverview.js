import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Navigation from "../components/Navigation";

export default function AnalyticsOverview(props) {
	const handleNavigate = (screen) => {
		console.log("Navigate to:", screen);
		switch (screen) {
			case "dashboard":
				props.navigation.navigate("MainDashboard");
				break;
			case "active":
				props.navigation.navigate("JobListingActive");
				break;
			case "talent":
				props.navigation.navigate("TalentList");
				break;
			case "inbox":
				props.navigation.navigate("InboxPage");
				break;
			case "analytics":
				// Already on analytics screen
				break;
			default:
				console.log("Screen not implemented yet:", screen);
		}
	};
	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.column}>
					<Text style={styles.text2}>
						{"Analytics"}
					</Text>
					<View style={styles.row3}>
						<TouchableOpacity style={styles.button} onPress={() => {}}>
							<Text style={styles.text3}>
								{"This month"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button2} onPress={() => {}}>
							<Text style={styles.text4}>
								{"Q2"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button3} onPress={() => {}}>
							<Text style={styles.text4}>
								{"All Time"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.row4}>
					<View style={styles.column2}>
						<Text style={styles.text5}>
							{"247"}
						</Text>
						<Text style={styles.text6}>
							{"Total Apps"}
						</Text>
						<View style={styles.row5}>
							<Image
								source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/2796sapt_expires_30_days.png" }}
								resizeMode="stretch"
								style={styles.image4}
							/>
							<Text style={styles.text7}>
								{"+18%"}
							</Text>
						</View>
					</View>
					<View style={styles.column3}>
						<Text style={styles.text8}>
							{"3.4%"}
						</Text>
						<Text style={styles.text9}>
							{"Apply Rate"}
						</Text>
						<View style={styles.row5}>
							<Image
								source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/g100lwe6_expires_30_days.png" }}
								resizeMode="stretch"
								style={styles.image4}
							/>
							<Text style={styles.text10}>
								{"+0.6%"}
							</Text>
							<View style={styles.box}>
							</View>
						</View>
					</View>
					<View style={styles.column4}>
						<Text style={styles.text11}>
							{"18d"}
						</Text>
						<Text style={styles.text12}>
							{"Time to Hire"}
						</Text>
						<View style={styles.row5}>
							<Image
								source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/gq3e31gk_expires_30_days.png" }}
								resizeMode="stretch"
								style={styles.image4}
							/>
							<Text style={styles.text13}>
								{"-4d"}
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.column5}>
					<Text style={styles.text14}>
						{"Application Funnel"}
					</Text>
					<View style={styles.row6}>
						<Text style={styles.text15}>
							{"Views"}
						</Text>
						<View style={styles.box2}>
						</View>
						<Text style={styles.text16}>
							{"2.8k"}
						</Text>
					</View>
					<View style={styles.row6}>
						<Text style={styles.text17}>
							{"Clicks"}
						</Text>
						<View style={styles.view}>
							<View style={styles.box3}>
							</View>
						</View>
						<Text style={styles.text16}>
							{"840"}
						</Text>
					</View>
					<View style={styles.row6}>
						<Text style={styles.text18}>
							{"Applied"}
						</Text>
						<View style={styles.view}>
							<View style={styles.box8}>
							</View>
						</View>
						<Text style={styles.text16}>
							{"247"}
						</Text>
					</View>
					<View style={styles.row6}>
						<Text style={styles.text19}>
							{"Screen"}
						</Text>
						<View style={styles.view2}>
							<View style={styles.box5}>
							</View>
						</View>
						<Text style={styles.text16}>
							{"89"}
						</Text>
					</View>
					<View style={styles.row6}>
						<Text style={styles.text20}>
							{"Interview"}
						</Text>
						<View style={styles.view2}>
							<View style={styles.box6}>
							</View>
						</View>
						<Text style={styles.text16}>
							{"34"}
						</Text>
					</View>
					<View style={styles.row8}>
						<Text style={styles.text21}>
							{"Hired"}
						</Text>
						<View style={styles.view3}>
							<View style={styles.box7}>
							</View>
						</View>
						<Text style={styles.text16}>
							{"8"}
						</Text>
					</View>
				</View>
				<View style={styles.column7}>
					<Text style={styles.text22}>
						{"Application Sources"}
					</Text>
					<View style={styles.row2}>
						<Image
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/cabdsc89_expires_30_days.png" }}
							resizeMode="stretch"
							style={styles.image6}
						/>
						<View style={styles.column8}>
							<View style={styles.row9}>
								<View style={styles.row2}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/7z3ttcar_expires_30_days.png" }}
										resizeMode="stretch"
										style={styles.image7}
									/>
									<Text style={styles.text23}>
										{"LinkedIn"}
									</Text>
								</View>
								<Text style={styles.text24}>
									{"42%"}
								</Text>
							</View>
							<View style={styles.row9}>
								<View style={styles.row2}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/ih2io9wz_expires_30_days.png" }}
										resizeMode="stretch"
										style={styles.image7}
									/>
									<Text style={styles.text23}>
										{"Direct"}
									</Text>
								</View>
								<Text style={styles.text24}>
									{"28%"}
								</Text>
							</View>
							<View style={styles.row9}>
								<View style={styles.row2}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/opoc36v9_expires_30_days.png" }}
										resizeMode="stretch"
										style={styles.image7}
									/>
									<Text style={styles.text23}>
										{"Referral"}
									</Text>
								</View>
								<Text style={styles.text24}>
									{"18%"}
								</Text>
							</View>
							<View style={styles.row9}>
								<View style={styles.row2}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/oyu742w5_expires_30_days.png" }}
										resizeMode="stretch"
										style={styles.image7}
									/>
									<Text style={styles.text23}>
										{"Other"}
									</Text>
								</View>
								<Text style={styles.text24}>
									{"12%"}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
			<Navigation currentScreen="analytics" onNavigate={handleNavigate} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	box: {
		width: 10,
		height: 10,
	},
	box2: {
		height: 6,
		flex: 1,
		backgroundColor: "#0D5C63",
		marginTop: 15,
		marginRight: 12,
		borderRadius: 3,
	},
	box3: {
		width: 114,
		height: 6,
		backgroundColor: "#0D5C63",
		borderRadius: 3,
	},
	box4: {
		height: 6,
		backgroundColor: "#F9F5F0",
	},
	box5: {
		width: 22,
		height: 6,
		backgroundColor: "#0D5C63",
		borderRadius: 3,
	},
	box6: {
		width: 14,
		height: 6,
		backgroundColor: "#0D5C63",
		borderRadius: 3,
	},
	box7: {
		width: 4,
		height: 6,
		backgroundColor: "#0D5C63",
		borderRadius: 3,
	},
    box8: {
		width: 80,
		height: 6,
		backgroundColor: "#0D5C63",
		borderRadius: 3,
	},
	button: {
		backgroundColor: "#0D5C63",
		borderRadius: 12,
		paddingVertical: 3,
		paddingHorizontal: 14,
		marginRight: 16,
	},
	button2: {
		backgroundColor: "#F9F5F0",
		borderRadius: 12,
		paddingVertical: 8,
		paddingHorizontal: 11,
		marginRight: 16,
	},
	button3: {
		backgroundColor: "#F9F5F0",
		borderRadius: 12,
		paddingVertical: 3,
		paddingHorizontal: 10,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingTop: 50,
		marginBottom: 15,
	},
	column2: {
		flex: 1,
		backgroundColor: "#EBF6F7",
		borderRadius: 12,
		paddingVertical: 10,
        margin:8,
		shadowColor: "#0D5C6336",
		shadowOpacity: 0.2,
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowRadius: 12,
		elevation: 12,
	},
	column3: {
		flex: 1,
		backgroundColor: "#F2EDF5",
		borderRadius: 12,
		paddingVertical: 10,
		paddingRight: 15,
		marginRight: 8,
		shadowColor: "#7A618136",
		shadowOpacity: 0.2,
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowRadius: 12,
		elevation: 12,
	},
	column4: {
		flex: 1,
		backgroundColor: "#FDF8EE",
		borderRadius: 12,
		paddingVertical: 10,
		shadowColor: "#E2B05336",
		shadowOpacity: 0.2,
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowRadius: 12,
		elevation: 12,
	},
	column5: {
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 13,
		marginBottom: 21,
		marginHorizontal: 20,
	},
	column6: {
		flex: 1,
		marginRight: 14,
	},
	column7: {
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingTop: 18,
		paddingBottom: 25,
		paddingHorizontal: 11,
		marginBottom: 105,
		marginHorizontal: 20,
	},
	column8: {
		flex: 1,
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
		width: 10,
		height: 10,
		marginRight: 2,
	},
	image5: {
		width: 40,
		height: 1,
		marginBottom: 3,
		marginLeft: 3,
	},
	image6: {
		width: 100,
		height: 100,
		marginRight: 33,
	},
	image7: {
		width: 10,
		height: 10,
		marginRight: 8,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		paddingVertical: 12,
		paddingHorizontal: 20,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
	},
	row3: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 11,
		marginLeft: 20,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 25,
		marginHorizontal: 10,
	},
	row5: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 15,
	},
	row6: {
		flexDirection: "row",
		marginBottom: 3,
		marginHorizontal: 11,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 3,
		marginHorizontal: 11,
	},
	row8: {
		flexDirection: "row",
		marginLeft: 11,
		marginRight: 22,
	},
	row9: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
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
		marginBottom: 10,
		marginLeft: 25,
	},
	text3: {
		color: "#FFFFFF",
		fontSize: 15,
	},
	text4: {
		color: "#000000",
		fontSize: 15,
	},
	text5: {
		color: "#0D5C63",
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 15,
	},
	text6: {
		color: "#0D5C63",
		fontSize: 13,
		fontWeight: "bold",
		marginLeft: 15,
	},
	text7: {
		color: "#0D5C63",
		fontSize: 13,
	},
	text8: {
		color: "#826B89",
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 15,
	},
	text9: {
		color: "#826B89",
		fontSize: 13,
		fontWeight: "bold",
		marginLeft: 15,
	},
	text10: {
		color: "#826B89",
		fontSize: 13,
		marginRight: 2,
	},
	text11: {
		color: "#E2B053",
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 15,
	},
	text12: {
		color: "#E2B053",
		fontSize: 13,
		fontWeight: "bold",
		marginLeft: 15,
	},
	text13: {
		color: "#E2B053",
		fontSize: 13,
	},
	text14: {
		color: "#000000",
		fontSize: 13,
		fontWeight: "bold",
		marginBottom: 7,
		marginLeft: 11,
	},
	text15: {
		color: "#8A88A8",
		fontSize: 13,
		marginRight: 31,
	},
	text16: {
		color: "#000000",
		fontSize: 10,
		fontWeight: "bold",
	},
	text17: {
		color: "#8A88A8",
		fontSize: 13,
		marginRight: 30,
	},
	text18: {
		color: "#8A88A8",
		fontSize: 13,
		marginRight: 19,
	},
	text19: {
		color: "#8A88A8",
		fontSize: 13,
		marginRight: 24,
	},
	text20: {
		color: "#8A88A8",
		fontSize: 13,
		marginRight: 12,
	},
	text21: {
		color: "#8A88A8",
		fontSize: 13,
		marginRight: 35,
	},
	text22: {
		color: "#000000",
		fontSize: 13,
		fontWeight: "bold",
		marginBottom: 19,
	},
	text23: {
		color: "#8A88A8",
		fontSize: 13,
	},
	text24: {
		color: "#000000",
		fontSize: 11,
		fontWeight: "bold",
	},
	view: {
		flex: 1,
		backgroundColor: "#F9F5F0",
		marginTop: 15,
		marginRight: 13,
	},
	view2: {
		flex: 1,
		backgroundColor: "#F9F5F0",
		marginTop: 15,
		marginRight: 16,
	},
	view3: {
		flex: 1,
		backgroundColor: "#F9F5F0",
		paddingLeft: 2,
		marginTop: 15,
		marginRight: 19,
	},
});






import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Navigation from "../components/Navigation";

export default function InboxPage(props) {
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
				// Already on inbox screen
				break;
			case "analytics":
				props.navigation.navigate("AnalyticsOverview");
				break;
			default:
				console.log("Screen not implemented yet:", screen);
		}
	};
	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.column}>
					<View style={styles.row3}>
						<View style={styles.view}>
							<Text style={styles.text2}>
								{"Inbox"}
							</Text>
						</View>
						<Image
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/nhwrva75_expires_30_days.png" }}
							resizeMode="stretch"
							style={styles.image4}
						/>
					</View>
					<View style={styles.row4}>
						<Image
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/agnh8q2r_expires_30_days.png" }}
							resizeMode="stretch"
							style={styles.image5}
						/>
						<View style={styles.view2}>
							<Text style={styles.text3}>
								{"Search messages ..."}
							</Text>
						</View>
					</View>
					<View style={styles.row2}>
						<TouchableOpacity style={styles.button} onPress={() => {}}>
							<Text style={styles.text4}>
								{"All"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button2} onPress={() => {}}>
							<Text style={styles.text5}>
								{"Candidates"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button2} onPress={() => {}}>
							<Text style={styles.text5}>
								{"Team"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button3} onPress={() => {}}>
							<Text style={styles.text5}>
								{"Unread(6)"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.column2}>
					<View style={styles.row5}>
						<View style={styles.row6}>
							<View style={styles.view3}>
								<Text style={styles.text6}>
									{"S"}
								</Text>
								<View style={styles.view5}>
									<Text style={styles.text7}>
										{"2"}
									</Text>
								</View>
							</View>
						</View>
						<View style={styles.column3}>
							<View style={styles.row7}>
								<View style={styles.view6}>
									<Text style={styles.text8}>
										{"Elan Tran"}
									</Text>
								</View>
								<View>
									<Text style={styles.text9}>
										{"2:34 PM"}
									</Text>
								</View>
							</View>
							<TouchableOpacity style={styles.button4} onPress={() => {}}>
								<Text style={styles.text10}>
									{"Sr. Team Leader"}
								</Text>
							</TouchableOpacity>
							<View style={styles.view7}>
								<Text style={styles.text11}>
									{"Hi! Thank you for the invite — looking forward to it"}
								</Text>
							</View>
						</View>
					</View>
					
					<View style={styles.row5}>
						<View style={styles.row6}>
							<View style={styles.view8}>
								<Text style={styles.text6}>
									{"M"}
								</Text>
								<View style={styles.view5}>
									<Text style={styles.text7}>
										{"3"}
									</Text>
								</View>
							</View>
						</View>
						<View style={styles.column3}>
							<View style={styles.row7}>
								<View style={styles.view9}>
									<Text style={styles.text8}>
										{"Marcus Liu"}
									</Text>
								</View>
								<View>
									<Text style={styles.text9}>
										{"2:34 PM"}
									</Text>
								</View>
							</View>
							<TouchableOpacity style={styles.button4} onPress={() => {}}>
								<Text style={styles.text10}>
									{"Staff Eng"}
								</Text>
							</TouchableOpacity>
							<View style={styles.view10}>
								<Text style={styles.text11}>
									{"@Alex Can you review Ana Costa before EOD?"}
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.row5}>
						<View style={styles.row6}>
							<View style={styles.view3}>
								<Text style={styles.text6}>
									{"S"}
								</Text>

								<View style={styles.view11}>
									<Text style={styles.text7}>
										{"1"}
									</Text>
								</View>
							</View>
						</View>
						<View style={styles.column3}>
							<View style={styles.row7}>
								<View style={styles.view6}>
									<Text style={styles.text8}>
										{"Priya Sharma"}
									</Text>
								</View>
								<View>
									<Text style={styles.text9}>
										{"2:34 PM"}
									</Text>
								</View>
							</View>
							<TouchableOpacity style={styles.button6} onPress={() => {}}>
								<Text style={styles.text14}>
									{"Sr. Team Leader"}
								</Text>
							</TouchableOpacity>
							<View style={styles.view12}>
								<Text style={styles.text11}>
									{"Hi! Thank you for the invite — looking forward to it"}
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.row9}>
						<View style={styles.column4}>
							<TouchableOpacity style={styles.button7} onPress={() => {}}>
								<Text style={styles.text15}>
									{"L"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button8} onPress={() => {}}>
								<View style={styles.view13}>
									<Text style={styles.text12}>
										{"A"}
									</Text>
								</View>
							</TouchableOpacity>
						</View>
						<View style={styles.column5}>
							<View style={styles.row10}>
								<View style={styles.view6}>
									<Text style={styles.text8}>
										{"frontend-hiring"}
									</Text>
								</View>
								<View>
									<Text style={styles.text9}>
										{"2:34 PM"}
									</Text>
								</View>
							</View>
							<View style={styles.view14}>
								<Text style={styles.text16}>
									{"Priya S: @Alex Done! Final panel scheduled..."}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
			<Navigation currentScreen="inbox" onNavigate={handleNavigate} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	button: {
		backgroundColor: "#0D5C63",
		borderRadius: 18,
		paddingVertical: 12,
		paddingHorizontal: 11,
		marginRight: 10,
	},
	button2: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#F3EFE9",
		borderRadius: 18,
		paddingVertical: 7,
		marginRight: 10,
	},
	button3: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#F3EFE9",
		borderRadius: 18,
		paddingVertical: 7,
		marginRight: 29,
	},
	button4: {
		alignSelf: "flex-start",
		backgroundColor: "#EBF6F7",
		borderRadius: 10,
		paddingVertical: 6,
		paddingHorizontal: 8,
		marginBottom: 2,
	},
	button5: {
		width: 48,
		height: 48,
		backgroundColor: "#E8EAE6",
		borderRadius: 14,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 10,
	},
	button6: {
		alignSelf: "flex-start",
		backgroundColor: "#F2EDF5",
		borderRadius: 10,
		paddingVertical: 6,
		paddingHorizontal: 8,
		marginBottom: 2,
	},
	button7: {
		position: "absolute",
		top: -8,
		right: -8,
		width: 32,
		height: 32,
		backgroundColor: "#F2EDF5",
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		zIndex: 2,
	},
	button8: {
		position: "absolute",
		top: 2,
		right: 2,
		width: 48,
		height: 48,
		backgroundColor: "#E8EAE6",
		borderRadius: 14,
		alignItems: "center",
		justifyContent: "center",
		zIndex: 1,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingVertical: 11,
		paddingHorizontal: 20,
		marginHorizontal: 2,
	},
	column2: {
		marginBottom: 80,
	},
	column3: {
		flex: 1,
		paddingBottom: 0,
		paddingRight: 10,
        
	},
	column4: {
		position: "relative",
		width: 70,
		height: 70,
		marginRight: 10,
        marginLeft: -10,
        marginTop: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	column5: {
		flex: 1,
		paddingBottom: 0,
	},
	image4: {
		width: 36,
		height: 36,
	},
	image5: {
		borderRadius: 12,
		width: 28,
		height: 25,
		marginRight: 10,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
        marginTop: 29,
		marginBottom: 10,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F3EFE9",
		borderRadius: 12,
		padding: 10,
		marginBottom: 10,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#F0F0F0",
        borderTopColor: "#F0F0F0",
        borderlàmTopWidth: 1,
	},
	row6: {
		flexDirection: "row",
		backgroundColor: "transparent",
		borderRadius: 0,
		paddingVertical: 0,
		paddingHorizontal: 0,
        marginLeft: -10,
        
	},
	row7: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 2,
	},
	row8: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#F0F0F0",
	},
	row9: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#F0F0F0",
	},
	row10: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	text2: {
		color: "#000000",
		fontSize: 20,
		fontWeight: "bold",
	},
	text3: {
		color: "#8A88A8",
		fontSize: 13,
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 13,
	},
	text5: {
		color: "#000000",
		fontSize: 11,
	},
	text6: {
		color: "#7A6181",
		fontSize: 18,
		fontWeight: "bold",
	},
	text7: {
		color: "#FFFFFF",
		fontSize: 10,
		fontWeight: "bold",
	},
	text8: {
		color: "#1A1828",
		fontSize: 14,
		fontWeight: "bold",
	},
	text9: {
		color: "#8A88A8",
		fontSize: 10,
	},
	text10: {
		color: "#0D5C63",
		fontSize: 9,
		fontWeight: "bold",
	},
	text11: {
		color: "#1A1828",
		fontSize: 12,
	},
	text12: {
		color: "#0D5C63",
		fontSize: 18,
		fontWeight: "bold",
	},
	text13: {
		color: "#8A88A8",
		fontSize: 12,
	},
	text14: {
		color: "#7A6181",
		fontSize: 9,
		fontWeight: "bold",
	},
	text15: {
		color: "#7A6181",
		fontSize: 14,
		fontWeight: "bold",
	},
	text16: {
		color: "#0D5C63",
		fontSize: 12,
	},
	view: {
		paddingVertical: 7,
		paddingHorizontal: 3,
	},
	view2: {
		paddingTop: 3,
	},
	view3: {
		position: "relative",
		width: 48,
		height: 48,
		backgroundColor: "#7A618117",
		borderRadius: 14,
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 15,
		marginRight: 12,
	},
	view4: {
		backgroundColor: "transparent",
		borderRadius: 0,
		padding: 0,
	},
	view5: {
		position: "absolute",
		top: -6,
		right: -6,
		width: 24,
		height: 24,
		backgroundColor: "#0D5C63",
		borderRadius: 12,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 2,
		borderColor: "#FFFFFF",
	},
	view7: {
		paddingBottom: 0,
		paddingRight: 20,
	},
	view6: {
		paddingBottom: 3,
	},
	view8: {
		position: "relative",
		width: 48,
		height: 48,
		backgroundColor: "#7A618117",
		borderRadius: 14,
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 15,
		marginRight: 12,
	},
	view9: {
		paddingBottom: 3,
		paddingRight: 10,
	},
	view10: {
		paddingBottom: 0,
		paddingRight: 20,
	},
	view11: {
		position: "absolute",
		top: -6,
		right: -6,
		width: 24,
		height: 24,
		alignSelf: "flex-start",
		backgroundColor: "#0D5C63",
		borderRadius: 12,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 2,
		borderColor: "#FFFFFF",
		paddingHorizontal: 0,
	},
	view12: {
		paddingBottom: 0,
		paddingRight: 20,
	},
	view13: {
		width: "100%",
		height: "100%",
		backgroundColor: "transparent",
		borderRadius: 14,
		alignItems: "center",
		justifyContent: "center",
	},
	view14: {
		paddingBottom: 0,
		paddingRight: 20,
	},
});

import React, { useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "../components/Navigation";

export default function MainDashboard({ navigation }) {
	const [textInput1, onChangeTextInput1] = useState('');
	
	const handleNavigate = (screen) => {
		// Map recruiter screens to navigation routes
		const screenMap = {
			dashboard: "MainDashboard",
			active: "JobListingActive",
			draft: "JobListingDraft",
			talent: "TalentList",
			inbox: "InboxPage",
			analytics: "AnalyticsOverview",
			todolist: "ToDoList",
			teamoverview: "TeamOverview",
			companyprofile: "CompanyProfilePreviewAbout",
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
						<View>
							<Text style={styles.text2}>
								{"Welcome back"}
							</Text>
							<Text style={styles.text3}>
								{"Thanh Thu Phung"}
							</Text>
						</View>
						<View style={styles.box}>
						</View>
						<TouchableOpacity style={styles.button} onPress={() => {}}>
							<Image
								source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/rv38f9z8_expires_30_days.png" }}
								resizeMode="stretch"
								style={styles.image4}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button2} onPress={() => handleNavigate("companyprofile")}>
							<Text style={styles.text4}>
								{"AR"}
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.row4}>
						<Image
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/qgol999f_expires_30_days.png" }}
							resizeMode="stretch"
							style={styles.image5}
						/>
						<TextInput
							placeholder={"Search candidates, jobs, companies..."}
							value={textInput1}
							onChangeText={onChangeTextInput1}
							style={styles.input}
						/>
					</View>
				</View>
			</View>
			<ScrollView style={styles.scrollView}>
				<View style={styles.column2}>
					<View style={styles.row5}>
						<View style={styles.column3}>
							<Text style={styles.text5}>
								{"12"}
							</Text>
							<Text style={styles.text6}>
								{"Active Jobs"}
							</Text>
							<Text style={styles.text7}>
								{"3 new"}
							</Text>
						
						</View>
						<View style={styles.column4}>
							<Text style={styles.text8}>
								{"73"}
							</Text>
							<Text style={styles.text9}>
								{"New apps"}
							</Text>
							<Text style={styles.text10}>
								{"Today"}
							</Text>
						</View>
						<View style={styles.column5}>
							<Text style={styles.text11}>
								{"5"}
							</Text>
							<Text style={styles.text12}>
								{"Interviews"}
							</Text>
							<Text style={styles.text13}>
								{"Today"}
							</Text>
						</View>
						<View style={styles.column6}>
							<Text style={styles.text14}>
								{"2"}
							</Text>
							<Text style={styles.text15}>
								{"Offers Out"}
							</Text>
							<Text style={styles.text46}>
								{"3 new"}
							</Text>
						</View>
					</View>
					<View style={styles.column7}>
						<View style={styles.row6}>
							<Text style={styles.text16}>
								{"Pipeline"}
							</Text>
							<Text style={styles.text17}>
								{"73 total"}
							</Text>
						</View>
						<View style={styles.row7}>
							<View style={styles.column8}>
								<View style={styles.box2}>
								</View>
								<View style={styles.column9}>
									<Text style={styles.text18}>
										{"New"}
									</Text>
									<Text style={styles.text19}>
										{"34"}
									</Text>
								</View>
							</View>
							<View style={styles.column10}>
								<View style={styles.box3}>
								</View>
								<View style={styles.column11}>
									<Text style={styles.text18}>
										{"Screen"}
									</Text>
									<Text style={styles.text20}>
										{"22"}
									</Text>
								</View>
							</View>
							<View style={styles.column12}>
								<View style={styles.box4}>
								</View>
								<View style={styles.column13}>
									<Text style={styles.text18}>
										{"Interviews"}
									</Text>
									<Text style={styles.text21}>
										{"11"}
									</Text>
								</View>
							</View>
							<View style={styles.column14}>
								<View style={styles.box5}>
								</View>
								<View style={styles.column15}>
									<Text style={styles.text18}>
										{"Offers"}
									</Text>
									<Text style={styles.text22}>
										{"4"}
									</Text>
								</View>
							</View>
							<View style={styles.column16}>
								<View style={styles.box6}>
								</View>
								<View style={styles.column17}>
									<Text style={styles.text18}>
										{"Hired"}
									</Text>
									<Text style={styles.text23}>
										{"2"}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.column18}>
						<Text style={styles.text24}>
							{"Applications This Week"}
						</Text>
						<Image
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/70vs7krg_expires_30_days.png" }}
							resizeMode="stretch"
							style={styles.image7}
						/>
					</View>
					<View style={styles.row8}>
						<Text style={styles.text16}>
							{"Urgent Roles"}
						</Text>
						<Text style={styles.text6}>
							{"See all"}
						</Text>
					</View>
					<View style={styles.column19}>
						<View style={styles.row9}>
							<View style={styles.row2}>
								<TouchableOpacity style={styles.button3} onPress={() => {}}>
									<Text style={styles.text25}>
										{"D"}
									</Text>
								</TouchableOpacity>
								<View>
									<Text style={styles.text26}>
										{"Sr. Product Designer"}
									</Text>
									<View style={styles.column20}>
										<View style={styles.row10}>
											<Text style={styles.text27}>
												{"Design"}
											</Text>
											<Text style={styles.text28}>
												{"47 Applications"}
											</Text>
										</View>
										<Image
											source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/lzvsqq6m_expires_30_days.png" }}
											resizeMode="stretch"
											style={styles.image8}
										/>
									</View>
								</View>
							</View>
							<TouchableOpacity style={styles.button4} onPress={() => {}}>
								<Text style={styles.text29}>
									{"3d left"}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.row11}>
							<TouchableOpacity style={styles.button5} onPress={() => {}}>
								<Text style={styles.text30}>
									{"E"}
								</Text>
							</TouchableOpacity>
							<View style={styles.column21}>
								<Text style={styles.text31}>
									{"Staff Engineer"}
								</Text>
								<View style={styles.row12}>
									<Text style={styles.text32}>
										{"Engineering"}
									</Text>
									<Text style={styles.text28}>
										{"89 Applications"}
									</Text>
								</View>
							</View>
							<View style={styles.box7}>
							</View>
							<TouchableOpacity style={styles.button6} onPress={() => {}}>
								<Text style={styles.text33}>
									{"1d left"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.row8}>
						<Text style={styles.text16}>
							{"Task"}
						</Text>
						<TouchableOpacity onPress={() => handleNavigate("todolist")}>
							<Text style={styles.text6}>
								{"See all"}
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.column19}>
						<TouchableOpacity style={styles.row13} onPress={() => handleNavigate("todolist")}>
							<View style={styles.row14}>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/prmx76ev_expires_30_days.png" }}
									resizeMode="stretch"
									style={styles.image9}
								/>
								<View style={styles.column22}>
									<Text style={styles.text34}>
										{"Review 12 new applications staff "}
									</Text>
									<View style={styles.row15}>
										<View style={styles.view}>
											<Text style={styles.text35}>
												{"high"}
											</Text>
										</View>
										<Text style={styles.text36}>
											{"Today"}
										</Text>
									</View>
								</View>
							</View>
							<View style={styles.box8}>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.row16} onPress={() => handleNavigate("todolist")}>
							<View style={styles.row14}>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/w2l0gy28_expires_30_days.png" }}
									resizeMode="stretch"
									style={styles.image10}
								/>
								<View style={styles.column22}>
									<Text style={styles.text34}>
										{"Post updated JD for UX researcher"}
									</Text>
									<View style={styles.row15}>
										<View style={styles.view2}>
											<Text style={styles.text37}>
												{"medium"}
											</Text>
										</View>
										<Text style={styles.text36}>
											{"Tomorrow"}
										</Text>
									</View>
								</View>
							</View>
							<View style={styles.box8}>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.row8}>
						<Text style={styles.text16}>
							{"Team Member"}
						</Text>
						<TouchableOpacity onPress={() => handleNavigate("teamoverview")}>
							<Text style={styles.text6}>
								{"See all"}
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.column19}>
						<View style={styles.row17}>
							<View style={styles.row2}>
								<TouchableOpacity style={styles.button7} onPress={() => {}}>
									<Text style={styles.text38}>
										{"A"}
									</Text>
								</TouchableOpacity>
								<View>
									<View style={styles.column23}>
										<Text style={styles.text16}>
											{"Alex Rivera"}
										</Text>
										<Text style={styles.text39}>
											{"Lead Recruiter"}
										</Text>
									</View>
									<View style={styles.row15}>
										<Text style={styles.text40}>
											{"5 active roles"}
										</Text>
										<Image
											source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/x5m2d4f7_expires_30_days.png" }}
											resizeMode="stretch"
											style={styles.image11}
										/>
										<Text style={styles.text41}>
											{"2 offers"}
										</Text>
									</View>
								</View>
							</View>
							<View>
								<View style={styles.view3}>
									<View style={styles.box9}>
									</View>
								</View>
								<Text style={styles.text42}>
									{"5/8 capacity"}
								</Text>
							</View>
						</View>
						<View style={styles.row18}>
							<View style={styles.row2}>
								<TouchableOpacity style={styles.button8} onPress={() => {}}>
									<Text style={styles.text38}>
										{"P"}
									</Text>
								</TouchableOpacity>
								<View>
									<View style={styles.column24}>
										<Text style={styles.text16}>
											{"Priya Sharma"}
										</Text>
										<Text style={styles.text43}>
											{"Sr. Recruiter"}
										</Text>
									</View>
									<View style={styles.row15}>
										<Text style={styles.text40}>
											{"4 active roles"}
										</Text>
										<Image
											source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/qsotst1n_expires_30_days.png" }}
											resizeMode="stretch"
											style={styles.image11}
										/>
										<Text style={styles.text41}>
											{"1 offers"}
										</Text>
									</View>
								</View>
							</View>
							<View>
								<View style={styles.view4}>
									<View style={styles.box10}>
									</View>
								</View>
								<Text style={styles.text42}>
									{"4/8 capacity"}
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.box11}>
					</View>
				</View>
			</ScrollView>
			<Navigation currentScreen="dashboard" onNavigate={handleNavigate} />
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
		paddingBottom: 8,
		borderBottomWidth: 1,
		borderBottomColor: "#E8E6F0",
	},
	box: {
		flex: 1,
	},
	box2: {
		height: 55,
		backgroundColor: "#0D5C63",
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		marginBottom: 1,
	},
	box3: {
		height: 39,
		backgroundColor: "#1A7A83",
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		marginBottom: 1,
	},
	box4: {
		height: 28,
		backgroundColor: "#7A6181",
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		marginBottom: 1,
	},
	box5: {
		height: 16,
		backgroundColor: "#E2B053",
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		marginBottom: 1,
	},
	box6: {
		height: 5,
		backgroundColor: "#16A34A",
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		marginBottom: 1,
	},
	box7: {
		flex: 1,
		alignSelf: "stretch",
	},
	box8: {
		width: 15,
		height: 14,
		backgroundColor: "#FFFFFF",
		borderColor: "#4A4868",
		borderRadius: 3,
		borderWidth: 1,
	},
	box9: {
		width: 40,
		height: 4,
		backgroundColor: "#2C7077",
	},
	box10: {
		width: 35,
		height: 4,
		backgroundColor: "#8D7893",
	},
	box11: {
		height: 1,
		backgroundColor: "#F9F5F0",
	},
	box12: {
		height: 2,
		backgroundColor: "#0D5C63",
		marginBottom: 5,
		marginHorizontal: 19,
	},
	button: {
		backgroundColor: "#F3EFE9",
		borderRadius: 10,
		padding: 9,
		marginTop: 16,
		marginRight: 11,
	},
	button2: {
		backgroundColor: "#156E75",
		borderRadius: 10,
		paddingVertical: 9,
		paddingHorizontal: 8,
		marginTop: 16,
	},
	button3: {
		backgroundColor: "#7A61811A",
		borderRadius: 12,
		paddingVertical: 4,
		paddingHorizontal: 14,
		marginRight: 5,
	},
	button4: {
		backgroundColor: "#FDF8EE",
		borderRadius: 15,
		paddingVertical: 11,
		paddingHorizontal: 10,
	},
	button5: {
		backgroundColor: "#0D5C631A",
		borderRadius: 12,
		paddingVertical: 14,
		paddingHorizontal: 17,
		marginRight: 5,
	},
	button6: {
		backgroundColor: "#FEF2F2",
		borderRadius: 15,
		paddingVertical: 11,
		paddingHorizontal: 12,
	},
	button7: {
		backgroundColor: "#2F7379",
		borderRadius: 12,
		paddingVertical: 5,
		paddingHorizontal: 13,
		marginRight: 11,
	},
	button8: {
		backgroundColor: "#8D7893",
		borderRadius: 12,
		paddingVertical: 6,
		paddingHorizontal: 13,
		marginRight: 11,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingTop: 0,
		paddingHorizontal: 20,
		marginBottom: 0,
	},
	column2: {
		marginBottom: 55,
		marginHorizontal: 20,
	},
	column3: {
		flex: 1,
		backgroundColor: "#EBF6F7",
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 10,
		marginRight: 12,
		minHeight: 100,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#0D5C634D",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 1
		},
		shadowRadius: 1,
		elevation: 1,
	},
	column4: {
		flex: 1,
		backgroundColor: "#F2EDF5",
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 10,
		marginRight: 12,
		minHeight: 100,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#7A618136",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 2
		},
		shadowRadius: 12,
		elevation: 12,
	},
	column5: {
		flex: 1,
		backgroundColor: "#FDF8EE",
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 10,
		marginRight: 12,
		minHeight: 100,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#E2B05336",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 2
		},
		shadowRadius: 12,
		elevation: 12,
	},
	column6: {
		flex: 1,
		backgroundColor: "#F0FDF4",
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 10,
		minHeight: 100,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#16A34A36",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 2
		},
		shadowRadius: 12,
		elevation: 12,
	},
	column7: {
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 7,
		paddingHorizontal: 11,
		marginBottom: 15,
	},
	column8: {
		flex: 1,
		marginRight: 8,
	},
	column9: {
		marginHorizontal: 19,
	},
	column10: {
		flex: 1,
		marginTop: 16,
		marginRight: 8,
	},
	column11: {
		marginHorizontal: 9,
	},
	column12: {
		flex: 1,
		marginTop: 27,
		marginRight: 8,
	},
	column13: {
		marginHorizontal: 1,
	},
	column14: {
		flex: 1,
		marginTop: 39,
		marginRight: 8,
	},
	column15: {
		marginHorizontal: 14,
	},
	column16: {
		flex: 1,
		marginTop: 50,
	},
	column17: {
		marginHorizontal: 17,
	},
	column18: {
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingTop: 18,
		marginBottom: 15,
	},
	column19: {
		marginBottom: 15,
	},
	column20: {
		alignSelf: "flex-start",
	},
	column21: {
		paddingBottom: 8,
		paddingRight: 1,
	},
	column22: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	column23: {
		alignSelf: "flex-start",
		marginRight: 46,
	},
	column24: {
		alignSelf: "flex-start",
		marginRight: 38,
	},
	column25: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	column26: {
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
		width: 20,
		height: 20,
	},
	image5: {
		width: 24,
		height: 24,
		marginLeft: 18,
		marginRight: 5,
	},
	image6: {
		width: 12,
		height: 10,
	},
	image7: {
		height: 30,
		marginBottom: 35,
		marginHorizontal: 28,
	},
	image8: {
		width: 2,
		height: 1,
		marginLeft: 41,
	},
	image9: {
		width: 35,
		height: 34,
		marginRight: 6,
	},
	image10: {
		width: 35,
		height: 35,
		marginRight: 6,
	},
	image11: {
		width: 2,
		height: 2,
		marginRight: 2,
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
	image14: {
		width: 18,
		height: 18,
		marginBottom: 2,
	},
	image15: {
		width: 18,
		height: 18,
		marginBottom: 2,
	},
	image16: {
		width: 18,
		height: 18,
		marginBottom: 2,
	},
	input: {
		color: "#A5A2B9",
		fontSize: 13,
		marginRight: 4,
		flex: 1,
		paddingVertical: 9,
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
		marginBottom: 8,
		marginTop: 16,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F3EFE9",
		borderRadius: 20,
		paddingVertical: 10,
		paddingLeft: 16,
		paddingRight: 16,
		marginBottom: 5,
		marginHorizontal: 0,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 15,
		marginTop: 10,
	},
	row6: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 12,
	},
	row7: {
		flexDirection: "row",
	},
	row8: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 15,
	},
	row9: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		padding: 12,
		marginBottom: 10,
	},
	row10: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 1,
	},
	row11: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		padding: 12,
	},
	row12: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 1,
	},
	row13: {
		flexDirection: "row",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 11,
		marginBottom: 14,
	},
	row14: {
		flex: 1,
		flexDirection: "row",
		marginRight: 11,
	},
	row15: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
	},
	row16: {
		flexDirection: "row",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 11,
	},
	row17: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 5,
		paddingHorizontal: 11,
		marginBottom: 16,
	},
	row18: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 5,
		paddingHorizontal: 11,
	},
	row19: {
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
		fontSize: 13,
		marginRight: 62,
		marginTop: 4,
		marginBottom: 2,
	},
	text3: {
		color: "#000000",
		fontSize: 18,
		fontWeight: "bold",
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 15,
		fontWeight: "bold",
	},
	text5: {
		color: "#0D5C63",
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 1,
	},
	text6: {
		color: "#0D5C63",
		fontSize: 9,
		fontWeight: "bold",
	},
	text7: {
		color: "#0D5C63",
		fontSize: 9,
		marginLeft: 0,
	},
	text8: {
		color: "#826B89",
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 1,
	},
	text9: {
		color: "#826B89",
		fontSize: 10,
		fontWeight: "bold",
	},
	text10: {
		color: "#826B89",
		fontSize: 9,
		marginLeft: 1,
	},
	text11: {
		color: "#E2B053",
		fontSize: 16,
		fontWeight: "bold",
	},
	text12: {
		color: "#E2B053",
		fontSize: 10,
		fontWeight: "bold",
	},
	text13: {
		color: "#E2B053",
		fontSize: 9,
		marginLeft: 1,
	},
	text14: {
		color: "#22A954",
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 1,
	},
	text15: {
		color: "#22A954",
		fontSize: 10,
		fontWeight: "bold",
	},
	text16: {
		color: "#000000",
		fontSize: 13,
		fontWeight: "bold",
	},
	text17: {
		color: "#0D5C63",
		fontSize: 10,
		fontWeight: "bold",
	},
	text18: {
		color: "#B6B4C8",
		fontSize: 8,
	},
	text19: {
		color: "#2B7177",
		fontSize: 10,
		fontWeight: "bold",
	},
	text20: {
		color: "#1A7A83",
		fontSize: 10,
		fontWeight: "bold",
		marginLeft: 11,
	},
	text21: {
		color: "#7A6181",
		fontSize: 10,
		fontWeight: "bold",
		marginLeft: 24,
	},
	text22: {
		color: "#E2B053",
		fontSize: 10,
		fontWeight: "bold",
		marginLeft: 12,
	},
	text23: {
		color: "#16A34A",
		fontSize: 10,
		fontWeight: "bold",
	},
	text24: {
		color: "#000000",
		fontSize: 13,
		fontWeight: "bold",
		marginBottom: 19,
		marginLeft: 11,
	},
	text25: {
		color: "#7A6181",
		fontSize: 14,
		fontWeight: "bold",
	},
	text26: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 10,
	},
	text27: {
		color: "#D3D2DF",
		fontSize: 12,
		marginRight: 19,
	},
	text28: {
		color: "#D3D2DF",
		fontSize: 12,
	},
	text29: {
		color: "#C4892A",
		fontSize: 9,
		fontWeight: "bold",
	},
	text30: {
		color: "#0D5C63",
		fontSize: 14,
		fontWeight: "bold",
	},
	text31: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 9,
	},
	text32: {
		color: "#D3D2DF",
		fontSize: 12,
		marginRight: 16,
	},
	text33: {
		color: "#E05B5B",
		fontSize: 9,
		fontWeight: "bold",
	},
	text34: {
		color: "#000000",
		fontSize: 12,
		fontWeight: "bold",
		marginBottom: 1,
	},
	text35: {
		color: "#E46E6E",
		fontSize: 10,
		fontWeight: "bold",
	},
	text36: {
		color: "#4A4868",
		fontSize: 10,
	},
	text37: {
		color: "#609499",
		fontSize: 10,
		fontWeight: "bold",
	},
	text38: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "bold",
	},
	text39: {
		color: "#B6B4C8",
		fontSize: 11,
	},
	text40: {
		color: "#000000",
		fontSize: 10,
		marginRight: 10,
	},
	text41: {
		color: "#42B46D",
		fontSize: 11,
		fontWeight: "bold",
	},
	text42: {
		color: "#000000",
		fontSize: 10,
	},
	text43: {
		color: "#B6B4C8",
		fontSize: 11,
		marginRight: 19,
	},
	text44: {
		color: "#0D5C63",
		fontSize: 13,
		fontWeight: "600",
		marginTop: 3,
		textAlign: "center",
	},
	text45: {
		color: "#9B99B0",
		fontSize: 11,
		fontWeight: "bold",
		marginTop: 2,
		textAlign: "center",
	},
	text46: {
		color: "#22A954",
		fontSize: 9,
		marginLeft: 0,
	},
	view: {
		backgroundColor: "#FEF2F2",
		borderRadius: 12,
		paddingHorizontal: 11,
		marginRight: 10,
	},
	view2: {
		backgroundColor: "#ECF2F3",
		borderRadius: 12,
		paddingHorizontal: 14,
		marginRight: 10,
	},
	view3: {
		alignSelf: "flex-start",
		backgroundColor: "#F2F3E9",
		paddingRight: 20,
	},
	view4: {
		alignSelf: "flex-start",
		backgroundColor: "#F2F3E9",
		paddingRight: 25,
	},
});




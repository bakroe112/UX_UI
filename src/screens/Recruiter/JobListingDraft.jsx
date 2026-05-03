import React, { useCallback, useMemo } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, LayoutAnimation, UIManager, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

function JobListingDraft(props) {
	const handleNavigateToActive = useCallback(() => {
		LayoutAnimation.configureNext(
			LayoutAnimation.create(
				350,
				LayoutAnimation.Types.linear,
				LayoutAnimation.Properties.opacity
			)
		);
		props.onNavigate("active");
	}, [props]);

	const handleNavigateToDraft = useCallback(() => {
		LayoutAnimation.configureNext(
			LayoutAnimation.create(
				350,
				LayoutAnimation.Types.linear,
				LayoutAnimation.Properties.opacity
			)
		);
		props.onNavigate("draft");
	}, [props]);

	const handleNavigateToClosed = useCallback(() => {
		LayoutAnimation.configureNext(
			LayoutAnimation.create(
				350,
				LayoutAnimation.Types.linear,
				LayoutAnimation.Properties.opacity
			)
		);
		props.onNavigate("closed");
	}, [props]);

	const handlePostJob = useCallback(() => {
		props.onNavigate("basicinformation");
	}, [props]);
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.column}>
					<View style={styles.row3}>
						<Text style={styles.text2}>
							{"Job Listings"}
						</Text>
					<TouchableOpacity style={styles.buttonRow} onPress={handlePostJob}>
							<Image
								source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/tkpwpw22_expires_30_days.png" }}
								resizeMode="stretch"
								style={styles.image4}
							/>
							<Text style={styles.text3}>
								{"Post Job"}
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.row2}>
					<TouchableOpacity style={styles.view} onPress={handleNavigateToActive}>
							<Text style={styles.text4}>
								{"Active (8)"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.view2} onPress={handleNavigateToDraft}>
							<Text style={styles.text5}>
								{"Draft (3)"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.view3} onPress={handleNavigateToClosed}>
							<Text style={styles.text4}>
								{"Closed (12)"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		<ScrollView 
				style={styles.scrollView}
				removeClippedSubviews={true}
				scrollEventThrottle={16}
				maxToRenderPerBatch={10}
				updateCellsBatchingPeriod={50}
			>
				<View style={styles.row4}>
					<Image
						source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/52pe13q3_expires_30_days.png" }}
						resizeMode="stretch"
						style={styles.image5}
					/>
					<Text style={styles.text6}>
						{"3 drafts incomplete - publish to start receiving applications"}
					</Text>
				</View>
				<View style={styles.column2}>
					<View style={styles.column3}>
						<View style={styles.row5}>
							<View style={styles.row2}>
								<TouchableOpacity style={styles.button} onPress={() => {}}>
									<Text style={styles.text7}>
										{"U"}
									</Text>
								</TouchableOpacity>
								<View style={styles.column4}>
									<Text style={styles.text}>
										{"UX Researcher"}
									</Text>
									<View style={{ flexDirection: 'row', alignItems: 'center' }}>
										<Text style={styles.text8}>
											{"Design"}
										</Text>
										<Text style={styles.text9}>
											{"Edited 2h ago"}
										</Text>
									</View>
									
								</View>
							</View>
							<TouchableOpacity style={styles.button2} onPress={() => {}}>
								<Text style={styles.text10}>
									{"Draft"}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.row6}>
							<Text style={styles.text8}>
								{"Completion"}
							</Text>
							<Text style={styles.text11}>
								{"80%"}
							</Text>
						</View>
						<View style={styles.view4}>
							<View style={styles.box}>
							</View>
						</View>
						<View style={styles.row7}>
							<TouchableOpacity style={styles.button3} onPress={() => {}}>
								<Text style={styles.text12}>
									{"Continue Editing"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button4} onPress={() => {}}>
								<Text style={styles.text13}>
									{"Discard"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.column3}>
						<View style={styles.row8}>
							<View style={styles.row2}>
								<TouchableOpacity style={styles.button5} onPress={() => {}}>
									<Text style={styles.text14}>
										{"D"}
									</Text>
								</TouchableOpacity>
								<View style={styles.column5}>
									<Text style={styles.text}>
										{"DevOps Engineer"}
									</Text>
									<View style={{ flexDirection: 'row', alignItems: 'center' }}>
										<Text style={styles.text8}>
											{"Engineering"}
										</Text>
										<Text style={styles.text15}>
											{"Edited 1d ago"}
										</Text>
									</View>
									
								</View>
							</View>
							<TouchableOpacity style={styles.button2} onPress={() => {}}>
								<Text style={styles.text10}>
									{"Draft"}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.row9}>
							<Text style={styles.text8}>
								{"Completion"}
							</Text>
							<Text style={styles.text5}>
								{"45%"}
							</Text>
						</View>
						<View style={styles.box2}>
							<View style={styles.box2Inner}>
							</View>
						</View>
						<View style={styles.row7}>
							<TouchableOpacity style={styles.button6} onPress={() => {}}>
								<Text style={styles.text12}>
									{"Continue Editing"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button7} onPress={() => {}}>
								<Text style={styles.text13}>
									{"Discard"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.column3}>
						<View style={styles.row8}>
							<View style={styles.row2}>
								<TouchableOpacity style={styles.button8} onPress={() => {}}>
									<Text style={styles.text16}>
										{"P"}
									</Text>
								</TouchableOpacity>
								<View style={styles.column7}>
									<Text style={styles.text}>
										{"Product Manager"}
									</Text>
									<View style={{ flexDirection: 'row', alignItems: 'center' }}>
										<Text style={styles.text8}>
											{"Product"}
										</Text>
										<Text style={styles.text17}>
											{"Edited 3d ago"}
										</Text>
									</View>
									
								</View>
							</View>
							<TouchableOpacity style={styles.button2} onPress={() => {}}>
								<Text style={styles.text10}>
									{"Draft"}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.row11}>
							<Text style={styles.text8}>
								{"Completion"}
							</Text>
							<Text style={styles.text18}>
								{"20%"}
							</Text>
						</View>
						<View style={styles.view6}>
							<View style={styles.box3}>
							</View>
						</View>
					<View style={styles.row7}>
							<TouchableOpacity style={styles.button9} onPress={() => {}}>
								<Text style={styles.text12}>
									{"Continue Editing"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button7} onPress={() => {}}>
								<Text style={styles.text13}>
									{"Discard"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default React.memo(JobListingDraft);

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
		width: "80%",
		height: 4,
		backgroundColor: "#7A6181",
		borderRadius: 2,
	},
	box2: {
		height: 4,
		backgroundColor: "#F3EFE9B0",
		marginBottom: 7,
		marginHorizontal: 10,
		borderRadius: 2,
	},
	box2Inner: {
		width: "45%",
		height: 4,
		backgroundColor: "#0D5C63",
		borderRadius: 2,
	},
	box3: {
		width: "20%",
		height: 4,
		backgroundColor: "#E2B053",
		borderRadius: 2,
	},
	box4: {
		width: 24,
		height: 2,
		backgroundColor: "#0D5C63",
		marginBottom: 7,
	},
	button: {
		backgroundColor: "#F4F2F5",
		borderRadius: 12,
		paddingVertical: 8,
		paddingHorizontal: 15,
		marginRight: 5,
	},
	button2: {
		backgroundColor: "#F3EFE9",
		borderRadius: 15,
		paddingVertical: 3,
		paddingHorizontal: 18,
	
	},
	button3: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#7A6181",
		borderRadius: 12,
		paddingVertical: 10,
		marginRight: 4,
	},
	button4: {
		backgroundColor: "#F3EFE9",
		borderRadius: 12,
		paddingVertical: 10,
		paddingHorizontal: 15,
	},
	button5: {
		backgroundColor: "#ECF2F3",
		borderRadius: 12,
		paddingVertical: 10,
		paddingHorizontal: 15,
		marginRight: 5,
	},
	button6: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#0D5C63",
		borderRadius: 12,
		paddingVertical: 10,
		marginRight: 4,
	},
	button7: {
		backgroundColor: "#F3EFE9",
		borderRadius: 12,
		paddingVertical: 10,
		paddingHorizontal: 15,
	},
	button8: {
		backgroundColor: "#FDF9F1",
		borderRadius: 12,
		paddingVertical: 8,
		paddingHorizontal: 15,
		marginRight: 5,

	},
	button9: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#E2B053",
		borderRadius: 12,
		paddingVertical: 10,
		marginRight: 4,
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
		marginBottom: 12,
		marginHorizontal: 20,
	},
	column3: {
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 10,
		paddingHorizontal: 11,
		marginBottom: 16,
	},
	column4: {
		paddingBottom: 10,
		marginRight: 22,
	},
	column5: {
		paddingBottom: 9,
	},
	column6: {
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 10,
		paddingHorizontal: 11,
		marginBottom: 16,
	},
	column7: {
		paddingBottom: 10,
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
	column10: {
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
		width: 18,
		height: 18,
		marginRight: 8,
	},
	image6: {
		width: 2,
		height: 2,
		marginLeft: 46,
	},
	image7: {
		width: 2,
		height: 2,
		marginLeft: 74,
	},
	image8: {
		width: 2,
		height: 2,
		marginLeft: 51,
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
		marginBottom: -13,
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
		backgroundColor: "#FDF8EE",
		borderColor: "#E2B053",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 12,
		paddingHorizontal: 11,
		marginBottom: 16,
		marginHorizontal: 20,
	},
	row5: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 15,
		marginHorizontal: 11,
	},
	row6: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 6,
		marginHorizontal: 11,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 11,
	},
	row8: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 17,
		marginHorizontal: 11,
	},
	row9: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 7,
		marginHorizontal: 11,
	},
	row10: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	row11: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 6,
		marginHorizontal: 11,
	},
	row12: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		paddingVertical: 12,
		paddingHorizontal: 8,
		borderTopWidth: 1,
		borderTopColor: "#E8E6F0",
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
		paddingTop: 15,
	},
	text: {
		color: "#000000",
		fontSize: 14,
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
		color: "#4A4868",
		fontSize: 13,
	},
	text5: {
		color: "#0D5C63",
		fontSize: 13,
		fontWeight: "600",
		marginTop: 2,
		textAlign: "center",
	},
	text6: {
		color: "#E2B053",
		fontSize: 13,
		flex: 1,
	},
	text7: {
		color: "#7A6181",
		fontSize: 18,
		fontWeight: "bold",
	},
	text8: {
		color: "#B6B4C8",
		fontSize: 12,
		marginRight: 20,
	},
	text9: {
		color: "#B6B4C8",
		fontSize: 12,
		
	},
	text10: {
		color: "#4A4868",
		fontSize: 13,
		fontWeight: 500,
	},
	text11: {
		color: "#7A6181",
		fontSize: 12,
		fontWeight: "bold",
	},
	text12: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: 500,
	},
	text13: {
		color: "#000000",
		fontSize: 13,
		fontWeight: 500,
	},
	text14: {
		color: "#0D5C63",
		fontSize: 18,
		fontWeight: "bold",
	},
	text15: {
		color: "#B6B4C8",
		fontSize: 12,
	},
	text16: {
		color: "#E2B053",
		fontSize: 18,
		fontWeight: "bold",
	},
	text17: {
		color: "#B6B4C8",
		fontSize: 12,
	},
	text18: {
		color: "#E2B053",
		fontSize: 12,
		fontWeight: "bold",
	},
	text19: {
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
	},
	view2: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 12,
		marginRight: 26,
		borderBottomWidth: 2,
		borderBottomColor: "#0D5C63",
	},
	view3: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 12,
	},
	view4: {
		backgroundColor: "#F3EFE9B0",
		paddingLeft: 1,
		marginBottom: 8,
		marginHorizontal: 10,
	},
	view5: {
		backgroundColor: "#F3EFE9",
		borderRadius: 15,
		paddingBottom: 2,
		paddingHorizontal: 18,
	},
	view6: {
		backgroundColor: "#F3EFE9B0",
		marginBottom: 7,
		marginHorizontal: 10,
	},
});




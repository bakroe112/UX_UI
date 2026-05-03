import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";

export default (props) => {
	return (
		<View style={{ display: props.currentScreen === "requirements" ? "flex" : "none", flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.fixedHeader}>
					<View style={styles.column}>
						<View style={styles.row3}>
							<View style={styles.backHeader}>
								<TouchableOpacity onPress={() => props.onNavigate("description")}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/90hgzfwo_expires_30_days.png" }}
										resizeMode={"stretch"}
										style={styles.image4}
									/>
								</TouchableOpacity>
							</View>
							<Text style={styles.text10}>
								{"Step 3 of 5"}
							</Text>
							<Text style={styles.text10}>
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
							<View style={styles.box3}>
							</View>
							<View style={styles.box4}>
							</View>
						</View>
						<Text style={styles.text3}>
							{"Requirements"}
						</Text>
					</View>
				</View>
				<ScrollView style={styles.scrollView}>
					<View style={styles.column2}>
						<Text style={styles.text4}>
							{"REQUIRED SKILLS"}
						</Text>
						<View style={styles.column3}>
							<View style={styles.row5}>
								<TouchableOpacity style={styles.button} onPress={() => alert('Pressed!')}>
									<Text style={styles.text5}>
										{"Figma"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.button2} onPress={() => alert('Pressed!')}>
									<Text style={styles.text5}>
										{"Design Systems"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.button3} onPress={() => alert('Pressed!')}>
									<Text style={styles.text5}>
										{"Prototyping"}
									</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.row5}>
								<TouchableOpacity style={styles.button4} onPress={() => alert('Pressed!')}>
									<Text style={styles.text5}>
										{"User Research"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.button5} onPress={() => alert('Pressed!')}>
									<Text style={styles.text6}>
										{"Accessibility"}
									</Text>
								</TouchableOpacity>
								<View style={styles.box5}>
								</View>
							</View>
							<TouchableOpacity style={styles.button6} onPress={() => alert('Pressed!')}>
								<Text style={styles.text6}>
									{"Cross-function collaboration"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.buttonRow} onPress={() => alert('Pressed!')}>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/toc82r1y_expires_30_days.png" }}
									resizeMode={"stretch"}
									style={styles.image5}
								/>
								<Text style={styles.text2}>
									{"Add skill"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.column4}>
						<Text style={styles.text7}>
							{"NICE TO HAVE"}
						</Text>
						<View style={styles.row5}>
							<TouchableOpacity style={styles.button7} onPress={() => alert('Pressed!')}>
								<Text style={styles.text10}>
									{"React"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button8} onPress={() => alert('Pressed!')}>
								<Text style={styles.text10}>
									{"Motion Design"}
								</Text>
							</TouchableOpacity>
						</View>
						<View >
							<View style={styles.row6}>
								<View style={styles.row2}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/6uzrf8hb_expires_30_days.png" }}
										resizeMode={"stretch"}
										style={styles.image6}
									/>
									<View >
										<Text style={styles.text11}>
											{"Minimum Experience"}
										</Text>
										<Text style={styles.text8}>
											{"5 years"}
										</Text>
									</View>
								</View>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/4obtyb4o_expires_30_days.png" }}
									resizeMode={"stretch"}
									style={styles.image7}
								/>
							</View>
							<View style={styles.row7}>
								<View style={styles.row8}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/dcau0pgu_expires_30_days.png" }}
										resizeMode={"stretch"}
										style={styles.image6}
									/>
									<View style={styles.column5}>
										<Text style={styles.text11}>
											{"Education"}
										</Text>
										<Text style={styles.text9}>
											{"Bachelor's Degree "}
										</Text>
									</View>
								</View>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/45zvxpwj_expires_30_days.png" }}
									resizeMode={"stretch"}
									style={styles.image7}
								/>
							</View>
						</View>
					</View>
					<TouchableOpacity style={styles.button9} onPress={() => props.onNavigate("screeningqs")}>
						<Text style={styles.text}>
							{"Next: Screening Questions"}
						</Text>
					</TouchableOpacity>
					<View style={styles.box10}>
					</View>
				</ScrollView>
			</View>
		</View>
	)
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
	backHeader: {
		marginRight: 12,
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
	box3: {
		height: 2,
		flex: 1,
		backgroundColor: "#0D5C6333",
		marginRight: 6,
	},
	box4: {
		height: 2,
		flex: 1,
		backgroundColor: "#0D5C6333",
	},
	box5: {
		width: 115,
		height: 35,
	},
	box10: {
		height: 2,
		backgroundColor: "#F9F5F0",
		marginRight: 48,
		marginBottom: 50,
	},
	button: {
		backgroundColor: "#0D5C63",
		borderRadius: 15,
		paddingVertical: 6,
		paddingHorizontal: 19,
		marginRight: 7,
	},
	button2: {
		backgroundColor: "#0D5C63",
		borderRadius: 15,
		paddingVertical: 6,
		paddingHorizontal: 15,
		marginRight: 7,
	},
	button3: {
		backgroundColor: "#0D5C63",
		borderRadius: 15,
		paddingVertical: 6,
		paddingHorizontal: 14,
	},
	button4: {
		backgroundColor: "#0D5C63",
		borderRadius: 15,
		paddingVertical: 6,
		paddingHorizontal: 14,
		marginRight: 7,
	},
	button5: {
		backgroundColor: "#F3EFE9",
		borderColor: "#E7E8E3",
		borderRadius: 15,
		borderWidth: 1,
		paddingVertical: 6,
		paddingHorizontal: 11,
		marginRight: 7,
	},
	button6: {
		alignSelf: "flex-start",
		backgroundColor: "#F3EFE9",
		borderColor: "#E7E8E3",
		borderRadius: 15,
		borderWidth: 1,
		paddingVertical: 6,
		paddingHorizontal: 12,
		marginBottom: 10,
		marginRight: 116,
	},
	button7: {
		backgroundColor: "#F3EFE9",
		borderColor: "#E7E8E3",
		borderRadius: 15,
		borderWidth: 1,
		paddingVertical: 6,
		paddingHorizontal: 13,
		marginRight: 7,
	},
	button8: {
		backgroundColor: "#F3EFE9",
		borderColor: "#E7E8E3",
		borderRadius: 15,
		borderWidth: 1,
		paddingVertical: 6,
		paddingHorizontal: 10,
	},
	button9: {
		alignItems: "center",
		backgroundColor: "#E2B053",
		borderRadius: 12,
		paddingVertical: 11,
		marginHorizontal: 20,
		marginTop: 16,
		marginBottom: 20,
	},
	buttonRow: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#E7E8E3",
		borderRadius: 15,
		borderWidth: 1,
		paddingVertical: 6,
		paddingHorizontal: 14,
		marginRight: 229,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingTop: 0,
		paddingHorizontal: 20,
		marginBottom: 10,
	},
	column2: {
		alignSelf: "flex-start",
		marginBottom: 16,
		marginLeft: 20,
	},
	column3: {
		alignSelf: "flex-start",
	},
	column4: {
		marginBottom: 12,
		marginHorizontal: 20,
	},
	column5: {
		flex: 1,
	},
	image4: {
		width: 38,
		height: 38,
	},
	image5: {
		width: 8,
		height: 8,
		marginRight: 3,
	},
	image6: {
		width: 12,
		height: 12,
		marginRight: 17,
	},
	image7: {
		width: 12,
		height: 12,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 18,
		marginTop: 30,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 18,
	},
	row5: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	row6: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 7,
		paddingHorizontal: 16,
		marginBottom: 12,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 7,
		paddingHorizontal: 16,
	},
	row8: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		marginRight: 30,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F9F5F0",
		paddingBottom: 10,
		paddingTop: 15,
	},
	text: {
		color: "#000000",
		fontSize: 15,
		fontWeight: "bold",
	},
	text2: {
		color: "#4A4868",
		fontSize: 13,
		opacity: 0.3,
	},
	text3: {
		color: "#000000",
		fontSize: 18,
		fontWeight: "bold",
	},
	text4: {
		color: "#4A4868",
		fontSize: 12,
		fontWeight: "bold",
		marginBottom: 12,
		opacity: 0.8,
	},
	text5: {
		color: "#FFFFFF",
		fontSize: 13,
		fontWeight: 450,
	},
	text6: {
		color: "#4A4868",
		fontSize: 13,
		fontWeight: 500,
	},
	text7: {
		color: "#4A4868",
		fontSize: 12,
		fontWeight: 450,
		marginBottom: 10,
		fontWeight: "bold",
	},
	text8: {
		color: "#000000",
		fontSize: 13,
		fontWeight: "bold",
		marginRight: 82,
	},
	text9: {
		color: "#000000",
		fontSize: 13,
		fontWeight: "bold",
	},
	text10: {
		color: "#4A4868",
		fontSize: 13,
		fontWeight: 500,
		opacity: 0.8,
	},
	text11: {
		color: "#4A4868",
		fontSize: 13,
		opacity: 0.8,
	},
});

import React, { useState } from "react";
import { View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";

export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	const [textInput4, onChangeTextInput4] = useState('');
	const [textInput5, onChangeTextInput5] = useState('');
	const [textInput6, onChangeTextInput6] = useState('');
	return (
		<View style={{ display: props.currentScreen === "basicinformation" ? "flex" : "none", flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.fixedHeader}>
					<View style={styles.column}>
						<View style={styles.row3}>
							<View style={styles.backHeader}>
								<TouchableOpacity onPress={() => props.onNavigate("active")}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/90hgzfwo_expires_30_days.png" }}
										resizeMode={"stretch"}
										style={styles.image4}
									/>
								</TouchableOpacity>
							</View>
							<Text style={styles.text2}>
								{"Step 1 of 5"}
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
							<View style={styles.box3}>
							</View>
							<View style={styles.box4}>
							</View>
						</View>
						<Text style={styles.text3}>
							{"Basic Information"}
						</Text>

					</View>
				</View>
				<ScrollView style={styles.scrollView}>
					<View style={styles.column2}>
						<View style={styles.column3}>
							<Text style={styles.text5}>
								{"Job Title"}
							</Text>
							<View style={styles.row5}>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/tl01ydr0_expires_30_days.png" }}
									resizeMode={"stretch"}
									style={styles.image5}
								/>
								<TextInput
									placeholder={"Senior Product Designer"}
									value={textInput1}
									onChangeText={onChangeTextInput1}
									style={styles.input}
									placeholderTextColor={"#4A4868"}
								/>
							</View>
						</View>
						<View style={styles.column3}>
							<Text style={styles.text5}>
								{"Department"}
							</Text>
							<View style={styles.row6}>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/z3pesdjo_expires_30_days.png" }}
									resizeMode={"stretch"}
									style={styles.image5}
								/>
								<TextInput
									placeholder={"Design & Product"}
									value={textInput2}
									onChangeText={onChangeTextInput2}
									style={styles.input2}
									placeholderTextColor={"#4A4868"}
								/>
							</View>
						</View>
						<View style={styles.column3}>
							<Text style={styles.text5}>
								{"Location"}
							</Text>
							<View style={styles.row6}>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/cbj37scs_expires_30_days.png" }}
									resizeMode={"stretch"}
									style={styles.image6}
								/>
								<TextInput
									placeholder={"San Francisco / Remote"}
									value={textInput3}
									onChangeText={onChangeTextInput3}
									style={styles.input2}
									placeholderTextColor={"#4A4868"}
								/>
							</View>
						</View>
						<View style={styles.column3}>
							<Text style={styles.text5}>
								{"Employment Type"}
							</Text>
							<View style={styles.row6}>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/f8xekabh_expires_30_days.png" }}
									resizeMode={"stretch"}
									style={styles.image5}
								/>
								<TextInput
									placeholder={"Full-time"}
									value={textInput4}
									onChangeText={onChangeTextInput4}
									style={styles.input2}
									placeholderTextColor={"#4A4868"}
								/>
							</View>
						</View>
						<View style={styles.column3}>
							<Text style={styles.text5}>
								{"Salary Range"}
							</Text>
							<View style={styles.row6}>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/k82yknrk_expires_30_days.png" }}
									resizeMode={"stretch"}
									style={styles.image7}
								/>
								<TextInput
									placeholder={"$140,000 - $165,000"}
									value={textInput5}
									onChangeText={onChangeTextInput5}
									style={styles.input2}
									placeholderTextColor={"#4A4868"}
								/>
							</View>
						</View>
						<View style={styles.column3}>
							<Text style={styles.text5}>
								{"Experience Level"}
							</Text>
							<View style={styles.row6}>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/dn7a8qzn_expires_30_days.png" }}
									resizeMode={"stretch"}
									style={styles.image5}
								/>
								<TextInput
									placeholder={"Senior (5-10 years)"}
									value={textInput6}
									onChangeText={onChangeTextInput6}
									style={styles.input2}
									placeholderTextColor={"#4A4868"}
								/>
							</View>
						</View>
						<TouchableOpacity style={styles.button} onPress={() => props.onNavigate("description")}>
							<Text style={styles.text}>
								{"Next: Job Description"}
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
		backgroundColor: "#0D5C6333",
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
	button: {
		alignItems: "center",
		backgroundColor: "#E2B053",
		borderRadius: 12,
		paddingVertical: 12,
		marginBottom: 50,
		paddingTop: 15,
		marginTop: 20,
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
	column3: {
		marginBottom: 6,

	},
	image4: {
		width: 38,
		height: 38,
	},
	image5: {
		width: 16,
		height: 16,
		marginLeft: 17,
		marginRight: 16,
	},
	image6: {
		width: 16,
		height: 20,
		marginLeft: 17,
		marginRight: 16,
	},
	image7: {
		width: 10,
		height: 17,
		marginLeft: 20,
		marginRight: 19,
	},
	input: {
		color: "#000000",
		fontSize: 13,
		marginRight: 4,
		flex: 1,
		paddingVertical: 12,
		fontWeight: 600
	},
	input2: {
		color: "#4A4868",
		fontSize: 13,
		marginRight: 4,
		flex: 1,
		paddingVertical: 12,
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
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#0D5C63",
		borderRadius: 12,
		borderWidth: 1,
		minHeight: 15,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		minHeight: 15,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F9F5F0",
		paddingBottom: 20,
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
	},
	text3: {
		color: "#000000",
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
	},
	text4: {
		color: "#4A4868",
		fontSize: 14,
	},
	text5: {
		color: "#4A4868",
		fontSize: 13,
		fontWeight: "bold",
		marginBottom: 10,
	},
});

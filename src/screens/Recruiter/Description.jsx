import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";

export default (props) => {
	return (
		<View style={{ display: props.currentScreen === "description" ? "flex" : "none", flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.fixedHeader}>
					<View style={styles.column}>
						<View style={styles.row3}>
							<View style={styles.backHeader}>
								<TouchableOpacity onPress={() => props.onNavigate("basicinformation")}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/90hgzfwo_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image4}
									/>
								</TouchableOpacity>
							</View>
							<Text style={styles.text2}>
								{"Step 2 of 5"}
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
							<View style={styles.box3}>
							</View>
							<View style={styles.box4}>
							</View>
							<View style={styles.box5}>
							</View>
						</View>
						<Text style={styles.text3}>
							{"Job Description"}
						</Text>
					</View>
				</View>
				<ScrollView  style={styles.scrollView}>
					<View style={styles.column2}>
						<View style={styles.row5}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/wcubs6an_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.image5}
							/>
							<View style={styles.column3}>
								<View style={styles.row8}>
									<Text style={styles.text}>
										{"AI Writing Assistant"}
									</Text>
									<View style={styles.view}>
										<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
											<Text style={styles.text4}>
												{"Generate"}
											</Text>
										</TouchableOpacity>
									</View>
								</View>
								<Text style={styles.text2}>
									{"Generate a JD from job title + requirements"}
								</Text>
							</View>
						</View>
						<View style={styles.column4}>
							<Text style={styles.text5}>
								{"Role Overview"}
							</Text>
							<Text style={styles.text6}>
								{"We are looking for a Senior Product Designer to join our Design Systems team at Figma. You will own the design of core features used by 8M+ designers worldwide, collaborating closely with engineering and product managers to ship high-quality, accessible experiences."}
							</Text>
						</View>
						<View style={styles.column5}>
							<Text style={styles.text7}>
								{"Responsibilities"}
							</Text>
							<View style={styles.row6}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/cjvb6pfp_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={styles.image6}
								/>
								<Text style={styles.text8}>
									{"Own end-to-end design from concept to ship"}
								</Text>
								<View style={styles.box6}>
								</View>
							</View>
							<View style={styles.row7}>
								<View style={styles.column6}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/hmjymbjv_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image7}
									/>
								</View>
								<View >
									<Text style={styles.text2}>
										{"Collaborate with cross-functional teams"}
									</Text>
	
								</View>
							</View>
							<View style={styles.row7}>
								<View style={styles.column6}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/hmjymbjv_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image7}
									/>
								</View>
								<View >
									
									<Text style={styles.text2}>
										{"Contribute to our growing design system"}
									</Text>
								</View>
							</View>
						</View>
					</View>
				<TouchableOpacity style={styles.button2} onPress={() => props.onNavigate("requirements")}>
						<Text style={styles.text}>
							{"Next: Requirements"}
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
		marginRight: 5,
	},
	box4: {
		height: 2,
		flex: 1,
		backgroundColor: "#0D5C6333",
		marginRight: 6,
	},
	box5: {
		height: 2,
		flex: 1,
		backgroundColor: "#0D5C6333",
	},
	box6: {
		width: 5,
		height: 5,
	},
	box7: {
		height: 2,
		backgroundColor: "#F9F5F0",
		marginRight: 48,
		marginBottom: 50,
	},
	button: {
		backgroundColor: "#0D5C63",
		borderRadius: 10,
		paddingVertical: 3,
		paddingHorizontal: 8,
	},
	button2: {
		alignItems: "center",
		backgroundColor: "#E2B053",
		borderRadius: 12,
		paddingVertical: 6,
		marginHorizontal: 20,
		marginTop: 16,
		marginBottom: 20,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingTop: 0,
		paddingHorizontal: 20,
		marginBottom: 10,
	},
	column2: {
		marginBottom: 12,
		marginHorizontal: 20,
	},
	column3: {
		flex: 1,
		marginTop: -10,
	},
	column4: {
		backgroundColor: "#FFFFFF",
		borderColor: "#0D5C63",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 13,
		paddingRight: 11,
		marginBottom: 16,
	},
	column5: {
		backgroundColor: "#FFFFFF",
		borderColor: "#0D5C63",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 16,
		paddingRight: 20,
	},
	column6: {
		marginRight: 10,
	},
	image4: {
		width: 38,
		height: 38,
	},
	image5: {
		width: 15,
		height: 16,
		marginRight: 13,
	},
	image6: {
		width: 5,
		height: 5,
		marginTop: 8,
		marginRight: 10,
	},
	image7: {
		width: 5,
		height: 5,
	},
	image8: {
		width: 5,
		height: 5,
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
		backgroundColor: "#EBF6F7",
		borderColor: "#0D5C6399",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 18,
		paddingHorizontal: 15,
		marginBottom: 16,
	},
	row6: {
		alignSelf: "flex-start",
		flexDirection: "row",
		marginBottom: 1,
		marginLeft: 20,
	},
	row7: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 20,
		marginTop:8
	},
	row8: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
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
		marginTop: 10,
		marginBottom: 6,
	},
	text2: {
		color: "#4A4868",
		marginTop:-5,
		fontSize: 13,
	},
	text3: {
		color: "#000000",
		fontSize: 18,
		fontWeight: "bold",
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 11,
		fontWeight: 400,
	},
	text5: {
		color: "#4A4868",
		fontSize: 15,
		fontWeight: "bold",
		marginBottom: 8,
		marginLeft: 12,
		opacity: 0.7,
	},
	text6: {
		color: "#4A4868",
		fontSize: 13,
		marginLeft: 11,
		lineHeight: 18,
	},
	text7: {
		color: "#4A4868",
		fontSize: 15,
		fontWeight: "bold",
		marginBottom: 6,
		marginLeft: 12,
		opacity: 0.7,
	},
	text8: {
		color: "#4A4868",
		fontSize: 13,
		marginRight: 10,
		opacity: 0.7,
	},
	view: {
		alignItems: "flex-end",
		marginRight: 10,
	},
});

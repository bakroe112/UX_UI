import React, { useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default function TalentList(props) {
	const [textInput1, onChangeTextInput1] = useState('');
	
	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.column}>
					<View style={styles.row3}>
						<View>
							<Text style={styles.text2}>
								{"Sr. Product Designer"}
							</Text>
							<Text style={styles.text3}>
								{"34 candidates"}
							</Text>
						</View>
						<View style={styles.row2}>
							<TouchableOpacity style={styles.button} onPress={() => {}}>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/plixn6v0_expires_30_days.png" }}
									resizeMode="stretch"
									style={styles.image4}
								/>
							</TouchableOpacity>
							<Image
								source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/qc9hrg0i_expires_30_days.png" }}
								resizeMode="stretch"
								style={styles.image5}
							/>
						</View>
					</View>
					<View style={styles.row2}>
						<View style={styles.newTab}>
							<Text style={styles.text4}>
								{"New"}
							</Text>
						</View>
						<View style={styles.view2}>
							<Text style={styles.text5}>
								{"Screening"}
							</Text>
						</View>
						<View style={styles.view3}>
							<Text style={styles.text5}>
								{"Interview"}
							</Text>
						</View>
						<View style={styles.view3}>
							<Text style={styles.text5}>
								{"Offer"}
							</Text>
						</View>
						<View style={styles.view4}>
							<Text style={styles.text5}>
								{"Hired"}
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.column2}>
					<View style={styles.column3}>
						<View style={styles.row4}>
							<Image
								source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/y5oclg62_expires_30_days.png" }}
								resizeMode="stretch"
								style={styles.image6}
							/>
							<TextInput
								placeholder={"Search applicants..."}
								value={textInput1}
								onChangeText={onChangeTextInput1}
								style={styles.input}
							/>
						</View>
						<View style={styles.row5}>
							<View style={styles.row2}>
								<Text style={styles.text6}>
									{"34 new"}
								</Text>
								<Image
									source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/diih0csp_expires_30_days.png" }}
									resizeMode="stretch"
									style={styles.image7}
								/>
								<Text style={styles.text7}>
									{"Sorted by match score"}
								</Text>
							</View>
							<Text style={styles.text8}>
								{"Select"}
							</Text>
						</View>
					</View>
					<View>
						<View style={styles.row6}>
							<View style={styles.row2}>
								<TouchableOpacity style={styles.button2} onPress={() => {}}>
									<Text style={styles.text9}>
										{"S"}
									</Text>
								</TouchableOpacity>
								<View>
									<Text style={styles.text10}>
										{"Sarah Johnson"}
									</Text>
									<View style={styles.row7}>
										<Text style={styles.text11}>
											{"Sr. Product Designer"}
										</Text>
										<Image
											source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/xif78kte_expires_30_days.png" }}
											resizeMode="stretch"
											style={styles.image8}
										/>
										<Text style={styles.text12}>
											{"6 yrs"}
										</Text>
									</View>
								</View>
							</View>
							<View>
								<TouchableOpacity style={styles.button3} onPress={() => {}}>
									<Text style={styles.text13}>
										{"96%"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.button4} onPress={() => {}}>
									<Text style={styles.text13}>
										{"New"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View style={styles.row6}>
							<View style={styles.row2}>
								<TouchableOpacity style={styles.button5} onPress={() => {}}>
									<Text style={styles.text14}>
										{"M"}
									</Text>
								</TouchableOpacity>
								<View>
									<Text style={styles.text15}>
										{"Marcus Chen"}
									</Text>
									<View style={styles.row7}>
										<Text style={styles.text11}>
											{"Product Designer"}
										</Text>
										<Image
											source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/b4zlv38x_expires_30_days.png" }}
											resizeMode="stretch"
											style={styles.image8}
										/>
										<Text style={styles.text12}>
											{"4 yrs"}
										</Text>
									</View>
								</View>
							</View>
							<View>
								<TouchableOpacity style={styles.button6} onPress={() => {}}>
									<Text style={styles.text13}>
										{"88%"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.button4} onPress={() => {}}>
									<Text style={styles.text13}>
										{"New"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View style={styles.row6}>
							<View style={styles.row2}>
								<TouchableOpacity style={styles.button7} onPress={() => {}}>
									<Text style={styles.text16}>
										{"A"}
									</Text>
								</TouchableOpacity>
								<View>
									<Text style={styles.text17}>
										{"Ana Costa"}
									</Text>
									<View style={styles.row7}>
										<Text style={styles.text11}>
											{"Design System Lead"}
										</Text>
										<Image
											source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/xzskgm49_expires_30_days.png" }}
											resizeMode="stretch"
											style={styles.image9}
										/>
										<Text style={styles.text12}>
											{"7 yrs"}
										</Text>
									</View>
								</View>
							</View>
							<View>
								<TouchableOpacity style={styles.button6} onPress={() => {}}>
									<Text style={styles.text13}>
										{"84%"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.button4} onPress={() => {}}>
									<Text style={styles.text13}>
										{"New"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View style={styles.row8}>
							<View style={styles.row2}>
								<TouchableOpacity style={styles.button8} onPress={() => {}}>
									<Text style={styles.text18}>
										{"J"}
									</Text>
								</TouchableOpacity>
								<View>
									<Text style={styles.text19}>
										{"James Park"}
									</Text>
									<View style={styles.row7}>
										<Text style={styles.text20}>
											{"UX Designer"}
										</Text>
										<Image
											source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/7ytl0va4_expires_30_days.png" }}
											resizeMode="stretch"
											style={styles.image9}
										/>
										<Text style={styles.text12}>
											{"5 yrs"}
										</Text>
									</View>
								</View>
							</View>
							<View>
								<TouchableOpacity style={styles.button3} onPress={() => {}}>
									<Text style={styles.text13}>
										{"79%"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.button4} onPress={() => {}}>
									<Text style={styles.text13}>
										{"New"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	button: {
		backgroundColor: "#F3EFE9",
		borderRadius: 10,
		padding: 11,
		marginRight: 11,
	},
	button2: {
		backgroundColor: "#F4F2F5",
		borderRadius: 12,
		paddingVertical: 8,
		paddingHorizontal: 13,
		marginRight: 10,
	},
	button3: {
		alignSelf: "flex-start",
		backgroundColor: "#EBF6F7",
		borderRadius: 15,
		paddingVertical: 5,
		paddingHorizontal: 11,
		marginBottom: 5,
	},
	button4: {
		alignSelf: "flex-start",
		backgroundColor: "#EBF6F7",
		borderRadius: 15,
		paddingVertical: 5,
		paddingHorizontal: 11,
	},
	button5: {
		backgroundColor: "#EBF6F7",
		borderRadius: 12,
		paddingVertical: 8,
		paddingHorizontal: 11,
		marginRight: 10,
	},
	button6: {
		alignSelf: "flex-start",
		backgroundColor: "#EBF6F7",
		borderRadius: 15,
		paddingVertical: 3,
		paddingHorizontal: 10,
		marginBottom: 5,
	},
	button7: {
		backgroundColor: "#FCF8EF",
		borderRadius: 12,
		paddingVertical: 8,
		paddingHorizontal: 13,
		marginRight: 10,
	},
	button8: {
		backgroundColor: "#F0F1FB",
		borderRadius: 12,
		paddingVertical: 8,
		paddingHorizontal: 15,
		marginRight: 10,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingTop: 19,
		paddingHorizontal: 20,
		marginBottom: 20,
	},
	column2: {
		marginBottom: 89,
		marginHorizontal: 20,
	},
	column3: {
		marginBottom: 16,
	},
	image4: {
		width: 15,
		height: 15,
	},
	image5: {
		width: 38,
		height: 38,
	},
	image6: {
		borderRadius: 12,
		width: 24,
		height: 24,
		marginLeft: 18,
		marginRight: 5,
	},
	image7: {
		width: 3,
		height: 3,
		marginRight: 7,
	},
	image8: {
		width: 2,
		height: 2,
		marginRight: 7,
	},
	image9: {
		width: 2,
		height: 2,
		marginRight: 6,
	},
	input: {
		color: "#A5A2B9",
		fontSize: 13,
		marginRight: 4,
		flex: 1,
		paddingVertical: 17,
		opacity: 0.5,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
        marginTop: -10,
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 7,
		marginBottom: 15,
        marginTop: 25,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		marginBottom: 16,
	},
	row5: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	row6: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 20,
		paddingHorizontal: 11,
		marginBottom: 16,
	},
	row7: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
	},
	row8: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 15,
		paddingHorizontal: 11,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F9F5F0",
	},
	text2: {
		color: "#000000",
		fontSize: 18,
		fontWeight: "bold",
	},
	text3: {
		color: "#A7A6BE",
		fontSize: 13,
		marginRight: 93,
	},
	text4: {
		color: "#0D5C63",
		fontSize: 12,
		fontWeight: "bold",
	},
	text5: {
		color: "#4A4868",
		fontSize: 12,
	},
	text6: {
		color: "#A7A6BE",
		fontSize: 12,
		marginRight: 8,
	},
	text7: {
		color: "#A7A6BE",
		fontSize: 12,
	},
	text8: {
		color: "#0D5C63",
		fontSize: 11,
		fontWeight: 600
	},
	text9: {
		color: "#7A6181",
		fontSize: 14,
		fontWeight: "bold",
	},
	text10: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginRight: 52,
		marginBottom: 4,
	},
	text11: {
		color: "#B6B4C8",
		fontSize: 12,
		marginRight: 9,
	},
	text12: {
		color: "#B6B4C8",
		fontSize: 12,
	},
	text13: {
		color: "#0D5C63",
		fontSize: 9,
		fontWeight: "bold",
	},
	text14: {
		color: "#0D5C63",
		fontSize: 14,
		fontWeight: "bold",
	},
	text15: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginRight: 47,
		marginBottom: 4,
	},
	text16: {
		color: "#E2B053",
		fontSize: 14,
		fontWeight: "bold",
	},
	text17: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginRight: 76,
		marginBottom: 4,
	},
	text18: {
		color: "#6C77D6",
		fontSize: 14,
		fontWeight: "bold",
	},
	text19: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginRight: 28,
		marginBottom: 4,
	},
	text20: {
		color: "#B6B4C8",
		fontSize: 12,
		marginRight: 8,
	},
	view: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		paddingVertical: 20,
		marginRight: 7,
	},
	newTab: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		paddingVertical: 14,
		marginRight: 7,
		borderBottomWidth: 2,
		borderBottomColor: "#0D5C63",
	},
	view2: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 8,
		marginRight: 7,
	},
	view3: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 8,
		marginRight: 7,
	},
	view4: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 8,
	},
});

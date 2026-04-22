import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreeningQS({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.fixedHeader}>
				<View style={styles.column}>
					<View style={styles.row3}>
						<View style={styles.backHeader}>
							<TouchableOpacity onPress={() => navigation.goBack()}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/90hgzfwo_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image4}
									/>
								</TouchableOpacity>
							</View>
							<Text style={styles.text2}>
								{"Step 4 of 5"}
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
							<View style={styles.box2}>
							</View>
							<View style={styles.box3}>
							</View>
						</View>
						<Text style={styles.text3}>
							{"Screening Questions"}
						</Text>
						
					</View>
				</View>
				<ScrollView  style={styles.scrollView}>
					<View style={styles.column2}>
						<View style={styles.questionCard}>
							<View style={styles.questionContent}>
								<Text style={styles.questionTitle}>
									{"Are you legally authorized to work in the US?"}
								</Text>
								<View style={styles.questionTypes}>
									<TouchableOpacity style={styles.typeButton}>
										<Text style={styles.typeButtonText}>
											{"Yes/No"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.requiredButton}>
										<Text style={styles.requiredButtonText}>
											{"Required"}
										</Text>
									</TouchableOpacity>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/6mq2zisy_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.editIcon}
							/>
						</View>

						<View style={styles.questionCard}>
							<View style={styles.questionContent}>
								<Text style={styles.questionTitle}>
									{"How many years of experience do you have?"}
								</Text>
								<View style={styles.questionTypes}>
									<TouchableOpacity style={styles.typeButton}>
										<Text style={styles.typeButtonText}>
											{"Number"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.requiredButton}>
										<Text style={styles.requiredButtonText}>
											{"Required"}
										</Text>
									</TouchableOpacity>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/au1s7seu_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.editIcon2}
							/>
						</View>

						<View style={styles.questionCard}>
							<View style={styles.questionContent}>
								<Text style={styles.questionTitle}>
									{"Share a link to your portfolio or a recent case study."}
								</Text>
								<View style={styles.urlButtonWrapper}>
									<TouchableOpacity style={styles.urlTypeButton}>
										<Text style={styles.typeButtonText}>
											{"URL"}
										</Text>
									</TouchableOpacity>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/q59ekxlu_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.editIcon3}
							/>
						</View>
					</View>

					<View style={styles.addQuestionButton}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/gxkae04v_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.addIcon}
						/>
						<Text style={styles.addQuestionText}>
							{"Add screening question"}
						</Text>
					</View>

					<TouchableOpacity style={styles.aiSuggestButton}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/olK7k9QRuf/z3zt9v3g_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.aiIcon}
						/>
						<Text style={styles.aiSuggestText}>
							{"AI suggests 2 more role-specific questions based on your JD"}
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.publishButton} onPress={() => navigation.navigate("Review")}>
						<Text style={styles.publishButtonText}>
							{"Next: Review & Publish"}
						</Text>
					</TouchableOpacity>

					<View style={styles.box7}>
					</View>
				</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F9F5F0",
	},
	fixedHeader: {
		backgroundColor: "#FFFFFF",
		zIndex: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#F0F0F0",
		paddingTop: 8,
		paddingBottom: 0,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingTop: 0,
		paddingHorizontal: 20,
		marginBottom: 10,
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
	},
	box7: {
		height: 80,
	},
	image4: {
		width: 38,
		height: 38,
	},
	text2: {
		color: "#4A4868",
		fontSize: 13,
		fontWeight: "bold",
	},
	text3: {
		color: "#000000",
		fontSize: 18,
		fontWeight: "bold",
	},
	text4: {
		color: "#4A4868",
		fontSize: 14,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F9F5F0",
		paddingBottom: 42,
        paddingTop: 15,
	},
	column2: {
		marginBottom: 12,
		marginHorizontal: 20,
	},
	questionCard: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 11,
		marginBottom: 12,
	},
	questionContent: {
		flex: 1,
		paddingTop: 7,
	},
	questionTitle: {
		color: "#000000",
		fontSize: 13,
		fontWeight: "bold",
		marginBottom: 6,
	},
	questionTypes: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
	},
	typeButton: {
		backgroundColor: "#F3EFE9",
		borderRadius: 10,
		paddingVertical: 1,
		paddingHorizontal:9 ,
        marginRight: 20,
	},
	urlButtonWrapper: {
		alignSelf: "flex-start",
	},
	urlTypeButton: {
		backgroundColor: "#F3EFE9",
		borderRadius: 10,
		paddingVertical: 1,
		paddingHorizontal: 9,
		marginRight: 0,
	},
	typeButtonText: {
		color: "#000000",
		fontSize: 11,
	},
	requiredButton: {
		backgroundColor: "#FEF2F2",
		borderRadius: 10,
		paddingVertical: 1,
		paddingHorizontal: 7,
	},
	requiredButtonText: {
		color: "#E05B5B",
		fontSize: 11,
	},
	editIcon: {
		width: 11,
		height: 13,
	},
	editIcon2: {
		width: 12,
		height: 13,
	},
	editIcon3: {
		width: 12,
		height: 13,
	},
	addQuestionButton: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F9F5F0",
		borderColor: "#8A88A833",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 12,
		paddingLeft: 11,
		marginBottom: 12,
		marginHorizontal: 20,
	},
	addIcon: {
		width: 25,
		height: 25,
		marginRight: 9,
	},
	addQuestionText: {
		color: "#B6B4C8",
		fontSize: 13,
		fontWeight: "bold",
	},
	aiSuggestButton: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F2EDF5",
		borderColor: "#8A88A8",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 12,
		paddingHorizontal: 14,
		marginBottom: 12,
		marginHorizontal: 20,
	},
	aiIcon: {
		width: 15,
		height: 16,
		marginRight: 12,
	},
	aiSuggestText: {
		color: "#4A4868",
		fontSize: 13,
		flex: 1,
	},
	publishButton: {
		alignItems: "center",
		backgroundColor: "#E2B053",
		borderRadius: 12,
		paddingVertical: 11,
		marginHorizontal: 20,
	},
	publishButtonText: {
		color: "#000000",
		fontSize: 15,
		fontWeight: "bold",
	},
});

import React, { useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default function Notes(props) {
	const [textInput1, onChangeTextInput1] = useState('');

	return (
		<View style={{ display: props.currentScreen === "notes" ? "flex" : "none", flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.fixedHeader}>
					<View style={styles.column}>
						<View style={styles.row3}>
							<View style={styles.backHeader}>
								<TouchableOpacity onPress={() => props.onNavigate("resume")}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/90hgzfwo_expires_30_days.png" }}
										resizeMode="stretch"
										style={styles.image4}
									/>
								</TouchableOpacity>
							</View>
						<View>
							<View style={styles.view}>
								<Text style={styles.text2}>
									{"Sarahn Johnson"}
								</Text>
							</View>
							<View style={styles.view2}>
								<Text style={styles.text3}>
									{"Internal note · Team only"}
								</Text>
							</View>
						</View>
						</View>
						<View style={styles.row4}>
						<TouchableOpacity style={styles.view3} onPress={() => props.onNavigate("resume")}>
							<Text style={styles.text4}>
								{"Resume"}
							</Text>
						</TouchableOpacity>
						<View style={styles.notesTab}>
								<Text style={styles.text5}>
									{"Notes"}
								</Text>
							</View>
							<TouchableOpacity style={styles.view3} onPress={() => props.onNavigate("skillratings")}>
								<Text style={styles.text4}>
									{"Skills"}
								</Text>
							</TouchableOpacity>
							<View style={styles.view3}>
								<Text style={styles.text4}>
									{"Timeline"}
								</Text>
							</View>
						</View>
					</View>
				</View>
				<ScrollView style={styles.scrollView}>
					<View style={styles.column2}>
						<View style={styles.noteCard}>
							<View style={styles.noteHeader}>
								<TouchableOpacity style={styles.avatarA}>
									<Text style={styles.avatarAText}>
										{"A"}
									</Text>
								</TouchableOpacity>
								<View>
									<View style={styles.nameView}>
										<Text style={styles.nameText}>
											{"Alex R."}
										</Text>
									</View>
									<View style={styles.timeView}>
										<Text style={styles.timeText}>
											{"Today 10:22 AM"}
										</Text>
									</View>
								</View>
							</View>
							<View style={styles.noteContent}>
								<Text style={styles.noteText}>
									{"Excellent portfolio — design systems work at Airbnb is impressive. Strong culture fit. Recommend moving to final round."}
								</Text>
							</View>
						</View>

						<View style={styles.noteCard}>
							<View style={styles.noteHeader}>
								<TouchableOpacity style={styles.avatarP}>
									<Text style={styles.avatarPText}>
										{"P"}
									</Text>
								</TouchableOpacity>
								<View>
									<View style={styles.nameView}>
										<Text style={styles.nameText}>
											{"Priya S."}
										</Text>
									</View>
									<View style={styles.timeView}>
										<Text style={styles.timeText}>
											{"Today 10:22 AM"}
										</Text>
									</View>
								</View>
							</View>
							<View style={styles.noteContent}>
								<Text style={styles.noteText}>
									{"Excellent portfolio — design systems work at Airbnb is impressive. Strong culture fit. Recommend moving to final round."}
								</Text>
							</View>
						</View>

						<View style={styles.addNoteCard}>
							<View style={styles.addNoteTitle}>
								<Text style={styles.addNoteTitleText}>
									{"Add Note"}
								</Text>
							</View>
							<TextInput
								placeholder="Write your observations... "
								value={textInput1}
								onChangeText={onChangeTextInput1}
								style={styles.textInput}
								placeholderTextColor="#8A88A8"
							/>
							<View style={styles.tagButtonsRow}>
								<TouchableOpacity style={styles.tagButton}>
									<Text style={styles.tagButtonText}>
										{"Strong"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.tagButton}>
									<Text style={styles.tagButtonText}>
										{"Concern"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.tagButton}>
									<Text style={styles.tagButtonText}>
										{"Flag"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>

						<TouchableOpacity style={styles.saveButton}>
							<Text style={styles.saveButtonText}>
								{"Save notes"}
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</View>
	);
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
	column: {
		backgroundColor: "#FFFFFF",
		paddingTop: 0,
		paddingHorizontal: 20,
		marginBottom: 10,
	},
	column2: {
		marginHorizontal: 20,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 18,
		marginTop: 50,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 2,
		marginTop: -15,
		marginBottom: -10,
	},
	backHeader: {
		width: 48,
		height: 36,
	},
	image4: {
		width: 36,
		height: 36,
		marginRight: 16,
	},
	view: {
		alignSelf: "flex-start",
		paddingBottom: 1,
	},
	view2: {
		alignSelf: "flex-start",
		paddingBottom: 1,
	},
	view3: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 20,
	},
	notesTab: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 20,
		borderBottomWidth: 2,
		borderBottomColor: "#0D5C63",
	},
	text2: {
		color: "#1A1828",
		fontSize: 16,
		fontWeight: "bold",
	},
	text3: {
		color: "#8A88A8",
		fontSize: 13,
	},
	text4: {
		color: "#8A88A8",
		fontSize: 13,
	},
	text5: {
		color: "#0D5C63",
		fontSize: 14,
		fontWeight: "bold",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F9F5F0",
        paddingTop: 15,
	},
	noteCard: {
		backgroundColor: "#FFFFFF",
		borderRadius: 16,
		paddingVertical: 12,
		paddingHorizontal: 13,
		marginBottom: 16,
	},
	noteHeader: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	avatarA: {
		backgroundColor: "#0D5C631F",
		borderRadius: 8,
		paddingVertical: 8,
		paddingHorizontal: 12,
		marginRight: 10,
	},
	avatarAText: {
		color: "#0D5C63",
		fontSize: 10,
		fontWeight: "bold",
	},
	avatarP: {
		backgroundColor: "#7A61811F",
		borderRadius: 8,
		paddingVertical: 8,
		paddingHorizontal: 12,
		marginRight: 10,
	},
	avatarPText: {
		color: "#7A6181",
		fontSize: 10,
		fontWeight: "bold",
	},
	nameView: {
		alignSelf: "flex-start",
		paddingBottom: 1,
	},
	nameText: {
		color: "#1A1828",
		fontSize: 15,
		fontWeight: "bold",
	},
	timeView: {
		alignSelf: "flex-start",
		paddingBottom: 1,
	},
	timeText: {
		color: "#8A88A8",
		fontSize: 10,
	},
	noteContent: {
		paddingRight: 9,
	},
	noteText: {
		color: "#4A4868",
		fontSize: 12,
		lineHeight: 18,
		opacity: 0.8,
		fontWeight: 500
	},
	addNoteCard: {
		backgroundColor: "#FFFFFF",
		borderColor: "#0D5C634D",
		borderRadius: 14,
		borderWidth: 1,
		paddingVertical: 13,
		paddingHorizontal: 14,
		marginBottom: 16,
	},
	addNoteTitle: {
		paddingBottom: 1,
		marginBottom: 8,
	},
	addNoteTitleText: {
		color: "#4A4868",
		fontSize: 12,
		fontWeight: "bold",
		lineHeight: 18,
	},
	textInput: {
		color: "#4A4868",
		fontSize: 12,
		marginBottom: 8,
		backgroundColor: "#F3EFE9",
		borderRadius: 8,
		height: 50,
		paddingHorizontal: 12,
	},
	tagButtonsRow: {
		flexDirection: "row",
		alignItems: "center",
	},
	tagButton: {
		backgroundColor: "#F3EFE9",
		borderRadius: 16,
		paddingVertical: 8,
		paddingHorizontal: 18,
		marginRight: 10,
	},
	tagButtonText: {
		color: "#4A4868",
		fontSize: 10,
		fontWeight:500
	},
	saveButton: {
		alignItems: "center",
		backgroundColor: "#0D5C63",
		borderRadius: 14,
		paddingVertical: 15,
		shadowColor: "#0D5C634D",
		shadowOpacity: 0.3,
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowRadius: 20,
		elevation: 20,
	},
	saveButtonText: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "bold",
	},
});

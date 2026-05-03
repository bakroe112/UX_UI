import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Resume(props) {
	return (
		<View style={styles.container}>
			<View style={styles.fixedHeader}>
				<View style={styles.column}>
					<View style={styles.row3}>
						<View style={styles.backHeader}>
							<TouchableOpacity onPress={() => props.onNavigate("active")}>
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
						<View style={styles.resumeTab}>
							<Text style={styles.text4}>
								{"Resume"}
							</Text>
						</View>
						<TouchableOpacity style={styles.view3} onPress={() => props.onNavigate("notes")}>
							<Text style={styles.text3}>
								{"Notes"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.view3} onPress={() => props.onNavigate("skillratings")}>
							<Text style={styles.text3}>
								{"Skills"}
							</Text>
						</TouchableOpacity>
						<View style={styles.view3}>
							<Text style={styles.text3}>
								{"Timeline"}
							</Text>
						</View>
					</View>
				</View>
			</View>
			<ScrollView style={styles.scrollView}>
				<View style={styles.column2}>
					<View style={styles.row5}>
						<Text style={styles.text5}>
							{"ABOUT"}
						</Text>
						<View style={styles.box}>
						</View>
					</View>
					<View style={styles.column3}>
						<Text style={styles.text6}>
							{"Senior Product Designer with 7+ years crafting design systems and digital products at scale. Led Airbnb's core design-system overhaul reaching 200+ contributors. Expert in Figma, user research, and cross-functional collaboration."}
						</Text>
						<View style={styles.column4}>
							<View style={styles.row6}>
								<View style={styles.row7}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/mxubwb2l_expires_30_days.png" }}
										resizeMode="stretch"
										style={styles.image5}
									/>
									<Text style={styles.text7}>
										{"San Francisco, CA"}
									</Text>
								</View>
								<View style={styles.row8}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/xbbni9cr_expires_30_days.png" }}
										resizeMode="stretch"
										style={styles.image5}
									/>
									<Text style={styles.text7}>
										{"sarahn.design"}
									</Text>
								</View>
								<View style={styles.row9}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/5y56htyb_expires_30_days.png" }}
										resizeMode="stretch"
										style={styles.image5}
									/>
									<Text style={styles.text7}>
										{"In/srahnjohnson"}
									</Text>
								</View>
							</View>
							<View style={styles.row10}>
								<View style={styles.row81}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/zz6sikbh_expires_30_days.png" }}
										resizeMode="stretch"
										style={styles.image5}
									/>
									<Text style={styles.text7}>
										{"sarahn@gmail.com"}
									</Text>
								</View>
								<View style={styles.row8}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/zn9rfwa6_expires_30_days.png" }}
										resizeMode="stretch"
										style={styles.image5}
									/>
									<Text style={styles.text7}>
										{"1 415 888 9999"}
									</Text>
								</View>
								<View style={styles.box2}>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.row11}>
						<Text style={styles.text8}>
							{"EXPERIENCE"}
						</Text>
						<View style={styles.box3}>
						</View>
					</View>
					<View style={styles.row12}>
						<View style={styles.experienceAvatarContainer}>
							<TouchableOpacity style={styles.experienceAvatarButton} onPress={() => { }}>
								<Text style={styles.experienceAvatarText}>
									{"A"}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.column5}>
							<View style={styles.column6}>
								<View style={styles.view4}>
									<Text style={styles.text10}>
										{"Senior  Product Designer"}
									</Text>
								</View>
								<View style={styles.view4}>
									<Text style={styles.text11}>
										{"Airbnb"}
									</Text>
								</View>
								<View style={styles.view4}>
									<Text style={styles.text7}>
										{"2020 - Present"}
									</Text>
								</View>
							</View>
							<View style={styles.column7}>
								<View style={styles.row2}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/kqd4rh2m_expires_30_days.png" }}
										resizeMode="stretch"
										style={styles.image6}
									/>
									<Text style={styles.text12}>
										{"Led design system used by 200+ contributor"}
									</Text>
								</View>
								<View style={styles.row2}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/5k5mkqvu_expires_30_days.png" }}
										resizeMode="stretch"
										style={styles.image6}
									/>
									<Text style={styles.text12}>
										{"Reduce design-to-dev handoff time by 40%"}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.row12}>
						<View style={styles.experienceAvatarContainerF}>
							<TouchableOpacity style={styles.experienceAvatarButtonF} onPress={() => { }}>
								<Text style={styles.experienceAvatarTextF}>
									{"F"}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.column8}>
							<View style={styles.column6}>
								<View style={styles.view4}>
									<Text style={styles.text10}>
										{"Product Designer"}
									</Text>
								</View>
								<View style={styles.view4}>
									<Text style={styles.text11}>
										{"Figma"}
									</Text>
								</View>
								<View style={styles.view4}>
									<Text style={styles.text7}>
										{"2018 - 2020"}
									</Text>
								</View>
							</View>
							<View style={styles.column7}>
								<View style={styles.row2}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/owkwgteg_expires_30_days.png" }}
										resizeMode="stretch"
										style={styles.image6}
									/>
									<Text style={styles.text12}>
										{"Owned core editor canvas interactions"}
									</Text>
								</View>
								<View style={styles.row2}>
									<Image
										source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/npb7gfdg_expires_30_days.png" }}
										resizeMode="stretch"
										style={styles.image6}
									/>
									<Text style={styles.text12}>
										{"Shipped multiplayer cursor UX"}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.row11}>
						<Text style={styles.text8}>
							{"EDUCATION"}
						</Text>
						<View style={styles.box4}>
						</View>
					</View>
					<View style={styles.row12}>
						<View style={styles.educationAvatarContainerR}>
							<TouchableOpacity style={styles.educationAvatarButtonR} onPress={() => { }}>
								<Text style={styles.educationAvatarTextR}>
									{"R"}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.column9}>
							<View style={styles.view4}>
								<Text style={styles.text10}>
									{"B.F.A Graphic Design"}
								</Text>
							</View>
							<View style={styles.view4}>
								<Text style={styles.text11}>
									{"Rhode Island School of Design"}
								</Text>
							</View>
							<View style={styles.view4}>
								<Text style={styles.text7}>
									{"2014 - 2018"}
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.row11}>
						<Text style={styles.text8}>
							{"SKILLS"}
						</Text>
						<View style={styles.box}>
						</View>
					</View>
					<View style={styles.column10}>
						<View style={styles.row13}>
							<TouchableOpacity style={styles.button3} onPress={() => { }}>
								<Text style={styles.text14}>
									{"Figma"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button4} onPress={() => { }}>
								<Text style={styles.text14}>
									{"Design systems"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button5} onPress={() => { }}>
								<Text style={styles.text14}>
									{"User Research"}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.row14}>
							<TouchableOpacity style={styles.button6} onPress={() => { }}>
								<Text style={styles.text14}>
									{"Protyping"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button7} onPress={() => { }}>
								<Text style={styles.text14}>
									{"Framer"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button8} onPress={() => { }}>
								<Text style={styles.text14}>
									{"IA"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button9} onPress={() => { }}>
								<View>
									<Text style={styles.text14}>
										{"Usability Testing"}
									</Text>
								</View>
							</TouchableOpacity>
						</View>
						<View style={styles.row15}>
							<TouchableOpacity style={styles.button10} onPress={() => { }}>
								<Text style={styles.text14}>
									{"Leadership"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button11} onPress={() => { }}>
								<Text style={styles.text14}>
									{"Accessibility"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button12} onPress={() => { }}>
								<Text style={styles.text14}>
									{"Swift UI"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<TouchableOpacity style={styles.button13} onPress={() => props.onNavigate("applicationdetails")}>
						<Text style={styles.text15}>
							{"View Application"}
						</Text>
					</TouchableOpacity>
					<View style={styles.box5}>
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
	fixedHeader: {
		backgroundColor: "#FFFFFF",
		paddingTop: 8,
		paddingBottom: 0,
		borderBottomWidth: 1,
		borderBottomColor: "#F0F0F0",
		zIndex: 10,
	},
	box: {
		height: 1,
		flex: 1,
		backgroundColor: "#1A7A835C",
		marginRight: 18,
	},
	box2: {
		width: "30%",
		height: 15,
	},
	box3: {
		height: 1,
		flex: 1,
		backgroundColor: "#1A7A835C",
		marginRight: 16,
	},
	box4: {
		height: 1,
		flex: 1,
		backgroundColor: "#1A7A835C",
		marginRight: 20,
	},
	box5: {
		height: 2,
		backgroundColor: "#F9F5F0",
		marginRight: 48,
	},
	button: {
		backgroundColor: "#0D5C631F",
		borderRadius: 8,
		paddingVertical: 6,
		paddingHorizontal: 10,
		marginRight: 4,
	},
	button2: {
		backgroundColor: "#7A61811F",
		borderRadius: 8,
		paddingVertical: 6,
		paddingHorizontal: 10,
		marginRight: 4,
	},
	button3: {
		backgroundColor: "#0D5C631F",
		borderRadius: 8,
		paddingVertical: 5,
		paddingHorizontal: 11,
		marginRight: 7,
	},
	button4: {
		backgroundColor: "#0D5C631F",
		borderRadius: 8,
		paddingVertical: 5,
		paddingHorizontal: 12,
		marginRight: 7,
	},
	button5: {
		backgroundColor: "#0D5C631F",
		borderRadius: 8,
		paddingVertical: 5,
		paddingHorizontal: 11,
	},
	button6: {
		backgroundColor: "#0D5C631F",
		borderRadius: 8,
		paddingVertical: 5,
		paddingHorizontal: 12,
		marginRight: 6,
	},
	button7: {
		backgroundColor: "#0D5C631F",
		borderRadius: 8,
		paddingVertical: 5,
		paddingHorizontal: 11,
		marginRight: 6,
	},
	button8: {
		backgroundColor: "#0D5C631F",
		borderRadius: 8,
		paddingVertical: 5,
		paddingHorizontal: 15,
		marginRight: 6,
	},
	button9: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#0D5C631F",
		borderRadius: 8,
		paddingVertical: 5,
	},
	button10: {
		backgroundColor: "#0D5C631F",
		borderRadius: 8,
		paddingVertical: 5,
		paddingHorizontal: 17,
		marginRight: 5,
	},
	button11: {
		backgroundColor: "#0D5C631F",
		borderRadius: 8,
		paddingVertical: 5,
		paddingHorizontal: 11,
		marginRight: 9,
	},
	button12: {
		backgroundColor: "#0D5C631F",
		borderRadius: 8,
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
	button13: {
		alignItems: "center",
		backgroundColor: "#0D5C63",
		borderRadius: 14,
		paddingVertical: 15,
		marginBottom: 16,
		shadowColor: "#0D5C634D",
		shadowOpacity: 0.3,
		shadowOffset: {
			width: 0,
			height: 5
		},
		shadowRadius: 20,
		elevation: 20,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingTop: 0,
		paddingHorizontal: 20,
		marginBottom: 10,
	},
	column2: {
		marginHorizontal: 20,
		marginTop: 20,
	},
	column3: {
		backgroundColor: "#FFFFFF",
		borderRadius: 16,
		padding: 16,
		marginBottom: 23,
		shadowColor: "#00000008",
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowRadius: 4,
		elevation: 4,
	},
	column4: {
		paddingVertical: 9,
	},
	column5: {
		flex: 1,
		paddingBottom: 6,
		paddingHorizontal: 10,
	},
	column6: {
		paddingBottom: 0,
	},
	column7: {
		paddingBottom: 0,
	},
	column8: {
		flex: 1,
		paddingBottom: 7,
		paddingHorizontal: 10,
	},
	column9: {
		flex: 1,
		paddingBottom: 8,
		paddingHorizontal: 10,
	},
	column10: {
		backgroundColor: "#FFFFFF",
		borderColor: "#00000000",
		borderRadius: 16,
		borderWidth: 1,
		paddingVertical: 14,
		paddingRight: 35,
		marginBottom: 16,
		shadowColor: "#00000008",
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowRadius: 1,
		elevation: 1,
	},
	image4: {
		width: 36,
		height: 36,
		marginRight: 12,
	},
	image5: {
		width: 10,
		height: 10,
		marginRight: 6,
	},
	image6: {
		width: 16,
		height: 16,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 2,
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
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 13,
		marginHorizontal: 1,
	},
	row6: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 8,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
		width: "36%",
	},
	row8: {
		flexDirection: "row",
		alignItems: "center",
		width: "33%",
	},
	row81: {
		flexDirection: "row",
		alignItems: "center",
		width: "36%",
	},
	row9: {
		flexDirection: "row",
		alignItems: "center",
		width: "33%",
	},
	row10: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	row11: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 16,
	},
	row12: {
		flexDirection: "row",
		backgroundColor: "#FFFFFF",
		borderRadius: 16,
		paddingTop: 13,
		paddingBottom: 10,
		paddingHorizontal: 13,
		marginBottom: 16,
	},
	row13: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 5,
		marginLeft: 15,
	},
	row14: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 5,
		marginLeft: 15,
	},
	row15: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 14,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F9F5F0",
		paddingBottom: 115,
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
		color: "#0D5C63",
		fontSize: 14,
		fontWeight: "bold",
	},
	text5: {
		color: "#1A7A83",
		fontSize: 15,
		fontWeight: "bold",
		marginRight: 16,
	},
	text6: {
		color: "#4A4868",
		fontSize: 13,
		marginBottom: 16,
		lineHeight: 20
	},
	text7: {
		color: "#8A88A8",
		fontSize: 10,
		flexShrink: 1,
		numberOfLines: 1,
	},
	text8: {
		color: "#1A7A83",
		fontSize: 15,
		fontWeight: "bold",
		marginRight: 17,
	},
	text9: {
		color: "#0D5C63",
		fontSize: 10,
		fontWeight: "bold",
	},
	text10: {
		color: "#1A1828",
		fontSize: 14,
		fontWeight: "bold",
	},
	text11: {
		color: "#8A88A8",
		fontSize: 10,
		fontWeight: "bold",
	},
	text12: {
		color: "#4A4868",
		fontSize: 11,
	},
	text13: {
		color: "#7A6181",
		fontSize: 10,
		fontWeight: "bold",
	},
	text14: {
		color: "#0D5C63",
		fontSize: 10,
		fontWeight: 500
	},
	text15: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "bold",
	},
	view: {
		alignSelf: "flex-start",
		paddingBottom: 1,
		paddingRight: 71,
	},
	view2: {
		alignSelf: "flex-start",
		paddingBottom: 1,
		paddingRight: 57,
	},
	view3: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 20,
	},
	resumeTab: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 20,
		borderBottomWidth: 2,
		borderBottomColor: "#0D5C63",
	},
	view4: {
		paddingBottom: 0,
	},
	experienceAvatarContainer: {
		marginRight: 4,
	},
	experienceAvatarButton: {
		backgroundColor: "#0D5C631F",
		borderRadius: 8,
		paddingVertical: 6,
		paddingHorizontal: 10,
	},
	experienceAvatarText: {
		color: "#0D5C63",
		fontSize: 10,
		fontWeight: "bold",
	},
	experienceAvatarContainerF: {
		marginRight: 4,
	},
	experienceAvatarButtonF: {
		backgroundColor: "#7A61811F",
		borderRadius: 8,
		paddingVertical: 6,
		paddingHorizontal: 10,
	},
	experienceAvatarTextF: {
		color: "#7A6181",
		fontSize: 10,
		fontWeight: "bold",
	},
	educationAvatarContainerR: {
		marginRight: 4,
	},
	educationAvatarButtonR: {
		backgroundColor: "#7A61811F",
		borderRadius: 8,
		paddingVertical: 6,
		paddingHorizontal: 10,
	},
	educationAvatarTextR: {
		color: "#7A6181",
		fontSize: 10,
		fontWeight: "bold",
	},
});

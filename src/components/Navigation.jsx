import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Navigation(props) {
	return (
		<View style={styles.row12}>
			<TouchableOpacity style={styles.column8} onPress={() => props.onNavigate("dashboard")}>
				<View style={[styles.box4, !(props.currentScreen === "dashboard" || props.currentScreen === "todolist" || props.currentScreen === "teamoverview") && { display: "none" }]}>
				</View>
				<Image
					source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/aoo3nzxg_expires_30_days.png" }}
					resizeMode="stretch"
					style={[styles.image9, { tintColor: (props.currentScreen === "dashboard" || props.currentScreen === "todolist" || props.currentScreen === "teamoverview") ? "#0D5C63" : "#9B99B0" }]}
				/>
				<Text style={[(props.currentScreen === "dashboard" || props.currentScreen === "todolist" || props.currentScreen === "teamoverview") ? styles.text5 : styles.text19]}>
					{"Dashboard"}
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.column9} onPress={() => props.onNavigate("active")}>
				<View style={[styles.box4, (props.currentScreen !== "active" && props.currentScreen !== "draft") && { display: "none" }]}>
				</View>
				<Image
					source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/bt1krs86_expires_30_days.png" }}
					resizeMode="stretch"
					style={[styles.image10, { tintColor: (props.currentScreen === "active" || props.currentScreen === "draft") ? "#0D5C63" : "#9B99B0" }]}
				/>
				<Text style={[props.currentScreen === "active" || props.currentScreen === "draft" ? styles.text5 : styles.text19]}>
					{"Jobs"}
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.column9} onPress={() => props.onNavigate("talent")}>
				<View style={[styles.box4, props.currentScreen !== "talent" && { display: "none" }]}>
				</View>
				<Image
					source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/v9k6jd0t_expires_30_days.png" }}
					resizeMode="stretch"
					style={[styles.image11, { tintColor: props.currentScreen === "talent" ? "#0D5C63" : "#9B99B0" }]}
				/>
				<Text style={[props.currentScreen === "talent" ? styles.text5 : styles.text19]}>
					{"Talent"}
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.column9} onPress={() => props.onNavigate("inbox")}>
				<View style={[styles.box4, props.currentScreen !== "inbox" && { display: "none" }]}>
				</View>
				<Image
					source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/jvdb3a21_expires_30_days.png" }}
					resizeMode="stretch"
					style={[styles.image12, { tintColor: props.currentScreen === "inbox" ? "#0D5C63" : "#9B99B0" }]}
				/>
				<Text style={[props.currentScreen === "inbox" ? styles.text5 : styles.text19]}>
					{"Inbox"}
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.column10} onPress={() => props.onNavigate("analytics")}>
				<View style={[styles.box4, props.currentScreen !== "analytics" && { display: "none" }]}>
				</View>
				<Image
					source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/35tqas1j_expires_30_days.png" }}
					resizeMode="stretch"
					style={[styles.image13, { tintColor: props.currentScreen === "analytics" ? "#0D5C63" : "#9B99B0" }]}
				/>
				<Text style={[props.currentScreen === "analytics" ? styles.text5 : styles.text19]}>
					{"Analytics"}
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	box4: {
		width: 24,
		height: 2,
		backgroundColor: "#0D5C63",
		marginBottom: 7,
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
	image9: {
		width: 28,
		height: 28,
		marginBottom: 2,
	},
	image10: {
		width: 24,
		height: 24,
		marginBottom: 2,
	},
	image11: {
		width: 24,
		height: 24,
		marginBottom: 2,
	},
	image12: {
		width: 24,
		height: 24,
		marginBottom: 2,
	},
	image13: {
		width: 24,
		height: 24,
		marginBottom: 2,
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
	text5: {
		color: "#0D5C63",
		fontSize: 13,
		fontWeight: "600",
		marginTop: 2,
		textAlign: "center",
	},
	text19: {
		color: "#9B99B0",
		fontSize: 11,
		fontWeight: "bold",
		marginTop: 2,
		textAlign: "center",
	},
});

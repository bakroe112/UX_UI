import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function InterviewSucces({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				{/* Success Checkmark Icon */}
				<View style={styles.iconContainer}>
					<View style={styles.checkmarkIcon}>
						<Text style={styles.checkmarkText}>✓</Text>
					</View>
				</View>

				{/* Success Message */}
				<Text style={styles.titleText}>
					{"Interview set successfully"}
				</Text>

				{/* Subtitle Text */}
				<Text style={styles.subtitleText}>
					{"Your interview for Sarah has been sent successfully. Thank you."}
				</Text>
			</View>

			{/* Return to Home Button */}
			<TouchableOpacity 
				style={styles.button} 
				onPress={() => navigation.navigate("MainDashboard")}
			>
				<Text style={styles.buttonText}>
					{"Return to Home"}
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 24,
		paddingVertical: 40,
	},
	contentContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	iconContainer: {
		marginBottom: 32,
	},
	checkmarkIcon: {
		width: 80,
		height: 80,
		borderRadius: 20,
		backgroundColor: "#E8F5F1",
		borderWidth: 2,
		borderColor: "#1A9E83",
		justifyContent: "center",
		alignItems: "center",
	},
	checkmarkText: {
		fontSize: 40,
		color: "#1A9E83",
		fontWeight: "bold",
	},
	titleText: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#1A1828",
		marginBottom: 12,
		textAlign: "center",
	},
	subtitleText: {
		fontSize: 13,
		color: "#8A88A8",
		textAlign: "center",
		lineHeight: 20,
	},
	button: {
		width: "100%",
		backgroundColor: "#0D5C63",
		borderRadius: 14,
		paddingVertical: 16,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#0D5C634D",
		shadowOpacity: 0.3,
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowRadius: 20,
		elevation: 20,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#FFFFFF",
	},
});

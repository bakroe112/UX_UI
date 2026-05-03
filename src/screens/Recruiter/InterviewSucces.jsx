import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CircleCheckBig } from 'lucide-react-native';

export default function InterviewSucces(props) {
	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				{/* Success Checkmark Icon */}
				<View style={styles.iconContainer}>
				<CircleCheckBig size={50} color="#0cab34" strokeWidth={1.5} />
			</View>

			<Text style={styles.titleText}>{"Interview Sent successfully!"}</Text>

			<Text style={styles.subtitleText}>{"Your interview for Sarah has been sent successfully. Thank you."}</Text>
			</View>

			{/* Return to Home Button */}
			<TouchableOpacity 
				style={styles.button} 
				onPress={() => props.onNavigate("dashboard")}
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
		borderRadius: 20,
		backgroundColor: "#e6f6e0",
		padding: 20,
		borderColor: "#0cab34",
		borderWidth: 1.5,
	},
	titleText: {
		fontSize: 23,
		fontWeight: "bold",
		color: "#1A1828",
		marginBottom: 12,
		textAlign: "center",
		width: "100%",
	},
	subtitleText: {
		fontSize: 13,
		color: "#8A88A8",
		textAlign: "center",
		lineHeight: 20,
		width: "100%",
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

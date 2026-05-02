import React, { useState } from "react";
import { View, ScrollView, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBar from "../../components/StatusBar";

export default function SignUp({ navigation }: any) {
	const [textInput1, onChangeTextInput1] = useState("");
	const [textInput2, onChangeTextInput2] = useState("");
	const [textInput3, onChangeTextInput3] = useState("");
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#F9F5F0" }} edges={["left", "right"]}>
			<ScrollView style={{ flex: 1, backgroundColor: "#F9F5F0", marginTop: 50 }} showsVerticalScrollIndicator={false}>
				<View 
					style={{
						alignSelf: "flex-start",
						paddingRight: 7,
						marginBottom: 8,
						marginLeft: 20,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 28,
							fontWeight: "bold",
							marginBottom: 10,
						}}>
						{"Create Account"}
					</Text>
					<Text 
						style={{
							color: "#8A88A8",
							fontSize: 14,
							marginLeft: 7,
						}}>
						{"Join 2M+ professionals finding their dream jobs"}
					</Text>
				</View>
				<View 
					style={{
						marginBottom: 14,
						marginHorizontal: 20,
					}}>
					<View 
						style={{
							marginBottom: 2,
						}}>
						<View 
							style={{
								paddingRight: 2,
								marginBottom: 14,
							}}>
							<Text 
								style={{
									color: "#4A4868",
									fontSize: 13,
									fontWeight: "bold",
									marginBottom: 10,
								}}>
								{"Full Name"}
							</Text>
							<TextInput
								placeholder={"Lucyna Kushinada"}
								value={textInput1}
								onChangeText={onChangeTextInput1}
								style={{
									color: "#4A4868",
									fontSize: 15,
									marginLeft: 2,
									backgroundColor: "#FFFFFF",
									borderColor: "#0D5C6312",
									borderRadius: 14,
									borderWidth: 1,
									paddingVertical: 13,
									paddingHorizontal: 24,
								}}
							/>
						</View>
						<View 
							style={{
								paddingRight: 2,
								marginBottom: 14,
							}}>
							<Text 
								style={{
									color: "#4A4868",
									fontSize: 13,
									fontWeight: "bold",
									marginBottom: 10,
								}}>
								{"Email Address"}
							</Text>
							<TextInput
								placeholder={"lucy@example.com"}
								value={textInput2}
								onChangeText={onChangeTextInput2}
								style={{
									color: "#4A4868",
									fontSize: 15,
									marginLeft: 2,
									backgroundColor: "#FFFFFF",
									borderColor: "#0D5C6312",
									borderRadius: 14,
									borderWidth: 1,
									paddingVertical: 13,
									paddingHorizontal: 24,
								}}
							/>
						</View>
						<View 
							style={{
								paddingRight: 3,
								marginBottom: 14,
							}}>
							<Text 
								style={{
									color: "#4A4868",
									fontSize: 13,
									fontWeight: "bold",
									marginBottom: 9,
								}}>
								{"Choose your role"}
							</Text>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#0D5C6312",
									borderRadius: 14,
									borderWidth: 1,
									paddingVertical: 13,
									paddingHorizontal: 23,
									marginLeft: 3,
								}}>
								<Text 
									style={{
										color: "#4A4868",
										fontSize: 15,
									}}>
									{"Candidate"}
								</Text>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/5hfyqirk_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 14,
										width: 20,
										height: 20,
									}}
								/>
							</View>
						</View>
						<View 
							style={{
								paddingRight: 2,
								marginBottom: 14,
							}}>
							<Text 
								style={{
									color: "#4A4868",
									fontSize: 13,
									fontWeight: "bold",
									marginBottom: 10,
								}}>
								{"Password"}
							</Text>
							<TextInput
								placeholder={"••••••••"}
								value={textInput3}
								onChangeText={onChangeTextInput3}
								style={{
									color: "#8A88A8",
									fontSize: 14,
									marginLeft: 2,
									backgroundColor: "#FFFFFF",
									borderColor: "#0D5C6312",
									borderRadius: 14,
									borderWidth: 1,
									paddingVertical: 13,
									paddingHorizontal: 24,
								}}
							/>
						</View>
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View 
								style={{
									backgroundColor: "#0D5C63",
									borderRadius: 4,
									padding: 2,
									marginRight: 11,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/kc93ne5n_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 16,
										height: 16,
									}}
								/>
							</View>
							<View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
								<Text style={{ color: "#8A88A8", fontSize: 11 }}>
									{"I agree to HireFlow's "}
								</Text>
								<Text style={{ color: "#0D5C63", fontSize: 11, fontWeight: "bold" }}>
									{"Terms of Service"}
								</Text>
								<Text style={{ color: "#8A88A8", fontSize: 11 }}>
									{" and "}
								</Text>
								<Text style={{ color: "#0D5C63", fontSize: 11, fontWeight: "bold" }}>
									{"Privacy Policy"}
								</Text>
							</View>
						</View>
					</View>
					<View >
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 11,
								marginHorizontal: 1,
							}}>
							<View 
								style={{
									height: 1,
									flex: 1,
									backgroundColor: "#0D5C6312",
									marginRight: 10,
								}}>
							</View>
							<Text 
								style={{
									color: "#8A88A8",
									fontSize: 12,
									marginRight: 11,
								}}>
								{"or"}
							</Text>
							<View 
								style={{
									height: 1,
									flex: 1,
									backgroundColor: "#0D5C6312",
								}}>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 11,
							}}>
							<TouchableOpacity 
								style={{
									flex: 1,
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#0D5C6312",
									borderRadius: 14,
									borderWidth: 1,
									paddingVertical: 14,
									marginRight: 14,
								}} onPress={()=>alert('Pressed!')}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/sy0wol14_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 14,
											height: 14,
											marginRight: 10,
										}}
									/>
									<Text 
										style={{
											color: "#1A1828",
											fontSize: 18,
											fontWeight: "bold",
										}}>
										{"Google"}
									</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity 
								style={{
									flex: 1,
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#0D5C6312",
									borderRadius: 14,
									borderWidth: 1,
									paddingVertical: 14,
								}} onPress={()=>alert('Pressed!')}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/giaetpv8_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 14,
											height: 14,
											marginRight: 13,
										}}
									/>
									<Text 
										style={{
											color: "#1A1828",
											fontSize: 18,
											fontWeight: "bold",
										}}>
										{"Linkedln"}
									</Text>
								</View>
							</TouchableOpacity>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#1C1A2E",
								borderColor: "#0D5C6312",
								borderRadius: 14,
								borderWidth: 1,
								paddingVertical: 16,
								paddingHorizontal: 24,
								marginHorizontal: 1,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/gl738u7q_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 21,
									height: 21,
								}}
							/>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 14,
									fontWeight: "bold",
								}}>
								{"Continue with Apple"}
							</Text>
							<View 
								style={{
									width: 21,
									height: 21,
								}}>
							</View>
						</View>
					</View>
				</View>
				<View 
					style={{
						alignItems: "center",
						marginHorizontal: 21,
					}}>
					<TouchableOpacity 
						style={{
							alignSelf: "stretch",
							alignItems: "center",
							backgroundColor: "#0D5C63",
							borderRadius: 14,
							paddingVertical: 17,
							marginBottom: 18,
							shadowColor: "#0D5C634D",
							shadowOpacity: 0.3,
							shadowOffset: {
							    width: 0,
							    height: 6
							},
							shadowRadius: 20,
							elevation: 20,
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 16,
								fontWeight: "bold",
							}}>
							{"Create My Account"}
						</Text>
					</TouchableOpacity>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Text style={{ color: "#8A88A8", fontSize: 13 }}>
							{"Already have an account? "}
						</Text>
						<TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
							<Text style={{ color: "#0D5C63", fontSize: 13, fontWeight: "bold" }}>
								{"Sign in"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
import React, { useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBar from "../../components/StatusBar";

export default function SignIn() {
	const [textInput1, onChangeTextInput1] = useState("");
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#F9F5F0" }} edges={["left", "right"]}>
			<ScrollView style={{ flex: 1, backgroundColor: "#F9F5F0", marginTop: 40 }} showsVerticalScrollIndicator={false}>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 50,
						marginHorizontal: 20,
					}}>
					<View 
						style={{
							alignItems: "center",
							marginBottom: 27,
						}}>
						<TouchableOpacity 
							style={{
								borderRadius: 20,
								padding: 15,
								marginBottom: 18,
							}} onPress={()=>alert('Pressed!')}>
							<LinearGradient 
								start={{x:0, y:0}}
								end={{x:0, y:1}}
								colors={["#0D5C63", "#1A7A83"]}
								style={{
									borderRadius: 20,
									padding: 15,
									marginBottom: -30,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/ksx5kvu3_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 34,
										height: 34,
									}}
								/>
							</LinearGradient>
						</TouchableOpacity>
						<Text 
							style={{
								color: "#000000",
								fontSize: 26,
								fontWeight: "bold",
								marginBottom: 15,
							}}>
							{"Welcome back"}
						</Text>
						<Text 
							style={{
								color: "#8A88A8",
								fontSize: 14,
							}}>
							{"Sign in to your HireFlow account"}
						</Text>
					</View>
					<View 
						style={{
							alignSelf: "stretch",
							paddingRight: 2,
							marginBottom: 27,
						}}>
						<View 
							style={{
								paddingRight: 2,
								marginBottom: 18,
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
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#0D5C63",
									borderRadius: 14,
									borderWidth: 1,
									marginLeft: 2,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/nnzgwky7_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 18,
										height: 18,
										marginLeft: 19,
										marginRight: 16,
									}}
								/>
								<TextInput
									placeholder={"lucy@example.com"}
									value={textInput1}
									onChangeText={onChangeTextInput1}
									style={{
										color: "#4A4868",
										fontSize: 15,
										marginRight: 4,
										flex: 1,
										paddingVertical: 13,
									}}
								/>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 10,
							}}>
							<Text 
								style={{
									color: "#4A4868",
									fontSize: 13,
									fontWeight: "bold",
								}}>
								{"Password"}
							</Text>
							<Text 
								style={{
									color: "#0D5C63",
									fontSize: 13,
									fontWeight: "bold",
								}}>
								{"Forgot password?"}
							</Text>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderColor: "#0D5C6312",
								borderRadius: 14,
								borderWidth: 1,
								paddingVertical: 13,
								paddingHorizontal: 19,
								marginBottom: 9,
								marginLeft: 2,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/4frjhvqm_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 18,
									height: 18,
									marginRight: 16,
								}}
							/>
							<Text 
								style={{
									color: "#8A88A8",
									fontSize: 14,
								}}>
								{"••••••••••••"}
							</Text>
							<View 
								style={{
									flex: 1,
								}}>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/3nc6go8m_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 20,
									height: 20,
								}}
							/>
						</View>
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								alignItems: "center",
								marginLeft: 2,
							}}>
							<View 
								style={{
									backgroundColor: "#0D5C63",
									borderRadius: 4,
									padding: 2,
									marginRight: 9,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/32egzuyf_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 16,
										height: 16,
									}}
								/>
							</View>
							<Text 
								style={{
									color: "#4A4868",
									fontSize: 13,
								}}>
								{"Keep me signed in"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							alignSelf: "stretch",
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 14,
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
								marginBottom: 14,
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
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/fo4ds5fx_expires_30_days.png"}} 
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
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/sye6ru0x_expires_30_days.png"}} 
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/ewzjhzti_expires_30_days.png"}} 
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
							paddingVertical: 19,
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
							{"Sign In"}
						</Text>
					</TouchableOpacity>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Text style={{ color: "#8A88A8", fontSize: 13 }}>
							{"New to HireFlow? "}
						</Text>
						<Text style={{ color: "#0D5C63", fontSize: 13, fontWeight: "bold" }}>
							{"Create Account"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
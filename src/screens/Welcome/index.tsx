import React from "react";
import { View, ScrollView, ImageBackground, TouchableOpacity, Image, Text, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default (props) => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
				}}>
				<View 
					style={{
						alignItems: "center",
						paddingBottom: 60,
					}}>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/olae53km_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							alignItems: "center",
							paddingTop: 140,
							marginBottom: 12,
						}}
						>
						<View 
							style={{
								alignItems: "center",
								marginBottom: 50,
							}}>
							<TouchableOpacity 
								style={{
									backgroundColor: "#FFFFFF1A",
									borderColor: "#FFFFFF2E",
									borderRadius: 24,
									borderWidth: 1,
									padding: 21,
									marginBottom: 16,
								}} onPress={()=>alert('Pressed!')}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/trh3mgt3_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 38,
										height: 38,
									}}
								/>
							</TouchableOpacity>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 40,
									fontWeight: "bold",
									marginBottom: 5,
								}}>
								{"HireFlow"}
							</Text>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 15,
									textAlign: "center",
									width: 235,
								}}>
								{"Your next great opportunity is one \ntap away"}
							</Text>
						</View>
						<View 
							style={{
								marginBottom: 67,
							}}>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 16,
								}}>
								<TouchableOpacity 
									style={{
										backgroundColor: "#FFFFFF12",
										borderRadius: 10,
										padding: 8,
										marginRight: 14,
									}} onPress={()=>alert('Pressed!')}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/cu0hh332_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 22,
											height: 22,
										}}
									/>
								</TouchableOpacity>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 13,
									}}>
									{"AI-matched jobs with 96%+ accuracy"}
								</Text>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 16,
									marginRight: 31,
								}}>
								<TouchableOpacity 
									style={{
										backgroundColor: "#FFFFFF12",
										borderRadius: 10,
										padding: 8,
										marginRight: 14,
									}} onPress={()=>alert('Pressed!')}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/1l949zfk_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 22,
											height: 22,
										}}
									/>
								</TouchableOpacity>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 13,
									}}>
									{"One-tap Quick Apply in seconds"}
								</Text>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									marginRight: 31,
								}}>
								<TouchableOpacity 
									style={{
										backgroundColor: "#FFFFFF12",
										borderRadius: 10,
										padding: 8,
										marginRight: 14,
									}} onPress={()=>alert('Pressed!')}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VujqnAV3aP/r1go0pwi_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 22,
											height: 22,
										}}
									/>
								</TouchableOpacity>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 13,
									}}>
									{"One-tap Quick Apply in seconds"}
								</Text>
							</View>
						</View>
						<TouchableOpacity 
							style={{
								alignSelf: "stretch",
								alignItems: "center",
								backgroundColor: "#E2B053",
								borderRadius: 14,
								paddingVertical: 21,
								marginBottom: 6,
								marginHorizontal: 20,
								shadowColor: "#E2B0535E",
								shadowOpacity: 0.4,
								shadowOffset: {
								    width: 0,
								    height: 8
								},
								shadowRadius: 24,
								elevation: 24,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 15,
									fontWeight: "bold",
								}}>
								{"Get Started - It’s Free"}
							</Text>
						</TouchableOpacity>
					</ImageBackground>
					<TouchableOpacity 
						style={{
							alignItems: "center",
							backgroundColor: "#FFFFFF1A",
							borderColor: "#FFFFFF2E",
							borderRadius: 14,
							borderWidth: 1,
							paddingVertical: 19,
							marginBottom: 18,
							marginHorizontal: 21,
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 15,
								fontWeight: "bold",
							}}>
							{"Sign In to My Account"}
						</Text>
					</TouchableOpacity>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 11,
						}}>
						{"Trusted by 50,000+ job seekers worldwide"}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
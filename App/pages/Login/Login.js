import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Colors from "../../shared/Colors";
import { AntDesign } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { AuthContext } from "../../contexts/AuthContext";
import Services from "../../shared/Services";

const Login = () => {
	const [accessToken, setAccessToken] = useState(null);
	const [userInfo, setUserInfo] = useState(null);
	const { userData, setUserData } = useContext(AuthContext);
	WebBrowser.maybeCompleteAuthSession();
	const [request, response, promptAsync] = Google.useAuthRequest({
		androidClientId:
			"629956516979-rtfjfrpnevo0g1so767nvk5dmvn8kr4a.apps.googleusercontent.com",
		expoClientId:
			"629956516979-ir4rbr0b5d7ckta2aqmle7j0r55b15h5.apps.googleusercontent.com",
		webClientId:
			"629956516979-k0qs5thiro3fdh2om50j7oioskmvj5qg.apps.googleusercontent.com",
	});

	useEffect(() => {
		if (response?.type === "success") {
			setAccessToken(response.authentication.accessToken);
		}
	}, [response]);

	useEffect(() => {
		const getUserData = async () => {
			try {
				const response = await fetch(
					"https://www.googleapis.com/userinfo/v2/me",
					{
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},
					}
				);
				const user = await response.json();
				setUserInfo(user);
				Services.setUserAuth(user);
				setUserData(user);
			} catch (error) {
				console.log(error);
			}
		};
		if (accessToken) {
			getUserData();
		}
	}, [accessToken]);

	return (
		<View>
			<Image source={require("../../Assets/img/login.png")} />
			<View style={styles.container}>
				<Text style={styles.welcomeText}>Welcome to Code box</Text>
				<Text
					style={{
						fontSize: 20,
						textAlign: "center",
						marginTop: 10,
						fontWeight: "700",
					}}
				>
					Login/Signup
				</Text>

				<TouchableOpacity onPress={() => promptAsync()} style={styles.button}>
					<AntDesign name="google" size={24} color="white" />
					<Text style={styles.buttonText}>Sign In with Google</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	welcomeText: { fontSize: 35, textAlign: "center", fontWeight: "bold" },
	container: {
		paddingTop: 40,
		marginTop: -25,
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 40,
	},
	button: {
		backgroundColor: Colors.primary,
		margin: 30,
		padding: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	buttonText: {
		color: Colors.white,
	},
});

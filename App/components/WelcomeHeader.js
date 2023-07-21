import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Colors from "../shared/Colors";

const WelcomeHeader = () => {
	const { userData } = useContext(AuthContext);

	// console.log(userData);

	return (
		<View style={styles.container}>
			<View>
				<Text>Hello,</Text>
				<Text
					style={{
						fontSize: 14,
						fontWeight: "bold",
					}}
				>
					{userData?.name}
				</Text>
			</View>
			<Image
				source={{ uri: userData?.picture }}
				style={{
					width: 40,
					height: 40,
					borderRadius: 100,
				}}
			/>
		</View>
	);
};

export default WelcomeHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

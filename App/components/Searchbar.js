import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Searchbar = () => {
	return (
		<View style={styles.container}>
			<Ionicons
				name="search"
				size={24}
				style={{ marginRight: 10 }}
				color="black"
			/>
			<TextInput placeholder="Search" />
		</View>
	);
};

export default Searchbar;

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "#fff",
		padding: 10,
		borderRadius: 10,
		elevation: 2,
		marginTop: 2,
		alignItems: "center",
	},
});

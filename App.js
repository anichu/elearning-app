import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./App/pages/Login/Login";
import AuthProvider from "./App/contexts/AuthContext";
import Parent from "./App/pages/Parent/Parent";

export default function App() {
	return (
		<AuthProvider>
			<Parent></Parent>
		</AuthProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Login from "../Login/Login";
import Home from "../Home/Home";
import { AuthContext } from "../../contexts/AuthContext";

const Parent = () => {
	const { userData } = useContext(AuthContext);
	return <View>{userData ? <Home /> : <Login />}</View>;
};

export default Parent;

const styles = StyleSheet.create({});

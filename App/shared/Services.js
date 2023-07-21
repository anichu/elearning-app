import AsyncStorage from "@react-native-async-storage/async-storage";

const setUserAuth = async (value) => {
	await AsyncStorage.setItem("userData", JSON.stringify(value));
};

const getUserAuth = async () => {
	return await AsyncStorage.getItem("userData");
};

const logOut = async () => {
	await AsyncStorage.clear();
};

export default {
	setUserAuth,
	getUserAuth,
	logOut,
};

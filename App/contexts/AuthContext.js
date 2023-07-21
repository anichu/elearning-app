import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);

import Services from "../shared/Services";

const AuthProvider = ({ children }) => {
	const [userData, setUserData] = useState(null);
	const value = {
		userData,
		setUserData,
	};
	useEffect(() => {
		const getUserDataFromStorage = async () => {
			let data = await Services.getUserAuth();
			if (data) {
				data = JSON.parse(data);
			}
			setUserData(data);
		};
		getUserDataFromStorage();
	}, [userData]);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

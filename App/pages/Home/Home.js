import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Services from "../../shared/Services";
import { AuthContext } from "../../contexts/AuthContext";
import WelcomeHeader from "../../components/WelcomeHeader";
import SearchBar from "../../components/Searchbar";
import Slider from "../../components/Slider";
import VideoCourseList from "../../components/VideoCourseList";
import CourseList from "../../components/CourseList";
import courseList from "../../db/courseList.json";

const Home = () => {
	const { setUserData } = useContext(AuthContext);
	const logoutHandler = async () => {
		await Services.logOut();
		setUserData();

		console.log("Pressed");
	};
	return (
		<ScrollView style={{ padding: 20 }} showsVerticalScrollIndicator={false}>
			<WelcomeHeader />
			<SearchBar />
			<Slider />
			<VideoCourseList />
			<CourseList type="Basic Courses" data={courseList} />
			{/* <View style={{ marginTop: 40 }}>
				<Button title="Logout" onPress={() => logoutHandler()} />
			</View> */}
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({});

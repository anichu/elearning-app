import {
	Dimensions,
	FlatList,
	Image,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import Colors from "../shared/Colors";

const CourseList = ({ type, data }) => {
	// console.log(data);
	return (
		<View style={{ marginBottom: 20 }}>
			<Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
				{type}
			</Text>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<View
						style={{
							marginRight: 10,
							backgroundColor: Colors.white,
							elevation: 10,
							borderRadius: 10,
						}}
					>
						<Image
							source={{ uri: item.videoThumbnail }}
							style={{
								width: Dimensions.get("screen").width * 0.85,
								height: 150,
								borderTopLeftRadius: 10,
								borderTopRightRadius: 10,
							}}
						/>
						<Text
							style={{
								paddingTop: 5,
								paddingLeft: 5,
								fontSize: 16,
								fontWeight: "700",
								lineHeight: 20,
								textAlign: "justify",
								width: Dimensions.get("screen").width * 0.85,
							}}
							numberOfLines={3}
						>
							{item.courseName}
						</Text>
						<Text style={{ paddingLeft: 10, paddingVertical: 5 }}>
							{item.duration}
						</Text>
					</View>
				)}
				horizontal={true}
			/>
			<View style={{ marginBottom: 10 }}></View>
		</View>
	);
};

export default CourseList;

const styles = StyleSheet.create({});

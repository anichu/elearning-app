import {
	Dimensions,
	FlatList,
	Image,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import videos from "../db/videos.json";
const VideoCourseList = () => {
	return (
		<View style={{ marginTop: 15 }}>
			<Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
				Video Courses
			</Text>
			<FlatList
				data={videos}
				horizontal={true}
				renderItem={({ item }) => (
					<View>
						<Image
							source={{ uri: item.videoThumbnail }}
							style={{
								width: Dimensions.get("screen").width * 0.85,
								height: 150,
								borderRadius: 10,
								marginRight: 10,
							}}
						/>
						<Text>{item.duration}</Text>
					</View>
				)}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default VideoCourseList;

const styles = StyleSheet.create({});

import {
	Dimensions,
	FlatList,
	Image,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import sliders from "../db/sliders.json";

const Slider = () => {
	// console.log(sliders);
	return (
		<View>
			<Text>Slider</Text>
			<FlatList
				data={sliders}
				renderItem={({ item }) => (
					<View style={{ marginTop: 10 }}>
						<Image
							source={{ uri: item.image }}
							style={{
								width: Dimensions.get("screen").width * 0.85,
								height: 150,
								borderRadius: 10,
								marginRight: 10,
							}}
						/>
					</View>
				)}
				horizontal={true}
				scrollEnabled={true}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default Slider;

const styles = StyleSheet.create({});

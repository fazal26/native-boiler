import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProfileScreen = ({navigation})=> {
	return (
		<View style={styles.contentContainer}>
			<View>
					<Text>This is Profile Screen</Text>
			</View>
			<View style={styles.row}>
				<TouchableOpacity onPress={() => navigation.navigate("home")}>
					<View style={styles.navBtn}>
						<Text>Home</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("auth")}>
					<View style={styles.navBtn}>
						<Text>Auth</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	},
	navBtn: {
		backgroundColor: "gray",
		alignItems: "center",
		justifyContent: "center",
		margin: 15,
		padding: 30
	},
	contentContainer: {
		paddingTop: 30,
		alignItems: "center"
	},
	row: {
		flexDirection: "row"
	}
});

export default ProfileScreen;
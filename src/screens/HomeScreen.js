import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text>Hi there! this is Home Screen!</Text>
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("profile")
                    }
                >
                    <View style={styles.navBtn}>
                        <Text>Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("auth")
                    }
                >
                    <View style={styles.navBtn}>
                        <Text>Auth</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
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

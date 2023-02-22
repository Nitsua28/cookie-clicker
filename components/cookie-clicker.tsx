import { View, StyleSheet } from "react-native";
import { ArrowUpgrade } from "./arrow-upgrade";
import { Cookie } from "./cookie";
import { Grandma } from "./grandma";

export default function CookieClicker(){
    return (
        <View style={styles.container}>
            <Cookie/>
            <ArrowUpgrade/>
            <Grandma/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "wheat"
    }
})
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Ionicons } from "@expo/vector-icons";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
export default function Setting() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.aboveContainer}>
                <View style={styles.aboveicon}>
                    <MaterialIcons name="dark-mode" size={24} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.primaryText}>APPERANCE</Text>
                        <Text styles={styles.secondaryText}>1</Text>
                    </View>
                </View>
                <Ionicons name="chevron-back" size={24} color="black" />
            </View>

            <View style={styles.belowContainer}>
                <View style={styles.belowicon}>
                    <Ionicons name="notifications-circle-outline" size={24} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.primaryText}>NOTIFICATION</Text>
                        <Text styles={styles.secondaryText}>2</Text>
                    </View>
                </View>
                <Ionicons name="chevron-back" size={24} color="black" />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {

    },
    aboveContainer: {

    },
    belowContainer: {

    }
})
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Ionicons } from "@expo/vector-icons";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
export default function Setting() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.mainContainer}>
                <View style={styles.eachContainer}>
                    <View style={styles.leftIcon}>
                        <View style={styles.iconContainer}><MaterialIcons name="dark-mode" size={35} color="black" /></View>
                        <View style={styles.textContainer}>
                            <Text style={styles.primaryText}>APPERANCE</Text>
                            <Text style={styles.secondaryText}>Dark Mode</Text>
                        </View>
                    </View>
                    <Ionicons name="chevron-back" size={30} style={{ transform: [{ rotate: '180deg' }] }} color="black" />
                </View>

                <View style={styles.eachContainer}>
                    <View style={styles.leftIcon}>
                        <View style={styles.iconContainer}><Ionicons name="notifications-circle-outline" size={35} color="black" /></View>
                        <View style={styles.textContainer}>
                            <Text style={styles.primaryText}>NOTIFICATION</Text>
                            <Text style={styles.secondaryText}>Enable Notifications</Text>
                        </View>
                    </View>
                    <Ionicons name="chevron-back" size={30} style={{ transform: [{ rotate: '180deg' }] }} color="black" />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#bdc2ca',
        paddingHorizontal: 25,
        paddingVertical: 35,
        marginHorizontal: 30,
        marginTop: 40,
        borderRadius: 30,
        gap: 50
    },
    eachContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    iconContainer: {
        backgroundColor: 'rgb(159, 159, 159)',
        padding: 10,
        borderRadius: 15
    },
    primaryText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#050404',
        letterSpacing: .6
    },
    secondaryText: {
        fontSize: 14,
        color: '#0000009b',
        letterSpacing: .6
    }
})
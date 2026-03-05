import { useState } from "react"
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
export default function FocusTime() {
    const times = [600000, 900000, 1500000]
    const [coutTime, setTime] = useState(60000)

    const formatTime = () => {
        const H = Math.floor(coutTime / (1000 * 60 * 60))
        const M = Math.floor((coutTime / (1000 * 60)) % 60)
        const S = Math.floor((coutTime / 1000) % 60)
        console.log('hello')
        if (H > 0)
            return `${H}:${M.toString().padStart(2, '0')}:${S.toString().padStart(2, '0')}`;
        else
            return `${M.toString().padStart(2, '0')}:${S.toString().padStart(2, '0')}`
    }
    return (
        <SafeAreaView style={{ alignItems: 'center' }}>

            <Text style={styles.timer}>{formatTime()}</Text>

            <View style={styles.horzontalBar} />
            <View style={styles.timesContainer}>
                {times.map((time) => (
                    <TouchableOpacity key={time} style={styles.timeBox}>
                        <Text style={{ fontSize: 35, padding: 17 }}>{Math.floor(time / (1000 * 60))}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={[styles.startBox, { borderColor: 'blue', marginVertical: 30 }]}>
                <Text style={{ fontSize: 30 }}>start</Text>
            </TouchableOpacity>

            <Button title={"Back"} color={'red'} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    timer: {
        marginVertical: 100,
        fontSize: 80,
    },
    horzontalBar: {
        backgroundColor: 'red',
        borderWidth: 1,
        width: '100%',
        marginBottom: 40,
    },
    timesContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 30
    },
    timeBox: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    startBox: {
        borderColor: '#77ff00',
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
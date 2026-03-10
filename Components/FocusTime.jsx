import { useEffect, useRef, useState } from "react"
import { Button, View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import Toast from "react-native-toast-message"
export default function FocusTime({ passedTask, onBack }) {
    const times = [6000, 900000, 1500000]
    const [coutTime, setTime] = useState(times[0])
    const [resetTime, setResetTime] = useState(coutTime)
    const [isStart, setIsStart] = useState(false);
    const [isZoro, setzero] = useState(false)
    const IntervalRef = useRef(null)
    function startPauseHandler() {
        if (!isStart) return "start"
        else return "Pause"
    }

    const callAlert = () => {
        Alert.alert(
            "add another task or restart this task again",
            null,
            [
                {
                    text: 'Home',
                    onPress: () => onBack()
                },
                {
                    text: 'Reset',
                    onPress: () => { setTime(resetTime); setIsStart(false); setzero(false) }
                }
            ],
            { cancelable: true }
        )
    }
    const showToast = () => {
        Toast.show({
            type: 'info',
            text1: 'great job ',
            text2: 'you have finished your focus time',
        })
    }

    useEffect(() => {
        if (isStart) {
            IntervalRef.current = setInterval(() => {
                setTime(prev => prev - 1000)
            }, 1000)
        }
        return () => clearInterval(IntervalRef.current)
    }, [isStart])

    useEffect(() => {
        if (coutTime <= 0 && !isZoro) {
            setzero(true)
            setIsStart(false)
            showToast()
            setTimeout(() => {
                callAlert()
            }, 3000)
        }
        console.log('toast message')
    }, [coutTime])
    const formatTime = () => {
        const H = Math.floor(coutTime / (1000 * 60 * 60))
        const M = Math.floor((coutTime / (1000 * 60)) % 60)
        const S = Math.floor((coutTime / 1000) % 60)
        if (H > 0)
            return `${H}:${M.toString().padStart(2, '0')}:${S.toString().padStart(2, '0')}`;
        else
            return `${M.toString().padStart(2, '0')}:${S.toString().padStart(2, '0')}`
    }

    return (
        <SafeAreaView style={{ alignItems: 'center', flex: 1 }}>

            <Text style={styles.timer}>{formatTime()}</Text>
            <View style={styles.task}>
                <Text style={{ fontSize: 27 }}>{passedTask}</Text>
            </View>
            <View style={styles.horzontalBar} />
            <View style={styles.timesContainer}>
                {times.map((time) => (
                    <TouchableOpacity onPress={() => { setResetTime(time), setTime(time); setIsStart(false); setzero(false) }} key={time} style={styles.timeBox}>
                        <Text style={{ fontSize: 35, padding: 17 }}>{Math.floor(time / (1000 * 60))}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity onPress={() => setIsStart(!isZoro ? !isStart : isStart)} style={[styles.startBox, { borderColor: 'blue', marginVertical: 30 }]}>
                <Text style={{ fontSize: 30 }}>{startPauseHandler()}</Text>
            </TouchableOpacity>

            <Button title={"Back"} color={'red'} onPress={onBack} />
            <Toast />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({

    timer: {
        marginVertical: 60,
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
    task: {
        marginBottom: 30
    }
})
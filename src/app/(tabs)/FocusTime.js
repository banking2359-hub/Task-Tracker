import { useEffect, useRef, useState } from "react"
import { Button, View, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import Toast from "react-native-toast-message"
import { Ionicons } from "@expo/vector-icons"
import { Link, router, useLocalSearchParams } from "expo-router"
export default function FocusTime() {
    const times = [6000, 900000, 1500000]
    const [coutTime, setTime] = useState(times[0])
    const [resetTime, setResetTime] = useState(coutTime)
    const [isStart, setIsStart] = useState(false);
    const [isZoro, setzero] = useState(false)
    const IntervalRef = useRef(null)
    const param = useLocalSearchParams()
    function startPauseHandler() {
        if (!isStart) return "start"
        else return "Pause"
    }

    const callAlert = () => {
        Alert.alert(
            "add task or restart again",
            null,
            [
                {
                    text: 'Home',
                    onPress: () => router.push({ pathname: '/index' })
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
            type: 'success',
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
            }, 4000)
        }

    }, [coutTime])
    const formatTime = (times) => {
        const H = Math.floor(times / (1000 * 60 * 60))
        const M = Math.floor((times / (1000 * 60)) % 60)
        const S = Math.floor((times / 1000) % 60)
        if (H > 0)
            return `${H}:${M.toString().padStart(2, '0')}:${S.toString().padStart(2, '0')}`;
        else
            return `${M.toString().padStart(2, '0')}:${S.toString().padStart(2, '0')}`
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('../../../assets/background.jpeg')} resizeMode='cover' style={{ flex: 1, alignItems: 'center' }} >
                <TouchableOpacity style={styles.backBottom} onPress={() => router.push({ pathname: '/index' })}>
                    <Ionicons name="chevron-back" size={30} color={'white'} />
                    <Text style={{ fontSize: 30, color: 'white' }}>Back</Text>
                </TouchableOpacity>

                <Text style={styles.timer}>{formatTime(coutTime)}</Text>
                <View style={styles.task}>
                    <Text style={{ fontSize: 27, color: 'white' }}>{param.addTask}</Text>
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
                    <Text style={{ fontSize: 30, color: 'white' }}>{startPauseHandler()}</Text>
                </TouchableOpacity>
                <Toast />
            </ImageBackground>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({

    timer: {
        marginVertical: 60,
        fontSize: 80,
        color: 'white'
    },
    horzontalBar: {
        backgroundColor: 'white',
        borderWidth: 1,
        width: '100%',
        marginBottom: 40,
    },
    timesContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 30,
        borderColor: 'white'
    },
    timeBox: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#b3a6c0',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: .8
    },
    startBox: {
        backgroundColor: '#67d45d',
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: .7
    },
    task: {
        marginBottom: 30
    },
    backBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        padding: 30,
        gap: 3,
    }
})
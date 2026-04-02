import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, ImageBackground, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { SystemBars } from "react-native-edge-to-edge";
import { router } from 'expo-router'

const addTask = () => {
    const [todayTask, setTodayTask] = useState(['coding', 'f', 'sf', 'sd', 'd', 'f', 'sf', 'sd'])
    const [yesterdayTask, setYesterdayTask] = useState(['d', 'f',])
    const [dayBeforeTask, setDayBefforeTask] = useState(['d', 'f',])
    const [selectedDay, setselectedDay] = useState(1)
    const [inputValue, setInputValue] = useState('')
    const recentTime = [
        { id: '1', recentTime: 'today', taskList: [...todayTask] },
        { id: '2', recentTime: 'yesterday', taskList: [...yesterdayTask] },
        { id: '3', recentTime: '2 day before', taskList: [...dayBeforeTask] },
        { id: '4', recentTime: 'a week before', taskList: [...todayTask] },
        { id: '5', recentTime: 'a month before', taskList: [...todayTask] },
        { id: '6', recentTime: 'a long time ago ', taskList: [...todayTask] },
    ]
    const selectedDayList = recentTime.find((item) => item.id == selectedDay)
    const recentTimeRenderItem = ({ item }) => {
        const isActive = item.id == selectedDay
        return (
            <TouchableOpacity onPress={() => setselectedDay(item.id)} style={[styles.timeRecent, { backgroundColor: isActive ? '#88ced2' : 'transparent' }]} >
                <Text style={{ fontSize: 17, color: isActive ? 'white' : 'black' }}>{item.recentTime}</Text>
            </TouchableOpacity>
        )
    }
    const addTasks = () => {
        const trimedValue = inputValue.trim()
        if (trimedValue.length > 0) {
            setTodayTask([trimedValue, ...todayTask])
            setselectedDay(1)
            router.push({ pathname: '/FocusTime', params: { addTask: trimedValue } })
        }
    }
    const recentTask = (recentTaskValue) => {
        // setGoToFocus(true)
        setInputValue(recentTaskValue)
    }
    return (

        <SafeAreaView style={styles.container}>
            <SystemBars style='light' />
            <View style={styles.TopText}>
                <View style={styles.horzontalLine} />
                <Text style={{ fontSize: 30 }}>Add Task</Text>
                <View style={styles.horzontalLine} />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    onChangeText={setInputValue}
                    value={inputValue}
                    style={styles.input}
                    placeholder="add task"
                />
                <Ionicons name="add-circle-outline" size={50} color="black" onPress={addTasks} />
            </View>
            <View style={[styles.TopText, { marginTop: 40 }]}>
                <View style={[styles.horzontalLine, { backgroundColor: '#a19292', opacity: 0.6 }]} />
                <Text style={{ fontSize: 15 }}>Recent Task</Text>
                <View style={[styles.horzontalLine, { backgroundColor: '#a19292', opacity: 0.6 }]} />
            </View >
            <FlatList
                data={recentTime}
                keyExtractor={(item) => item.id}
                renderItem={recentTimeRenderItem}
                horizontal={true}
                style={{ flexGrow: 0, paddingVertical: 20 }}
            />
            <ImageBackground resizeMode="cover" style={{ flex: 1, margin: 20, padding: 10, borderRadius: 30, overflow: 'hidden' }} source={require('../../assets/background.jpeg')}>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 50 }}
                >
                    {selectedDayList.taskList.map((task, index) => (
                        <TouchableOpacity style={styles.text} key={index} onPress={() => recentTask(task)}>
                            <Text style={{ fontSize: 30, color: 'white' }} >{task}</Text>
                        </TouchableOpacity>
                    ))}

                </ScrollView>
            </ImageBackground>


        </SafeAreaView >
    )
}

export default addTask


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    TopText: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 20
    },
    horzontalLine: {
        flex: 1,
        height: 2,
        backgroundColor: 'red'
    },
    inputBox: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: 40
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 6
    },
    text: {
        borderColor: 'white',
        borderWidth: 1,
        opacity: 0.7,
        marginTop: 20,
        marginHorizontal: 30,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    timeRecent: {
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginHorizontal: 15,
        borderColor: '#e7d4d2',
        borderWidth: 1,
    }
})
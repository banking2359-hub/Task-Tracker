import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, ImageBackground, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useContext } from "react";
import { SystemBars } from "react-native-edge-to-edge";
import { router } from 'expo-router'
import { TaskContext } from "../../context/TaskContext";
import { useColorContext } from "../../context/colorContext";
const addTask = () => {
    const { setInputValue, inputValue, setselectedDayId, selectedDayId, selectedDay, setselectedDay, setDayBefforeTask, dayBeforeTask, setYesterdayTask, yesterdayTask, setTodayTask, todayTask } = useContext(TaskContext);
    const { color } = useColorContext()
    const recentTime = [
        { id: '1', recentTime: 'today', taskList: [...todayTask] },
        { id: '2', recentTime: 'yesterday', taskList: [...yesterdayTask] },
        { id: '3', recentTime: '2 day before', taskList: [...dayBeforeTask] },
        { id: '4', recentTime: 'a week before', taskList: [...todayTask] },
        { id: '5', recentTime: 'a month before', taskList: [...todayTask] },
        { id: '6', recentTime: 'a long time ago ', taskList: [...todayTask] },
    ]
    const selectedDayList = recentTime.find((item) => item.id == selectedDayId)
    const recentTimeRenderItem = ({ item }) => {
        const isActive = item.id == selectedDayId
        return (
            <TouchableOpacity onPress={() => setselectedDayId(item.id)} style={[styles.timeRecent, { backgroundColor: isActive ? color.accent : 'transparent', borderColor: color.borderSecondary }]} >
                <Text style={{ fontSize: 17, color: color.textPrimary }}>{item.recentTime}</Text>
            </TouchableOpacity>
        )
    }
    const addTasks = () => {
        const trimedValue = inputValue.trim()
        if (trimedValue.length > 0) {
            setselectedDay(trimedValue)
            router.push({ pathname: '/FocusTime' })
        }
        setInputValue('')
    }
    const recentTask = (recentTaskValue) => {
        setselectedDay(recentTaskValue)
        router.push({ pathname: '/FocusTime' })
        setInputValue(recentTaskValue)
    }
    return (

        <SafeAreaView style={[styles.container, { backgroundColor: color.background }]}>
            <SystemBars style={color.statusBarStyle} />
            <View style={{ marginTop: 30, paddingLeft: 35 }}>
                <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>Focus</Text>
                <Text style={{ color: 'black', opacity: 0.7 }}>what do you want to work on ?</Text>
            </View>
            <View style={[styles.inputBox]}>
                <TextInput
                    onChangeText={setInputValue}
                    value={inputValue}
                    placeholderTextColor={color.inputPlaceholder}
                    style={[styles.input, { backgroundColor: color.inputBackground, borderColor: color.inputBorder, color: color.textPrimary }]}
                    placeholder="add task"
                    borderWidth={0}
                />
                <TouchableOpacity style={styles.StartFocusContainer} onPress={addTasks}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Start Focus</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 20, color: 'black', marginTop: 20, paddingHorizontal: 40, fontWeight: 'bold' }}>Previous tasks</Text>
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
                {selectedDayList.taskList.map((task, index) => (
                    <TouchableOpacity style={[styles.text, { backgroundColor: color.taskCardBackground, borderColor: color.taskCardBorder }]} key={index} onPress={() => recentTask(task)}>
                        <Text style={{ fontSize: 30, color: 'black' }} >{task}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
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
    StartFocusContainer: {
        alignItems: 'center',
        backgroundColor: '#67d45d',
        paddingVertical: 15,
        borderRadius: 10,
    },
    inputBox: {
        marginTop: 50,
        gap: 20,
        paddingHorizontal: 40,
        backgroundColor: '#ebeaec',
        marginHorizontal: 30,
        borderRadius: 30,
        paddingVertical: 30
    },
    input: {
        paddingHorizontal: 20,
        height: 65,
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
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, ImageBackground } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import FocusTime from './Components/FocusTime'
import { SystemBars } from "react-native-edge-to-edge";

const img = require('./assets/background.jpeg')
const addTask = () => {
  const [task, setTask] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [goToFocus, setGoToFocus] = useState(false)
  const addTasks = () => {
    const trimedValue = inputValue.trim()
    if (trimedValue.length > 0) {
      setTask([trimedValue, ...task])
      setGoToFocus(true)
    }
  }
  const recentTask = (recentTaskValue) => {
    setGoToFocus(true)
    setInputValue(recentTaskValue)
  }
  if (goToFocus) {
    return (
      <FocusTime passedTask={inputValue} onBack={() => { setGoToFocus(false); setInputValue('') }} />
    )
  }

  return (

    <SafeAreaView style={styles.container}>
      <SystemBars style='auto' />
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
      <ImageBackground style={{ flex: 1 }} source={img}>
        <ScrollView style={{ height: 300 }}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          {task.map((task, index) => (
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
  }
})
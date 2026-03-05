import { View, Text, StyleSheet, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import FocusTime from './Components/FocusTime'
const addTask = () => {
  const [task, setTask] = useState(['hello'])
  const [inputValue, setInputValue] = useState('')

  const addTasks = () => {
    if (inputValue.trim().length > 0) {
      setTask([...task, inputValue])
      setInputValue(null)
    }

  }
  
  return (
      <FocusTime />
    )
  return (

    <SafeAreaView style={styles.container}>
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
        <Ionicons name="add-circle-outline" size={50} color="black" onPress={() => addTasks()} />
      </View>
      <View style={[styles.TopText, { marginTop: 40 }]}>
        <View style={[styles.horzontalLine, { backgroundColor: '#a19292', opacity: 0.6 }]} />
        <Text style={{ fontSize: 15 }}>Recent Task</Text>
        <View style={[styles.horzontalLine, { backgroundColor: '#a19292', opacity: 0.6 }]} />
      </View >
      <View style={styles.text}>
        {task.map((task, index) => (
          <Text style={{ fontSize: 30 }} key={index}>{task}</Text>
        ))}
      </View>

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
    borderWidth: 2,
    marginHorizontal: 30,

  }
})
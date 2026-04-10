import { createContext, useState } from "react"
export const TaskContext = createContext()
export default function Context({ children }) {
    const [todayTask, setTodayTask] = useState([])
    const [yesterdayTask, setYesterdayTask] = useState([])
    const [dayBeforeTask, setDayBefforeTask] = useState([])
    const [selectedDayId, setselectedDayId] = useState(1)
    const [selectedDay, setselectedDay] = useState(null)
    const [inputValue, setInputValue] = useState('')

    const value = { selectedDayId, setselectedDayId, todayTask, setTodayTask, yesterdayTask, setYesterdayTask, dayBeforeTask, setDayBefforeTask, selectedDay, setselectedDay, inputValue, setInputValue, }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}


import { Tabs } from "expo-router";
import ColorProvider from "../../context/colorContext";
import TaskProvider from "../../context/TaskContext";
export default function layout() {
    return (
        <ColorProvider>
            <TaskProvider>
                <Tabs screenOptions={
                    {
                        headerShown: false
                    }
                }>
                    <Tabs.Screen
                        name="index"
                        options={{
                            title: 'Home',
                        }}
                    />
                    <Tabs.Screen
                        name="FocusTime"
                        options={{
                            title: 'Focus',
                        }}
                    />
                </Tabs>
            </TaskProvider>
        </ColorProvider>

    )
}
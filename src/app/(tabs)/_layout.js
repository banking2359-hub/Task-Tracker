import { Tabs } from "expo-router";

import TaskProvider from "../../context/allState";
export default function layout() {
    return (
        <TaskProvider>
            <Tabs>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        headerShown: false
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

    )
}
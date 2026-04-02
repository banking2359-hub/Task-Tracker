import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export default function layout() {
    return (<Tabs>
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
    )
}
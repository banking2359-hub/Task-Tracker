import { Tabs } from "expo-router";
import ColorProvider from "../../context/colorContext";
import TaskProvider from "../../context/TaskContext";
import Octicons from '@expo/vector-icons/Octicons';
import { useColorContext } from "../../context/colorContext";
import { SystemBars } from "react-native-edge-to-edge";
export default function layout() {
    const TabLayout = () => {
        const { color } = useColorContext();
        return (
            <Tabs screenOptions={
                {
                    headerShown: false,
                    tabBarStyle: {
                        position: 'absolute',
                        elevation: 0,
                        height: 80,
                        backgroundColor: color.background,
                        borderTopWidth: 0,
                        paddingTop: 8
                    },
                    tabBarLabelStyle: {
                        fontSize: 11,
                        marginTop: -2,
                        textTransform: 'uppercase',
                        fontWeight: 'bold'
                    },

                    tabBarActiveTintColor: color.tabbarActiveColor,
                    tabBarInactiveTintColor: color.tabbarInactiveColor,
                }
            }>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color, size }) => {
                            return <Octicons name="tasklist" size={size + 5} color={color} />
                        }
                    }}
                />
                <Tabs.Screen
                    name="FocusTime"
                    options={{
                        title: 'Focus',
                        tabBarIcon: ({ color, size }) => {
                            return <Octicons name="clock" size={size + 4} color={color} />
                        }
                    }}
                />
            </Tabs>
        )
    };
    return (
        <ColorProvider>
            <TaskProvider>
                <TabLayout />
            </TaskProvider>
        </ColorProvider>

    )
}
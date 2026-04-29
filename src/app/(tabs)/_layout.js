import { Tabs } from "expo-router";
import ColorProvider from "../../context/colorContext";
import TaskProvider from "../../context/TaskContext";
import Octicons from '@expo/vector-icons/Octicons';
import { useColorContext } from "../../context/colorContext";
import { SystemBars } from "react-native-edge-to-edge";
import OnBoarding from '../../component/onBoarding'
import { getItem, removeItem } from "../../utils/storage";
import { useEffect, useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from "react-native-safe-area-context";
export default function Layout() {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null)
    const onBoardingStatus = async () => {
        const status = await getItem('OnboardingCompleted')
        console.log(status)
        setIsFirstLaunch(status != 'true')
    }

    useEffect(() => {
        onBoardingStatus()

    }, [])
    const TabLayout = () => {
        const { color } = useColorContext();
        return (
            <Tabs screenOptions={
                {
                    headerLeft: () => <Octicons name="sidebar-collapse" size={24} color="black" />,
                    headerLeftContainerStyle: {
                        paddingLeft: 15,
                    },
                    
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
                <Tabs.Screen name="setting"
                    options={{
                        title: 'Setting',
                        tabBarIcon: ({ color, size }) => {
                            return <Ionicons name="settings-outline" size={size + 4} color={color} />
                        }
                    }}
                />
            </Tabs>

        )
    };
    if (isFirstLaunch === null) {
        return null
    }
    if (isFirstLaunch) {
        return (
            <OnBoarding completed={onBoardingStatus} />
        )
    }
    else {
        return (
            <SafeAreaView edges={['bottom']} style={{ flex: 1, }}>
                <ColorProvider>
                    <TaskProvider>
                        <TabLayout />
                    </TaskProvider>
                </ColorProvider>
            </SafeAreaView>
        )
    }

}
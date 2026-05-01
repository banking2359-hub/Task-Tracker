import { Drawer } from 'expo-router/drawer';
import { useState, useEffect } from 'react';
import { getItem } from '../utils/storage';
import { removeItem } from '../utils/storage';
import { useColorContext } from '../context/colorContext';
import ColorProvider from '../context/colorContext';
import TaskProvider from '../context/TaskContext';
import OnBoardingScreen from '../component/onBoarding';
import { SystemBars } from 'react-native-edge-to-edge';
export default function RootLayout({ children }) {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null)
    const onBoardingStatus = async () => {
        const status = await getItem('OnboardingCompleted')
        console.log(status)
        setIsFirstLaunch(status != 'true')
    }

    useEffect(() => {
        onBoardingStatus()
        // removeItem('OnboardingCompleted')
    }, [])

    const DrawerLayout = () => {
        const { color } = useColorContext();
        return (
            <>
                <SystemBars style={color.statusBarStyle} />
                <Drawer>
                    <Drawer.Screen name='(tabs)'
                        options={{
                            title: 'Focus Timer',
                            headerStyle: {
                                elevation: 0,
                                backgroundColor: color.tabbarbackground,

                            },
                            headerTintColor: color.textPrimary
                        }} />
                </Drawer>
            </>


        )
    }
    if (isFirstLaunch == null)
        return;
    return (
        <ColorProvider>
            <TaskProvider>
                {isFirstLaunch ? <OnBoardingScreen completed={onBoardingStatus} /> : <DrawerLayout />}
            </TaskProvider>
        </ColorProvider>
    )
}
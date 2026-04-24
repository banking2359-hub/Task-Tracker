import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (error) {
        console.log('set error')
    }
}

export const getItem = async (key) => {
    try {
        return await AsyncStorage.getItem(key)
        console.log(await AsyncStorage.getItem(key))
    } catch (error) {
        console.log('get error')
    }

}

export const removeItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
        console.log('remove error')
    }
}
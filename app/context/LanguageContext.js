import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENGLISH_LANGUAGE, LANGUAGES, UKRAINIAN_LANGUAGE } from '../../constants/constants';


export const storeData = async ({ key, value }) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        return e
    }
};

export const readData = async ({ key }) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value
        }
    } catch (e) {
        return e
    }
}

export const pointTextChooser = async ({number}) => {

    let language = await AsyncStorage.getItem('language')

    if(language == LANGUAGES.ukrainian) {
        if(number === 1) {
            return UKRAINIAN_LANGUAGE.homeScreen.ticketPointText_1
        }
        if(number > 1 && number < 5) {
            return UKRAINIAN_LANGUAGE.homeScreen.ticketPointText_2
        }
        return UKRAINIAN_LANGUAGE.homeScreen.ticketPointText_3
    }
    else {
        if(number === 1) {
            return ENGLISH_LANGUAGE.homeScreen.ticketPointText_1
        }
        return ENGLISH_LANGUAGE.homeScreen.ticketPointText_2
    }
}
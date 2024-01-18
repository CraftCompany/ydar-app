import { Center, Text } from 'native-base'
import React from 'react'
import { Pressable } from 'react-native'
import { readData, storeData } from '../../app/context/LanguageContext'
import { LANGUAGES } from '../../constants/constants'

export const Settings = () => {

  const changeLanguage = async () => {
    let language = await readData({ key: 'language' })
    if(language === LANGUAGES.ukrainian) {
      await storeData({key: 'language', value: LANGUAGES.english})
    }
    else {
      await storeData({key: 'language', value: LANGUAGES.ukrainian})
    }
  }


  return (
    <Pressable style={{
      marginTop: 100
    }}
    onPress={async () => await changeLanguage()}
    >
      <Center style={{
        backgroundColor: 'red',
      }}><Text>Change language, </Text></Center>
    </Pressable>
  )
}

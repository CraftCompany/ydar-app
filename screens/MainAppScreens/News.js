import { View } from 'native-base'
import { COLORS } from '../../constants/constants'
import { StyleSheet } from 'react-native'
import React from 'react'
import NewsEventsItem from '../components/NewsEventsScreenItem'
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native'
import { useTheme } from '../../app/context/ThemeContext'

export const News = () => {

  const isFocused = useIsFocused()
  const { theme } = useTheme()
  const navigation = useNavigation()

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if(!isFocused) {
          navigation.goBack()
        }
      }
    }, [isFocused])
  )

  const styles = StyleSheet.create({
    feedContainerStyle: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: theme.bodyBackground,
      paddingHorizontal: 20,
      paddingTop: 110,
      gap: '25px'
    },
  })

  return (
    <View style={styles.feedContainerStyle} flex={1}>
      <NewsEventsItem flag={'News'}/>
      <NewsEventsItem flag={'News'}/>
      <NewsEventsItem flag={'News'}/>
    </View>
  )
}

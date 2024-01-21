import { View } from 'native-base'
import { COLORS } from '../../constants/constants'
import { StyleSheet } from 'react-native'
import React from 'react'
import NewsEventsItem from '../components/NewsEventsScreenItem'

export const Events = () => {
  return (
    <View style={styles.feedContainerStyle} flex={1}>
      <NewsEventsItem flag={'Events'}/>
      <NewsEventsItem flag={'Events'}/>
      <NewsEventsItem flag={'Events'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  feedContainerStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 110,
    gap: '25px'
  },
})

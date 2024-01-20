import { Text, Box, View } from 'native-base'
import { COLORS, FONTS } from '../../constants/constants'
import { StyleSheet } from 'react-native'
import React from 'react'
import TaskCheckMarkIcon from '../../assets/icons/TaskCheckMarkIcon'
import NewsEventsItem from '../../components/NewsEventsItem'

export const Tasks = () => {
  return (
    <Box style={styles.feedContainerStyle} flex={1}>
      {/* <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/> */}
      <NewsEventsItem/>
      <NewsEventsItem/>
      <NewsEventsItem/>
    </Box>
  )
}

const TaskCard = ({props}) => {
  return (
    <Box style={styles.taskCardContainer}>
      <View style={styles.taskCardTextContainer}>
        <Text style={styles.taskCardTitleText}>
          Title
        </Text>
        <Text style={styles.taskCardDescriptionText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
      </View>
      <View>
        <TaskCheckMarkIcon/>
      </View>
    </Box>
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
  taskCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    minHeight: 75,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.red,
    backgroundColor: 'rgba(188, 183, 183, 0.15)',
    paddingTop: 10,
    paddingRight: 17,
    paddingBottom: 10,
    paddingLeft: 17
  },
  taskCardTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'left',
    gap: 5,
    maxWidth: '60%',
    height: '100%'
  },
  taskCardTitleText: {
    fontSize: 13,
    fontWeight: 600,
    fontFamily: FONTS.cabin
  },
  taskCardDescriptionText: {
    fontSize: 9,
    fontFamily: FONTS.montserrat
  },
})
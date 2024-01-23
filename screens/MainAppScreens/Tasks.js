import { Text, Box, View } from 'native-base'
import { COLORS, FONTS } from '../../constants/constants'
import { StyleSheet } from 'react-native'
import React from 'react'
import TaskCheckMarkIcon from '../../assets/icons/TasksCheckMarkIcon'
import { useTheme } from '../../app/context/ThemeContext'


export const Tasks = () => {

  const { theme } = useTheme()

  const styles = StyleSheet.create({
    feedContainerStyle: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: theme.bodyBackground,
      paddingHorizontal: 20,
      paddingTop: 110,
      gap: '25px'
    }
  })


  return (
    <Box style={styles.feedContainerStyle} flex={1}>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
    </Box>
  )
}

const TaskCard = () => {

  const { theme } = useTheme();

  const styles = StyleSheet.create({
    taskCardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 75,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: COLORS.red,
      backgroundColor: theme.containerBackground,
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
      color: theme.textColor1,
      fontSize: 13,
      fontWeight: 600,
      fontFamily: FONTS.cabin
    },
    taskCardDescriptionText: {
      color: theme.textColor1,
      fontSize: 9,
      fontFamily: FONTS.montserrat
    },
  })
  

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

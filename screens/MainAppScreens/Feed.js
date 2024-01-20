import { Box, Pressable, Text, View } from 'native-base'
import React, { useContext, useEffect } from 'react'
import ProfileHomeScreen from '../../assets/icons/ProfileHomeScreen'
import ArrowHomeScreen from '../../assets/icons/ArrowHomeScreen'
import { ImageBackground, StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../constants/constants'
import { LangContext } from '../../App'
import { pointTextChooser, ukrainianTextChooser } from '../../app/context/AsyncStorageHandler'
import { useTranslation } from 'react-i18next'

export const Feed = ({ navigation }) => {
  let [pointsText, setPointsText] = React.useState('points')
  const translations = useContext(LangContext)
  const number = 1

  const {t} = useTranslation('homeScreen')

  return (
    <Box style={styles.feedContainerStyle} flex={1}>

      <Box style={styles.feedUserCardContainer}>
        <View style={styles.feedTextContainer}>
          <Text style={styles.feedTextFirst}>{t("ticketText")}</Text>
          <Text style={styles.feedTextSecond}>{number} {t("ticketPointText_2")} </Text>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('Ticket')}>
            <ProfileHomeScreen />
          </Pressable>
        </View>
      </Box>
      <Box style={styles.feedNewsContainer}>
        <View flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Text style={styles.feedNewsHeadTextFirst}>{t("news")}</Text>
          <Pressable onPress={() => navigation.navigate('News')}>
            <Text style={styles.feedNewsHeadTextSecond}>{t("showAll")}</Text>
          </Pressable>
        </View>
        <Box>

        </Box>
        <View>

        </View>
      </Box>
    </Box>
  )
}

const NewsItem = ({image}) => {
  return (
    <Box style={styles.newsItemContainer}>
      <ImageBackground >

      </ImageBackground>
    </Box>
  )
}


const styles = StyleSheet.create({
  feedContainerStyle: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 110,
  },
  feedUserCardContainer: {
    height: 131,
    borderRadius: 10,
    backgroundColor: COLORS.red,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  feedTextContainer: {
    paddingLeft: 5,
    paddingTop: 25,
  },
  feedTextFirst: {
    fontFamily: FONTS.cabinBold,
    fontSize: 23,
    lineHeight: 32,
    color: COLORS.white,
    width: 159
  },
  feedTextSecond: {
    fontFamily: FONTS.cabinBold,
    fontSize: 13,
    lineHeight: 32,
    color: COLORS.white,
    width: '100%'
  },
  feedNewsContainer: {
    paddingTop: 20,
    borderColor: COLORS.lightGray,
    borderWidth: 1,
  },
  feedNewsHeadTextFirst: {
    fontFamily: FONTS.cabinBold,
    fontSize: 23,
    lineHeight: 32,
  },
  feedNewsHeadTextSecond: {
    fontFamily: FONTS.montserratMedium,
    fontSize: 15,
    lineHeight: 21,
    color: COLORS.red,
  },
  newsItemContainer: {
    width: 160,
    height: 140,
    borderRadius: 10,
  },
})

import { ImageBackground, StyleSheet } from "react-native"
import { COLORS, FONTS } from "../../constants/constants"
import { Box, Pressable, Text, View } from "native-base"
import HeartIcon from "../../assets/icons/HeartIcon"
import { useTranslation } from "react-i18next"
import { useNavigation } from '@react-navigation/native';

export const NewsItem = ({ images }) => {

  const { t } = useTranslation('homeScreen')

  let navigation = useNavigation()

  return (
    <Box style={styles.feedContainer}>
      <View flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Text style={styles.feedHeadTextFirst}>{t("news")}</Text>
        <Pressable onPress={() => {
          navigation.navigate('News')
          }}>
          <Text style={styles.feedHeadTextSecond}>{t("showAll")}</Text>
        </Pressable>
      </View>
      <Box flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} alignItems={'center'} flex={1}>
        {images.map((image, index) => <HomeScreenItem key={index} image={image} />)}
      </Box>
    </Box>
  )
}

export const EventsItem = ({ images }) => {

  const { t } = useTranslation('homeScreen')

  let navigation = useNavigation()

  return (
    <Box style={styles.feedContainer}>
      <View flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Text style={styles.feedHeadTextFirst}>{t("events")}</Text>
        <Pressable onPress={() => navigation.navigate('Events')}>
          <Text style={styles.feedHeadTextSecond}>{t("showAll")}</Text>
        </Pressable>
      </View>
      <Box flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} alignItems={'center'} flex={1}>
        {images.map((image, index) => <HomeScreenItem key={index} image={image} flag={"event"} />)}
      </Box>
    </Box>
  )
}


const HomeScreenItem = ({ image, flag = 'news' }) => {
  return (
    <Box style={styles.itemContainer}>
      <ImageBackground source={image} style={styles.itemImage} imageStyle={styles.itemImage}>
        <View style={styles.itemLikeContainer}>
          <Pressable onPress={() => console.log('like')}>
            <HeartIcon />
          </Pressable>
        </View>
        <View style={styles.itemInformationContainer} >
          <Text style={styles.itemInformationHeadText}>{flag === 'event' ? "05:46:23" : "Група новин"}</Text>
          <Text style={styles.itemInformationBodyText}>Назва</Text>
        </View>
      </ImageBackground>
    </Box>
  )
}



const styles = StyleSheet.create({
  feedContainer: {
    paddingTop: 20,
    height: 200,
  },
  feedHeadTextFirst: {
    fontFamily: FONTS.cabinBold,
    fontSize: 23,
    lineHeight: 32,
  },
  feedHeadTextSecond: {
    fontFamily: FONTS.montserratMedium,
    fontSize: 15,
    lineHeight: 21,
    color: COLORS.red,
  },
  itemContainer: {
    position: 'relative',
  },
  itemImage: {
    width: 160,
    height: 140,
  },
  itemLikeContainer: {
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    alignSelf: 'flex-end',
    backgroundColor: "rgba(255, 255, 255, 0.25)"
  },
  itemInformationContainer: {
    width: 75,
    height: 27,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    position: 'absolute',
    justifyContent: 'center',
    bottom: 10,
    left: 10,
    borderRadius: 10,
    paddingTop: 2,
    paddingLeft: 5,
    paddingRight: 3,
    paddingBottom: 3
  },
  itemInformationHeadText: {
    fontFamily: FONTS.montserratLight,
    fontSize: 7,
    lineHeight: 15,
    textAlign: 'right',
    color: COLORS.white,
  },
  itemInformationBodyText: {
    fontFamily: FONTS.cabinBold,
    fontSize: 13,
    textAlign: 'left',
    lineHeight: 17,
    color: COLORS.white,
  },
}) 
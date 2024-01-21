import { Box, Image, Pressable, ScrollView, Text, View } from 'native-base'
import React from 'react'
import ProfileHomeScreen from '../../assets/icons/ProfileHomeScreen'
import ArrowHomeScreen from '../../assets/icons/ArrowHomeScreen'
import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../constants/constants'
import { useTranslation } from 'react-i18next'
import { mockImages } from '../../assets/mockImages'
import { EventsItem, NewsItem } from '../components/FeedScreenItems'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { News } from './News'
import { Events } from './Events'
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

const FeedNavigator = createNativeStackNavigator()

export const FeedNavigationContainer = () => {

  let userName = "Михайло"

  const { t } = useTranslation('homeScreen')
  const { t:headerTitle } = useTranslation('tabHeaders')

  return (
    <FeedNavigator.Navigator
      screenOptions={{
        headerBackVisible: false,
        headerTitleStyle: styles.headerStyle,
      }}
      initialRouteName='feed'
      detachInactiveScreens={true}
    >
      <FeedNavigator.Screen
        name='feed'
        component={Feed}
        options={{
          title: `${headerTitle("home")}${userName} !`,
          headerShown: true,
          headerTransparent: true,
        }}
      />
      <FeedNavigator.Screen
        name='News'
        options={{ title: t('news'), headerTransparent: true, gestureEnabled: true }}
        component={News}
      />
      <FeedNavigator.Screen
        name='Events'
        options={{ title: t('events'), headerTransparent: true, gestureEnabled: true }}
        component={Events}
      />
    </FeedNavigator.Navigator>
  );
}


const Feed = ({ navigation }) => {
  const number = 1

  const { t } = useTranslation('homeScreen')

  const isFocused = useIsFocused();

  return (
    <ScrollView style={styles.feedContainerStyle} flex={1} h={100}>
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
      <NewsItem images={mockImages} />
      <Box style={styles.feedTasksContainer} flexDirection={'row'} alignItems={'center'}>
        <View style={styles.feedTasksImageContainer} flexDirection={'row'}>
          {mockImages.map((image, index) => <Image key={index} source={image} size={62} style={styles.feedTasksImage} borderRadius={100} alt='image' left={index * 5} zIndex={
            index === 0 ? 5 :
              index === 1 ? 4 :
                3
          } />)}
        </View>
        <View style={styles.feedTasksTextContainer}>
          <Text style={styles.feedTasksText} height={"42px"} width={"172px"}>
            {t('personalTaskText')}
          </Text>
          <Pressable onPress={() => navigation.jumpTo('Tasks')} >
            <ArrowHomeScreen style={{
              transform: [{ scale: 1.5 }]
            }} />
          </Pressable>
        </View>
      </Box>
      <EventsItem images={mockImages} />
    </ScrollView>
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
  feedTasksContainer: {
    marginTop: 10,
    height: 93,
    backgroundColor: COLORS.homeWhite,
    shadowColor: '#F0E9E2',
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 15,
    shadowOffset: {
      height: -2,
      width: 0
    },
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignContent: 'center'
  },
  feedTasksImageContainer: {
    position: 'relative',
    width: 120,
    height: 50
  },
  feedTasksImage: {
    borderWidth: 3,
    borderColor: "#EEEEEE",
    position: 'absolute',
    top: -5,
  },
  feedTasksTextContainer: {
    width: 210,
    height: 50,
    borderRadius: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feedTasksText: {
    fontFamily: FONTS.montserratMedium,
    fontSize: 14,
    lineHeight: 21,
  },
  headerStyle: {
    fontFamily: FONTS.cabinBold,
    fontSize: 24,
    lineHeight: 32,
  }
})

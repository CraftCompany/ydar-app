import React from 'react'
import { Text, View, Pressable, Image } from 'native-base';
import LangSwitcher from '../../app/utils/LangSwitcher'
import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../constants/constants'
import { useTranslation } from 'react-i18next'
import Bluebell from '../../assets/icons/Bluebell';
import ArrowSettingsScreen from '../../assets/icons/ArrowSettingsScreen';



export const Settings = () => {

  const { t } = useTranslation('settingsScreen')

  const settingsList = [
    {
      icon: <Bluebell />,
      text: t("notifications")
    },
    {
      icon: <Bluebell />,
      text: t("language")
    },
    {
      icon: <Bluebell />,
      text: t("aboutDeveloper")
    },
    {
      icon: <Bluebell />,
      text: t("privacyPolicy")
    },
    {
      icon: <Bluebell />,
      text: t("FAQ")
    },
    {
      icon: <Bluebell />,
      text: t("feedback")
    },
    {
      icon: <Bluebell />,
      text: t("logout")
    },
  ]

  return (
  //  <LangSwitcher/>
    <View style={styles.settingsContainerStyle}>
      <View style={styles.avatarContainer}>
        <Image source={require('../../assets/basicAvatar.png')} style={styles.image}/>
      </View>

      <View style={styles.settingsContainer}>
        <View style={styles.personInfoContainer}>
          <Text style={styles.personName}>
            Name
          </Text>
          <Text style={styles.personEmail}>
            banerr2006@gmail.com
          </Text>
        </View>

        <View style={styles.contentContainer}>
          <Pressable onPress={() => console.log('+')}>
            <Bluebell />
          </Pressable>
          <Text style={styles.settingsText}>
            {t("notifications")}
          </Text>
          <Pressable onPress={() => console.log('+')}>
            <ArrowSettingsScreen />
          </Pressable>
        </View>

        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  settingsContainerStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 50,
    height: '100%',
    position: 'relative'
  },
  avatarContainer: {
    width: '17vh',
    height: '17vh',
    borderRadius: '50%',
    borderColor: COLORS.black,
    borderWidth: 3,
    top: '6%',
    zIndex: 5
  },
  settingsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '60%',
    backgroundColor: 'rgba(188, 183, 183, 0.15)',
    borderRadius: 16,
    shadowColor: 'rgba(0, 0, 0, 0.10)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
  personInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  personName: {
    fontFamily: FONTS.cabin,
    fontSize: 24,
    fontWeight: 600,
    color: COLORS.black,
  },
  personEmail: {
    fontFamily: FONTS.cabin,
    fontSize: 13,
    fontWeight: 700,
    color: COLORS.lightGray,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 13
  },
  settingsText: {
    fontFamily: FONTS.cabin,
    fontSize: 15,
    fontWeight: 700,
    color: COLORS.gray,
    alignSelf: 'flex-start',
    paddingLeft: '5%'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',  
  },
})
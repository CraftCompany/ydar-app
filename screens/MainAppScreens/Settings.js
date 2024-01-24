import React from 'react'
import { Text, View, Pressable, Center } from 'native-base'
import LangSwitcher from '../../app/utils/LangSwitcher'
import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../constants/constants'
import { useTranslation } from 'react-i18next'
import Bluebell from '../../assets/icons/Bluebell'
import LockIcon from '../../assets/icons/LockIcon'
import ArrowSettingsScreen from '../../assets/icons/ArrowSettingsScreen'
import TranslateLanguageIcon from '../../assets/icons/TranslateLanguageIcon'
import QuestionMarkIcon from '../../assets/icons/QuestionMarkIcon'
import LetterIcon from '../../assets/icons/LetterIcon'
import LogOutIcon from '../../assets/icons/LogOutIcon'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from '../../app/context/ThemeContext'
import SettingsPlaceholderImage from '../../assets/mockImages/SettingsPlacaholderImage'


const SettingsNavigator = createNativeStackNavigator()

export const SettingsNavigationContainer = () => {

  const { t } = useTranslation('settingsScreen')
  const { t:headerTitle } = useTranslation('tabHeaders')

  const { theme } = useTheme()

  const styles = StyleSheet.create({
    headerStyle: {
      color: theme.textColor1,
      fontFamily: FONTS.cabinBold,
      fontSize: 24,
      lineHeight: 32,
    }
  })

  return (
    <SettingsNavigator.Navigator
      screenOptions={{
        headerBackVisible: false,
        headerTitleStyle: styles.headerStyle,
      }}
      initialRouteName='settings'
      detachInactiveScreens={true}
    >
      <SettingsNavigator.Screen
        name='settings'
        component={Settings}
        options={{
          title: `${headerTitle("settings")}`,
          headerShown: true,
          headerTransparent: true,
        }}
      />
      <SettingsNavigator.Screen
        name='LangSwitcher'
        options={{ title: t("language"), headerTransparent: true, gestureEnabled: true }}
        component={LangSwitcher}
      />
    </SettingsNavigator.Navigator>
  );
}

export const Settings = ({navigation}) => {

  const { t } = useTranslation('settingsScreen')
  const { theme, toggleTheme, isDarkTheme } = useTheme();

  const styles = StyleSheet.create({
    settingsContainerStyle: {
      flexDirection: 'column',
      backgroundColor: theme.bodyBackground,
      paddingHorizontal: 20,
      paddingTop: 50,
    },
    avatarContainer: {
      width: 100,
      height: 100,
      borderRadius: '50%',
      borderColor: theme.borderColor,
      borderWidth: 1,
      marginTop: 50,
      top: '20%',
      zIndex: 5,
    },
    settingsContainer: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      height: '58%',
      backgroundColor: theme.containerBackground,
      borderRadius: 16,
      shadowColor: 'rgba(0, 0, 0, 0.10)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 2,
      padding: 20,
      gap: 20,
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
      color: theme.textColor1,
    },
    personEmail: {
      fontFamily: FONTS.cabin,
      fontSize: 13,
      fontWeight: 700,
      color: theme.textColor2,
    },
    contentContainer: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      gap: 10
    },
    settingsText: {
      fontFamily: FONTS.cabin,
      fontSize: 15,
      fontWeight: 700,
      color: theme.textColor1,
      width: '75%'
    },
    image: {
      transform: [{ scale: 0.9 }],
      borderRadius: '50%',
    },
    iconContainer: {
      width: 30,
      height: 30,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    settingsPressable: {
      width: 30
    }
  })
  
  const settingsList = [
    {
      icon: <Bluebell fill={theme.textColor1}/>,
      text: t("notifications"),
      onPress: null
    },
    {
      icon: <TranslateLanguageIcon fill={theme.textColor1}/>,
      text: t("language"),
      onPress: () => navigation.navigate('LangSwitcher'),
    },
    {
      icon: <LockIcon fill={isDarkTheme ? theme.textColor1 : null}/>,
      text: t("aboutDeveloper"),
      onPress: () => toggleTheme()    
    },
    {
      icon: <LockIcon fill={isDarkTheme ? theme.textColor1 : null}/>,
      text: t("privacyPolicy"),
      onPress: null
    },
    {
      icon: <QuestionMarkIcon fill={theme.textColor1}/>,
      text: t("FAQ"),
      onPress: null
    },
    {
      icon: <LetterIcon fill={theme.textColor1}/>,
      text: t("feedback"),
      onPress: null   
    },
    {
      icon: <LogOutIcon fill={theme.textColor1}/>,
      text: t("logout"),
      onPress: null
    },
  ]

  return (
    <View style={styles.settingsContainerStyle}>
      <Center>
        <View style={styles.avatarContainer} justifyContent={'center'} alignContent={'center'}>
          <Center><SettingsPlaceholderImage style={styles.image} /></Center>
        </View>
      </Center>

      <View style={styles.settingsContainer}>
        <View style={styles.personInfoContainer}>
          <Text style={styles.personName}>
            Name
          </Text>
          <Text style={styles.personEmail}>
            banerr2006@gmail.com
          </Text>
        </View>

        {
          settingsList.map((item)=>{
            return(
              <View style={styles.contentContainer} key={`settings-line-container-${item.text}`}>
                <View style={styles.iconContainer}>
                  {item.icon}
                </View>
                {
                  item.text == t("language") ? 
                  <>
                    <Text style={[styles.settingsText, {width: '45%'}]}>
                      {item.text}
                    </Text>
                    <Text style={[styles.settingsText, {width: '25%', color: COLORS.red}]}>
                      {t("currentLanguage")}
                    </Text>
                  </> : 
                  <Text style={styles.settingsText}>
                    {item.text}
                  </Text>
                }
                <Pressable onPress={item.onPress} style={styles.settingsPressable}>
                  <ArrowSettingsScreen fill={theme.textColor1}/>
                </Pressable>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}
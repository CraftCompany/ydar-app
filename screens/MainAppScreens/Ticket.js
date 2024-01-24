import { Box, Center, Text, View } from 'native-base'
import React from 'react'
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS, FONTS } from '../../constants/constants'
import TicketScreenBackImage from '../../assets/ticketScreen/TicketScreenBackImage'
import TicketScreenUserImageBorders from '../../assets/ticketScreen/TicketScreenUserImageBorders'
import RangImage from '../../assets/ticketScreen/RangImage'
import { useTranslation } from 'react-i18next'
import * as Progress from 'react-native-progress';
import SettingsPlaceholderImage from '../../assets/mockImages/SettingsPlaceholder'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import QRCode from 'react-native-qrcode-svg';

export const Ticket = () => {
  const { t } = useTranslation('ticketScreen')
  let progress = 25 / 68

  const rotate = useSharedValue(0)

  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [0, 180])
    return {
      transform: [{ rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) }]
    }
  })
  const backAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [180, 360])
    return {
      transform: [{ rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) }]
    }
  })

  return (
    <Box style={styles.rootTicketContainer}>
      <View style={styles.ticketCardsContainer}>
        <Animated.View style={[styles.frontcard, frontAnimatedStyles]}>
          <TicketCard rotate={rotate} />
        </Animated.View>
        <Animated.View style={[styles.backcard, backAnimatedStyles]}>
          <QRCodeCard rotate={rotate} />
        </Animated.View>
      </View>
      <Box style={styles.ticketProgressContainer}>
        <Center><Text style={styles.ticketProgressText}>{t('secondaryText')}</Text></Center>
        <Center><Text style={styles.ticketProgressText}>25/68</Text></Center>
        <Center><Progress.Bar width={340} height={10} borderColor={COLORS.black} color={COLORS.red} unfilledColor='#D9D9D900' progress={progress} /></Center>
      </Box>
    </Box>
  )
}

const TicketCard = ({ rotate }) => {
  return (
    <Pressable onPress={() => {
      rotate.value = rotate.value === 0 ? 1 : 0
    }}>
      <Box style={styles.ticketContainer}>
        <TicketScreenBackImage />
        <View style={styles.ticketImageContainer}>
          <SettingsPlaceholderImage style={styles.ticketImage} />
          <TicketScreenUserImageBorders style={styles.ticketImageBorder} />
        </View>
        <Text style={styles.ticketText}>Васька Васкін</Text>
        <RangImage style={styles.ticketRangImage} />
        <Text style={styles.ticketPointsText}>балів 25</Text>
      </Box>
    </Pressable>
  )
}

const QRCodeCard = ({ rotate }) => {
  return (
    <Pressable onPress={() => {
      rotate.value = rotate.value === 1 ? 0 : 1
    }}
    >
      <Box style={styles.ticketContainer}>
        <TicketScreenBackImage />
        <View style={styles.ticketImageContainer}>
          <TicketScreenUserImageBorders style={styles.ticketImageBorder} />
          <QRCode
            value='https://www.youtube.com/'
            size={200}
          />
        </View>
        <Text style={styles.ticketText}>Васька Васкін</Text>
        <RangImage style={styles.ticketRangImage} />
        <Text style={styles.ticketPointsText}>балів 25</Text>
      </Box>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  rootTicketContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative',
  },
  ticketCardsContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frontcard: {
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  backcard: {
    backfaceVisibility: 'hidden',
  },
  ticketContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticketBackgroundImage: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  ticketImageContainer: {
    height: 250,
    width: 250,
    position: 'absolute',
    top: '10%',
    zIndex: 1,
    // backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  ticketImageBorder: {
    position: 'absolute',
  },
  ticketImage: {
    position: 'absolute',
    zIndex: 2,
    transform: [{ scale: 2 }]
  },
  ticketText: {
    fontFamily: FONTS.montserratBold,
    fontSize: 30,
    lineHeight: 32,
    textAlign: 'center',
    position: 'absolute',
    zIndex: 3,
    bottom: '30%',
  },
  ticketRangImage: {
    position: 'absolute',
    zIndex: 3,
    bottom: '4%',
    right: '10%',
  },
  ticketPointsText: {
    fontFamily: FONTS.montserratBold,
    fontSize: 30,
    lineHeight: 32,
    width: 85,
    textAlign: 'center',
    color: COLORS.white,
    zIndex: 3,
    position: 'absolute',
    left: '9%',
    bottom: '4%'
  },
  ticketProgressContainer: {
    position: 'relative',
    width: '100%',
    height: 80,
    marginTop: 30,
  },
  ticketProgressText: {
    fontFamily: FONTS.montserratBold,
    fontSize: 15
  }
})

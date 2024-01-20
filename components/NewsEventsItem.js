import React from 'react'
import { Text, Box, View, Image } from 'native-base'
import { StyleSheet, Platform } from 'react-native'
import { COLORS, FONTS } from '../constants/constants'
import LikeIcon from '../assets/icons/LikeIcon'

const NewsEventsItem = () => {
    return (
      <Box style={styles.itemContainer}>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/images.jpg')} style={styles.image}/>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.itemInfo}>Група новин</Text>
            <Text style={styles.itemTitle}>Title</Text>
            <Text style={styles.itemDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <View style={styles.itemLikeWrapper}>
                <View style={styles.itemLikeContainer}>
                    <LikeIcon/>
                </View>
            </View>
        </View>
      </Box>
    )
}

export default NewsEventsItem

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        height: 140,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        ...Platform.select({
            ios: {
              shadowColor: 'rgba(201, 192, 182, 0.35)',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 1,
              shadowRadius: 4,
            },
            android: {
              elevation: 4,
            },
          }),
          // Additional shadow for iOS
          ...Platform.select({
            ios: {
              shadowColor: 'rgba(201, 192, 182, 0.35)',
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 1,
              shadowRadius: 5,
            },
          }),
    },
    imageContainer: {
        width: '45%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden' 
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        
    },
    infoContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10,
        maxWidth: '55%'
    },
    itemInfo: {
        fontSize: 9,
        fontFamily: FONTS.montserrat
    },
    itemTitle: {
        fontSize: 13,
        fontWeight: 600,
        fontFamily: FONTS.cabin,
        textAlign: 'center',
        
    },
    itemDescription: {
        fontSize: 9,
        fontFamily: FONTS.montserrat
    },
    itemLikeWrapper:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    itemLikeContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'centre',
        backgroundColor: COLORS.lightRed,
        borderRadius: 7,
        width: 22,
        height: 22,
    },
})
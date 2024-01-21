import React from 'react'
import { Text, Box, View, Image, Pressable } from 'native-base'
import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../constants/constants'
import HeartIcon from '../../assets/icons/HeartIcon'


const NewsEventsItem = ({flag}) => {
    return (
      <Box style={styles.itemContainer}>
        <View style={styles.imageContainer}>
            <Image source={require('../../assets/images.jpg')} style={styles.image} alt='image'/>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.itemInfo}>{flag == 'Events' ? '05:46:23' : 'Група новин'}</Text>
            <Text style={styles.itemTitle}>Title</Text>
            <Text style={styles.itemDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <View style={styles.itemLikeContainer}>
                <Pressable onPress={() => console.log('like')}>
                    <HeartIcon />
                 </Pressable>
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
        shadowColor: '#F0E9E2',
        shadowOpacity: 1,
        shadowRadius: 10,
        borderRadius: 15,
        shadowOffset: {
            height: -2,
            width: 0
        },
        elevation: 5,

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
    itemLikeContainer: {
        width: 26,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        alignSelf: 'flex-end',
        marginTop: 8,
        marginRight: 8,
        backgroundColor: COLORS.lightRed,
    },
})
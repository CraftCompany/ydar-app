import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Box } from 'native-base'
import { COLORS } from '../constants/constants'
import LoaderIcon from '../assets/icons/LoaderIcon'
import * as Progress from 'react-native-progress';
const Loader = ({loading}) => {

    let [progress, setProgress] = React.useState(0)

    useEffect(() => {
        if(loading && progress <= 1) {
            let timeout = setTimeout(() => {
                setProgress((prev) => prev+=0.15)
            },150)
            return () => {
                clearTimeout(timeout)
            }
        }
    },[progress, loading])

    return (
        <Box flex={1} style={styles.LoaderWrapper} justifyContent="center" alignItems="center">
            <LoaderIcon style={styles.loaderImage} alignSelf="center" />
            <Box style={styles.statusbarWrapper} justifyContent="center" alignItems="center" _text={{
                fontSize: 12,
                lineHeight: 14,
                fontFamily: "Inter",
                fontWeight: 400,
            }}>
                <Text>ЗАВАНТАЖЕННЯ...</Text>
                <Progress.Bar width={315} height={10} borderColor={COLORS.black} color={COLORS.red} unfilledColor='#D9D9D900' progress={progress} />
            </Box>
        </Box>
    )
}

export default Loader

const styles = StyleSheet.create({
    LoaderWrapper: {
        backgroundColor: COLORS.white,
    },
    loaderImage: {
        marginLeft: 20,
    },
    statusbarWrapper: {
        position: 'absolute',
        bottom: 50,
        left: 20,
        right: 20,
    }
})
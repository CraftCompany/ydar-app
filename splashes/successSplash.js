import React from 'react'
import SuccessIcon from '../assets/icons/SuccessIcon';
import { Box, Center, Modal, Text, View } from 'native-base';
import { COLORS, FONTS } from '../constants/constants';
import { StyleSheet } from 'react-native';

export const SuccessSplash = ({modalVisible, setModalVisible}) => {
  return (
   <Modal isOpen={modalVisible} onClose={setModalVisible}>
    <Modal.Content width={'80%'} height={'40%'} justifyContent={'center'} alignItems={'center'} borderColor={COLORS.red} borderWidth={'1px'}>
        <Box alignItems={'center'} flex={1} width={'90%'} paddingTop={'30px'}>
            <SuccessIcon />
            <Text style={styles.entryText}>Реєстрація успішна!</Text>
            <Text style={styles.secondaryText}>Ваш обліковий запис створено. Зачекайте хвилинку, обробка даних...</Text>
            <View backgroundColor={'#ff0000'} paddingY={'14px'} paddingX={'10px'} borderRadius={'30px'} width={'80%'} marginTop={'30px'} >
                <Center><Text style={styles.badgeText}>Створення...</Text></Center>
            </View>
        </Box>
    </Modal.Content>
   </Modal>
  )
}


const styles = StyleSheet.create({
    entryText: {
        color: COLORS.black,
        fontFamily: FONTS.cabinBold,
        fontSize: 24,
        lineHeight: 32,
        marginTop: 20,
    },
    secondaryText: {
        color: COLORS.black,
        fontFamily: FONTS.montserrat,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        marginTop: 20,
    },
    badgeText: {
        color: COLORS.white,
        fontFamily: FONTS.montserratSemiBold,
        fontSize: 16,
        lineHeight: 16,
    }
});
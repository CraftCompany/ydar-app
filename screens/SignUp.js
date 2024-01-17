import { Keyboard, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Box, Stack, Text, Input, Pressable, Image, Icon, Checkbox, Button, Center } from 'native-base'
import { COLORS, FONTS } from '../constants/constants'
import GoogleIcon from '../assets/icons/GoogleIcon'
import FacebookIcon from '../assets/icons/FacebookIcon'
import TwitterIcon from '../assets/icons/TwitterIcon'
import AppleIcon from '../assets/icons/AppleIcon'
import ProfileIcon from '../assets/icons/ProfileIcon'
import MessageIcon from '../assets/icons/MessageIcon'
import ShowIcon from '../assets/icons/ShowIcon'
import RightLine from '../assets/icons/RightLine'
import LeftLine from '../assets/icons/LeftLine'
import LockIcon from '../assets/icons/LockIcon'
import { SuccessSplash } from '../splashes/successSplash'


const SignIn = ({ navigation }) => {

    const [showPass, setShowPass] = React.useState(false)
    const [accepted, setAccepted] = React.useState(false)

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const [showModal, setShowModal] = React.useState(false)

    const handleModalOpen = () => {
        setShowModal(true)
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Box flex={1} bg={COLORS.white}
                style={{ paddingHorizontal: 20, paddingVertical: 20 }}
            >
                <Box style={{
                    marginTop: 100,
                }}>
                    <Text style={styles.entryText}>Ласкаво просимо</Text>
                </Box>
                <Box style={{
                    marginTop: 20,
                }}>
                    <Text style={styles.entryTextBottom}>Будь ласка, введіть дані свого облікового запису нижче!</Text>
                </Box>
                <Stack direction="column" mb="2.5" mt="5" space={5}>
                    <Input
                        _input={styles.loginInput}
                        size="lg"
                        variant="rounded"
                        InputLeftElement={<ProfileIcon style={{ marginLeft: 10 }} />}
                        placeholder="Ім'я"
                        type='text'
                        _focus={styles.focusInput}
                        focusOutlineColor={COLORS.red}
                        autoComplete='name'
                        borderColor={COLORS.black}
                        placeholderTextColor={COLORS.black}
                        onChange={(e) => setName(e.nativeEvent.text)}
                        value={name}
                    />
                    <Input
                        _input={styles.loginInput}
                        size="lg"
                        variant="rounded"
                        InputLeftElement={<MessageIcon style={{ marginLeft: 10 }} />}
                        placeholder='Email'
                        type='text'
                        _focus={styles.focusInput}
                        focusOutlineColor={COLORS.red}
                        autoComplete='email'
                        borderColor={COLORS.black}
                        placeholderTextColor={COLORS.black}
                        onChange={(e) => setEmail(e.nativeEvent.text)}
                        value={email}
                    />
                    <Input
                        _input={styles.loginInput}
                        size="lg"
                        variant="rounded"
                        InputLeftElement={<LockIcon style={{ marginLeft: 10 }} />}
                        InputRightElement={<TouchableOpacity style={{ marginRight: 10 }} onPress={() => setShowPass(!showPass)}><ShowIcon /></TouchableOpacity>}
                        placeholder='Пароль'
                        type={showPass ? "text" : "password"}
                        _focus={styles.focusInput}
                        focusOutlineColor={COLORS.red}
                        autoComplete='password'
                        borderColor={COLORS.black}
                        placeholderTextColor={COLORS.black}
                        onChange={(e) => setPassword(e.nativeEvent.text)}
                        value={password}
                    />
                    <Checkbox size="sm" colorScheme="red" borderColor={COLORS.red} value={accepted} onChange={setAccepted} style={{ marginLeft: 10 }}><Text style={styles.checkboxText}> Прийміть положення та умови </Text></Checkbox>
                    <Button size="lg" _text={styles.buttonText} variant="unstyled" style={styles.button} isDisabled={!accepted} onPress={handleModalOpen}>
                        Продовжити
                    </Button>
                </Stack>
                <Box justifyContent="center" flexDirection="row" marginTop={15}>
                    <Text>
                        <Center flexDirection="row" _text={{ color: COLORS.lightGray }} >
                            <LeftLine style={{ marginRight: 2 }} />
                            Або продовжити через
                            <RightLine style={{ marginLeft: 2 }} /></Center>
                    </Text>

                </Box>
                <Stack direction="row" space={5} mt={7}>
                    <Pressable
                        style={{
                            width: 137,
                            height: 48,
                            borderRadius: 25,
                            borderColor: COLORS.black,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <GoogleIcon />
                    </Pressable>
                    <Pressable
                        style={{
                            width: 48,
                            height: 48,
                            borderRadius: 25,
                            borderColor: COLORS.black,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <FacebookIcon />
                    </Pressable>
                    <Pressable
                        style={{
                            width: 48,
                            height: 48,
                            borderRadius: 25,
                            borderColor: COLORS.black,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}
                    >
                        <TwitterIcon />
                    </Pressable>
                    <Pressable
                        style={{
                            width: 48,
                            height: 48,
                            borderRadius: 25,
                            borderColor: COLORS.black,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}
                    >
                        <AppleIcon />
                    </Pressable>
                </Stack>
                <Box justifyContent="center" alignItems="center" style={styles.footerTextWrapper}>
                    <Text style={styles.footerText}>Вже маєте обліковий запис у нас?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignIn")}><Text style={styles.footerTextLink}>Увійти</Text></TouchableOpacity>
                </Box>
                <SuccessSplash modalVisible={showModal} setModalVisible={setShowModal} />
            </Box>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    entryText: {
        color: COLORS.black,
        fontFamily: FONTS.cabinBold,
        fontSize: 32,
        lineHeight: 40,
    },
    entryTextBottom: {
        lineHeight: 24,
        fontWeight: 700,
        fontSize: 16,
        width: "70%",
        color: COLORS.gray,
        fontFamily: FONTS.montserrat,
    },
    loginInput: {
        backgroundColor: 'transparent',
        paddingTop: 4,
        paddingBottom: 4,
    },
    focusInput: {
        backgroundColor: 'transparent',
    },
    checkboxText: {
        color: COLORS.red,
        fontFamily: FONTS.montserratMedium,
        fontSize: 15,
        lineHeight: 21,
    },
    button: {
        width: '100%',
        backgroundColor: COLORS.red,
        borderRadius: 25,
        paddingTop: 15,
        paddingBottom: 15,
    },
    buttonText: {
        color: COLORS.white,
        fontFamily: FONTS.montserratSemiBold,
        fontSize: 16,
        lineHeight: 24,
    },
    footerTextWrapper: {
        position: 'absolute',
        width: '100%',
        bottom: 80,
        right: 20,
        left: 20,
        flexDirection: 'row',
    },
    footerText: {
        fontFamily: FONTS.montserratMedium,
        fontSize: 15,
        lineHeight: 24,
        color: COLORS.black,
    },
    footerTextLink: {
        fontFamily: FONTS.montserratMedium,
        fontSize: 15,
        lineHeight: 24,
        color: COLORS.red,
        marginLeft: 5,
    }
});


export default SignIn
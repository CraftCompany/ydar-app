import { Keyboard, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Box, Stack, Text, Input, Pressable, Button, Center } from 'native-base'
import { COLORS, FONTS } from '../constants/constants'
import GoogleIcon from '../assets/icons/GoogleIcon'
import FacebookIcon from '../assets/icons/FacebookIcon'
import TwitterIcon from '../assets/icons/TwitterIcon'
import AppleIcon from '../assets/icons/AppleIcon'
import MessageIcon from '../assets/icons/MessageIcon'
import ShowIcon from '../assets/icons/ShowIcon'
import RightLine from '../assets/icons/RightLine'
import LeftLine from '../assets/icons/LeftLine'
import LockIcon from '../assets/icons/LockIcon'


const SignIn = ({ navigation }) => {

    const [showPass, setShowPass] = React.useState(false)

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
                    <Text style={styles.entryTextBottom}>Будь ласка, введіть свої дані для входу нижче!</Text>
                </Box>
                <Stack direction="column" mb="2.5" mt="5" space={5}>
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
                    />
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text style={styles.textLink}>Забули пароль?</Text>
                    </TouchableOpacity>
                    <Button size="lg" _text={styles.buttonText} variant="unstyled" style={styles.button} onPress={() => navigation.navigate("Home")}>
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
                    <Text style={styles.footerText}>Немає облікового запису в нас?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}><Text style={styles.footerTextLink}>Зареєструватися</Text></TouchableOpacity>
                </Box>
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
        width: "100%",
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
    textLink: {
        fontFamily: FONTS.montserratSemiBold,
        fontSize: 15,
        lineHeight: 24,
        color: COLORS.red,
        marginLeft: 5,
    },
    footerTextWrapper: {
        position: 'absolute',
        width: '100%',
        bottom: 100,
        right: 20,
        left: 20,
    },
    footerText: {
        fontFamily: FONTS.montserratMedium,
        fontSize: 15,
        lineHeight: 24,
        color: COLORS.lightGray,
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
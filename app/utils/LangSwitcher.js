import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'expo-localization';
import { Text, View, Pressable } from 'native-base';
import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/constants';

 const LangSwitcher = () => {
    const { i18n, t } = useTranslation("settingsScreen");

    const supportedLanguages = ["en", "ukr"];
 
    const changeLanguage = async (lng) => {
      i18n.changeLanguage(lng);
      await AsyncStorage.removeItem('language')
      await AsyncStorage.setItem('language', lng)
    };

  return (
    <View style={styles.container}>
    {/* <Text style={styles.title}>{t("language")}</Text> */}
    {supportedLanguages.map((lng) => (
      <Pressable
        onPress={async () => await changeLanguage(lng)}
        style={styles.item}
        key={lng}
      >
        <Text style={styles.itemText}>{t(lng)}</Text>
      </Pressable>
    ))}
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 16,
      paddingTop: 110,
    },
    title: {
      marginBottom: 16,
      fontSize: 24,
      fontWeight: "bold",
    },
    item: {
      width: "100%",
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    itemText: {
      fontSize: 16,
      textAlign: "center",
    },
  });

export default LangSwitcher;
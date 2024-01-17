import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feed, Tasks, Ticket, Profile, Settings } from './MainAppScreens';
import { COLORS } from '../constants/constants';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import HomeTabIcon from '../assets/icons/HomeTabIcon';
import TaskTabIcon from '../assets/icons/TaskTabIcon';
import TicketTabIcon from '../assets/icons/TicketTabIcon';
import ProfileTabIcon from '../assets/icons/ProfileTabIcon';
import SettingsTabIcon from '../assets/icons/SettingsTabIcon';
import { Center } from 'native-base';

const styles = StyleSheet.create({
    tabBarContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 95,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: "#F86A63",
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingBottom: 10,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ticketIcon: {
        transform: [{ scale: 1.5 }],
    },
    profileIcon: {
        transform: [{ scale: 1.2 }],
    },
    settingsIcon: {
        marginTop: 5,
        transform: [{ scale: 1.2 }],
    }
})


const schema = {
    "Feed": <HomeTabIcon/>,
    "Tasks": <TaskTabIcon/>,
    "Ticket": <TicketTabIcon style={styles.ticketIcon}/>,
    "Profile": <ProfileTabIcon style={styles.profileIcon}/>,
    "Settings": <SettingsTabIcon style={styles.settingsIcon}/>,
}


const Tab = createBottomTabNavigator();

export const MainApp = () => {
    return (
        <Tab.Navigator initialRouteName="Feed" backBehavior={"history"} detachInactiveScreens={false}
            tabBar={(props) => <CustomTabBar key={props?.state?.key} {...props}  schema={schema}/>}
            safeAreaInsets={{ bottom: 0 }}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Tasks" component={Tasks} />
            <Tab.Screen name="Ticket" component={Ticket} o />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}



const CustomTabBar = ({ state, descriptors, navigation}) => {
    const { width } = useWindowDimensions();
    const MARGIN = 0;
    const TAB_BAR_WIDTH = width - 2 * MARGIN;
    const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;

    return (
        <View style={[styles.tabBarContainer, { width: width, bottom: MARGIN }]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <Pressable
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <View style={styles.contentContainer}>
                           <Center>{schema[route.name]}</Center> 
                        </View>
                    </Pressable>
                );
            })}
        </View>
    );
}


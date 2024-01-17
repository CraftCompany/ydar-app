import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

import AsyncStorage from '@react-native-async-storage/async-storage';



const TOKEN_KEY = "token";
export const API_URL = 'https://api.developbetterapps.com'
const AuthContext = createContext({});

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: null,
        authenticated: null,
    });

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY);

            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                setAuthState({
                    token,
                    authenticated: true,
                })
            }
        }
        loadToken()
    }, [])

    const register = async (...props) => {
        try {
            // Registers a new user with the provided email and password.
            return await axios.post(`${API_URL}/users`, {...props});
        } catch (e) {
            return { error: true, msg: e.responce.data.msg }
        }
    };


    const login = async (...props) => {
        try {
            //Logs in a user with the provided email and password.

            const result = await axios.post(`${API_URL}/users`, {...props});

            setAuthState({
                token: result.data.token,
                authenticated: true,
            })

            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;

            await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);

            return result;
        } catch (e) {
            return { error: true, msg: e.responce.data.msg }
        }
    };

    const logout = async () => {

        // Logs out the user by deleting the token from SecureStore, removing the authorization header, and updating the authentication state.     

        await SecureStore.deleteItemAsync(TOKEN_KEY);

        axios.defaults.headers.common['Authorization'] = '';

        setAuthState({
            token: null,
            authenticated: false,
        })
    }

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
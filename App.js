/**
 * Vídeo #1 ao #11: React Hooks - Módulo 17 - B7Web
 * Animaçeõs.
 * by: Vagner Pinto
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BasicoScreen from './src/screens/BasicoScreen';
import ModalTransicoesScreen from './src/screens/ModalTransicoesScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import JogoDaVelhaScreen from './src/screens/JogoDaVelhaScreen';

/*
    Função que inicializa o app.
 */
const Stack = createStackNavigator();
function App() {
    console.disableYellowBox = true; //habilitar para ver advertências do react native no dispositivo
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen" >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{headerLeft: null, title: 'Home', headerStyle: {backgroundColor: '#a50000'}, headerTintColor: '#fff'}} />
                <Stack.Screen
                    name="BasicoScreen"
                    component={BasicoScreen}
                    options={{title: 'Básico de Animações', headerStyle: {backgroundColor: '#a50000'}, headerTintColor: '#fff'}} />
                <Stack.Screen
                    name="ModalTransicoesScreen"
                    component={ModalTransicoesScreen}
                    options={{title: 'Transições de Modal', headerStyle: {backgroundColor: '#a50000'}, headerTintColor: '#fff'}} />
                <Stack.Screen
                    name="LoadingScreen"
                    component={LoadingScreen}
                    options={{title: 'Loading', headerStyle: {backgroundColor: '#a50000'}, headerTintColor: '#fff'}} />
                <Stack.Screen
                    name="JogoDaVelhaScreen"
                    component={JogoDaVelhaScreen}
                    options={{title: 'Loading', headerStyle: {backgroundColor: '#a50000'}, headerTintColor: '#fff'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;

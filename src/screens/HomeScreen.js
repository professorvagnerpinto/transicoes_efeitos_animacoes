/**
 * Vídeo #1 ao #11: React Hooks - Módulo 17 - B7Web
 * Animaçeõs.
 * by: Vagner Pinto
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

/*
    Screen Home.
 */
const HomeScreen = ({navigation})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('BasicoScreen')}>
                <Text style={styles.textButton}>Básico de Animações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('ModalTransicoesScreen')}>
                <Text style={styles.textButton}>Transições de Modal</Text>
            </TouchableOpacity>
        </View>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        width:220,
        height:50,
        alignItems:'center',
        backgroundColor: '#006400',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        margin: 20,
    },
    textButton:{
        fontSize:14,
        color:'#ffffff',
        fontWeight:'bold'
    }
});

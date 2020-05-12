/**
 * Vídeo #1 ao #11: React Hooks - Módulo 17 - B7Web
 * Conceito de Interpolação utilizado em uma barra de loading.
 * by: Vagner Pinto
 */

import React, {useState} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

const LoadingScreen = ()=>{

    const [largura, setLargura]  = useState(new Animated.Value(0));

    Animated.timing(
        largura,
        {toValue:100, duration:1000}
    ).start();

    let larguraInterpolada = largura.interpolate({
        inputRange:[0,100], //range de valores
        outputRange:['0%', '100%'] //alvo da interpolação (máscara para o range)
    });

    return(
        <View style={styles.container}>
            <Animated.View style={{backgroundColor:'#006400', height:10, width:larguraInterpolada}} />
        </View>
    );
}
export default LoadingScreen;

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});

/**
 * Vídeo #1 ao #11: React Hooks - Módulo 17 - B7Web
 * Aplicação dos conceitos em um Jogo da Velha.
 * by: Vagner Pinto
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, Animated} from 'react-native';

const Bola = ()=>{
    const [raio, setRaio] = useState(new Animated.Value(0));

    useEffect(()=>{
        Animated.timing(raio, {toValue:60, duration:500, useNativeDriver: false}).start();
    }, []); //componentDidMount

    return(
        <Animated.View style={styles.area}>
            <Animated.View style={[styles.bola, {height: raio}]}></Animated.View>
        </Animated.View>
    );
}
export default Bola;

const styles = StyleSheet.create({
    bola:{
        width:60,
        backgroundColor:'#006400',
        borderRadius:30
    }
});

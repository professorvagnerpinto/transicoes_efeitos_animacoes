/**
 * Vídeo #1 ao #11: React Hooks - Módulo 17 - B7Web
 * Aplicação dos conceitos em um Jogo da Velha.
 * by: Vagner Pinto
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, Animated} from 'react-native';

const Xis = ()=>{

    const [seta1, setSeta1] = useState(new Animated.Value(0));
    const [seta2, setSeta2] = useState(new Animated.Value(0));

    useEffect(()=>{
        Animated.timing(seta1, {toValue:45, duration:500, useNativeDriver: false}).start();
        Animated.timing(seta2, {toValue:-45, duration:500, useNativeDriver: false}).start();
    }, []); //componentDidMount

    let seta1Interpolada = seta1.interpolate({
        inputRange:[0,360], //range de valores
        outputRange:['0deg', '360deg'] //alvo da interpolação (máscara para o range)
    });

    let seta2Interpolada = seta2.interpolate({
        inputRange:[0,360], //range de valores
        outputRange:['0deg', '360deg'] //alvo da interpolação (máscara para o range)
    });

    return(
        <Animated.View style={styles.area}>
            <Animated.View style={[styles.seta, {transform:[{perspective:1000}, {rotate:seta1Interpolada}]}]}></Animated.View>
            <Animated.View style={[styles.seta, {transform:[{perspective:1000}, {rotate:seta2Interpolada}]}]}></Animated.View>
        </Animated.View>
    );
}
export default Xis;

const styles = StyleSheet.create({
    area:{
        width:60,
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    seta:{
        width:10,
        height:60,
        backgroundColor:'#a50000',
        position:'absolute'
    }
});

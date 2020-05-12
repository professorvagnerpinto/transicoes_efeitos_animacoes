/**
 * Vídeo #1 ao #11: React Hooks - Módulo 17 - B7Web
 * Básico de Animaçeõs.
 * by: Vagner Pinto
 */

import React, {useState, useEffect} from 'react';
import {View, Text, Animated, TouchableOpacity, StyleSheet} from 'react-native';

const BasicoScreen = () => {

    console.disableYellowBox = true; //desabilita o warning (YellowBox)

    const [largura, setLargura] = useState(new Animated.Value(250));
    const [altura, setAltura] = useState(new Animated.Value(50));
    const [opacidade, setOpacidade] = useState(new Animated.Value(0.0));

    //animação simples na montagem do componente
    useEffect(() => {
        Animated.timing(
            opacidade,
            {
                toValue: 1,
                duration: 2000
            }
        ).start();
    }, []); //componentDidMount

    //animação em sequência
    const handlerSequence = ()=>{
        Animated.sequence([
            Animated.timing(
                altura,
                {
                    toValue: 100,
                    duration: 1000
                }
            ),
            Animated.timing(
                largura,
                {
                    toValue: 300,
                    duration: 1000
                }
            )
        ]).start();
    }

    //animação em paralelo
    const handlerParallel = ()=>{
        Animated.parallel([
            Animated.timing(
                altura,
                {
                    toValue: 100,
                    duration: 2000
                }
            ),
            Animated.timing(
                largura,
                {
                    toValue: 300,
                    duration: 2000
                }
            )
        ]).start();
    }

    const handlerLoop = ()=>{
        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    altura,
                    {
                        toValue: 100,
                        duration: 1000
                    }
                ),
                Animated.timing(
                    largura,
                    {
                        toValue: 300,
                        duration: 1000
                    }
                ),
                Animated.timing(
                    altura,
                    {
                        toValue: 50,
                        duration: 1000
                    }
                ),
                Animated.timing(
                    largura,
                    {
                        toValue: 250,
                        duration: 1000
                    }
                )
            ])
        ).start();
    }

    const handlerReset = ()=>{
        Animated.sequence([
            Animated.timing(
                altura,
                {
                    toValue: 50,
                    duration: 1000
                },
            ),
            Animated.timing(
                largura,
                {
                    toValue: 250,
                    duration: 1000
                },
            )
        ]).start();
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <Animated.View style={{
                    opacity:opacidade,
                    width: largura,
                    height: altura,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                }}>
                    <Text style={{color: '#ffffff', fontSize: 25, textAlign: 'center'}}>Texto qualquer</Text>
                </Animated.View>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.button} onPress={handlerSequence}>
                    <Text style={styles.textButton}>Sequence</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handlerParallel}>
                    <Text style={styles.textButton}>Parallel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handlerLoop}>
                    <Text style={styles.textButton}>Loop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handlerReset}>
                    <Text style={styles.textButton}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default BasicoScreen;

const styles = StyleSheet.create({
    button: {
        width:220,
        height:50,
        alignItems:'center',
        backgroundColor: '#006400',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        margin: 5
    },
    textButton:{
        fontSize:14,
        color:'#ffffff',
        fontWeight:'bold'
    }
});

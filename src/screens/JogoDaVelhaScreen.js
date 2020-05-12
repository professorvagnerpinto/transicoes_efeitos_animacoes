/**
 * Vídeo #1 ao #11: React Hooks - Módulo 17 - B7Web
 * Aplicação dos conceitos em um Jogo da Velha.
 * by: Vagner Pinto
 */

import React from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';

const JogoDaVelhaScreen = ()=>{

    return(
        <View style={styles.container}>
            <View style={styles.tabuleiro}>
                <View style={[styles.coluna, {borderLeftWidth:0}]}>
                    <View style={[styles.linha, {borderTopWidth:0}]}>

                    </View>
                    <View style={styles.linha}>

                    </View>
                    <View style={styles.linha}>

                    </View>
                </View>
                <View style={styles.coluna}>
                    <View style={[styles.linha, {borderTopWidth:0}]}>

                    </View>
                    <View style={styles.linha}>

                    </View>
                    <View style={styles.linha}>

                    </View>
                </View>
                <View style={styles.coluna}>
                    <View style={[styles.linha, {borderTopWidth:0}]}>

                    </View>
                    <View style={styles.linha}>

                    </View>
                    <View style={styles.linha}>

                    </View>
                </View>
            </View>
            <View style={styles.infoArea}>
                <View style={styles.infoVez}>
                    <Text>Vez de: </Text>
                    <View style={styles.imgVez}>

                    </View>
                </View>
                <View style={styles.infoAviso}>
                    <Text>X Ganhou!</Text>
                </View>
            </View>
        </View>
    );
}
export default JogoDaVelhaScreen;

//#a50000 -> vermelho
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    tabuleiro:{
        width:300,
        height:300,
        flexDirection:'row',
        marginTop:10,
        marginBottom:10
    },
    coluna:{
        flex:1,
        borderLeftWidth:3,
        borderColor:'#000000'
    },
    linha:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderTopWidth:3,
        borderColor:'#000000'
    },
    infoArea:{
        width:'100%',
        height:120,
        flexDirection:'row',
        marginTop:20
    },
    infoVez:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginBottom:10
    },
    infoAviso:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        marginBottom:10
    },
    imgVez:{
        width:80,
        height:80,
        borderRadius:40,
        margin:2,
        backgroundColor:'#006400'
    }
});

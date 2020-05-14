/**
 * Vídeo #1 ao #11: React Hooks - Módulo 17 - B7Web
 * Aplicação dos conceitos em um Jogo da Velha.
 * by: Vagner Pinto
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Animated} from 'react-native';
import Xis from '../components/Xis';
import Bola from '../components/Bola';


const JogoDaVelhaScreen = ()=>{

    const[a1, setA1] = useState('');
    const[a2, setA2] = useState('');
    const[a3, setA3] = useState('');
    const[b1, setB1] = useState('');
    const[b2, setB2] = useState('');
    const[b3, setB3] = useState('');
    const[c1, setC1] = useState('');
    const[c2, setC2] = useState('');
    const[c3, setC3] = useState('');
    const[vezDe, setVezDe] = useState('x');
    const[jogada, setJogada] = useState(0);
    const[aviso, setAviso] = useState('');
    const[alturaAviso, setAlturaAviso] = useState(new Animated.Value(0));

    useEffect(()=>{
        verificarGanhador();
    });

    const handlerCell = (cell)=>{
        if(aviso === ''){
            switch (cell) {
                case 'a1':
                    if(a1 === ''){
                        setA1(vezDe);
                    }
                    break;
                case 'a2':
                    if(a2 === ''){
                        setA2(vezDe);
                    }
                    break;
                case 'a3':
                    if(a3 === ''){
                        setA3(vezDe);
                    }
                    break;
                case 'b1':
                    if(b1 === ''){
                        setB1(vezDe);
                    }
                    break;
                case 'b2':
                    if(b2 === ''){
                        setB2(vezDe);
                    }
                    break;
                case 'b3':
                    if(b3 === ''){
                        setB3(vezDe);
                    }
                    break;
                case 'c1':
                    if(c1 === ''){
                        setC1(vezDe);
                    }
                    break;
                case 'c2':
                    if(c2 === ''){
                        setC2(vezDe);
                    }
                    break;
                case 'c3':
                    if(c3 === ''){
                        setC3(vezDe);
                    }
                    break;
            }
            if(jogada < 8){
                let count = jogada;
                if(vezDe === 'x'){
                    setVezDe('o');
                }else{
                    setVezDe('x');
                }
                setJogada(++count);
            }
        }
    }

    const verificarGanhador = ()=>{
        //verifica colunas
        //para X
        if(a1 === 'x' && a2 === 'x' && a3 === 'x'){
            setAviso( 'Yes! X Ganhou!');
            animaGanhador();
        }
        if(b1 === 'x' && b2 === 'x' && b3 === 'x'){
            setAviso( 'Yes! X Ganhou!');
            animaGanhador();
        }
        if(c1 === 'x' && c2 === 'x' && c3 === 'x'){
            setAviso( 'Yes! X Ganhou!');
            animaGanhador();
        }
        //para O
        if(a1 === 'o' && a2 === 'o' && a3 === 'o'){
            setAviso( 'Yes! O Ganhou!');
            animaGanhador();
        }
        if(b1 === 'o' && b2 === 'o' && b3 === 'o'){
            setAviso( 'Yes! O Ganhou!');
            animaGanhador();
        }
        if(c1 === 'o' && c2 === 'o' && c3 === 'o'){
            setAviso( 'Yes! O Ganhou!');
            animaGanhador();
        }

        //verifica linhas
        //para X
        if(a1 === 'x' && b1 === 'x' && c1 === 'x'){
            setAviso( 'Yes! X Ganhou!');
            animaGanhador();
        }
        if(a2 === 'x' && b2 === 'x' && c2 === 'x'){
            setAviso( 'Yes! X Ganhou!');
            animaGanhador();
        }
        if(a3 === 'x' && b3 === 'x' && c3 === 'x'){
            setAviso( 'Yes! X Ganhou!');
            animaGanhador();
        }
        // //para O
        if(a1 === 'o' && b1 === 'o' && c1 === 'o'){
            setAviso( 'Yes! O Ganhou!');
            animaGanhador();
        }
        if(a2 === 'o' && b2 === 'o' && c2 === 'o'){
            setAviso( 'Yes! O Ganhou!');
            animaGanhador();
        }
        if(a3 === 'o' && b3 === 'o' && c3 === 'o'){
            setAviso( 'Yes! O Ganhou!');
            animaGanhador();
        }

        //verifica diagonais
        //para X
        if(a1 === 'x' && b2 === 'x' && c3 === 'x'){
            setAviso( 'Yes! X Ganhou!');
            animaGanhador();
        }
        if(a3 === 'x' && b2 === 'x' && c1 === 'x'){
            setAviso( 'Yes! X Ganhou!');
            animaGanhador();
        }
        // //para O
        if(a1 === 'o' && b2 === 'o' && c3 === 'o'){
            setAviso( 'Yes! O Ganhou!');
            animaGanhador();
        }
        if(a3 === 'o' && b2 === 'o' && c1 === 'o'){
            setAviso( 'Yes! O Ganhou!');
            animaGanhador();
        }

        if(jogada === 8 && aviso === ''){
            setAviso( 'Fim de Jogo!');
        }
    }

    function animaGanhador() {
        Animated.timing(alturaAviso, {toValue: 60, duration: 500, useNativeDriver: false}).start();
    }

    const reset = ()=>{
        setAviso('');
        setVezDe('x');
        setJogada(0);
        setAlturaAviso(new Animated.Value(0));
        setA1('');
        setA2('');
        setA3('');
        setB1('');
        setB2('');
        setB3('');
        setC1('');
        setC2('');
        setC3('');
    }

    return(
        <View style={styles.container}>
            <View style={styles.tabuleiro}>
                <View style={[styles.coluna, {borderLeftWidth:0}]}>
                    <TouchableHighlight style={[styles.linha, {borderTopWidth:0}]} underlayColor='#eeeeee' onPress={()=>handlerCell('a1')}>
                        <View>
                            {a1 === 'x' && <Xis/>}
                            {a1 === 'o' && <Bola/>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.linha} underlayColor='#eeeeee' onPress={()=>handlerCell('a2')}>
                        <View>
                            {a2 === 'x' && <Xis/>}
                            {a2 === 'o' && <Bola/>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.linha} underlayColor='#eeeeee' onPress={()=>handlerCell('a3')}>
                        <View>
                            {a3 === 'x' && <Xis/>}
                            {a3 === 'o' && <Bola/>}
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.coluna}>
                    <TouchableHighlight style={[styles.linha, {borderTopWidth:0}]} underlayColor='#eeeeee' onPress={()=>handlerCell('b1')}>
                        <View>
                            {b1 === 'x' && <Xis/>}
                            {b1 === 'o' && <Bola/>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.linha} underlayColor='#eeeeee' onPress={()=>handlerCell('b2')}>
                        <View>
                            {b2 === 'x' && <Xis/>}
                            {b2 === 'o' && <Bola/>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.linha} underlayColor='#eeeeee' onPress={()=>handlerCell('b3')}>
                        <View>
                            {b3 === 'x' && <Xis/>}
                            {b3 === 'o' && <Bola/>}
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.coluna}>
                    <TouchableHighlight style={[styles.linha, {borderTopWidth:0}]} underlayColor='#eeeeee' onPress={()=>handlerCell('c1')}>
                        <View>
                            {c1 === 'x' && <Xis/>}
                            {c1 === 'o' && <Bola/>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.linha} underlayColor='#eeeeee' onPress={()=>handlerCell('c2')}>
                        <View>
                            {c2 === 'x' && <Xis/>}
                            {c2 === 'o' && <Bola/>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.linha} underlayColor='#eeeeee' onPress={()=>handlerCell('c3')}>
                        <View>
                            {c3 === 'x' && <Xis/>}
                            {c3 === 'o' && <Bola/>}
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.infoArea}>
                <View style={styles.infoVez}>
                    <View style={{flex:1, alignItems:'center', justifyContent:'flex-end'}}>
                        <Text style={{fontSize:14, fontWeight:'bold'}}>Vez de</Text>
                    </View>
                    <View style={{flex:2, alignItems:'center', justifyContent:'center'}}>
                        {vezDe === 'x' && <Xis/>}
                        {vezDe === 'o' && <Bola/>}
                    </View>
                </View>
                <Animated.View style={[styles.infoAviso, {height:alturaAviso}]}>
                    <Text style={styles.textAviso}>{aviso}</Text>
                </Animated.View>
            </View>
            <View style={styles.resetButtonDiv}>
                <TouchableHighlight style={styles.btReset} onPress={reset}>
                    <Text style={{color:'#ffffff'}}>Novo Jogo</Text>
                </TouchableHighlight>
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
        marginTop:10
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
        flexDirection:'row'
    },
    infoVez:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imgVez:{
        width:80,
        height:80,
        justifyContent:'center',
        alignItems:'center'
    },
    infoAviso:{
        width:160,
        justifyContent:'center',
        alignItems:'center',
        margin:30,
        marginTop:50,
        marginRight:35
    },
    resetButtonDiv:{
        width:100,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#006400',
        marginBottom:10,
        borderRadius:5
    },
    btReset:{
        width:100,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    textAviso:{
        fontSize:22,
        fontWeight:'bold'
    }
});

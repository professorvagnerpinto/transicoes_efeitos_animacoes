import React, {useState, useEffect} from 'react';
import {View, Text, Animated, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {

    const [largura, setLargura] = useState(new Animated.Value(250));
    const [altura, setAltura] = useState(new Animated.Value(50));
    const [opacidade, setOpacidade] = useState(new Animated.Value(0.0));

    useEffect(() => {
        Animated.timing(
            opacidade,
            {
                toValue: 1,
                duration: 2000
            },
        ).start();
    }, []); //componentDidMount

    const handlerButton = ()=>{
        Animated.timing(
            altura,
            {
                toValue: 100,
                duration: 2000
            },
        ).start();
    }

    return (
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
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
            <TouchableOpacity style={styles.button} onPress={handlerButton}>
                <Text style={styles.textButton}>Animar na altura</Text>
            </TouchableOpacity>
        </View>
    );
};
export default App;

const styles = StyleSheet.create({
    button: {
        width:220,
        height:50,
        alignItems:'center',
        backgroundColor: '#006400',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        margin: 20
    },
    textButton:{
        fontSize:14,
        color:'#ffffff',
        fontWeight:'bold'
    }
});

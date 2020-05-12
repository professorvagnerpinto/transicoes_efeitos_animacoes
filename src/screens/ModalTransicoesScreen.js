/**
 * Vídeo #1 ao #11: React Hooks - Módulo 17 - B7Web
 * Transiçoẽs de Modal.
 * by: Vagner Pinto
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';

const ModalTransicoesScreen = ()=>{

    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handlerCadastrese = ()=>{
        setModalVisible(true);
    }

    const handlerSalvar = ()=>{
        alert('Nome: ' + name + '\nEmail: ' + email);
        setName('');
        setEmail('');
        setModalVisible(false);
    }

    return(
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent
                visible={modalVisible}>
                <View style={styles.modalWindow}>
                    <View style={styles.modalBox}>
                        <TextInput style={styles.textInput} value={name} onChangeText={(text)=>setName(text)} placeholder="Nome Completo" />
                        <TextInput style={styles.textInput} value={email} onChangeText={(text)=>setEmail(text)} placeholder="Email" />
                        <TouchableOpacity style={styles.buttonModal} onPress={handlerSalvar}>
                            <Text style={styles.textButton}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={styles.button} onPress={handlerCadastrese}>
                <Text style={styles.textButton}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
}
export default ModalTransicoesScreen;

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
    },
    modalWindow:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalBox:{
        width:300,
        height:300,
        alignItems:'center',
        margin:20,
        backgroundColor:'#ffffff',
        borderRadius:10
    },
    buttonModal: {
        width:100,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#006400',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        margin: 20,
    },
    textInput:{
        width:'90%',
        borderBottomWidth:1,
        borderBottomColor:'red'
    }
});

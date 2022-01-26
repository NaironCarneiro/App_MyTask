import React, { useContext, useState } from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Styles } from '../components/Styles';
import InputForm from '../components/InputForm';
import TextButton from '../components/TextButton';

function Register ({navigation}){
    
    const [password, setPassword] = useState('')

        return (
            <View style={{backgroundColor:'#6C98F0',flex:1}}>
                <SafeAreaView style={Styles.safeview} >
                    <View style={{ flex:1}}>
                            <Text style={Styles.title}>Cadastro</Text>
                    </View>
                    
                    <View style={{ alignItems: 'center',flex:6}}>
                        <InputForm title='Nome Completo' holder='Nome completo'/>
                        <InputForm style={{ marginTop: 25 }} title='E-mail' holder='marcoslima@gmail.com'/>
                        <InputForm style={{ marginTop: 25 }} title='Senha' holder='Senha' password={true} onChangeText={text => setPassword(text)}/>
                
                            <TextButton style={{ marginTop: 40 }} title='FINALIZAR CADASTRO' />
                            
                    

                             </View>
                </SafeAreaView>

            </View>
        );

}

export default Register;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      margin:20,
      marginBottom:50
    },
  });
  
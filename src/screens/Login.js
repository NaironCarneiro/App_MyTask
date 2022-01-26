import React, { useContext, useState } from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Styles } from '../components/Styles';
import InputForm from '../components/InputForm';
import TextButton from '../components/TextButton';
import TextButtonGoogle from '../components/TextButtonGoogle';

function Login ({navigation}){
    

    const [password, setPassword] = useState('')

        return (
            <View style={{backgroundColor:'#6C98F0',flex:1}}>
                <SafeAreaView style={Styles.safeview} >
                    <View style={{ flex:1}}>
                            <Text style={Styles.title}>Login</Text>
                    </View>
                    
                    <View style={{ alignItems: 'center',flex:6}}>
                        <InputForm title='E-mail' holder='marcoslima@gmail.com'/>
                        <InputForm style={{ marginTop: 25 }} title='Senha' holder='Senha' password={true} onChangeText={text => setPassword(text)}/>
                
                            <TextButton style={{ marginTop: 40 }} title='ACESSAR' />
                            <TextButtonGoogle style={{ marginTop: 20}} title='GOOGLE' />
                            { <TouchableOpacity>
                            <Text style={{ color: '#0D15DB', textAlign: 'right', marginVertical: 40, fontSize:16}}>Esqueci minha senha</Text>
                             </TouchableOpacity> }

                             <Text style={{ color: '#000000', textAlign: 'right',marginTop:-25, fontSize:16}}>Ainda não possui cadastro?</Text>
                            
                             { <TouchableOpacity>
                            <Text style={{ color: '#0D15DB', textAlign: 'right', fontSize:16}}>Cadastre-se</Text>
                             </TouchableOpacity> }

                             </View>
                </SafeAreaView>

            </View>
        );

}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      margin:20,
      marginBottom:50
    },
  });
  
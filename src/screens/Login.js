import React, { useContext, useState, useEffect } from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Styles } from '../components/Styles';
import InputForm from '../components/InputForm';
import TextButton from '../components/TextButton';
import TextButtonGoogle from '../components/TextButtonGoogle';
import {auth} from "../services/firebase";
import firebase from "../services/firebase";
import { sendPasswordResetEmail, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { value } from 'react-native-extended-stylesheet';

function Login ({navigation}){
    
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);

//    async function singInGoogle(){
   
//         var provider = new firebase.auth.GoogleAuthProvider();
//         console.log("olaa")
//         firebase.auth().signInWithPopup(provider).then(function(result) {
//             // This gives you a Google Access Token.
//             var token = result.credential.accessToken;
//             // The signed-in user info.
//             var user = result.user;
//            });
//    }

    async function singInGoogle() {
        // firebase.auth.GoogleAuthProvider();
        // console.log("aqui")
        // console.log(provider)
        // const result = await firebase.auth().signInWithPopup(provider);
        // console.log("aqui de novo")
        // return result;
        alert('Em desenvolvimento')
          
        
    }
  
   

    async function singIn(){
    if ((!email) || (email == '')) {
        setMsg('Email inválido');
        return;
    }

    if ((!password) || (password.length < 6)) {
        setMsg('Senha inválida');
        return;
    }

    setMsg(null);
        
        await signInWithEmailAndPassword(auth, email, password)
          .then(value =>{
        navigation.navigate('ListTasks');
    }
    ).catch((error) => {
        if (error.code = 'auth/wrong-password') {
            setMsg('Usuário ou senha inválidos');
        } else {
            setMsg('Erro ao autenticar. Verifique sua conexão com a Internet.');
        }
    });
}

    function acessRegister(){
        navigation.navigate('Register')
    }

     async function forgotPassword(){
        if ((!email) || (email == '')) {
            setMsg('insira um email válido');
            return;
        }
    
        await sendPasswordResetEmail(auth, email).then(() => alert('E-mail de recuperação de senha enviado'));

    }

        return (
            <View style={{backgroundColor:'#6C98F0',flex:1}}>
                <SafeAreaView style={Styles.safeview} >
                    <View style={{ flex:1}}>
                            <Text style={Styles.title}>Login</Text>
                    </View>
                    
                    <View style={{ alignItems: 'center',flex:6}}>
                    <Text style={{ textAlign: 'center', color: '#F99928' }}>{msg}</Text>
                        <InputForm title='E-mail' holder='marcoslima@gmail.com' value={email}  onChangeText={value => setEmail(value)}/>
                        <InputForm style={{ marginTop: 25 }} title='Senha' holder='Senha' value={password} password={true} onChangeText={value => setPassword(value)}/>
                
                            <TextButton style={{ marginTop: 40 }} title='ACESSAR'  onPress={singIn}/>
                            <TextButtonGoogle style={{ marginTop: 20}} title='GOOGLE' onPress={singInGoogle}/>
                             <TouchableOpacity onPress={forgotPassword}>
                            <Text style={{ color: '#0D15DB', textAlign: 'right', marginVertical: 40, fontSize:16}}>Esqueci minha senha</Text>
                             </TouchableOpacity> 

                             <Text style={{ color: '#000000', textAlign: 'right',marginTop:-25, fontSize:16}}>Ainda não possui cadastro?</Text>
                            
                              <TouchableOpacity onPress={acessRegister}>
                            <Text style={{ color: '#0D15DB', textAlign: 'right', fontSize:16}}>Cadastre-se </Text> 
                             </TouchableOpacity> 

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
  
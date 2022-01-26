import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Styles } from './Styles';

function InputForm(props) {

    const [password, setPassword] = useState(props.password);

    return (
        <View style={props.style}>
            <Text style={Styles.titleInput}>{props.title}</Text>
            <View style={Styles.input}>
                <TextInput onChangeText={props.onChangeText} style={{ width: '90%', justifyContent:'space-around' }} autoCapitalize='none' placeholder={props.holder} secureTextEntry={password} />
                {props.password &&
                    <TouchableOpacity onPressIn={() => setPassword(false)} onPressOut={() => setPassword(true)}>
                        <Image source={require('../../assets/eye.png')} style={{ width: 30, height: 30, marginBottom:10 }} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
}

export default InputForm;
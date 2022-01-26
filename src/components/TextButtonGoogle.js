import React from 'react';
import { Text, View,Image, TouchableHighlight } from 'react-native';
import { Styles } from './Styles';

function TextButtonGoogle(props) {

    return (
        <View style={props.style}>
            
            <TouchableHighlight style={Styles.buttonGoogle} onPress={() => { if (props.onPress) props.onPress(); }}>
                <Text style={Styles.textButtonGoogle}><Image source={require('../../assets/google.png')} 
                style={{ width: 30, height: 30, marginBottom:10 }} /> {props.title}</Text>
                </TouchableHighlight>
                
                
        </View>
    )
}

export default TextButtonGoogle;
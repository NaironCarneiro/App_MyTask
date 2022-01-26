import React, { useContext, useState } from "react";
import IconBell from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/AntDesign";
import {Button} from "react-native-elements";
// import DatePicker from 'react-native-datepicker';
// import DatePicker from 'react-native-date-picker'

import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Styles } from "../components/Styles";
import InputForm from "../components/InputForm";
import TextButton from "../components/TextButton";

function AddTasks({ navigation }) {
  
  return (
    <View style={{ flex: 1, backgroundColor: "#6C98F0" }}>
      <SafeAreaView style={Styles.safeview}>
        <View style={Styles.viewHeader}>
          <Icon name="back" size={26} color="black" onPress={() => {}} />
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Nova Tarefa</Text>
          <Icon name="search1" size={26} color="black" onPress={() => {}} />
        </View>
        <View style={{justifyContent:'center', alignItems: "center" ,marginTop:150 }}>
        <Image
              source={require("../../assets/Rectangle.png")}
              style={Styles.imageExit}
            />
            <Text style={{marginTop:20,fontSize:25, fontWeight: "bold"}}>Tarefa adicionada !</Text>
        </View>
        <View  style={{marginTop:100, alignItems:'center'}}>
        <TextButton style={Styles.btnExit} title="SAIR" />
        </View>
      </SafeAreaView>
    </View>
  );
}
export default AddTasks;

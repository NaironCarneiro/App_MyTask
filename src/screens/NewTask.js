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

function NewTask({ navigation }) {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
  
  return (
    <View style={{ flex: 1, backgroundColor: "#6C98F0" }}>
      <SafeAreaView style={Styles.safeview}>
        <View style={Styles.viewHeader}>
          <Icon name="back" size={26} color="black" onPress={() => {}} />
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Nova Tarefa</Text>
          <Icon name="search1" size={26} color="black" onPress={() => {}} />
        </View>
        <View style={{ alignItems: "center", marginTop:50 }}>
          <InputForm title="Descrição da Tarefa" holder="Descrição"  />
          <InputForm
            style={{ marginTop: 25 }}
            title="Data"
            holder="dd/mm/yyyy"
          />


           {/* <Text>Data</Text>
           <DatePicker
           format='DD/MM/YYYY'
           style={Styles.datepicker}
              
           /> */}

          <InputForm
            style={{ marginTop: 25 }}
            title="Hora"
            holder="00:00"
          />
           <View style={Styles.viewNewTasks}>
          <Button buttonStyle={{marginRight:195, marginTop:35,marginEnd:70,borderRadius:8, fontSize:13, width:148}}
            title ="Adicionar imagem"
            // onPress={() => Alert.alert('Simple Button pressed')}
            />
            <View style={{marginTop:35,flexDirection:'row', alignItems:'center'}}>
          <TouchableOpacity activeOpacity={0.8}>
          <IconBell
              name="bell-ring"
              size={20}
              color="black" />
             </TouchableOpacity>
             <Text style={{marginEnd:5, fontSize:15}}> Definir lembrete</Text>
             </View>
            </View>
            <TextButton style={{ marginTop: 180, backgroundColor:'#20B2AA', borderRadius:10 }} title="ADICIONAR TAREFA" />
        </View>
      </SafeAreaView>
    </View>
  );
}
export default NewTask;

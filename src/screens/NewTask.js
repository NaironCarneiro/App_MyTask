import React, { useContext, useState } from "react";
import IconBell from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/AntDesign";
import {Button} from "react-native-elements";
import {db} from "../services/firebase";
// import {st} from "../services/firebase";
import {st} from '@react-native-firebase/storage';
// import {ImagePicker} from "react-native-image-picker";
import * as ImagePicker from "react-native-image-picker"
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import {showImagePicker} from "react-native-image-picker";
import { collection, addDoc } from "firebase/firestore";

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

function NewTask({navigation}) {

    const [description, setDescription] = useState(null)
    const [hour, setHour] = useState(null)
    const [data, setData] = useState(null)
  

    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);

  
    const resetNewTask = () => {
      navigation.reset({
          index:0,
          routes: [{name: "FinishTask"}]
      })
    }

    async function insertTasks(){

      try {
        const docRef = await addDoc(collection(db, "tasks"), {
          description: description,
          data: data,
          hour: hour,
          status: false,
        });
        // alert("Tarefa adicionada com sucesso !")
        resetNewTask()

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
     
    }

  return (
    <View style={{ flex: 1, backgroundColor: "#6C98F0" }}>
      <SafeAreaView style={Styles.safeview}>
        <View style={Styles.viewHeader}>
          <Icon name="back" size={26} color="black" onPress={()=> (navigation.goBack())} />
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Nova Tarefa</Text>
          <Icon  size={26} color="black" />
        </View>
        <View style={{ alignItems: "center", marginTop:50 }}>
          <InputForm title="Descrição da Tarefa" holder="Descrição" value={description} onChangeText={setDescription} />
          <InputForm
            style={{ marginTop: 25 }}
            title="Data"
            holder="dd/mm/yyyy"
            value={data} onChangeText={setData}
          />
          
          <InputForm
            style={{ marginTop: 25 }}
            title="Hora"
            holder="00:00"
            value={hour} onChangeText={setHour}
          />
           <View style={Styles.viewNewTasks}>
          <Button buttonStyle={{marginRight:195, marginTop:35,marginEnd:70,borderRadius:8, fontSize:13, width:148}}
            title ="Adicionar imagem"
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
            <TextButton style={{ marginTop: 180, backgroundColor:'#20B2AA', borderRadius:10 }} title="ADICIONAR TAREFA" onPress={()=>{insertTasks()}}/>
        </View>
      </SafeAreaView>
    </View>
  );
}
export default NewTask;

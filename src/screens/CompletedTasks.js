import React, { useContext, useState, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import IconTrash from 'react-native-vector-icons/FontAwesome5';
import {Task} from "../components/Task";
// import ModelListTaskComple from '../components/ModelListTaskComple';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../services/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { AppContext } from '../components/AppContext';
import CircleCheckBox, { LABEL_POSITION } from "react-native-circle-checkbox";
import {
  Image,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Styles } from "../components/Styles";

function CompletedTasks({ navigation }) {

  const { completed, setCompleted } = useContext(AppContext);


//   useEffect(() => {
//     let tasksList = [];
//     async function loadTasks() {
//       const querySnapshot = await getDocs(collection(db, "tasks"));
//       querySnapshot.forEach(task => {
//         tasksList.push(new Task(task.data()));
        
//         // console.log(`${task.id} dados  0000000 => ${task.data()}`)        
//       });
//       var valueID = data.task.id
//         setTasks(tasksList);
//     }
//     loadTasks();
// // }, []);


    

function modelListTaskComple(completed, valueID){

      return (
      <View style={Styles.viewListFinal}>
        <Image
          source={require("../../assets/Ellipse.jpeg")}
          style={Styles.imageList}
        />
        <View>
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>
            {completed.description}
          </Text>
          <Text style={{ fontSize: 13, marginBottom: 25, marginTop: 5 }}>
            {completed.data}, {completed.hour}
            </Text>
        </View>
        
        </View>
    );
}

    
  return (
    <View style={{ flex:1, backgroundColor: "#6C98F0" }}>
      <SafeAreaView style={Styles.safeview}>
        <View style={Styles.viewHeader}>
          <Icon
              name="back"
              size={26}
              color="black"
              onPress={() => { navigation.goBack()}}
            />
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Tarefas Concluídas</Text>
          <Icon
              name=""
              size={26}
              color="black"
              
            />
        </View>

        <View style={{ flex:2}}>
          
        {(completed.length !=0) ?
              <FlatList
                data={completed}
                 renderItem={({ item, index}) => modelListTaskComple(item, index) }
            />
            :
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <Text style={{marginTop:300, textAlign: 'center' , fontSize:20}}>NENHUMA TAREFA COM O STATUS DE CONCLUÍDA</Text>
        </View>
        }
       </View>
      </SafeAreaView>
    </View>
  );
}
export default CompletedTasks;

import React, { useContext, useState, useEffect } from "react";
import { AppContext } from './AppContext';
import {db} from "../services/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import IconTrash from 'react-native-vector-icons/FontAwesome5';
import {
  Image,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Styles } from "./Styles";


function ModelListTask(props, navigation) {
  const [checked, setChecked] = React.useState(false);
  const [msg, setMsg] = useState('');

  const { completed, setCompleted } = useContext(AppContext);
  const [tasks, setTasks] = useState(null);

  const {id} = useContext(AppContext);


  const delTask = () => {
    navigation.reset({
        index:0,
        routes: [{name: "ListTasks"}]
    })
  }
  

  function confirmDelete(id){
    Alert.alert(
      "Atenção",
      "Deseja mesmo deletar essa tarefa ?",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => deleteTask(id) }
      ]
    );
  }  

  async function deleteTask(id) {
    
    await deleteDoc(doc(db, "tasks", id))
    
    delTask()
    

  }


return (

       <View style={Styles.viewList}>
                          <Image
                            source={require("../../assets/semfoto.jpg")}
                            style={Styles.imageList}
                          />
                          <View style={{height: 60,width:170, alignItems:'flex-start'}}>
                            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                              {props.task.description}
                              
                            </Text>
                            <Text style={{ fontSize: 13, marginBottom: 25, marginTop: 5 }}>
                              {props.task.data}, {props.task.hour}
                              
                              </Text>
                          </View>

                        
                          <View style={Styles.completed}>
                          <TouchableOpacity onPress={() => {confirmDelete(props.task.id)}}>
                            <IconTrash
                              name="trash"
                              size={26}
                              color="black"                              
                          />
                        </TouchableOpacity>
                      </View> 


                  </View> 
    
          
        );
   }

   export default ModelListTask;
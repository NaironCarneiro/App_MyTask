import React, { useContext, useState, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/SimpleLineIcons";
import ModelListTask from "../components/ModelListTask";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import {db} from "../services/firebase";
import {auth} from "../services/firebase";
import {AppContext} from '../components/AppContext';

import {
  Alert,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Styles } from "../components/Styles";


 function ListTasks({ navigation }) {

  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState(null);
  const [user] = useState([]);
  const {idTask} = useContext(AppContext);  

const FuncResete = () => {

  navigation.reset({
    index:0,
    routes: [{name: "Login"}]
  })

}
  

function logOutUser(){  
        auth.signOut().then(value =>{
          Alert.alert(
            "Atenção",
            "Deseja realmente sair da conta ?",
            [
              {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Sim", onPress: () => FuncResete() }
            ]
          );
  }
  ).catch((error) => {
  alert("error")
  });
}

    const [msg, setMsg] = useState('');

    useEffect(() => {
        let tasksList = [];
        async function loadTasks() {
          const querySnapshot = await getDocs(collection(db, "tasks"));
          querySnapshot.forEach(task => {
            const user = {
              id : task.id,
              description : task.data().description,
              data : task.data().data,
              hour : task.data().hour
            };
            tasksList.push(user);
          });

          
            setTasks(tasksList);

        }
        loadTasks();
    }, []);



    function displayMsg(txt) {
        setMsg(txt);
    }


function acessNewTask(){
  navigation.navigate('NewTask')
  
}

if (loading){
  return<ActivityIndicator/>
}

  return (
    <View style={{ flex:1, backgroundColor: "#6C98F0" }}>
      <SafeAreaView style={Styles.safeview}>
        <View style={Styles.viewHeader}>
          <Icons  
              name="logout"
              size={24}
              color="black"
              onPress={logOutUser}
            />
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Minhas Tarefas </Text>
          <Icon
              name="search1"
              size={26}
              color="black"
              onPress={() => {}}
            />
        </View>

        <View style={{ flex:2}}>
        
              <FlatList
                data={tasks}
                
                 renderItem={({ item }) =>                  
                    <TouchableOpacity  activeOpacity={0.8} onPress={() => navigation.navigate("TaskUpdate", 
                     {id:item.id, description : item.description, data: item.data, hour : item.hour})}>
                      
                    <ModelListTask  task={item} onAdd={displayMsg}/>
                    
                    </TouchableOpacity>
                    
                    
                }
                
                
            />
            
                {/* <View style={{ marginTop: 300, justifyContent: 'space-between', 
                alignItems: 'center'  }}>
                    <Text style={{alignContent:'center', fontWeight:'bold'}}>VOCÊ NÃO POSSUI NENHUMA TAREFA</Text>
                </View> */}
                
                
          
                
       </View>
       
           <TouchableOpacity activeOpacity={1.0} style={Styles.btnFloating} onPress={acessNewTask}>
             <Text style={{fontSize:60, color:"white"}}>+</Text>
          </TouchableOpacity> 

      
      </SafeAreaView>
    </View>
  );
}
export default ListTasks;

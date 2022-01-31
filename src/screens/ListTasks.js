import React, { useContext, useState, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/SimpleLineIcons";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { auth } from "../services/firebase";
import IconTrash from "react-native-vector-icons/FontAwesome5";
import { AppContext } from "../components/AppContext";

import {
  Alert,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Styles } from "../components/Styles";

function ListTasks({ navigation }) {
  const [tasks, setTasks] = useState(null);
  const { idTask } = useContext(AppContext);

  const FuncResete = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  function logOutUser() {
    auth
      .signOut()
      .then((value) => {
        Alert.alert("Atenção", "Deseja realmente sair da conta ?", [
          {
            text: "Não",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Sim", onPress: () => FuncResete() },
        ]);
      })
      .catch((error) => {
        alert("error");
      });
  }

  useEffect(() => {
    let tasksList = [];
    async function loadTasks() {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      querySnapshot.forEach((task) => {
        const user = {
          id: task.id,
          description: task.data().description,
          data: task.data().data,
          hour: task.data().hour,
        };
        tasksList.push(user);
      });

      setTasks(tasksList);
    }
    loadTasks();
  }, []);

  function acessNewTask() {
    navigation.navigate("NewTask");
  }

  const delTask = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "ConfirmDelete" }],
    });
  };

  function confDelete(id) {
    Alert.alert("Atenção", "Deseja mesmo deletar essa tarefa ?", [
      {
        text: "Não",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Sim", onPress: () => deleteTask(id) },
    ]);
  }

  async function deleteTask(id) {
    await deleteDoc(doc(db, "tasks", id));

    delTask();
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#6C98F0" }}>
      <SafeAreaView style={Styles.safeview}>
        <View style={Styles.viewHeader}>
          <Icons name="logout" size={24} color="black" onPress={logOutUser} />
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Minhas Tarefas{" "}
          </Text>
          <Icon name="search1" size={26} color="black" onPress={() => {}} />
        </View>

        <View style={{ flex: 2 }}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("TaskUpdate", {
                    id: item.id,
                    description: item.description,
                    data: item.data,
                    hour: item.hour,
                  })
                }
              >
                <View style={Styles.viewList}>
                  <Image
                    source={require("../../assets/semfoto.jpg")}
                    style={Styles.imageList}
                  />
                  <View
                    style={{ height: 60, width: 170, alignItems: "flex-start" }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      {item.description}
                    </Text>
                    <Text
                      style={{ fontSize: 13, marginBottom: 25, marginTop: 5 }}
                    >
                      Dia {item.data}, às {item.hour}
                    </Text>
                  </View>

                  <View style={Styles.completed}>
                    <TouchableOpacity
                      onPress={() => {
                        confDelete(item.id);
                      }}
                    >
                      <IconTrash name="trash" size={26} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <TouchableOpacity
          activeOpacity={1.0}
          style={Styles.btnFloating}
          onPress={acessNewTask}
        >
          <Text style={{ fontSize: 60, color: "white" }}>+</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
export default ListTasks;

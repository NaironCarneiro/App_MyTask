import React, { useState } from "react";
import IconBell from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/AntDesign";
import { Button } from "react-native-elements";
import { db } from "../services/firebase";
import { doc, updateDoc } from "firebase/firestore";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Styles } from "../components/Styles";
import TextButton from "../components/TextButton";

function TaskUpdate({ navigation, navigation: { goBack }, route }) {
  const [descriptionEdit, setDescriptionEdit] = useState(
    route.params.description
  );
  const [hourEdit, setHourEdit] = useState(route.params.data);
  const [dataEdit, setDataEdit] = useState(route.params.hour);
  const [msg, setMsg] = useState(null);

  const idTask = route.params.id;

  const resetUpdate = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "ListTasks" }],
    });
  };

  async function EditTask(description, data, hour, idTask) {
    if ((description, data, hour, descriptionEdit, dataEdit, hourEdit) != "") {
      try {
        const ref = doc(db, "tasks", idTask);
        await updateDoc(ref, {
          description: descriptionEdit,
          data: dataEdit,
          hour: hourEdit,
        });
        alert("Tarefa atualizado !");
        resetUpdate();

        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error update document: ", e);
      }
    } else {
      setMsg("Por favor, os campos devem conter alguma descrição");
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#6C98F0" }}>
      <SafeAreaView style={Styles.safeview}>
        <View style={Styles.viewHeader}>
          <Icon name="back" size={26} color="black" onPress={() => goBack()} />
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Editar Tarefa
          </Text>
          <Icon size={26} color="black" />
        </View>
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <Text style={{ textAlign: "center", color: "#F99928" }}>{msg}</Text>
          <Text style={[Styles.titleInput, { marginRight: 295 }]}>
            Descrição
          </Text>

          <TextInput
            style={[Styles.input, { height: 135, paddingBottom: 100 }]}
            placeholder="Descrição"
            multiline={true}
            numberOfLines={4}
            value={descriptionEdit}
            onChangeText={setDescriptionEdit}
          />

          <Text style={[Styles.titleInput, { marginRight: 326 }]}>Data</Text>
          <TextInput
            style={[Styles.input, {}]}
            placeholder="use o formato dd-mm-yyyy"
            keyboardType="numeric"
            value={dataEdit}
            onChangeText={setDataEdit}
          />

          <Text style={[Styles.titleInput, { marginRight: 326 }]}>Hora</Text>
          <TextInput
            style={Styles.input}
            keyboardType="visible-password"
            placeholder="use o formato 00:00"
            value={hourEdit}
            onChangeText={setHourEdit}
          />
          <View style={Styles.viewNewTasks}>
            <Button
              buttonStyle={{
                marginRight: 195,
                marginTop: 35,
                marginEnd: 70,
                borderRadius: 8,
                fontSize: 13,
                width: 148,
              }}
              title="Adicionar imagem"
              // onPress={() => Alert.alert('Simple Button pressed')}
            />
            <View
              style={{
                marginTop: 35,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity activeOpacity={0.8}>
                <IconBell name="bell-ring" size={20} color="black" />
              </TouchableOpacity>
              <Text style={{ marginEnd: 5, fontSize: 15 }}>
                {" "}
                Definir lembrete
              </Text>
            </View>
          </View>
          <TextButton
            style={{
              marginTop: 180,
              backgroundColor: "#20B2AA",
              borderRadius: 10,
            }}
            title="FINALIZAR"
            onPress={() =>
              EditTask(descriptionEdit, dataEdit, hourEdit, idTask)
            }
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
export default TaskUpdate;

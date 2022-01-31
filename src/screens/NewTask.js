import React, { useContext, useState } from "react";
import IconBell from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/AntDesign";
import { Button } from "react-native-elements";
import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Styles } from "../components/Styles";
import TextButton from "../components/TextButton";

function NewTask({ navigation }) {
  const [description, setDescription] = useState("");
  const [hour, setHour] = useState("");
  const [data, setData] = useState("");
  const [msg, setMsg] = useState(null);

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const resetNewTask = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "FinishTask" }],
    });
  };

  async function insertTasks() {
    if ((description, data, hour) != "") {
      try {
        const docRef = await addDoc(collection(db, "tasks"), {
          description: description,
          data: data,
          hour: hour,
          status: false,
        });
        resetNewTask();

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      setMsg("Por favor, preencha todos os campos");
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#6C98F0" }}>
      <SafeAreaView style={Styles.safeview}>
        <View style={Styles.viewHeader}>
          <Icon
            name="back"
            size={26}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Nova Tarefa</Text>
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
            value={description}
            onChangeText={setDescription}
          />

          <Text style={[Styles.titleInput, { marginRight: 326 }]}>Data</Text>
          <TextInput
            style={[Styles.input, {}]}
            placeholder="use o formato dd-mm-yyyy"
            keyboardType="numeric"
            value={data}
            onChangeText={setData}
          />

          <Text style={[Styles.titleInput, { marginRight: 326 }]}>Hora</Text>
          <TextInput
            style={Styles.input}
            keyboardType="visible-password"
            placeholder="use o formato 00:00"
            value={hour}
            onChangeText={setHour}
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
            title="ADICIONAR TAREFA"
            onPress={() => {
              insertTasks();
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
export default NewTask;

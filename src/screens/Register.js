import React, { useContext, useState } from "react";
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
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  async function createUser() {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Usuário cadastrado !");
        navigation.navigate("Login");
      })
      .catch((error) => alert("Por favor insira um email e senha válidos"));
  }

  return (
    <View style={{ backgroundColor: "#6C98F0", flex: 1 }}>
      <SafeAreaView style={Styles.safeview}>
        <View style={{ height:100}}>
          <Text style={Styles.title}>Cadastro</Text>
        </View>

        <View style={{ alignItems: "center", flex: 6 }}>
          <InputForm
            title="Nome Completo"
            holder="Nome completo"
            onChangeText={(text) => setName(text)}
          />

          <InputForm
            style={{ marginTop: 25 }}
            title="E-mail"
            holder="marcoslima@gmail.com"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />

          <InputForm
            style={{ marginTop: 25 }}
            title="Senha"
            holder="Senha"
            value={password}
            password={true}
            onChangeText={(value) => setPassword(value)}
          />

          <TextButton
            style={{ marginTop: 40 }}
            title="FINALIZAR CADASTRO"
            onPress={() => createUser()}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 20,
    marginBottom: 50,
  },
});

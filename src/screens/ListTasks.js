import React, { useContext, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/SimpleLineIcons";
import {Button} from "react-native-elements";
import CircleCheckBox, { LABEL_POSITION } from "react-native-circle-checkbox";
import {
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Styles } from "../components/Styles";

function ListTasks({ navigation }) {
  const [checked, setChecked] = React.useState(false);

  function logOutUser(){
  // signOut().then(() => {
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });
  alert("Em preparo")
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
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Minhas Tarefas</Text>
          <Icon
              name="search1"
              size={26}
              color="black"
              onPress={() => {}}
            />
        </View>

        <View style={{flex:1}}>
          <View style={Styles.viewList}>
            <Image
              source={require("../../assets/Ellipse.jpeg")}
              style={Styles.imageList}
            />
            <View>
              <Text style={{ fontSize: 13, fontWeight: "bold" }}>Reunião com meus sócios</Text>
              <Text style={{ fontSize: 13, marginBottom: 25, marginTop: 5 }}>
                Hoje, ás 14:00
              </Text>
            </View>
            <View style={Styles.completed}>
              <Text style={{ marginBottom: 8, fontSize: 11 }}>Concluída</Text>
              <CircleCheckBox
                checked={true}
                onToggle={(checked) => console.log("My state is: ", checked)}
                labelPosition={LABEL_POSITION.RIGHT}
              />
            </View>
          </View>
       

        <View style={Styles.viewIFooter}>
            <Button buttonStyle={Styles.buttonTasks}
            title ="Tarefas Concluídas"
            // onPress={() => Alert.alert('Simple Button pressed')}
        />
          <TouchableOpacity activeOpacity={0.8}>
            <Icon
              name="pluscircle"
              size={70}
              
              color="#FFA800"
            />
          </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
export default ListTasks;

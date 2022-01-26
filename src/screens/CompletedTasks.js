import React, { useContext, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import IconTrash from "react-native-vector-icons/FontAwesome5";
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

function CompletedTasks({ navigation }) {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={{ flex:1, backgroundColor: "#6C98F0" }}>
      <SafeAreaView style={Styles.safeview}>
        <View style={Styles.viewHeader}>
          <Icon
              name="back"
              size={26}
              color="black"
              onPress={() => {}}
            />
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Tarefas Concluídas</Text>
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
            <IconTrash
              name="trash"
              size={26}
              color="black"
              onPress={() => {}}
            />

            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
export default CompletedTasks;

import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  safeview: {
    flex:1,
    backgroundColor: "#FFF",
    marginTop: 50,
  },
  title: {
    flex: 1,
    fontSize: 36,
    marginTop: 35,
    marginLeft: 20,
    fontFamily: "Comfortaa",
    color: "black",
    alignContent: "flex-start",
  },
  titleInput: {
    fontFamily: "Roboto",
    fontSize: 15,
    marginHorizontal: 20,
    marginBottom: 5,
  },

  input: {
    padding: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    width: 343,
    height: 52,
    borderWidth: 1,
    paddingTop: 10,
  },
  textButton: {
    color: "#FFF",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "700",
    fontFamily: "Roboto",
  },

  button: {
    backgroundColor: "#20B2AA",
    width: 343,
    height: 52,
    borderRadius: 8,
    justifyContent: "center",
  },

  textButtonGoogle: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "700",
    fontFamily: "Roboto",
  },

  buttonGoogle: {
    borderWidth: 1,
    width: 343,
    height: 52,
    borderRadius: 8,
    justifyContent: "center",
  },

  viewHeader: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#9ABCFF",
    height: 67,
    elevation: 20,
    shadowColor: "black",
  },
  viewList: {
    marginTop: 10,
    height: 90,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderBottomWidth: 2,
  },
  imageList: {
    borderRadius: 100,
    width: 74,
    height: 74,
  },

  completed: {
    alignItems: "center",
    alignContent: "space-between",
    marginBottom: 10,
  },
  viewIFooter: {
    alignContent: "center",
    alignContent:'flex-end',
    marginTop:400,
    height: 150,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    margin:-30
  },


  buttonTasks:{
      backgroundColor:'#6C98F0',
      borderRadius:200,
      height: 44,
      width:180,
      
  },

  viewNewTasks:{
  flexDirection:'row', 
  alignItems:'center',
  justifyContent:'space-between',
  // marginEnd:80,
  // marginStart:80
  marginHorizontal:120
  },

  imageExit:{
    height:150,
    width:150,
    alignItems:'center'
  },

  btnExit:{
    alignItems: "center",
     backgroundColor:'#20B2AA', 
    borderRadius:10,
    
  }
});

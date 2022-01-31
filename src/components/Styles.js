import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 40,
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
    backgroundColor: "red",
    backgroundColor: "#20B2AA",
    width: 343,
    height: 52,
    borderRadius: 8,
    justifyContent: "center",
  },

  textButtonGoogle: {
    fontSize: 13,
    height: 40,
    textAlign: "center",
    fontWeight: "700",
    fontFamily: "Roboto",
  },

  buttonGoogle: {
    borderWidth: 1,
    width: 343,
    height: 52,
    borderRadius: 8,
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
    height: 90,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderBottomWidth: 2,
  },

  viewListFinal: {
    backgroundColor: "#a0a0a0",
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
    backgroundColor: "blue",
    alignContent: "center",
    alignContent: "flex-end",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  buttonTasks: {
    position: "absolute",
    marginTop: 662,
    backgroundColor: "#6C98F0",
    marginLeft: 35,
    borderRadius: 200,
    height: 44,
    width: 180,
  },
  btnFloating: {
    position: "absolute",
    backgroundColor: "#FFA800",
    bottom: 80,
    marginLeft: 280,
    height: 80,
    width: 80,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },

  viewNewTasks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 120,
  },

  imageExit: {
    height: 150,
    width: 150,
    alignItems: "center",
  },

  btnExit: {
    alignItems: "center",
    backgroundColor: "#20B2AA",
    borderRadius: 10,
  },
});

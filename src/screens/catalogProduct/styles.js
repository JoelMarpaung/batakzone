const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  imageContainer: {
    flex: 1,
    width:100, 
    height:100,
    borderRadius: 5
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 40 : 50,
    top: Platform.OS === "android" ? 35 : 60,
    width: 280,
    height: 100
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },
  header:{
    backgroundColor: "#8E171B"
  },
  title: {
    flex: 1, 
    alignSelf: "center", 
    fontSize: 28, 
    fontWeight: "bold"
  },
  colImage: {
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  menuText: {
    marginTop: 10,
    fontSize: 10
  },
  contentSpace: {
    marginLeft: 0
  },
};

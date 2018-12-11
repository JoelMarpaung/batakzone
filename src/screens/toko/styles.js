const React = require("react-native");
const { Dimensions, Platform } = React;
// const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
    container: {
      backgroundColor: "#FFF"
    },
    header:{
        backgroundColor:"#8E171B"
    },
    card:{
      backgroundColor: "#8E171B",
      margin:2
    },
    button:{
      backgroundColor: "#fff",
      padding:10,
      margin:5
    },
    buttonText:{
        alignSelf: "flex-end",
        backgroundColor: "#8E171B",
        position:"absolute",
        bottom: 0       
    },
    title:{
        color:"#fff",
        fontSize:20
    },
    text:{
        color:"#fff",
    },
    textButtoon:{
        color:"#fff",
        fontSize:8
    },
    textMenu:{
        color:"#8E171B",
    },
    produk:{
        flexDirection:"row",
        marginBottom:70
      },
      produkImage:{
        height:150,
        width: deviceWidth / 4
      },
      produkButton:{
        flexDirection:"column",
        height:200,
      },
};
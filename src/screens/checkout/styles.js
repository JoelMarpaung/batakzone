import Transparent from "../button/transparent";

const React = require("react-native");
const {
    Dimensions,
    Platform
} = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
    imageContainer: {
        flex: 1,
        width: null,
        height: null
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
    header: {
        backgroundColor: "#8E171B"
    },
    searchBar: {
        backgroundColor: "transparent"
    },
    mt: {
        marginTop: 10
    },
    icon: {

    },
    iconImage: {
        height: 50,
        width: deviceWidth / 10
    },
    iconButton: {
        flexDirection: "column",
        height: 100,
        width: 80,
        borderRadius: 0,
        padding: -100
    },
    iconText: {
        fontSize: 12,
        color: "#8E171B",
        marginLeft: -20,
        marginRight: -20
    },
    produk: {
        flexDirection: "row",
        padding: 20,
        marginLeft: 10,
        marginBottom: 30
    },
    produkImage: {
        height: 100,
        width: deviceWidth / 6,
        marginLeft: 30
    },
    produkButton: {
        flexDirection: "column",
        height: 150,
    },
    buttonProduk: {
        alignSelf: "center",
        color: "white",
        backgroundColor: "#8E171B",
        marginTop: 20
    },
    buttonKeranjang: {
        alignSelf: "center",
        backgroundColor: "white",
        marginTop: 20,
        borderColor: "#8E171B",
        borderWidth: 2
    },
    buttonLanjut: {
        alignSelf: "flex-end",
        color: "white",
        backgroundColor: "#8E171B",
        marginTop: 15
    }

};

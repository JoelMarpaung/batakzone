import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Content,
  Button,
  Body,
  Left,
  Icon,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Grid,
  Col,
  Row,
  H3,
  Fab, 
} from "native-base";
import styles from "./styles";
const toko = require("../../../assets/toko.png");
const produk1 = require("../../../assets/produk1.jpg");
const produk2 = require("../../../assets/produk2.jpg");
const produk3 = require("../../../assets/produk3.jpg");

const data = {
  shop: "myToko",
  tambah: "AddProduk",
  informasi: "Informasi"
};

class pesananBaru extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          
        </Content>
      </Container>
    );
  }
}

export default pesananBaru;
import React, { Component } from "react";
import { Image } from "react-native";
import {
  H3,
  Container,
  Segment,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import styles from "./styles";
import { black } from "ansi-colors";

const produk2 = require("../../../assets/produk2.jpg");

class KonfirmasiBarang extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
        <Card style={styles.mt}>
          <H3 style={{color:"#8E171B",marginLeft:10,marginTop:10, fontWeight:'bold'}}>Toko Horas</H3>
            <CardItem cardBody>
            <Left>
              <Image
                style={{
                  resizeMode: "cover",
                  width: 120,
                  height: 140,
                  marginLeft: 10,
                  marginTop:20,
                  flexDirection: "row"
                }}
                source={produk2}/>
                <Body>
                  <Text style={styles.text2}>Gaun Ulos</Text>
                </Body>
                  </Left>
            </CardItem>

            {/* <CardItem style={{ paddingVertical: 0 }}> */}
              <Right>
            <Button rounded style={styles.buttonBottom}>
            <H3 style={{color:"white"}}>Barang telah diterima</H3>
          </Button>
              </Right>
            {/* </CardItem> */}
          </Card>

        </Content>
      </Container>
    );
  }
}

export default KonfirmasiBarang;

import React, { Component } from "react";
import { Image } from "react-native";
import {
  H3,
  Container,
  Content,
  Button,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  Right
} from "native-base";
import styles from "./styles";


const produk2 = require("../../../assets/produk2.jpg");

class MenungguPembayaran extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card style={styles.mt}>
            <H3 style={{ color: "#8E171B", marginLeft: 10, marginTop: 10, fontWeight: "bold" }}>Toko Horas</H3>
            <CardItem cardBody>
              <Left>
                <Image
                  style={{
                    resizeMode: "cover",
                    width: 120,
                    height: 140,
                    marginLeft: 10,
                    marginTop: 20,
                    flexDirection: "row"
                  }}
                  source={produk2} />
                <Body>
                  <Text style={styles.text2}>Gaun Ulos</Text>
                </Body>
              </Left>
            </CardItem>
            <Right>
              <Button transparent>
                <Text style={styles.buttonTracking}>Tracking Barang</Text>
              </Button>
            </Right>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default MenungguPembayaran;

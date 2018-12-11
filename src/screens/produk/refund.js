import React, { Component } from "react";
import { Image } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Card,
  Text,
  CardItem,
  H3,
  Textarea,
  Label,
  Item
} from "native-base";
import styles from "./styles";
const produk2 = require("../../../assets/produk2.jpg");

class RefundBarang extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>BatakZone</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="search" />
            </Button>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="cart" />
            </Button>
          </Right>
        </Header>

        <Content padder>
              <H3 style={{ color: "#8E171B", marginLeft: 10, marginTop: 10, fontWeight: 'bold' }}>No. Transaksi 1h1415</H3>
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
                    <Text style={styles.text2}>RP. 150.000,00</Text>
                  </Body>
                </Left>
              </CardItem>
              <Item stackedLabel>
                <Label>Alasan Pengembalian</Label>
                <Textarea rowSpan={5} alignSelf="flex-start" />
              </Item>
              <Item stackedLabel>
                <Label>Foto Barang yang diterima</Label>
                <Button rounded style={{backgroundColor:"white", borderColor:"#8E171B", border:2}}>
                  <Text style={{color:"#8E171B"}}>browse</Text>
                </Button>
              </Item>
            <Button rounded style={styles.buttonBottom}>
              <Text>Lakukan Refund</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}

export default RefundBarang;  

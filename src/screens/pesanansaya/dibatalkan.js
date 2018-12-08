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

class Dibatalkan extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
        <Text style={{fontWeight:'bold',marginTop:10, fontSize:20,marginLeft:270}}>Dibatalkan</Text>
        <Card style={styles.mt}>
          <H3 style={{color:"#8E171B",marginLeft:10,marginTop:10, fontWeight:'bold'}}>Toko Bintang Terang</H3>
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
                  <Text style={styles.text2}>Baju Batik Gorga</Text>
                  <Text style={styles.text3}>Rp. 150.000</Text>
                </Body>
                  </Left>
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
              <Text style={{marginLeft:50}}>2</Text>
                <Button transparent>
                  {/* <Icon active name="pluscircle" /> */}
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  {/* <Icon active name="minuscircleo" /> */}
                </Button>
              </Body>
            </CardItem>
          </Card>


        <Text style={{fontWeight:'bold',marginTop:10, fontSize:20,marginLeft:270}}>Dibatalkan</Text>
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
                  <Text style={styles.text3}>Rp. 120.000</Text>
                </Body>
                  </Left>
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  {/* <Icon active name="md-remove" /> */}
                  <Text>2</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Dibatalkan;

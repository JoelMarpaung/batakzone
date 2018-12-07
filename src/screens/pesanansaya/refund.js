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


const produk4 = require("../../../assets/produk4.jpg");

class Refund extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
        <Text style={{fontWeight:'bold',marginTop:10, fontSize:20}}>Transaksi</Text>
        <Text style={{fontWeight:'bold',fontSize:16}}>ID12367719</Text>
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
                source={produk4}/>
                <Body>
                  <Text style={styles.text2}>Baju Batik Gorga</Text>
                  <Text style={styles.text3}>Rp. 150.000</Text>
                </Body>
                  </Left>
            </CardItem>

            {/* <CardItem style={{ paddingVertical: 0 }}> */}
            <Right>
              <Text style={{alignSelf:"center", fontSize:20, marginTop:30}}>Resi Barang</Text>
            </Right>
            {/* </CardItem> */}
          </Card>

        </Content>
      </Container>
    );
  }
}

export default Refund;

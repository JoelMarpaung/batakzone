import React, { Component } from "react";
import { Image } from "react-native";
import {
  H3,
  Badge,
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
        <Text style={styles.h4}>Transaksi</Text>
        <Text style={styles.h6}>UAHSNAUBD5</Text>
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
                  <Text style={styles.text2}>Baju Batik Gorga</Text>
                  <Text style={styles.text3}>Rp. 150.000</Text>
                </Body>
            </Left>
            </CardItem>
            <Card transparent>
                <CardItem>
                  <Text style={{marginLeft:45}}>2</Text>
                </CardItem>
             </Card>
            <Text style={{alignSelf:"center", fontSize:16, marginTop:10}}>Resi Barang</Text>
              <Card style={{alignSelf:"center"}}>
                <CardItem>
                  <Text>12SDDADF3FFV45</Text>
                </CardItem>
             </Card>
            <Button rounded danger style={{alignSelf:"center"}}><Text> Barang Telah Diterima </Text></Button>

            
          </Card>

        </Content>
      </Container>
    );
  }
}

export default KonfirmasiBarang;

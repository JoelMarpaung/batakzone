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

class MenungguPembayaran extends React.Component {
  render() {
    return (
      <Container>
           <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>BatakZone</Title>
          </Body>
          <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="search"/>
              </Button>
              <Button transparent onPress={()=>this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="cart"/>
              </Button>
          </Right>
        </Header>
        <Segment>
          <Button first>
          <Text style={styles.segment}>Menunggu Pembayaran</Text>
          </Button>
          <Button>
            <Text style={styles.segment}>Dalam Perjalanan</Text>
          </Button>
        </Segment>
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
              <Button transparent>
              <Text style={{marginLeft:200,color:}}>Tracking Barang</Text>
              </Button>
              </Right>
            {/* </CardItem> */}
          </Card>

        </Content>
      </Container>
    );
  }
}

export default MenungguPembayaran;

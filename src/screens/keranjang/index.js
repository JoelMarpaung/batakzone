import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Input,
  Left,
  Right,
  Body,
  Text,
  Icon,
  H3,
  H2,
  Item,
  Badge,
  Thumbnail,
  Card,
  CardItem,
  ListItem,
  List,
  Accordion
} from "native-base";
import { Image, Dimensions } from 'react-native';
import { Grid, Row, Col } from "react-native-easy-grid";

import styles from "./styles";
const deviceWidth = Dimensions.get("window").width;
const cardImage = require("../../../assets/detail-produk.png");
const produk1 = require("../../../assets/produk1.jpg");
const produk2 = require("../../../assets/produk2.jpg");
const produk3 = require("../../../assets/produk3.jpg");
const produk4 = require("../../../assets/produk4.jpg");

class Keranjang extends Component {
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

          <Content padder>
          <Card>
          <Text style={{fontWeight:"bold", alignSelf:"center"}}>Keranjang Anda</Text>
          </Card>
          <Grid>
          <Row><Text style={{fontWeight:"bold", color:"#8E171B", marginTop:10}}>Toko Bintang Terang</Text>
          </Row>
          <Card style={{padding:10}}>
          <Row>
          <Col size={1}>
            <Image style={styles.produkImage} source={produk1}/>
          </Col>
          <Col>
          <H3 style={{fontSize:18, fontWeight:"bold"}}>{"\n"}Batik Ulos</H3>
          <Text style={{fontSize:15,fontWeight:"bold", color:"black"}}>Rp. 300.000,00</Text>
          </Col>
          </Row>
          <Row>
          <Col style={{flexDirection:"row", marginTop:10}}>
          <Button transparent> 
            <Icon type = "FontAwesome" name = "minus-circle"/>
          </Button>
          <H2> 2 </H2>
              
          
          <Button transparent>
            <Icon name="plus-circle"/>
          </Button>
          </Col>
          <Col>
          </Col>
          </Row>
          </Card>
          </Grid>
          </Content>
        </Container>
      );
    }
  }

  export default Keranjang;

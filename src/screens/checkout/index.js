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
  Label,
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

class CheckOut extends Component {
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
          <Card style={{padding:10}}>
          <H3 style={{fontSize:16, fontWeight:"bold"}}>Alamat Pengiriman</H3>
          <Text style={{fontSize:14}}>Chika Hutapea</Text>
          <Text style={{fontSize:14}}>Jln. Sisingamangaraja, Sitoluama, Laguboti.{"\n"}
                Kabupaten Toba Samosir Sumatera Utara. {"\n"}
                22381. 085683948573
          </Text>
          <Row style={{marginTop:50}}>
              <Col>
                <Button transparent style={{alignSelf:"flex-start", height:40}} >
                    <Text style={{color:"black", borderWidth:0.5, borderColor:"gray", alignSelf:"center"}}>Ubah Alamat</Text>
                </Button>
              </Col>
              <Col>
                <Button transparent style={{alignSelf:"flex-end", height:40}}>
                    <Text style={{color:"black", borderWidth:0.5, borderColor:"gray", alignSelf:"center"}}>Tambah Alamat</Text>
                </Button>
              </Col>
          </Row>
          </Card>          

          
          <Card style={{padding:10}}>
          <Grid>
          <Row>
          <Col size={1}>
            <Image style={styles.produkImage} source={produk1}/>
          </Col>
          <Col>
          <H3 style={{fontSize:18, fontWeight:"bold"}}>{"\n"}Batik Ulos</H3>
          <Text style={{fontSize:15,fontWeight:"bold", color:"black"}}>Rp. 300.000,00</Text>
          </Col>
          </Row>
          </Grid>
          </Card>
          
          </Content>
        </Container>
      );
    }
  }
 
  export default CheckOut;

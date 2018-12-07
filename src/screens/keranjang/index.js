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
          <Col style={{flexDirection:"row"}}>
          <Button transparent> 
            <Icon type = "FontAwesome" name = "minus-circle" style={{color:"#8E171B"}}/>
          </Button>
           <Badge
            style={{ backgroundColor: "white", marginTop:10}}>
            <Text style={{color:"black", fontSize:20}}>2</Text>
          </Badge>
          <Button transparent>
            <Icon type = "FontAwesome" name = "plus-circle" style={{color:"#8E171B"}}/>
          </Button>
          </Col>
          <Col>
          <Right>
            <Button transparent style={{marginLeft:100}}>
              <Icon type="MaterialIcons" name="delete-sweep" style={{color:"gray"}}/>
            </Button>
          </Right>
          </Col>
          </Row>
          </Card>
          </Grid>


          <Grid>
          <Row><Text style={{fontWeight:"bold", color:"#8E171B", marginTop:10}}>Toko Bintang Horas</Text>
          </Row>
          <Card style={{padding:10}}>
          <Row>
          <Col size={1}>
            <Image style={styles.produkImage} source={produk2}/>
          </Col>
          <Col>
          <H3 style={{fontSize:18, fontWeight:"bold"}}>{"\n"}Gaun Ulos</H3>
          <Text style={{fontSize:15,fontWeight:"bold", color:"black"}}>Rp. 400.000,00</Text>
          </Col>
          </Row>
          <Row>
          <Col style={{flexDirection:"row"}}>
          <Button transparent> 
            <Icon type = "FontAwesome" name = "minus-circle" style={{color:"#8E171B"}}/>
          </Button>
           <Badge
            style={{ backgroundColor: "white", marginTop:10}}>
            <Text style={{color:"black", fontSize:20}}>4</Text>
          </Badge>
          <Button transparent>
            <Icon type = "FontAwesome" name = "plus-circle" style={{color:"#8E171B"}}/>
          </Button>
          </Col>
          <Col>
          <Right>
            <Button transparent style={{marginLeft:100}}>
              <Icon type="MaterialIcons" name="delete-sweep" style={{color:"gray"}}/>
            </Button>
          </Right>
          </Col>
          </Row>

          <Row>
          <Col size={1}>
            <Image style={styles.produkImage} source={produk3}/>
          </Col>
          <Col>
          <H3 style={{fontSize:18, fontWeight:"bold"}}>{"\n"}Kemeja Motif Ulos</H3>
          <Text style={{fontSize:15,fontWeight:"bold", color:"black"}}>Rp. 250.000,00</Text>
          </Col>
          </Row>
          <Row>
          <Col style={{flexDirection:"row"}}>
          <Button transparent> 
            <Icon type = "FontAwesome" name = "minus-circle" style={{color:"#8E171B"}}/>
          </Button>
           <Badge
            style={{ backgroundColor: "white", marginTop:10}}>
            <Text style={{color:"black", fontSize:20}}>3</Text>
          </Badge>
          <Button transparent>
            <Icon type = "FontAwesome" name = "plus-circle" style={{color:"#8E171B"}}/>
          </Button>
          </Col>
          <Col>
          <Right>
            <Button transparent style={{marginLeft:100}}>
              <Icon type="MaterialIcons" name="delete-sweep" style={{color:"gray"}}/>
            </Button>
          </Right>
          </Col>
          </Row>
          </Card>

          <Row>
            <Col>
              <H3 style={{fontSize:18, fontWeight:"bold"}}>{"\n"}Total : Rp. 950.000,00</H3>
            </Col>
            <Col>
              <Button small rounded style={styles.buttonLanjut}>
            <Text style={{color:"white"}}>Lanjutkan</Text>
            </Button>
            </Col>
          </Row>

          </Grid>
          </Content>
        </Container>
      );
    }
  }

  export default Keranjang;

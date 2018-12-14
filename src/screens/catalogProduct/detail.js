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
  H3,
  H2,
  Item,
  Icon,
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
const dataArray = [
  { title: "Deskripsi", content: "Lorem ipsum dolor sit amet" },
  { title: "Makna", content: "Lorem ipsum dolor sit amet" },
  { title: "Diskusi & Review", content: "Lorem ipsum dolor sit amet" }
];

class DetailProduk extends Component {
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
          <Card style={styles.mt}>
              <CardItem>
                <Body>
                  <Image
                    style={{
                      alignSelf: "center",
                      height: 200,
                      resizeMode: "cover",
                      width: deviceWidth / 1.18,
                      marginVertical: 5
                    }}
                    source={cardImage}
                  />
                </Body>
            </CardItem>
            </Card>
            <Card style={[styles.mt]}>
              <CardItem>
              <Grid>
              <Row><Text style={{color:"#8E171B", fontWeight:"bold"}}>Batik Motif Ulos</Text></Row>
              <Row><Text style={{fontWeight:"bold"}}>Rp 100.000</Text></Row>
              <Row><Text style={{color:"#8E171B", fontWeight:"bold"}}>Rating   </Text>
                   <Icon name="star" style={{fontSize:20}}/>
                   <Icon name="star" style={{fontSize:20}}/>
                   <Icon name="star" style={{fontSize:20}}/>
                   <Icon name="star" style={{fontSize:20}}/>
                   <Icon name="star" style={{fontSize:20}}/>
              </Row>
              </Grid>
              </CardItem>
            </Card>
            <Card style={[styles.mt]}>
              <CardItem>
              <Grid>
              <Row><Icon name="home"/><Text style={{color:"#8E171B", fontWeight:"bold"}}>Nama Toko</Text></Row>
              <Row>
              <Col><Button small rounded style={styles.buttonProduk}>
                <Text style={{color:"white", fontSize:10}}>Masuk ke Toko</Text>
              </Button></Col>
              <Col></Col>
              <Col><Button small rounded style={styles.buttonProduk}>
                <Text style={{color:"white", fontSize:10}}>Wishlist</Text>
              </Button></Col>
              </Row>
              </Grid>
              </CardItem>
            </Card>

            <Accordion dataArray={dataArray}/>

            <Card style={styles.mt}>
            <Grid>
            <Row style={styles.produk}>
            <Col>
            <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}>
              <Image style={styles.produkImage} source={produk1}/>
              <H3 style={{fontSize:13, fontWeight:"bold"}}>{"\n"}Rp. 300.000,00</H3>
              <Text style={{fontSize:11, color:"black"}}>Batik Ulos</Text>
              </Button>
            </Col>
            <Col>
            <Button transparent style={styles.produkButton}>
            <Image style={styles.produkImage} source={produk2}/>
            <H3 style={{fontSize:13, fontWeight:"bold"}}>{"\n"}Rp. 400.000,00</H3>
              <Text style={{fontSize:11, color:"black"}}>Gaun Ulos</Text>
              </Button>
            </Col>
            <Col>
            <Button transparent style={styles.produkButton}>
            <Image style={styles.produkImage} source={produk2}/>
            <H3 style={{fontSize:13, fontWeight:"bold"}}>{"\n"}Rp. 400.000,00</H3>
              <Text style={{fontSize:11, color:"black"}}>Gaun Ulos</Text>
              </Button>
            </Col>
            </Row>
            </Grid>
          </Card>
          <Grid>
          <Row>
          <Col><Button small rounded style={styles.buttonKeranjang}>
            <Text style={{color:"#8E171B", fontSize:10}}>Tambah ke Keranjang</Text>
          </Button></Col>
          <Col><Button small rounded style={styles.buttonProduk} onPress={()=>this.props.navigation.navigate("Keranjang")}>
            <Text style={{color:"white", fontSize:10}}>Beli Sekarang</Text>
          </Button></Col>
          </Row>
          </Grid>
          </Content>
        </Container>
      );
    }
  }

  export default DetailProduk;

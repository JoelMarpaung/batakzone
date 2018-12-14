import React, { Component } from "react";
import { Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Picker,
  Form,
  Item,
  View,
  Card,
  CardItem
} from "native-base";

import { Grid, Row, Col } from "react-native-easy-grid";
import styles from "./styles";
const pakaian = require("../../../assets/pakaian.png");
const properti = require("../../../assets/properti.png");
const cendramata = require("../../../assets/cendramata.png");
const ukiran = require("../../../assets/ukiran.png");
const buku = require("../../../assets/buku.png");
const produk1 = require("../../../assets/produk1.jpg");
const produk2 = require("../../../assets/produk2.jpg");
const produk3 = require("../../../assets/produk3.jpg");

class Kategori extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedHarga: undefined,
          selectedNewest: undefined,
          selectedPopularity: undefined
        };
    }

    
  render() {
    return (
      <Container style={styles.container}>
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
         <Grid>
             <Row>
                 <Left>
                 <Text style={styles.title}>Pakaian</Text>
                 </Left>
                 <Body>

                 </Body>
             
            <Text styles={styles.textMini} onPress = {() => this.props.navigation.navigate('Katalog')}>lihat lainnya</Text>
             </Row>
         </Grid>
          <Grid>
            <Row>
              <Col style={styles.colImage}>
              <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}>
                <Image source={produk1} style={styles.produkImage} />
                <Text style={styles.menuText}>Rp. 400.000,00</Text>
                <Text style={styles.menuText}>Gaun Ulos</Text>
                </Button>
              </Col>

              <Col style={[styles.colImage, styles.contentSpace]}>
              <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}>  
                <Image source={produk2} style={styles.produkImage} />
                <Text style={styles.menuText}>Rp. 400.000,00</Text>
                <Text style={styles.menuText}>Gaun Batik</Text>             
              </Button>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
              <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}>  
                <Image source={produk3} style={styles.produkImage} />
                <Text style={styles.menuText}>Rp. 400.000,00</Text>
                <Text style={styles.menuText}>Kemeja Batik</Text>
                </Button>
              </Col>
            </Row>
            <Grid>
             <Row>
                 <Left>
                 <Text style={styles.title}>{"\n"}Properti</Text>
                 </Left>
                 <Body>

                 </Body>
             
            <Text styles={styles.textMini} onPress = {() => this.props.navigation.navigate('Katalog')}>{"\n"}lihat lainnya</Text>
             </Row>
         </Grid>
            <Row>
              <Col style={styles.colImage}>
              <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}>  
                <Image source={produk1} style={styles.produkImage} />
                <Text style={styles.menuText}>Rp. 400.000,00</Text>
                <Text style={styles.menuText}>Gaun Ulos</Text>
                </Button>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
              <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}> 
                <Image source={produk1} style={styles.produkImage} />
                <Text style={styles.menuText}>Rp. 400.000,00</Text>
                <Text style={styles.menuText}>Gaun Ulos</Text>
                </Button>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
              <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}> 
                <Image source={produk1} style={styles.imageContainer} />
                <Text style={styles.menuText}>Rp. 400.000,00</Text>
                <Text style={styles.menuText}>Gaun Ulos</Text>
                </Button>
              </Col>
            </Row>
            <Grid>
             <Row>
                 <Left>
                 <Text style={styles.title}>{"\n"}Ukiran</Text>
                 </Left>
                 <Body>

                 </Body>
             
            <Text styles={styles.textMini} onPress = {() => this.props.navigation.navigate('Katalog')}>{"\n"}lihat lainnya</Text>
             </Row>
         </Grid>
            <Row>
              <Col style={styles.colImage}>
              <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}>  
                <Image source={produk1} style={styles.produkImage} />
                <Text style={styles.menuText}>Rp. 400.000,00</Text>
                <Text style={styles.menuText}>Gaun Ulos</Text>
                </Button>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
              <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}> 
                <Image source={produk1} style={styles.produkImage} />
                <Text style={styles.menuText}>Rp. 400.000,00</Text>
                <Text style={styles.menuText}>Gaun Ulos</Text>
                </Button>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
              <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}> 
                <Image source={produk1} style={styles.produkImage} />
                <Text style={styles.menuText}>Rp. 400.000,00</Text>
                <Text style={styles.menuText}>Gaun Ulos</Text>
                </Button>
              </Col>
            </Row>
            <Grid>
             <Row>
                 <Left>
                 <Text style={styles.title}>{"\n"}Properti</Text>
                 </Left>
                 <Body>

                 </Body>
             
            <Text styles={styles.textMini} onPress = {() => this.props.navigation.navigate('Katalog')}>{"\n"}lihat lainnya</Text>
             </Row>
         </Grid>
            <Row>
              <Col style={styles.colImage}>
              <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}>  
                <Image source={produk1} style={styles.produkImage} />
                <Text style={styles.menuText}>Rp. 400.000,00</Text>
                <Text style={styles.menuText}>Gaun Ulos</Text>
                </Button>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
              <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}> 
                <Image source={produk1} style={styles.produkImage} />
                <Text style={styles.menuText}>Rp. 400.000,00</Text>
                <Text style={styles.menuText}>Gaun Ulos</Text>
                </Button>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
              <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}> 
                <Image source={produk1} style={styles.produkImage} />
                <Text style={styles.menuText}>Rp. 400.000,00</Text>
                <Text style={styles.menuText}>Gaun Ulos</Text>
                </Button>
              </Col>
            </Row>
            
          </Grid>
          <Grid>
             <Row>
                 <Left>
                 <Text style={styles.title}>{"\n"}Buku</Text>
                 </Left>
                 <Body>

                 </Body>
             
            <Text styles={styles.textMini} onPress = {() => this.props.navigation.navigate('Katalog')}>{"\n"}lihat lainnya</Text>
             </Row>
         </Grid>
            <Row>
              <Col style={styles.colImage}>
              <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}>  
                <Image source={produk1} style={styles.produkImage} />
                <Text style={styles.menuText}>Rp. 400.000,00</Text>
                <Text style={styles.menuText}>Gaun Ulos</Text>
                </Button>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
              <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}> 
                <Image source={produk1} style={styles.produkImage} />
                <Text style={styles.menuText}>Rp. 400.000,00</Text>
                <Text style={styles.menuText}>Gaun Ulos</Text>
                </Button>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
              <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}> 
                <Image source={produk1} style={styles.produkImage} />
                <Text style={styles.menuText}>Rp. 400.000,00</Text>
                <Text style={styles.menuText}>Gaun Ulos</Text>
                </Button>
              </Col>
            </Row>
            

          

        </Content>
      </Container>
    );
  }
}

export default Kategori;

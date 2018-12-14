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

const produk1 = require("../../../assets/produk1.jpg");

class Katalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedHarga: undefined,
          selectedNewest: undefined,
          selectedPopularity: undefined
        };
    }

    onValueHargaChange(value: string) {
        this.setState({
            selectedHarga: value
        });
    }

    onValueNewestChange(value: string) {
      this.setState({
          selectedNewest: value
      });
    }

    onValuePopularityChange(value: string) {
      this.setState({
          selectedPopularity: value
      });
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
          <Text style={styles.title}>Pakaian</Text>
          <Grid>
            <Col>
              <Form>
                <Item picker style={{ width: 120 }}>
                  <Picker 
                    mode="dropdown"
                    placeholder="Popularitas"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selectedPopularity}
                    onValueChange={this.onValuePopularityChange.bind(this)}
                  >
                    <Picker.Item label="Popularitas" value="key0" />
                  </Picker>
                </Item>
              </Form>
            </Col>
            <Col>
              <Form>
                <Item picker style={{ width: 120 }}>
                  <Picker 
                    mode="dropdown"
                    placeholder="Terbaru"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selectedNewest}
                    onValueChange={this.onValueNewestChange.bind(this)}
                  >
                    <Picker.Item label="Terbaru" value="key0" />
                  </Picker>
                </Item>
              </Form>
            </Col>
            <Col>
              <Form>
                <Item picker style={{ width: 120 }}>
                  <Picker 
                    mode="dropdown"
                    placeholder="Harga"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selectedHarga}
                    onValueChange={this.onValueHargaChange.bind(this)}
                  >
                    <Picker.Item label="Harga" value="" />
                    <Picker.Item label="Harga Tertinggi" value="key1" />
                    <Picker.Item label="Harga Terrendah" value="key2" />
                  </Picker>
                </Item>
              </Form>
            </Col>
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
            <Row>
              <Col style={styles.colImage}>
                <Image source={produk1} style={styles.produkImage} />
                <Button transparent style={styles.produkButton} onPress={() => this.props.navigation.navigate("DetailProduk")}>
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

        </Content>
      </Container>
    );
  }
}

export default Katalog;

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
  Badge,
  Thumbnail,
  Card,
  Picker,
  Form
} from "native-base"; 
import { Image, Dimensions } from 'react-native';
import { Grid, Row, Col } from "react-native-easy-grid";

import styles from "./styles";
const deviceWidth = Dimensions.get("window").width;
const produk1 = require("../../../assets/produk1.jpg");
const Item = Picker.Item;

class CheckOut extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selected1: "key1"
      };
    }
    onValueChange(value: string) {
      this.setState({
        selected1: value
      });
    }
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
          <H3 style={{fontSize:23, fontWeight:"bold", color:"#8E171B"}}>{"\n"}Batik Ulos</H3>
          <Text style={{fontSize:15,fontWeight:"bold", color:"black"}}>Rp. 300.000,00</Text>
          </Col>
          </Row>
          </Grid>
          </Card>

          <Card style={{padding:10}}>
          <H3 style={{fontSize:15, fontWeight:"bold"}}>Opsi Pengiriman</H3>           
          
            <Form>
            <Picker
              renderHeader={backAction =>
                <Header style={{ backgroundColor: "#f44242" }}>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: "#fff" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Title>Your Header</Title>
                  </Body>
                  <Right />
                </Header>}
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Item label="Wallet" value="key0" />
              <Item label="ATM Card" value="key1" />
              <Item label="Debit Card" value="key2" />
              <Item label="Credit Card" value="key3" />
              <Item label="Net Banking" value="key4" />
            </Picker>
          </Form>

          
          </Card>
          </Content>
        </Container>
      );
    }
  }
 
  export default CheckOut;

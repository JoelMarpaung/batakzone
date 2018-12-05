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

class PesananSaya extends React.Component {
  render() {
    const {navigate} =this.props.navigation;
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
          <Button first onPress={()=>navigate('PesananSaya1',{name: 'Go'})}>
          <Text style={styles.segment}>Menunggu Pembayaran</Text>
          </Button>
          <Button  onPress={()=>navigate('menunggupembayaran',{name: 'menunggupembayaran'})}>
            <Text style={styles.segment}>Dalam Perjalanan</Text>
          </Button>
        </Segment>
        {/* <Content padder>
        <Text style={{fontWeight:'bold',marginTop:10, fontSize:18}}>Total: Rp. 270.000</Text>
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
                source={produk2}/>
                <Body>
                  <Text style={styles.text2}>Baju Batik Gorga</Text>
                  <Text style={styles.text3}>Rp. 150.000</Text>
                </Body>
                  </Left>
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon active name="" />
                  <Text>4923 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>89 Comments</Text>
                </Button>
              </Body>
              <Right>
              <Icon style={{color:'black'}} active name="trash"/>
              </Right>
            </CardItem>
          </Card>

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
                  <Text style={styles.text3}>Rp. 120.000</Text>
                </Body>
                  </Left>
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon active name="" />
                  <Text>4923 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>89 Comments</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
              <Icon style={{color:'black'}} active name="trash" />
              </Button>
              </Right>
            </CardItem>
          </Card>

        </Content> */}
      </Container>
    );
  }
}

export default PesananSaya;

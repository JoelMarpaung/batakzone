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

class Favorit extends React.Component {
  render() {
    return (
      <Container>
           <Header style={{backgroundColor: "#8E171B"}}>
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
        <Text style={{fontWeight:'bold',marginTop:10, fontSize:18}}>Favorite Anda</Text>
        <Card style={styles.mt}>
            <CardItem cardBody>
            <Left>
              <Image
                style={{
                  resizeMode: "cover",
                  width: 120,
                  height: 160,
                  marginLeft: 10,
                  flexDirection: "row"
                }}
                source={produk2}/>
                <Body>
                   </Body>
                  </Left>
            </CardItem>
               <Right>
                <Text>Rp. 1230</Text> 
               </Right>
            <CardItem style={{ paddingVertical: 0 }}>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Favorit;

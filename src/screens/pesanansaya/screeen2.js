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

class PesananSaya1 extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
        <Text style={{fontWeight:'bold',marginTop:10, fontSize:18}}>Total: Rp. 270.000</Text>
        <Card style={styles.mt}>
          <H3 style={{color:"#8E171B",marginTop:10, fontWeight:'bold'}}>Toko Bintang Terang</H3>
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
                  <Icon type ="FontAwesome" name = "minus-circle" style={{color:"#8E171B"}} />
                </Button>
                <Text style={{marginLeft:10}}>2</Text>
                <Button transparent style={{marginLeft:40}}>
                <Icon type ="FontAwesome" name = "plus-circle" style={{color:"#8E171B"}} />
                </Button>
              </Left>
              <Body>
                
              </Body>
              <Right>
              <Button transparent style={{marginLeft:50}}>
              <Icon type="MaterialIcons" name="delete-sweep" style={{color:"gray"}}/>
            </Button>
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
                  <Icon type ="FontAwesome" name = "minus-circle" style={{color:"#8E171B"}} />
                </Button>
                <Text style={{marginLeft:10}}>2</Text>
                <Button transparent style={{marginLeft:40}}>
                <Icon type ="FontAwesome" name = "plus-circle" style={{color:"#8E171B"}} />
                </Button>
              </Left>
              <Body>
                
              </Body>
              <Right>
              <Button transparent style={{marginLeft:50}}>
              <Icon type="MaterialIcons" name="delete-sweep" style={{color:"gray"}}/>
            </Button>
              </Right>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}

export default PesananSaya1;

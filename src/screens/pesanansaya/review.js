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
  Form,
  Item,
  Card,
  Label,
  CardItem,
  Text,
  Thumbnail,
  Textarea,
  Left,
  Body,
  Right,
  Row
} from "native-base";
import styles from "./styles";
import { black } from "ansi-colors";
import TextArea from "../form/textArea";


const produk4 = require("../../../assets/produk4.jpg");

class Review extends Component {
  render() {
    return (
      <Container>
        <Content padder>
        <Form>
          <Row style={{marginTop:10}}>
            <Icon name="star" style={{fontSize:20}}/>
            <Icon name="star" style={{fontSize:20}}/>
            <Icon name="star" style={{fontSize:20}}/>
            <Icon name="star" style={{fontSize:20}}/>
            <Icon name="star" style={{fontSize:20}}/>
          </Row>
          <Label style={{marginTop:30, color:"black", fontSize: 18, marginBottom:15}}>Ulasan</Label>
                <Textarea rowSpan={10} style={{borderColor:"gray", borderWidth:1}} />
            <Button rounded style={styles.buttonBottom}>
                <Text style={{ color: "white", fontSize: 12}}>Simpan</Text>
              </Button>
        {/* <Card style={styles.mt}> */}
          {/* <H3 style={{color:"#8E171B",marginLeft:10,marginTop:10, fontWeight:'bold'}}>Toko Bintang Terang</H3> */}
            {/* <CardItem cardBody>
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
                source={produk4}/>
                <Body>
                  <Text style={styles.text2}>Baju Batik Gorga</Text>
                  <Text style={styles.text3}>Rp. 150.000</Text>
                </Body>
                  </Left>
            </CardItem> */}

            {/* <CardItem style={{ paddingVertical: 0 }}> */}
             {/* <Right>
              <Text style={{alignSelf:"center", fontSize:20, marginTop:30}}>Resi Barang</Text>
            </Right> */}
            {/* </CardItem> */}
          {/* </Card> */}
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Review;

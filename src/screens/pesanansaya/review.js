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
          <Label style={{marginTop:30, color:"black", fontSize: 18, marginBottom:15, fontWeight:'bold'}}>Ulasan</Label>
              <Textarea rowSpan={10} style={{borderColor:"gray", borderWidth:1}} />
            <Button rounded style={styles.buttonBawah}>
              <Text style={{ color: "white", fontSize: 12}}>Simpan</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Review;

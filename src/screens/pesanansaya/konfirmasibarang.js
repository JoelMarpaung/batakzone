import React, { Component } from "react";
import { Image } from "react-native";
import {
  H3,
  Container,
  Content,
  Button,
  Card,
  CardItem,
  Text,
  Left,
  Body,
} from "native-base";
import styles from "./styles";
import { Row } from "react-native-easy-grid";
import Review from "./review";

const produk2 = require("../../../assets/produk2.jpg");

<<<<<<< HEAD
const data = {
  review: "Review"
};

class KonfirmasiBarang extends Component {

=======
class KonfirmasiBarang extends Component {
>>>>>>> bbf51cc72d13b204c7ab781aefb4fb81c56e2fd3
  render() {
    return (
      <Container>
        <Content padder>
          <Card style={styles.mt}>
            <H3 style={{ color: "#8E171B", marginLeft: 10, marginTop: 10, fontWeight: 'bold' }}>Toko Horas</H3>
            <CardItem cardBody>
              <Left>
                <Image
                  style={{
                    resizeMode: "cover",
                    width: 120,
                    height: 140,
                    marginLeft: 10,
                    marginTop: 20,
                    flexDirection: "row"
                  }}
                  source={produk2} />
                <Body>
                  <Text style={styles.text2}>Gaun Ulos</Text>
                </Body>
              </Left>
            </CardItem>
            <Row style={styles.row}>
              <Button onPress={() => this.props.navigate("RefundBarang")} 
              rounded style={styles.buttonKeranjang}>
                <Text style={{ color: "#8E171B", fontSize: 12 }}>Refund</Text>
              </Button>
              <Button rounded style={styles.buttonBottom}onPress={this.props.navigation.navigate(data.review)}>
                <Text style={{ color: "white", fontSize: 12 }}>Barang diterima</Text>
              </Button>
            </Row>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default KonfirmasiBarang;

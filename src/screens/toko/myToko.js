import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Body,
  Left,
  Right,
  Icon,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Grid,
  Col,
  Row,
  H3,
  Fab,
  Segment
} from "native-base";
import styles from "./styles";
const toko = require("../../../assets/toko.png");
const produk1 = require("../../../assets/produk1.jpg");
const produk2 = require("../../../assets/produk2.jpg");
const produk3 = require("../../../assets/produk3.jpg");

const data = {
  shop: "myToko",
  tambah: "AddProduk",
  informasi: "Informasi",
  edit:"#"
};

class myToko extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header hasSegment style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>BatakZone</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="search" />
            </Button>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="cart" />
            </Button>
          </Right>
        </Header>
        <Segment style={styles.header}>
          <Button first active>
            <Text style={styles.textMenu}>My Toko</Text>
          </Button>
          <Button last
            onPress={() => this.props.navigation.navigate(data.informasi)}>
            <Text>Informasi</Text>
          </Button>
        </Segment>
        <Content>
          <Card style={styles.card}>
            <Body>
              <CardItem style={styles.card}>
                <Left>
                  <Thumbnail source={toko} />
                  <Body>
                    <Text style={styles.title}>BatakZone Mall</Text>
                    <Text note style={styles.text}>jln.SM.Raja Institut Teknologi Del</Text>
                    <Text note style={styles.text}>Sitoluama, Laguboti 22381</Text>
                    <Text note style={styles.text}>082368725961</Text>
                  </Body>
                </Left>
              </CardItem>
            </Body>
          </Card>
          <Card>
            <Grid>
              <Row style={styles.produk}>
                <Col>
                  <Button transparent style={styles.produkButton}>
                    <Image style={styles.produkImage} source={produk1} />
                    <H3 style={{ fontSize: 15, fontWeight: "bold" }}>{"\n"}Rp. 300.000,00</H3>
                    <Text style={{ fontSize: 13, color: "black" }}>Batik Ulos</Text>
                    <Row>
                      <Button rounded small style={styles.card}
                        onPress={() => this.props.navigation.navigate(data.informasi)}>
                        <Text style={styles.textButtoon}>Edit</Text>
                      </Button>
                      <Button rounded small>
                        <Text style={styles.textButtoon}>Hapus</Text>
                      </Button>
                    </Row>
                  </Button>
                </Col>
                <Col>
                  <Button transparent style={styles.produkButton}>
                    <Image style={styles.produkImage} source={produk2} />
                    <H3 style={{ fontSize: 15, fontWeight: "bold" }}>{"\n"}Rp. 400.000,00</H3>
                    <Text style={{ fontSize: 13, color: "black" }}>Gaun Ulos</Text>
                    <Row>
                      <Button rounded small style={styles.card}>
                        <Text style={styles.textButtoon}>Edit</Text>
                      </Button>
                      <Button rounded small>
                        <Text style={styles.textButtoon}>Hapus</Text>
                      </Button>
                    </Row>
                  </Button>
                </Col>
                <Col>
                  <Button transparent style={styles.produkButton}>
                    <Image style={styles.produkImage} source={produk3} />
                    <H3 style={{ fontSize: 15, fontWeight: "bold" }}>{"\n"}Rp. 300.000,00</H3>
                    <Text style={{ fontSize: 12, color: "black" }}>Kemeja Ulos</Text>
                    <Row>
                      <Button rounded small style={styles.card}>
                        <Text style={styles.textButtoon}>Edit</Text>
                      </Button>
                      <Button rounded small>
                        <Text style={styles.textButtoon}>Hapus</Text>
                      </Button>
                    </Row>
                  </Button>
                </Col>
              </Row>
              <Row style={styles.produk}>
                <Col>
                  <Button transparent style={styles.produkButton}>
                    <Image style={styles.produkImage} source={produk1} />
                    <H3 style={{ fontSize: 15, fontWeight: "bold" }}>{"\n"}Rp. 300.000,00</H3>
                    <Text style={{ fontSize: 13, color: "black" }}>Batik Ulos</Text>
                    <Row>
                      <Button rounded small style={styles.card}>
                        <Text style={styles.textButtoon}>Edit</Text>
                      </Button>
                      <Button rounded small>
                        <Text style={styles.textButtoon}>Hapus</Text>
                      </Button>
                    </Row>
                  </Button>
                </Col>
                <Col>
                  <Button transparent style={styles.produkButton}>
                    <Image style={styles.produkImage} source={produk2} />
                    <H3 style={{ fontSize: 15, fontWeight: "bold" }}>{"\n"}Rp. 400.000,00</H3>
                    <Text style={{ fontSize: 13, color: "black" }}>Gaun Ulos</Text>
                    <Row>
                      <Button rounded small style={styles.card}>
                        <Text style={styles.textButtoon}>Edit</Text>
                      </Button>
                      <Button rounded small>
                        <Text style={styles.textButtoon}>Hapus</Text>
                      </Button>
                    </Row>
                  </Button>
                </Col>
                <Col>
                  <Button transparent style={styles.produkButton}>
                    <Image style={styles.produkImage} source={produk3} />
                    <H3 style={{ fontSize: 15, fontWeight: "bold" }}>{"\n"}Rp. 300.000,00</H3>
                    <Text style={{ fontSize: 12, color: "black" }}>Kemeja Ulos</Text>
                    <Row>
                      <Button rounded small style={styles.card}>
                        <Text style={styles.textButtoon}>Edit</Text>
                      </Button>
                      <Button rounded small>
                        <Text style={styles.textButtoon}>Hapus</Text>
                      </Button>
                    </Row>
                  </Button>
                </Col>
              </Row>
              <Row style={styles.produk}>
                <Col>
                  <Button transparent style={styles.produkButton}>
                    <Image style={styles.produkImage} source={produk1} />
                    <H3 style={{ fontSize: 15, fontWeight: "bold" }}>{"\n"}Rp. 300.000,00</H3>
                    <Text style={{ fontSize: 13, color: "black" }}>Batik Ulos</Text>
                    <Row>
                      <Button rounded small style={styles.card}>
                        <Text style={styles.textButtoon}>Edit</Text>
                      </Button>
                      <Button rounded small>
                        <Text style={styles.textButtoon}>Hapus</Text>
                      </Button>
                    </Row>
                  </Button>
                </Col>
                <Col>
                  <Button transparent style={styles.produkButton}>
                    <Image style={styles.produkImage} source={produk2} />
                    <H3 style={{ fontSize: 15, fontWeight: "bold" }}>{"\n"}Rp. 400.000,00</H3>
                    <Text style={{ fontSize: 13, color: "black" }}>Gaun Ulos</Text>
                    <Row>
                      <Button rounded small style={styles.card}>
                        <Text style={styles.textButtoon}>Edit</Text>
                      </Button>
                      <Button rounded small>
                        <Text style={styles.textButtoon}>Hapus</Text>
                      </Button>
                    </Row>
                  </Button>
                </Col>
                <Col>
                  <Button transparent style={styles.produkButton}>
                    <Image style={styles.produkImage} source={produk3} />
                    <H3 style={{ fontSize: 15, fontWeight: "bold" }}>{"\n"}Rp. 300.000,00</H3>
                    <Text style={{ fontSize: 12, color: "black" }}>Kemeja Ulos</Text>
                    <Row>
                      <Button rounded small style={styles.card}>
                        <Text style={styles.textButtoon}>Edit</Text>
                      </Button>
                      <Button rounded small>
                        <Text style={styles.textButtoon}>Hapus</Text>
                      </Button>
                    </Row>
                  </Button>
                </Col>
              </Row>
            </Grid>
          </Card>
        </Content>
        <Fab onPress={() => this.props.navigation.navigate(data.tambah)}
          style={styles.buttonText}>
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}

export default myToko;

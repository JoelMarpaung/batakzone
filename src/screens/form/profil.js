import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  Card,
  CardItem,
  Label,
  Thumbnail,
  Grid,
  Col,
  Row,
} from "native-base";
import styles from "./styles";
const toko = require("../../../assets/toko.png");
const profil = require("../../../assets/contacts/sanket.png");

const data = {
  shop: "#",
  edit: "#"
};
class Profile extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
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
        <Content>
          <Card>
            <Body>
              <Text style={styles.textTitle}>
                Profil
                </Text>
            </Body>
          </Card>
          <Card>
            <Grid>
              <Row>
                <Left>
                  <Text style={styles.textLabel}>
                    Data Diri
                </Text>
                </Left>
                <Body>

                </Body>
                <Col style={styles.col}
                  onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Icon ios="ios-create-" android="md-create" />
                </Col>
              </Row>
            </Grid>
            <CardItem>
              <Left>
                <Thumbnail source={profil} />
                <Body>
                  <Text style={styles.text}>Yonatan Parapat</Text>
                  <Text note style={styles.text}>Customer</Text>
                </Body>
              </Left>
            </CardItem>
            <Form>
              <Text style={styles.text}>Nomor Ponsel</Text>
              <Item>
                <Label>082368725961</Label>
              </Item>
              <Text style={styles.text}>Email</Text>
              <Item>
                <Label>batak.zone15@gmail.com</Label>
              </Item>
              <Text style={styles.text}>Jenis Kelamin</Text>
              <Item>
                <Label>Laki-Laki</Label>
              </Item>
              <Text style={styles.text}>Alamat</Text>
              <Item>
                <Label>Sitoluama, Laguboti</Label>
              </Item>
              <Text style={styles.text}>Tipe Akun</Text>
              <Item style={styles.label}>
                <Label>Premium</Label>
              </Item>
            </Form>
          </Card>
          <Card>
            <Text style={styles.textLabel}>Data Toko</Text>
            <CardItem button onPress={() => this.props.navigation.navigate(data.shop)}>
              <Left>
                <Thumbnail source={toko} />
                <Body>
                  <Text style={styles.text}>BatakZone Mall</Text>
                  <Text note style={styles.text}>jln.SM.Raja Institut Teknologi Del</Text>
                  <Text note style={styles.text}>Sitoluama, Laguboti 22381</Text>
                  <Text note style={styles.text}>082368725961</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}

export default Profile;
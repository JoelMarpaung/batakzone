import React, { Component } from "react";
import {Image} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  Card,
  
} from "native-base";
import styles from "./styles";
const Logo2 = require("../../../assets/Logo2.png");
const data={
  Daftar: "Login",
  Login: "Login",
};

class Register extends Component {
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
              <Image
                style={{
                  width: 135,
                  height: 175
                }}
                source={Logo2}
              />
            </Body>
            <Form>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Email"/>
              </Item>
              <Item>
                <Input placeholder="Password" secureTextEntry/>
              </Item>
              <Item last>
                <Input placeholder="Konfirmasi Password" secureTextEntry />
              </Item>
              <Button block style={{ backgroundColor: "#8E171B" }}
              onPress={() => this.props.navigation.navigate(data.Daftar)}>
                <Text>Daftar Akun</Text>
              </Button>
              <Body>
                <Text>Atau</Text>
              </Body>
              <Button block style={{ backgroundColor: "#8E171B" }}
              onPress={() => this.props.navigation.navigate(data.Login)}>
                <Text>Masuk Ke BatakZone</Text>
              </Button>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Register;

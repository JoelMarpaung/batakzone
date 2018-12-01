import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
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
const data = {
  register: "Register",
  lupaSandi: "Home",
  login: "Profile"
};

class Login extends Component {
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
              <Item last>
                <Input placeholder="Password" secureTextEntry />
              </Item>
              <Right>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(data.lupaSandi)}>
                  <Text style={styles.text}>Lupa Sandi?</Text>
                </TouchableOpacity>
              </Right>
              <Button onPress={() => this.props.navigation.navigate(data.login)}
                block style={{ backgroundColor: "#8E171B" }}>
                <Text>Masuk ke BatakZone</Text>
              </Button>
              <Body>
                <Text>Atau</Text>
              </Body>
              <Button onPress={() => this.props.navigation.navigate(data.register)}
                block style={{ backgroundColor: "#8E171B" }}>
                <Text>Daftar Akun</Text>
              </Button>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Login;

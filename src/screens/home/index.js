import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  H3,
  ListItem,
  List
} from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Home extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
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

        <Content>
        <H3>Welcome to BatakZone :D</H3>
        </Content>
      </Container>
    );
  }
}

export default Home;

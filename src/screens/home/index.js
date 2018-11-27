import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Input,
  Left,
  Right,
  Body,
  Text,
  H3,
  Item,
  Thumbnail,
  Card, 
  CardItem,
  ListItem,
  List
} from "native-base";
import { Image, Dimensions } from 'react-native';
import { Grid, Row } from "react-native-easy-grid";

import styles from "./styles";

// const homeDisc = require("../../../assets/home-disc.PNG");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");
const deviceWidth = Dimensions.get("window").width;
const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/home-disc.png");

class Home extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
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
            <Button transparent>
              <Icon active name="cart"/>
            </Button>
          </Right>
        </Header>
        <Header searchBar rounded style={styles.searchBar}>
          <Item style={{borderColor:"#000"}} rounded>
            <Input placeholder="Pencarian" />
            <Button transparent>
            <Icon active name="search" />
            </Button> 
          </Item>
          <Button transparent>
            <Text>Pencarian</Text>
          </Button>
        </Header>

        <Content>
        <Card style={styles.mb}>
            <CardItem>
              <Body>
                <Image
                  style={{
                    alignSelf: "center",
                    height: 200,
                    resizeMode: "cover",
                    width: deviceWidth / 1.18,
                    marginVertical: 5
                  }}
                  source={cardImage}
                />
              </Body>
            </CardItem>
          </Card>
            <Card>
            <Row style={styles.icon}>
              <CardItem style={styles.iconItem}>
                <Text></Text>
              </CardItem>
              <CardItem style={styles.iconItem}>
                <Text>2</Text>
              </CardItem>
              <CardItem style={styles.iconItem}>
                <Text>3</Text>
              </CardItem>
              <CardItem style={styles.iconItem}>
                <Text>4</Text>
              </CardItem>
              <CardItem style={styles.iconItem}>
                <Text>5</Text>
              </CardItem>
              </Row>
            </Card>
        </Content>
      </Container>
    );
  }
}

export default Home;

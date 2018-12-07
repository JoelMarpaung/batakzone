import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body,
  ScrollableTab
} from "native-base";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";
import TabFour from "./tabFour";
import TabFive from "./tabFive";

class BasicTab extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title> Scrollable Tabs</Title>
          </Body>
          <Right />
        </Header>

        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Menunggu Pembayaran">
            <TabOne />
          </Tab>
          <Tab heading="Dalam Perjalanan">
            <TabTwo />
          </Tab>
          <Tab heading="Konfirmasi Barang">
            <TabThree />
          </Tab>
          <Tab heading="Refund">
            <TabFour />
          </Tab>
          <Tab heading="Selesai">
            <TabFive />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default BasicTab;

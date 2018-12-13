import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Tab,
  Tabs,
  ScrollableTab,
  Segment,
  Text,
  TabHeading
} from "native-base";
import styles from "./styles";
import PesananBaru from "./pesananBaru";
import SiapDikirim from "./siapDikirim";
import SedangDikirim from "./sedangDikirim";
import SampaiTujuan from "./sampaiTujuan";
import Transaksi from "./transaksi";

const data = {
  shop: "myToko"
};

class Informasi extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
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
          <Button first
            onPress={() => this.props.navigation.navigate(data.shop)}>
            <Text >My Toko</Text>
          </Button>
          <Button last active>
            <Text style={styles.textMenu}>Informasi</Text>
          </Button>
        </Segment>
        <Tabs transparent renderTabBar={() => <ScrollableTab style={styles.header} />}>
          <Tab heading={
            <TabHeading style={{backgroundColor:"#8E171B"}}><Text style={{color:"#fff"}}>Pesanan Baru</Text></TabHeading>
          }>
            <PesananBaru style={styles.header} />
          </Tab>
          <Tab heading={
            <TabHeading style={{backgroundColor:"#8E171B"}}><Text style={{color:"#fff"}}>Siap Dikirim</Text></TabHeading>
          }>
            <SiapDikirim style={styles.header}/>
          </Tab>
          <Tab heading={
            <TabHeading style={{backgroundColor:"#8E171B"}}><Text style={{color:"#fff"}}>Sedang Dikirim</Text></TabHeading>
          }>
            <SedangDikirim style={styles.header}/>
          </Tab>
          <Tab heading={
            <TabHeading style={{backgroundColor:"#8E171B"}}><Text style={{color:"#fff"}}>Sampai Tujuan</Text></TabHeading>
          }>
            <SampaiTujuan style={styles.header}/>
          </Tab>
          <Tab heading={
            <TabHeading style={{backgroundColor:"#8E171B"}}><Text style={{color:"#fff"}}>Transaksi</Text></TabHeading>
          }>
            <Transaksi style={styles.header}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Informasi;

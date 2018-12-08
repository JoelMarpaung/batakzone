import React, { Component } from "react";
import { Image } from "react-native";
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import {
  H3,
  Container,
  Segment,
  ScrollableTab,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Tabs,
  Tab,
  Body,
  Right
} from "native-base";
import MenungguPembayaran from "./menunggupembayaran";
import KonfirmasiBarang from "./konfirmasibarang";
import PesananSaya1 from "./screeen2";
import Refund from "./refund";
import Selesai from "./selesai";
import Dibatalkan from "./dibatalkan";

import styles from "./styles";
import { black } from "ansi-colors";


const produk2 = require("../../../assets/produk2.jpg");
const produk4 = require("../../../assets/produk4.jpg");

export default class PesananSaya extends React.Component {
  
  render() {
    const {navigate} =this.props.navigation;
    return (
      <Container>
           <Header style={{backgroundColor: "#8E171B"}}>
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
              <Button transparent onPress={()=>this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="search"/>
              </Button>
              <Button transparent onPress={()=>this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="cart"/>
              </Button>
          </Right>
        </Header>

      <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Menunggu Pembayaran">
            <PesananSaya1 />
          </Tab>
          <Tab heading="Dalam Perjalanan">
            <MenungguPembayaran />
          </Tab>
          <Tab heading="Konfirmasi Barang">
            <KonfirmasiBarang />
          </Tab>
          <Tab heading="Refund">
            <Refund />
          </Tab>
          <Tab heading="Selesai">
            <Selesai />
          </Tab>
          <Tab heading="Pesanan Dibatalkan">
          <Dibatalkan />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
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
  Right,
  TabHeading
} from "native-base";
import MenungguPembayaran from "./menunggupembayaran";
import KonfirmasiBarang from "./konfirmasibarang";
import PesananSaya1 from "./screeen2";
import Refund from "./refund";
import Review from "./review";
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

      <Tabs transparent renderTabBar={() => <ScrollableTab/>}>
          <Tab heading={
              <TabHeading style={{backgroundColor:"#8E171B"}}><Text style={{color:"#fff"}}>Menunggu Pembayaran</Text></TabHeading>
          }>
          <PesananSaya1 />
          </Tab>
          <Tab heading={
              <TabHeading style={{backgroundColor:"#8E171B"}}><Text style={{color:"#fff"}}>Dalam Perjalanan</Text></TabHeading>
          }>
          <MenungguPembayaran />
          </Tab>
          <Tab heading={
              <TabHeading style={{backgroundColor:"#8E171B"}}><Text style={{color:"#fff"}}>Konfirmasi Barang</Text></TabHeading>
          }>
          <KonfirmasiBarang />
          </Tab>
          <Tab heading={
              <TabHeading style={{backgroundColor:"#8E171B"}}><Text style={{color:"#fff"}}>Refund</Text></TabHeading>
          }>
          <Refund />
          </Tab>
          <Tab heading={
              <TabHeading style={{backgroundColor:"#8E171B"}}><Text style={{color:"#fff"}}>Selesai</Text></TabHeading>
          }>
          <Selesai />
          </Tab>
          <Tab heading={
              <TabHeading style={{backgroundColor:"#8E171B"}}><Text style={{color:"#fff"}}>Pesanan Dibatalkan</Text></TabHeading>
          }>
          <Dibatalkan />
          </Tab>
          <Tab heading={
              <TabHeading style={{backgroundColor:"#8E171B"}}><Text style={{color:"#fff"}}>Review</Text></TabHeading>
          }>
          <Review />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
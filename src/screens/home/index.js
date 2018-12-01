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
  H2,
  Item,
  Badge,
  Thumbnail,
  Card, 
  CardItem,
  ListItem,
  List
} from "native-base";
import { Image, Dimensions } from 'react-native';
import { Grid, Row, Col } from "react-native-easy-grid";

import styles from "./styles";

const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");
const deviceWidth = Dimensions.get("window").width;
const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/home-disc.png");
const pakaian = require("../../../assets/pakaian.png");
const properti = require("../../../assets/properti.png");
const cendramata = require("../../../assets/cendramata.png");
const ukiran = require("../../../assets/ukiran.png");
const buku = require("../../../assets/buku.png");
const produk1 = require("../../../assets/produk1.jpg");
const produk2 = require("../../../assets/produk2.jpg");
const produk3 = require("../../../assets/produk3.jpg");
const produk4 = require("../../../assets/produk4.jpg");

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

        <Content padder>
        <Card style={styles.mt}>
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
            <Row style={styles.icon}>
            <Button transparent style={styles.iconButton}>
            <Image style={styles.iconImage} source={pakaian}/>
            <Text style={styles.iconText}>Pakaian</Text>
            </Button>
            <Button transparent style={styles.iconButton}>
            <Image style={styles.iconImage} source={cendramata}/>
            <Text style={styles.iconText}>Cenderamata</Text>
            </Button>
            <Button transparent style={styles.iconButton}>
            <Image style={styles.iconImage} source={ukiran}/>
            <Text style={styles.iconText}>Ukiran</Text>
            </Button>
            <Button transparent style={styles.iconButton}>
            <Image style={styles.iconImage} source={properti}/>
            <Text style={styles.iconText}>Properti</Text>
            </Button>
            <Button transparent style={styles.iconButton}>
            <Image style={styles.iconImage} source={buku}/>
            <Text style={styles.iconText}>Buku</Text>
            </Button>
              </Row>
            
            
            <Card style={styles.mt}>
            <Grid>
            <Row style={styles.mt}>
              <H2 style={{color:"#8E171B",marginLeft:5}}>Produk Terbaru</H2>
            </Row>
            <Row style={styles.produk}>
            <Col>
            <Button transparent style={styles.produkButton}>
              <Image style={styles.produkImage} source={produk1}/>
              <H3 style={{fontSize:19, fontWeight:"bold"}}>{"\n"}Rp. 300.000,00</H3>
              <Text style={{fontSize:13, color:"black"}}>Batik Ulos</Text>
              </Button>
            </Col>
            <Col>
            <Button transparent style={styles.produkButton}>
            <Image style={styles.produkImage} source={produk2}/>
            <H3 style={{fontSize:19, fontWeight:"bold"}}>{"\n"}Rp. 400.000,00</H3>
              <Text style={{fontSize:13, color:"black"}}>Gaun Ulos</Text>
              </Button>
            </Col>
            </Row>
            <Row style={styles.produk}>
            <Col>
            <Button transparent style={styles.produkButton}>
            <Image style={styles.produkImage} source={produk3}/>
            <H3 style={{fontSize:19, fontWeight:"bold"}}>{"\n"}Rp. 380.000,00</H3>
              <Text style={{fontSize:13, color:"black"}}>Kemeja Ulos</Text>
              </Button>
            </Col>
            <Col>
            <Button transparent style={styles.produkButton}>
            <Image style={styles.produkImage} source={produk4}/>
            <H3 style={{fontSize:19, fontWeight:"bold"}}>{"\n"}Rp. 390.000,00</H3>
              <Text style={{fontSize:13, color:"black"}}>Batik Ulos</Text>
              </Button>
            </Col>
            </Row>
            </Grid>
          </Card>

          <Card style={styles.mt}>
            <Grid>
            <Row style={styles.mt}>
              <H2 style={{color:"#8E171B",marginLeft:5}}>Diskon Promo</H2>
            </Row>
            <Row style={styles.produk}>
            <Col>
            <Button transparent style={styles.produkButton}>            
            <Badge
            style={{ backgroundColor: "white", borderColor:"#8E171B",borderWidth:2, alignSelf:"flex-end"}}>
            <Text style={{color:"#8E171B", fontSize:12}}>30 %</Text>
          </Badge>
              <Image style={styles.produkImage} source={produk1}/>
              <H3 style={{fontSize:19, fontWeight:"bold"}}>{"\n"}Rp. 300.000,00</H3>
              <Text style={{fontSize:13, color:"black"}}>Batik Ulos</Text>
              </Button>
            </Col>
            <Col>
            <Button transparent style={styles.produkButton}>
            <Badge
            style={{ backgroundColor: "white", borderColor:"#8E171B",borderWidth:2, alignSelf:"flex-end"}}>
            <Text style={{color:"#8E171B", fontSize:12}}>30 %</Text>
          </Badge>
            <Image style={styles.produkImage} source={produk2}/>
            <H3 style={{fontSize:19, fontWeight:"bold"}}>{"\n"}Rp. 400.000,00</H3>
              <Text style={{fontSize:13, color:"black"}}>Gaun Ulos</Text>
              </Button>
            </Col>
            </Row>
            <Row style={styles.produk}>
            <Col>
            <Button transparent style={styles.produkButton}>
            <Badge
            style={{ backgroundColor: "white", borderColor:"#8E171B",borderWidth:2, alignSelf:"flex-end"}}>
            <Text style={{color:"#8E171B", fontSize:12}}>40 %</Text>
          </Badge>
            <Image style={styles.produkImage} source={produk3}/>
            <H3 style={{fontSize:19, fontWeight:"bold"}}>{"\n"}Rp. 380.000,00</H3>
              <Text style={{fontSize:13, color:"black"}}>Kemeja Ulos</Text>
              </Button>
            </Col>
            <Col>
            <Button transparent style={styles.produkButton}>
            <Badge
            style={{ backgroundColor: "white", borderColor:"#8E171B",borderWidth:2, alignSelf:"flex-end"}}>
            <Text style={{color:"#8E171B", fontSize:12}}>60 %</Text>
          </Badge>
            <Image style={styles.produkImage} source={produk4}/>
            <H3 style={{fontSize:19, fontWeight:"bold"}}>{"\n"}Rp. 390.000,00</H3>
              <Text style={{fontSize:13, color:"black"}}>Batik Ulos</Text>
              </Button>
            </Col>
            </Row>
            </Grid>
          </Card>
          
          <Button rounded style={styles.buttonBottom}>
            <H3 style={{color:"white"}}>Lihat Produk Terbaru Lainnya</H3>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Home;

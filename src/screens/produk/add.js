import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Input,
  Form,
  Card,
  Text,
  CardItem,
  Label,
  Picker,
  Textarea,
  ListItem,
  Radio,
  H3 
} from "native-base";
import styles from "./styles";

class AddProduk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
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

        <Content padder>
          <Form>
            <Body>
              <Text style={styles.textTitle}>Info Produk</Text>
            </Body>
            <Card>
              <CardItem style={styles.card}>
                  <Icon name="camera" style={styles.iconImage} />
                  <Text style={styles.textImage}>Gambar Produk</Text>
              </CardItem>
            </Card>
            
            <Item stackedLabel>
              <Label>Nama Produk</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Kategori Produk</Label>
              <Item inlineLabel>
                <Picker
                  mode="dropdown"
                  iosHeader="Pilih kategori"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="Pakaian" value="key0" />
                  <Picker.Item label="Properti" value="key1" />
                  <Picker.Item label="Buku" value="key2" />
                  <Picker.Item label="Ukiran" value="key3" />
                  <Picker.Item label="Cendramata" value="key4" />
                </Picker>
              </Item>
            </Item>
            <Item inlineLabel>
              <Text>Stock</Text>
              <Card style={styles.inputNumeric}>
                <Input keyboardType="numeric" />
              </Card>
            </Item>
            <Item inlineLabel>
              <Text>Pemesanan minimum</Text>
              <Card style={styles.inputNumeric}>
                <Input keyboardType="numeric" />
              </Card>
            </Item>
            <Item stackedLabel>
              <Label>Harga</Label>
              <Item inlineLabel>
                <Text>Rp. </Text>
                <Input keyboardType="numeric" />
              </Item>
            </Item>
            <Item stackedLabel>
              <Label>Kondisi</Label>
              <Item inlineLabel>
                <Picker
                  mode="dropdown"
                  iosHeader="Pilih kategori"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="Baru" value="key0" />
                  <Picker.Item label="Bekas" value="key1" />
                </Picker>
              </Item>
            </Item>
            <Item stackedLabel>
              <Label>Deskripsi Produk</Label>
              <Textarea rowSpan={5} alignSelf="flex-start" />
            </Item>
            <Item stackedLabel>
              <Label>Makna Produk</Label>
              <Textarea rowSpan={5} alignSelf="flex-start" />
            </Item>
            <Item stackedLabel>
              <Label>Berat Produk</Label>
              <Item inlineLabel>
                <Input keyboardType="numeric" />
                <Picker
                  mode="dropdown"
                  iosHeader="Pilih kategori"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="Gram" value="key0" />
                  <Picker.Item label="Kg" value="key1" />
                </Picker>
              </Item>
            </Item>
            <Item inlineLabel>
              <Label>Asuransi Pengiriman</Label>
              <ListItem selected={true}>
                <Radio
                  color={"#8E171B"}
                  selectedColor={"#8E171B"}
                  selected={true}
                />
                <Text>Ya</Text>
              </ListItem>
              <ListItem selected={true}>
                <Radio
                  color={"#8E171B"}
                  selectedColor={"#8E171B"}
                />
                <Text>Tidak</Text>
              </ListItem>
            </Item>
          </Form>
          <Button rounded style={styles.buttonBottom}>
            <H3 style={{color:"white"}}>Tambah Produk</H3>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default AddProduk;  

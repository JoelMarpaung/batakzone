import React, { Component } from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Body,
    Left,
    Right,
    Icon,
    Image
  } from "native-base";
  import styles from "./styles";

// export default class Logo extends Component<{}> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Image style={{ width: 130, height: 155 }}
//                     source={require('../images/logo.png')} />
//                 {/* <Text style={styles.logoText}>Welcome to My app.</Text> */}
//             </View>
//         )
//     }
// }


class Logo extends Component {
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
                <Image style={{ width: 130, height: 155 }}
                    source={require('../images/logo.png')} />
                {/* <Text style={styles.logoText}>Welcome to My app.</Text> */}
          </Content>
        </Container>
      );
    }
  }
//   const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         justifyContent: 'flex-end',
//         alignItems: 'center'
//     },

//     logoText: {
//         marginVertical: 15,
//         fontSize: 18,
//         color: 'rgba(255, 255, 255, 0.7)'
//     }

// });
  export default Logo;
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Content, Header, Body, Icon, Title, Container } from 'native-base';

export default class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <View style={styles.body} >
        <Icon name="md-menu" onPress={() => this.props.navigate() } />
        <View style={styles.bodyContainer}>
          <Title>{this.props.title}</Title>
        </View>
        <Icon name="notifications"/>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  body: {
    marginTop: 24,
    backgroundColor: '#F9A423',
    alignSelf: "stretch",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  bodyContainer: {
    flex: 1,
  },
});

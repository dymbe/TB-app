import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Content } from 'native-base';

import CustomHeader from '../CustomHeader';


export default class DoorOpener extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Døråpner',
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <CustomHeader title={"Døråpner"} icon={"ios-arrow-back"} navigate={() => this.props.navigation.goBack(null)} />

        <View style={styles.content}>
          <Text>Døråpnersiden</Text>
        </View>
      </View>
    );
  }
}

//STYLES
const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

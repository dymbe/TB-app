import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Content } from 'native-base';

import CustomHeader from '../CustomHeader';


export default class Kortspill extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Kortspill',
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <CustomHeader title={"Kortspill"} icon={"ios-arrow-back"} navigate={() => this.props.navigation.goBack(null)} />

        <View style={styles.content}>
          <Text>Kortspillsiden</Text>
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

import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Content } from 'native-base';

import CustomHeader from '../CustomHeader';


export default class Turneringer extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Turneringer',
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <CustomHeader title={"Turneringer"} icon={"ios-arrow-back"} navigate={() => this.props.navigation.goBack(null)} />

        <View style={styles.content}>
          <Text>Turneringssiden</Text>
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

import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Content } from 'native-base';

import CustomHeader from '../CustomHeader';


export default class Calendar extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <CustomHeader title={"Teknobyen APP"} navigate={() => this.props.navigation.openDrawer()} />

        <View style={styles.content}>
          <View style={styles.calendar}>
            <Text>Kalender</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.blockLink}>
              <Text>Vaskelister</Text>
            </View>
            <View style={styles.blockLink}>
              <Text>Klesvask</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.blockLink}>
              <Text>Turneringer</Text>
            </View>
            <View style={styles.blockLink}>
              <Text>Kortspill</Text>
            </View>
          </View>
        </View>

      </View>
    );
  }
}

//STYLES
const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
  },
  blockLink: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 40,
    margin: 5,
  },
  calendar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 40,
    margin: 5,
  },
});

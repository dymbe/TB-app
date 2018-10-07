import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Content } from 'native-base';

export default class Kortspill extends React.Component {
  render() {
    return (
      <View style={styles.content}>

        <Text>Kortspill vises her</Text>

      </View>
    );
  }
}

//STYLES
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

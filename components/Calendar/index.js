import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Content } from 'native-base';

export default class Calendar extends React.Component {
  render() {
    return (
      <View style={styles.content}>

        <Text>TB-kalenderen vises her</Text>

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

import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator,} from 'react-native';
import { Content, Button } from 'native-base';


export default class Vaskelister extends React.Component {
  constructor(props) {
    super();
    this.state = {
      washingLists: [],
      isLoading: true,
    }
  }

  componentDidMount(){
    return fetch('http://192.168.1.50:8000/tb_app/vaskelister')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });

  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.dato}, {item.rom}</Text>}
          keyExtractor={({_id}, index) => _id}
        />
      </View>
    );
  }
}

/*
  getWashingLists() {
    get("localhost:8000/tb_app", function (response) {
      let washingLists = response;
      this.setState(({washingLists: this.state.washingLists}));
    });
  }
}
*/

//STYLES
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

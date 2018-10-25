import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Content, Icon, Button, List, ListItem } from 'native-base';

import CustomHeader from '../CustomHeader';


export default class Kortspill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        [['Joakim'], [5, 10, 8], [0]],
        [['Martin'], [3, 8, 2], [0]],
        [['Sølve'], [0, 12, 4], [0]],
      ],
    }
  }
  static navigationOptions = {
    drawerLabel: 'Kortspill',
    drawerIcon: (
      <Image source={ require('../../images/kortspill.png') } style={{width: 24, height: 24}}/>
    ),
  };

  componentWillMount(){
    var players = this.state.players;
    for (i = 0; i < players.length; i++) {
      var totalScore = 0;

      for (score = 0; score < players[i][1].length; score++) {
        totalScore += this.state.players[i][1][score]
      }

      players[i][2] = totalScore;
      this.setState({players: players});
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>

        <View style={styles.header}>
          <Text style={{fontSize: 20}}>Poengtavle</Text>
          <Button style={styles.closeBtn} onPress={() => this.props.navigation.goBack(null) } >
            <Icon style={{fontSize: 50, color: '#111'}}  name="ios-close" />
          </Button>
        </View>

        <View style={styles.content}>
          <List dataArray={this.state.players} style={styles.playersList}
            renderRow={(player) =>
            <ListItem>


              <View style={{flexDirection: 'row'}}>
                <Text>{player[0]}</Text>
                <Text>{player[2]}</Text>

              </View>

              <List dataArray={player[1]}
                horizontal={true}
                renderRow={(player) =>
                <ListItem>
                  <Text>{player}</Text>
                </ListItem>

                }>
              </List>

            </ListItem>
            }>
          </List>

        </View>
      </View>
    );
  }
}

//STYLES
const styles = StyleSheet.create({
  closeBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F9A423',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 14,
    right: 14,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    marginTop: 24,
    padding: 10
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  playersList: {
    alignSelf: 'stretch',
  },
  playerScores: {
    flexDirection: 'row',

  },
});

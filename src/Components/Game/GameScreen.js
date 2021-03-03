import React from "react";
import { View, Text, FlatList } from "react-native";

export default class GameScreen extends React.Component {
  state = {
    selectedModeName: "mime",
    gameModesList: [
      { name: "threeWords" },
      { name: "imitation" },
      { name: "sing" },
      { name: "mime" },
      { name: "description" }
    ],
    ArrayKeyWords: [
      {
        key: "monkey"
      },
      {
        key: "pirate"
      },
      {
        key: "Virgin"
      }
    ]
  };
  render() {
    return (
      <View>
        {this.state.gameModesList.map((item, index) => {
          return <Text key={index}>{item.name}</Text>;
        })}
        <Text>Text of key</Text>
      </View>
    );
  }
}

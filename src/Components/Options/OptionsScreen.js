import React from "react";
import { View, Text } from "react-native";

export default class OptionsScreen extends React.Component {
  state = {
    selectedModeName: "mime",
    gameModesList: [
      { name: "threeWords" },
      { name: "imitation" },
      { name: "sing" },
      { name: "mime" },
      { name: "description" }
    ]
  };
  render() {
    return (
      <View>
        {this.state.gameModesList.map((item, index) => {
          return <Text key={index}>{item.name}</Text>;
        })}
        <Text>Option yes yes</Text>
      </View>
    );
  }
}

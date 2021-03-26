import React from "react";
import { View, Text, Pressable } from "react-native";
import css from "../../../assets/CSS/stylesheet";
import * as ScreenOrientation from "expo-screen-orientation";
class ScoreScreen extends React.Component {
  state = {
    score: 0
  };

  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }

  render() {
    return (
      <View style={[css.mainPageBackground, css.blueBackground]}>
        <Text style={css.fontSizeTitle}>A winner is you</Text>
        <Text style={css.fontSizeTitle}>your score : {this.state.score}</Text>
        <Pressable
          style={css.buttonContainer}
          onPress={() => this.props.navigation.navigate("Main")}
        >
          <Text style={css.fontSizeTitle}>Return to home</Text>
        </Pressable>
      </View>
    );
  }
}

export default ScoreScreen;

import React from "react";
import { View, Text, Modal, Pressable, Image } from "react-native";
import css from "../assets/CSS/stylesheet";
import OptionsScreen from "./Components/Options/OptionsScreen";
import GameScreen from "./Components/Game/GameScreen";
import logo from "../assets/images/eikeLogo.png";
import * as ScreenOrientation from "expo-screen-orientation";

class MainPage extends React.Component {
  state = {
    user: {
      profil: "player",
      gameMode: "default",
      score: 0
    },
    SettingsmodalView: false,
    GameModalView: false
  };

  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }

  openSettingsModal = () => {
    this.setState({ SettingsmodalView: !this.state.SettingsmodalView });
  };

  openGameModal = () => {
    this.setState({ GameModalView: !this.state.GameModalView });
  };

  render() {
    return (
      <View style={[css.mainPageBackground, css.appBackground]}>
        <Image source={logo} style={css.logo} />
        <Pressable
          style={css.buttonContainer}
          onPress={() => this.props.navigation.navigate("Game")}
        >
          <Text style={css.fontSizeTitle}>Jouer</Text>
        </Pressable>
        <Modal visible={this.state.GameModalView}>
          <View style={{ marginTop: 50 }}>
            <Pressable onPress={this.openGameModal} style={css.appBackground}>
              <Text>X to close</Text>
            </Pressable>
          </View>
          <GameScreen />
        </Modal>

        {/* <Pressable style={css.buttonContainer} onPress={this.openSettingsModal}>
          <Text style={css.fontSizeTitle}>Option</Text>
        </Pressable> */}
        <Modal visible={this.state.SettingsmodalView}>
          <View style={{ marginTop: 50 }}>
            <Pressable onPress={this.openSettingsModal}>
              <Text>X to close</Text>
            </Pressable>
          </View>
          <OptionsScreen />
        </Modal>
      </View>
    );
  }
}
export default MainPage;

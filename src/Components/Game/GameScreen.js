import React from "react";
import { View, Text, Pressable } from "react-native";
import css from "../../../assets/CSS/stylesheet";
import * as ScreenOrientation from "expo-screen-orientation";

class GameScreen extends React.Component {
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
      { name: "VERRE" },
      { name: "CRAYON" },
      { name: "PAPIER" },
      { name: "STYLO" },
      { name: "LIVRE" },
      { name: "CAHIER" },
      { name: "THE" },
      { name: "CHOCOLAT" },
      { name: "PANTALON" },
      { name: "CAFE" },
      { name: "CUILLERE" },
      { name: "FOURCHETTE" },
      { name: "VESTE" },
      { name: "CHEMISE" },
      { name: "ECRAN" },
      { name: "SOURIS" },
      { name: "TELEPHONE" },
      { name: "ECOUTEUR" },
      { name: "BATTERIE" },
      { name: "MICRO" },
      { name: "CADRE" },
      { name: "RIDEAU" },
      { name: "FENETRE" },
      { name: "VOLET" },
      { name: "CHAISE" },
      { name: "TABLE" },
      { name: "BUREAU" },
      { name: "BLOC-NOTE" },
      { name: "POST-IT" },
      { name: "ENVELOPPE" },
      { name: "CARTE" },
      { name: "FLEUR" },
      { name: "ABAISSER" },
      { name: "ABAT-JOUR" },
      { name: "ABOLIR" },
      { name: "ABONNEMENT" },
      { name: "ABRI" },
      { name: "ACADEMIE" },
      { name: "AIR" },
      { name: "APPARTEMENT" },
      { name: "ARME" },
      { name: "ASTROLOGUE" },
      { name: "BAGUETTE" },
      { name: "BENIR" },
      { name: "BLUFFER" },
      { name: "BOUTIQUE" },
      { name: "BOYCOTT" },
      { name: "BROUETTE" },
      { name: "BUNKER" },
      { name: "BULLE" },
      { name: "BRULER" },
      { name: "BUTIN" },
      { name: "CACHETTE" },
      { name: "CAR" },
      { name: "CAMISOLE" },
      { name: "CARTE" },
      { name: "CHANCE" },
      { name: "CHARCUTIER" },
      { name: "CHIEN" },
      { name: "CITERNE" },
      { name: "CLOWN" },
      { name: "COQUILLAGE" },
      { name: "DEPASSER" },
      { name: "DERMATOLOGUE" },
      { name: "DIGERER" },
      { name: "DOCUMENTAIRE" },
      { name: "DRAGON" },
      { name: "DRAPEAU" },
      { name: "DYNAMITE" },
      { name: "DUCHESSE" },
      { name: "ECOLE" },
      { name: "ELECTRICITE" },
      { name: "EGOUT" },
      { name: "EGLISE" },
      { name: "ELEPHANT" },
      { name: "EMPREINTE" },
      { name: "ENTERRER" },
      { name: "EPONGE" },
      { name: "ESCALIER" },
      { name: "ETOUFFER" },
      { name: "FIGURINE" },
      { name: "FESSE" },
      { name: "FILLE" },
      { name: "FLAMBEAU" },
      { name: "FEU" },
      { name: "FONCTIONNAIRE" },
      { name: "FORCER" },
      { name: "FOULARD" },
      { name: "FORFAIT" },
      { name: "FLEURISTE" },
      { name: "GARAGE" },
      { name: "GOURDE" },
      { name: "GRATIN" },
      { name: "GUIRLANDE" },
      { name: "GRAISSE" },
      { name: "GUIDE" },
      { name: "GUITARE" },
      { name: "GYMNASTIQUE" },
      { name: "HALLUCINATION" },
      { name: "HARMONICA" },
      { name: "HANTER" },
      { name: "HARICOT" },
      { name: "HENIR" },
      { name: "HIBERNATION" },
      { name: "HIRONDELLE" },
      { name: "HOMME" },
      { name: "IGLOO" },
      { name: "ILLUSION" },
      { name: "IMAGINATION" },
      { name: "IMPLANT" },
      { name: "IMPOT" },
      { name: "IMPRIMANTE" },
      { name: "INDIEN" },
      { name: "INSULTER" },
      { name: "JAUNE" },
      { name: "JAGUAR" },
      { name: "JETER" },
      { name: "JOGGING" },
      { name: "JOUET" },
      { name: "JUDO" },
      { name: "JUMELLE" },
      { name: "JOURNALISTE" },
      { name: "KIWI" },
      { name: "KIMONO" },
      { name: "KALACHNIKOV" },
      { name: "KERMESSE" },
      { name: "KEVLAR" },
      { name: "KRAKEN" },
      { name: "KUNG-FU" },
      { name: "LABYRINTHE" },
      { name: "LAMPE" },
      { name: "LION" },
      { name: "LOI" },
      { name: "LETTRE" },
      { name: "LEZARD" },
      { name: "LINGE" },
      { name: "LOCOMOTIVE" },
      { name: "LUXE" },
      { name: "MAGICIEN" },
      { name: "MIROIR" },
      { name: "MAITRE" },
      { name: "MATELAT" },
      { name: "MACHETTE" },
      { name: "MONTRE" },
      { name: "MOUCHOIRE" },
      { name: "MAISON" },
      { name: "MANCHOT" },
      { name: "MARCHER" },
      { name: "NAITRE" },
      { name: "NOURRIR" },
      { name: "NEZ" },
      { name: "NERF" },
      { name: "NID" },
      { name: "NOTAIRE" },
      { name: "NOYAU" },
      { name: "NYMPHE" },
      { name: "OASIS" },
      { name: "OBUS" },
      { name: "OUBLIER" },
      { name: "OEIL" },
      { name: "OMBRE" },
      { name: "ORAGE" },
      { name: "ORANGE" },
      { name: "ORDINATEUR" },
      { name: "ORGANE" },
      { name: "OURS" },
      { name: "PAYSAN" },
      { name: "PRETRE" },
      { name: "PALAIS" },
      { name: "PIED" },
      { name: "POUTRE" },
      { name: "PERE" },
      { name: "PASTEQUE" },
      { name: "POMME" },
      { name: "PALMIER" },
      { name: "PROTEINE" },
      { name: "QUEUE" },
      { name: "QUEBEC" },
      { name: "QUICHE" },
      { name: "ROI" },
      { name: "RIGOLER" },
      { name: "RAME" },
      { name: "ROUTE" },
      { name: "RASOIR" },
      { name: "RATEAU" },
      { name: "REMBOURSER" },
      { name: "REUNION" },
      { name: "RESTAURANT" },
      { name: "RHUME" },
      { name: "SABLE" },
      { name: "SAGE" },
      { name: "SACRILEGE" },
      { name: "SAUCE" },
      { name: "SILHOUETTE" },
      { name: "SAPIN" },
      { name: "SENTIMENT" },
      { name: "SOLIDE" },
      { name: "SORTIE" },
      { name: "SATAN" },
      { name: "TAVERNE" },
      { name: "TIQUE" },
      { name: "TIBIA" },
      { name: "TORTUE" },
      { name: "TRAINEAU" },
      { name: "TROU" },
      { name: "TUNNEL" },
      { name: "TURQUIE" },
      { name: "TYRAN" },
      { name: "UNICORNE" },
      { name: "UNIFORME" },
      { name: "UNIVERSITE" },
      { name: "URINOIR" },
      { name: "USINE" },
      { name: "VOITURE" },
      { name: "VELO" },
      { name: "VOLEUR" },
      { name: "VITRE" },
      { name: "VENTRILOQUE" },
      { name: "VAGABOND" },
      { name: "VANILLE" },
      { name: "VENDRE" },
      { name: "VER SOLITAIRE" },
      { name: "VOMIR" },
      { name: "WAGON" },
      { name: "WASABI" },
      { name: "WEBCAM" },
      { name: "WHISKY" },
      { name: "XYLOPHONE" },
      { name: "YACHT" },
      { name: "YAKITORI" },
      { name: "YAOURT" },
      { name: "YOGA" },
      { name: "YOYO" },
      { name: "ZEBRE" },
      { name: "ZESTE" },
      { name: "ZOO" },
      { name: "ZONE" }
    ],
    currentWord: "temp",
    currentWordIndex: 0,
    points: 0,
    showTimer: true,
    gameStart: false,
    gameEnd: false,
    timerGameStart: 3,
    timeLimit: 60
  };

  componentDidMount() {
    this.timerCountDown();
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
    clearInterval(this.timeLeftInterval);
  }

  timerCountDown = () => {
    this.myInterval = setInterval(() => {
      if (this.state.timerGameStart > 0) {
        this.setState(({ timerGameStart }) => ({
          timerGameStart: timerGameStart - 1
        }));
      }
      if (this.state.timerGameStart === 0) {
        clearInterval(this.myInterval);
        this.setState({ gameStart: true, showTimer: false });
        this.selectRandomWord();
        this.timeLeft();
      }
    }, 500);
  };
  timeLeft = () => {
    this.timeLeftInterval = setInterval(() => {
      if (this.state.timeLimit > 0) {
        this.setState(({ timeLimit }) => ({
          timeLimit: timeLimit - 1
        }));
      }
      if (this.state.timeLimit === 0) {
        clearInterval(this.timeLeftInterval);
        this.props.navigation.navigate("Main");
      }
    }, 1000);
  };
  currentWord = () => {
    if (this.state.gameStart === true) {
      return (
        <View>
          <Text>{this.state.currentWord}</Text>
        </View>
      );
    }
  };

  deleteCurrentWordFromArray = () => {
    this.state.ArrayKeyWords.splice(this.state.currentWordIndex, 1);
  };
  showTimer = () => {
    if (this.state.showTimer === true) {
      return (
        <View>
          <Text>{this.state.timerGameStart}</Text>
        </View>
      );
    }
  };

  selectRandomWord = () => {
    const random = Math.floor(Math.random() * this.state.ArrayKeyWords.length);
    this.setState({
      currentWord: this.state.ArrayKeyWords[random].name,
      currentWordIndex: random
    });
  };
  skipWord = () => {
    this.deleteCurrentWordFromArray();
    this.selectRandomWord();
  };
  getPoint = () => {
    this.deleteCurrentWordFromArray();
    this.selectRandomWord();
    this.setState(({ points }) => ({
      points: points + 1
    }));
  };

  render() {
    return (
      <View style={[css.mainPageBackground, css.blueBackground]}>
        <Text>{this.state.timeLimit}</Text>
        {this.showTimer()}
        {this.currentWord()}
        {this.state.gameEnd === false ? (
          <Pressable>
            <Text
              style={css.fontSizeTitle}
              onPress={() => this.props.navigation.navigate("Main")}
            >
              Go to main screen
            </Text>
          </Pressable>
        ) : null}
        <Pressable>
          <Text style={css.fontSizeTitle} onPress={() => this.skipWord()}>
            Skip
          </Text>
        </Pressable>
        <Pressable>
          <Text style={css.fontSizeTitle} onPress={() => this.getPoint()}>
            getPoint
          </Text>
        </Pressable>
      </View>
    );
  }
}
export default GameScreen;

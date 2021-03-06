import * as React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';

const image = require('./images/hatter.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  priceContainer: {
    flex: 3,
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#dabb68',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,.8)',
    fontSize: 20,
  },
  priceText: {
    flex: 1,
    color: '#dabb68',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,.8)',
    fontSize: 20,
  },
  descriptionText: {
    flex: 1,
    marginTop: 160,
    marginBottom: 160,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'goldenrod',
    padding: 20,
    fontSize: 20,
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'goldenrod',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  buttonBackground: {
    elevation: 8,
    backgroundColor: 'rgba(0,0,0,.8)',
    marginBottom: 30,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 300,
  },
  skilledButtonBackground: {
    elevation: 8,
    backgroundColor: 'rgba(0,0,0,.8)',
    marginBottom: 30,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  teemoImage: {
    marginLeft: 50,
    marginBottom: 0,
    alignItems: 'center',
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 140,
    opacity: 50,
    selectionColor: 'blue',
  },
  skillButtons: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    //marginTop: 140,
    opacity: 50,
    selectionColor: 'blue',
    width: 1050,
  },
  head: { height: 40 },
  tableText: { textAlign: 'center', color: '#dabb68' },
  wrapper: { flexDirection: 'row' },
  tableTitle: { flex: 1 },
  row: { height: 28 },
  border: { backgroundColor: 'rgba(0,0,0,.8)' },
});

function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.buttonBackground}
              onPress={() => navigation.navigate('Game')}>
              <Text style={styles.buttonText}>PLAY THE GAME</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonBackground}
              onPress={() => navigation.navigate('Upgrades')}>
              <Text style={styles.buttonText}>USE UPGRADES</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonBackground}
              onPress={() => navigation.navigate('Description')}>
              <Text style={styles.buttonText}>DESCRIPTION</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonBackground}
              onPress={() => navigation.navigate('EXIT THE GAME')}>
              <Text style={styles.buttonText}>EXIT THE GAME</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function GameScreen() {
  return (
    <ScrollView>
      <View>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 42,
              color: 'goldenrod',
              backgroundColor: 'rgba(0,0,0,.8)',
            }}>
            Teemo
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 32,
              color: 'goldenrod',
              backgroundColor: 'rgba(0,0,0,.8)',
            }}>
            Lv. 18 2200/4000
          </Text>
          <Image
            style={styles.teemoImage}
            source={require('./images/teemo.png')}
          />
          <View style={styles.skillButtons}>
            <TouchableOpacity
              style={styles.skilledButtonBackground}
              onPress={() => navigation.navigate('Game')}>
              <Text style={styles.buttonText}>Q</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.skilledButtonBackground}
              onPress={() => navigation.navigate('Upgrades')}>
              <Text style={styles.buttonText}>W</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.skilledButtonBackground}
              onPress={() => navigation.navigate('Description')}>
              <Text style={styles.buttonText}>E</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.skilledButtonBackground}
              onPress={() => navigation.navigate('EXIT THE GAME')}>
              <Text style={styles.buttonText}>R</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

function UpgradesScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>
            &emsp;Olyan kikapcsol??d??st szeretn??k k??n??lni, amelyben m??gis ??rz??dik
            fejl??d??s, halad??s; ??s ez adn?? a tov??bbi motiv??ci??t a tanulm??nyok
            folytat??s??hoz. Sz??momra nem a korszakok hat??rozz??k meg a zene
            min??s??g??t, hanem a m??v??szi tartalom. Hiszem, hogy a maga
            vonatkoz??s??ban egy Webber musical fel??rhet egy Puccini oper??hoz;
            ahogy Mozart j??t??koss??g??t a Queen sz??mokban is megtal??lhatjuk. Az
            ??nekl??s, egy ??nismereti m??faj, hiszen a test??nk a hangszer??nk.
            ??veken kereszt??l csiszoljuk, tisztogatjuk, fejlesztj??k, hogy egyre
            kifinomultabb technikai tud??snak legy??nk birtokosai. Pavarotti is
            h??t ??vig feln??ttk??nt tanulta az ??nektechnik??t, ehhez k??pest micsoda
            munk??t ig??nyel egy m??g fejl??d??sben l??v?? szervezet kimunk??l??sa. Az a
            legnagyobb el??nye a mag??n??nek (vagy b??rmilyen m??s hangszer)
            oktat??s??nak, hogy mint a neve is hordozza: ezek priv??t ??r??k. Teh??t
            megtehetem azt a luxust, hogy tanul??nk??nt mindig m??s fontoss??gi
            sorrendet helyezek magam el??. Hi??ba akar egy k??nny??zenei ballad??t,
            vagy kifejezetten neh??z, technik??s sz??mokat el??nekelni, ha a
            be??nekelt hangtartom??nya m??g alig ??lel fel egy okt??vot. Ez??rt olyan
            gyakorlatokat ??s reperto??rt ??ll??tok fel, ami a tan??tv??nyomat a
            c??ljai megval??s??t??s??hoz vezeti el. Megl??t??som szerint tan??rk??nt
            nyitottabbnak, befogad??bbnak kell lenn??nk m??g tan??tv??nyainkn??l is.
            Egy ??ra vagy tan??t sor??n a n??vend??k a fontos, ??s ??n ???csak??? az??rt
            vagyok mellette, hogy az ??ltala ??? ha nem is tudatosan - kiv??lasztott
            ??ton k??s??rjem. Ez az ??n val??di k??ldet??sem.
          </Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

function DescriptionScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView>
          <Text style={styles.descriptionText}>
            &emsp;In this game, you must defeat your enemies! {'\n'}{' '}
            &emsp;Opponents drop you gold or gear to have better chanches to
            kill tougher enemies.
            {'\n'}&emsp; In the beginning of the game you have to choose your
            champion, then you will receive an opponent. During the fights you
            can use basic attacks and special skills, which are either damaging
            or crowd control abilities.
          </Text>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const CONTENT = {
  tableHead: ['??r??k', 'Egy??ni', 'Csoportos'],
  tableTitle: [
    '5x60 perc',
    '5x90 perc',
    '10x60 perc',
    '10x90 perc',
    '20x60 perc',
    '20x90 perc',
  ],
  tableData: [
    ['16 000 Ft', '12 000 Ft/f??'],
    ['23 500 Ft', '17 500 Ft/f??'],
    ['27 000 Ft', '20 000 Ft/f??'],
    ['39 000 Ft', '29 000 Ft/f??'],
    ['45 000 Ft', ''],
    ['64 000 Ft', ''],
  ],
};

function PriceScreen() {
  return (
    /*<View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>
          ??rlista 60 perc 90 perc 5x60 perces b??rlet Egy??ni 4.000ft 6.000ft
          16.000ft Csoportos 3.000ft 4.500ft 12.000ft
        </Text>
      </ImageBackground>
    </View>*/
    <View style={styles.priceContainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView>
          <Text style={styles.priceText}>
            &emsp;Az egy??ni ??r??k d??jaz??s??ban 60- ??s 90 perces verzi??kat
            k??l??nb??ztetek meg. Az el??bbire 4000 Ft, az ut??bbira 6000 Ft
            honor??riumot sz??molok fel. Amennyiben egy ??r??ra t??bben jelentkeznek,
            azaz kifejezetten duettben, tercettben, vagy ???a capella???
            egy??ttesk??nt ??nekeln??nek, ??gy a 60 perces ??ra ??ra 3000 Ft, a 90-??
            4500 Ft lesz egy??nenk??nt. Lehet??s??g lesz n??lam b??rlet d??jfizet??s??re:{' '}
            {'\n'} {'\n'}
            B??rlet ??rlista:
          </Text>
          <Table
            borderStyle={{ borderWidth: 3, borderColor: '#dabb68' }}
            style={styles.border}>
            <Row
              data={CONTENT.tableHead}
              flexArr={[1, 2, 2]}
              style={styles.head}
              textStyle={styles.tableText}
            />
            <TableWrapper style={styles.wrapper}>
              <Col
                data={CONTENT.tableTitle}
                style={styles.tableTitle}
                heightArr={[28, 28]}
                textStyle={styles.tableText}
              />
              <Rows
                data={CONTENT.tableData}
                flexArr={[2, 2]}
                style={styles.row}
                textStyle={styles.tableText}
              />
            </TableWrapper>
          </Table>
          <Text style={styles.priceText}>
            &emsp;Ezek az ??sszegek 10 km-n??l t??volabbi kisz??ll??s ??s
            t??ljelentkez??s eset??n emelkednek. Az ??ltalam 2021 m??sodik fel??ben
            ind??tott k??rus heti gyakoris??g?? 90 perces foglalkoz??s lesz, melynek
            jelk??pes ??sszege havi 1000Ft lesz.
          </Text>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Game"
          options={{
            title: 'Game',
            headerStyle: {
              backgroundColor: 'rgba(0,0,0,.8)',
            },
            headerTintColor: 'goldenrod',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={GameScreen}
        />
        <Stack.Screen
          name="Upgrades"
          options={{
            title: 'Upgrades',
            headerStyle: {
              backgroundColor: '#dabb68',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={UpgradesScreen}
        />
        <Stack.Screen
          name="Description"
          options={{
            title: 'Description',
            headerStyle: {
              backgroundColor: 'rgba(0,0,0,.8)',
            },
            headerTintColor: 'goldenrod',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={DescriptionScreen}
        />
        <Stack.Screen
          name="??rlista"
          options={{
            title: '??rlista',
            headerStyle: {
              backgroundColor: '#dabb68',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={PriceScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
  },
  buttonBackground: {
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
  head: {height: 40},
  tableText: {textAlign: 'center', color: '#dabb68'},
  wrapper: {flexDirection: 'row'},
  tableTitle: {flex: 1},
  row: {height: 28},
  border: {backgroundColor: 'rgba(0,0,0,.8)'},
});

function MenuScreen({navigation}) {
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
          <Image
            style={styles.teemoImage}
            source={require('./images/teemo.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 42,
              color: 'goldenrod',
              backgroundColor: 'rgba(0,0,0,.8)',
            }}>
            Teemo
          </Text>
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
            &emsp;Olyan kikapcsolódást szeretnék kínálni, amelyben mégis érződik
            fejlődés, haladás; és ez adná a további motivációt a tanulmányok
            folytatásához. Számomra nem a korszakok határozzák meg a zene
            minőségét, hanem a művészi tartalom. Hiszem, hogy a maga
            vonatkozásában egy Webber musical felérhet egy Puccini operához;
            ahogy Mozart játékosságát a Queen számokban is megtalálhatjuk. Az
            éneklés, egy önismereti műfaj, hiszen a testünk a hangszerünk.
            Éveken keresztül csiszoljuk, tisztogatjuk, fejlesztjük, hogy egyre
            kifinomultabb technikai tudásnak legyünk birtokosai. Pavarotti is
            hét évig felnőttként tanulta az énektechnikát, ehhez képest micsoda
            munkát igényel egy még fejlődésben lévő szervezet kimunkálása. Az a
            legnagyobb előnye a magánének (vagy bármilyen más hangszer)
            oktatásának, hogy mint a neve is hordozza: ezek privát órák. Tehát
            megtehetem azt a luxust, hogy tanulónként mindig más fontossági
            sorrendet helyezek magam elé. Hiába akar egy könnyűzenei balladát,
            vagy kifejezetten nehéz, technikás számokat elénekelni, ha a
            beénekelt hangtartománya még alig ölel fel egy oktávot. Ezért olyan
            gyakorlatokat és repertoárt állítok fel, ami a tanítványomat a
            céljai megvalósításához vezeti el. Meglátásom szerint tanárként
            nyitottabbnak, befogadóbbnak kell lennünk még tanítványainknál is.
            Egy óra vagy tanút során a növendék a fontos, és én „csak” azért
            vagyok mellette, hogy az általa – ha nem is tudatosan - kiválasztott
            úton kísérjem. Ez az én valódi küldetésem.
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
  tableHead: ['Órák', 'Egyéni', 'Csoportos'],
  tableTitle: [
    '5x60 perc',
    '5x90 perc',
    '10x60 perc',
    '10x90 perc',
    '20x60 perc',
    '20x90 perc',
  ],
  tableData: [
    ['16 000 Ft', '12 000 Ft/fő'],
    ['23 500 Ft', '17 500 Ft/fő'],
    ['27 000 Ft', '20 000 Ft/fő'],
    ['39 000 Ft', '29 000 Ft/fő'],
    ['45 000 Ft', ''],
    ['64 000 Ft', ''],
  ],
};

function PriceScreen() {
  return (
    /*<View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>
          Árlista 60 perc 90 perc 5x60 perces bérlet Egyéni 4.000ft 6.000ft
          16.000ft Csoportos 3.000ft 4.500ft 12.000ft
        </Text>
      </ImageBackground>
    </View>*/
    <View style={styles.priceContainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView>
          <Text style={styles.priceText}>
            &emsp;Az egyéni órák díjazásában 60- és 90 perces verziókat
            különböztetek meg. Az előbbire 4000 Ft, az utóbbira 6000 Ft
            honoráriumot számolok fel. Amennyiben egy órára többen jelentkeznek,
            azaz kifejezetten duettben, tercettben, vagy „a capella”
            együttesként énekelnének, így a 60 perces óra ára 3000 Ft, a 90-é
            4500 Ft lesz egyénenként. Lehetőség lesz nálam bérlet díjfizetésére:{' '}
            {'\n'} {'\n'}
            Bérlet árlista:
          </Text>
          <Table
            borderStyle={{borderWidth: 3, borderColor: '#dabb68'}}
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
            &emsp;Ezek az összegek 10 km-nél távolabbi kiszállás és
            túljelentkezés esetén emelkednek. Az általam 2021 második felében
            indított kórus heti gyakoriságú 90 perces foglalkozás lesz, melynek
            jelképes összege havi 1000Ft lesz.
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
          name="Árlista"
          options={{
            title: 'Árlista',
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

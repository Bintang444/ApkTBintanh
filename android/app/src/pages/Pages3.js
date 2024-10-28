import { View, Text, Image, StyleSheet } from 'react-native';

import simbol from '../image/tandabawah.png';
import potologo from '../image/image1.jpg';
import suasanlogo from '../image/groupctt.png';
import potologotambah from '../image/group3.png';
import group2 from '../image/Group2.png';
import postIC from '../image/PostsIcon.png';
import reelsIG from '../image/ReelsIG.png';
import vectorP from '../image/Vector.png';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={simbol}
        style={{
          width: 10,
          height: 7,
          position: 'absolute',
          top: 53,
          right: 130,
        }}
      />
      <Image
        source={potologo}
        style={{
          width: 110,
          height: 110,
          borderRadius: 100,
          position: 'absolute',
          bottom: 565,
          right: 235,
        }}
      />
      <Image
        source={suasanlogo}
        style={{
          width: 84,
          height: 63,
          borderRadius: 10,
          position: 'absolute',
          top: 65,
          right: 250,
        }}
      />
      <Image
        source={potologotambah}
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          position: 'absolute',
          top: 170,
          right: 240,
        }}
      />
      <Image
        source={group2}
        style={{
          width: 22,
          height: 16,
          // borderRadius: 5,
          position: 'absolute',
          top: 267,
          right: 14,
          // backgroundColor: '#D9D9D9',
          alignItems: 'center',
          zIndex: 2,
        }}
      />
      <Image
        source={postIC}
        style={{
          width: 30,
          height: 30,
          position: 'absolute',
          top: 310,
          right: 285,
        }}
      />
      <Image
        source={reelsIG}
        style={{
          width: 50,
          height: 50,
          position: 'absolute',
          top: 300,
          right: 155,
        }}
      />
      <Image
        source={vectorP}
        style={{
          width: 40,
          height: 40,
          position: 'absolute',
          top: 305,
          right: 35,
        }}
      />

      <Text style={styles.namaig}>ilovetheprophetmuhammad</Text>
      <Text style={styles.lingkaran}>5</Text>
      <Text style={styles.namasuasana}>Suasana</Text>
      <Text style={styles.namasuasana1}>Saat Ini?</Text>

      <Text style={styles.nama}>Maulidur Rasul</Text>

      <Text style={styles.Post}>0</Text>
      <Text style={styles.Pengikut}> 1.1K </Text>
      <Text style={styles.Mengikuti}> 100 </Text>

      <Text style={styles.bio}>Aku Cinta Rasulullah</Text>

      <Text style={styles.PP1}>Postingan</Text>
      <Text style={styles.PP2}>Pengikut</Text>
      <Text style={styles.PP3}>Mengikuti</Text>

      <View style={styles.tombol}>
        <Text style={styles.teksTombol}>Edit Profil</Text>
      </View>
      <View style={styles.tombo2}>
        <Text style={styles.teksTombo2}>Bagikan Profil</Text>
      </View>
      <View style={styles.tombo3}>
        <View style={styles.boxtombo3}></View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box4} />
        <View style={styles.box5} />
        <View style={styles.box6} />
        <View style={styles.box7} />
        <View style={styles.box8} />
        <View style={styles.box9} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  
  lingkaran: {
    width: 6,
    height: 6,
    backgroundColor: 'red',
    borderRadius: 50,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
    position: 'absolute',
    right: 118,
    top: 53,
  },
  namaig: {
    position: 'absolute',
    top: 45,
    left: 20,
    fontSize: 19,
    fontWeight: '900',
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  namasuasana: {
    position: 'absolute',
    top: 75,
    left: 40,
    fontSize: 15,
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  namasuasana1: {
    position: 'absolute',
    top: 90,
    left: 40,
    fontSize: 15,
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  nama: {
    position: 'absolute',
    top: 215,
    left: 20,
    fontSize: 15,
    fontWeight: '900',
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  Post: {
    position: 'absolute',
    top: 115,
    left: 168,
    fontSize: 24,
    fontWeight: '900',
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  Mengikuti: {
    position: 'absolute',
    top: 115,
    left: 293,
    fontSize: 24,
    fontWeight: '900',
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  Pengikut: {
    position: 'absolute',
    top: 115,
    left: 217,
    fontSize: 24,
    fontWeight: '900',
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  bio: {
    position: 'absolute',
    top: 232,
    left: 20,
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },

  PP1: {
    position: 'absolute',
    top: 140,
    left: 150,
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  PP2: {
    position: 'absolute',
    top: 140,
    left: 220,
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  PP3: {
    position: 'absolute',
    top: 140,
    left: 290,
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },

  tombol: {
    width: '43%',
    padding: 8,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    top: 260,
    left: 5,
  },

  teksTombol: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
  },
  tombo2: {
    width: '40%',
    padding: 8,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    top: 260,
    left: 170,
  },
  boxtombo3: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#D9D9D9',
    position: 'absolute',
    top: 152,
    left: 140,
    zIndex: 1,
  },
  teksTombo2: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 200,
    left: 1,
    top: 50,
  },
  box1: {
    width: 119,
    height: 119,
    backgroundColor: '#FF0000',
    marginRight: 1,
    marginBottom: 1,
  },
  box2: {
    width: 119,
    height: 119,
    backgroundColor: '#FFA500',
    marginRight: 1,
  },
  box3: {
    width: 119,
    height: 119,
    backgroundColor: '#FFFF00',
    marginRight: 1,
  },
  box4: {
    width: 119,
    height: 119,
    backgroundColor: '#ADFF2F',
    marginRight: 1,
    marginBottom: 1,
  },
  box5: {
    width: 119,
    height: 119,
    backgroundColor: '#00FF00',
    marginRight: 1,
  },
  box6: {
    width: 119,
    height: 119,
    backgroundColor: '#32CD32',
    marginRight: 1,
  },
  box7: {
    width: 119,
    height: 119,
    backgroundColor: '#00FFFF',
    marginRight: 1,
    marginBottom: 1,
  },
  box8: {
    width: 119,
    height: 119,
    backgroundColor: '#0000FF',
    marginRight: 1,
  },
  box9: {
    width: 119,
    height: 119,
    backgroundColor: '#00008B',
    marginRight: 1,
  },
});

export default App;
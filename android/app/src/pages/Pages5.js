import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

import image1 from '../image/proftt.jpeg'
import addic from '../image/Addic.png'
import book from '../image/Bookmark.png'
import tb from '../image/Tab.png'
import ht from '../image/heart.png'
import dino from '../image/dinosz.jpeg'
import dino2 from '../image/dinosz2.jpeg'
import dino3 from '../image/dinosz3.jpeg'
import pic4 from '../image/pic4.png'
import navh from '../image/Home.png'
import navd from '../image/Discover.png'
import navb from '../image/Buttonsha.png'
import navi from '../image/Inbox.png'
import navm from '../image/Me.png'
import bub from '../image/Bubble.png'

const App = () => {
  return (
    <View style={styles.container}>
    <Image
        source={addic}
        style={{
          width: 25,
          height: 22,
          position: 'absolute',
          top: 55,
          left: 35,
          zIndex: 1,
        }}
      />
    <Image
        source={image1}
        style={{
          width: 80,
          height: 80,
          borderRadius: 100,
          position: 'absolute',
          top: 80,
          left: 170,
          zIndex: 1,
        }}
      />
    <Image
        source={book}
        style={{
          width: 22,
          height: 26,
          position: 'absolute',
          top: 253,
          right: 120,
          zIndex: 1,
        }}
      />
    <Image
        source={tb}
        style={{
          width: 48,
          height: 28,
          position: 'absolute',
          top: 340,
          left: 100,
          zIndex: 1,
        }}
      />
    <Image
        source={ht}
        style={{
          width: 28,
          height: 25,
          position: 'absolute',
          top: 337,
          right: 100,
          zIndex: 1,
        }}
      />
    <Image
        source={navh}
        style={{
          width: 28,
          height: 37,
          position: 'absolute',
          bottom: 15,
          left: 30,
          zIndex: 1,
        }}
      />
    <Image
        source={navd}
        style={{
          width: 28,
          height: 37,
          position: 'absolute',
          bottom: 15,
          left: 110,
          zIndex: 1,
        }}
      />
    <Image
        source={navb}
        style={{
          width: 40,
          height: 30,
          position: 'absolute',
          bottom: 23,
          left: 190,
          zIndex: 1,
        }}
      />
    <Image
        source={navi}
        style={{
          width: 25,
          height: 36,
          position: 'absolute',
          bottom: 15,
          left: 280,
          zIndex: 1,
        }}
      />
    <Image
        source={navm}
        style={{
          width: 18,
          height: 37,
          position: 'absolute',
          bottom: 15,
          left: 365,
          zIndex: 1,
        }}
      />
    <Image
        source={bub}
        style={{
          width: 130,
          height: 98,
          position: 'absolute',
          bottom: 55,
          left: 145,
          zIndex: 1,
        }}
      />
      <View style={styles.boxPG} />
      <Text style={styles.nama}>BINTANG ▼</Text>
      <Text style={styles.dot}>...</Text>
      <Text style={styles.nama2}>@bintangg_18</Text>
      <Text style={styles.Post}>278</Text>
      <Text style={styles.Pengikut}>419</Text>
      <Text style={styles.Foll}>26</Text>

      <Text style={styles.PP1}>Following</Text>
      <Text style={styles.PP2}>Followers</Text>
      <Text style={styles.PP3}>Likes</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={styles.button2}>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity>
          <Text style={styles.buttonText2}>Tap to add bio</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.boxContainer}>
        <Image source={dino} style={styles.box1} />
        <Image source={dino2} style={styles.box2} />
        <Image source={dino3} style={styles.box3} />
        <Image source={pic4} style={styles.box4} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
  },
  nama: {
    position: 'absolute',
    top: 55,
    left: 175,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  nama2: {
    position: 'absolute',
    top: 160,
    left: 165,
    fontSize: 15,
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  dot: {
    position: 'absolute',
    top: 40,
    right: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  Post: {
    position: 'absolute',
    top: 185,
    left: 107,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  Foll: {
    position: 'absolute',
    top: 185,
    left: 206,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  Pengikut: {
    position: 'absolute',
    top: 185,
    left: 290,
    fontSize: 21,
    fontWeight: 'bold',
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
    top: 210,
    left: 95,
    fontSize: 14,
    // fontWeight: '500',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  PP2: {
    position: 'absolute',
    top: 210,
    left: 190,
    fontSize: 14,
    // fontWeight: '500',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  PP3: {
    position: 'absolute',
    top: 210,
    left: 290,
    fontSize: 14,
    // fontWeight: '500',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    top: 240,
    left: 95,
  },
  button: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 3,
  },
  button2: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 3,
    position: 'absolute',
    left: 55,
    top: 115,
    zIndex: 1,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  buttonText2: {
    fontSize: 16,
    color: '#696969',
    position: 'absolute',
    top: 175,
    left: -55,
  },
  boxPG: {
    width: 450,
    height: 1000,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 0,
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 200,
    left: 5,
    top: 60,
  },
  box1: {
    width: 140,
    height: 200,
    backgroundColor: '#FF0000',
    marginRight: 1,
    marginBottom: 1,
    // position: 'absolute',
    // bottom: 145,
    // left: 3,
    zIndex: 1,
  },
  box2: {
    width: 140,
    height: 200,
    // backgroundColor: '#FFA500',
    marginRight: 1,
    // position: 'absolute',
    // bottom: 146,
    // left: 147,
    zIndex: 1,
  },
  box3: {
    width: 130,
    height: 200,
    // backgroundColor: '#FFFF00',
    marginRight: 1,
    // position: 'absolute',
    // bottom: 146,
    // left: 290,
    zIndex: 1,
  },
  box4: {
    width: 130,
    height: 200,
    // backgroundColor: '#FFFF00',
    marginRight: 1,
    zIndex: 1,
  },
  });

export default App;
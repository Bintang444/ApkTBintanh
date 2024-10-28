import { View, Text, Image, StyleSheet } from 'react-native';

import image1 from '../image/pngsd.jpeg'
import image2 from '../image/png2.jpeg'
import pic1 from '../image/gmbr11.jpeg'
import messe from '../image/mees-removebg-preview.png'
import proff1 from '../image/proff-removebg-preview.png'

const App = () => {
  return (
    <View style={styles.container}>
    <Image
        source={image1}
        style={{
          width: 110,
          height: 110,
          borderRadius: 100,
          position: 'absolute',
          bottom: 620,
          right: 235,
          zIndex: 1,
        }}
      />
    <Image
        source={image2}
        style={{
          width: 30,
          height: 30,
          borderRadius: 20,
          position: 'absolute',
          bottom: 540,
          right: 305,
          zIndex: 2,
        }}
      />
    <Image
        source={messe}
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          position: 'absolute',
          bottom: 360,
          right: 290,
          zIndex: 1,
        }}
      />
    <Image
        source={proff1}
        style={{
          width: 30,
          height: 30,
          borderRadius: 10,
          position: 'absolute',
          bottom: 356,
          right: 113,
          zIndex: 1,
        }}
      />
      <View style={styles.boxPG} />
      <Image source={pic1} style={styles.box1} />
      <Text style={styles.nama}>Bintang Eka Wardhana Syarifudin</Text>
      <Text style={styles.pengikut}>400 Rb pengikut • 803 mengikuti</Text>
      <Text style={styles.pengikut2}>Diikuti oleh Refi Ramdani dan 400 rb lainnya</Text>
      <Text style={styles.huruf}>i</Text>
      <Text style={styles.lingkaran}></Text>
      <Text style={styles.pengikut3}>Profil • Kreator Digital</Text>
      <View style={styles.boxBG} />
      <View style={styles.box1} />

      <View style={styles.tombol}>
        <Text style={styles.teksTombol}>Kirim Pesan</Text>
      </View>
      <View style={styles.tombo2}>
        <Text style={styles.teksTombo2}>Lihat Profil</Text>
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
    top: 165,
    left: 20,
    fontSize: 15,
    fontWeight: '900',
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  pengikut: {
    position: 'absolute',
    top: 183,
    left: 20,
    fontSize: 15,
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  pengikut2: {
    position: 'absolute',
    top: 210,
    left: 60,
    fontSize: 15,
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  huruf: {
    width: 35,
    height: 35,
    color:'#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
    position: 'absolute',
    right: 310,
    top: 235,
    zIndex: 1,
  },
  lingkaran: {
    width: 15,
    height: 15,
    backgroundColor: '#000000',
    borderRadius: 50,
    color:'#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
    position: 'absolute',
    right: 320,
    top: 240,
  },
  pengikut3: {
    position: 'absolute',
    top: 238,
    left: 45,
    fontSize: 14,
    color: '#000000',
    marginBottom: 100,
    textAlign: 'center',
  },
  boxBG: {
    width: 345,
    height: 120,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 265,
  },
  boxPG: {
    width: 345,
    height: 220,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 40,
  },
  box1: {
    width: 119,
    height: 119,
    borderRadius: 10,
    position: 'absolute',
    top: 265,
    left: 15,
    zIndex: 1,
  },
  teksTombol: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  tombol: {
    width: '45%',
    padding: 8,
    backgroundColor: '#0000FF',
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    top: 390,
    left: 18,
  },
  tombo2: {
    width: '45%',
    padding: 8,
    backgroundColor: '#A9A9A9',
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    top: 390,
    left: 188,
  },
  teksTombo2: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
  },
});

export default App;
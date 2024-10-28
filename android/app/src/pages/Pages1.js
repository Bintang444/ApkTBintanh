import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import PotoMac from '../image/m2.jpeg';

const Mac = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={PotoMac} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.nama}>MacBook Air M6</Text>
          <Text style={styles.harga}>Rp. 20.000.000</Text>
          <Text style={styles.lokasi}>Jakarta Barat</Text>
        </View>
        <TouchableOpacity style={styles.tombol}>
          <Text style={styles.tekstombol}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  card: {
    width: 230,
    padding: 15,
    backgroundColor: '#F3ECE2',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 170,
    resizeMode: 'contain',
    marginBottom: 12,
    borderRadius: 25,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 15,
  },
  nama: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 3,
    textAlign: 'left',
    paddingLeft: 7,
  },
  harga: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFA500',
    marginBottom: 5,
    textAlign: 'left',
    paddingLeft: 7,
  },
  lokasi: {
    fontSize: 15,
    color: 'black',
    marginBottom: 15,
    textAlign: 'left',
    paddingLeft: 7,
  },
  tombol: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#27C390',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    alignSelf: 'center',
  },
  tekstombol: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default Mac;
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LogoYT from '../image/LogoYT.jpg';
import Thumb1 from '../image/Thumb1.jpeg';
import Thumb2 from '../image/Thumb2.jpeg';
import Thumb3 from '../image/Thumb3.jpeg';
import Thumb4 from '../image/Thumb4.jpeg';
import Thumb5 from '../image/Thumb5.jpeg';
import Thumb6 from '../image/Thumb6.jpeg';
import Thumb7 from '../image/Thumb7.jpeg';
import Header from '../image/Banner.jpg';

const videoData = [
  {
    title: 'Adu Skill Para Viewer',
    stats: '17 rb x ditonton · 22 jam yang lalu',
    thumbnail: Thumb1,
  },
  {
    title: 'Perjuangan Kejar Bintang Musuh',
    stats: '18 rb x ditonton · 1 hari yang lalu',
    thumbnail: Thumb2,
  },
  {
    title: 'TH 14 vs TH 16 Max Bisa Rata Pakai Kombo Ini!!',
    stats: '8,8 rb x ditonton · 2 hari yang lalu',
    thumbnail: Thumb3,
  },
  {
    title: 'Hard War ! Musuh Sudah Full Bintang',
    stats: '25 rb x ditonton · 3 hari yang lalu',
    thumbnail: Thumb4,
  },
  {
    title: 'CWL Full Atraksi Fireball',
    stats: '26 rb x ditonton · 4 hari yang lalu',
    thumbnail: Thumb5,
  },
  {
    title: 'Ngasih Tutor War Kepada Viewers',
    stats: '21 rb x ditonton · 6 hari yang lalu',
    thumbnail: Thumb6,
  },
  {
    title: 'Fireball Super Goblin',
    stats: '26 rb x ditonton · 7 hari yang lalu',
    thumbnail: Thumb7,
  },
];

const FlexBox = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Image */}
      <Image source={Header} style={styles.headerImage} />

      {/* Profile Info (Image + Text beside it) */}
      <View style={styles.profileContainer}>
        {/* Profile Image */}
        <Image
          source={LogoYT}
          style={styles.profileImage}
        />

        {/* Profile Text (placed beside image) */}
        <View style={styles.profileTextContainer}>
          <Text style={styles.username}>Ciduk Warrior</Text>
          <Text style={styles.handle}>@cidukbeban</Text>
          <Text style={styles.subscribers}>
            575 rb subscriber · 1,5rb video
          </Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeText}>Subscribe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinText}>Gabung</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Menu */}
      <View style={styles.navMenu}>
        <TouchableOpacity>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.navText, styles.underline]}>Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>Short</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>Live</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>Playlist</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>Community</Text>
        </TouchableOpacity>
      </View>

      {/* Video Items */}
      {videoData.map((video, index) => (
        <View key={index} style={styles.videoItem}>
          <Image
            source={video.thumbnail}
            style={styles.videoThumbnail}
          />
          <View style={styles.videoInfo}>
            <Text style={styles.videoTitle}>{video.title}</Text>
            <Text style={styles.videoStats}>{video.stats}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: 340,
    height: 100,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  handle: {
    color: 'gray',
  },
  subscribers: {
    marginTop: 5,
    color: 'gray',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    marginTop: 10,
  },
  subscribeButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    alignSelf: 'flex-start',
  },
  subscribeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  joinButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  joinText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#fff', // Optional: background color
  },
  navText: {
    fontSize: 16,
    color: '#000', // Optional: text color
  },
  underline: {
    borderBottomWidth: 1, // Thickness of underline
    borderBottomColor: '#000', // Color of underline
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 1,
    paddingHorizontal: 0,
  },
  videoItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  videoThumbnail: {
    width: 150,
    height: 90,
    marginLeft: 17,
    borderRadius: 7,
  },
  videoInfo: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 20,
  },
  videoTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  videoStats: {
    color: 'gray',
    marginBottom: 30,
    marginLeft: 10,
  },
});

export default FlexBox;
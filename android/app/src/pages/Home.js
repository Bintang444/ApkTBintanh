import {View, Text, StyleSheet, Button} from 'react-native'

const Home = ({navigation}) => {
  return (
    <View style={styles.teks}>
    <Text>Home Screen</Text>
    <Button title="klik" onPress={() => navigation.navigate('Mac')}/>
    <Text>Home Screen</Text>
    <Button title="klik" onPress={() => navigation.navigate('YT')}/>
    <Text>Home Screen</Text>
    <Button title="klik" onPress={() => navigation.navigate('IG')}/>
    <Text>Home Screen</Text>
    <Button title="klik" onPress={() => navigation.navigate('FB')}/>
    <Text>Home Screen</Text>
    <Button title="klik" onPress={() => navigation.navigate('TIKTOK')}/>
    </View> 
  )
}

export default Home

const styles = StyleSheet.create({
  teks: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
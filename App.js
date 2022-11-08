import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import Modal from 'react-native-modal';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
  Button,
} from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://api.sketchfab.com/v3/search?type=models&q=${input}&user=sferagallery&archives_flavours=false`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [input]);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}> Contemporary Ceramic Library</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={setInput}
        value={input}
      />

      <FlatList
        data={data.results}
        renderItem={({ item }) => (
          <View>
            <View>
              <Image
                style={styles.image}
                source={{ uri: item.thumbnails.images[1].url }}
              />
              <Button title="Show more" onPress={toggleModal} />

              <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.text}>{item.name}</Text>

                  <Button title="Hide modal" onPress={toggleModal} />
                </View>
              </Modal>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.uid}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2471A3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
  image: {
    width: 400,
    height: 400,
  },
  input: {
    width: '100%',
    height: 44,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#e8e8e8',
  },
  text: {
    backgroundColor: '#fff',
    color: 'black',
  },
});

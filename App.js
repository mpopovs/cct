import { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  Dimensions

} from 'react-native';
import Popup from './components/Modal';




export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const url = `https://api.sketchfab.com/v3/search?type=models&q=${input}&user=sferagallery&archives_flavours=false`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
  }, [input]);

  const onPress = (item) => {
    setActiveItem(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={{width: 120, }}>
      <Image style={{width:111, height:111}} source={{
      uri: item.thumbnails.images[2].url
      }}/>
      </View>
    </TouchableOpacity>
  );
const sWcreen = Dimensions.get("window").width;

const Footer_Component = () => {
    return (
      <View style={{
        height: 25,
        width: "100%",
        backgroundColor: '#2471A3',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
 
        <Text style={{ fontSize: 12, color: 'white' }}> {'\u00A9'}sferagallery</Text>
 
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.view}>
    <Text style={styles.title}> Contemporary Ceramics Library</Text>
    
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={setInput}
        value={input}
      />
    
      <FlatList
        data={data}
        horizontal={false}
        numColumns={3}
        renderItem={({ item }) => (
    
    <TouchableOpacity onPress={() => onPress(item)}>
      
      <Image style={{width:130.9, height:130.9, }} source={{
      uri: item.thumbnails.images[2].url
      }}/>
      
    </TouchableOpacity>
  )}
        
        ListFooterComponent={Footer_Component}
        
      />
     
      <Popup
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        activeItem={activeItem}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#2471A3',
    marginTop: 35,
   marginBottom: 40,
  },
  view:{

 
     alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginTop: 6,
    marginLeft: 3
  },
  input: {
    width: '100%',
    height: 44,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#e8e8e8',
  },

  
  
});

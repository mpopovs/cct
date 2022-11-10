
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';


export default function Popup({modalVisible, setModalVisible, activeItem}) {
 
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          
            <Text style={styles.modalTextName}>{activeItem?.name}</Text>
            <Image
                style={styles.image}
                source={{ uri: activeItem?.thumbnails.images[1].url }}
              />
             
            <Text style={styles.modalText}>{activeItem?.description}</Text>
            
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    marginTop: 25,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    
    paddingtTop: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 2,
    padding: 10,
    margin: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
     marginTop: 10,
    textAlign: 'center',
  },
  modalTextName: {
    marginTop: 10,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
   image: {
    width: 300,
    height: 300,
  }
  
});
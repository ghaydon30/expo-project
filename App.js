import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  TextInput, 
  Text, 
  View, 
  Button, 
  Alert,
  ScrollView
} from 'react-native';

const App = () => {
  
  const [text, setText] = useState('');

  // alert the user input (`text` state's value)
  const alertMyText = () => {
    Alert.alert(text);
  }
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder="Type Something Here"
      />
      <Text style={styles.textInput}>You wrote: {text}</Text>
      <Button
        onPress={() => {
          alertMyText();
        }}
        title="Press Me"
      />
      <ScrollView>
        <Text style={{ fontSize: 110 }}>
          This text is so big! And so long! You have to scroll!
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '88%',
    borderWidth: 1,
    height: 50,
    padding: 10
  },
  textDisplay: {
    height: 50,
    lineHeight: 50
  },
});

export default App;

// COMMENT Old App
// const App = () => {
//   return (
//     // <View style={styles.container}>
//     <View>
//       <Text style={styles.blue}>Hello World!</Text>
//       <Text style={styles.bigRed}>How are you?</Text>
//       <Text style={[styles.blue, styles.bigRed]}>I'm feeling blue!</Text>
//       {/*
//       This is how you comment inside JSX!
//       \*/}
//       <View style={styles.box}></View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   blue: {
//     color: 'blue',
//     fontWeight: '600',
//   },
//   bigRed: {
//     color: 'red',
//     fontSize: 30,
//   },
//   box: {
//     width: 60,
//     height: 60,
//     backgroundColor: 'blue',
//   },
// });

// export default App;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NewTodo from './src/components/todo/newTodo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TO DO APP WITH REACT TYPESCRIPT</Text>
      <NewTodo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    
color: '#ffffff'
  }
});

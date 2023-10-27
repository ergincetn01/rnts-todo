import { StyleSheet, Text, View } from 'react-native';
import NewTodo from '../todo/newTodo';
import TodoScreen from '../todo';

export default function Main() {
  return (
    <View style={styles.container}>
      <TodoScreen/>
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

import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Dialog, Portal, PaperProvider } from 'react-native-paper';
import TodoList from './todoList';
import NewTodo from './newTodo';
import { useDispatch, useSelector } from 'react-redux';
import { resetTitle, setRandomId } from '../../store/todo';
import { RootState } from '../../store';

function TodoScreen() {
  const [visible, setVisible] = useState(false);
  const dispatch=useDispatch()

  const closeModal: any = () => {
    setVisible(false);
  };
  const openModal: any = () => {
    setVisible(true);
    dispatch(resetTitle())
    dispatch(setRandomId())
  };

  return (
    <PaperProvider>
      <View style={styles.main}>
        <View style={styles.headerContainer}>
           <View>
          <Text style={styles.title}>Todo List</Text>
        </View>
 <View style={styles.btnContainer}>
            <Pressable onPress={openModal} style={styles.pressable}>
              <Text style={styles.btnText}>+</Text>
            </Pressable>
            <Portal>
              <Dialog visible={visible} onDismiss={closeModal}>
                <Dialog.Title>
                  <Text>Add new todo</Text>
                </Dialog.Title>
                <Dialog.Content>
                  <NewTodo onDismiss={closeModal} />
                </Dialog.Content>
              </Dialog>
            </Portal>
          </View>
        </View>
       
       
  
 <View style={styles.bottomContainer}>
          <View style={styles.listContainer}>
            <TodoList />
          </View>
        
        </View>
       
       
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#20E0E0',
    flexDirection: "column",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: '12%',
    marginHorizontal: 10
  },
  btnContainer: { justifyContent: 'flex-end', alignItems: 'flex-end' },
  btnText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 40,
    justifyContent: 'center',
  },
  listContainer: { margin: 10 },
  pressable: {
    borderRadius: 40,
    alignItems: 'center',
    height: 80,
    width: 80,
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  title: { textAlign: 'center', fontSize: 30, fontWeight: "bold" },
  todoButton: {
    padding: 10,
    width: '30%',
    borderWidth: 2,
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
  },
  bottomContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0E0D0D',
    marginTop: '5%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
});

export default TodoScreen;

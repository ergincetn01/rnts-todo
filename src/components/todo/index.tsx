import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Dialog, Portal, PaperProvider } from 'react-native-paper';
import TodoList from './todoList';
import NewTodo from './newTodo';
import { useDispatch } from 'react-redux';
import { resetTitle, setRandomId } from '../../store/todo';
import { LinearGradient } from 'expo-linear-gradient';

function TodoScreen() {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const closeModal: any = () => {
    setVisible(false);
  };
  const openModal: any = () => {
    setVisible(true);
    dispatch(resetTitle());
    dispatch(setRandomId());
  };

  return (
    <PaperProvider>
      <View style={styles.main}>
        {/* <View style={styles.headerContainer}>
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
        </View> */}
        <LinearGradient colors={["#662D8C","#ED1E79"]} style={styles.mainLinear}>
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

        </LinearGradient>


        <View>
          <LinearGradient
            style={styles.bottomContainer}
            colors={['black', '#1737eb', 'transparent']}
          >
            <View style={styles.listContainer}>
              <TodoList />
            </View>
          </LinearGradient>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
  },
  mainLinear: { flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
height:"20%",
  width: "100%",
  paddingLeft: 20,
  paddingRight: 10
}, 
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    backgroundColor: '#18dd72',
  },
  title: { textAlign: 'center', fontSize: 30, color: "#ffffff", fontWeight: 'bold' },
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
    marginTop: '-5%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});

export default TodoScreen;

import { useState } from 'react';
import {
  View,
  Button,
  Pressable,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  addNewTodo,
  resetTitle,
  setRandomId,
  setTodoTitle,
} from '../../store/todo';

function NewTodo({ onDismiss }: { onDismiss: any }) {
  const dispatch = useDispatch();

  const currentTitle = useSelector((state: RootState) => state.todo.title);
  const [title, setTitle] = useState(currentTitle);
  const handleTitle: any = (text: any) => {
    dispatch(setTodoTitle(text));
  };

  const handleAdd: any = () => {
    dispatch(addNewTodo());
    onDismiss();
    setRandomId();
    resetTitle();
//     setTitle('');
    
  };

  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleTitle}
          placeholder='Add new todo...'
        />
      </View>
      <View style={{ height: 20 }}></View>
      <View style={styles.btnContainer}>
        <Pressable
          disabled={title === '' ? true : false}
          onPress={title !== '' ? () => handleAdd() : null}
          style={styles.save}
        >
          <Text style={styles.btnText}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    borderColor: 'black',
  },
  save: {
    backgroundColor: 'blue',
    width: 80,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: { color: '#ffffff' },
  btnContainer: { justifyContent: 'flex-end', alignItems: 'flex-end' },
});

export default NewTodo;

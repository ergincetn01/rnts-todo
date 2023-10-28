import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable
} from 'react-native';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../../store/todo';
function TodoList() {

  const dispatch=useDispatch()

  const currentTodos = useSelector((state: RootState) => state.todo.todos);
  const currentID = useSelector((state: RootState) => state.todo.id);

  const handleDelete: any=(item:any)=> {
    dispatch(deleteTodo(item))
  }

  return (
<View>
  {currentTodos.length ===0 ? <Text style={styles.empty}>No todos added!</Text> :
   <FlatList
      style={styles.list}
      data={currentTodos}
      renderItem={({ item }) => (
        <View style={styles.itemContainer} key={currentID}>
          <Text style={styles.title}>{item.title} </Text>
          <Pressable onPress={()=>handleDelete(item.id)} style={styles.deleteButton}>
            <Text  style={styles.deleteText} >X</Text> 
            </Pressable>
        </View>
      )}
    />
  
  }
     
</View>
    

  );
}
const styles = StyleSheet.create({
  empty: {color: "white", fontSize: 25, textAlign: "center", marginTop: 20},
  list: { },
  itemContainer: { backgroundColor: 'green', flexDirection: "row", alignItems: "center", borderRadius: 12,
paddingLeft: 10, marginVertical: 10, height: 50, justifyContent:"space-between" },
  title: { color: 'white', fontSize: 20 },
  deleteButton: {backgroundColor: "red", width: 50, height: 50, alignItems: "center", justifyContent: "center", borderRadius: 12},
  deleteText: {color: "white", fontSize: 25, fontWeight: "bold"}
});

export default TodoList;

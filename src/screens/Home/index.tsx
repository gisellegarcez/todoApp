import { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
  Alert,
} from 'react-native';
import EmptyList from './components/EmptyList';
import { Task } from './components/Task';
import { styles } from './styles';

type task = {
  description: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<task[]>([]);
  const [taskDescription, setTaskDescription] = useState('');

  const handleTaskAdd = () => {
    const filtro = tasks.filter((t) => t.description == taskDescription);
    if (filtro.length > 0) {
      return Alert.alert(
        'tarefa existe',
        'Já existe uma tarefa na lista com esta descrição.',
      );
    }
    if (!!taskDescription) {
      setTasks((prevState) => [
        { description: taskDescription, completed: false },
        ...prevState,
      ]);
      setTaskDescription('');
    }
  };

  const handleTaskRemove = (task: task) => {
    Alert.alert('Remover', `Remover a tarefa ${task.description}`, [
      {
        text: 'Sim',
        onPress: () => setTasks((prevState) => prevState.filter((t) => t !== task)),
      },
      { text: 'Não', style: 'cancel' },
    ]);
  };

  const handleTaskSelect = (task: task) => {
    const newTask: task = { description: task.description, completed: !task.completed };
    // para as incompletas ficarem em cima
    if (task.completed) {
      setTasks((prevState) => [newTask, ...prevState]);
    } else {
      setTasks((prevState) => [...prevState, newTask]);
    }
    setTasks((prevState) => prevState.filter((t) => t !== task));
  };

  return (
    <>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../../assets/Logo.png')} />
      </View>

      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={'#808080'}
            onChangeText={setTaskDescription}
            value={taskDescription}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.status}>
          <View style={styles.criadas}>
            <Text style={[{ color: '#4EA8DE' }, styles.label]}>Criadas</Text>
            <Text style={styles.badge}>{tasks.length}</Text>
          </View>
          <View style={styles.concluidas}>
            <Text style={[{ color: '#8284FA' }, styles.label]}>Concluídas</Text>
            <Text style={styles.badge}>
              {tasks.filter((t) => t.completed == true).length}
            </Text>
          </View>
        </View>

        <View style={styles.list}>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.description}
            renderItem={({ item }) => (
              <Task
                key={item.description}
                description={item.description}
                onRemove={() => handleTaskRemove(item)}
                onSelect={() => handleTaskSelect(item)}
                completed={item.completed}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <EmptyList
                title='Você ainda não tem tarefas cadastradas'
                description='Crie tarefas e organize seus itens a fazer'
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

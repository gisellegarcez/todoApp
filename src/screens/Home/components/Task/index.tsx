import { Image, Text, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { styles } from './styles';

interface TaskProps {
  description: string;
  onRemove: () => void;
  onSelect: () => void;
  completed?: boolean | false;
}

export function Task({ description, onRemove, onSelect, completed }: TaskProps) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={18}
        innerIconStyle={{ borderWidth: 2 }}
        fillColor={completed ? '#5E60CE' : '#4EA8DE'}
        onPress={onSelect}
      />
      <Text
        style={[
          {
            color: completed ? '#808080' : '#F2F2F2',
          },
          styles.description,
          completed && styles.decorationText,
        ]}
      >
        {description}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image style={styles.trash} source={require('../../../../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  );
}

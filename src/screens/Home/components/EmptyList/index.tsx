import { View, Image, Text } from 'react-native';
import { styles } from './styles';
interface EmptyListProps {
  title?: string;
  description?: string;
}
export default function EmptyList({ title, description }: EmptyListProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgClip}
        source={require('../../../../../assets/Clipboard.png')}
      />
      <Text style={[styles.emptyTitle, styles.emptyText]}>{title}</Text>
      <Text style={styles.emptyText}>{description}</Text>
    </View>
  );
}

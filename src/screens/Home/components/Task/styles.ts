import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 64,
    backgroundColor: '#262626',
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: '#808080',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 16,
    paddingRight: 8,
  },
  description: {
    flex: 1,
    fontSize: 16,
  },
  decorationText: {
    textDecorationLine: 'line-through',
    textDecorationColor: '#808080',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
  },
  trash: {
    width: 12.5,
    height: 14,
  },
  checkbox: {
    alignSelf: 'center',
    borderRadius: 8,
  },
});

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flex: 0.15,
    backgroundColor: '#0A0A0A',
    paddingTop: 64,
    alignItems: 'center',
  },
  container: {
    flex: 0.85,
    backgroundColor: '#1E1E1E',
  },
  logo: {
    width: 110,
    height: 32,
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#F2F2F2',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    height: 52,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 42,
    marginTop: -24,
    paddingLeft: 16,
    paddingRight: 16,
  },
  status: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'space-between',
  },
  criadas: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  concluidas: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  badge: {
    color: '#D9D9D9',
    backgroundColor: '#333333',
    fontWeight: 'bold',
    fontSize: 12,
    width: 25,
    paddingTop: 2,
    borderRadius: 12,
    marginLeft: 4,
    textAlign: 'center',
  },
  list: {
    margin: 16,
  },
});

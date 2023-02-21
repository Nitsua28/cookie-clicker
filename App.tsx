import { StyleSheet, Text, View } from 'react-native';
import CookieClicker from './components/cookie-clicker';

export default function App() {
  return (
    <View>
      <CookieClicker/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

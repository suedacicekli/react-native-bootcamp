import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Card from './components/Card';

function App(options) {
  return (
    <SafeAreaView style={styles.container}>
      <Card
        title="Sezai Karakoç"
        text=" İçimde ölen öldü, kalan kaldı, ben aynı."
      />
      <Card
        title="Sezai Karakoç"
        text="Umutsuzluk yok! Gün gelir.Gül de açar. Bülbül de öter."
      />
      <Card
        title="Sezai Karakoç"
        text="Ben aşkı göğsümde kurşun gibi taşıyorum."
      />
      <Card title="Şairler" text="Kuşlar uçar senin gönlünü taklit için." />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;

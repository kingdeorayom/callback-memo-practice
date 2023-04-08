import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Summary from './components/Summary';
import ValueButton from './components/ValueButton';
import ThemeButton from './components/ThemeButton';
import Separator from './components/Separator';
import CountView from './components/CountView';

const App = () => {

  const [count, setCount] = useState(0)
  const [color, setColor] = useState('darkblue')

  // const increment = () => setCount(prev => prev + 1)

  const increment = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  const decrement = useCallback(() => {
    // if (count <= 0) return
    // else setCount(prev => prev - 1)
    setCount(prev => prev - 1)
  }, [])

  const changeColor = useCallback(() => {
    setColor(color === 'crimson' ? 'darkblue' : 'crimson')
  }, [color])

  return (
    <View style={styles.container}>

      <CountView count={count} />

      <ValueButton
        increment={increment}
        decrement={decrement}
        color={color}
      />

      <Separator />

      <ThemeButton
        changeColor={changeColor}
        color={color}
      />

      <Summary color={color} />

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
  }

});

export default App
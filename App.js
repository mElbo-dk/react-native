import React from 'react'
import { StyleSheet, Text, View , Button } from 'react-native'
import { useState } from 'react'

export default function App() {
  const [outputText, setOutputText] = useState('Hi welcome to reactNative')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title = 'change text' onPress={ () => setOutputText('Now we are started')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

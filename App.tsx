import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Button from './src/Components/Button';
import Row from './src/Components/Row';
import {appState} from './src/State';

function App() {
return (
    <View style={styles.container}>
      <View style={styles.outputContainer}>
        <Text style={styles.text}>{appState.output}</Text>
      </View>
      <View style={styles.keyboardContainer}>
        <Row>
          <Button variant="secondary" children={'C'} />
          <Button variant="secondary" children={'+/-'} />
          <Button variant="secondary" children={'%'} />
          <Button variant="primary" children={'/'} />
        </Row>
        <Row>
          <Button variant="tertiary" children={'7'} />
          <Button variant="tertiary" children={'8'} />
          <Button variant="tertiary" children={'9'} />
          <Button variant="primary" children={'x'} />
        </Row>
        <Row>
          <Button variant="tertiary" children={'4'} />
          <Button variant="tertiary" children={'5'} />
          <Button variant="tertiary" children={'6'} />
          <Button variant="primary" children={'-'} />
        </Row>
        <Row>
          <Button variant="tertiary" children={'1'} />
          <Button variant="tertiary" children={'2'} />
          <Button variant="tertiary" children={'3'} />
          <Button variant="primary" children={'+'} />
        </Row>
        <Row>
          <Button variant="primary" size="large" children={'0'} />
          <Button variant="primary" children={'.'} />
          <Button variant="primary" children={'='} />
        </Row>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#202020',
  },
  outputContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
  keyboardContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
  },
  text: {fontSize: 60, color: '#fff'},
});

export default App;

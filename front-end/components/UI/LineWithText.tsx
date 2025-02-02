import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LineWithText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.text}>or</Text>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBlockStart: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default LineWithText;

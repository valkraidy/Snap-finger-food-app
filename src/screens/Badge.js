// Badge.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Badge({ count }) {
  return (
    count > 0 ? (
      <View style={styles.badge}>
        <Text style={styles.count}>{count}</Text>
      </View>
    ) : null
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: -10,
    top: -5,
    backgroundColor: '#E3242B',
    borderRadius: 30,
    padding: 5,
    minWidth: 20,
    height:25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    color: 'white',
    fontWeight: '300',
     top: -3,
  },
});

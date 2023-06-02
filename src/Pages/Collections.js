import * as React from 'react';
import { View, Text } from 'react-native';

// Идея в том что есть страница с общей беблиотекой и есть страница где находятся уже собранные в группы коллекции мест согласно категориям . 

function Collections() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Collections Screen</Text>
      </View>
    );
  }

  export default Collections;
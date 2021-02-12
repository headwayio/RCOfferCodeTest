/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar, StyleSheet,
  Text,
  TouchableOpacity, View
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Purchases from 'react-native-purchases';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>RevenueCat Offer Code Test</Text>
              <Text style={styles.sectionDescription}>
                Tap the <Text style={styles.highlight}>Open Offer Code Sheet</Text> to trigger the iOS method
                
              </Text>
              <Text style={styles.code}>Purchases.shared.presentCodeRedemptionSheet()</Text>
              <View style={styles.button}>
                <TouchableOpacity onPress={() => Purchases.presentCodeRedemptionSheet()}>
                  <Text style={styles.buttonLabel}>Open Offer Code Sheet</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  code: {
    backgroundColor: 'lightgray',
    color: Colors.black,
    fontStyle: 'italic',
    fontSize: 12,
    fontWeight: '500',
    paddingVertical: 15,
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.black,
    minHeight: 65,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32
  },
  buttonLabel: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 20
  }, 
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

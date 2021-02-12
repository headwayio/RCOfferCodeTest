/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Purchases from 'react-native-purchases';

Purchases.setDebugLogsEnabled(true);
Purchases.setup('ADD_YOUR_API_KEY_HERE');

AppRegistry.registerComponent(appName, () => App);

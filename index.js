
/**
|--------------------------------------------------
| Fixes odd babel bug on android
|--------------------------------------------------
*/
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');
/**
|--------------------------------------------------
*/


let __DEV__ = false;
let SHOW_AREAS = false;

import { AppRegistry } from "react-native";
import App from "./app/App";
import StorybookUI from "./storybook";
import { name as appName } from "./app/App.json";

AppRegistry.registerComponent(appName, () => (__DEV__ ? StorybookUI : App));

export  {SHOW_AREAS}

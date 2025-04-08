// NPM Packages
import { registerRootComponent } from 'expo';

// Custom Modules
import App from './src/components/App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

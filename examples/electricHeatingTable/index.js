import { AppRegistry } from 'react-native-web';
import MainLayout from './src/main';

AppRegistry.registerComponent('TYRCTApp', () => MainLayout);
AppRegistry.runApplication('TYRCTApp', {
    initialProps: {},
    rootTag: document.getElementById('root'),
});
